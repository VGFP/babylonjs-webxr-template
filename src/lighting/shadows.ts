import {
    DirectionalLight,
    HemisphericLight,
    IShadowLight,
    ShadowGenerator,
    Vector3,
    Scene,
} from '@babylonjs/core';

export function createLights(scene: Scene): DirectionalLight {
    const directional = new DirectionalLight(
        "directionalLight",
        new Vector3(0, 10, 0),
        scene,
    );
    directional.intensity = 0.3;

    const hemispheric = new HemisphericLight(
        "hemisphericLight",
        new Vector3(0, 0, 1),
        scene,
    );
    hemispheric.intensity = 0.7;

    return directional;
}

export function createShadowGenerator(scene: Scene): ShadowGenerator {
    const light = createLights(scene);

    const shadows = new ShadowGenerator(1024, light as IShadowLight);
    shadows.useBlurExponentialShadowMap = true;
    shadows.blurKernel = 32;

    return shadows;
}
