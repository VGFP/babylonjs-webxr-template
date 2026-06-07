# Scene Management in WebXR

This guide explains how this project manages multiple "scenes" (home view, demos) within a single WebXR session - why traditional scene switching doesn't work in XR, the architecture used here, and how to add your own scenes.

## Table of Contents

- [The Problem: Why You Can't Just Switch Scenes in WebXR](#the-problem-why-you-cant-just-switch-scenes-in-webxr)
- [Architecture Overview](#architecture-overview)
- [The Two Scene Strategies](#the-two-scene-strategies)
- [How to Add a New Demo Scene](#how-to-add-a-new-demo-scene)
- [State Flow Diagrams](#state-flow-diagrams)
- [Key Classes and Their Responsibilities](#key-classes-and-their-responsibilities)
- [Common Patterns](#common-patterns)
- [Troubleshooting](#troubleshooting)

---

## The Problem: Why You Can't Just Switch Scenes in WebXR

In a standard BabylonJS application, you can freely create and dispose `Scene` objects - just call `scene.dispose()` and create a new one. But in **WebXR**, this breaks:

1. **The XR session is bound to a scene.** When you call `WebXRDefaultExperience.CreateAsync(scene, ...)`, the XR session, camera, controllers, plane detection, anchors - all are bound to that specific `Scene` instance.

2. **Disposing the scene kills the XR session.** Calling `scene.dispose()` tears down the WebGL resources and the XR session with it. The user gets kicked out of immersive-AR mode.

3. **Re-entering XR is disruptive.** Starting a new XR session requires a user gesture (button click) and triggers the browser's XR permission flow again. It's slow and breaks immersion.

This means: **once the user is in XR, you must keep the same scene alive** (or accept the cost of creating a parallel XR session for a new scene).

### Approaches Compared

| Approach | XR session | Complexity | Performance | Use case |
|---|---|---|---|---|
| **Reload the page** | New session | Trivial | Terrible - full reload | Never |
| **Separate scenes with separate XR sessions** | One per scene | High - duplicate XR setup | Medium - two sessions active briefly | Complex standalone experiences |
| **Reuse the same scene, swap content** | Same session | Medium - manual cleanup | Best - no XR overhead | Demos, menus, multi-feature apps |
| **Reuse the same scene + XR, via `metadata` injection** | Same session | Low - framework handles it | Best | This project's approach |

---

## Architecture Overview

This project uses the **scene reuse** strategy with a state machine (`SceneManager`) that tracks which "virtual scene" is active:

```
                    ┌─────────────┐
                    │    Home     │
                    │  (initial)  │
                    └──────┬──────┘
                           │ switchToDemo()
                           ▼
              ┌────────────────────────┐
              │ Which strategy?        │
              └─────┬──────────┬───────┘
                    │          │
         reuseScene=true   reuseScene=false
                    │          │
                    ▼          ▼
          ┌──────────────┐  ┌───────────────────┐
          │ Reused Scene │  │  Own Scene        │
          │ Same Scene   │  │  New Scene + XR   │
          │ Same XR      │  │  New XR session   │
          │ teardown()   │  │  New DemoUI       │
          └──────┬───────┘  └────────┬──────────┘
                 │                   │
                 └───────┬───────────┘
                         │ switchToHome()
                         ▼
                    ┌─────────────┐
                    │    Home     │
                    └─────────────┘
```

### Key files

| File | Role |
|---|---|
| `src/core/sceneManager.ts` | `SceneManager` - state machine that switches between home and demos |
| `src/core/sceneMetadata.ts` | Typed `SceneMetadata` interface + `getMetadata()` / `setMetadata()` helpers |
| `src/core/demoPanel.ts` | Shared panel helpers: `createPanelButton`, `createBackButton`, `createPanelRoot`, `saveAndTransparentClearColor`, `getGoBackCallback`, `initPanelText` |
| `src/core/disposableStack.ts` | `DisposableStack` - tracks objects for bulk disposal in `teardown()` |
| `src/demos/index.ts` | `DemoRegistry` - catalog of available demos + `DemoDescriptor` type |
| `src/demos/demoUi.ts` | `DemoUiController` - creates the floating button menu for navigation |
| `src/xr/xrExperience.ts` | `XrExperience` - wraps WebXR session creation (planes, anchors) |
| `src/main.ts` | Entry point - wires everything together |

---

## The Two Scene Strategies

### Strategy 1: Reused Scene (`reuseScene: true`)

The demo runs **inside the home scene**. No new `Scene` or XR session is created. Instead:

1. The `SceneManager` injects a `goBack` callback and XR references into scene metadata (via `setMetadata()`).
2. The demo's `build()` function adds meshes, lights, and UI to the existing scene.
3. The demo returns a `teardown()` function that cleans up everything it created.
4. On "Return to Main Scene", `teardown()` is called and the home scene is restored.

**When to use:** When your demo doesn't need its own camera, lighting setup, or XR configuration. It works with whatever the home scene provides.

**Example:** The XR Light & Shadows demo uses this because it needs the XR session's plane detection and anchors from the home scene.

```ts
DemoRegistry.register({
    id: 'my-demo',
    label: 'My Demo',
    build: (scene) => {
        const light = new HemisphericLight('demo_light', Vector3.Up(), scene);
        const mesh = MeshBuilder.CreateBox('demo_box', { size: 0.5 }, scene);

        return () => {
            light.dispose();
            mesh.dispose();
        };
    },
    ownUi: true,
    reuseScene: true,
});
```

**Pros:**
- Zero overhead - no new XR session, no scene creation
- Access to existing XR features (planes, anchors) immediately
- Fast transitions - just add/remove objects

**Cons:**
- Must be careful not to conflict with home scene objects
- Manual cleanup is critical - any leaked object persists
- Shares camera, clearColor, and render settings with home

### Strategy 2: Own Scene (`reuseScene: false`)

The `SceneManager` creates a **brand new `Scene`** with its own XR session:

1. `DemoRegistry.createScene()` creates a fresh `Scene` and calls `demo.build(scene)`.
2. A new `XrExperience` is initialized for the new scene.
3. A `DemoUiController` creates navigation buttons (unless `ownUi: true`).
4. The `SceneManager` wires up XR state observers for the new session.
5. On exit, the entire scene (and its XR session) is disposed.

**When to use:** When your demo needs its own camera, completely different lighting, or isolated rendering settings.

```ts
DemoRegistry.register({
    id: 'isolated-demo',
    label: 'Isolated Demo',
    build: (scene) => {
        scene.clearColor = new Color4(0, 0, 0, 1);
        const camera = new ArcRotateCamera('cam', 0, 0, 5, Vector3.Zero(), scene);
        camera.attachControl();

        const teardown = () => {
            camera.detachControl();
        };
        return teardown;
    },
    ownUi: false,
    reuseScene: false,
});
```

**Pros:**
- Complete isolation - no risk of interfering with other scenes
- Fresh camera, lighting, render settings
- Scene disposal cleans up everything at once

**Cons:**
- Creates a second XR session (brief overlap during transition)
- Slower transition - must initialize XR features (plane detection, anchors)
- XR features must be re-enabled for the new scene

---

## How to Add a New Demo Scene

### Step 1: Create the demo class

Create a new file in `src/demos/`. Use `DisposableStack` for cleanup and the shared panel helpers from `../core`:

```ts
import { Color4, Scene, Vector3 } from '@babylonjs/core';
import {
    DisposableStack, createPanelButton, createBackButton,
    createPanelRoot, getGoBackCallback, initPanelText,
    saveAndTransparentClearColor, UI_LAYOUT,
} from '../core';
import { TextManager } from '../text/textRenderer';

export class MyDemo {
    private _scene: Scene;
    private _cleanup = new DisposableStack();
    private _disposed = false;
    private _prevClearColor: Color4;

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = saveAndTransparentClearColor(scene);

        const panelRoot = createPanelRoot(scene, 'my_panel', this._cleanup);

        const goBack = getGoBackCallback(scene);
        if (goBack) {
            createBackButton({
                scene, cleanup: this._cleanup, parent: panelRoot,
                position: new Vector3(0, -0.14, 0), onGoBack: goBack,
            });
        }

        initPanelText({
            scene, cleanup: this._cleanup,
            isDisposed: () => this._disposed,
            onReady: (tm: TextManager) => {
                tm.attachToScene(scene);
                // tm.addParagraph(...) for button labels
            },
        });
    }

    teardown(): void {
        this._disposed = true;
        this._cleanup.dispose();
        this._scene.clearColor = this._prevClearColor;
    }
}
```

Key patterns:
- **`DisposableStack`** tracks all created objects; `createPanelButton`, `createBackButton`, and `createPanelRoot` auto-register with it.
- **`saveAndTransparentClearColor()`** saves the previous clear color for restoration in `teardown()`.
- **`getGoBackCallback()`** reads the `goBack` callback injected by `SceneManager`.
- **`initPanelText()`** handles async `TextManager.init()` with disposal-race protection (if the demo is torn down before font loading completes, the text manager is disposed silently).

### Step 2: Register it

In `src/demos/index.ts`, import and register:

```ts
import './myDemo';
import { MyDemo } from './myDemo';

DemoRegistry.register({
    id: 'my-demo',
    label: 'My Demo',
    build: (scene) => {
        const demo = new MyDemo(scene);
        return () => demo.teardown();
    },
    ownUi: true,
    reuseScene: true,
});
```

### Step 3: Choose your strategy

| Option | `reuseScene` | `ownUi` | Effect |
|---|---|---|---|
| Reuse scene, custom UI | `true` | `true` | Runs in home scene, you handle all UI |
| Reuse scene, auto UI | `true` | `false` | Runs in home scene, auto-generated navigation buttons |
| Own scene, custom UI | `false` | `true` | New scene + XR, you handle all UI |
| Own scene, auto UI | `false` | `false` | New scene + XR, auto-generated navigation buttons |

### Step 4: Access the "go back" callback

For reused scenes, the `SceneManager` injects `goBack` into scene metadata before calling `build()`. Use the typed helper:

```ts
import { getGoBackCallback } from '../core';

const goBack = getGoBackCallback(scene);
```

Or access it alongside other XR features:

```ts
import { getMetadata } from '../core';
const { goBack, xr, xrAnchors, planeDetectionManager } = getMetadata(scene);
```

For own scenes, `goBack` is passed via `DemoRegistry.createScene()` as scene metadata.

---

## State Flow Diagrams

### Home → Reused Scene → Home

```
1. User clicks demo button
   ├─ SceneManager._cleanupCurrentState()
   │   ├─ Detach home text renderer
   │   └─ Hide home UI buttons
   ├─ SceneManager._enterReusedScene(demo)
   │   ├─ Inject goBack + xr into home scene metadata (via setMetadata)
   │   ├─ demo.build(homeScene) → returns teardown()
   │   └─ State = { type: 'reused_scene', teardown }
   └─ Demo adds meshes/lights/UI to home scene

2. User clicks "Return to Main Scene"
   ├─ SceneManager._cleanupCurrentState()
   │   └─ Call teardown() → demo cleans up its objects
   │   └─ Remove goBack + xr from metadata (via setMetadata)
   └─ SceneManager._enterHome()
       ├─ Reattach text renderer
       ├─ Show home UI buttons
       └─ State = { type: 'home' }
```

### Home → Own Scene → Home

```
1. User clicks demo button
   ├─ SceneManager._cleanupCurrentState()
   │   ├─ Detach home text renderer
   │   └─ Hide home UI buttons
   └─ SceneManager._enterOwnScene(demo)
       ├─ Create new Scene
       ├─ demo.build(newScene)
       ├─ Create new XrExperience for new scene
       ├─ Create DemoUiController (unless ownUi)
       ├─ Wire XR state observers
       └─ State = { type: 'own_scene', scene, xr, ui }

2. User clicks "Return to Main Scene"
   ├─ SceneManager._cleanupCurrentState()
   │   ├─ Dispose demo UI
   │   └─ Dispose the entire scene (kills its XR session)
   └─ SceneManager._enterHome()
       ├─ Reattach text renderer to home scene
       ├─ Show home UI buttons
       └─ State = { type: 'home' }
```

---

## Key Classes and Their Responsibilities

### `SceneManager` (state machine)

Tracks the current state as a discriminated union:

```ts
type SceneState =
    | { type: 'home' }
    | { type: 'reused_scene'; demoId: string; teardown: () => void }
    | { type: 'own_scene'; demoId: string; scene: Scene; xr: WebXRDefaultExperience; ui: DemoUi };
```

Exposes:
- `activeScene` - the `Scene` the render loop should render
- `activeXr` - the `WebXRDefaultExperience` for the active scene
- `switchToDemo(demo)` - transition from current state to a demo
- `switchToHome()` - transition back to home

### `DemoRegistry` (catalog)

Static registry of `DemoDescriptor` objects. Each descriptor defines:
- `id` - unique identifier
- `label` - display name for the UI button
- `build(scene)` - factory function, returns optional teardown
- `ownUi` - whether the demo manages its own UI
- `reuseScene` - whether to reuse the home scene

### `DemoUiController` (navigation UI)

Creates floating 3D buttons (one per registered demo + an optional "back" button) with MSDF text labels. Manages:
- Button creation and positioning
- Active state highlighting
- Visibility toggling when switching scenes

### `XrExperience` (WebXR wrapper)

Wraps `WebXRDefaultExperience.CreateAsync()` and enables features:
- Plane detection (`xr-plane-detection`)
- Anchor system (`xr-anchor-system`)

---

## Common Patterns

### Accessing XR features in a reused scene

The home scene's XR experience is injected into scene metadata (via `setMetadata()`) before `build()` is called. Use the typed helper:

```ts
import { getMetadata } from '../core';
const { xr, xrAnchors, planeDetectionManager } = getMetadata(scene);
```

### Storing and restoring scene state

For reused scenes, save/restore anything you modify in the home scene. Use `saveAndTransparentClearColor()` for the standard pattern:

```ts
import { saveAndTransparentClearColor } from '../core';

class MyDemo {
    private _prevClearColor: Color4;

    constructor(scene: Scene) {
        this._prevClearColor = saveAndTransparentClearColor(scene);
    }

    teardown(): void {
        this._scene.clearColor = this._prevClearColor;
    }
}
```

### Sharing data between scenes via metadata

`scene.metadata` is a plain object you can use to pass data. Use the typed helpers for safe access:

```ts
import { getMetadata, setMetadata } from '../core';

// Read:
const pdfPages = getMetadata(scene).pdfPages;

// Write:
setMetadata(scene, 'mySharedData', { foo: 'bar' });
```

The `SceneMetadata` interface (in `src/core/sceneMetadata.ts`) defines the known keys: `xr`, `xrAnchors`, `planeDetectionManager`, `goBack`, `pdfPages`.

### Cleanup discipline for reused scenes

Every object you create in a reused scene **must** be tracked and disposed in `teardown()`. Use `DisposableStack`:

```ts
import { DisposableStack } from '../core';

class MyDemo {
    private _cleanup = new DisposableStack();

    constructor(scene: Scene) {
        const light = new HemisphericLight('demo_light', Vector3.Up(), scene);
        const mesh = MeshBuilder.CreateBox('demo_box', {}, scene);
        const mat = new StandardMaterial('demo_mat', scene);
        mesh.material = mat;

        this._cleanup.add(light);
        this._cleanup.add(mesh);
        this._cleanup.add(mat);
    }

    teardown(): void {
        this._cleanup.dispose();
    }
}
```

The shared panel helpers (`createPanelButton`, `createBackButton`, `createPanelRoot`) auto-register objects with the stack. For manual cleanup logic, use `this._cleanup.register(() => { /* custom cleanup */ })`.

---

## Troubleshooting

### "Kicked out of XR when switching scenes"

This happens if you dispose the home scene while in XR. With `reuseScene: true`, the home scene is never disposed - only objects added by the demo are cleaned up. With `reuseScene: false`, a new XR session is created for the new scene before the old one is disposed.

### Objects from a previous demo are still visible

The `teardown()` function did not clean up everything. Check that every mesh, material, light, texture, observer, and transform node created by the demo is disposed. Use the BabylonJS Inspector (`VITE_DEBUG=true`) to check for leftover objects.

### Demo buttons disappear after switching

The `DemoUiController.setVisible(false)` is called when leaving home, and `setVisible(true)` when returning. If you manage your own UI (`ownUi: true`), you must handle visibility yourself via the `goBack` callback.

### Plane detection / anchors not working in a reused scene demo

Make sure you access the XR features from the typed metadata helper, not by creating a new `XrExperience`. The home scene's features are injected before `build()` is called:

```ts
import { getMetadata } from '../core';
const { planeDetectionManager } = getMetadata(scene);
```

### Memory leak after many scene switches

For reused scenes: verify `teardown()` disposes all GPU resources (materials, textures, meshes). For own scenes: the entire scene disposal handles this, but make sure you're not holding references to disposed objects in closures or observers.
