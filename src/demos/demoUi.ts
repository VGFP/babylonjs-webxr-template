import { Engine, Mesh, Scene, Vector3 } from '@babylonjs/core';
import { Rectangle } from '@babylonjs/gui/2D/controls/rectangle';
import { TextManager } from '../text/textRenderer';
import { createUiButton, type CreateUiButtonResult } from '../core/uiButton';
import { UI_LAYOUT } from '../core/uiLayout';
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

const MAIN_BTN_BG = '#1a1a1add';
const MAIN_BTN_BORDER = '#ffffff18';
const MAIN_BTN_ACTIVE_BG = '#2a1a0add';
const MAIN_BTN_ACTIVE_BORDER = '#ffb45044';
const BACK_BTN_BG = '#111111bb';
const BACK_BTN_BORDER = '#ffffff12';
const EXIT_XR_BG = '#3a1a1abb';
const EXIT_XR_BORDER = '#ff505066';

export class DemoUiController implements DemoUi {
    private readonly _scene: Scene;
    private readonly _textManager: TextManager;
    private readonly _buttons: Map<string, ButtonEntry>;
    private readonly _buttonResults: CreateUiButtonResult[];
    private _backPlane: Mesh | null;
    private _exitPlane: Mesh | null;
    private _detachText: (() => void) | null;

    private constructor(
        scene: Scene,
        textManager: TextManager,
        buttons: Map<string, ButtonEntry>,
        buttonResults: CreateUiButtonResult[],
        backPlane: Mesh | null,
        exitPlane: Mesh | null,
        detachText: (() => void) | null,
    ) {
        this._scene = scene;
        this._textManager = textManager;
        this._buttons = buttons;
        this._buttonResults = buttonResults;
        this._backPlane = backPlane;
        this._exitPlane = exitPlane;
        this._detachText = detachText;
    }

    static async create(
        engine: Engine,
        scene: Scene,
        demos: readonly DemoDescriptor[],
        onDemoClick: (demo: DemoDescriptor) => void,
        onBackClick: (() => void) | null,
        onExitXr: (() => void) | null = null,
    ): Promise<DemoUiController> {
        const textManager = new TextManager(engine);
        await textManager.init();

        const buttons: Map<string, ButtonEntry> = new Map();
        const buttonResults: CreateUiButtonResult[] = [];

        for (let i = 0; i < demos.length; i++) {
            const demo = demos[i];
            const y = UI_LAYOUT.home.originY - i * (UI_LAYOUT.home.btnHeight + UI_LAYOUT.home.btnGap);
            const position = new Vector3(UI_LAYOUT.home.originX, y, UI_LAYOUT.home.originZ);

            const result = createUiButton(scene, {
                name: `btn_${demo.id}`,
                width: UI_LAYOUT.home.btnWidth,
                height: UI_LAYOUT.home.btnHeight,
                position,
                bgColor: MAIN_BTN_BG,
                borderColor: MAIN_BTN_BORDER,
                cornerRadius: UI_LAYOUT.cornerRadius,
                borderThickness: UI_LAYOUT.borderThickness,
                onClick: () => onDemoClick(demo),
            });

            textManager.addParagraph(
                demo.label,
                new Vector3(
                    UI_LAYOUT.home.originX,
                    y + UI_LAYOUT.textYOffset,
                    UI_LAYOUT.home.originZ + UI_LAYOUT.textZOffset,
                ),
                UI_LAYOUT.home.textScale,
            );

            buttons.set(demo.id, {
                plane: result.plane,
                rect: result.rect,
                defaultBg: MAIN_BTN_BG,
                activeBg: MAIN_BTN_ACTIVE_BG,
                defaultBorder: MAIN_BTN_BORDER,
                activeBorder: MAIN_BTN_ACTIVE_BORDER,
            });
            buttonResults.push(result);
        }

        let backPlane: Mesh | null = null;
        let exitPlane: Mesh | null = null;

        let nextY = UI_LAYOUT.home.originY - demos.length * (UI_LAYOUT.home.btnHeight + UI_LAYOUT.home.btnGap);

        if (onBackClick) {
            const backY = nextY - UI_LAYOUT.home.backTopMargin;

            const result = createUiButton(scene, {
                name: 'btn_back',
                width: UI_LAYOUT.home.btnWidth * UI_LAYOUT.home.backWidthRatio,
                height: UI_LAYOUT.home.btnHeight * UI_LAYOUT.home.backHeightRatio,
                position: new Vector3(UI_LAYOUT.home.originX, backY, UI_LAYOUT.home.originZ),
                bgColor: BACK_BTN_BG,
                borderColor: BACK_BTN_BORDER,
                cornerRadius: UI_LAYOUT.cornerRadius,
                borderThickness: UI_LAYOUT.borderThickness,
                onClick: () => onBackClick(),
            });
            backPlane = result.plane;
            buttonResults.push(result);

            textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(
                    UI_LAYOUT.home.originX,
                    backY + UI_LAYOUT.textYOffset,
                    UI_LAYOUT.home.originZ + UI_LAYOUT.textZOffset,
                ),
                UI_LAYOUT.home.backTextScale,
            );

            nextY = backY - UI_LAYOUT.home.btnHeight * UI_LAYOUT.home.backHeightRatio * 0.5;
        }

        if (onExitXr) {
            const exitGap = 0.02;
            const exitY = nextY - exitGap;

            const result = createUiButton(scene, {
                name: 'btn_exit_xr',
                width: UI_LAYOUT.home.btnWidth * UI_LAYOUT.home.backWidthRatio,
                height: UI_LAYOUT.home.btnHeight * UI_LAYOUT.home.backHeightRatio,
                position: new Vector3(UI_LAYOUT.home.originX, exitY, UI_LAYOUT.home.originZ),
                bgColor: EXIT_XR_BG,
                borderColor: EXIT_XR_BORDER,
                cornerRadius: UI_LAYOUT.cornerRadius,
                borderThickness: UI_LAYOUT.borderThickness,
                onClick: () => onExitXr(),
            });
            exitPlane = result.plane;
            buttonResults.push(result);

            textManager.addParagraph(
                'Exit XR',
                new Vector3(
                    UI_LAYOUT.home.originX,
                    exitY + UI_LAYOUT.textYOffset,
                    UI_LAYOUT.home.originZ + UI_LAYOUT.textZOffset,
                ),
                UI_LAYOUT.home.backTextScale,
            );
        }

        const detachText = textManager.attachToScene(scene);

        return new DemoUiController(scene, textManager, buttons, buttonResults, backPlane, exitPlane, detachText);
    }

    setActiveDemo(id: string | null): void {
        for (const [demoId, entry] of this._buttons) {
            const isActive = demoId === id;
            entry.rect.background = isActive ? entry.activeBg : entry.defaultBg;
            entry.rect.color = isActive ? entry.activeBorder : entry.defaultBorder;
        }
        if (this._backPlane) this._backPlane.setEnabled(id !== null);
    }

    setVisible(visible: boolean): void {
        for (const [, entry] of this._buttons) {
            entry.plane.setEnabled(visible);
        }
        if (this._backPlane) this._backPlane.setEnabled(visible);
        if (this._exitPlane) this._exitPlane.setEnabled(visible);

        if (!visible && this._detachText) {
            this._detachText();
            this._detachText = null;
        } else if (visible && !this._detachText) {
            this._detachText = this._textManager.attachToScene(this._scene);
        }
    }

    dispose(): void {
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        this._textManager.dispose();
        for (const r of this._buttonResults) {
            r.texture.dispose();
            r.plane.dispose();
        }
    }
}
