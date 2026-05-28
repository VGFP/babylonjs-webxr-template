import { Engine, Scene, TransformNode, Vector3, WebXRDefaultExperience, WebXRFeaturesManager } from '@babylonjs/core';
import { WebXRState } from '@babylonjs/core/XR/webXRTypes';
import { TextRenderer } from '@babylonjs/addons/msdfText';
import '@babylonjs/loaders/glTF';

import './style.css';
import { SceneManager } from './core';
import { createShadowGenerator } from './lighting';
import { createXrExperience, getFeaturesManager, enablePlaneDetection, enableAnchors } from './xr';
import { createTextRenderer, attachTextRenderer } from './text';
import { getDemos } from './demos';
import { createDemoUi } from './demos/demoUi';

class App {
    private _canvas: HTMLCanvasElement;
    private _engine: Engine;
    private _scene: Scene;
    private _debug: boolean;
    private _xr: WebXRDefaultExperience | null = null;
    private _fm: WebXRFeaturesManager | null = null;
    private _xrPlanes: any | null = null;
    private _xrAnchors: any | null = null;
    private _sceneManager: SceneManager | null = null;
    private _textRenderer: TextRenderer | null = null;
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

        this.bootstrapXr().then(() => {
            this.createScene().then(() => {
                this._engine.runRenderLoop(() => {
                    this._sceneManager!.activeScene.render();
                });
                window.addEventListener('resize', () => {
                    this._engine.resize();
                });
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    async bootstrapXr(): Promise<void> {
        this._xr = await createXrExperience(this._scene);
        this._fm = getFeaturesManager(this._xr);
        this._xrPlanes = enablePlaneDetection(this._fm);
        this._xrAnchors = enableAnchors(this._fm);
        this._scene.metadata = {
            ...((this._scene.metadata as Record<string, unknown>) || {}),
            xrAnchors: this._xrAnchors,
        };
    }

    async createScene(): Promise<void> {
        createShadowGenerator(this._scene);

        if (this._debug) {
            await import('@babylonjs/inspector');
        }

        this._textRenderer = await createTextRenderer(this._engine);
        const textAnchor = new TransformNode('textAnchor', this._scene);
        textAnchor.position = new Vector3(0, 1.5, -0.55);
        textAnchor.scaling = new Vector3(0.2, 0.2, 0.2);
        this._textRenderer.parent = textAnchor;
        this._textRenderer.addParagraph('Hello World', { textAlign: 'center' });

        if (this._debug) {
            const { Inspector } = await import('@babylonjs/inspector');
            Inspector.Show(this._scene, { overlay: true });
        }

        this._detachHomeText = attachTextRenderer(this._scene, this._textRenderer);
        const demos = getDemos();

        const xrButton = document.getElementById('xr-button') as HTMLButtonElement;
        const xrOverlay = document.getElementById('xr-overlay') as HTMLDivElement;
        const xrFrost = document.getElementById('xr-frost') as HTMLDivElement;

        const wireXrState = (xr: WebXRDefaultExperience) => {
            xr.baseExperience.onStateChangedObservable.add((state) => {
                const inXR = state === WebXRState.IN_XR;
                xrOverlay.classList.toggle('hidden', inXR);
                xrFrost.classList.toggle('hidden', inXR);
            });
        };

        this._sceneManager = new SceneManager({
            engine: this._engine,
            textRenderer: this._textRenderer,
            homeScene: this._scene,
            homeXr: this._xr!,
            homeDetachText: this._detachHomeText,
            demos,
            debug: this._debug,
            onWireXrState: wireXrState,
        });

        const homeUi = await createDemoUi(
            this._engine,
            this._scene,
            demos,
            (demo) => this._sceneManager!.switchToDemo(demo),
            null,
        );
        this._sceneManager.setHomeUi(homeUi);

        if (xrButton && xrOverlay && xrFrost) {
            xrButton.addEventListener('click', async () => {
                try {
                    await this._sceneManager!.activeXr.baseExperience.enterXRAsync('immersive-ar', 'local-floor');
                } catch (err) {
                    console.error('Failed to enter XR:', err);
                }
            });

            wireXrState(this._xr!);
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js');
            });
        }
    }
}

new App({ debug: import.meta.env.VITE_DEBUG === 'true' });
