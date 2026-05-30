import { Engine, Scene, WebXRDefaultExperience } from '@babylonjs/core';
import { TextManager } from '../text/textRenderer';
import { XrExperience } from '../xr/xrExperience';
import { DemoRegistry, type DemoDescriptor } from '../demos';
import { DemoUiController, type DemoUi } from '../demos/demoUi';

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
    textManager: TextManager;
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
    private readonly _engine: Engine;
    private readonly _textManager: TextManager;
    private readonly _demos: readonly DemoDescriptor[];
    private readonly _debug: boolean;
    private readonly _onWireXrState: (xr: WebXRDefaultExperience) => void;
    private readonly _home: HomeResources;
    private _state: SceneState = { type: 'home' };

    constructor(config: SceneManagerConfig) {
        this._engine = config.engine;
        this._textManager = config.textManager;
        this._demos = config.demos;
        this._debug = config.debug ?? false;
        this._onWireXrState = config.onWireXrState;

        this._home = {
            scene: config.homeScene,
            xr: config.homeXr,
            ui: NOOP_UI,
            detachText: config.homeDetachText,
        };
    }

    setHomeUi(ui: DemoUi): void {
        this._home.ui = ui;
    }

    get activeScene(): Scene {
        return this._state.type === 'own_scene' ? this._state.scene : this._home.scene;
    }

    get activeXr(): WebXRDefaultExperience {
        return this._state.type === 'own_scene' ? this._state.xr : this._home.xr;
    }

    async switchToDemo(demo: DemoDescriptor): Promise<void> {
        if (this._state.type !== 'home' && this._state.demoId === demo.id) return;

        this._cleanupCurrentState();

        if (demo.reuseScene) {
            this._enterReusedScene(demo);
        } else {
            await this._enterOwnScene(demo);
        }
    }

    async switchToHome(): Promise<void> {
        if (this._state.type === 'home') return;

        this._cleanupCurrentState();
        this._enterHome();
    }

    private _cleanupCurrentState(): void {
        switch (this._state.type) {
            case 'home':
                this._home.detachText();
                this._home.ui.setVisible(false);
                break;
            case 'reused_scene':
                this._state.teardown();
                this._home.scene.metadata = {};
                break;
            case 'own_scene':
                this._state.ui.dispose();
                this._state.scene.dispose();
                break;
        }
    }

    private _enterHome(): void {
        const detachText = this._textManager.attachToScene(this._home.scene);
        this._home.ui.setVisible(true);
        this._home.ui.setActiveDemo(null);
        this._home.detachText = detachText;
        this._state = { type: 'home' };
    }

    private _enterReusedScene(demo: DemoDescriptor): void {
        this._home.scene.metadata = {
            goBack: () => this.switchToHome(),
            xr: this._home.xr,
        };
        const teardown = demo.build(this._home.scene);
        this._state = {
            type: 'reused_scene',
            demoId: demo.id,
            teardown: teardown ?? (() => {}),
        };
    }

    private async _enterOwnScene(demo: DemoDescriptor): Promise<void> {
        const newScene = DemoRegistry.createScene(this._engine, demo, {
            goBack: () => this.switchToHome(),
        });
        const xrExperience = new XrExperience(newScene);
        await xrExperience.init();
        const newXr = xrExperience.xr;

        let ui: DemoUi;
        if (demo.ownUi) {
            ui = NOOP_UI;
        } else {
            const otherDemos = this._demos.filter((d: DemoDescriptor) => d.id !== demo.id);
            ui = await DemoUiController.create(
                this._engine,
                newScene,
                otherDemos,
                (d: DemoDescriptor) => this.switchToDemo(d),
                () => this.switchToHome(),
            );
        }

        if (!demo.ownUi) {
            this._textManager.attachToScene(newScene);
        }

        this._onWireXrState(newXr);

        if (this._debug) {
            import('@babylonjs/inspector').then(({ Inspector }) => {
                Inspector.Show(newScene, { overlay: true });
            });
        }

        ui.setActiveDemo(demo.id);

        this._state = {
            type: 'own_scene',
            demoId: demo.id,
            scene: newScene,
            xr: newXr,
            ui,
        };
    }
}
