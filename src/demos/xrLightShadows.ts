import {
    ActionManager,
    Color4,
    ExecuteCodeAction,
    HemisphericLight,
    Matrix,
    Mesh,
    MeshBuilder,
    Quaternion,
    Scene,
    TransformNode,
    Vector3,
} from '@babylonjs/core';
import '@babylonjs/core/Collisions';
import '@babylonjs/core/Materials/standardMaterial';

import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';
import { Rectangle } from '@babylonjs/gui/2D/controls/rectangle';
import { TextRenderer } from '@babylonjs/addons/msdfText';
import { loadFontAsset, attachTextRenderer } from '../text/textRenderer';

const BTN_W = 0.44;
const BTN_H = 0.07;
const PANEL_POS = new Vector3(0, 1.35, -0.55);
const CORNER = 25;
const BORDER_W = 8;
const TEXT_SCALE = 0.028;

export function buildXrLightShadowsDemo(scene: Scene): () => void {
    const prevClearColor = scene.clearColor.clone();
    scene.clearColor = new Color4(0, 0, 0, 0);

    const cleanup: { dispose(): void }[] = [];
    let detachText: (() => void) | null = null;
    let disposed = false;

    const hemi = new HemisphericLight('ls_hemi', new Vector3(0, 1, 0), scene);
    hemi.intensity = 0.4;
    cleanup.push(hemi);

    const panelRoot = new TransformNode('ls_panel_root', scene);
    panelRoot.position = PANEL_POS.clone();
    cleanup.push(panelRoot);

    function makeBtn(
        name: string,
        width: number,
        height: number,
        x: number,
        y: number,
        bgColor: string,
        borderColor: string,
        onClick: () => void,
    ): void {
        const plane = MeshBuilder.CreatePlane(name, { width, height }, scene);
        plane.parent = panelRoot;
        plane.position = new Vector3(x, y, 0);
        plane.rotation = Vector3.Zero();

        const texW = 512;
        const texH = Math.round(texW * (height / width));
        const tex = AdvancedDynamicTexture.CreateForMesh(plane, texW, texH);
        tex.background = 'transparent';

        const rect = new Rectangle(`${name}_rect`);
        rect.width = 1;
        rect.height = 1;
        rect.cornerRadius = CORNER;
        rect.thickness = BORDER_W;
        rect.color = borderColor;
        rect.background = bgColor;
        rect.isPointerBlocker = true;
        tex.addControl(rect);

        plane.actionManager = new ActionManager(scene);
        plane.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPickTrigger, onClick),
        );

        cleanup.push(tex);
        cleanup.push(plane);
    }

    const goBack = (scene.metadata as Record<string, unknown> | undefined)?.goBack as (() => void) | undefined;
    if (goBack) {
        makeBtn('ls_back', BTN_W * 0.8, BTN_H * 0.85, 0, 0,
            '#2a1a0aee', '#ffb45044', () => goBack());

        loadFontAsset()
            .then((font) => TextRenderer.CreateTextRendererAsync(font, scene.getEngine()))
            .then((tr) => {
                if (disposed) {
                    tr.dispose();
                    return;
                }
                const textMatrix = Matrix.Compose(
                    new Vector3(TEXT_SCALE, TEXT_SCALE, TEXT_SCALE),
                    Quaternion.Identity(),
                    new Vector3(PANEL_POS.x, PANEL_POS.y - 0.005, PANEL_POS.z - 0.005),
                );
                tr.addParagraph('Return to Main Scene', { textAlign: 'center' }, textMatrix);
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
        for (const item of cleanup) item.dispose();
        scene.clearColor = prevClearColor;
    };
}
