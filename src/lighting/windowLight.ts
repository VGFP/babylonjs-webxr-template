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

export interface WindowLightResult {
    light: RectAreaLight;
    debugMesh: Mesh | null;
    rootNode: TransformNode;
}

export function createWindowLight(
    scene: Scene,
    config: WindowLightConfig,
): WindowLightResult {
    const {
        name = 'windowLight',
        position,
        width,
        height,
        rotationX = 0,
        rotationY = 0,
        rotationZ = 0,
        intensity = 2.0,
        color = new Color3(1, 0.95, 0.85),
        range = 50,
        showDebugMesh = true,
    } = config;

    const rootNode = new TransformNode(`${name}_root`, scene);
    rootNode.position = position;
    rootNode.rotation.x = rotationX;
    rootNode.rotation.y = rotationY;
    rootNode.rotation.z = rotationZ;

    const lightOrigin = new Vector3(0, 0, 0);
    const light = new RectAreaLight(name, lightOrigin, width, height, scene);
    light.diffuse = color;
    light.intensity = intensity;
    light.range = range;
    light.parent = rootNode;

    let debugMesh: Mesh | null = null;

    if (showDebugMesh) {
        debugMesh = MeshBuilder.CreatePlane(
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
        debugMesh.material = mat;
        debugMesh.parent = rootNode;
    }

    return { light, debugMesh, rootNode };
}
