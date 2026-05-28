import { Engine, TransformNode, Vector3 } from '@babylonjs/core';
import { WebXRState } from '@babylonjs/core/XR/webXRTypes';
import '@babylonjs/loaders/glTF';

import './style.css';
import { createEngineAndScene, SceneManager } from './core';
import { createShadowGenerator } from './lighting';
import { createXrExperience } from './xr';
import { createTextRenderer, attachTextRenderer } from './text';
import { getDemos } from './demos';
import { createDemoUi } from './demos/demoUi';

const DEBUG = import.meta.env.VITE_DEBUG === 'true';

if (DEBUG) {
    await import('@babylonjs/inspector');
}

if (!Engine.isSupported()) {
    throw new Error('WebGL is not supported');
}

const { engine, scene: homeScene } = createEngineAndScene();
createShadowGenerator(homeScene);

const textRenderer = await createTextRenderer(engine);
const textAnchor = new TransformNode('textAnchor', homeScene);
textAnchor.position = new Vector3(0, 1.5, -0.55);
textAnchor.scaling = new Vector3(0.2, 0.2, 0.2);
textRenderer.parent = textAnchor;
textRenderer.addParagraph('Hello World', { textAlign: 'center' });

if (DEBUG) {
    const { Inspector } = await import('@babylonjs/inspector');
    Inspector.Show(homeScene, { overlay: true });
}

const homeXr = await createXrExperience(homeScene);
const detachHomeText = attachTextRenderer(homeScene, textRenderer);
const demos = getDemos();

const xrButton = document.getElementById('xr-button') as HTMLButtonElement;
const xrOverlay = document.getElementById('xr-overlay') as HTMLDivElement;
const xrFrost = document.getElementById('xr-frost') as HTMLDivElement;

function wireXrState(xr: typeof homeXr) {
    xr.baseExperience.onStateChangedObservable.add((state) => {
        const inXR = state === WebXRState.IN_XR;
        xrOverlay.classList.toggle('hidden', inXR);
        xrFrost.classList.toggle('hidden', inXR);
    });
}

const sceneManager = new SceneManager({
    engine,
    textRenderer,
    homeScene,
    homeXr,
    homeDetachText: detachHomeText,
    demos,
    debug: DEBUG,
    onWireXrState: wireXrState,
});

const homeUi = await createDemoUi(
    engine,
    homeScene,
    demos,
    (demo) => sceneManager.switchToDemo(demo),
    null,
);
sceneManager.setHomeUi(homeUi);

if (xrButton && xrOverlay && xrFrost) {
    xrButton.addEventListener('click', async () => {
        try {
            await sceneManager.activeXr.baseExperience.enterXRAsync('immersive-ar', 'local-floor');
        } catch (err) {
            console.error('Failed to enter XR:', err);
        }
    });

    wireXrState(homeXr);
}

engine.runRenderLoop(() => {
    sceneManager.activeScene.render();
});

window.addEventListener('resize', () => {
    engine.resize();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js');
    });
}
