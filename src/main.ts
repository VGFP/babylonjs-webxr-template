import { Engine, Scene } from '@babylonjs/core';
import { WebXRState } from '@babylonjs/core/XR/webXRTypes';
import '@babylonjs/loaders/glTF';

import './style.css';
import { createEngineAndScene } from './core';
import { createShadowGenerator } from './lighting';
import { createXrExperience } from './xr';
import { createTextRenderer, attachTextRenderer } from './text';
import { getDemos, createDemoScene, type DemoDescriptor } from './demos';
import { createDemoUi, type DemoUi } from './demos/demoUi';

const noopUi: DemoUi = { setActiveDemo: () => {}, setVisible: () => {}, dispose: () => {} };

const DEBUG = import.meta.env.VITE_DEBUG === 'true';

if (DEBUG) {
    await import('@babylonjs/inspector');
}

if (!Engine.isSupported()) {
    throw new Error('WebGL is not supported');
}

const { engine, scene: homeScene } = createEngineAndScene();
createShadowGenerator(homeScene);
const textRenderer = await createTextRenderer(engine, homeScene);

if (DEBUG) {
    const { Inspector } = await import('@babylonjs/inspector');
    Inspector.Show(homeScene, { overlay: true });
}

const homeXr = await createXrExperience(homeScene);
let detachHomeText = attachTextRenderer(homeScene, textRenderer);

const demos = getDemos();

const homeUi = await createDemoUi(engine, homeScene, demos, switchToDemo, null);

let activeScene: Scene = homeScene;
let activeXr = homeXr;
let activeDemoId: string | null = null;
let activeUi: DemoUi = homeUi;
let activeTeardown: (() => void) | null = null;

const xrButton = document.getElementById('xr-button') as HTMLButtonElement;
const xrOverlay = document.getElementById('xr-overlay') as HTMLDivElement;
const xrFrost = document.getElementById('xr-frost') as HTMLDivElement;

if (xrButton && xrOverlay && xrFrost) {
    xrButton.addEventListener('click', async () => {
        try {
            await activeXr.baseExperience.enterXRAsync('immersive-ar', 'local-floor');
        } catch (err) {
            console.error('Failed to enter XR:', err);
        }
    });

    activeXr.baseExperience.onStateChangedObservable.add((state) => {
        const inXR = state === WebXRState.IN_XR;
        xrOverlay.classList.toggle('hidden', inXR);
        xrFrost.classList.toggle('hidden', inXR);
    });
}

function wireXrState(xr: typeof homeXr) {
    xr.baseExperience.onStateChangedObservable.add((state) => {
        const inXR = state === WebXRState.IN_XR;
        xrOverlay.classList.toggle('hidden', inXR);
        xrFrost.classList.toggle('hidden', inXR);
    });
}

async function switchToDemo(demo: DemoDescriptor) {
    if (activeDemoId === demo.id) return;

    if (demo.reuseScene) {
        if (activeDemoId !== null) {
            activeUi.dispose();
            activeScene.dispose();
        }

        detachHomeText();
        homeUi.setVisible(false);

        homeScene.metadata = { goBack: switchToHome };
        const teardown = demo.build(homeScene);
        activeTeardown = teardown ?? null;

        activeScene = homeScene;
        activeXr = homeXr;
        activeDemoId = demo.id;
        activeUi = noopUi;
        return;
    }

    if (activeTeardown) {
        activeTeardown();
        activeTeardown = null;
        detachHomeText = attachTextRenderer(homeScene, textRenderer);
        homeUi.setVisible(true);
    } else if (activeDemoId !== null) {
        activeUi.dispose();
        activeScene.dispose();
    }

    const newScene = createDemoScene(engine, demo, { goBack: switchToHome });
    const newXr = await createXrExperience(newScene);

    let newUi: DemoUi;
    if (demo.ownUi) {
        newUi = noopUi;
    } else {
        const otherDemos = demos.filter(d => d.id !== demo.id);
        newUi = await createDemoUi(engine, newScene, otherDemos, switchToDemo, switchToHome);
    }

    if (!demo.ownUi) {
        attachTextRenderer(newScene, textRenderer);
    }
    wireXrState(newXr);

    if (DEBUG) {
        import('@babylonjs/inspector').then(({ Inspector }) => {
            Inspector.Show(newScene, { overlay: true });
        });
    }

    activeScene = newScene;
    activeXr = newXr;
    activeDemoId = demo.id;
    activeUi = newUi;
    activeUi.setActiveDemo(demo.id);
}

async function switchToHome() {
    if (activeDemoId === null) return;

    if (activeTeardown) {
        activeTeardown();
        activeTeardown = null;
        homeScene.metadata = {};
        detachHomeText = attachTextRenderer(homeScene, textRenderer);
        homeUi.setVisible(true);
    } else {
        activeUi.dispose();
        activeScene.dispose();
    }

    activeScene = homeScene;
    activeXr = homeXr;
    activeDemoId = null;
    activeUi = homeUi;
    activeUi.setActiveDemo(null);
}

engine.runRenderLoop(() => {
    activeScene.render();
});

window.addEventListener('resize', () => {
    engine.resize();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js');
    });
}
