# Dice Roller Demo

Part of the BabylonJS WebXR template. See [AGENTS.md](../../AGENTS.md) for universal project knowledge (scene management, MSDF text, imports, commands).

The Dice Roller (`src/demos/diceRoller.ts`) supports three roll modes cycled by a single toggle button:

| Mode | Mechanism | Result detection |
|---|---|---|
| **Simple** | Pre-determined RNG → slerp animation to target face | `getResultFaceIndex()` on final rotation |
| **Physics** | Die drops into Havok physics tray with random impulse + angular impulse | `_tickPhysicsSettle()` waits for rest, then reads face |
| **Manual** | Die spawns at rest → user grabs via pointer pick → releases with tracked velocity | Same settle logic as physics after throw |

## Havok Physics (WASM serving)

The Dice Roller's physics and manual modes use Havok via `@babylonjs/havok`. The Havok ESM bundle expects to fetch `HavokPhysics.wasm` next to its own JS file, but Vite pre-bundles `node_modules` and the relative URL resolves to a 404 (returning the SPA `index.html`).

`vite.config.ts` registers a middleware that serves the WASM from `node_modules/@babylonjs/havok/lib/esm/` at the path `/havok-internal/HavokPhysics.wasm`, and a `closeBundle` hook that copies it to `dist/havok-internal/` in production builds. `getHavokPlugin()` in `src/demos/dicePhysics.ts` passes the URL via `locateFile`, prefixed with `import.meta.env.BASE_URL` so it works under both the dev server (`/`) and production sub-paths.

**Important:** Do NOT call `scene.disablePhysicsEngine()` in `teardown()`. Doing so disposes the HavokPlugin singleton; `getHavokPlugin()` returns a cached-but-destroyed plugin on re-entry and physics becomes permanently unavailable. The demo's `teardown()` relies on `DisposableStack` to dispose individual physics bodies and meshes - the engine itself stays alive for reuse.

## Roll mode constants and helpers

- Die geometry and face logic: `src/demos/diceMeshes.ts` (exports `DIE_RADIUS`, `DICE_SIDES`, `buildDieMesh`, `getResultFaceIndex`, `getResultRotation`).
- Die physics constants and aggregate creation: `src/demos/dicePhysics.ts` (exports `createDieAggregate()`, `DIE_MASS`, `DIE_RESTITUTION`, etc.). Use `createDieAggregate(mesh, scene)` - do not inline `new PhysicsAggregate(...)` with die parameters.
- Tray dimensions and settle thresholds remain in `diceRoller.ts` (demo-specific).

## Manual grab system

The manual mode uses `scene.onPointerObservable` (not per-controller trigger observers) so it works uniformly with XR controllers, hand tracking pinch, and screen touch:

1. **POINTERDOWN** → ray-pick the die mesh → find the closest XR controller by matching the pick ray origin against controller grip positions → dispose die aggregate, record grab offset.
2. **Per-frame** (`_tickManual`) → track smoothed velocities for all controllers (exponential moving average); if grabbed, move die to controller position + offset and copy grip rotation.
3. **POINTERUP** → read the tracked velocity for the grabbing controller → create new `PhysicsAggregate` via `createDieAggregate()` → apply linear velocity (scaled by `MANUAL_THROW_VEL_SCALE`) + random angular velocity → `_tickPhysicsSettle()` handles the rest.

**`_rolling` flag in manual mode:** Set to `false` right after spawning the die (the user hasn't thrown yet - they should be free to toggle mode or select dice). Set to `true` only when the die is released (`_onPointerUp`). This prevents the mode/die-type buttons from being locked while the die sits idle.

## Tray meshes must be non-pickable

All tray wall/floor meshes are created with `isPickable = false`. The tray's far wall is coplanar with the back button (both at Z = panel position); without this flag it intercepts the pointer pick ray and blocks the button.

## d4 result rule

The d4 uses the face pointing **down** as the result (opposite of all other dice). `getResultFaceIndex()` and `getResultRotation()` handle this automatically via `isD4()`.
