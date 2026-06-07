import {
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
import {
    DisposableStack,
    createGizmoManager,
    createPanelButton,
    createPanelRoot,
    getMetadata,
    initPanelText,
    saveAndTransparentClearColor,
    UI_LAYOUT,
    BACK_BUTTON_COLORS,
    STORAGE_KEYS,
    readStorage,
    writeStorage,
    downloadJson,
    pickFile,
} from '../core';
import { createShadowGenerator } from '../lighting/shadowGeneratorFactory';
import { applyShadowMaterialFacing } from '../materials';
import { buildPolygonMesh } from '../meshes';
import type { XrPlaneData } from '../xr';

interface CreatedPointLight {
    light: PointLight;
    shadowGenerator?: ShadowGenerator;
    anchor?: Mesh;
    gizmo?: GizmoManager;
    root?: TransformNode;
}

interface TextLayoutParams {
    buttonNames: string[];
    actionStartX: number;
    actionBtnWidth: number;
    actionBtnGap: number;
    actionRowY: number;
    actionTextScale: number;
    goBack: boolean;
    backBtnY: number;
}

interface ButtonDef {
    name: string;
    label: string;
}

const DEBUG_PALETTE = [
    new Color3(1, 0.2, 0.2),
    new Color3(0.2, 1, 0.2),
    new Color3(0.3, 0.3, 1),
    new Color3(1, 1, 0.2),
    new Color3(1, 0.2, 1),
    new Color3(0.2, 1, 1),
    new Color3(1, 0.6, 0.2),
    new Color3(0.6, 0.2, 1),
    new Color3(0.2, 1, 0.6),
    new Color3(1, 0.4, 0.6),
];

export class XrLightShadowsDemo {
    private static readonly _devFileIo = import.meta.env.VITE_DEV_FILE_IO === 'true';
    private static readonly _debug = import.meta.env.VITE_DEBUG === 'true';

    private _scene: Scene;
    private _cleanup = new DisposableStack();
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
    private _debugMaterials: StandardMaterial[] = [];
    private _wallMeshByPlaneId: Map<number, Mesh> = new Map();
    private _planeObserver: Observer<XrPlaneData> | null = null;
    private _planeUpdatedObserver: Observer<XrPlaneData> | null = null;
    private _createdPointLights: CreatedPointLight[] = [];
    private _defaultLightsOn = true;
    private _gizmosVisible = true;
    private _debugPlanesVisible = false;
    private _textManager: TextManager | null = null;
    private _textLayout: TextLayoutParams | null = null;

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = saveAndTransparentClearColor(scene);

        this._homeDirectional = scene.getLightByName('directionalLight');
        this._homeHemispheric = scene.getLightByName('hemisphericLight');
        if (this._homeDirectional) this._homeDirectional.setEnabled(false);
        if (this._homeHemispheric) this._homeHemispheric.setEnabled(false);

        this._directional = this._createDirectionalLight(scene);
        this._hemispheric = this._createHemisphericLight(scene);
        this._shadowGen = createShadowGenerator(this._directional as IShadowLight);
        this._cube = this._createShadowCube(scene);

        this._gizmoManager = createGizmoManager(scene, {
            boundingBox: true,
            attachTo: this._cube,
        });

        this._setupWallMeshes(scene);

        const panelRoot = createPanelRoot(scene, 'ls_panel_root', this._cleanup);

        this._shadowGen.getShadowMap()!.renderList = [this._cube];

        this._createActionButtons(scene, panelRoot);
    }

    private _createDirectionalLight(scene: Scene): DirectionalLight {
        const light = new DirectionalLight('ls_directional', new Vector3(0, -1, -1), scene);
        light.intensity = 0.7;
        light.position = new Vector3(0, 2, 0);
        light.shadowFrustumSize = 20;
        light.shadowMinZ = 0;
        light.shadowMaxZ = 25;
        this._cleanup.add(light);
        return light;
    }

    private _createHemisphericLight(scene: Scene): HemisphericLight {
        const light = new HemisphericLight('ls_hemispheric', new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        this._cleanup.add(light);
        return light;
    }

    private _createShadowCube(scene: Scene): Mesh {
        const cube = MeshBuilder.CreateBox('ls_cube', { size: 0.5 }, scene);
        cube.position = new Vector3(0, 0.3, -2);
        const cubeMat = new StandardMaterial('ls_cubeMat', scene);
        cubeMat.diffuseColor = new Color3(0.2, 0.6, 1);
        cubeMat.emissiveColor = new Color3(0.2, 0.6, 1);
        cube.material = cubeMat;
        cube.receiveShadows = true;
        this._shadowGen.addShadowCaster(cube);
        this._cleanup.add(cube);
        this._cleanup.add(cubeMat);
        return cube;
    }

    private _setupWallMeshes(scene: Scene): void {
        const pdm = getMetadata(scene).planeDetectionManager;
        if (!pdm) return;

        let planeColorIdx = 0;

        const createWallMesh = (planeData: XrPlaneData) => {
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

            const debugMat = this._createDebugMaterial(
                scene,
                planeData.id,
                DEBUG_PALETTE[planeColorIdx % DEBUG_PALETTE.length],
            );
            planeColorIdx++;
            if (this._debugPlanesVisible) {
                wallMesh.material = debugMat;
            }

            this._wallMeshes.push(wallMesh);
            this._wallMaterials.push(shadowMat);
            this._debugMaterials.push(debugMat);
            this._wallMeshByPlaneId.set(planeData.id, wallMesh);
        };

        const updateWallMesh = (planeData: XrPlaneData) => {
            const oldMesh = this._wallMeshByPlaneId.get(planeData.id);
            if (!oldMesh) return;

            const idx = this._wallMeshes.indexOf(oldMesh);
            const shadowMat = idx >= 0 ? this._wallMaterials[idx] : undefined;
            const debugMat = idx >= 0 ? this._debugMaterials[idx] : undefined;

            const newMesh = buildPolygonMesh(
                {
                    polygonDefinition: planeData.polygonDefinition,
                    transformationMatrix: planeData.transformationMatrix,
                    orientation: planeData.xrPlane.orientation,
                },
                scene,
                shadowMat,
            );
            if (shadowMat) {
                applyShadowMaterialFacing(newMesh, shadowMat, this._directional as IShadowLight);
            }
            newMesh.receiveShadows = true;
            if (this._debugPlanesVisible && debugMat) {
                newMesh.material = debugMat;
            }

            oldMesh.dispose();
            this._wallMeshByPlaneId.set(planeData.id, newMesh);
            if (idx >= 0) {
                this._wallMeshes[idx] = newMesh;
            }
        };

        for (const planeData of pdm.detectedPlanes) {
            createWallMesh(planeData);
        }

        this._planeObserver = pdm.onPlaneAdded.add((planeData) => createWallMesh(planeData));
        this._planeUpdatedObserver = pdm.onPlaneUpdated.add((planeData) => updateWallMesh(planeData));
    }

    private _createDebugMaterial(scene: Scene, planeId: number, baseColor: Color3): StandardMaterial {
        const mat = new StandardMaterial(`ls_debug_${planeId}`, scene);
        mat.diffuseColor = baseColor;
        mat.emissiveColor = baseColor.scale(0.3);
        mat.alpha = 0.35;
        mat.backFaceCulling = false;
        mat.disableLighting = true;
        return mat;
    }

    private _createActionButtons(scene: Scene, panelRoot: TransformNode): void {
        const buttonDefs = this._buildButtonDefs();
        const layout = this._layoutActionRow(buttonDefs.length);

        const actionHandlers: Record<string, () => void> = {
            ls_togglePointLight: () => this._togglePointLight(),
            ls_debugPlanes: () => this._toggleDebugPlanes(),
            ls_saveResults: () => this._saveResults(),
            ls_loadResults: () => this._loadResults(),
            ls_hideGizmos: () => this._toggleGizmoVisibility(),
        };

        for (let i = 0; i < buttonDefs.length; i++) {
            const def = buttonDefs[i];
            const btnResult = createPanelButton({
                scene,
                cleanup: this._cleanup,
                namePrefix: '',
                label: def.name,
                width: layout.actionBtnWidth,
                height: UI_LAYOUT.panel.btnHeight,
                position: new Vector3(
                    layout.actionStartX + i * (layout.actionBtnWidth + layout.actionBtnGap),
                    layout.actionRowY,
                    0,
                ),
                parent: panelRoot,
                bgColor: '#1a2a3aee',
                borderColor: '#50a0ff44',
                onClick: actionHandlers[def.name] ?? (() => {}),
            });
            this._shadowGen.removeShadowCaster(btnResult.plane);
        }

        const goBack = getMetadata(this._scene).goBack;
        const backBtnY = goBack ? -0.06 : 0;

        this._textLayout = {
            buttonNames: buttonDefs.map((d) => d.name),
            ...layout,
            goBack: !!goBack,
            backBtnY,
        };

        this._setupButtonText(scene);

        if (goBack) {
            const btnResult = createPanelButton({
                scene,
                cleanup: this._cleanup,
                namePrefix: 'ls',
                label: 'back',
                width: UI_LAYOUT.panel.btnWidth * UI_LAYOUT.panel.backWidthRatio,
                height: UI_LAYOUT.panel.btnHeight * UI_LAYOUT.panel.backHeightRatio,
                position: new Vector3(0, backBtnY, 0),
                parent: panelRoot,
                bgColor: BACK_BUTTON_COLORS.bgColor + 'ee',
                borderColor: BACK_BUTTON_COLORS.borderColor,
                onClick: () => goBack(),
            });
            this._shadowGen.removeShadowCaster(btnResult.plane);
        }

        try {
            const stored = readStorage(STORAGE_KEYS.xrLightShadowsState);
            if (stored) {
                const json = JSON.parse(stored);
                this._loadFromJson(json);
            }
        } catch {
            // ignore corrupt stored state
        }
    }

    private _buildButtonDefs(): ButtonDef[] {
        const all: ButtonDef[] = [
            { name: 'ls_togglePointLight', label: 'Add Point Light' },
            { name: 'ls_debugPlanes', label: 'Debug Planes' },
            { name: 'ls_saveResults', label: 'Save results' },
            { name: 'ls_loadResults', label: 'Load results' },
            { name: 'ls_hideGizmos', label: 'Hide light gizmos' },
        ];
        return all.filter((def) => {
            if (!XrLightShadowsDemo._devFileIo && (def.name === 'ls_saveResults' || def.name === 'ls_loadResults')) {
                return false;
            }
            if (!XrLightShadowsDemo._debug && def.name === 'ls_debugPlanes') {
                return false;
            }
            return true;
        });
    }

    private _layoutActionRow(count: number): {
        actionStartX: number;
        actionBtnWidth: number;
        actionBtnGap: number;
        actionRowY: number;
        actionTextScale: number;
    } {
        const actionBtnWidth = 0.22;
        const actionBtnGap = 0.02;
        const totalActionWidth = count * actionBtnWidth + (count - 1) * actionBtnGap;
        const actionStartX = -totalActionWidth / 2 + actionBtnWidth / 2;
        return {
            actionStartX,
            actionBtnWidth,
            actionBtnGap,
            actionRowY: 0.06,
            actionTextScale: 0.016,
        };
    }

    private _setupButtonText(scene: Scene): void {
        initPanelText({
            scene,
            cleanup: this._cleanup,
            isDisposed: () => this._disposed,
            onReady: (tm) => {
                this._textManager = tm;
                this._rebuildText();
                this._detachText = tm.attachToScene(scene);
            },
        });
    }

    private _getButtonLabel(name: string): string {
        switch (name) {
            case 'ls_togglePointLight':
                return this._createdPointLights.length > 0 ? 'Delete Point Light' : 'Add Point Light';
            case 'ls_debugPlanes':
                return 'Debug Planes';
            case 'ls_saveResults':
                return 'Save results';
            case 'ls_loadResults':
                return 'Load results';
            case 'ls_hideGizmos':
                return this._gizmosVisible ? 'Hide light gizmos' : 'Show light gizmos';
            default:
                return '';
        }
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer || !this._textLayout) return;

        const layout = this._textLayout;
        this._textManager.renderer.clearParagraphs();

        for (let i = 0; i < layout.buttonNames.length; i++) {
            const localX = layout.actionStartX + i * (layout.actionBtnWidth + layout.actionBtnGap);
            this._textManager.addParagraph(
                this._getButtonLabel(layout.buttonNames[i]),
                new Vector3(
                    UI_LAYOUT.panelPosition.x + localX,
                    UI_LAYOUT.panelPosition.y + layout.actionRowY + UI_LAYOUT.textYOffset,
                    UI_LAYOUT.panelPosition.z + UI_LAYOUT.textZOffset,
                ),
                layout.actionTextScale,
            );
        }

        if (layout.goBack) {
            this._textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(
                    UI_LAYOUT.panelPosition.x,
                    UI_LAYOUT.panelPosition.y + layout.backBtnY + UI_LAYOUT.textYOffset,
                    UI_LAYOUT.panelPosition.z + UI_LAYOUT.textZOffset,
                ),
                UI_LAYOUT.panel.textScale,
            );
        }
    }

    private _addPointLight(position?: Vector3): void {
        this._deleteAllPointLights();
        this._disableDefaultLights();

        const pos = position ?? new Vector3(0, 0.4, -1.5);
        const scene = this._scene;

        const light = new PointLight('ls_pointLight', pos.clone(), scene);
        light.intensity = 1.2;
        light.range = 8;

        const shadowGen = createShadowGenerator(light, { blurKernel: 16, bias: 0.001 });
        shadowGen.addShadowCaster(this._cube);
        shadowGen.getShadowMap()!.renderList = [this._cube];

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

        const gizmo = createGizmoManager(scene, {
            position: true,
            scaleRatio: 2.5,
            attachableMeshes: [anchor],
            attachTo: anchor,
        });

        const entry: CreatedPointLight = { light, shadowGenerator: shadowGen, anchor, gizmo, root };
        this._createdPointLights.push(entry);
        this._applyGizmoVisibility();
    }

    private _deleteLastPointLight(): void {
        const last = this._createdPointLights.pop();
        if (!last) return;
        this._disposePointLightEntry(last);
        if (this._createdPointLights.length === 0) {
            this._enableDefaultLights();
        }
    }

    private _deleteAllPointLights(): void {
        while (this._createdPointLights.length > 0) {
            const pl = this._createdPointLights.pop()!;
            this._disposePointLightEntry(pl);
        }
    }

    private _disposePointLightEntry(entry: CreatedPointLight): void {
        entry.shadowGenerator?.dispose();
        entry.light.dispose();
        entry.anchor?.dispose();
        entry.gizmo?.dispose();
        entry.root?.dispose();
    }

    private _disableDefaultLights(): void {
        this._defaultLightsOn = false;
        this._directional.setEnabled(false);
        this._hemispheric.setEnabled(false);
    }

    private _enableDefaultLights(): void {
        this._defaultLightsOn = true;
        this._directional.setEnabled(true);
        this._hemispheric.setEnabled(true);
    }

    private _togglePointLight(): void {
        if (this._createdPointLights.length > 0) {
            this._deleteLastPointLight();
        } else {
            this._addPointLight();
        }
        this._rebuildText();
    }

    private _saveResults(): void {
        const data = this._buildStateData();

        if (XrLightShadowsDemo._devFileIo) {
            downloadJson(data, 'point-lights.json');
        }

        writeStorage(STORAGE_KEYS.xrLightShadowsState, JSON.stringify(data));
    }

    private _findFloorReference(): { transformationMatrix: Matrix } | null {
        const pdm = getMetadata(this._scene).planeDetectionManager;
        if (!pdm) return null;
        return pdm.findFloorReference();
    }

    private _buildStateData(): Record<string, unknown> {
        const pointsWorld = this._createdPointLights.map((pl) => {
            const pos =
                pl.anchor?.getAbsolutePosition() || (pl.light as any).getAbsolutePosition?.() || pl.light.position;
            return { x: pos.x, y: pos.y, z: pos.z };
        });

        const data: Record<string, unknown> = {
            pointsWorld,
            schemaVersion: 6,
            gizmosVisible: this._gizmosVisible,
            defaultLightsOn: this._defaultLightsOn,
        };

        const floor = this._findFloorReference();
        if (floor && this._createdPointLights.length > 0) {
            const inv = floor.transformationMatrix.clone();
            inv.invert();
            const pointsLocal = this._createdPointLights.map((pl) => {
                const pos =
                    pl.anchor?.getAbsolutePosition() || (pl.light as any).getAbsolutePosition?.() || pl.light.position;
                const pLocal = Vector3.TransformCoordinates(pos, inv);
                return { x: pLocal.x, y: pLocal.y, z: pLocal.z };
            });
            data.pointsLocal = pointsLocal;
            data.refMatrix = Array.from(floor.transformationMatrix.toArray());
        }

        return data;
    }

    private _saveToLocalStorage(): void {
        const data = this._buildStateData();
        writeStorage(STORAGE_KEYS.xrLightShadowsState, JSON.stringify(data));
    }

    private _loadFromJson(json: Record<string, any>): void {
        const pointsLocal = Array.isArray(json.pointsLocal) ? json.pointsLocal : [];
        const refMatrixArr = Array.isArray(json.refMatrix) && json.refMatrix.length === 16 ? json.refMatrix : null;

        const floor = this._findFloorReference();

        if (floor && pointsLocal.length > 0) {
            const wm = floor.transformationMatrix;
            for (const p of pointsLocal) {
                if (p && typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number') {
                    const w = Vector3.TransformCoordinates(new Vector3(p.x, p.y, p.z), wm);
                    this._addPointLight(w);
                }
            }
        } else if (refMatrixArr && pointsLocal.length > 0) {
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

    private async _loadResults(): Promise<void> {
        const file = await pickFile('application/json');
        if (!file) return;
        try {
            const text = await file.text();
            const json = JSON.parse(text || '{}');
            this._loadFromJson(json);
        } catch {
            // ignore corrupt file data
        }
    }

    private _toggleDebugPlanes(): void {
        this._debugPlanesVisible = !this._debugPlanesVisible;
        for (let i = 0; i < this._wallMeshes.length; i++) {
            this._wallMeshes[i].material = this._debugPlanesVisible ? this._debugMaterials[i] : this._wallMaterials[i];
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
        this._rebuildText();
    }

    teardown(): void {
        this._disposed = true;
        this._saveToLocalStorage();
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        const pdm = getMetadata(this._scene).planeDetectionManager;
        if (this._planeObserver) {
            if (pdm) pdm.onPlaneAdded.remove(this._planeObserver);
            this._planeObserver = null;
        }
        if (this._planeUpdatedObserver) {
            if (pdm) pdm.onPlaneUpdated.remove(this._planeUpdatedObserver);
            this._planeUpdatedObserver = null;
        }
        for (const pl of this._createdPointLights) {
            this._disposePointLightEntry(pl);
        }
        this._createdPointLights = [];
        for (const mesh of this._wallMeshes) mesh.dispose();
        for (const mat of this._wallMaterials) mat.dispose();
        for (const mat of this._debugMaterials) mat.dispose();
        this._wallMeshes = [];
        this._wallMaterials = [];
        this._debugMaterials = [];
        this._wallMeshByPlaneId.clear();
        if (this._gizmoManager) {
            this._gizmoManager.dispose();
            this._gizmoManager = null;
        }
        this._shadowGen.dispose();
        this._cleanup.dispose();
        if (this._homeDirectional) this._homeDirectional.setEnabled(true);
        if (this._homeHemispheric) this._homeHemispheric.setEnabled(true);
        this._scene.clearColor = this._prevClearColor;
    }
}
