import {
    Engine,
    Mesh,
    Scene,
    Vector3,
} from '@babylonjs/core';
import { Rectangle } from '@babylonjs/gui/2D/controls/rectangle';
import { createTextRenderer, addTextParagraph, attachTextRenderer } from '../text/textRenderer';
import { createUiButton, type CreateUiButtonResult } from '../core/uiButton';
import type { DemoDescriptor } from './index';

export interface DemoUi {
    setActiveDemo: (id: string | null) => void;
    setVisible: (visible: boolean) => void;
    dispose: () => void;
}

interface ButtonEntry {
    plane: Mesh;
    rect: Rectangle;
    defaultBg: string;
    activeBg: string;
    defaultBorder: string;
    activeBorder: string;
}

const BTN_WIDTH = 0.5;
const BTN_HEIGHT = 0.08;
const BTN_GAP = 0.02;
const ORIGIN_Y = 1.35;
const ORIGIN_X = 0;
const ORIGIN_Z = -0.55;
const CORNER_RADIUS = 25;
const BORDER_THICKNESS = 8;
const TEXT_SCALE = 0.04;
const BACK_TEXT_SCALE = 0.032;
const BACK_WIDTH_RATIO = 0.8;
const BACK_HEIGHT_RATIO = 0.85;
const BACK_TOP_MARGIN = 0.01;
const TEXT_Y_OFFSET = -0.005;
const TEXT_Z_OFFSET = -0.005;

export async function createDemoUi(
    engine: Engine,
    scene: Scene,
    demos: readonly DemoDescriptor[],
    onDemoClick: (demo: DemoDescriptor) => void,
    onBackClick: (() => void) | null,
): Promise<DemoUi> {
    const textRenderer = await createTextRenderer(engine);

    const buttons: Map<string, ButtonEntry> = new Map();
    const buttonResults: CreateUiButtonResult[] = [];

    for (let i = 0; i < demos.length; i++) {
        const demo = demos[i];
        const y = ORIGIN_Y - i * (BTN_HEIGHT + BTN_GAP);
        const position = new Vector3(ORIGIN_X, y, ORIGIN_Z);

        const result = createUiButton(scene, {
            name: `btn_${demo.id}`,
            width: BTN_WIDTH,
            height: BTN_HEIGHT,
            position,
            bgColor: '#1a1a1add',
            borderColor: '#ffffff18',
            cornerRadius: CORNER_RADIUS,
            borderThickness: BORDER_THICKNESS,
            onClick: () => onDemoClick(demo),
        });

        addTextParagraph(
            textRenderer,
            demo.label,
            new Vector3(ORIGIN_X, y + TEXT_Y_OFFSET, ORIGIN_Z + TEXT_Z_OFFSET),
            TEXT_SCALE,
        );

        buttons.set(demo.id, {
            plane: result.plane,
            rect: result.rect,
            defaultBg: '#1a1a1add',
            activeBg: '#2a1a0add',
            defaultBorder: '#ffffff18',
            activeBorder: '#ffb45044',
        });
        buttonResults.push(result);
    }

    let backPlane: Mesh | null = null;

    if (onBackClick) {
        const backY = ORIGIN_Y - demos.length * (BTN_HEIGHT + BTN_GAP) - BACK_TOP_MARGIN;

        const result = createUiButton(scene, {
            name: 'btn_back',
            width: BTN_WIDTH * BACK_WIDTH_RATIO,
            height: BTN_HEIGHT * BACK_HEIGHT_RATIO,
            position: new Vector3(ORIGIN_X, backY, ORIGIN_Z),
            bgColor: '#111111bb',
            borderColor: '#ffffff12',
            cornerRadius: CORNER_RADIUS,
            borderThickness: BORDER_THICKNESS,
            onClick: () => onBackClick(),
        });
        backPlane = result.plane;
        buttonResults.push(result);

        addTextParagraph(
            textRenderer,
            'Return to Main Scene',
            new Vector3(ORIGIN_X, backY + TEXT_Y_OFFSET, ORIGIN_Z + TEXT_Z_OFFSET),
            BACK_TEXT_SCALE,
        );
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
            for (const r of buttonResults) {
                r.texture.dispose();
                r.plane.dispose();
            }
        },
    };
}
