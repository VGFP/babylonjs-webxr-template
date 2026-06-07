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
import { createUiButton, type CreateUiButtonResult } from '../core/uiButton';
import { DisposableStack } from '../core/disposableStack';
import { createGizmoManager } from '../core/gizmoManagerFactory';
import type { PreProcessedPage } from './pdfPreprocessor';

const MAX_DISPLAY_WIDTH = 0.3;
const MAX_DISPLAY_HEIGHT = 0.42;

export class PdfReaderDemo {
    private static readonly _panelPosition = new Vector3(0, 1.35, -0.55);
    private static readonly _btnWidth = 0.44;
    private static readonly _btnHeight = 0.07;
    private static readonly _smallBtnWidth = 0.14;
    private static readonly _smallBtnHeight = 0.06;
    private static readonly _cornerRadius = 25;
    private static readonly _borderThickness = 8;
    private static readonly _textScale = 0.028;
    private static readonly _smallTextScale = 0.016;
    private static readonly _statusTextScale = 0.018;
    private static readonly _textYOffset = -0.005;
    private static readonly _textZOffset = -0.005;
    private static readonly _backWidthRatio = 0.85;
    private static readonly _backHeightRatio = 0.85;
    private static readonly _placeholderAspect = 1 / 1.414;

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
        this._prevClearColor = scene.clearColor.clone();
        scene.clearColor = new Color4(0, 0, 0, 0);

        this._panelRoot = new TransformNode('pdf_panel_root', scene);
        this._panelRoot.position = PdfReaderDemo._panelPosition.clone();
        this._cleanup.add(this._panelRoot);

        this._renderCanvas = document.createElement('canvas');

        this._gizmoAnchor = new Mesh('pdf_gizmo_anchor', scene);
        this._gizmoAnchor.parent = this._panelRoot;
        this._gizmoAnchor.position = new Vector3(0, 0.06, 0);
        this._gizmoAnchor.isVisible = false;
        this._cleanup.add(this._gizmoAnchor);

        this._displayPlane = MeshBuilder.CreatePlane('pdf_display', { width: 1, height: 1 }, scene);
        this._displayPlane.parent = this._gizmoAnchor;
        this._displayPlane.position = Vector3.Zero();
        this._cleanup.add(this._displayPlane);

        const light = new HemisphericLight('pdf_light', new Vector3(0, 1, 0), scene);
        light.intensity = 1;
        light.diffuse = new Color3(1, 1, 1);
        light.groundColor = new Color3(0.5, 0.5, 0.5);
        light.includedOnlyMeshes = [this._displayPlane];
        this._cleanup.add(light);

        this._displayMaterial = new StandardMaterial('pdf_display_mat', scene);
        this._displayMaterial.backFaceCulling = false;
        this._displayMaterial.specularColor = new Color3(0, 0, 0);
        this._displayMaterial.diffuseColor = new Color3(1, 1, 1);
        this._displayPlane.material = this._displayMaterial;
        this._cleanup.add(this._displayMaterial);

        this._prevBtn = this._createBtn(
            'Prev',
            PdfReaderDemo._smallBtnWidth,
            PdfReaderDemo._smallBtnHeight,
            new Vector3(-0.16, -0.19, 0),
            '#222226',
            '#ffffff22',
            () => this._prevPage(),
        );

        this._nextBtn = this._createBtn(
            'Next',
            PdfReaderDemo._smallBtnWidth,
            PdfReaderDemo._smallBtnHeight,
            new Vector3(0.16, -0.19, 0),
            '#222226',
            '#ffffff22',
            () => this._nextPage(),
        );

        this._gizmosBtn = this._createBtn(
            'Gizmos On',
            0.16,
            PdfReaderDemo._btnHeight * 0.8,
            new Vector3(0, -0.34, 0),
            '#1a3a1a',
            '#50ff5044',
            () => this._toggleGizmos(),
        );

        const goBack = this._getGoBack();
        this._backBtn = this._createBtn(
            'Return to Main Scene',
            PdfReaderDemo._btnWidth * PdfReaderDemo._backWidthRatio,
            PdfReaderDemo._btnHeight * PdfReaderDemo._backHeightRatio,
            new Vector3(0, -0.27, 0),
            '#2a1a0a',
            '#ffb45044',
            () => {
                if (goBack) goBack();
            },
        );

        this._setupText();

        const presetPages = (scene.metadata as Record<string, unknown>)?.pdfPages as PreProcessedPage[] | undefined;
        if (presetPages) {
            this._loadPages(presetPages);
        } else {
            this._drawPlaceholder();
            this._applyState();
        }
    }

    private _createBtn(
        label: string,
        width: number,
        height: number,
        position: Vector3,
        bgColor: string,
        borderColor: string,
        onClick: () => void,
    ): CreateUiButtonResult {
        const result = createUiButton(this._scene, {
            name: `pdf_${label.replace(/\s+/g, '_')}`,
            width,
            height,
            position,
            parent: this._panelRoot,
            bgColor,
            borderColor,
            cornerRadius: PdfReaderDemo._cornerRadius,
            borderThickness: PdfReaderDemo._borderThickness,
            onClick,
        });
        this._cleanup.add(result.texture);
        this._cleanup.add(result.plane);
        return result;
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
        const h = Math.round(w / PdfReaderDemo._placeholderAspect);
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
        this._updatePlaneSize(PdfReaderDemo._placeholderAspect);
    }

    private _setupText(): void {
        const textManager = new TextManager(this._scene.getEngine());
        this._textManager = textManager;
        textManager.init().then(() => {
            if (this._disposed) {
                textManager.dispose();
                this._textManager = null;
                return;
            }
            this._rebuildText();
            this._detachText = textManager.attachToScene(this._scene);
            this._cleanup.add(textManager);
        });
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer) return;
        this._textManager.renderer.clearParagraphs();

        const px = PdfReaderDemo._panelPosition.x;
        const py = PdfReaderDemo._panelPosition.y;
        const pz = PdfReaderDemo._panelPosition.z;
        const ty = PdfReaderDemo._textYOffset;
        const tz = PdfReaderDemo._textZOffset;

        if (this._preProcessedPages === null) {
            this._textManager.addParagraph(
                'PDF Reader',
                new Vector3(px, py + 0.22 + ty, pz + tz),
                PdfReaderDemo._textScale,
            );
        }

        if (this._prevBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                'Prev',
                new Vector3(px - 0.16, py - 0.19 + ty, pz + tz),
                PdfReaderDemo._smallTextScale,
            );
            this._textManager.addParagraph(
                'Next',
                new Vector3(px + 0.16, py - 0.19 + ty, pz + tz),
                PdfReaderDemo._smallTextScale,
            );
        }

        this._textManager.addParagraph(
            this._statusText,
            new Vector3(px, py - 0.19 + ty, pz + tz),
            PdfReaderDemo._statusTextScale,
        );

        if (this._backBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(px, py - 0.27 + ty, pz + tz),
                PdfReaderDemo._textScale,
            );
        }

        if (this._gizmosBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                this._gizmosEnabled ? 'Gizmos Off' : 'Gizmos On',
                new Vector3(px, py - 0.34 + ty, pz + tz),
                PdfReaderDemo._smallTextScale,
            );
        }
    }

    private _applyState(): void {
        const hasPdf = this._preProcessedPages !== null;
        this._prevBtn.plane.setEnabled(hasPdf);
        this._nextBtn.plane.setEnabled(hasPdf);
        this._rebuildText();
    }

    private _getGoBack(): (() => void) | null {
        const meta = this._scene.metadata as Record<string, unknown> | undefined;
        return (meta?.goBack as (() => void) | undefined) ?? null;
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
