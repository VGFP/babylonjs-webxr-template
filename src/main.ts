import { Engine, Scene, TransformNode, Vector3, WebXRDefaultExperience } from '@babylonjs/core';
import './style.css';
import { SceneManager, setMetadata } from './core';
import {
    wireXrOverlay,
    wireXrToggle,
    wirePdfInput,
    wireMpServerInput,
    wireAgentKeyInput,
    consumeAgentApiKey,
} from './core/domWiring';
import { ShadowManager } from './lighting';
import { XrExperience, PlaneDetectionManager } from './xr';
import { TextManager } from './text';
import { DemoRegistry } from './demos';
import { DemoUiController } from './demos/demoUi';

class App {
    private _canvas: HTMLCanvasElement;
    private _engine: Engine;
    private _scene: Scene;
    private _debug: boolean;
    private _xrExperience: XrExperience | null = null;
    private _sceneManager: SceneManager | null = null;
    private _textManager: TextManager | null = null;
    private _planeDetectionManager: PlaneDetectionManager | null = null;
    private _detachHomeText: (() => void) | null = null;

    constructor(config: { debug: boolean }) {
        if (!Engine.isSupported()) {
            throw new Error('WebGL is not supported');
        }

        this._debug = config.debug;
        this._canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
        this._engine = new Engine(this._canvas, true);
        this._scene = new Scene(this._engine);
        this._scene.useRightHandedSystem = true;

        this.bootstrapXr()
            .then(() => {
                this.createScene().then(() => {
                    this._engine.runRenderLoop(() => {
                        this._sceneManager!.activeScene.render();
                    });
                    window.addEventListener('resize', () => {
                        this._engine.resize();
                    });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async bootstrapXr(): Promise<void> {
        this._xrExperience = new XrExperience(this._scene);
        await this._xrExperience.init();
        setMetadata(this._scene, 'xrAnchors', this._xrExperience.anchors);
        setMetadata(this._scene, 'planeDetectionManager', this._planeDetectionManager ?? undefined);
    }

    async createScene(): Promise<void> {
        new ShadowManager(this._scene);

        this._planeDetectionManager = new PlaneDetectionManager(
            this._scene,
            this._xrExperience!.xr,
            this._xrExperience!.planes,
        );
        this._planeDetectionManager.wireObservables();

        setMetadata(this._scene, 'planeDetectionManager', this._planeDetectionManager ?? undefined);

        if (this._debug) {
            await import('@babylonjs/inspector');
        }

        this._textManager = new TextManager(this._engine);
        await this._textManager.init();
        const textAnchor = new TransformNode('textAnchor', this._scene);
        textAnchor.position = new Vector3(0, 1.5, -0.55);
        textAnchor.scaling = new Vector3(0.2, 0.2, 0.2);
        this._textManager.renderer.parent = textAnchor;
        this._textManager.renderer.addParagraph('Hello World', { textAlign: 'center' });

        if (this._debug) {
            const { Inspector } = await import('@babylonjs/inspector');
            Inspector.Show(this._scene, { overlay: true });
        }

        this._detachHomeText = this._textManager.attachToScene(this._scene);
        const demos = DemoRegistry.getAll();

        this._sceneManager = new SceneManager({
            engine: this._engine,
            textManager: this._textManager,
            homeScene: this._scene,
            homeXr: this._xrExperience!.xr,
            homeDetachText: this._detachHomeText!,
            demos,
            debug: this._debug,
            onWireXrState: (xr: WebXRDefaultExperience) => {
                const overlay = document.getElementById('xr-overlay') as HTMLDivElement | null;
                const frost = document.getElementById('xr-frost') as HTMLDivElement | null;
                if (overlay && frost) wireXrOverlay(xr, overlay, frost);
            },
        });

        const homeUi = await DemoUiController.create(
            this._engine,
            this._scene,
            demos,
            (demo) => this._sceneManager!.switchToDemo(demo),
            null,
            async () => {
                try {
                    await this._sceneManager!.activeXr.baseExperience.exitXRAsync();
                } catch (err) {
                    console.error('Failed to exit XR:', err);
                }
            },
        );
        this._sceneManager.setHomeUi(homeUi);

        this._wireXrButton();
        this._wirePdfControls();
        this._wireMpServerInput();
        this._wireAgentKeyInput();

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js');
            });
        }
    }

    private _wireXrButton(): void {
        const xrButton = document.getElementById('xr-button') as HTMLButtonElement | null;
        const xrOverlay = document.getElementById('xr-overlay') as HTMLDivElement | null;
        const xrFrost = document.getElementById('xr-frost') as HTMLDivElement | null;
        if (!xrButton || !xrOverlay || !xrFrost) return;

        wireXrToggle(xrButton, xrOverlay, xrFrost, this._xrExperience!.xr, async () => {
            await this._prepareForXr();
            await this._sceneManager!.activeXr.baseExperience.enterXRAsync('immersive-ar', 'local-floor');
        });
    }

    /**
     * Runs synchronously before each XR entry while we still have a user
     * gesture. If the user typed/pasted an API key, move it from the DOM
     * input into scene metadata (in-memory only) and blank the input
     * field. This guarantees the key is never visible in the DOM during
     * XR and never touches persistent storage.
     *
     * Microphone permission is requested earlier - on the API key input's
     * focus event and on its Paste button click - so it is not requested
     * here.
     */
    private async _prepareForXr(): Promise<void> {
        const keyInput = document.getElementById('agent-api-key') as HTMLInputElement | null;
        if (keyInput) consumeAgentApiKey(keyInput, this._scene);
    }

    private _wirePdfControls(): void {
        const input = document.getElementById('pdf-input') as HTMLInputElement | null;
        const filename = document.getElementById('pdf-filename') as HTMLSpanElement | null;
        const convertBtn = document.getElementById('pdf-convert') as HTMLButtonElement | null;
        const downloadBtn = document.getElementById('pdf-download') as HTMLButtonElement | null;
        const progress = document.getElementById('pdf-progress') as HTMLSpanElement | null;
        if (!input || !filename || !convertBtn || !downloadBtn || !progress) return;

        wirePdfInput(this._scene, input, filename, convertBtn, downloadBtn, progress);
    }

    private _wireMpServerInput(): void {
        const input = document.getElementById('mp-server-url') as HTMLInputElement | null;
        const pasteBtn = document.getElementById('mp-paste-btn') as HTMLButtonElement | null;
        if (!input) return;

        wireMpServerInput(input, pasteBtn);
    }

    private _wireAgentKeyInput(): void {
        const input = document.getElementById('agent-api-key') as HTMLInputElement | null;
        const pasteBtn = document.getElementById('agent-paste-btn') as HTMLButtonElement | null;
        const note = document.getElementById('agent-key-note') as HTMLSpanElement | null;
        if (!input) return;

        wireAgentKeyInput(input, pasteBtn, note);
    }
}

new App({ debug: import.meta.env.VITE_DEBUG === 'true' });
