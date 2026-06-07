import { Vector3, Color4, DirectionalLight, HemisphericLight } from '@babylonjs/core';

vi.mock('../text/textRenderer', () => ({
    TextManager: vi.fn().mockImplementation(function (this: any) {
        this.init = vi.fn().mockResolvedValue(undefined);
        this.addParagraph = vi.fn();
        this.attachToScene = vi.fn(() => vi.fn());
        this.dispose = vi.fn();
        this.renderer = { parent: null, addParagraph: vi.fn(), clearParagraphs: vi.fn() };
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

const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: vi.fn((key: string) => store[key] ?? null),
        setItem: vi.fn((key: string, value: string) => {
            store[key] = value;
        }),
        removeItem: vi.fn((key: string) => {
            delete store[key];
        }),
        clear: vi.fn(() => {
            store = {};
        }),
    };
})();

vi.stubGlobal('localStorage', localStorageMock);

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
                onPlaneUpdated: { add: vi.fn(() => null), remove: vi.fn() },
                findFloorReference: vi.fn(() => null),
            },
        };
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
        localStorageMock.clear();
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

    describe('point light management', () => {
        it('adding a point light disables default lighting', () => {
            const demo = new XrLightShadowsDemo(scene);
            const dirLight = scene.getLightByName('ls_directional');
            const hemiLight = scene.getLightByName('ls_hemispheric');

            expect(dirLight!.isEnabled()).toBe(true);
            expect(hemiLight!.isEnabled()).toBe(true);

            (demo as any)._addPointLight();

            expect(dirLight!.isEnabled()).toBe(false);
            expect(hemiLight!.isEnabled()).toBe(false);
            demo.teardown();
        });

        it('only one point light can exist at a time', () => {
            const demo = new XrLightShadowsDemo(scene);

            (demo as any)._addPointLight(new Vector3(1, 2, 3));
            expect(scene.lights.filter((l: any) => l.name === 'ls_pointLight').length).toBe(1);

            (demo as any)._addPointLight(new Vector3(4, 5, 6));
            expect(scene.lights.filter((l: any) => l.name === 'ls_pointLight').length).toBe(1);
            demo.teardown();
        });

        it('deleting the last point light re-enables default lighting', () => {
            const demo = new XrLightShadowsDemo(scene);
            const dirLight = scene.getLightByName('ls_directional');
            const hemiLight = scene.getLightByName('ls_hemispheric');

            (demo as any)._addPointLight();
            expect(dirLight!.isEnabled()).toBe(false);

            (demo as any)._deleteLastPointLight();
            expect(dirLight!.isEnabled()).toBe(true);
            expect(hemiLight!.isEnabled()).toBe(true);
            demo.teardown();
        });

        it('toggle point light creates a light when none exists', () => {
            const demo = new XrLightShadowsDemo(scene);
            const dirLight = scene.getLightByName('ls_directional');

            expect(scene.lights.filter((l: any) => l.name === 'ls_pointLight').length).toBe(0);
            expect(dirLight!.isEnabled()).toBe(true);

            (demo as any)._togglePointLight();

            expect(scene.lights.filter((l: any) => l.name === 'ls_pointLight').length).toBe(1);
            expect(dirLight!.isEnabled()).toBe(false);
            demo.teardown();
        });

        it('toggle point light deletes the light when one exists', () => {
            const demo = new XrLightShadowsDemo(scene);
            const dirLight = scene.getLightByName('ls_directional');

            (demo as any)._togglePointLight();
            expect(scene.lights.filter((l: any) => l.name === 'ls_pointLight').length).toBe(1);
            expect(dirLight!.isEnabled()).toBe(false);

            (demo as any)._togglePointLight();
            expect(scene.lights.filter((l: any) => l.name === 'ls_pointLight').length).toBe(0);
            expect(dirLight!.isEnabled()).toBe(true);
            demo.teardown();
        });
    });

    describe('save/load state', () => {
        it('save stores world coordinates directly', () => {
            const demo = new XrLightShadowsDemo(scene);
            (demo as any)._addPointLight(new Vector3(1.5, 2.0, -3.0));

            const data = (demo as any)._buildStateData();
            expect(data.pointsWorld).toHaveLength(1);
            expect(data.pointsWorld[0].x).toBeCloseTo(1.5);
            expect(data.pointsWorld[0].y).toBeCloseTo(2.0);
            expect(data.pointsWorld[0].z).toBeCloseTo(-3.0);
            expect(data.schemaVersion).toBe(6);
            demo.teardown();
        });

        it('save then load preserves point light position', () => {
            const demo1 = new XrLightShadowsDemo(scene);
            (demo1 as any)._addPointLight(new Vector3(1.5, 2.0, -3.0));
            const savedData = (demo1 as any)._buildStateData();
            demo1.teardown();

            const demo2 = new XrLightShadowsDemo(scene);
            (demo2 as any)._loadFromJson(savedData);

            const createdLights = (demo2 as any)._createdPointLights as any[];
            expect(createdLights.length).toBe(1);
            const anchor = createdLights[0].anchor;
            const pos = anchor.getAbsolutePosition();
            expect(pos.x).toBeCloseTo(1.5);
            expect(pos.y).toBeCloseTo(2.0);
            expect(pos.z).toBeCloseTo(-3.0);
            demo2.teardown();
        });

        it('loading state with no saved lights leaves demo in default state', () => {
            const demo = new XrLightShadowsDemo(scene);
            (demo as any)._loadFromJson({ points: [], schemaVersion: 4 });

            expect(scene.lights.filter((l: any) => l.name === 'ls_pointLight').length).toBe(0);
            demo.teardown();
        });

        it('loading old format (pointsWorld) still works', () => {
            const demo = new XrLightShadowsDemo(scene);
            (demo as any)._loadFromJson({
                pointsWorld: [{ x: 0.5, y: 1.5, z: -1.0 }],
                schemaVersion: 3,
            });

            const pointLights = scene.lights.filter((l: any) => l.name === 'ls_pointLight');
            expect(pointLights.length).toBe(1);
            demo.teardown();
        });

        it('teardown saves to localStorage', () => {
            const demo = new XrLightShadowsDemo(scene);
            (demo as any)._addPointLight(new Vector3(1, 2, 3));
            demo.teardown();

            const stored = localStorage.getItem('xr_lightShadows_state');
            expect(stored).toBeTruthy();
            const data = JSON.parse(stored!);
            expect(data.pointsWorld).toHaveLength(1);
            expect(data.schemaVersion).toBe(6);
        });

        it('defaultLightsOn state is saved and restored', () => {
            const demo1 = new XrLightShadowsDemo(scene);
            (demo1 as any)._addPointLight();
            (demo1 as any)._enableDefaultLights();
            const savedData = (demo1 as any)._buildStateData();
            expect(savedData.defaultLightsOn).toBe(true);
            demo1.teardown();

            const demo2 = new XrLightShadowsDemo(scene);
            (demo2 as any)._loadFromJson(savedData);
            const dirLight = scene.getLightByName('ls_directional');
            expect(dirLight!.isEnabled()).toBe(true);
            demo2.teardown();
        });
    });
});
