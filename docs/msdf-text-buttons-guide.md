# MSDF Text Rendering for XR Buttons

This guide explains how this project renders high-quality text on 3D buttons using BabylonJS's **MSDF (Multi-channel Signed Distance Field)** text renderer. It covers why MSDF is the right choice for XR, how the pattern works in this codebase, and how to add your own buttons with crisp text.

## Table of Contents

- [Why MSDF Text?](#why-msdf-text)
- [Architecture Overview](#architecture-overview)
- [How to Create a Button with MSDF Text](#how-to-create-a-button-with-msdf-text)
- [Positioning and Sizing](#positioning-and-sizing)
- [Font Customization](#font-customization)
- [Troubleshooting](#troubleshooting)

---

## Why MSDF Text?

When rendering text in a 3D/XR scene, you have several options. Here's how they compare:

| Approach | Resolution | Performance | XR Suitability |
|---|---|---|---|
| **GUI TextBlock** (AdvancedDynamicTexture) | Fixed texture resolution — blurs when viewed up close | Good for small UIs | Poor — users walk close to buttons in XR and see blurry text |
| **Bitmap fonts** (sprite sheets) | Pixelates at any scale other than native | Fast | Poor — need multiple resolution variants |
| **Single-channel SDF** | Scalable but loses sharp corners | Fast | Decent — but corners and serifs round off |
| **MSDF** (this project) | Resolution-independent — crisp at any scale | Fast — GPU shader-based | Excellent — perfect for XR where viewing distance varies |

### Why this matters for XR

In a WebXR immersive-AR session, the user is physically present in the scene. They can walk right up to a floating button and examine it from centimeters away. Traditional GUI textures (like `AdvancedDynamicTexture` with a `TextBlock`) use a fixed-resolution bitmap — typically 512x89 pixels for a button. At arm's length the text looks fine, but up close it becomes a blurry mess.

MSDF solves this by encoding glyph shapes as mathematical distance fields in three color channels (RGB). A GPU shader reconstructs perfect vector-quality outlines at **any scale** — the same technique used by modern game engines for HUD text. Whether the button is 2 meters away or 20 centimeters from the user's eyes, the text remains razor-sharp.

---

## Architecture Overview

This project separates the button into two independent layers:

```
┌─────────────────────────────────┐
│   MSDF Text (TextRenderer)      │  ← Crisp, resolution-independent text
│   src/text/textRenderer.ts      │
├─────────────────────────────────┤
│   GUI Rectangle (button bg)     │  ← Background, border, rounded corners
│   src/core/uiButton.ts          │
├─────────────────────────────────┤
│   Mesh Plane (click target)     │  ← 3D plane for pointer interaction
│   src/core/uiButton.ts          │
└─────────────────────────────────┘
```

### Key files

- **`src/text/textRenderer.ts`** — `TextManager` class. Wraps the BabylonJS `TextRenderer` addon. Loads an MSDF font, provides `addParagraph()` to place text at world positions, and `attachToScene()` to hook rendering into the scene's render loop.

- **`src/core/uiButton.ts`** — `createUiButton()` function. Creates a 3D `Mesh` plane, attaches an `AdvancedDynamicTexture` with a `Rectangle` control (for background color, border, rounded corners), and wires up click handlers via `ActionManager`.

- **`src/demos/demoUi.ts`** — `DemoUiController`. A full example that creates multiple buttons, each with MSDF text labels, and manages visibility/active states.

- **`src/demos/xrLightShadows.ts`** — `XrLightShadowsDemo`. Another example with action buttons (Add Light, Delete Light, etc.) using the same pattern.

### Rendering flow

1. `createUiButton()` creates a `Mesh` plane at a world position. This plane has a `Rectangle` GUI control for the visual background.

2. `TextManager.addParagraph()` adds a text string at a world position slightly offset from the button plane (shifted down on Y and forward on Z so it appears "on" the button face).

3. `TextManager.attachToScene(scene)` returns a detach callback. It hooks into `scene.onAfterCameraRenderObservable` to render all paragraphs each frame using the camera's view/projection matrices.

4. On teardown, call the detach callback and `TextManager.dispose()` to clean up GPU resources.

---

## How to Create a Button with MSDF Text

### Step 1: Initialize the TextManager

```ts
import { TextManager } from './text/textRenderer';

const textManager = new TextManager(engine);
await textManager.init(); // loads MSDF font from CDN
```

The `init()` call fetches the Roboto Regular MSDF font definition and texture from BabylonJS's CDN. The font asset is cached statically, so creating multiple `TextManager` instances does not re-download the font.

### Step 2: Create the button background

```ts
import { createUiButton } from './core/uiButton';

const btn = createUiButton(scene, {
    name: 'my_button',
    width: 0.5,
    height: 0.08,
    position: new Vector3(0, 1.3, -0.55),
    bgColor: '#1a1a1add',
    borderColor: '#ffffff18',
    cornerRadius: 25,
    borderThickness: 8,
    onClick: () => console.log('clicked!'),
});
```

This creates:
- A `Mesh` plane at `(0, 1.3, -0.55)` sized `0.5 × 0.08` world units.
- An `AdvancedDynamicTexture` (512 × computed-height) for the visual background.
- A `Rectangle` GUI control with rounded corners and border.
- An `ActionManager` that fires `onClick` when the user points at and selects the plane.

### Step 3: Add MSDF text on top

```ts
textManager.addParagraph(
    'My Button Label',
    new Vector3(0, 1.3 - 0.005, -0.55 - 0.005),
    0.04,
);
```

The position is offset slightly from the button center:
- **Y offset (`-0.005`)**: shifts text down to vertically center it visually (MSDF text origin is at the text baseline, not the center).
- **Z offset (`-0.005`)**: shifts text slightly toward the camera to prevent z-fighting with the button plane.
- **Scale (`0.04`)**: controls text size. Typical values are `0.028`–`0.04` for button labels.

### Step 4: Hook rendering into the scene

```ts
const detachText = textManager.attachToScene(scene);

// Later, when cleaning up:
detachText();
textManager.dispose();
btn.texture.dispose();
btn.plane.dispose();
```

The `attachToScene()` call returns a function that, when called, removes the render observer from the scene. You **must** call this during cleanup to avoid leaking observers and GPU resources.

### Complete example

Here's a minimal function that creates a button with text, used in this project's demos:

```ts
import { Engine, Scene, Vector3 } from '@babylonjs/core';
import { TextManager } from './text/textRenderer';
import { createUiButton } from './core/uiButton';

async function createLabeledButton(
    engine: Engine,
    scene: Scene,
    label: string,
    position: Vector3,
    onClick: () => void,
) {
    const textManager = new TextManager(engine);
    await textManager.init();

    const btn = createUiButton(scene, {
        name: `btn_${label.replace(/\s+/g, '_')}`,
        width: 0.5,
        height: 0.08,
        position,
        bgColor: '#1a1a1add',
        borderColor: '#ffffff18',
        cornerRadius: 25,
        borderThickness: 8,
        onClick,
    });

    textManager.addParagraph(
        label,
        new Vector3(position.x, position.y - 0.005, position.z - 0.005),
        0.04,
    );

    const detachText = textManager.attachToScene(scene);

    return {
        ...btn,
        detach: () => {
            detachText();
            textManager.dispose();
        },
    };
}
```

### Multiple buttons with a shared TextManager

If you have many buttons (like the demo menu), share a single `TextManager` to reduce draw calls:

```ts
const textManager = new TextManager(engine);
await textManager.init();

const buttons = [
    { label: 'Button A', position: new Vector3(0, 1.4, -0.55) },
    { label: 'Button B', position: new Vector3(0, 1.3, -0.55) },
    { label: 'Button C', position: new Vector3(0, 1.2, -0.55) },
];

for (const { label, position } of buttons) {
    createUiButton(scene, { /* ... */ });
    textManager.addParagraph(
        label,
        new Vector3(position.x, position.y - 0.005, position.z - 0.005),
        0.04,
    );
}

const detachText = textManager.attachToScene(scene);
```

All paragraphs added to the same `TextRenderer` are batched into a single draw call, so sharing a `TextManager` is significantly more efficient than creating one per button.

---

## Positioning and Sizing

### Layout constants used in this project

The demo UI uses these constants for a menu panel floating in front of the user:

| Constant | Value | Purpose |
|---|---|---|
| `_btnWidth` | `0.5` | Button width in world units |
| `_btnHeight` | `0.08` | Button height in world units |
| `_btnGap` | `0.02` | Vertical gap between buttons |
| `_originY` | `1.35` | Y position of first button (roughly eye height) |
| `_originZ` | `-0.55` | Z offset (in front of user) |
| `_textScale` | `0.04` | MSDF text scale for labels |
| `_textYOffset` | `-0.005` | Vertical nudge for text centering |
| `_textZOffset` | `-0.005` | Forward nudge to prevent z-fighting |

### Computing button Y positions

```ts
const y = originY - i * (btnHeight + btnGap);
```

Buttons are stacked vertically downward from the origin. The gap gives visual separation between touch targets.

### Scaling the text

The `scale` parameter in `addParagraph()` is a uniform scale applied to the MSDF text. Since MSDF is resolution-independent, you can use any value:

- `0.016` — small text for compact action buttons (used in the XR Light & Shadows demo)
- `0.028` — medium text for standard buttons
- `0.032` — slightly smaller for "back" buttons
- `0.04` — default for main menu items

---

## Font Customization

### Using a different font

The font URL is defined as static fields on `TextManager`:

```ts
private static readonly _fontDefinitionUrl = 'https://assets.babylonjs.com/fonts/roboto-regular.json';
private static readonly _fontTextureUrl = 'https://assets.babylonjs.com/fonts/roboto-regular.png';
```

To use a custom font, generate MSDF font assets using one of these tools:

- **Web tool**: [msdf-bmfont.donmccurdy.com](https://msdf-bmfont.donmccurdy.com/)
- **CLI tool**: [github.com/Chlumsky/msdfgen](https://github.com/Chlumsky/msdfgen#using-a-multi-channel-distance-field)

You need to provide the set of characters to include. For typical English text:

```
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 `~!@#$%^&*()-_=+[{]}\|;:'",<.>/?
```

After generating, place the `.json` and `.png` files in `public/fonts/` and update the URLs:

```ts
private static readonly _fontDefinitionUrl = '/fonts/my-font-regular.json';
private static readonly _fontTextureUrl = '/fonts/my-font-regular.png';
```

### TextRenderer properties

The `TextManager` exposes `renderer` for advanced configuration:

```ts
textManager.renderer.color = new Color4(1, 1, 1, 1); // white text
textManager.renderer.thicknessControl = 0.1;          // slightly bolder
textManager.renderer.strokeColor = new Color4(0, 0, 0, 1); // black outline
textManager.renderer.strokeOutsetWidth = 0.2;               // outline size
```

---

## Troubleshooting

### Text is not visible

- Make sure you called `await textManager.init()` before `addParagraph()`.
- Make sure you called `textManager.attachToScene(scene)` — without it, the text renderer has no render loop hook.
- Check that the text position is in front of the camera and not behind other geometry.

### Text appears blurry

- MSDF text should never be blurry. If it is, check that `init()` completed successfully (the font texture loaded).
- Verify the font `.png` file loaded (check browser network tab for 404s).

### Text z-fights with the button plane

- Increase the Z offset (e.g., `-0.005` to `-0.01`).
- Alternatively, set `renderer.ignoreDepthBuffer = true` to render text on top of everything (use sparingly).

### "Font is not registered" or silent failure

- This project uses deep imports from `@babylonjs/addons/msdfText`. The import must match:
  ```ts
  import { FontAsset, TextRenderer } from '@babylonjs/addons/msdfText';
  ```
- Do **not** import from `@babylonjs/addons` barrel export — tree-shaking may drop the registration side effects.

### Multiple TextManagers sharing one scene

- Only one `attachToScene()` should be active at a time per scene. If you need multiple text layers, call `detach()` on the first before attaching the second.
- Better yet, share a single `TextManager` and add all paragraphs to it.

### Memory leaks

- Always call the detach function returned by `attachToScene()` when switching scenes or disposing.
- Always call `textManager.dispose()` to free GPU buffers.
- Always call `btn.texture.dispose()` and `btn.plane.dispose()` for button cleanup.
