import {
    Color3,
    Color4,
    DirectionalLight,
    HemisphericLight,
    IShadowLight,
    MeshBuilder,
    Scene,
    ShadowGenerator,
    StandardMaterial,
    TransformNode,
    Vector3,
} from '@babylonjs/core';
import '@babylonjs/core/Collisions';
import '@babylonjs/core/Materials/standardMaterial';

import { createTextRenderer, addTextParagraph, attachTextRenderer } from '../text/textRenderer';
import { createUiButton } from '../core/uiButton';

const BTN_WIDTH = 0.44;
const BTN_HEIGHT = 0.07;
const PANEL_POSITION = new Vector3(0, 1.35, -0.55);
const CORNER_RADIUS = 25;
const BORDER_THICKNESS = 8;
const TEXT_SCALE = 0.028;
const TEXT_Y_OFFSET = -0.005;
const TEXT_Z_OFFSET = -0.005;
const BACK_WIDTH_RATIO = 0.8;
const BACK_HEIGHT_RATIO = 0.85;

export function buildXrLightShadowsDemo(scene: Scene): () => void {
    const prevClearColor = scene.clearColor.clone();
    scene.clearColor = new Color4(0, 0, 0, 0);

    const cleanup: { dispose(): void }[] = [];
    let detachText: (() => void) | null = null;
    let disposed = false;

    const homeDirectional = scene.getLightByName('directionalLight');
    const homeHemispheric = scene.getLightByName('hemisphericLight');
    if (homeDirectional) homeDirectional.setEnabled(false);
    if (homeHemispheric) homeHemispheric.setEnabled(false);

    const directional = new DirectionalLight('ls_directional', new Vector3(0, -1, 1), scene);
    directional.intensity = 0.7;
    directional.position = new Vector3(0, 2, 0);
    cleanup.push(directional);

    const hemispheric = new HemisphericLight('ls_hemispheric', new Vector3(0, 1, 0), scene);
    hemispheric.intensity = 0.7;
    cleanup.push(hemispheric);

    const shadowGen = new ShadowGenerator(1024, directional as IShadowLight);
    shadowGen.useBlurExponentialShadowMap = true;
    shadowGen.blurKernel = 32;

    const cube = MeshBuilder.CreateBox('ls_cube', { size: 0.5 }, scene);
    cube.position = new Vector3(0, 0.3, 2);
    const cubeMat = new StandardMaterial('ls_cubeMat', scene);
    cubeMat.diffuseColor = new Color3(0.2, 0.6, 1);
    cube.material = cubeMat;
    shadowGen.addShadowCaster(cube);
    cleanup.push(cube);
    cleanup.push(cubeMat);

    const panelRoot = new TransformNode('ls_panel_root', scene);
    panelRoot.position = PANEL_POSITION.clone();
    cleanup.push(panelRoot);

    const goBack = (scene.metadata as Record<string, unknown> | undefined)?.goBack as (() => void) | undefined;
    if (goBack) {
        const btnResult = createUiButton(scene, {
            name: 'ls_back',
            width: BTN_WIDTH * BACK_WIDTH_RATIO,
            height: BTN_HEIGHT * BACK_HEIGHT_RATIO,
            position: new Vector3(0, 0, 0),
            parent: panelRoot,
            bgColor: '#2a1a0aee',
            borderColor: '#ffb45044',
            cornerRadius: CORNER_RADIUS,
            borderThickness: BORDER_THICKNESS,
            onClick: () => goBack(),
        });
        cleanup.push(btnResult.texture);
        cleanup.push(btnResult.plane);

        createTextRenderer(scene.getEngine())
            .then((tr) => {
                if (disposed) {
                    tr.dispose();
                    return;
                }
                addTextParagraph(
                    tr,
                    'Return to Main Scene',
                    new Vector3(
                        PANEL_POSITION.x,
                        PANEL_POSITION.y + TEXT_Y_OFFSET,
                        PANEL_POSITION.z + TEXT_Z_OFFSET,
                    ),
                    TEXT_SCALE,
                );
                detachText = attachTextRenderer(scene, tr);
                cleanup.push(tr);
            });
    }

    return () => {
        disposed = true;
        if (detachText) {
            detachText();
            detachText = null;
        }
        shadowGen.dispose();
        for (const item of cleanup) item.dispose();
        if (homeDirectional) homeDirectional.setEnabled(true);
        if (homeHemispheric) homeHemispheric.setEnabled(true);
        scene.clearColor = prevClearColor;
    };
}
