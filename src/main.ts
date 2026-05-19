import { Engine } from '@babylonjs/core';
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

await createXrExperience(scene);
attachTextRenderer(scene, textRenderer);

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
