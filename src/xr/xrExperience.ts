import { Scene, WebXRDefaultExperience, WebXRFeaturesManager, WebXRFeatureNameType } from '@babylonjs/core';
import '@babylonjs/core/XR/webXRDefaultExperience';
import '@babylonjs/core/XR/features/WebXRPlaneDetector';
import '@babylonjs/core/XR/features/WebXRAnchorSystem';
import '@babylonjs/loaders/glTF/2.0/glTFLoader';

import type { XrConfig } from '../core/types';

export class XrExperience {
    private static readonly _defaultConfig: XrConfig = {
        sessionMode: 'immersive-ar',
        referenceSpaceType: 'local-floor',
        optionalFeatures: true,
    };

    private _scene: Scene;
    private _config: XrConfig;
    private _xr: WebXRDefaultExperience | null = null;
    private _fm: WebXRFeaturesManager | null = null;
    private _xrPlanes: any | null = null;
    private _xrAnchors: any | null = null;

    constructor(scene: Scene, config?: XrConfig) {
        this._scene = scene;
        this._config = config ?? XrExperience._defaultConfig;
    }

    async init(): Promise<void> {
        this._xr = await WebXRDefaultExperience.CreateAsync(this._scene, {
            uiOptions: {
                sessionMode: this._config.sessionMode,
                referenceSpaceType: this._config.referenceSpaceType,
                onError: (error) => {
                    alert(error);
                },
            },
            optionalFeatures: this._config.optionalFeatures,
            disableDefaultUI: true,
        });

        if (!this._xr.baseExperience) {
            throw new Error('Unable to create XR experience');
        }

        this._fm = this._xr.baseExperience.featuresManager;
        this._xrPlanes = this._tryEnableFeature('xr-plane-detection', 'Plane detection');
        this._xrAnchors = this._tryEnableFeature('xr-anchor-system', 'Anchors');
    }

    private _tryEnableFeature(name: WebXRFeatureNameType, label: string): any | null {
        try {
            return this._fm!.enableFeature(name, 'latest');
        } catch (e) {
            console.warn(`${label} not available:`, e);
            return null;
        }
    }

    get xr(): WebXRDefaultExperience {
        return this._xr!;
    }
    get fm(): WebXRFeaturesManager {
        return this._fm!;
    }
    get planes(): any {
        return this._xrPlanes;
    }
    get anchors(): any {
        return this._xrAnchors;
    }
    get scene(): Scene {
        return this._scene;
    }
}
