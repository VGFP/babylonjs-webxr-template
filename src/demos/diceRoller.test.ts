import { Quaternion, Vector3 } from '@babylonjs/core';

import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

vi.mock('../text/textRenderer', () => ({
    TextManager: vi.fn().mockImplementation(function (this: any) {
        this.init = vi.fn().mockResolvedValue(undefined);
        this.addParagraph = vi.fn();
        this.attachToScene = vi.fn(() => vi.fn());
        this.dispose = vi.fn();
        this.renderer = { addParagraph: vi.fn(), clearParagraphs: vi.fn() };
    }),
}));

vi.mock('../core/uiButton', () => ({
    createUiButton: vi.fn().mockImplementation((_scene: any, options: any) => ({
        plane: {
            name: options.name,
            position: options.position,
            parent: options.parent ?? null,
            actionManager: options.onClick ? { actions: [] } : null,
            dispose: vi.fn(),
            receiveShadows: false,
            getChildMeshes: () => [],
            getAbsolutePosition: () => options.position ?? Vector3.Zero(),
            isEnabled: () => true,
        },
        texture: { dispose: vi.fn() },
        rect: {
            background: options.bgColor,
            color: options.borderColor,
            dispose: vi.fn(),
        },
    })),
}));

import { ALL_DICE_TYPES, DICE_SIDES, buildDieGeometry, findUpFaceIndex, rotationAligningFaceUp } from './diceMeshes';
import { DiceRollerDemo } from './diceRoller';

describe('diceMeshes', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    describe.each(ALL_DICE_TYPES)('%s geometry', (type) => {
        it(`builds a mesh with ${DICE_SIDES[type]} unique face normals`, () => {
            const { mesh, faces } = buildDieGeometry(scene, type, 0.05);
            expect(mesh).toBeDefined();
            expect(faces.length).toBe(DICE_SIDES[type]);
            for (const f of faces) {
                expect(f.value).toBeGreaterThanOrEqual(1);
                expect(f.value).toBeLessThanOrEqual(DICE_SIDES[type]);
                expect(f.normal.length()).toBeCloseTo(1, 5);
            }
            mesh.dispose();
        });
    });

    it('findUpFaceIndex returns an in-range index', () => {
        const { mesh, faces } = buildDieGeometry(scene, 'd20', 0.05);
        const rotation = Quaternion.Identity();
        const idx = findUpFaceIndex(faces, rotation);
        expect(idx).toBeGreaterThanOrEqual(0);
        expect(idx).toBeLessThan(faces.length);
        mesh.dispose();
    });

    it('rotationAligningFaceUp produces a rotation that points the chosen face up', () => {
        const { mesh, faces } = buildDieGeometry(scene, 'd6', 0.05);
        const faceIdx = 0;
        const rotation = rotationAligningFaceUp(faces, faceIdx);
        const upIdx = findUpFaceIndex(faces, rotation);
        expect(upIdx).toBe(faceIdx);
        mesh.dispose();
    });
});

describe('DiceRollerDemo', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
        scene.metadata = { goBack: vi.fn(), xr: {} };
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    it('constructs without errors', () => {
        expect(() => new DiceRollerDemo(scene)).not.toThrow();
    });

    it('sets scene clearColor to transparent', () => {
        new DiceRollerDemo(scene);
        expect(scene.clearColor.a).toBe(0);
    });

    it('teardown restores the previous clearColor', () => {
        const original = scene.clearColor.clone();
        const demo = new DiceRollerDemo(scene);
        demo.teardown();
        expect(scene.clearColor.equals(original)).toBe(true);
    });

    it('registers a "dice_light" hemispheric light', () => {
        new DiceRollerDemo(scene);
        const light = scene.getLightByName('dice_light');
        expect(light).toBeDefined();
    });

    it('creates a panel root and tray root', () => {
        new DiceRollerDemo(scene);
        const panel = scene.getTransformNodeByName('dice_panel_root');
        const tray = scene.getTransformNodeByName('dice_tray_root');
        expect(panel).toBeDefined();
        expect(tray).toBeDefined();
    });
});
