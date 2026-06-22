# Gesture Recognition Demo

Part of the BabylonJS WebXR template. See [AGENTS.md](../../AGENTS.md) for universal project knowledge (scene management, MSDF text, imports, commands).

The Gesture Recognition demo (`src/demos/gestureRecognition.ts`) uses WebXR hand tracking joints as input to ONNX ML models that classify hand poses as Rock, Paper, or Scissors.

## ONNX Runtime WASM (serving)

The demo uses `onnxruntime-web` to run ONNX ML models for hand gesture classification. Same WASM-serving problem as Havok: Vite pre-bundles `onnxruntime-web`, and the WASM files in `node_modules/onnxruntime-web/dist/` are unreachable at their original relative paths.

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

## Key files

| File | Role |
|---|---|
| `src/demos/gestureRecognition.ts` | `GestureRecognitionDemo` - UI (left/right gesture labels), hand tracking setup, prediction loop |
| `src/demos/gestureClassifier.ts` | `GestureClassifier` - ONNX model loading, hand normalization (PCA), inference |

## Hand tracking setup

The demo enables the `xr-hand-tracking` feature on the existing XR session via `featuresManager.enableFeature`. Hands are tracked via `onHandAddedObservable` / `onHandRemovedObservable`.

**Existing hands must be checked:** When the demo starts, the user's hands may already be tracked. `onHandAddedObservable` only fires when hands first appear - it does not fire for hands already present. After registering observers, the demo calls `getHandByHandedness('left'/'right')` to pick up any already-tracked hands. Without this, the demo stays stuck on "Show hands to detect" on re-entry or if hands were visible before the demo started.

## Prediction pipeline

1. Every 20 frames, if a hand is tracked and the classifier is ready, call `classifier.predict(hand, handedness)`
2. `GestureClassifier.getJointPositions()` extracts joint positions from `hand._jointMeshes` (BabylonJS internal)
3. `normalizeHand()` - translates to root joint origin, scales by max distance, applies PCA rotation, computes root-to-joint distances, min-max normalizes → 25-element feature vector
4. ONNX inference → probability array → gesture class if confidence >= 0.9, else `'Unknown'`
