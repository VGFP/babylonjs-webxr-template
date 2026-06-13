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

## Havok Physics (Dice Roller)

The Dice Roller's physics and manual modes use Havok via `@babylonjs/havok`. The Havok ESM bundle expects to fetch `HavokPhysics.wasm` next to its own JS file, but Vite pre-bundles `node_modules` and the relative URL resolves to a 404 (returning the SPA `index.html`).

`vite.config.ts` registers a middleware that serves the WASM from `node_modules/@babylonjs/havok/lib/esm/` at the path `/havok-internal/HavokPhysics.wasm`, and a `closeBundle` hook that copies it to `dist/havok-internal/` in production builds. `getHavokPlugin()` in `src/demos/dicePhysics.ts` passes the URL via `locateFile`, prefixed with `import.meta.env.BASE_URL` so it works under both the dev server (`/`) and production sub-paths.

**Important:** Do NOT call `scene.disablePhysicsEngine()` in `teardown()`. Doing so disposes the HavokPlugin singleton; `getHavokPlugin()` returns a cached-but-destroyed plugin on re-entry and physics becomes permanently unavailable. The demo's `teardown()` relies on `DisposableStack` to dispose individual physics bodies and meshes - the engine itself stays alive for reuse.

## ONNX Runtime WASM (Gesture Recognition)

The Gesture Recognition demo uses `onnxruntime-web` to run ONNX ML models for hand gesture classification. Same WASM-serving problem as Havok: Vite pre-bundles `onnxruntime-web`, and the WASM files in `node_modules/onnxruntime-web/dist/` are unreachable at their original relative paths.

`vite.config.ts` registers middleware that serves WASM from `node_modules/onnxruntime-web/dist/` at `/onnx-internal/`, and a `closeBundle` hook copies `ort-wasm-simd.wasm` to `dist/onnx-internal/`.

**`numThreads` must be `1`, not `0`:** `onnxruntime-web` v1.18.0 treats `numThreads <= 0` as "unset" and auto-detects to `Math.min(4, navigator.hardwareConcurrency / 2)`, which triggers `crossOriginIsolated` warnings and tries to load threaded WASM variants. Setting `numThreads = 1` disables multi-threading entirely and avoids these issues.

**`wasmPaths` must use fully-qualified URLs:** `ort.env.wasm.proxy = true` offloads WASM inference to a Web Worker created from a **Blob URL**. Inside a Blob URL worker, `self.location.href` is `blob:https://...` - an opaque URL that cannot serve as a base for resolving path-absolute URLs like `/babylonjs-webxr-template/onnx-internal/ort-wasm-simd.wasm`. The fix is to use `self.location.origin` to build full URLs:

```ts
const ONNX_BASE = `${self.location.origin}${import.meta.env.BASE_URL}onnx-internal/`;
ort.env.wasm.wasmPaths = {
    'ort-wasm-simd.wasm': `${ONNX_BASE}ort-wasm-simd.wasm`,
};
```

Only `ort-wasm-simd.wasm` is needed (single-threaded). The threaded variants (`ort-wasm-simd-threaded.wasm`, `ort-wasm-simd-threaded.jsep.wasm`) are not copied to `dist/` and should not be listed in `wasmPaths`.

## Dice Roller Architecture

The Dice Roller (`src/demos/diceRoller.ts`) supports three roll modes cycled by a single toggle button:

| Mode | Mechanism | Result detection |
|---|---|---|
| **Simple** | Pre-determined RNG → slerp animation to target face | `getResultFaceIndex()` on final rotation |
| **Physics** | Die drops into Havok physics tray with random impulse + angular impulse | `_tickPhysicsSettle()` waits for rest, then reads face |
| **Manual** | Die spawns at rest → user grabs via pointer pick → releases with tracked velocity | Same settle logic as physics after throw |

### Roll mode constants and helpers

- Die geometry and face logic: `src/demos/diceMeshes.ts` (exports `DIE_RADIUS`, `DICE_SIDES`, `buildDieMesh`, `getResultFaceIndex`, `getResultRotation`).
- Die physics constants and aggregate creation: `src/demos/dicePhysics.ts` (exports `createDieAggregate()`, `DIE_MASS`, `DIE_RESTITUTION`, etc.). Use `createDieAggregate(mesh, scene)` - do not inline `new PhysicsAggregate(...)` with die parameters.
- Tray dimensions and settle thresholds remain in `diceRoller.ts` (demo-specific).

### Manual grab system

The manual mode uses `scene.onPointerObservable` (not per-controller trigger observers) so it works uniformly with XR controllers, hand tracking pinch, and screen touch:

1. **POINTERDOWN** → ray-pick the die mesh → find the closest XR controller by matching the pick ray origin against controller grip positions → dispose die aggregate, record grab offset.
2. **Per-frame** (`_tickManual`) → track smoothed velocities for all controllers (exponential moving average); if grabbed, move die to controller position + offset and copy grip rotation.
3. **POINTERUP** → read the tracked velocity for the grabbing controller → create new `PhysicsAggregate` via `createDieAggregate()` → apply linear velocity (scaled by `MANUAL_THROW_VEL_SCALE`) + random angular velocity → `_tickPhysicsSettle()` handles the rest.

**`_rolling` flag in manual mode:** Set to `false` right after spawning the die (the user hasn't thrown yet - they should be free to toggle mode or select dice). Set to `true` only when the die is released (`_onPointerUp`). This prevents the mode/die-type buttons from being locked while the die sits idle.

### Tray meshes must be non-pickable

All tray wall/floor meshes are created with `isPickable = false`. The tray's far wall is coplanar with the back button (both at Z = panel position); without this flag it intercepts the pointer pick ray and blocks the button.

### d4 result rule

The d4 uses the face pointing **down** as the result (opposite of all other dice). `getResultFaceIndex()` and `getResultRotation()` handle this automatically via `isD4()`.

## Gesture Recognition Architecture

The Gesture Recognition demo (`src/demos/gestureRecognition.ts`) uses WebXR hand tracking joints as input to ONNX ML models that classify hand poses as Rock, Paper, or Scissors.

### Key files

| File | Role |
|---|---|
| `src/demos/gestureRecognition.ts` | `GestureRecognitionDemo` - UI (left/right gesture labels), hand tracking setup, prediction loop |
| `src/demos/gestureClassifier.ts` | `GestureClassifier` - ONNX model loading, hand normalization (PCA), inference |

### Hand tracking setup

The demo enables the `xr-hand-tracking` feature on the existing XR session via `featuresManager.enableFeature`. Hands are tracked via `onHandAddedObservable` / `onHandRemovedObservable`.

**Existing hands must be checked:** When the demo starts, the user's hands may already be tracked. `onHandAddedObservable` only fires when hands first appear - it does not fire for hands already present. After registering observers, the demo calls `getHandByHandedness('left'/'right')` to pick up any already-tracked hands. Without this, the demo stays stuck on "Show hands to detect" on re-entry or if hands were visible before the demo started.

### Prediction pipeline

1. Every 20 frames, if a hand is tracked and the classifier is ready, call `classifier.predict(hand, handedness)`
2. `GestureClassifier.getJointPositions()` extracts joint positions from `hand._jointMeshes` (BabylonJS internal)
3. `normalizeHand()` - translates to root joint origin, scales by max distance, applies PCA rotation, computes root-to-joint distances, min-max normalizes → 25-element feature vector
4. ONNX inference → probability array → gesture class if confidence >= 0.9, else `'Unknown'`

## AI Voice Assistant (Agent Helper)

A browser-based voice assistant running entirely in XR: **record → ASR → LLM → TTS → play**.

### Pipeline

1. User presses **Talk** → `MediaRecorder` captures audio via `getUserMedia`
2. Audio blob → ASR (Whisper via `fetch` + `FormData`)
3. Transcript → LLM chat completion (`openai` SDK, OpenAI-compatible endpoint)
4. Response text → TTS (`TtsProvider` abstraction)
5. Audio data-URI or blob URL → `new Audio(src).play()`

### Key files

| File | Role |
|---|---|
| `src/demos/agentHelper.ts` | `AgentHelperDemo` - UI (record/stop button, status text), pipeline orchestration, audio playback |
| `src/demos/llmConfig.ts` | All provider/model constants, `TtsProvider` interface, pre-built provider implementations (`DEEPINFRA_TTS`, `OPENAI_TTS`) |
| `src/core/sceneMetadata.ts` | `agentApiKey` field - API key stored in scene metadata, entered via HTML overlay before XR entry |
| `src/core/domWiring.ts` | `wireAgentKeyInput()` / `consumeAgentApiKey()` - DOM overlay wiring for the API key input |

### Status display

The status lines show the current pipeline stage:
- `The Blob - AI Agent` / `Tap the blob or press Talk.` - ready
- `Listening...` / `Tap again to stop.` - recording in progress
- `Transcribing...` - ASR API call
- `Thinking...` - LLM API call
- `Generating speech...` - TTS API call
- `Speaking...` - audio playback in progress
- `You: … / AI: …` - final result (truncated to 36 chars)

### Switching providers

All provider-specific configuration is in `src/demos/llmConfig.ts`. The pipeline logic in `agentHelper.ts` never touches URLs or model names directly.

**To change the LLM/ASR provider** (e.g., DeepInfra → OpenAI):

```ts
// llmConfig.ts - change these values:
export const LLM_BASE_URL = 'https://api.openai.com/v1';
export const ASR_MODEL = 'whisper-1';
export const LLM_DEFAULT_MODEL = 'gpt-4o-mini';
```

The ASR endpoint path (`ASR_PATH`) defaults to `/audio/transcriptions` which is the same across all OpenAI-compatible providers.

**To change the TTS provider**, swap the `TTS_PROVIDER` export:

```ts
// Use OpenAI's TTS (returns raw audio bytes):
export const TTS_PROVIDER: TtsProvider = OPENAI_TTS;

// Or use DeepInfra's native TTS (returns JSON with base64 audio):
export const TTS_PROVIDER: TtsProvider = DEEPINFRA_TTS;
```

**To add a completely new TTS provider**, implement the `TtsProvider` interface:

```ts
export interface TtsProvider {
    buildUrl(baseUrl: string, inferenceBaseUrl: string, model: string): string;
    buildBody(text: string, voice: string): string;
    parseResponse(response: Response): Promise<string>; // return data-URI or blob URL
}
```

Then assign it to `TTS_PROVIDER` in `llmConfig.ts`. No changes to `agentHelper.ts` are needed.

**To change the system prompt** (assistant personality):

```ts
export const SYSTEM_PROMPT = 'You are The Blob, a helpful voice assistant.';
```

### Architecture notes

- **ASR** uses raw `fetch` (not the `openai` SDK) because the `FormData` upload is straightforward and avoids SDK model-name typing issues.
- **LLM** uses the `openai` SDK with `dangerouslyAllowBrowser: true` and a custom `baseURL` - works with any OpenAI-compatible endpoint.
- **TTS** uses raw `fetch` via the `TtsProvider` abstraction - the response format varies significantly between providers (JSON with data-URI vs. raw bytes).
- Chat history (`_chatHistory`) is maintained per-session; the system prompt is the first entry.
- `_playAudio` handles both data-URIs (DeepInfra) and blob URLs (OpenAI) - blob URLs are revoked on playback end.

### The Blob (AiAvatar)

The AI agent is visualized as "The Blob" - a 3D animated orb floating above the demo panel. It uses custom GLSL shaders for all animation (no CPU mesh manipulation), keeping it lightweight for standalone XR headsets.

**Architecture**: Two ico-sphere meshes with separate `ShaderMaterial` instances:

| Layer | Vertices | Role |
|---|---|---|
| Main orb | 642 (subdivisions 3) | Noise-deformed sphere with Fresnel rim glow |
| Aura shell | 162 (subdivisions 2) | Larger, static Fresnel-only glow (additive blending) |

**Animation states** (smooth exponential interpolation between targets):

| State | Noise amplitude | Colors | Audio-reactive? |
|---|---|---|---|
| `idle` | 0.06 (gentle) | Blue-violet → cyan | No |
| `listening` | 0 (still) | Teal → electric green | Yes (mic waveform via `AnalyserNode`) |
| `thinking` | 0.07 (subtle) | Amber → orange | No |
| `speaking` | 0 (still) | Pink → white-pink | Yes (TTS audio via `AnalyserNode`) |

During `listening` and `speaking`, the orb has zero automatic noise deformation - all movement comes from the audio waveform driving both mesh scale (±25%) and a `audioPulse` uniform that adds noise displacement proportional to RMS volume.

**Vertex shader**: 3-octave gradient noise displacement + optional `audioPulse` modulation.
**Fragment shader**: Fresnel rim glow (power 2.8), displacement-modulated core brightness, subtle energy lines. Alpha `mix(0.3, 0.7, fresnel * glowIntensity)` for XR passthrough transparency.

**Interaction**: The orb mesh is pickable with an `ActionManager` `OnPickTrigger` that toggles recording (same as the Talk button). Works with XR controllers, hand tracking pinch, and screen touch.

**Audio routing** (in `agentHelper.ts`):
- **Mic** (listening): `getUserMedia` stream → `MediaStreamAudioSourceNode` → separate `AnalyserNode` (not connected to `destination` to avoid feedback) → `avatar.setAudioAnalyser()`
- **TTS** (speaking): `Audio` element → `MediaElementAudioSourceNode` → `AnalyserNode` → `AudioContext.destination` (so user hears the response) → `avatar.setAudioAnalyser()`
- The `AudioContext` is shared between mic and TTS; the `AnalyserNode` instances are separate and lazily created.

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

## PDF Pre-processing

PDF.js is too slow to run inside an XR session on standalone headsets (Meta Quest). The PDF Reader demo uses a **two-stage pipeline**: all pages are rendered to image blob URLs *before* entering XR, then loaded as textures in XR (near-instant page navigation). Pages are JPEG by default; PNG (lossless) is available via a toggle in the pre-XR overlay.

### Key files

| File | Role |
|---|---|
| `src/demos/pdfPreprocessor.ts` | `preprocessPdf()` (PDF.js → image blob URLs, JPEG or PNG), `serializePages()` / `deserializePages()` (`.pre` binary format I/O). Only this file imports `pdfjs-dist`. |
| `src/demos/pdfReader.ts` | `PdfReaderDemo` - XR scene. **No PDF.js dependency.** Loads from `getMetadata(scene).pdfPages` (blob URLs). `_renderPage()` creates `Texture` from blob URL - synchronous, no canvas. |
| `src/core/domWiring.ts` | `wirePdfInput()` - HTML overlay wiring: detects `.pdf` vs `.pre` uploads, runs Convert, stores pages in scene metadata via `setMetadata()`. |

### `.pre` file format

**Binary format (version 3)** — raw image blobs with dimensions and MIME type, no base64 overhead. The deserializer auto-detects legacy JSON files (v1–v2) by checking the first byte for `{`. See `docs/pdf-preprocessing-guide.md` for full spec.

### Race condition note

`_drawPlaceholder()` in `PdfReaderDemo` uses async `canvas.toBlob`. If pre-processed pages are available, the placeholder must be **skipped** - otherwise its async `toBlob` callback overwrites the first page texture after it loads.

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


