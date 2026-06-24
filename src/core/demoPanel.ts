import { Color4, Scene, TransformNode, Vector3 } from '@babylonjs/core';

import { TextManager } from '../text/textRenderer';
import { createUiButton, type CreateUiButtonResult } from './uiButton';
import { DisposableStack } from './disposableStack';
import { UI_LAYOUT, BACK_BUTTON_COLORS } from './uiLayout';
import { getMetadata } from './sceneMetadata';

export interface CreatePanelButtonOptions {
    scene: Scene;
    cleanup: DisposableStack;
    /** Prefix prepended to the generated mesh name (e.g. 'pdf', 'mp'). */
    namePrefix: string;
    /** Label used for the mesh name (whitespace replaced with '_'). */
    label: string;
    width: number;
    height: number;
    position: Vector3;
    parent?: TransformNode;
    bgColor: string;
    borderColor: string;
    onClick: () => void;
}

/**
 * Wraps `createUiButton` with the conventions shared by every demo panel:
 * - prefixed mesh name (whitespace-stripped)
 * - default corner radius / border thickness
 * - automatic cleanup registration for the texture and plane
 */
export function createPanelButton(options: CreatePanelButtonOptions): CreateUiButtonResult {
    const sanitizedLabel = options.label.replace(/\s+/g, '_');
    const name = options.namePrefix ? `${options.namePrefix}_${sanitizedLabel}` : sanitizedLabel;
    const result = createUiButton(options.scene, {
        name,
        width: options.width,
        height: options.height,
        position: options.position,
        parent: options.parent,
        bgColor: options.bgColor,
        borderColor: options.borderColor,
        cornerRadius: UI_LAYOUT.cornerRadius,
        borderThickness: UI_LAYOUT.borderThickness,
        onClick: options.onClick,
    });
    options.cleanup.add(result.texture);
    options.cleanup.add(result.plane);
    return result;
}

export interface CreateBackButtonOptions {
    scene: Scene;
    cleanup: DisposableStack;
    parent: TransformNode;
    position: Vector3;
    onGoBack: () => void;
    /** Overrides for default back-button colors (e.g. when a demo needs alpha). */
    bgColor?: string;
    borderColor?: string;
    widthRatio?: number;
    heightRatio?: number;
    /** Prefix for the mesh name; defaults to 'btn'. */
    namePrefix?: string;
    /**
     * When true, the first tap arms the button (color change + `onArmChange`)
     * and a second tap within `doubleTapTimeoutMs` fires `onGoBack`.
     * Prevents accidental exits during active interaction.
     */
    requireDoubleTap?: boolean;
    /** Called whenever the armed state changes (requires `requireDoubleTap`). */
    onArmChange?: (armed: boolean) => void;
    /** Auto-disarm timeout in milliseconds (default 3000). */
    doubleTapTimeoutMs?: number;
    /** Background color when armed (defaults to `BACK_BUTTON_COLORS.armedBgColor`). */
    armedBgColor?: string;
    /** Border color when armed (defaults to `BACK_BUTTON_COLORS.armedBorderColor`). */
    armedBorderColor?: string;
}

/**
 * Standardized "Return to Main Scene" button used by every demo panel.
 * Pulls dimensions from `UI_LAYOUT.panel` and colors from `BACK_BUTTON_COLORS`.
 *
 * When `requireDoubleTap` is enabled, the first tap arms the button (visual
 * change + `onArmChange(true)`). A second tap within the timeout fires
 * `onGoBack`; otherwise it auto-disarms. The timeout is cleaned up via
 * the provided `DisposableStack`.
 */
export function createBackButton(options: CreateBackButtonOptions): CreateUiButtonResult {
    const widthRatio = options.widthRatio ?? UI_LAYOUT.panel.backWidthRatio;
    const heightRatio = options.heightRatio ?? UI_LAYOUT.panel.backHeightRatio;
    const bgColor = options.bgColor ?? BACK_BUTTON_COLORS.bgColor;
    const borderColor = options.borderColor ?? BACK_BUTTON_COLORS.borderColor;

    if (!options.requireDoubleTap) {
        return createPanelButton({
            scene: options.scene,
            cleanup: options.cleanup,
            namePrefix: options.namePrefix ?? 'btn',
            label: 'back',
            width: UI_LAYOUT.panel.btnWidth * widthRatio,
            height: UI_LAYOUT.panel.btnHeight * heightRatio,
            position: options.position,
            parent: options.parent,
            bgColor,
            borderColor,
            onClick: options.onGoBack,
        });
    }

    const timeoutMs = options.doubleTapTimeoutMs ?? 3000;
    const armedBgColor = options.armedBgColor ?? BACK_BUTTON_COLORS.armedBgColor;
    const armedBorderColor = options.armedBorderColor ?? BACK_BUTTON_COLORS.armedBorderColor;

    let armed = false;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const result = createPanelButton({
        scene: options.scene,
        cleanup: options.cleanup,
        namePrefix: options.namePrefix ?? 'btn',
        label: 'back',
        width: UI_LAYOUT.panel.btnWidth * widthRatio,
        height: UI_LAYOUT.panel.btnHeight * heightRatio,
        position: options.position,
        parent: options.parent,
        bgColor,
        borderColor,
        onClick: () => {
            if (!armed) {
                armed = true;
                result.rect.background = armedBgColor;
                result.rect.color = armedBorderColor;
                options.onArmChange?.(true);
                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(() => {
                    timeout = null;
                    armed = false;
                    result.rect.background = bgColor;
                    result.rect.color = borderColor;
                    options.onArmChange?.(false);
                }, timeoutMs);
                return;
            }
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            armed = false;
            result.rect.background = bgColor;
            result.rect.color = borderColor;
            options.onArmChange?.(false);
            options.onGoBack();
        },
    });

    options.cleanup.register(() => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    });

    return result;
}

/**
 * Creates a panel-root TransformNode anchored at `UI_LAYOUT.panelPosition`
 * and registers it with the cleanup stack.
 */
export function createPanelRoot(scene: Scene, name: string, cleanup: DisposableStack): TransformNode {
    const root = new TransformNode(name, scene);
    root.position = UI_LAYOUT.panelPosition.clone();
    cleanup.add(root);
    return root;
}

/**
 * Saves the current scene clear color, then sets it to fully transparent
 * (so the XR passthrough shows through). Returns the previous color for
 * restoration in `teardown()`.
 */
export function saveAndTransparentClearColor(scene: Scene): Color4 {
    const previous = scene.clearColor.clone();
    scene.clearColor = new Color4(0, 0, 0, 0);
    return previous;
}

/**
 * Reads the `goBack` callback injected into `scene.metadata` by SceneManager
 * when a demo is launched inside the reused home scene.
 */
export function getGoBackCallback(scene: Scene): (() => void) | null {
    return getMetadata(scene).goBack ?? null;
}

export interface InitPanelTextOptions {
    scene: Scene;
    cleanup: DisposableStack;
    /** Should return true once the owning demo has been disposed. */
    isDisposed: () => boolean;
    /**
     * Called once after the MSDF font finishes loading and the demo is still
     * alive. The receiver should call `textManager.attachToScene()` and any
     * initial layout work (e.g. `_rebuildText()`).
     */
    onReady: (textManager: TextManager) => void;
}

/**
 * Constructs a TextManager and wires up its async init, applying the same
 * pattern used by every demo: create -> init -> onReady -> cleanup.add.
 *
 * Disposal races (init resolves after teardown) are handled internally.
 */
export function initPanelText(options: InitPanelTextOptions): TextManager {
    const textManager = new TextManager(options.scene.getEngine());
    textManager.init().then(() => {
        if (options.isDisposed()) {
            textManager.dispose();
            return;
        }
        options.onReady(textManager);
        options.cleanup.add(textManager);
    });
    return textManager;
}
