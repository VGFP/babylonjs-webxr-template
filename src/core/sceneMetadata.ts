import type { Scene } from '@babylonjs/core';
import type { WebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience';
import type { PlaneDetectionManager } from '../xr/planeDetectionManager';
import type { PreProcessedPage } from '../demos/pdfPreprocessor';

export interface SceneMetadata {
    xr?: WebXRDefaultExperience;
    xrAnchors?: unknown;
    planeDetectionManager?: PlaneDetectionManager;
    goBack?: () => void;
    pdfPages?: PreProcessedPage[];
}

export function getMetadata(scene: Scene): SceneMetadata {
    return (scene.metadata as SceneMetadata | undefined) ?? {};
}

export function setMetadata<K extends keyof SceneMetadata>(
    scene: Scene,
    key: K,
    value: SceneMetadata[K] | undefined,
): void {
    if (!scene.metadata) scene.metadata = {};
    const meta = scene.metadata as Record<string, unknown>;
    if (value === undefined) {
        delete meta[key];
    } else {
        meta[key] = value;
    }
}
