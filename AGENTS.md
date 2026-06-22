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
- Access XR features via the typed metadata helpers (injected before `build()`):
  ```ts
  import { getMetadata } from '../core';
  const { xr, xrAnchors, planeDetectionManager, goBack } = getMetadata(scene);
  ```
- `goBack` callback is injected into metadata - use `getGoBackCallback(scene)` or `getMetadata(scene).goBack` for "Return to Main Scene" buttons.
- **Every created object must be disposed in `teardown()`** - leaked objects persist in the shared scene. Use `DisposableStack` to track them.

### Strategy 2: Own Scene (`reuseScene: false`)
- Creates a brand new `Scene` + XR session. Full isolation but slower transitions.
- Scene disposal cleans up everything at once.
- Use when the demo needs its own camera, lighting, or render settings.

### Key files

| File | Role |
|---|---|
| `src/core/sceneManager.ts` | `SceneManager` - state machine (`SceneState` discriminated union: `home`, `reused_scene`, `own_scene`) |
| `src/core/sceneMetadata.ts` | Typed `SceneMetadata` interface + `getMetadata()` / `setMetadata()` helpers |
| `src/core/demoPanel.ts` | Shared demo panel helpers: `createPanelButton`, `createBackButton`, `createPanelRoot`, `saveAndTransparentClearColor`, `getGoBackCallback`, `initPanelText` |
| `src/core/uiLayout.ts` | `UI_LAYOUT` constants (button sizes, positions, text offsets) + `BACK_BUTTON_COLORS` |
| `src/core/disposableStack.ts` | `DisposableStack` - tracks all created objects for bulk disposal in `teardown()` |
| `src/core/domWiring.ts` | DOM overlay wiring: `wireXrOverlay`, `wireXrToggle`, `wirePdfInput`, `wireMpServerInput` |
| `src/core/storage.ts` | `readStorage()` / `writeStorage()` + `STORAGE_KEYS` |
| `src/core/clipboard.ts` | `readClipboardText()` |
| `src/core/fileDownload.ts` | `downloadBlob()`, `downloadJson()`, `pickFile()` |
| `src/core/errors.ts` | `formatError()` - safe unknown→string |
| `src/core/gizmoManagerFactory.ts` | `createGizmoManager()` - positional/bounding-box gizmo helper |
| `src/demos/index.ts` | `DemoRegistry` - static catalog of `DemoDescriptor` objects |
| `src/demos/demoUi.ts` | `DemoUiController` - floating 3D button menu |
| `src/demos/xrLightShadows.ts` | `XrLightShadowsDemo` - shadows on detected planes, point lights, gizmos |
| `src/demos/multiplayer.ts` | `MultiplayerDemo` - Colyseus client, remote player avatars |
| `src/demos/pdfReader.ts` | `PdfReaderDemo` - texture-based PDF display in XR |
| `src/demos/diceRoller.ts` | `DiceRollerDemo` - dice selection, simple-RNG + Havok physics + manual grab-and-throw roll modes |
| `src/demos/diceMeshes.ts` | Polyhedron mesh builders (d4–d20) + face-normal extraction + `findUpFaceIndex`, `DIE_RADIUS` |
| `src/demos/dicePhysics.ts` | Lazy `getHavokPlugin()` singleton, `createDieAggregate()` helper, die physics constants (`DIE_MASS`, `DIE_RESTITUTION`, etc.) |
| `src/demos/agentHelper.ts` | `AgentHelperDemo` - "The Blob" voice assistant UI, pipeline orchestration (record → ASR → LLM → TTS → play), mic & TTS audio routing to avatar |
| `src/demos/aiAvatar.ts` | `AiAvatar` - animated 3D orb ("The Blob") with custom GLSL shaders, 4 state animations, audio-reactive deformation, clickable |
| `src/demos/llmConfig.ts` | Provider/model constants, `TtsProvider` interface, pre-built TTS providers (`DEEPINFRA_TTS`, `OPENAI_TTS`) |
| `src/demos/gestureRecognition.ts` | `GestureRecognitionDemo` - hand tracking setup, UI (left/right gesture labels), prediction loop |
| `src/demos/gestureClassifier.ts` | `GestureClassifier` - ONNX model loading, hand normalization (PCA), inference |
| `src/xr/xrExperience.ts` | `XrExperience` - wraps WebXR (plane detection, anchors) |
| `src/xr/planeDetectionManager.ts` | `PlaneDetectionManager` - tracks detected planes, `findFloorReference()` |
| `src/core/uiButton.ts` | `createUiButton()` - 3D mesh plane + GUI rectangle background |
| `src/text/textRenderer.ts` | `TextManager` - wraps BabylonJS MSDF `TextRenderer` addon |
| `src/main.ts` | Entry point - wires everything together |

### Adding a new demo

1. Create a file in `src/demos/` with a class that accepts `Scene` in its constructor and has a `teardown()` method. Use `DisposableStack` for cleanup, and the shared panel helpers (`createPanelRoot`, `createPanelButton`, `createBackButton`, `initPanelText`):
   ```ts
   import { Scene, Vector3 } from '@babylonjs/core';
   import {
       DisposableStack, createPanelButton, createBackButton,
       createPanelRoot, getGoBackCallback, initPanelText,
       saveAndTransparentClearColor, UI_LAYOUT,
   } from '../core';

   export class MyDemo {
       private _cleanup = new DisposableStack();
       private _disposed = false;
       private _prevClearColor: Color4;

       constructor(scene: Scene) {
           this._prevClearColor = saveAndTransparentClearColor(scene);
           const panelRoot = createPanelRoot(scene, 'my_panel', this._cleanup);

           const goBack = getGoBackCallback(scene);
           if (goBack) {
               createBackButton({ scene, cleanup: this._cleanup, parent: panelRoot,
                   position: new Vector3(0, -0.14, 0), onGoBack: goBack });
           }

           initPanelText({ scene, cleanup: this._cleanup,
               isDisposed: () => this._disposed,
               onReady: (tm) => { tm.attachToScene(scene); /* addParagraph calls */ },
           });
       }

       teardown() { this._disposed = true; this._cleanup.dispose();
           this._scene.clearColor = this._prevClearColor; }
   }
   ```
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

Save/restore any modified scene state (e.g., `clearColor` - use `saveAndTransparentClearColor()`). Track all created objects with `DisposableStack` and dispose them:
```ts
private _cleanup = new DisposableStack();
teardown() { this._cleanup.dispose(); }
```
The `createPanelButton`, `createBackButton`, and `createPanelRoot` helpers auto-register objects with the stack. For manual objects, call `this._cleanup.add(obj)` or `this._cleanup.register(() => obj.dispose())`.

## MSDF Text Rendering

This project uses **MSDF (Multi-channel Signed Distance Field)** text for XR buttons - resolution-independent, crisp at any viewing distance. Do **not** use GUI `TextBlock` for XR-facing text (it's a fixed-resolution texture that blurs up close).

### Text + Button pattern

Each button is a 3-layer stack:
1. **Mesh plane** - 3D click target with `ActionManager` for pointer interaction
2. **GUI Rectangle** - background color, border, rounded corners via `AdvancedDynamicTexture`
3. **MSDF text** - crisp label rendered via `TextManager`

For demo panels, prefer the shared helpers (`createPanelButton`, `initPanelText`) over raw `createUiButton` + manual `TextManager`. The helpers auto-register with `DisposableStack`, apply standard corner radius/border thickness, and handle disposal races during async font loading.

```ts
// Shared helpers from '../core':
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

- Text position is offset from button center: Y `-0.005` (vertical centering), Z `-0.005` (prevent z-fighting). Use `UI_LAYOUT.textYOffset` and `UI_LAYOUT.textZOffset`.
- Typical text scales: `UI_LAYOUT.panel.smallTextScale` (0.016, compact), `UI_LAYOUT.panel.textScale` (0.028, standard), `UI_LAYOUT.home.textScale` (0.04, main menu).
- **Share one `TextManager` across multiple buttons** - paragraphs are batched into a single draw call.
- Only one `attachToScene()` should be active per scene at a time.

### Font customization

Font URLs are static fields on `TextManager`. To use a custom font, generate MSDF assets (e.g., via `msdfgen`), place in `public/fonts/`, and update the URLs. Text style properties are on `textManager.renderer` (color, thickness, stroke).

## Project Directory Layout

```
src/
  core/       - SceneManager, createUiButton, demoPanel helpers, DisposableStack,
                UI_LAYOUT, sceneMetadata, domWiring, storage, clipboard, fileDownload,
                errors, gizmoManagerFactory, types
   demos/      - DemoRegistry, DemoUiController, individual demo classes
                 (xrLightShadows, multiplayer, pdfReader, pdfPreprocessor,
                  diceRoller, diceMeshes, dicePhysics, agentHelper, aiAvatar,
                  llmConfig, gestureRecognition, gestureClassifier)
   xr/         - XrExperience, PlaneDetectionManager
   text/       - TextManager (MSDF wrapper)
   lighting/   - ShadowManager, WindowLight, createShadowGenerator
   materials/  - applyShadowMaterialFacing (shadow-only material helper)
   meshes/     - buildPolygonMesh (polygon mesh builder for detected planes),
                 polygonMath (polygonArea)
```

## Demo-specific Documentation

The sections above cover **universal** project knowledge (scene management, MSDF text, imports, build/commands). For the internal architecture of individual demos, see:

| Demo | Documentation | Covers |
|---|---|---|
| Dice Roller | [docs/demos/dice-roller.md](docs/demos/dice-roller.md) | Roll modes (simple/physics/manual), Havok WASM serving, `createDieAggregate()` discipline, manual grab system, d4 result rule, non-pickable tray meshes |
| Gesture Recognition | [docs/demos/gesture-recognition.md](docs/demos/gesture-recognition.md) | Hand tracking setup (already-tracked hands caveat), ONNX WASM serving (`numThreads=1`, fully-qualified `wasmPaths`), prediction pipeline |
| AI Voice Assistant | [docs/demos/agent-helper.md](docs/demos/agent-helper.md) | record→ASR→LLM→TTS pipeline, `TtsProvider` abstraction, provider switching, "The Blob" AiAvatar shaders & audio routing |
| PDF Reader | [docs/demos/pdf-reader.md](docs/demos/pdf-reader.md) | Two-stage PDF.js preprocessing, `.pre` binary format, `_drawPlaceholder()` race condition |

Additional guides in `docs/`:
- [scene-management-guide.md](docs/scene-management-guide.md) - in-depth SceneManager walkthrough
- [msdf-text-buttons-guide.md](docs/msdf-text-buttons-guide.md) - MSDF text + button deep dive
- [pdf-preprocessing-guide.md](docs/pdf-preprocessing-guide.md) - full `.pre` binary format spec
