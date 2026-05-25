import {
    ActionManager,
    Color3,
    Engine,
    ExecuteCodeAction,
    Mesh,
    MeshBuilder,
    Matrix,
    Quaternion,
    Scene,
    Vector3,
} from '@babylonjs/core';
import '@babylonjs/core/Collisions';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';
import { Rectangle } from '@babylonjs/gui/2D/controls/rectangle';
import { TextRenderer } from '@babylonjs/addons/msdfText';
import { loadFontAsset, attachTextRenderer } from '../text/textRenderer';
import type { DemoDescriptor } from './index';

export interface DemoUi {
    setActiveDemo: (id: string | null) => void;
    setVisible: (visible: boolean) => void;
    dispose: () => void;
}

interface ButtonEntry {
    plane: Mesh;
    rect: Rectangle;
    defaultColor: string;
    activeColor: string;
    defaultBg: string;
    activeBg: string;
    defaultBorder: string;
    activeBorder: string;
}

export async function createDemoUi(
    engine: Engine,
    scene: Scene,
    demos: readonly DemoDescriptor[],
    onDemoClick: (demo: DemoDescriptor) => void,
    onBackClick: (() => void) | null,
): Promise<DemoUi> {
    const fontAsset = await loadFontAsset();
    const textRenderer = await TextRenderer.CreateTextRendererAsync(fontAsset, engine);

    const btnW = 0.5;
    const btnH = 0.08;
    const gap = 0.02;
    const originY = 1.35;
    const originX = 0;
    const originZ = -0.55;
    const cornerRadius = 25;
    const borderThickness = 8;

    const buttons: Map<string, ButtonEntry> = new Map();
    const planes: Mesh[] = [];
    const textures: AdvancedDynamicTexture[] = [];

    function makeButtonMesh(
        name: string,
        width: number,
        height: number,
        position: Vector3,
        bgColor: string,
        borderColor: string,
    ): { plane: Mesh; texture: AdvancedDynamicTexture; rect: Rectangle } {
        const plane = MeshBuilder.CreatePlane(name, { width, height }, scene);
        plane.position = position;
        plane.billboardMode = Mesh.BILLBOARDMODE_NONE;

        const texture = AdvancedDynamicTexture.CreateForMesh(plane, 512, 256);
        texture.background = 'transparent';

        const rect = new Rectangle(`${name}_rect`);
        rect.width = 1;
        rect.height = 1;
        rect.cornerRadius = cornerRadius;
        rect.thickness = borderThickness;
        rect.color = borderColor;
        rect.background = bgColor;
        texture.addControl(rect);

        return { plane, texture, rect };
    }

    for (let i = 0; i < demos.length; i++) {
        const demo = demos[i];
        const y = originY - i * (btnH + gap);
        const pos = new Vector3(originX, y, originZ);

        const { plane, texture, rect } = makeButtonMesh(
            `btn_${demo.id}`,
            btnW,
            btnH,
            pos,
            '#1a1a1add',
            '#ffffff18',
        );

        plane.actionManager = new ActionManager(scene);
        plane.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPickTrigger, () => onDemoClick(demo)),
        );

        const textScale = 0.04;
        const textMatrix = Matrix.Compose(
            new Vector3(textScale, textScale, textScale),
            Quaternion.Identity(),
            new Vector3(originX, y - 0.005, originZ - 0.005),
        );
        textRenderer.addParagraph(demo.label, { textAlign: 'center' }, textMatrix);

        buttons.set(demo.id, {
            plane,
            rect,
            defaultColor: '#d0d0d0',
            activeColor: '#ffb450',
            defaultBg: '#1a1a1add',
            activeBg: '#2a1a0add',
            defaultBorder: '#ffffff18',
            activeBorder: '#ffb45044',
        });
        planes.push(plane);
        textures.push(texture);
    }

    let backPlane: Mesh | null = null;

    if (onBackClick) {
        const backY = originY - demos.length * (btnH + gap) - 0.01;

        const { plane, texture } = makeButtonMesh(
            'btn_back',
            btnW * 0.8,
            btnH * 0.85,
            new Vector3(originX, backY, originZ),
            '#111111bb',
            '#ffffff12',
        );
        backPlane = plane;

        plane.actionManager = new ActionManager(scene);
        plane.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPickTrigger, () => onBackClick()),
        );

        const backTextScale = 0.032;
        const backTextMatrix = Matrix.Compose(
            new Vector3(backTextScale, backTextScale, backTextScale),
            Quaternion.Identity(),
            new Vector3(originX, backY, originZ - 0.005),
        );
        textRenderer.addParagraph('Return to Main Scene', { textAlign: 'center' }, backTextMatrix);

        planes.push(plane);
        textures.push(texture);
    }

    let detachText: (() => void) | null = attachTextRenderer(scene, textRenderer);

    const setVisible = (visible: boolean) => {
        for (const [, entry] of buttons) {
            entry.plane.setEnabled(visible);
        }
        if (backPlane) backPlane.setEnabled(visible);

        if (!visible && detachText) {
            detachText();
            detachText = null;
        } else if (visible && !detachText) {
            detachText = attachTextRenderer(scene, textRenderer);
        }
    };

    const setActiveDemo = (id: string | null) => {
        for (const [demoId, entry] of buttons) {
            const isActive = demoId === id;
            entry.rect.background = isActive ? entry.activeBg : entry.defaultBg;
            entry.rect.color = isActive ? entry.activeBorder : entry.defaultBorder;
        }
        if (backPlane) backPlane.setEnabled(id !== null);
    };

    return {
        setActiveDemo,
        setVisible,
        dispose: () => {
            if (detachText) {
                detachText();
                detachText = null;
            }
            textRenderer.dispose();
            for (const t of textures) t.dispose();
            for (const m of planes) m.dispose();
        },
    };
}
