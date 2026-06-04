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
import { createUiButton } from '../core/uiButton';
import { createGizmoManager } from '../core/gizmoManagerFactory';
import { DisposableStack } from '../core/disposableStack';
import { createShadowGenerator } from '../lighting/shadowGeneratorFactory';
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
    private _planeObserver: Observer<import('../xr').XrPlaneData> | null = null;
    private _createdPointLights: CreatedPointLight[] = [];
    private _defaultLightsOn = true;
    private _gizmosVisible = true;
    private _debugPlanesVisible = false;
    private _textManager: TextManager | null = null;
    private _textLayout: TextLayoutParams | null = null;
    private static readonly _devFileIo = import.meta.env.VITE_DEV_FILE_IO === 'true';
    private static readonly _debug = import.meta.env.VITE_DEBUG === 'true';

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = scene.clearColor.clone();
        scene.clearColor = new Color4(0, 0, 0, 0);

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

        const panelRoot = new TransformNode('ls_panel_root', scene);
        panelRoot.position = XrLightShadowsDemo._panelPosition.clone();
        this._cleanup.add(panelRoot);

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
        const pdm = (scene.metadata as Record<string, unknown> | undefined)?.planeDetectionManager as
            | PlaneDetectionManager
            | undefined;
        if (!pdm) return;

        const debugPalette = [
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
        let planeColorIdx = 0;

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

            const debugMat = new StandardMaterial(`ls_debug_${planeData.id}`, scene);
            const baseColor = debugPalette[planeColorIdx % debugPalette.length];
            planeColorIdx++;
            debugMat.diffuseColor = baseColor;
            debugMat.emissiveColor = baseColor.scale(0.3);
            debugMat.alpha = 0.35;
            debugMat.backFaceCulling = false;
            debugMat.disableLighting = true;
            if (this._debugPlanesVisible) {
                wallMesh.material = debugMat;
            }

            this._wallMeshes.push(wallMesh);
            this._wallMaterials.push(shadowMat);
            this._debugMaterials.push(debugMat);
        };

        for (const planeData of pdm.detectedPlanes) {
            createWallMesh(planeData);
        }

        this._planeObserver = pdm.onPlaneAdded.add((planeData) => createWallMesh(planeData));
    }

    private _createActionButtons(scene: Scene, panelRoot: TransformNode): void {
        const buttonDefs = [
            { name: 'ls_togglePointLight', label: 'Add Point Light' },
            { name: 'ls_debugPlanes', label: 'Debug Planes' },
            { name: 'ls_saveResults', label: 'Save results' },
            { name: 'ls_loadResults', label: 'Load results' },
            { name: 'ls_hideGizmos', label: 'Hide light gizmos' },
        ].filter((def) => {
            if (!XrLightShadowsDemo._devFileIo && (def.name === 'ls_saveResults' || def.name === 'ls_loadResults')) {
                return false;
            }
            if (!XrLightShadowsDemo._debug && def.name === 'ls_debugPlanes') {
                return false;
            }
            return true;
        });
        const actionBtnWidth = 0.22;
        const actionBtnGap = 0.02;
        const totalActionWidth = buttonDefs.length * actionBtnWidth + (buttonDefs.length - 1) * actionBtnGap;
        const actionStartX = -totalActionWidth / 2 + actionBtnWidth / 2;
        const actionRowY = 0.06;
        const actionTextScale = 0.016;

        const actionHandlers: Record<string, () => void> = {
            ls_togglePointLight: () => this._togglePointLight(),
            ls_debugPlanes: () => this._toggleDebugPlanes(),
            ls_saveResults: () => this._saveResults(),
            ls_loadResults: () => this._loadResults(),
            ls_hideGizmos: () => this._toggleGizmoVisibility(),
        };

        for (let i = 0; i < buttonDefs.length; i++) {
            const def = buttonDefs[i];
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
            this._cleanup.add(btnResult.texture);
            this._cleanup.add(btnResult.plane);
            this._shadowGen.removeShadowCaster(btnResult.plane);
        }

        const goBack = (this._scene.metadata as Record<string, unknown> | undefined)?.goBack as
            | (() => void)
            | undefined;
        const backBtnY = goBack ? -0.06 : 0;

        this._textLayout = {
            buttonNames: buttonDefs.map((d) => d.name),
            actionStartX,
            actionBtnWidth,
            actionBtnGap,
            actionRowY,
            actionTextScale,
            goBack: !!goBack,
            backBtnY,
        };

        this._setupButtonText(scene);

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
            this._cleanup.add(btnResult.texture);
            this._cleanup.add(btnResult.plane);
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

    private _setupButtonText(scene: Scene): void {
        const textManager = new TextManager(scene.getEngine());
        this._textManager = textManager;
        textManager.init().then(() => {
            if (this._disposed) {
                textManager.dispose();
                this._textManager = null;
                return;
            }

            this._rebuildText();
            this._detachText = textManager.attachToScene(scene);
            this._cleanup.add(textManager);
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
                    XrLightShadowsDemo._panelPosition.x + localX,
                    XrLightShadowsDemo._panelPosition.y + layout.actionRowY + XrLightShadowsDemo._textYOffset,
                    XrLightShadowsDemo._panelPosition.z + XrLightShadowsDemo._textZOffset,
                ),
                layout.actionTextScale,
            );
        }

        if (layout.goBack) {
            this._textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(
                    XrLightShadowsDemo._panelPosition.x,
                    XrLightShadowsDemo._panelPosition.y + layout.backBtnY + XrLightShadowsDemo._textYOffset,
                    XrLightShadowsDemo._panelPosition.z + XrLightShadowsDemo._textZOffset,
                ),
                XrLightShadowsDemo._textScale,
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
        last.shadowGenerator?.dispose();
        last.light.dispose();
        last.anchor?.dispose();
        last.gizmo?.dispose();
        last.root?.dispose();
        if (this._createdPointLights.length === 0) {
            this._enableDefaultLights();
        }
    }

    private _deleteAllPointLights(): void {
        while (this._createdPointLights.length > 0) {
            const pl = this._createdPointLights.pop()!;
            pl.shadowGenerator?.dispose();
            pl.light.dispose();
            pl.anchor?.dispose();
            pl.gizmo?.dispose();
            pl.root?.dispose();
        }
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
            this._downloadJson(data, 'point-lights.json');
        }

        try {
            localStorage.setItem('xr_lightShadows_state', JSON.stringify(data));
        } catch {
            // ignore storage quota errors
        }
    }

    private _buildStateData(): Record<string, unknown> {
        const points = this._createdPointLights.map((pl) => {
            const pos =
                pl.anchor?.getAbsolutePosition() || (pl.light as any).getAbsolutePosition?.() || pl.light.position;
            return { x: pos.x, y: pos.y, z: pos.z };
        });

        return {
            points,
            schemaVersion: 4,
            gizmosVisible: this._gizmosVisible,
            defaultLightsOn: this._defaultLightsOn,
        };
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
        const points = Array.isArray(json.points)
            ? json.points
            : Array.isArray(json.pointsWorld)
              ? json.pointsWorld
              : [];

        for (const p of points) {
            if (p && typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number') {
                this._addPointLight(new Vector3(p.x, p.y, p.z));
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
        for (const mat of this._debugMaterials) mat.dispose();
        this._wallMeshes = [];
        this._wallMaterials = [];
        this._debugMaterials = [];
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
