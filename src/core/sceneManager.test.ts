import { SceneManager } from './sceneManager';
import type { DemoDescriptor } from '../demos';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

vi.mock('../xr/xrExperience', () => {
    const mockXr = {
        baseExperience: {
            featuresManager: { enableFeature: vi.fn(() => ({})) },
            onStateChangedObservable: { add: vi.fn(), remove: vi.fn() },
            state: 'NOT_IN_XR',
            enterXRAsync: vi.fn(),
        },
    };
    return {
        XrExperience: vi.fn().mockImplementation(function (this: any) {
            this.init = vi.fn().mockResolvedValue(undefined);
            this.xr = mockXr;
            this.fm = { enableFeature: vi.fn() };
            this.planes = null;
            this.anchors = null;
        }),
    };
});

vi.mock('../demos/demoUi', () => ({
    DemoUiController: {
        create: vi.fn().mockResolvedValue({
            setActiveDemo: vi.fn(),
            setVisible: vi.fn(),
            dispose: vi.fn(),
        }),
    },
}));

describe('SceneManager', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];
    let sceneManager: SceneManager;
    let mockXr: any;
    let mockTextManager: any;
    let wireXrState: ReturnType<typeof vi.fn>;
    let homeDetachText: ReturnType<typeof vi.fn>;

    const reusedDemo: DemoDescriptor = {
        id: 'test-reused',
        label: 'Test Reused',
        build: () => vi.fn(),
        reuseScene: true,
    };

    const ownDemo: DemoDescriptor = {
        id: 'test-own',
        label: 'Test Own',
        build: () => vi.fn(),
        reuseScene: false,
    };

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
        mockXr = {
            baseExperience: {
                featuresManager: { enableFeature: vi.fn(() => ({})) },
                onStateChangedObservable: { add: vi.fn(), remove: vi.fn() },
                state: 'NOT_IN_XR',
                enterXRAsync: vi.fn(),
            },
        };
        mockTextManager = {
            attachToScene: vi.fn(() => vi.fn()),
            dispose: vi.fn(),
        };
        homeDetachText = vi.fn();
        wireXrState = vi.fn();

        sceneManager = new SceneManager({
            engine,
            textManager: mockTextManager as any,
            homeScene: scene,
            homeXr: mockXr as any,
            homeDetachText: homeDetachText as any,
            demos: [reusedDemo, ownDemo],
            onWireXrState: wireXrState as any,
        });
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
        vi.clearAllMocks();
    });

    describe('initial state', () => {
        it('activeScene returns home scene', () => {
            expect(sceneManager.activeScene).toBe(scene);
        });

        it('activeXr returns home XR', () => {
            expect(sceneManager.activeXr).toBe(mockXr);
        });
    });

    describe('switchToDemo() with reuseScene: true', () => {
        let buildSpy: ReturnType<typeof vi.fn>;

        beforeEach(() => {
            buildSpy = vi.fn(() => vi.fn());
        });

        it('calls demo.build() with the home scene', async () => {
            const demo: DemoDescriptor = {
                id: 'reused-a',
                label: 'A',
                build: buildSpy as any,
                reuseScene: true,
            };
            const sm = new SceneManager({
                engine,
                textManager: mockTextManager as any,
                homeScene: scene,
                homeXr: mockXr as any,
                homeDetachText: homeDetachText as any,
                demos: [demo],
                onWireXrState: wireXrState as any,
            });

            await sm.switchToDemo(demo);
            expect(buildSpy).toHaveBeenCalledWith(scene);
        });

        it('injects goBack and xr into scene.metadata', async () => {
            await sceneManager.switchToDemo(reusedDemo);
            const meta = scene.metadata as Record<string, unknown>;
            expect(meta.goBack).toBeTypeOf('function');
            expect(meta.xr).toBe(mockXr);
        });

        it('activeScene still returns home scene', async () => {
            await sceneManager.switchToDemo(reusedDemo);
            expect(sceneManager.activeScene).toBe(scene);
        });
    });

    describe('switchToHome()', () => {
        it('calls teardown when returning from reused scene', async () => {
            const teardown = vi.fn();
            const demo: DemoDescriptor = {
                id: 'reused-teardown',
                label: 'Teardown',
                build: () => teardown,
                reuseScene: true,
            };
            const sm = new SceneManager({
                engine,
                textManager: mockTextManager as any,
                homeScene: scene,
                homeXr: mockXr as any,
                homeDetachText: homeDetachText as any,
                demos: [demo],
                onWireXrState: wireXrState as any,
            });

            await sm.switchToDemo(demo);
            await sm.switchToHome();
            expect(teardown).toHaveBeenCalled();
        });

        it('re-attaches text to scene', async () => {
            await sceneManager.switchToDemo(reusedDemo);
            const beforeCallCount = (mockTextManager.attachToScene as any).mock.calls.length;
            await sceneManager.switchToHome();
            expect((mockTextManager.attachToScene as any).mock.calls.length).toBeGreaterThan(beforeCallCount);
        });

        it('does nothing when already home', async () => {
            const beforeCallCount = (mockTextManager.attachToScene as any).mock.calls.length;
            await sceneManager.switchToHome();
            expect((mockTextManager.attachToScene as any).mock.calls.length).toBe(beforeCallCount);
        });
    });

    describe('switchToDemo() with reuseScene: false', () => {
        it('creates a new scene', async () => {
            await sceneManager.switchToDemo(ownDemo);
            expect(sceneManager.activeScene).not.toBe(scene);
        });

        it('calls onWireXrState with the new XR experience', async () => {
            await sceneManager.switchToDemo(ownDemo);
            expect(wireXrState).toHaveBeenCalled();
        });
    });

    describe('cleanup between demos', () => {
        it('tears down previous reused demo when switching to another', async () => {
            const teardown1 = vi.fn();
            const demo1: DemoDescriptor = {
                id: 'demo-1',
                label: 'Demo 1',
                build: () => teardown1,
                reuseScene: true,
            };
            const demo2: DemoDescriptor = {
                id: 'demo-2',
                label: 'Demo 2',
                build: () => vi.fn(),
                reuseScene: true,
            };

            const sm = new SceneManager({
                engine,
                textManager: mockTextManager as any,
                homeScene: scene,
                homeXr: mockXr as any,
                homeDetachText: homeDetachText as any,
                demos: [demo1, demo2],
                onWireXrState: wireXrState as any,
            });

            await sm.switchToDemo(demo1);
            await sm.switchToDemo(demo2);
            expect(teardown1).toHaveBeenCalled();
        });

        it('cleans up goBack from metadata when leaving reused scene', async () => {
            await sceneManager.switchToDemo(reusedDemo);
            expect((scene.metadata as Record<string, unknown>).goBack).toBeDefined();

            await sceneManager.switchToHome();
            expect((scene.metadata as Record<string, unknown>).goBack).toBeUndefined();
        });
    });
});
