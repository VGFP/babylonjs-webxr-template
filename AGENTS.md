# AGENTS.md

## Commands

- `pnpm dev` - Vite dev server on port 5173 (HTTPS auto-enabled if `.certs/` exists)
- `pnpm build` - production build to `dist/`
- `pnpm lint` - ESLint check (`pnpm lint:fix` to auto-fix)
- `pnpm format` - Prettier check (`pnpm format:fix` to auto-fix)
- `pnpm typecheck` - TypeScript `tsc --noEmit`
- `pnpm check` - runs lint + format + typecheck together
- `pnpm test` - runs unit tests with vitest (`pnpm test:watch` for watch mode)

A **pre-commit hook** (via Husky + lint-staged) runs `tsc --noEmit` on the full project, then `eslint --fix` and `prettier --write` on staged `.ts` files.

## Architecture

Single-page app: `index.html` loads `src/main.ts` (top-level await). BabylonJS scene with WebXR immersive-AR passthrough, plus a fullscreen GUI overlay. No router, no state management, no framework.

## BabylonJS Import Convention

Deep imports are required for tree-shaking - do not import everything from `@babylonjs/core`:

```ts
import { Engine } from '@babylonjs/core';
import '@babylonjs/core/XR/features/webXRPassthrough'; // side-effect imports for registration
import '@babylonjs/core/XR/webXRDefaultExperience';
```

Missing a side-effect import causes silent runtime failures (WebXR features won't register).

Same applies to `@babylonjs/addons` - use deep imports:
```ts
import { FontAsset, TextRenderer } from '@babylonjs/addons/msdfText';
```
Do **not** import from the `@babylonjs/addons` barrel - tree-shaking may drop registration side effects.

## HTTPS Certificates

WebXR requires HTTPS. `vite.config.ts` auto-detects `.certs/localhost.key` + `.certs/localhost.pem`. Regenerate with `bash scripts/generate-cert.sh`.

## Scene Management (WebXR Constraint)

**You cannot freely dispose/switch `Scene` objects in WebXR** - the XR session, camera, controllers, plane detection, and anchors are all bound to the `Scene` instance used to create them. Disposing the scene kills the XR session, and re-entering requires a user gesture + permission flow.

This project uses a state machine (`SceneManager`) that switches between "virtual scenes" while keeping the XR session alive. There are two strategies:

### Strategy 1: Reused Scene (`reuseScene: true`)
- Runs inside the home scene - no new Scene or XR session.
- Demo's `build()` adds objects to the existing scene; returns a `teardown()` for cleanup.
- Access XR features via `scene.metadata` (injected before `build()`):
  ```ts
  const xr = scene.metadata.xr as WebXRDefaultExperience;
  const xrAnchors = scene.metadata.xrAnchors;
  const pdm = scene.metadata.planeDetectionManager as PlaneDetectionManager;
  ```
- `goBack` callback is injected into `scene.metadata.goBack` - use it for "return" buttons.
- **Every created object must be disposed in `teardown()`** - leaked objects persist in the shared scene.

### Strategy 2: Own Scene (`reuseScene: false`)
- Creates a brand new `Scene` + XR session. Full isolation but slower transitions.
- Scene disposal cleans up everything at once.
- Use when the demo needs its own camera, lighting, or render settings.

### Key files

| File | Role |
|---|---|
| `src/core/sceneManager.ts` | `SceneManager` - state machine (`SceneState` discriminated union: `home`, `reused_scene`, `own_scene`) |
| `src/demos/index.ts` | `DemoRegistry` - static catalog of `DemoDescriptor` objects |
| `src/demos/demoUi.ts` | `DemoUiController` - floating 3D button menu |
| `src/xr/xrExperience.ts` | `XrExperience` - wraps WebXR (plane detection, anchors) |
| `src/core/uiButton.ts` | `createUiButton()` - 3D mesh plane + GUI rectangle background |
| `src/text/textRenderer.ts` | `TextManager` - wraps BabylonJS MSDF `TextRenderer` addon |
| `src/main.ts` | Entry point - wires everything together |

### Adding a new demo

1. Create a file in `src/demos/` with a class that accepts `Scene` in its constructor and has a `teardown()` method.
2. Register it in `src/demos/index.ts`:
   ```ts
   DemoRegistry.register({
       id: 'my-demo',
       label: 'My Demo',
       build: (scene) => {
           const demo = new MyDemo(scene);
           return () => demo.teardown();
       },
       ownUi: true,      // true = demo manages its own UI
       reuseScene: true,  // true = reuse home scene, false = own scene + XR
   });
   ```

### Cleanup discipline for reused scenes

Save/restore any modified scene state (e.g., `clearColor`). Track all created objects and dispose them:
```ts
private _cleanup: { dispose(): void }[] = [];
teardown() { for (const item of this._cleanup) item.dispose(); }
```

## MSDF Text Rendering

This project uses **MSDF (Multi-channel Signed Distance Field)** text for XR buttons - resolution-independent, crisp at any viewing distance. Do **not** use GUI `TextBlock` for XR-facing text (it's a fixed-resolution texture that blurs up close).

### Text + Button pattern

Each button is a 3-layer stack:
1. **Mesh plane** - 3D click target with `ActionManager` for pointer interaction
2. **GUI Rectangle** - background color, border, rounded corners via `AdvancedDynamicTexture`
3. **MSDF text** - crisp label rendered via `TextManager`

```ts
const textManager = new TextManager(engine);
await textManager.init(); // loads MSDF font from CDN (cached statically)

const btn = createUiButton(scene, { name, width, height, position, bgColor, onClick });
textManager.addParagraph(label, new Vector3(x, y - 0.005, z - 0.005), textScale);

const detachText = textManager.attachToScene(scene); // hooks into render loop

// Cleanup:
detachText();
textManager.dispose();
btn.texture.dispose();
btn.plane.dispose();
```

- Text position is offset from button center: Y `-0.005` (vertical centering), Z `-0.005` (prevent z-fighting).
- Typical text scales: `0.016` (compact), `0.028` (standard), `0.04` (main menu).
- **Share one `TextManager` across multiple buttons** - paragraphs are batched into a single draw call.
- Only one `attachToScene()` should be active per scene at a time.

### Font customization

Font URLs are static fields on `TextManager`. To use a custom font, generate MSDF assets (e.g., via `msdfgen`), place in `public/fonts/`, and update the URLs. Text style properties are on `textManager.renderer` (color, thickness, stroke).

## Project Directory Layout

```
src/
  core/       - SceneManager, createUiButton, Engine setup, types
  demos/      - DemoRegistry, DemoUiController, individual demo classes
  xr/         - XrExperience, PlaneDetectionManager
  text/       - TextManager (MSDF wrapper)
  lighting/   - WindowLight, shadows
  materials/  - ShadowMaterial
  meshes/     - PolygonGenerator
```


