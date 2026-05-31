import { Vector3, Color4, DirectionalLight, HemisphericLight } from '@babylonjs/core';

vi.mock('../text/textRenderer', () => ({
    TextManager: vi.fn().mockImplementation(function (this: any) {
        this.init = vi.fn().mockResolvedValue(undefined);
        this.addParagraph = vi.fn();
        this.attachToScene = vi.fn(() => vi.fn());
        this.dispose = vi.fn();
        this.renderer = { parent: null, addParagraph: vi.fn() };
    }),
}));

vi.mock('../xr', () => ({
    PlaneDetectionManager: vi.fn(),
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
            getChildren: () => [],
        },
        texture: { dispose: vi.fn() },
        rect: {
            background: options.bgColor,
            color: options.borderColor,
            dispose: vi.fn(),
        },
    })),
}));

import { XrLightShadowsDemo } from './xrLightShadows';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

describe('XrLightShadowsDemo', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];
    let goBack: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
        scene.clearColor = new Color4(0.1, 0.1, 0.1, 1);
        goBack = vi.fn();

        scene.metadata = {
            goBack,
            xr: {},
            xrAnchors: null,
            planeDetectionManager: {
                detectedPlanes: [],
                onPlaneAdded: { add: vi.fn(() => null), remove: vi.fn() },
            },
        };
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    it('constructs without errors', () => {
        expect(() => new XrLightShadowsDemo(scene)).not.toThrow();
    });

    it('changes scene clearColor to transparent', () => {
        new XrLightShadowsDemo(scene);
        expect(scene.clearColor.a).toBe(0);
    });

    it('creates directional and hemispheric lights', () => {
        new XrLightShadowsDemo(scene);
        const dirLight = scene.getLightByName('ls_directional');
        const hemiLight = scene.getLightByName('ls_hemispheric');
        expect(dirLight).toBeDefined();
        expect(hemiLight).toBeDefined();
    });

    it('creates a shadow-casting cube', () => {
        new XrLightShadowsDemo(scene);
        const cube = scene.getMeshByName('ls_cube');
        expect(cube).toBeDefined();
        expect(cube!.receiveShadows).toBe(true);
    });

    it('disables existing home lights', () => {
        const homeDir = new DirectionalLight('directionalLight', new Vector3(0, 1, 0), scene);
        const homeHemi = new HemisphericLight('hemisphericLight', new Vector3(0, 1, 0), scene);

        new XrLightShadowsDemo(scene);

        expect(homeDir.isEnabled()).toBe(false);
        expect(homeHemi.isEnabled()).toBe(false);
    });

    it('teardown() restores the previous clearColor', () => {
        const originalColor = scene.clearColor.clone();
        const demo = new XrLightShadowsDemo(scene);
        demo.teardown();
        expect(scene.clearColor.equals(originalColor)).toBe(true);
    });

    it('teardown() re-enables home lights', () => {
        const homeDir = new DirectionalLight('directionalLight', new Vector3(0, 1, 0), scene);
        const homeHemi = new HemisphericLight('hemisphericLight', new Vector3(0, 1, 0), scene);

        const demo = new XrLightShadowsDemo(scene);
        demo.teardown();

        expect(homeDir.isEnabled()).toBe(true);
        expect(homeHemi.isEnabled()).toBe(true);
    });

    it('teardown() removes demo-specific lights', () => {
        const demo = new XrLightShadowsDemo(scene);
        demo.teardown();

        const demoLights = scene.lights.filter((l: any) => l.name.startsWith('ls_'));
        expect(demoLights.length).toBe(0);
    });

    it('teardown() removes demo-specific meshes', () => {
        const demo = new XrLightShadowsDemo(scene);
        demo.teardown();

        const demoMeshes = scene.meshes.filter((m: any) => m.name.startsWith('ls_'));
        expect(demoMeshes.length).toBe(0);
    });
});
