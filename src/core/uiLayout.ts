import { Vector3 } from '@babylonjs/core';

/**
 * Shared UI layout constants for XR panels and menus.
 *
 * Two contexts:
 * - `home`: the top-level demo-selection menu (taller buttons, larger text)
 * - `panel`: in-demo floating panels (smaller, denser controls)
 *
 * Shared values (`panelPosition`, `cornerRadius`, etc.) are common to both.
 */
export const UI_LAYOUT = {
    /** Common anchor for floating XR panels (in front of the user at chest height). */
    panelPosition: new Vector3(0, 1.35, -0.55),

    cornerRadius: 25,
    borderThickness: 8,

    /** Vertical centering offset for MSDF text on a button. */
    textYOffset: -0.005,
    /** Pushes text slightly in front of the button plane to avoid z-fighting. */
    textZOffset: -0.005,

    /** Home (top-level) demo-selection menu sizing. */
    home: {
        btnWidth: 0.5,
        btnHeight: 0.08,
        btnGap: 0.02,
        originY: 1.35,
        originX: 0,
        originZ: -0.55,
        textScale: 0.04,
        backTextScale: 0.032,
        backTopMargin: 0.01,
        backWidthRatio: 0.8,
        backHeightRatio: 0.85,
    },

    /** In-demo floating panel sizing. */
    panel: {
        btnWidth: 0.44,
        btnHeight: 0.07,
        textScale: 0.028,
        smallTextScale: 0.016,
        statusTextScale: 0.018,
        backWidthRatio: 0.85,
        backHeightRatio: 0.85,
    },
} as const;

/** Standard colors for the "Return to Main Scene" button. */
export const BACK_BUTTON_COLORS = {
    bgColor: '#2a1a0a',
    borderColor: '#ffb45044',
    /** Colors when the button is in the armed (awaiting confirm) state. */
    armedBgColor: '#5a1a0a',
    armedBorderColor: '#ff6020aa',
} as const;
