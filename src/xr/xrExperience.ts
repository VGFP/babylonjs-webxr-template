import { Scene, WebXRDefaultExperience, WebXRFeaturesManager } from '@babylonjs/core';
import '@babylonjs/core/XR/webXRDefaultExperience';
import '@babylonjs/core/XR/features/WebXRPlaneDetector';
import '@babylonjs/core/XR/features/WebXRAnchorSystem';

import type { XrConfig } from '../core/types';

const DEFAULT_CONFIG: XrConfig = {
    sessionMode: "immersive-ar",
    referenceSpaceType: "local-floor",
    optionalFeatures: true,
};

export async function createXrExperience(
    scene: Scene,
    config: XrConfig = DEFAULT_CONFIG,
): Promise<WebXRDefaultExperience> {
    const xr = await WebXRDefaultExperience.CreateAsync(scene, {
        uiOptions: {
            sessionMode: config.sessionMode,
            referenceSpaceType: config.referenceSpaceType,
            onError: (error) => {
                alert(error);
            },
        },
        optionalFeatures: config.optionalFeatures,
        disableDefaultUI: true,
    });

    if (!xr.baseExperience) {
        throw new Error('Unable to create XR experience');
    }

    return xr;
}

export function getFeaturesManager(xr: WebXRDefaultExperience): WebXRFeaturesManager {
    return xr.baseExperience.featuresManager;
}

export function enablePlaneDetection(fm: WebXRFeaturesManager): any | null {
    try {
        return fm.enableFeature('xr-plane-detection', 'latest');
    } catch (e) {
        console.warn('Plane detection not available:', e);
        return null;
    }
}

export function enableAnchors(fm: WebXRFeaturesManager): any | null {
    try {
        return fm.enableFeature('xr-anchor-system', 'latest');
    } catch (e) {
        console.warn('Anchors not available:', e);
        return null;
    }
}
