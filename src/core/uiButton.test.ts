import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { createUiButton } from './uiButton';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

vi.mock('@babylonjs/gui/2D/advancedDynamicTexture', () => ({
    AdvancedDynamicTexture: {
        CreateForMesh: vi.fn(() => ({
            background: '',
            addControl: vi.fn(),
            dispose: vi.fn(),
        })),
    },
}));

vi.mock('@babylonjs/gui/2D/controls/rectangle', () => ({
    Rectangle: vi.fn().mockImplementation(function (this: any, name: string) {
        this.name = name;
        this.width = '1';
        this.height = '1';
        this.cornerRadius = 25;
        this.thickness = 8;
        this.color = '';
        this.background = '';
        this.isPointerBlocker = false;
        this.getParent = vi.fn(() => ({}));
        this.dispose = vi.fn();
        return this;
    }),
}));

describe('createUiButton', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    it('creates a plane mesh with correct position', () => {
        const pos = new Vector3(1, 2, 3);
        const result = createUiButton(scene, {
            name: 'test',
            width: 0.5,
            height: 0.3,
            position: pos,
            bgColor: '#ff0000',
            borderColor: '#000000',
        });

        expect(result.plane).toBeDefined();
        expect(result.plane.position.x).toBe(1);
        expect(result.plane.position.y).toBe(2);
        expect(result.plane.position.z).toBe(3);
    });

    it('creates a GUI rectangle with correct styling', () => {
        const result = createUiButton(scene, {
            name: 'test',
            width: 0.5,
            height: 0.3,
            position: Vector3.Zero(),
            bgColor: '#aabbcc',
            borderColor: '#ddeeff',
            cornerRadius: 15,
            borderThickness: 4,
        });

        expect(result.rect).toBeDefined();
        expect(result.rect.cornerRadius).toBe(15);
        expect(result.rect.thickness).toBe(4);
        expect(result.rect.background).toBe('#aabbcc');
        expect(result.rect.color).toBe('#ddeeff');
    });

    it('sets parent when provided', () => {
        const parent = new TransformNode('parent', scene);
        const result = createUiButton(scene, {
            name: 'test',
            width: 0.5,
            height: 0.3,
            position: Vector3.Zero(),
            bgColor: '#000',
            borderColor: '#fff',
            parent,
        });

        expect(result.plane.parent).toBe(parent);
    });

    it('creates ActionManager with click handler when onClick is provided', () => {
        const onClick = vi.fn();
        const result = createUiButton(scene, {
            name: 'test',
            width: 0.5,
            height: 0.3,
            position: Vector3.Zero(),
            bgColor: '#000',
            borderColor: '#fff',
            onClick,
        });

        expect(result.plane.actionManager).toBeDefined();
        expect(result.plane.actionManager!.actions.length).toBe(1);
    });

    it('does NOT create ActionManager when onClick is omitted', () => {
        const result = createUiButton(scene, {
            name: 'test',
            width: 0.5,
            height: 0.3,
            position: Vector3.Zero(),
            bgColor: '#000',
            borderColor: '#fff',
        });

        expect(result.plane.actionManager).toBeNull();
    });

    it('creates a texture via CreateForMesh', () => {
        const result = createUiButton(scene, {
            name: 'test',
            width: 0.5,
            height: 0.3,
            position: Vector3.Zero(),
            bgColor: '#000',
            borderColor: '#fff',
        });

        expect(result.texture).toBeDefined();
    });

    it('creates a rect with full width and height', () => {
        const result = createUiButton(scene, {
            name: 'test',
            width: 0.5,
            height: 0.3,
            position: Vector3.Zero(),
            bgColor: '#000',
            borderColor: '#fff',
        });

        expect(result.rect.width.toString()).toContain('1');
        expect(result.rect.height.toString()).toContain('1');
    });
});
