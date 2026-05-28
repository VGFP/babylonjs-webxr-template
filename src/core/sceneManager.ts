import { Engine, Scene, WebXRDefaultExperience } from '@babylonjs/core';
import { TextRenderer } from '@babylonjs/addons/msdfText';
import { attachTextRenderer } from '../text/textRenderer';
import { createXrExperience } from '../xr/xrExperience';
import { createDemoScene, type DemoDescriptor } from '../demos';
import { createDemoUi, type DemoUi } from '../demos/demoUi';

type SceneState =
    | { type: 'home' }
    | { type: 'reused_scene'; demoId: string; teardown: () => void }
    | { type: 'own_scene'; demoId: string; scene: Scene; xr: WebXRDefaultExperience; ui: DemoUi };

interface HomeResources {
    scene: Scene;
    xr: WebXRDefaultExperience;
    ui: DemoUi;
    detachText: () => void;
}

export interface SceneManagerConfig {
    engine: Engine;
    textRenderer: TextRenderer;
    homeScene: Scene;
    homeXr: WebXRDefaultExperience;
    homeDetachText: () => void;
    demos: readonly DemoDescriptor[];
    debug?: boolean;
    onWireXrState: (xr: WebXRDefaultExperience) => void;
}

const NOOP_UI: DemoUi = {
    setActiveDemo: () => {},
    setVisible: () => {},
    dispose: () => {},
};

export class SceneManager {
    private readonly engine: Engine;
    private readonly textRenderer: TextRenderer;
    private readonly demos: readonly DemoDescriptor[];
    private readonly debug: boolean;
    private readonly onWireXrState: (xr: WebXRDefaultExperience) => void;
    private readonly home: HomeResources;
    private state: SceneState = { type: 'home' };

    constructor(config: SceneManagerConfig) {
        this.engine = config.engine;
        this.textRenderer = config.textRenderer;
        this.demos = config.demos;
        this.debug = config.debug ?? false;
        this.onWireXrState = config.onWireXrState;

        this.home = {
            scene: config.homeScene,
            xr: config.homeXr,
            ui: NOOP_UI,
            detachText: config.homeDetachText,
        };
    }

    setHomeUi(ui: DemoUi): void {
        this.home.ui = ui;
    }

    get activeScene(): Scene {
        return this.state.type === 'own_scene' ? this.state.scene : this.home.scene;
    }

    get activeXr(): WebXRDefaultExperience {
        return this.state.type === 'own_scene' ? this.state.xr : this.home.xr;
    }

    async switchToDemo(demo: DemoDescriptor): Promise<void> {
        if (this.state.type !== 'home' && this.state.demoId === demo.id) return;

        this.cleanupCurrentState();

        if (demo.reuseScene) {
            this.enterReusedScene(demo);
        } else {
            await this.enterOwnScene(demo);
        }
    }

    async switchToHome(): Promise<void> {
        if (this.state.type === 'home') return;

        this.cleanupCurrentState();
        this.enterHome();
    }

    private cleanupCurrentState(): void {
        switch (this.state.type) {
            case 'home':
                this.home.detachText();
                this.home.ui.setVisible(false);
                break;
            case 'reused_scene':
                this.state.teardown();
                this.home.scene.metadata = {};
                break;
            case 'own_scene':
                this.state.ui.dispose();
                this.state.scene.dispose();
                break;
        }
    }

    private enterHome(): void {
        const detachText = attachTextRenderer(this.home.scene, this.textRenderer);
        this.home.ui.setVisible(true);
        this.home.ui.setActiveDemo(null);
        this.home.detachText = detachText;
        this.state = { type: 'home' };
    }

    private enterReusedScene(demo: DemoDescriptor): void {
        this.home.scene.metadata = {
            goBack: () => this.switchToHome(),
            xr: this.home.xr,
        };
        const teardown = demo.build(this.home.scene);
        this.state = {
            type: 'reused_scene',
            demoId: demo.id,
            teardown: teardown ?? (() => {}),
        };
    }

    private async enterOwnScene(demo: DemoDescriptor): Promise<void> {
        const newScene = createDemoScene(this.engine, demo, {
            goBack: () => this.switchToHome(),
        });
        const newXr = await createXrExperience(newScene);

        let ui: DemoUi;
        if (demo.ownUi) {
            ui = NOOP_UI;
        } else {
            const otherDemos = this.demos.filter(d => d.id !== demo.id);
            ui = await createDemoUi(
                this.engine,
                newScene,
                otherDemos,
                (d) => this.switchToDemo(d),
                () => this.switchToHome(),
            );
        }

        if (!demo.ownUi) {
            attachTextRenderer(newScene, this.textRenderer);
        }

        this.onWireXrState(newXr);

        if (this.debug) {
            import('@babylonjs/inspector').then(({ Inspector }) => {
                Inspector.Show(newScene, { overlay: true });
            });
        }

        ui.setActiveDemo(demo.id);

        this.state = {
            type: 'own_scene',
            demoId: demo.id,
            scene: newScene,
            xr: newXr,
            ui,
        };
    }
}
