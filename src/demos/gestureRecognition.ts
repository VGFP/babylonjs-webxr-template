import { Color4, Observer, Scene, TransformNode, Vector3 } from '@babylonjs/core';
import type { WebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience';
import type { WebXRHandTracking } from '@babylonjs/core/XR/features/WebXRHandTracking';
import type { WebXRHand } from '@babylonjs/core/XR/features/WebXRHandTracking';
import '@babylonjs/core/XR/features/WebXRHandTracking';

import { TextManager } from '../text/textRenderer';
import {
    DisposableStack,
    createBackButton,
    createPanelRoot,
    getMetadata,
    initPanelText,
    saveAndTransparentClearColor,
    UI_LAYOUT,
} from '../core';
import { GestureClassifier, type GestureClass } from './gestureClassifier';

const PREDICTION_INTERVAL_FRAMES = 20;

const GESTURE_LABEL: Record<GestureClass, string> = {
    Rock: 'Rock',
    Paper: 'Paper',
    Scissors: 'Scissors',
    Unknown: '---',
};

export class GestureRecognitionDemo {
    private _scene: Scene;
    private _cleanup = new DisposableStack();
    private _disposed = false;
    private _prevClearColor: Color4;

    private _panelRoot: TransformNode;
    private _textManager: TextManager | null = null;
    private _detachText: (() => void) | null = null;
    private _backBtn: ReturnType<typeof createBackButton>;

    private _classifier: GestureClassifier;
    private _frameObserver: Observer<Scene> | null = null;
    private _frameCounter = 0;

    private _handTrackingFeature: WebXRHandTracking | null = null;
    private _leftHand: WebXRHand | null = null;
    private _rightHand: WebXRHand | null = null;
    private _handTrackingObserver: any | null = null;

    private _leftGesture: GestureClass = 'Unknown';
    private _rightGesture: GestureClass = 'Unknown';

    private _statusText = 'Loading models...';

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = saveAndTransparentClearColor(scene);

        this._panelRoot = createPanelRoot(scene, 'gesture_panel_root', this._cleanup);

        this._backBtn = createBackButton({
            scene,
            cleanup: this._cleanup,
            parent: this._panelRoot,
            position: new Vector3(0, -0.34, 0),
            onGoBack: () => {
                const goBack = getMetadata(this._scene).goBack;
                if (goBack) goBack();
            },
            namePrefix: 'gr',
        });

        this._classifier = new GestureClassifier();

        this._setupHandTracking();
        this._startPredictionLoop();

        initPanelText({
            scene,
            cleanup: this._cleanup,
            isDisposed: () => this._disposed,
            onReady: (tm) => {
                this._textManager = tm;
                this._detachText = tm.attachToScene(scene);
                this._rebuildText();
            },
        });

        void this._classifier.loaded.then(() => {
            if (this._disposed) return;
            this._statusText = this._classifier.ready
                ? 'Show hands to detect'
                : (this._classifier.error ?? 'Model load failed');
            this._rebuildText();
        });
    }

    private _setupHandTracking(): void {
        const xr = getMetadata(this._scene).xr as WebXRDefaultExperience | undefined;
        if (!xr) {
            this._statusText = 'XR not available';
            return;
        }

        try {
            const fm = xr.baseExperience.featuresManager;
            this._handTrackingFeature = fm.enableFeature('xr-hand-tracking', 'latest', {
                xrInput: xr.input,
                jointMeshes: {},
            }) as WebXRHandTracking;

            this._handTrackingFeature.onHandAddedObservable.add((hand: WebXRHand) => {
                const handedness = hand.xrController.inputSource.handedness;
                const resolvedHand = this._handTrackingFeature?.getHandByHandedness(handedness as any);
                if (handedness === 'left') {
                    this._leftHand = resolvedHand ?? hand;
                } else if (handedness === 'right') {
                    this._rightHand = resolvedHand ?? hand;
                }
            });

            this._handTrackingFeature.onHandRemovedObservable.add((hand: WebXRHand) => {
                const handedness = hand.xrController.inputSource.handedness;
                if (handedness === 'left') {
                    this._leftHand = null;
                    this._leftGesture = 'Unknown';
                } else if (handedness === 'right') {
                    this._rightHand = null;
                    this._rightGesture = 'Unknown';
                }
                this._rebuildText();
            });

            const existingLeft = this._handTrackingFeature.getHandByHandedness('left' as any);
            if (existingLeft) this._leftHand = existingLeft;
            const existingRight = this._handTrackingFeature.getHandByHandedness('right' as any);
            if (existingRight) this._rightHand = existingRight;
        } catch (e) {
            this._statusText = 'Hand tracking not available';
            console.warn('[GestureRecognition] hand tracking failed:', e);
        }
    }

    private _startPredictionLoop(): void {
        this._frameObserver = this._scene.onBeforeRenderObservable.add(() => {
            if (this._disposed) return;
            this._frameCounter++;
            if (this._frameCounter % PREDICTION_INTERVAL_FRAMES !== 0) return;
            if (!this._classifier.ready) return;

            const promises: Promise<void>[] = [];

            if (this._leftHand) {
                promises.push(
                    this._classifier.predict(this._leftHand, 'left').then((g) => {
                        if (g !== this._leftGesture) {
                            this._leftGesture = g;
                            this._rebuildText();
                        }
                    }),
                );
            }

            if (this._rightHand) {
                promises.push(
                    this._classifier.predict(this._rightHand, 'right').then((g) => {
                        if (g !== this._rightGesture) {
                            this._rightGesture = g;
                            this._rebuildText();
                        }
                    }),
                );
            }

            if (promises.length > 0) {
                void Promise.all(promises);
            }
        });
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer) return;
        this._textManager.renderer.clearParagraphs();

        const { x: px, y: py, z: pz } = UI_LAYOUT.panelPosition;
        const ty = UI_LAYOUT.textYOffset;
        const tz = UI_LAYOUT.textZOffset;

        const leftLabel = `L: ${GESTURE_LABEL[this._leftGesture]}`;
        const rightLabel = `R: ${GESTURE_LABEL[this._rightGesture]}`;

        this._textManager.addParagraph(leftLabel, new Vector3(px, py + 0.18 + ty, pz + tz), UI_LAYOUT.panel.textScale);

        this._textManager.addParagraph(rightLabel, new Vector3(px, py + 0.12 + ty, pz + tz), UI_LAYOUT.panel.textScale);

        this._statusText = this._statusText.length > 30 ? this._statusText.slice(0, 30) : this._statusText;
        this._textManager.addParagraph(
            this._statusText,
            new Vector3(px, py - 0.2 + ty, pz + tz),
            UI_LAYOUT.panel.statusTextScale,
        );

        this._textManager.addParagraph(
            'Back',
            new Vector3(
                px + this._backBtn.plane.position.x,
                py + this._backBtn.plane.position.y + ty,
                pz + this._backBtn.plane.position.z + tz,
            ),
            UI_LAYOUT.panel.textScale,
        );
    }

    teardown(): void {
        this._disposed = true;
        if (this._frameObserver) {
            this._scene.onBeforeRenderObservable.remove(this._frameObserver);
            this._frameObserver = null;
        }
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        this._classifier.dispose();
        this._cleanup.dispose();
        this._scene.clearColor = this._prevClearColor;
    }
}
