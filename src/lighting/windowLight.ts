import { RectAreaLight } from '@babylonjs/core/Lights/rectAreaLight';
import '@babylonjs/core/Lights/index';
import {
    Color3,
    Mesh,
    MeshBuilder,
    Scene,
    StandardMaterial,
    TransformNode,
    Vector3,
} from '@babylonjs/core';

export interface WindowLightConfig {
    name?: string;
    position: Vector3;
    width: number;
    height: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
    intensity?: number;
    color?: Color3;
    range?: number;
    showDebugMesh?: boolean;
}

export class WindowLight {
    private static readonly _defaultColor = new Color3(1, 0.95, 0.85);
    private static readonly _defaultIntensity = 2.0;
    private static readonly _defaultRange = 50;

    private _light: RectAreaLight;
    private _debugMesh: Mesh | null;
    private _rootNode: TransformNode;

    constructor(scene: Scene, config: WindowLightConfig) {
        const {
            name = 'windowLight',
            position,
            width,
            height,
            rotationX = 0,
            rotationY = 0,
            rotationZ = 0,
            intensity = WindowLight._defaultIntensity,
            color = WindowLight._defaultColor,
            range = WindowLight._defaultRange,
            showDebugMesh = true,
        } = config;

        this._rootNode = new TransformNode(`${name}_root`, scene);
        this._rootNode.position = position;
        this._rootNode.rotation.x = rotationX;
        this._rootNode.rotation.y = rotationY;
        this._rootNode.rotation.z = rotationZ;

        const lightOrigin = new Vector3(0, 0, 0);
        this._light = new RectAreaLight(name, lightOrigin, width, height, scene);
        this._light.diffuse = color;
        this._light.intensity = intensity;
        this._light.range = range;
        this._light.parent = this._rootNode;

        this._debugMesh = null;

        if (showDebugMesh) {
            this._debugMesh = MeshBuilder.CreatePlane(
                `${name}_debug`,
                { width, height },
                scene,
            );

            const mat = new StandardMaterial(`${name}_mat`, scene);
            mat.diffuseColor = color;
            mat.emissiveColor = color.scale(0.4);
            mat.alpha = 0.3;
            mat.backFaceCulling = false;
            mat.disableLighting = true;
            this._debugMesh.material = mat;
            this._debugMesh.parent = this._rootNode;
        }
    }

    get light(): RectAreaLight { return this._light; }
    get debugMesh(): Mesh | null { return this._debugMesh; }
    get rootNode(): TransformNode { return this._rootNode; }

    dispose(): void {
        this._light.dispose();
        if (this._debugMesh) this._debugMesh.dispose();
        this._rootNode.dispose();
    }
}
