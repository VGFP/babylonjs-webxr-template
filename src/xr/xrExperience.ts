import { Scene, WebXRDefaultExperience } from '@babylonjs/core';

import '@babylonjs/core/XR/webXRDefaultExperience';

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
