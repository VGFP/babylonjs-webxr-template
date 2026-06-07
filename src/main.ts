import { Engine, Scene, TransformNode, Vector3, WebXRDefaultExperience } from '@babylonjs/core';
import { WebXRState } from '@babylonjs/core/XR/webXRTypes';
import '@babylonjs/loaders/glTF';

import './style.css';
import { SceneManager } from './core';
import { ShadowManager } from './lighting';
import { XrExperience, PlaneDetectionManager } from './xr';
import { TextManager } from './text';
import { DemoRegistry } from './demos';
import { DemoUiController } from './demos/demoUi';
import { preprocessPdf, serializePages, deserializePages } from './demos/pdfPreprocessor';

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
        this._scene.metadata = {
            ...((this._scene.metadata as Record<string, unknown>) || {}),
            xrAnchors: this._xrExperience.anchors,
            planeDetectionManager: this._planeDetectionManager,
        };
    }

    async createScene(): Promise<void> {
        new ShadowManager(this._scene);

        this._planeDetectionManager = new PlaneDetectionManager(
            this._scene,
            this._xrExperience!.xr,
            this._xrExperience!.planes,
        );
        this._planeDetectionManager.wireObservables();

        (this._scene.metadata as Record<string, unknown>).planeDetectionManager = this._planeDetectionManager;

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
            textManager: this._textManager,
            homeScene: this._scene,
            homeXr: this._xrExperience!.xr,
            homeDetachText: this._detachHomeText!,
            demos,
            debug: this._debug,
            onWireXrState: wireXrState,
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

        if (xrButton && xrOverlay && xrFrost) {
            xrButton.addEventListener('click', async () => {
                try {
                    await this._sceneManager!.activeXr.baseExperience.enterXRAsync('immersive-ar', 'local-floor');
                } catch (err) {
                    console.error('Failed to enter XR:', err);
                }
            });

            wireXrState(this._xrExperience!.xr);
        }

        const pdfInput = document.getElementById('pdf-input') as HTMLInputElement | null;
        const pdfFilename = document.getElementById('pdf-filename') as HTMLSpanElement | null;
        const pdfConvertBtn = document.getElementById('pdf-convert') as HTMLButtonElement | null;
        const pdfDownloadBtn = document.getElementById('pdf-download') as HTMLButtonElement | null;
        const pdfProgress = document.getElementById('pdf-progress') as HTMLSpanElement | null;

        let selectedPdfFile: File | null = null;

        if (pdfInput && pdfFilename) {
            pdfInput.addEventListener('change', () => {
                const file = pdfInput.files?.[0];
                if (!file) return;
                pdfFilename.textContent = file.name;
                if (pdfDownloadBtn) pdfDownloadBtn.hidden = true;

                if (file.name.endsWith('.pre')) {
                    selectedPdfFile = null;
                    if (pdfConvertBtn) pdfConvertBtn.hidden = true;
                    if (pdfProgress) pdfProgress.textContent = 'Loading...';
                    const reader = new FileReader();
                    reader.onload = () => {
                        try {
                            const pages = deserializePages(reader.result as string);
                            (this._scene.metadata as Record<string, unknown>).pdfPages = pages;
                            if (pdfProgress) pdfProgress.textContent = `Loaded: ${pages.length} pages`;
                        } catch (err) {
                            if (pdfProgress)
                                pdfProgress.textContent = `Error: ${err instanceof Error ? err.message : 'invalid .pre file'}`;
                        }
                    };
                    reader.onerror = () => {
                        if (pdfProgress) pdfProgress.textContent = 'Error: failed to read file';
                    };
                    reader.readAsText(file);
                } else {
                    selectedPdfFile = file;
                    if (pdfConvertBtn) pdfConvertBtn.hidden = false;
                    if (pdfProgress) pdfProgress.textContent = '';
                }
            });
        }

        if (pdfConvertBtn) {
            pdfConvertBtn.addEventListener('click', async () => {
                if (!selectedPdfFile) return;
                pdfConvertBtn.disabled = true;
                if (pdfProgress) pdfProgress.textContent = 'Converting...';
                try {
                    const pages = await preprocessPdf(selectedPdfFile, (current, total) => {
                        if (pdfProgress) pdfProgress.textContent = `Converting page ${current} of ${total}...`;
                    });
                    (this._scene.metadata as Record<string, unknown>).pdfPages = pages;
                    if (pdfProgress) pdfProgress.textContent = `Ready: ${pages.length} pages`;
                    if (pdfDownloadBtn) pdfDownloadBtn.hidden = false;
                    pdfConvertBtn.hidden = true;
                } catch (err) {
                    if (pdfProgress)
                        pdfProgress.textContent = `Error: ${err instanceof Error ? err.message : 'unknown'}`;
                    pdfConvertBtn.disabled = false;
                }
            });
        }

        if (pdfDownloadBtn) {
            pdfDownloadBtn.addEventListener('click', async () => {
                const pages = (this._scene.metadata as Record<string, unknown>)?.pdfPages as
                    | { url: string; width: number; height: number }[]
                    | undefined;
                if (!pages) return;
                pdfDownloadBtn.disabled = true;
                try {
                    const json = await serializePages(pages);
                    const blob = new Blob([json], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = (selectedPdfFile?.name ?? 'document').replace(/\.pdf$/i, '') + '.pre';
                    a.click();
                    URL.revokeObjectURL(url);
                } catch (err) {
                    console.error('Failed to download:', err);
                }
                pdfDownloadBtn.disabled = false;
            });
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js');
            });
        }

        const mpServerUrlInput = document.getElementById('mp-server-url') as HTMLInputElement | null;
        const mpPasteBtn = document.getElementById('mp-paste-btn') as HTMLButtonElement | null;
        if (mpServerUrlInput) {
            try {
                const saved = localStorage.getItem('mp_server_url');
                if (saved) mpServerUrlInput.value = saved;
            } catch {
                // ignore storage errors
            }
            mpServerUrlInput.addEventListener('input', () => {
                try {
                    localStorage.setItem('mp_server_url', mpServerUrlInput.value);
                } catch {
                    // ignore storage errors
                }
            });
            if (mpPasteBtn) {
                mpPasteBtn.addEventListener('click', async () => {
                    try {
                        const text = await navigator.clipboard.readText();
                        mpServerUrlInput.value = text.trim();
                        try {
                            localStorage.setItem('mp_server_url', mpServerUrlInput.value);
                        } catch {
                            // ignore storage errors
                        }
                    } catch {
                        // clipboard not available
                    }
                });
            }
        }
    }
}

new App({ debug: import.meta.env.VITE_DEBUG === 'true' });
