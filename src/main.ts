import { Engine } from '@babylonjs/core';
import { WebXRState } from '@babylonjs/core/XR/webXRTypes';
import '@babylonjs/loaders/glTF';

import './style.css';
import { createEngineAndScene } from './core';
import { createShadowGenerator } from './lighting';
import { createXrExperience } from './xr';
import { createTextRenderer, attachTextRenderer } from './text';

const DEBUG = import.meta.env.VITE_DEBUG === 'true';

if (DEBUG) {
    await import('@babylonjs/inspector');
}

if (!Engine.isSupported()) {
    throw new Error('WebGL is not supported');
}

const { engine, scene } = createEngineAndScene();
createShadowGenerator(scene);
const textRenderer = await createTextRenderer(engine, scene);

if (DEBUG) {
    const { Inspector } = await import('@babylonjs/inspector');
    Inspector.Show(scene, { overlay: true });
}

const xr = await createXrExperience(scene);
attachTextRenderer(scene, textRenderer);

const xrButton = document.getElementById('xr-button') as HTMLButtonElement;
const xrOverlay = document.getElementById('xr-overlay') as HTMLDivElement;
const xrFrost = document.getElementById('xr-frost') as HTMLDivElement;

if (xrButton && xrOverlay && xrFrost) {
    xrButton.addEventListener('click', async () => {
        try {
            await xr.baseExperience.enterXRAsync('immersive-ar', 'local-floor');
        } catch (err) {
            console.error('Failed to enter XR:', err);
        }
    });

    xr.baseExperience.onStateChangedObservable.add((state) => {
        const inXR = state === WebXRState.IN_XR;
        xrOverlay.classList.toggle('hidden', inXR);
        xrFrost.classList.toggle('hidden', inXR);
    });
}

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', () => {
    engine.resize();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js');
    });
}
