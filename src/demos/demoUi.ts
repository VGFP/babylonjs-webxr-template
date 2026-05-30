import {
    Engine,
    Mesh,
    Scene,
    Vector3,
} from '@babylonjs/core';
import { Rectangle } from '@babylonjs/gui/2D/controls/rectangle';
import { TextManager } from '../text/textRenderer';
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

export class DemoUiController implements DemoUi {
    private static readonly _btnWidth = 0.5;
    private static readonly _btnHeight = 0.08;
    private static readonly _btnGap = 0.02;
    private static readonly _originY = 1.35;
    private static readonly _originX = 0;
    private static readonly _originZ = -0.55;
    private static readonly _cornerRadius = 25;
    private static readonly _borderThickness = 8;
    private static readonly _textScale = 0.04;
    private static readonly _backTextScale = 0.032;
    private static readonly _backWidthRatio = 0.8;
    private static readonly _backHeightRatio = 0.85;
    private static readonly _backTopMargin = 0.01;
    private static readonly _textYOffset = -0.005;
    private static readonly _textZOffset = -0.005;

    private readonly _scene: Scene;
    private readonly _textManager: TextManager;
    private readonly _buttons: Map<string, ButtonEntry>;
    private readonly _buttonResults: CreateUiButtonResult[];
    private _backPlane: Mesh | null;
    private _detachText: (() => void) | null;

    private constructor(
        scene: Scene,
        textManager: TextManager,
        buttons: Map<string, ButtonEntry>,
        buttonResults: CreateUiButtonResult[],
        backPlane: Mesh | null,
        detachText: (() => void) | null,
    ) {
        this._scene = scene;
        this._textManager = textManager;
        this._buttons = buttons;
        this._buttonResults = buttonResults;
        this._backPlane = backPlane;
        this._detachText = detachText;
    }

    static async create(
        engine: Engine,
        scene: Scene,
        demos: readonly DemoDescriptor[],
        onDemoClick: (demo: DemoDescriptor) => void,
        onBackClick: (() => void) | null,
    ): Promise<DemoUiController> {
        const textManager = new TextManager(engine);
        await textManager.init();

        const buttons: Map<string, ButtonEntry> = new Map();
        const buttonResults: CreateUiButtonResult[] = [];

        for (let i = 0; i < demos.length; i++) {
            const demo = demos[i];
            const y = DemoUiController._originY - i * (DemoUiController._btnHeight + DemoUiController._btnGap);
            const position = new Vector3(DemoUiController._originX, y, DemoUiController._originZ);

            const result = createUiButton(scene, {
                name: `btn_${demo.id}`,
                width: DemoUiController._btnWidth,
                height: DemoUiController._btnHeight,
                position,
                bgColor: '#1a1a1add',
                borderColor: '#ffffff18',
                cornerRadius: DemoUiController._cornerRadius,
                borderThickness: DemoUiController._borderThickness,
                onClick: () => onDemoClick(demo),
            });

            textManager.addParagraph(
                demo.label,
                new Vector3(DemoUiController._originX, y + DemoUiController._textYOffset, DemoUiController._originZ + DemoUiController._textZOffset),
                DemoUiController._textScale,
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
            const backY = DemoUiController._originY - demos.length * (DemoUiController._btnHeight + DemoUiController._btnGap) - DemoUiController._backTopMargin;

            const result = createUiButton(scene, {
                name: 'btn_back',
                width: DemoUiController._btnWidth * DemoUiController._backWidthRatio,
                height: DemoUiController._btnHeight * DemoUiController._backHeightRatio,
                position: new Vector3(DemoUiController._originX, backY, DemoUiController._originZ),
                bgColor: '#111111bb',
                borderColor: '#ffffff12',
                cornerRadius: DemoUiController._cornerRadius,
                borderThickness: DemoUiController._borderThickness,
                onClick: () => onBackClick(),
            });
            backPlane = result.plane;
            buttonResults.push(result);

            textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(DemoUiController._originX, backY + DemoUiController._textYOffset, DemoUiController._originZ + DemoUiController._textZOffset),
                DemoUiController._backTextScale,
            );
        }

        const detachText = textManager.attachToScene(scene);

        return new DemoUiController(scene, textManager, buttons, buttonResults, backPlane, detachText);
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
