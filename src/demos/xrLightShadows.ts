import {
    Color3,
    Color4,
    DirectionalLight,
    GizmoManager,
    HemisphericLight,
    IShadowLight,
    Mesh,
    MeshBuilder,
    Observer,
    Scene,
    ShadowGenerator,
    StandardMaterial,
    TransformNode,
    Vector3,
} from '@babylonjs/core';
import '@babylonjs/core/Collisions';
import '@babylonjs/core/Gizmos/gizmoManager';
import '@babylonjs/core/Gizmos/boundingBoxGizmo';
import '@babylonjs/core/Materials/standardMaterial';
import { ShadowOnlyMaterial } from '@babylonjs/materials';

import { TextManager } from '../text/textRenderer';
import { createUiButton } from '../core/uiButton';
import { applyShadowMaterialFacing } from '../materials';
import { buildPolygonMesh } from '../meshes';
import { PlaneDetectionManager } from '../xr';

export class XrLightShadowsDemo {
    private static readonly _btnWidth = 0.44;
    private static readonly _btnHeight = 0.07;
    private static readonly _panelPosition = new Vector3(0, 1.35, -0.55);
    private static readonly _cornerRadius = 25;
    private static readonly _borderThickness = 8;
    private static readonly _textScale = 0.028;
    private static readonly _textYOffset = -0.005;
    private static readonly _textZOffset = -0.005;
    private static readonly _backWidthRatio = 0.8;
    private static readonly _backHeightRatio = 0.85;

    private _scene: Scene;
    private _cleanup: { dispose(): void }[] = [];
    private _detachText: (() => void) | null = null;
    private _disposed = false;
    private _prevClearColor: Color4;
    private _homeDirectional: any;
    private _homeHemispheric: any;
    private _shadowGen: ShadowGenerator;
    private _gizmoManager: GizmoManager | null = null;
    private _wallMeshes: Mesh[] = [];
    private _wallMaterials: ShadowOnlyMaterial[] = [];
    private _planeObserver: Observer<import('../xr').XrPlaneData> | null = null;

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = scene.clearColor.clone();
        scene.clearColor = new Color4(0, 0, 0, 0);

        this._homeDirectional = scene.getLightByName('directionalLight');
        this._homeHemispheric = scene.getLightByName('hemisphericLight');
        if (this._homeDirectional) this._homeDirectional.setEnabled(false);
        if (this._homeHemispheric) this._homeHemispheric.setEnabled(false);

        const directional = new DirectionalLight('ls_directional', new Vector3(0, -1, -1), scene);
        directional.intensity = 0.7;
        directional.position = new Vector3(0, 2, 0);
        this._cleanup.push(directional);

        const hemispheric = new HemisphericLight('ls_hemispheric', new Vector3(0, 1, 0), scene);
        hemispheric.intensity = 0.7;
        this._cleanup.push(hemispheric);

        this._shadowGen = new ShadowGenerator(1024, directional as IShadowLight);
        this._shadowGen.useBlurExponentialShadowMap = true;
        this._shadowGen.blurKernel = 32;

        const cube = MeshBuilder.CreateBox('ls_cube', { size: 0.5 }, scene);
        cube.position = new Vector3(0, 0.3, -2);
        const cubeMat = new StandardMaterial('ls_cubeMat', scene);
        cubeMat.diffuseColor = new Color3(0.2, 0.6, 1);
        cube.material = cubeMat;
        cube.receiveShadows = true;
        this._shadowGen.addShadowCaster(cube);
        this._cleanup.push(cube);
        this._cleanup.push(cubeMat);

        this._gizmoManager = new GizmoManager(scene);
        this._gizmoManager.positionGizmoEnabled = false;
        this._gizmoManager.rotationGizmoEnabled = false;
        this._gizmoManager.scaleGizmoEnabled = false;
        this._gizmoManager.boundingBoxGizmoEnabled = true;
        this._gizmoManager.usePointerToAttachGizmos = false;
        this._gizmoManager.attachToMesh(cube);

        const pdm = (scene.metadata as Record<string, unknown> | undefined)?.planeDetectionManager as PlaneDetectionManager | undefined;
        if (pdm) {
            const createWallMesh = (planeData: import('../xr').XrPlaneData) => {
                const shadowMat = new ShadowOnlyMaterial(`ls_wall_shadow_${planeData.id}`, scene);
                const wallMesh = buildPolygonMesh(
                    {
                        polygonDefinition: planeData.polygonDefinition,
                        transformationMatrix: planeData.transformationMatrix,
                        orientation: planeData.xrPlane.orientation,
                    },
                    scene,
                    shadowMat,
                );
                applyShadowMaterialFacing(wallMesh, shadowMat, directional as IShadowLight);
                wallMesh.receiveShadows = true;
                this._wallMeshes.push(wallMesh);
                this._wallMaterials.push(shadowMat);
            };

            for (const planeData of pdm.detectedPlanes) {
                createWallMesh(planeData);
            }

            this._planeObserver = pdm.onPlaneAdded.add((planeData) => createWallMesh(planeData));
        }

        const panelRoot = new TransformNode('ls_panel_root', scene);
        panelRoot.position = XrLightShadowsDemo._panelPosition.clone();
        this._cleanup.push(panelRoot);

        this._shadowGen.getShadowMap()!.renderList = [cube];

        const actionBtnDefs = [
            { name: 'ls_addLight', label: 'Add Light' },
            { name: 'ls_deleteLight', label: 'Delete Light' },
            { name: 'ls_turnOffDefault', label: 'Turn Off default lighting' },
            { name: 'ls_saveResults', label: 'Save results' },
            { name: 'ls_loadResults', label: 'Load results' },
            { name: 'ls_hideGizmos', label: 'Hide light gizmos' },
        ];
        const actionBtnWidth = 0.22;
        const actionBtnGap = 0.02;
        const totalActionWidth = actionBtnDefs.length * actionBtnWidth + (actionBtnDefs.length - 1) * actionBtnGap;
        const actionStartX = -totalActionWidth / 2 + actionBtnWidth / 2;
        const actionRowY = 0.06;
        const actionTextScale = 0.016;

        for (let i = 0; i < actionBtnDefs.length; i++) {
            const def = actionBtnDefs[i];
            const btnResult = createUiButton(scene, {
                name: def.name,
                width: actionBtnWidth,
                height: XrLightShadowsDemo._btnHeight,
                position: new Vector3(actionStartX + i * (actionBtnWidth + actionBtnGap), actionRowY, 0),
                parent: panelRoot,
                bgColor: '#1a2a3aee',
                borderColor: '#50a0ff44',
                cornerRadius: XrLightShadowsDemo._cornerRadius,
                borderThickness: XrLightShadowsDemo._borderThickness,
                onClick: () => {},
            });
            this._cleanup.push(btnResult.texture);
            this._cleanup.push(btnResult.plane);
            this._shadowGen.removeShadowCaster(btnResult.plane);
        }

        const goBack = (scene.metadata as Record<string, unknown> | undefined)?.goBack as (() => void) | undefined;
        const backBtnY = goBack ? -0.06 : 0;

        const textManager = new TextManager(scene.getEngine());
        textManager.init().then(() => {
            if (this._disposed) {
                textManager.dispose();
                return;
            }

            for (let i = 0; i < actionBtnDefs.length; i++) {
                const localX = actionStartX + i * (actionBtnWidth + actionBtnGap);
                textManager.addParagraph(
                    actionBtnDefs[i].label,
                    new Vector3(
                        XrLightShadowsDemo._panelPosition.x + localX,
                        XrLightShadowsDemo._panelPosition.y + actionRowY + XrLightShadowsDemo._textYOffset,
                        XrLightShadowsDemo._panelPosition.z + XrLightShadowsDemo._textZOffset,
                    ),
                    actionTextScale,
                );
            }

            if (goBack) {
                textManager.addParagraph(
                    'Return to Main Scene',
                    new Vector3(
                        XrLightShadowsDemo._panelPosition.x,
                        XrLightShadowsDemo._panelPosition.y + backBtnY + XrLightShadowsDemo._textYOffset,
                        XrLightShadowsDemo._panelPosition.z + XrLightShadowsDemo._textZOffset,
                    ),
                    XrLightShadowsDemo._textScale,
                );
            }

            this._detachText = textManager.attachToScene(scene);
            this._cleanup.push(textManager);
        });

        if (goBack) {
            const btnResult = createUiButton(scene, {
                name: 'ls_back',
                width: XrLightShadowsDemo._btnWidth * XrLightShadowsDemo._backWidthRatio,
                height: XrLightShadowsDemo._btnHeight * XrLightShadowsDemo._backHeightRatio,
                position: new Vector3(0, backBtnY, 0),
                parent: panelRoot,
                bgColor: '#2a1a0aee',
                borderColor: '#ffb45044',
                cornerRadius: XrLightShadowsDemo._cornerRadius,
                borderThickness: XrLightShadowsDemo._borderThickness,
                onClick: () => goBack(),
            });
            this._cleanup.push(btnResult.texture);
            this._cleanup.push(btnResult.plane);
            this._shadowGen.removeShadowCaster(btnResult.plane);
        }
    }

    teardown(): void {
        this._disposed = true;
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        if (this._planeObserver) {
            const pdm = (this._scene.metadata as Record<string, unknown> | undefined)?.planeDetectionManager as PlaneDetectionManager | undefined;
            if (pdm) pdm.onPlaneAdded.remove(this._planeObserver);
            this._planeObserver = null;
        }
        for (const mesh of this._wallMeshes) mesh.dispose();
        for (const mat of this._wallMaterials) mat.dispose();
        this._wallMeshes = [];
        this._wallMaterials = [];
        if (this._gizmoManager) {
            this._gizmoManager.dispose();
            this._gizmoManager = null;
        }
        this._shadowGen.dispose();
        for (const item of this._cleanup) item.dispose();
        if (this._homeDirectional) this._homeDirectional.setEnabled(true);
        if (this._homeHemispheric) this._homeHemispheric.setEnabled(true);
        this._scene.clearColor = this._prevClearColor;
    }
}
