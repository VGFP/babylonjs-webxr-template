import {
    AbstractMesh,
    Color3,
    Color4,
    DirectionalLight,
    GizmoManager,
    HemisphericLight,
    IShadowLight,
    Matrix,
    Mesh,
    MeshBuilder,
    Observer,
    PointLight,
    Quaternion,
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

interface CreatedPointLight {
    light: PointLight;
    shadowGenerator?: ShadowGenerator;
    anchor?: Mesh;
    gizmo?: GizmoManager;
    root?: TransformNode;
}

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
    private _directional: DirectionalLight;
    private _hemispheric: HemisphericLight;
    private _shadowGen: ShadowGenerator;
    private _cube: Mesh;
    private _gizmoManager: GizmoManager | null = null;
    private _wallMeshes: Mesh[] = [];
    private _wallMaterials: ShadowOnlyMaterial[] = [];
    private _planeObserver: Observer<import('../xr').XrPlaneData> | null = null;
    private _createdPointLights: CreatedPointLight[] = [];
    private _defaultLightsOn = true;
    private _gizmosVisible = true;
    private static readonly _devFileIo = import.meta.env.VITE_DEV_FILE_IO === 'true';

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = scene.clearColor.clone();
        scene.clearColor = new Color4(0, 0, 0, 0);

        this._homeDirectional = scene.getLightByName('directionalLight');
        this._homeHemispheric = scene.getLightByName('hemisphericLight');
        if (this._homeDirectional) this._homeDirectional.setEnabled(false);
        if (this._homeHemispheric) this._homeHemispheric.setEnabled(false);

        this._directional = new DirectionalLight('ls_directional', new Vector3(0, -1, -1), scene);
        this._directional.intensity = 0.7;
        this._directional.position = new Vector3(0, 2, 0);
        this._cleanup.push(this._directional);

        this._hemispheric = new HemisphericLight('ls_hemispheric', new Vector3(0, 1, 0), scene);
        this._hemispheric.intensity = 0.7;
        this._cleanup.push(this._hemispheric);

        this._shadowGen = new ShadowGenerator(1024, this._directional as IShadowLight);
        this._shadowGen.useBlurExponentialShadowMap = true;
        this._shadowGen.blurKernel = 32;

        this._cube = MeshBuilder.CreateBox('ls_cube', { size: 0.5 }, scene);
        this._cube.position = new Vector3(0, 0.3, -2);
        const cubeMat = new StandardMaterial('ls_cubeMat', scene);
        cubeMat.diffuseColor = new Color3(0.2, 0.6, 1);
        cubeMat.emissiveColor = new Color3(0.2, 0.6, 1);
        this._cube.material = cubeMat;
        this._cube.receiveShadows = true;
        this._shadowGen.addShadowCaster(this._cube);
        this._cleanup.push(this._cube);
        this._cleanup.push(cubeMat);

        this._gizmoManager = new GizmoManager(scene);
        this._gizmoManager.positionGizmoEnabled = false;
        this._gizmoManager.rotationGizmoEnabled = false;
        this._gizmoManager.scaleGizmoEnabled = false;
        this._gizmoManager.boundingBoxGizmoEnabled = true;
        this._gizmoManager.usePointerToAttachGizmos = false;
        this._gizmoManager.attachToMesh(this._cube);

        const pdm = (scene.metadata as Record<string, unknown> | undefined)?.planeDetectionManager as
            | PlaneDetectionManager
            | undefined;
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
                applyShadowMaterialFacing(wallMesh, shadowMat, this._directional as IShadowLight);
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

        this._shadowGen.getShadowMap()!.renderList = [this._cube];

        const actionBtnDefs = [
            { name: 'ls_addLight', label: 'Add Light' },
            { name: 'ls_deleteLight', label: 'Delete Light' },
            { name: 'ls_turnOffDefault', label: 'Turn Off default lighting' },
            { name: 'ls_saveResults', label: 'Save results' },
            { name: 'ls_loadResults', label: 'Load results' },
            { name: 'ls_hideGizmos', label: 'Hide light gizmos' },
        ].filter((def) => {
            if (!XrLightShadowsDemo._devFileIo && (def.name === 'ls_saveResults' || def.name === 'ls_loadResults')) {
                return false;
            }
            return true;
        });
        const actionBtnWidth = 0.22;
        const actionBtnGap = 0.02;
        const totalActionWidth = actionBtnDefs.length * actionBtnWidth + (actionBtnDefs.length - 1) * actionBtnGap;
        const actionStartX = -totalActionWidth / 2 + actionBtnWidth / 2;
        const actionRowY = 0.06;
        const actionTextScale = 0.016;

        const actionHandlers: Record<string, () => void> = {
            ls_addLight: () => this._addPointLight(),
            ls_deleteLight: () => this._deleteLastPointLight(),
            ls_turnOffDefault: () => this._toggleDefaultLights(),
            ls_saveResults: () => this._saveResults(),
            ls_loadResults: () => this._loadResults(),
            ls_hideGizmos: () => this._toggleGizmoVisibility(),
        };

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
                onClick: actionHandlers[def.name] ?? (() => {}),
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

        try {
            const stored = localStorage.getItem('xr_lightShadows_state');
            if (stored) {
                const json = JSON.parse(stored);
                this._loadFromJson(json);
            }
        } catch {
            // ignore corrupt stored state
        }
    }

    private _addPointLight(position?: Vector3): void {
        const pos = position ?? new Vector3(0, 0.4, -1.5);
        const scene = this._scene;

        const light = new PointLight('ls_pointLight', pos.clone(), scene);
        light.intensity = 1.2;
        light.range = 8;

        const shadowGen = new ShadowGenerator(1024, light);
        shadowGen.useBlurExponentialShadowMap = true;
        shadowGen.blurKernel = 16;
        shadowGen.bias = 0.001;
        shadowGen.addShadowCaster(this._cube);
        shadowGen.getShadowMap()!.renderList = [this._cube];

        this._updateShadowOnlyMaterialsForLight(light as unknown as IShadowLight);

        light.shadowMinZ = 0.1;
        light.shadowMaxZ = Math.max(light.range, 12);

        const root = new TransformNode('ls_pointLightRoot', scene);
        root.position = pos.clone();

        const anchor = MeshBuilder.CreateSphere('ls_pointLightAnchor', { diameter: 0.08 }, scene);
        anchor.parent = root;
        anchor.position = Vector3.Zero();
        const anchorMat = new StandardMaterial('ls_pointLightAnchorMat', scene);
        anchorMat.emissiveColor = new Color3(1, 0.9, 0.2);
        anchorMat.diffuseColor = new Color3(0, 0, 0);
        anchorMat.specularColor = new Color3(0, 0, 0);
        anchor.material = anchorMat;

        light.parent = anchor;
        light.position = Vector3.Zero();

        const baseIntensity = light.intensity;
        anchor.onAfterWorldMatrixUpdateObservable.add(() => {
            const s = anchor.scaling;
            const avg = (s.x + s.y + s.z) / 3;
            light.intensity = baseIntensity * avg;
        });

        const gizmo = new GizmoManager(scene);
        gizmo.positionGizmoEnabled = true;
        gizmo.rotationGizmoEnabled = false;
        gizmo.scaleGizmoEnabled = false;
        gizmo.boundingBoxGizmoEnabled = false;
        gizmo.usePointerToAttachGizmos = false;
        if (gizmo.gizmos.positionGizmo) {
            gizmo.gizmos.positionGizmo.scaleRatio = 2.5;
        }
        gizmo.attachableMeshes = [anchor];
        gizmo.attachToMesh(anchor);

        const xrAnchors = (scene.metadata as Record<string, unknown> | undefined)?.xrAnchors as any | undefined;
        if (xrAnchors && typeof xrAnchors.addAnchorAtPositionAndRotationAsync === 'function') {
            const rq =
                root.rotationQuaternion ||
                Quaternion.FromEulerAngles(root.rotation.x, root.rotation.y, root.rotation.z);
            xrAnchors
                .addAnchorAtPositionAndRotationAsync(root.getAbsolutePosition(), rq)
                .then((a: any) => {
                    a.attachedNode = root;
                })
                .catch(() => {});
        }

        const entry: CreatedPointLight = { light, shadowGenerator: shadowGen, anchor, gizmo, root };
        this._createdPointLights.push(entry);
    }

    private _deleteLastPointLight(): void {
        const last = this._createdPointLights.pop();
        if (!last) return;
        last.shadowGenerator?.dispose();
        last.light.dispose();
        last.anchor?.dispose();
        last.gizmo?.dispose();
        last.root?.dispose();
    }

    private _toggleDefaultLights(): void {
        this._defaultLightsOn = !this._defaultLightsOn;
        this._directional.setEnabled(this._defaultLightsOn);
        this._hemispheric.setEnabled(this._defaultLightsOn);
    }

    private _findBestReferencePlane(): { ref: AbstractMesh; refWorldMatrix: Matrix } | null {
        const candidates = this._scene.meshes.filter((m) => {
            const mat = m.material as any;
            return !!mat && (mat.name?.includes('Shadow') || mat.getClassName?.() === 'ShadowOnlyMaterial');
        }) as AbstractMesh[];

        let bestRef: AbstractMesh | null = null;
        let bestMatrix = Matrix.Identity();
        let bestScore = -Infinity;

        for (const m of candidates) {
            const n = Vector3.TransformNormal(Vector3.Up(), m.getWorldMatrix()).normalize();
            const score = Vector3.Dot(n, Vector3.Up());
            const bb = m.getBoundingInfo().boundingBox;
            const size = bb.maximum.subtract(bb.minimum);
            const area = size.x * size.z;
            const s = score > 0.85 ? area : -1;
            if (s > bestScore) {
                bestScore = s;
                bestRef = m;
                bestMatrix = m.getWorldMatrix().clone();
            }
        }

        return bestRef ? { ref: bestRef, refWorldMatrix: bestMatrix } : null;
    }

    private _saveResults(): void {
        const data = this._buildStateData();

        if (XrLightShadowsDemo._devFileIo) {
            this._downloadJson(data, 'point-lights.json');
        }

        try {
            localStorage.setItem('xr_lightShadows_state', JSON.stringify(data));
        } catch {
            // ignore storage quota errors
        }
    }

    private _buildStateData(): Record<string, unknown> {
        const pointsWorld = this._createdPointLights.map((pl) => {
            const pos =
                pl.anchor?.getAbsolutePosition() || (pl.light as any).getAbsolutePosition?.() || pl.light.position;
            return { x: pos.x, y: pos.y, z: pos.z };
        });

        const refResult = this._findBestReferencePlane();

        let data: Record<string, unknown>;

        if (refResult) {
            const inv = refResult.refWorldMatrix.clone();
            inv.invert();
            const pointsLocal = this._createdPointLights.map((pl) => {
                const pos =
                    pl.anchor?.getAbsolutePosition() || (pl.light as any).getAbsolutePosition?.() || pl.light.position;
                const pLocal = Vector3.TransformCoordinates(pos, inv);
                return { x: pLocal.x, y: pLocal.y, z: pLocal.z };
            });
            const refMatrix = Array.from(refResult.refWorldMatrix.toArray());
            data = { pointsWorld, pointsLocal, refMatrix, schemaVersion: 3 };
        } else {
            data = { points: pointsWorld, schemaVersion: 3 };
        }

        data.gizmosVisible = this._gizmosVisible;
        data.defaultLightsOn = this._defaultLightsOn;
        return data;
    }

    private _saveToLocalStorage(): void {
        try {
            const data = this._buildStateData();
            localStorage.setItem('xr_lightShadows_state', JSON.stringify(data));
        } catch {
            // ignore storage quota errors
        }
    }

    private _downloadJson(data: unknown, filename: string): void {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    private _loadFromJson(json: Record<string, any>): void {
        const refResult = this._findBestReferencePlane();

        const pointsLocal = Array.isArray(json.pointsLocal) ? json.pointsLocal : [];
        const refMatrixArr = Array.isArray(json.refMatrix) && json.refMatrix.length === 16 ? json.refMatrix : null;

        if (refResult && pointsLocal.length) {
            const wm = refResult.refWorldMatrix;
            for (const p of pointsLocal) {
                if (p && typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number') {
                    const w = Vector3.TransformCoordinates(new Vector3(p.x, p.y, p.z), wm);
                    this._addPointLight(w);
                }
            }
        } else if (refMatrixArr && pointsLocal.length) {
            const wm = Matrix.FromArray(refMatrixArr);
            for (const p of pointsLocal) {
                if (p && typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number') {
                    const w = Vector3.TransformCoordinates(new Vector3(p.x, p.y, p.z), wm);
                    this._addPointLight(w);
                }
            }
        } else {
            const points = Array.isArray(json.pointsWorld)
                ? json.pointsWorld
                : Array.isArray(json.points)
                  ? json.points
                  : [];
            for (const p of points) {
                if (p && typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number') {
                    this._addPointLight(new Vector3(p.x, p.y, p.z));
                }
            }
        }

        if (typeof json.gizmosVisible === 'boolean') {
            this._gizmosVisible = json.gizmosVisible;
            this._applyGizmoVisibility();
        }
        if (typeof json.defaultLightsOn === 'boolean') {
            this._defaultLightsOn = json.defaultLightsOn;
            this._directional.setEnabled(this._defaultLightsOn);
            this._hemispheric.setEnabled(this._defaultLightsOn);
        }
    }

    private _loadResults(): void {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.style.display = 'none';
        input.onchange = () => {
            const file = input.files && input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const json = JSON.parse(String(reader.result || '{}'));
                    this._loadFromJson(json);
                } catch {
                    // ignore corrupt file data
                }
            };
            reader.readAsText(file);
        };
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
    }

    private _updateShadowOnlyMaterialsForLight(light: IShadowLight): void {
        for (const m of this._scene.meshes) {
            const mat = m.material;
            if (mat && mat instanceof ShadowOnlyMaterial) {
                let ld: Vector3 | null = null;
                if ((light as any).direction) {
                    ld = ((light as any).direction as Vector3).clone().normalize();
                } else if ((light as any).getAbsolutePosition) {
                    const lp = (light as any).getAbsolutePosition() as Vector3;
                    const mc = m.getBoundingInfo().boundingBox.centerWorld;
                    ld = mc.subtract(lp).normalize();
                }
                if (ld) {
                    const n = Vector3.TransformNormal(Vector3.Up(), m.getWorldMatrix()).normalize();
                    const facing = Vector3.Dot(n, ld) < 0;
                    (mat as ShadowOnlyMaterial).activeLight = light;
                    (mat as ShadowOnlyMaterial).alpha = facing ? 0.4 : 0;
                }
            }
        }
    }

    private _applyGizmoVisibility(): void {
        for (const pl of this._createdPointLights) {
            if (pl.gizmo) {
                if (this._gizmosVisible) {
                    pl.gizmo.attachToMesh(pl.anchor!);
                } else {
                    pl.gizmo.attachToMesh(null as any);
                }
            }
        }
    }

    private _toggleGizmoVisibility(): void {
        this._gizmosVisible = !this._gizmosVisible;
        this._applyGizmoVisibility();
    }

    teardown(): void {
        this._disposed = true;
        this._saveToLocalStorage();
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        if (this._planeObserver) {
            const pdm = (this._scene.metadata as Record<string, unknown> | undefined)?.planeDetectionManager as
                | PlaneDetectionManager
                | undefined;
            if (pdm) pdm.onPlaneAdded.remove(this._planeObserver);
            this._planeObserver = null;
        }
        for (const pl of this._createdPointLights) {
            pl.shadowGenerator?.dispose();
            pl.light.dispose();
            pl.anchor?.dispose();
            pl.gizmo?.dispose();
            pl.root?.dispose();
        }
        this._createdPointLights = [];
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
