import {
    Color3,
    Color4,
    GizmoManager,
    HemisphericLight,
    Mesh,
    MeshBuilder,
    Scene,
    StandardMaterial,
    Texture,
    TransformNode,
    Vector3,
} from '@babylonjs/core';
import '@babylonjs/core/Gizmos/gizmoManager';
import '@babylonjs/core/Gizmos/boundingBoxGizmo';

import { TextManager } from '../text/textRenderer';
import { type CreateUiButtonResult } from '../core/uiButton';
import {
    DisposableStack,
    createGizmoManager,
    createBackButton,
    createPanelButton,
    createPanelRoot,
    getGoBackCallback,
    getMetadata,
    initPanelText,
    saveAndTransparentClearColor,
    UI_LAYOUT,
} from '../core';
import type { PreProcessedPage } from './pdfPreprocessor';

const MAX_DISPLAY_WIDTH = 0.5175;
const MAX_DISPLAY_HEIGHT = 0.7245;
const PLACEHOLDER_ASPECT = 1 / 1.414;

export class PdfReaderDemo {
    private _scene: Scene;
    private _cleanup = new DisposableStack();
    private _disposed = false;
    private _prevClearColor: Color4;

    private _panelRoot: TransformNode;

    private _textManager: TextManager | null = null;
    private _detachText: (() => void) | null = null;

    private _gizmoAnchor: Mesh;
    private _displayPlane: Mesh;
    private _displayMaterial: StandardMaterial;
    private _renderCanvas: HTMLCanvasElement;

    private _gizmoManager: GizmoManager | null = null;
    private _gizmosEnabled = false;

    private _prevBtn!: CreateUiButtonResult;
    private _nextBtn!: CreateUiButtonResult;
    private _gizmosBtn!: CreateUiButtonResult;
    private _backBtn!: CreateUiButtonResult;

    private _preProcessedPages: PreProcessedPage[] | null = null;
    private _currentPage = 1;
    private _statusText = 'No PDF loaded';

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = saveAndTransparentClearColor(scene);

        this._panelRoot = createPanelRoot(scene, 'pdf_panel_root', this._cleanup);

        this._renderCanvas = document.createElement('canvas');

        this._gizmoAnchor = this._createGizmoAnchor();
        this._displayPlane = this._createDisplayPlane();
        this._displayMaterial = this._createDisplayMaterial();

        this._prevBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'pdf',
            label: 'Prev',
            width: 0.14,
            height: 0.06,
            position: new Vector3(-0.16, -0.19, 0),
            parent: this._panelRoot,
            bgColor: '#222226',
            borderColor: '#ffffff22',
            onClick: () => this._prevPage(),
        });
        this._nextBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'pdf',
            label: 'Next',
            width: 0.14,
            height: 0.06,
            position: new Vector3(0.16, -0.19, 0),
            parent: this._panelRoot,
            bgColor: '#222226',
            borderColor: '#ffffff22',
            onClick: () => this._nextPage(),
        });
        this._gizmosBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'pdf',
            label: 'Gizmos On',
            width: 0.16,
            height: UI_LAYOUT.panel.btnHeight * 0.8,
            position: new Vector3(0, -0.34, 0),
            parent: this._panelRoot,
            bgColor: '#1a3a1a',
            borderColor: '#50ff5044',
            onClick: () => this._toggleGizmos(),
        });

        this._backBtn = createBackButton({
            scene,
            cleanup: this._cleanup,
            parent: this._panelRoot,
            position: new Vector3(0, -0.27, 0),
            onGoBack: () => {
                const goBack = getGoBackCallback(this._scene);
                if (goBack) goBack();
            },
            namePrefix: 'pdf',
        });

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

        const presetPages = getMetadata(scene).pdfPages;
        if (presetPages) {
            this._loadPages(presetPages);
        } else {
            this._drawPlaceholder();
            this._applyState();
        }
    }

    private _createGizmoAnchor(): Mesh {
        const anchor = new Mesh('pdf_gizmo_anchor', this._scene);
        anchor.parent = this._panelRoot;
        anchor.position = new Vector3(0, 0.22, -0.05);
        anchor.isVisible = false;
        this._cleanup.add(anchor);
        return anchor;
    }

    private _createDisplayPlane(): Mesh {
        const plane = MeshBuilder.CreatePlane('pdf_display', { width: 1, height: 1 }, this._scene);
        plane.parent = this._gizmoAnchor;
        plane.position = Vector3.Zero();
        this._cleanup.add(plane);
        return plane;
    }

    private _createDisplayMaterial(): StandardMaterial {
        const light = new HemisphericLight('pdf_light', new Vector3(0, 1, 0), this._scene);
        light.intensity = 1;
        light.diffuse = new Color3(1, 1, 1);
        light.groundColor = new Color3(0.5, 0.5, 0.5);
        light.includedOnlyMeshes = [this._displayPlane];
        this._cleanup.add(light);

        const material = new StandardMaterial('pdf_display_mat', this._scene);
        material.backFaceCulling = false;
        material.specularColor = new Color3(0, 0, 0);
        material.diffuseColor = new Color3(1, 1, 1);
        this._displayPlane.material = material;
        this._cleanup.add(material);
        return material;
    }

    private _toggleGizmos(): void {
        this._gizmosEnabled = !this._gizmosEnabled;
        if (this._gizmosEnabled) {
            if (!this._gizmoManager) {
                this._gizmoManager = createGizmoManager(this._scene, {
                    boundingBox: true,
                    attachTo: this._gizmoAnchor,
                });
                this._configureGizmoHandles();
            } else {
                this._gizmoManager.attachToMesh(this._gizmoAnchor);
            }
        } else if (this._gizmoManager) {
            this._gizmoManager.attachToMesh(null as never);
        }
        this._rebuildText();
    }

    private _configureGizmoHandles(): void {
        const bbGizmo = this._gizmoManager?.gizmos.boundingBoxGizmo;
        if (!bbGizmo) return;

        bbGizmo.scaleBoxSize = 0.08;
        bbGizmo.rotationSphereSize = 0.08;
        bbGizmo.setEnabledScaling(true, true);
        bbGizmo.setEnabledRotationAxis('xy');

        // Scale boxes: array of 14 (8 corners + 6 face-centers).
        // Homogeneous scaling already hides the 6 face-center boxes.
        // Keep only index 13 = top-right-front corner (1,1,1).
        const scaleBoxes = bbGizmo.getScaleBoxes();
        for (let i = 0; i < scaleBoxes.length; i++) {
            if (i !== 13) {
                scaleBoxes[i].setEnabled(false);
            }
        }

        // Rotation anchors: array of 12 (4 per axis: X=0-3, Y=4-7, Z=8-11).
        // setEnabledRotationAxis('xy') already disabled Z-axis (8-11).
        // Keep only index 3 (X-axis, top-front) and index 7 (Y-axis, right-front).
        const rotateAnchors = (bbGizmo as any)._rotateAnchorsParent.getChildMeshes() as {
            setEnabled(b: boolean): void;
        }[];
        for (let i = 0; i < rotateAnchors.length; i++) {
            if (i !== 3 && i !== 7) {
                rotateAnchors[i].setEnabled(false);
            }
        }
    }

    private _updatePlaneSize(aspectRatio: number): void {
        let w = MAX_DISPLAY_WIDTH;
        let h = w / aspectRatio;
        if (h > MAX_DISPLAY_HEIGHT) {
            h = MAX_DISPLAY_HEIGHT;
            w = h * aspectRatio;
        }
        this._displayPlane.scaling.x = w;
        this._displayPlane.scaling.y = h;
    }

    private _setTextureFromCanvas(canvas: HTMLCanvasElement): void {
        canvas.toBlob((blob) => {
            if (this._disposed) return;
            if (!blob) {
                console.warn('[PDF Reader] canvas.toBlob returned null');
                return;
            }
            const url = URL.createObjectURL(blob);
            const oldTexture = this._displayMaterial.diffuseTexture;
            const newTexture = new Texture(url, this._scene, true, true, Texture.BILINEAR_SAMPLINGMODE, () => {
                URL.revokeObjectURL(url);
                if (oldTexture) oldTexture.dispose();
            });
            this._displayMaterial.diffuseTexture = newTexture;
        }, 'image/jpeg');
    }

    private _drawPlaceholder(): void {
        const w = 600;
        const h = Math.round(w / PLACEHOLDER_ASPECT);
        this._renderCanvas.width = w;
        this._renderCanvas.height = h;

        const ctx = this._renderCanvas.getContext('2d')!;
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#555566';
        ctx.font = 'bold 40px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('No PDF loaded', w / 2, h / 2 - 30);

        ctx.fillStyle = '#888899';
        ctx.font = '26px sans-serif';
        ctx.fillText('Upload and Convert before entering XR', w / 2, h / 2 + 20);

        this._setTextureFromCanvas(this._renderCanvas);
        this._updatePlaneSize(PLACEHOLDER_ASPECT);
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer) return;
        this._textManager.renderer.clearParagraphs();

        const { x: px, y: py, z: pz } = UI_LAYOUT.panelPosition;
        const ty = UI_LAYOUT.textYOffset;
        const tz = UI_LAYOUT.textZOffset;

        if (this._preProcessedPages === null) {
            this._textManager.addParagraph(
                'PDF Reader',
                new Vector3(px, py + 0.22 + ty, pz + tz),
                UI_LAYOUT.panel.textScale,
            );
        }

        if (this._prevBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                'Prev',
                new Vector3(px - 0.16, py - 0.19 + ty, pz + tz),
                UI_LAYOUT.panel.smallTextScale,
            );
            this._textManager.addParagraph(
                'Next',
                new Vector3(px + 0.16, py - 0.19 + ty, pz + tz),
                UI_LAYOUT.panel.smallTextScale,
            );
        }

        this._textManager.addParagraph(
            this._statusText,
            new Vector3(px, py - 0.19 + ty, pz + tz),
            UI_LAYOUT.panel.statusTextScale,
        );

        if (this._backBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(px, py - 0.27 + ty, pz + tz),
                UI_LAYOUT.panel.textScale,
            );
        }

        if (this._gizmosBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                this._gizmosEnabled ? 'Gizmos Off' : 'Gizmos On',
                new Vector3(px, py - 0.34 + ty, pz + tz),
                UI_LAYOUT.panel.smallTextScale,
            );
        }
    }

    private _applyState(): void {
        const hasPdf = this._preProcessedPages !== null;
        this._prevBtn.plane.setEnabled(hasPdf);
        this._nextBtn.plane.setEnabled(hasPdf);
        this._rebuildText();
    }

    private _loadPages(pages: PreProcessedPage[]): void {
        this._preProcessedPages = pages;
        this._currentPage = 1;
        this._statusText = `Page 1 of ${pages.length}`;
        this._renderPage(1);
        this._applyState();
    }

    private _renderPage(pageNum: number): void {
        if (!this._preProcessedPages) return;
        const page = this._preProcessedPages[pageNum - 1];

        const oldTexture = this._displayMaterial.diffuseTexture;
        const texture = new Texture(page.url, this._scene, true, true, Texture.BILINEAR_SAMPLINGMODE, () => {
            if (oldTexture) oldTexture.dispose();
        });
        this._displayMaterial.diffuseTexture = texture;

        this._updatePlaneSize(page.width / page.height);
    }

    private _prevPage(): void {
        if (!this._preProcessedPages || this._currentPage <= 1) return;
        this._currentPage--;
        this._statusText = `Page ${this._currentPage} of ${this._preProcessedPages.length}`;
        this._renderPage(this._currentPage);
        this._applyState();
    }

    private _nextPage(): void {
        if (!this._preProcessedPages || this._currentPage >= this._preProcessedPages.length) return;
        this._currentPage++;
        this._statusText = `Page ${this._currentPage} of ${this._preProcessedPages.length}`;
        this._renderPage(this._currentPage);
        this._applyState();
    }

    teardown(): void {
        this._disposed = true;
        if (this._gizmoManager) {
            this._gizmoManager.dispose();
            this._gizmoManager = null;
        }
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        this._cleanup.dispose();
        this._scene.clearColor = this._prevClearColor;
    }
}
