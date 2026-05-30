import {
    DirectionalLight,
    HemisphericLight,
    IShadowLight,
    ShadowGenerator,
    Vector3,
    Scene,
} from '@babylonjs/core';

export class ShadowManager {
    private _scene: Scene;
    private _directionalLight: DirectionalLight;
    private _hemisphericLight: HemisphericLight;
    private _shadowGenerator: ShadowGenerator;

    constructor(scene: Scene) {
        this._scene = scene;
        this._directionalLight = this._createDirectionalLight();
        this._hemisphericLight = this._createHemisphericLight();
        this._shadowGenerator = this._createShadowGenerator();
    }

    private _createDirectionalLight(): DirectionalLight {
        const directional = new DirectionalLight(
            "directionalLight",
            new Vector3(0, 10, 0),
            this._scene,
        );
        directional.intensity = 0.3;
        return directional;
    }

    private _createHemisphericLight(): HemisphericLight {
        const hemispheric = new HemisphericLight(
            "hemisphericLight",
            new Vector3(0, 0, 1),
            this._scene,
        );
        hemispheric.intensity = 0.7;
        return hemispheric;
    }

    private _createShadowGenerator(): ShadowGenerator {
        const shadows = new ShadowGenerator(1024, this._directionalLight as IShadowLight);
        shadows.useBlurExponentialShadowMap = true;
        shadows.blurKernel = 32;
        return shadows;
    }

    get shadowGenerator(): ShadowGenerator { return this._shadowGenerator; }
    get directionalLight(): DirectionalLight { return this._directionalLight; }
    get hemisphericLight(): HemisphericLight { return this._hemisphericLight; }
    get scene(): Scene { return this._scene; }
}
