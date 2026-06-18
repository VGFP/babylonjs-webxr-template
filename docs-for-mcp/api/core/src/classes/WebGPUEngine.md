[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebGPUEngine

# Class: WebGPUEngine

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L266)

**`Since`**

The web GPU engine class provides support for WebGPU version of babylon.js.
 5.0.0

## Extends

- `ThinWebGPUEngine`

## Constructors

### Constructor

> **new WebGPUEngine**(`canvas`, `options?`): `WebGPUEngine`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:630](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L630)

Create a new instance of the gpu engine.

#### Parameters

##### canvas

`HTMLCanvasElement` \| `OffscreenCanvas`

Defines the canvas to use to display the result

##### options?

[`WebGPUEngineOptions`](../interfaces/WebGPUEngineOptions.md) = `{}`

Defines the options passed to the engine to create the GPU context dependencies

#### Returns

`WebGPUEngine`

#### Overrides

`ThinWebGPUEngine.constructor`

## Properties

### activeView

> **activeView**: [`Nullable`](../type-aliases/Nullable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L35)

Gets the current engine view

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/multiCanvas

#### Inherited from

`ThinWebGPUEngine.activeView`

***

### adaptToDeviceRatio

> **adaptToDeviceRatio**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2034](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2034)

If set to true zooming in and out in the browser will rescale the hardware-scaling correctly.

#### Inherited from

`ThinWebGPUEngine.adaptToDeviceRatio`

***

### canvasTabIndex

> **canvasTabIndex**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:486](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L486)

Gets or sets the tab index to set to the rendering canvas. 1 is the minimum value to set to be able to capture keyboard events

#### Inherited from

`ThinWebGPUEngine.canvasTabIndex`

***

### countersLastFrame

> `readonly` **countersLastFrame**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L341)

Counters from last frame

#### numBundleCreationNonCompatMode

> **numBundleCreationNonCompatMode**: `number`

#### numBundleReuseNonCompatMode

> **numBundleReuseNonCompatMode**: `number`

#### numEnableDrawWrapper

> **numEnableDrawWrapper**: `number`

#### numEnableEffects

> **numEnableEffects**: `number`

***

### cullBackFaces

> **cullBackFaces**: [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2454)

Gets or sets a boolean indicating if back faces must be culled. If false, front faces are culled instead (true by default)
If non null, this takes precedence over the value from the material

#### Inherited from

`ThinWebGPUEngine.cullBackFaces`

***

### currentRenderPassId

> **currentRenderPassId**: `number` = `Constants.RENDERPASS_MAIN`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L473)

Gets or sets the current render pass id

#### Inherited from

`ThinWebGPUEngine.currentRenderPassId`

***

### customAnimationFrameRequester

> **customAnimationFrameRequester**: [`Nullable`](../type-aliases/Nullable.md)\<[`ICustomAnimationFrameRequester`](../interfaces/ICustomAnimationFrameRequester.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:866](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L866)

If set, will be used to request the next animation frame for the render loop

#### Inherited from

`ThinWebGPUEngine.customAnimationFrameRequester`

***

### disableContextMenu

> **disableContextMenu**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L468)

Gets or sets a boolean to enable/disable the context menu (right-click) from appearing on the main canvas

#### Inherited from

`ThinWebGPUEngine.disableContextMenu`

***

### disableManifestCheck

> **disableManifestCheck**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:463](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L463)

Gets or sets a boolean to enable/disable checking manifest if IndexedDB support is enabled (js will always consider the database is up to date)

#### Inherited from

`ThinWebGPUEngine.disableManifestCheck`

***

### disablePerformanceMonitorInBackground

> **disablePerformanceMonitorInBackground**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L337)

Turn this value on if you want to pause FPS computation when in background

#### Inherited from

`ThinWebGPUEngine.disablePerformanceMonitorInBackground`

***

### disableVertexArrayObjects

> **disableVertexArrayObjects**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L342)

Gets or sets a boolean indicating that vertex array object must be disabled even if they are supported

#### Inherited from

`ThinWebGPUEngine.disableVertexArrayObjects`

***

### enableOfflineSupport

> **enableOfflineSupport**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L458)

Gets or sets a boolean to enable/disable IndexedDB support and avoid XHR on .manifest

#### Inherited from

`ThinWebGPUEngine.enableOfflineSupport`

***

### gpuTimeInFrameForMainPass?

> `readonly` `optional` **gpuTimeInFrameForMainPass?**: `WebGPUPerfCounter`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinWebGPUEngine.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinWebGPUEngine.ts#L69)

Gets the GPU time spent in the main render pass for the last frame rendered (in nanoseconds).
You have to enable the "timestamp-query" extension in the engine constructor options and set engine.enableGPUTimingMeasurements = true.
It will only return time spent in the main pass, not additional render target / compute passes (if any)!

#### Inherited from

`ThinWebGPUEngine.gpuTimeInFrameForMainPass`

***

### hasOriginBottomLeft

> `readonly` **hasOriginBottomLeft**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L623)

Indicates that the origin of the texture/framebuffer space is the bottom left corner. If false, the origin is top left

#### Overrides

`ThinWebGPUEngine.hasOriginBottomLeft`

***

### hostInformation

> **hostInformation**: [`HostInformation`](../interfaces/HostInformation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L446)

Gets information about the current host

#### Inherited from

`ThinWebGPUEngine.hostInformation`

***

### inputElement

> **inputElement**: [`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L14)

Gets or sets the  HTML element to use for attaching events

#### Inherited from

`ThinWebGPUEngine.inputElement`

***

### isFullscreen

> **isFullscreen**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L453)

Gets a boolean indicating if the engine is currently rendering in fullscreen mode

#### Inherited from

`ThinWebGPUEngine.isFullscreen`

***

### isNDCHalfZRange

> `readonly` **isNDCHalfZRange**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:618](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L618)

Indicates if the z range in NDC space is 0..1 (value: true) or -1..1 (value: false)

#### Overrides

`ThinWebGPUEngine.isNDCHalfZRange`

***

### isPointerLock

> **isPointerLock**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L478)

Gets a boolean indicating if the pointer is currently locked

#### Inherited from

`ThinWebGPUEngine.isPointerLock`

***

### loadingScreen

> **loadingScreen**: [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L21)

Gets or sets the current loading screen object

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

`ThinWebGPUEngine.loadingScreen`

***

### loadingUIBackgroundColor

> **loadingUIBackgroundColor**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L33)

Sets the current loading screen background color

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

`ThinWebGPUEngine.loadingUIBackgroundColor`

***

### loadingUIText

> **loadingUIText**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L27)

Sets the current loading screen text

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

`ThinWebGPUEngine.loadingUIText`

***

### numMaxUncapturedErrors

> **numMaxUncapturedErrors**: `number` = `20`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L355)

Max number of uncaptured error messages to log

***

### onAfterShaderCompilationObservable

> **onAfterShaderCompilationObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1187)

Observable raised when the engine has just compiled a shader

#### Inherited from

`ThinWebGPUEngine.onAfterShaderCompilationObservable`

***

### onAfterViewRenderObservable

> `readonly` **onAfterViewRenderObservable**: [`Observable`](Observable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L29)

Will be triggered after the view rendered

#### Inherited from

`ThinWebGPUEngine.onAfterViewRenderObservable`

***

### onBeforeShaderCompilationObservable

> **onBeforeShaderCompilationObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1182)

Observable raised when the engine is about to compile a shader

#### Inherited from

`ThinWebGPUEngine.onBeforeShaderCompilationObservable`

***

### onBeforeTextureInitObservable

> **onBeforeTextureInitObservable**: [`Observable`](Observable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:774](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L774)

Observable event triggered before each texture is initialized

#### Inherited from

`ThinWebGPUEngine.onBeforeTextureInitObservable`

***

### onBeforeViewRenderObservable

> `readonly` **onBeforeViewRenderObservable**: [`Observable`](Observable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L25)

Will be triggered before the view renders

#### Inherited from

`ThinWebGPUEngine.onBeforeViewRenderObservable`

***

### onBeginFrameObservable

> **onBeginFrameObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1192)

Observable raised when the engine begins a new frame

#### Inherited from

`ThinWebGPUEngine.onBeginFrameObservable`

***

### onCanvasBlurObservable

> **onCanvasBlurObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L308)

Observable event triggered each time the canvas loses focus

#### Inherited from

`ThinWebGPUEngine.onCanvasBlurObservable`

***

### onCanvasFocusObservable

> **onCanvasFocusObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L312)

Observable event triggered each time the canvas gains focus

#### Inherited from

`ThinWebGPUEngine.onCanvasFocusObservable`

***

### onCanvasPointerOutObservable

> **onCanvasPointerOutObservable**: [`Observable`](Observable.md)\<`PointerEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L327)

Observable event triggered each time the canvas receives pointerout event

#### Inherited from

`ThinWebGPUEngine.onCanvasPointerOutObservable`

***

### onContextLostObservable

> **onContextLostObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1913)

Observable signaled when a context lost event is raised

#### Inherited from

`ThinWebGPUEngine.onContextLostObservable`

***

### onContextRestoredObservable

> **onContextRestoredObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1917)

Observable signaled when a context restored event is raised

#### Inherited from

`ThinWebGPUEngine.onContextRestoredObservable`

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2725](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2725)

An event triggered when the engine is disposed.

#### Inherited from

`ThinWebGPUEngine.onDisposeObservable`

***

### onEffectErrorObservable

> **onEffectErrorObservable**: [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `errors`: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L332)

Observable event triggered each time an effect compilation fails

#### Inherited from

`ThinWebGPUEngine.onEffectErrorObservable`

***

### onEndFrameObservable

> **onEndFrameObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1197)

Observable raised when the engine ends the current frame (requires a render loop, e.g. 'engine.runRenderLoop(...)')

#### Inherited from

`ThinWebGPUEngine.onEndFrameObservable`

***

### onNewSceneAddedObservable

> **onNewSceneAddedObservable**: [`Observable`](Observable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L317)

Event raised when a new scene is created

#### Inherited from

`ThinWebGPUEngine.onNewSceneAddedObservable`

***

### onReleaseEffectsObservable

> `readonly` **onReleaseEffectsObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2730](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2730)

An event triggered when a global cleanup of all effects is required

#### Inherited from

`ThinWebGPUEngine.onReleaseEffectsObservable`

***

### onResizeObservable

> **onResizeObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L322)

Observable event triggered each time the rendering canvas is resized

#### Inherited from

`ThinWebGPUEngine.onResizeObservable`

***

### postProcesses

> **postProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L483)

Gets the list of created postprocesses

#### Inherited from

`ThinWebGPUEngine.postProcesses`

***

### premultipliedAlpha

> **premultipliedAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2029)

Defines whether the engine has been created with the premultipliedAlpha option on or not.

#### Inherited from

`ThinWebGPUEngine.premultipliedAlpha`

***

### preventCacheWipeBetweenFrames

> **preventCacheWipeBetweenFrames**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:784](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L784)

Gets or sets a boolean indicating that cache can be kept between frames

#### Inherited from

`ThinWebGPUEngine.preventCacheWipeBetweenFrames`

***

### renderEvenInBackground

> **renderEvenInBackground**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:779](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L779)

Gets or sets a boolean indicating if the engine must keep rendering even if the window is not in foreground

#### Inherited from

`ThinWebGPUEngine.renderEvenInBackground`

***

### scenes

> **scenes**: [`Scene`](Scene.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L360)

Gets the list of created scenes

#### Overrides

`ThinWebGPUEngine.scenes`

***

### skipFrameRender

> **skipFrameRender**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:966](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L966)

Skip frame rendering but keep the frame heartbeat (begin/end frame).
This is useful if you need all the plumbing but not the rendering work.
(for instance when capturing a screenshot where you do not want to mix rendering to the screen and to the screenshot)

#### Inherited from

`ThinWebGPUEngine.skipFrameRender`

***

### startTime

> `readonly` **startTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1994](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1994)

The time (in milliseconds elapsed since the current page has been loaded) when the engine was initialized

#### Inherited from

`ThinWebGPUEngine.startTime`

***

### textureFormatInUse

> `readonly` **textureFormatInUse**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts#L19)

Gets the texture format in use

#### Inherited from

`ThinWebGPUEngine.textureFormatInUse`

***

### texturesSupported

> `readonly` **texturesSupported**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts#L14)

Gets the list of texture formats supported

#### Inherited from

`ThinWebGPUEngine.texturesSupported`

***

### uniqueId

> `readonly` **uniqueId**: `-1` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L276)

A unique id to identify this instance

***

### useExactSrgbConversions

> `readonly` **useExactSrgbConversions**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L596)

Gets a boolean indicating if the exact sRGB conversions or faster approximations are used for converting to and from linear space.

#### Inherited from

`ThinWebGPUEngine.useExactSrgbConversions`

***

### views

> **views**: [`EngineView`](EngineView.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L38)

Gets or sets the list of views

#### Inherited from

`ThinWebGPUEngine.views`

***

### \_RescalePostProcessFactory

> `static` **\_RescalePostProcessFactory**: [`Nullable`](../type-aliases/Nullable.md)\<(`engine`) => [`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2819)

Method called to create the default rescale post process on each engine.

#### Inherited from

`ThinWebGPUEngine._RescalePostProcessFactory`

***

### ~~audioEngine~~

> `static` **audioEngine**: [`Nullable`](../type-aliases/Nullable.md)\<[`IAudioEngine`](../interfaces/IAudioEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2837](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2837)

Gets the audio engine

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

#### Deprecated

please use AudioEngineV2 instead

#### Inherited from

`ThinWebGPUEngine.audioEngine`

***

### ~~AudioEngineFactory~~

> `static` **AudioEngineFactory**: (`hostElement`, `audioContext`, `audioDestination`) => [`IAudioEngine`](../interfaces/IAudioEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2844)

Default AudioEngine factory responsible of creating the Audio Engine.
By default, this will create a BabylonJS Audio Engine if the workload has been embedded.

#### Parameters

##### hostElement

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

##### audioContext

[`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

##### audioDestination

[`Nullable`](../type-aliases/Nullable.md)\<`AudioDestinationNode` \| `MediaStreamAudioDestinationNode`\>

#### Returns

[`IAudioEngine`](../interfaces/IAudioEngine.md)

#### Deprecated

please use AudioEngineV2 instead

#### Inherited from

`ThinWebGPUEngine.AudioEngineFactory`

***

### CollisionsEpsilon

> `static` **CollisionsEpsilon**: `number` = `0.001`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2876](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2876)

Gets or sets the epsilon value used by collision engine

#### Inherited from

`ThinWebGPUEngine.CollisionsEpsilon`

***

### OfflineProviderFactory

> `static` **OfflineProviderFactory**: (`urlToScene`, `callbackManifestChecked`, `disableManifestCheck`) => [`IOfflineProvider`](../interfaces/IOfflineProvider.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2854](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2854)

Default offline support factory responsible of creating a tool used to store data locally.
By default, this will create a Database object if the workload has been embedded.

#### Parameters

##### urlToScene

`string`

##### callbackManifestChecked

(`checked`) => `any`

##### disableManifestCheck

`boolean`

#### Returns

[`IOfflineProvider`](../interfaces/IOfflineProvider.md)

#### Inherited from

`ThinWebGPUEngine.OfflineProviderFactory`

***

### QueueNewFrame

> `static` **QueueNewFrame**: (`func`, `requester?`) => `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2884](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2884)

Queue a new function into the requested animation frame pool (ie. this function will be executed by the browser (or the javascript engine) for the next frame)

#### Parameters

##### func

() => `void`

the function to be called

##### requester?

`any`

the object that will request the next frame. Falls back to window.

#### Returns

`number`

frame number

#### Inherited from

`ThinWebGPUEngine.QueueNewFrame`

## Accessors

### activeRenderLoops

#### Get Signature

> **get** **activeRenderLoops**(): readonly () => `void`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:872](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L872)

Gets the list of current active render loop functions

##### Returns

readonly () => `void`[]

a read only array with the current render loop functions

#### Inherited from

`ThinWebGPUEngine.activeRenderLoops`

***

### alphaState

#### Get Signature

> **get** **alphaState**(): `AlphaState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L565)

Gets the alpha state manager

##### Returns

`AlphaState`

#### Inherited from

`ThinWebGPUEngine.alphaState`

***

### compatibilityMode

#### Get Signature

> **get** **compatibilityMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L586)

(WebGPU only) True (default) to be in compatibility mode, meaning rendering all existing scenes without artifacts (same rendering than WebGL).
Setting the property to false will improve performances but may not work in some scenes if some precautions are not taken.
See https://doc.babylonjs.com/setup/support/webGPU/webGPUOptimization/webGPUNonCompatibilityMode for more details

##### Returns

`boolean`

#### Set Signature

> **set** **compatibilityMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:590](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L590)

(WebGPU only) True (default) to be in compatibility mode, meaning rendering all existing scenes without artifacts (same rendering than WebGL).
Setting the property to false will improve performances but may not work in some scenes if some precautions are not taken.
See https://doc.babylonjs.com/setup/support/webGPU/webGPUOptimization/webGPUNonCompatibilityMode for more details

##### Parameters

###### mode

`boolean`

##### Returns

`void`

#### Overrides

`ThinWebGPUEngine.compatibilityMode`

***

### currentLimits

#### Get Signature

> **get** **currentLimits**(): `GPUSupportedLimits`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L549)

Gets the current limits of the WebGPU device

##### Returns

`GPUSupportedLimits`

***

### currentViewport

#### Get Signature

> **get** **currentViewport**(): [`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1510)

Gets the current viewport

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

#### Inherited from

`ThinWebGPUEngine.currentViewport`

***

### depthCullingState

#### Get Signature

> **get** **depthCullingState**(): `DepthCullingState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L558)

Gets the depth culling state manager

##### Returns

`DepthCullingState`

#### Inherited from

`ThinWebGPUEngine.depthCullingState`

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:556](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L556)

Returns a string describing the current engine

##### Returns

`string`

#### Overrides

`ThinWebGPUEngine.description`

***

### disableCacheBindGroups

#### Get Signature

> **get** **disableCacheBindGroups**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L473)

Sets this to true to disable the cache for the bind groups. You should do it only for testing purpose!

##### Returns

`boolean`

#### Set Signature

> **set** **disableCacheBindGroups**(`disable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L477)

##### Parameters

###### disable

`boolean`

##### Returns

`void`

***

### disableCacheRenderPipelines

#### Get Signature

> **get** **disableCacheRenderPipelines**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:460](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L460)

Sets this to true to disable the cache for the render pipelines. You should do it only for testing purpose!

##### Returns

`boolean`

#### Set Signature

> **set** **disableCacheRenderPipelines**(`disable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:464](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L464)

##### Parameters

###### disable

`boolean`

##### Returns

`void`

***

### disableCacheSamplers

#### Get Signature

> **get** **disableCacheSamplers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L447)

Sets this to true to disable the cache for the samplers. You should do it only for testing purpose!

##### Returns

`boolean`

#### Set Signature

> **set** **disableCacheSamplers**(`disable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L451)

##### Parameters

###### disable

`boolean`

##### Returns

`void`

***

### doNotHandleContextLost

#### Get Signature

> **get** **doNotHandleContextLost**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2070](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2070)

Gets or sets a boolean indicating if resources should be retained to be able to handle context lost events

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#handling-webgl-context-lost

##### Returns

`boolean`

#### Set Signature

> **set** **doNotHandleContextLost**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2074](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2074)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.doNotHandleContextLost`

***

### emptyCubeTexture

#### Get Signature

> **get** **emptyCubeTexture**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L839)

Gets the default empty cube texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

`ThinWebGPUEngine.emptyCubeTexture`

***

### emptyTexture

#### Get Signature

> **get** **emptyTexture**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:797](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L797)

Gets the default empty texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

`ThinWebGPUEngine.emptyTexture`

***

### emptyTexture2DArray

#### Get Signature

> **get** **emptyTexture2DArray**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L819)

Gets the default empty 2D array texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

`ThinWebGPUEngine.emptyTexture2DArray`

***

### emptyTexture3D

#### Get Signature

> **get** **emptyTexture3D**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:808](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L808)

Gets the default empty 3D texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

`ThinWebGPUEngine.emptyTexture3D`

***

### enabledExtensions

#### Get Signature

> **get** **enabledExtensions**(): readonly `GPUFeatureName`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L539)

Gets the currently enabled extensions on the WebGPU device

##### Returns

readonly `GPUFeatureName`[]

***

### enableGPUTimingMeasurements

#### Get Signature

> **get** **enableGPUTimingMeasurements**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinWebGPUEngine.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinWebGPUEngine.ts#L81)

Enables or disables GPU timing measurements.
Note that this is only supported if the "timestamp-query" extension is enabled in the options.

##### Returns

`boolean`

#### Set Signature

> **set** **enableGPUTimingMeasurements**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinWebGPUEngine.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinWebGPUEngine.ts#L85)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.enableGPUTimingMeasurements`

***

### frameId

#### Get Signature

> **get** **frameId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L349)

Gets the current frame id

##### Returns

`number`

#### Inherited from

`ThinWebGPUEngine.frameId`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L735)

Gets a boolean indicating if the engine was disposed

##### Returns

`boolean`

#### Inherited from

`ThinWebGPUEngine.isDisposed`

***

### isStencilEnable

#### Get Signature

> **get** **isStencilEnable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2084](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2084)

Returns true if the stencil buffer has been enabled through the creation option of the context.

##### Returns

`boolean`

#### Inherited from

`ThinWebGPUEngine.isStencilEnable`

***

### isWebGPU

#### Get Signature

> **get** **isWebGPU**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L355)

Gets a boolean indicating if the engine runs in WebGPU or not.

##### Returns

`boolean`

#### Inherited from

`ThinWebGPUEngine.isWebGPU`

***

### maxFPS

#### Get Signature

> **get** **maxFPS**(): `number` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:969](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L969)

Gets or sets max frame per second allowed. Will return undefined if not capped

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **maxFPS**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L973)

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.maxFPS`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1968](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1968)

Gets or sets the name of the engine

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1972](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1972)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.name`

***

### needPOTTextures

#### Get Signature

> **get** **needPOTTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2314)

Gets a boolean indicating that only power of 2 textures are supported
Please note that you can still use non power of 2 textures but in this case the engine will forcefully convert them

##### Returns

`boolean`

#### Overrides

`ThinWebGPUEngine.needPOTTextures`

***

### performanceMonitor

#### Get Signature

> **get** **performanceMonitor**(): [`PerformanceMonitor`](PerformanceMonitor.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3082](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3082)

Gets the performance monitor attached to this engine

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#engineinstrumentation

##### Returns

[`PerformanceMonitor`](PerformanceMonitor.md)

#### Overrides

`ThinWebGPUEngine.performanceMonitor`

***

### shaderPlatformName

#### Get Signature

> **get** **shaderPlatformName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L439)

Gets the shader platform name used by the effects.

##### Returns

`string`

#### Inherited from

`ThinWebGPUEngine.shaderPlatformName`

***

### snapshotRendering

#### Get Signature

> **get** **snapshotRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L436)

Enables or disables the snapshot rendering mode
Note that the WebGL engine does not support snapshot rendering so setting the value won't have any effect for this engine

##### Returns

`boolean`

#### Set Signature

> **set** **snapshotRendering**(`activate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:440](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L440)

Enables or disables the snapshot rendering mode
Note that the WebGL engine does not support snapshot rendering so setting the value won't have any effect for this engine

##### Parameters

###### activate

`boolean`

##### Returns

`void`

#### Overrides

`ThinWebGPUEngine.snapshotRendering`

***

### snapshotRenderingMode

#### Get Signature

> **get** **snapshotRenderingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:417](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L417)

Gets or sets the snapshot rendering mode

##### Returns

`number`

#### Set Signature

> **set** **snapshotRenderingMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L421)

Gets or sets the snapshot rendering mode

##### Parameters

###### mode

`number`

##### Returns

`void`

#### Overrides

`ThinWebGPUEngine.snapshotRenderingMode`

***

### stencilState

#### Get Signature

> **get** **stencilState**(): `StencilState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:572](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L572)

Gets the stencil state manager

##### Returns

`StencilState`

#### Inherited from

`ThinWebGPUEngine.stencilState`

***

### stencilStateComposer

#### Get Signature

> **get** **stencilStateComposer**(): `StencilStateComposer`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:579](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L579)

Gets the stencil state composer

##### Returns

`StencilStateComposer`

#### Inherited from

`ThinWebGPUEngine.stencilStateComposer`

***

### supportedExtensions

#### Get Signature

> **get** **supportedExtensions**(): readonly `GPUFeatureName`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L534)

Gets the supported extensions by the WebGPU adapter

##### Returns

readonly `GPUFeatureName`[]

***

### supportedLimits

#### Get Signature

> **get** **supportedLimits**(): `GPUSupportedLimits`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:544](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L544)

Gets the supported limits by the WebGPU adapter

##### Returns

`GPUSupportedLimits`

***

### supportsUniformBuffers

#### Get Signature

> **get** **supportsUniformBuffers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L529)

Gets a boolean indicating that the engine supports uniform buffers

##### Returns

`boolean`

#### Overrides

`ThinWebGPUEngine.supportsUniformBuffers`

***

### useReverseDepthBuffer

#### Get Signature

> **get** **useReverseDepthBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:518](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L518)

Gets or sets a boolean indicating if depth buffer should be reverse, going from far to near.
This can provide greater z depth for distant objects.

##### Returns

`boolean`

#### Set Signature

> **set** **useReverseDepthBuffer**(`useReverse`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:522](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L522)

##### Parameters

###### useReverse

`boolean`

##### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.useReverseDepthBuffer`

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L565)

Returns the version of the engine

##### Returns

`number`

#### Overrides

`ThinWebGPUEngine.version`

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:521](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L521)

Not supported by WebGPU, you should call IsSupportedAsync instead!

##### Returns

`boolean`

***

### IsSupportedAsync

#### Get Signature

> **get** `static` **IsSupportedAsync**(): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L504)

Gets a Promise<boolean> indicating if the engine can be instantiated (ie. if a WebGPU context can be found)

##### Returns

`Promise`\<`boolean`\>

***

### NpmPackage

#### Get Signature

> **get** `static` **NpmPackage**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1980](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1980)

Returns the current npm package of the sdk

##### Returns

`string`

#### Inherited from

`ThinWebGPUEngine.NpmPackage`

***

### Version

#### Get Signature

> **get** `static` **Version**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1987](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1987)

Returns the current version of the framework

##### Returns

`string`

#### Inherited from

`ThinWebGPUEngine.Version`

## Methods

### \_createDepthStencilCubeTexture()

#### Call Signature

> **\_createDepthStencilCubeTexture**(`size`, `options`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts#L19)

Creates a depth stencil cube texture.
This is only available in WebGL 2.

##### Parameters

###### size

`number`

The size of face edge in the cube texture.

###### options

[`DepthTextureCreationOptions`](../interfaces/DepthTextureCreationOptions.md)

The options defining the cube texture.

##### Returns

[`InternalTexture`](InternalTexture.md)

The cube texture

##### Inherited from

`ThinWebGPUEngine._createDepthStencilCubeTexture`

#### Call Signature

> **\_createDepthStencilCubeTexture**(`size`, `options`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts#L20)

Creates a depth stencil cube texture.
This is only available in WebGL 2.

##### Parameters

###### size

`number`

The size of face edge in the cube texture.

###### options

[`DepthTextureCreationOptions`](../interfaces/DepthTextureCreationOptions.md)

The options defining the cube texture.

##### Returns

[`InternalTexture`](InternalTexture.md)

The cube texture

##### Inherited from

`ThinWebGPUEngine._createDepthStencilCubeTexture`

***

### \_createImageBitmapFromSource()

> **\_createImageBitmapFromSource**(`imageSource`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1173)

Engine abstraction for loading and creating an image bitmap from a given source string.

#### Parameters

##### imageSource

`string`

source to load the image from.

##### options?

`ImageBitmapOptions`

An object that sets options for the image's extraction.

#### Returns

`Promise`\<`ImageBitmap`\>

ImageBitmap

#### Overrides

`ThinWebGPUEngine._createImageBitmapFromSource`

***

### \_loadFileAsync()

#### Call Signature

> **\_loadFileAsync**(`url`, `offlineProvider?`, `useArrayBuffer?`): `Promise`\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.types.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.types.ts#L9)

##### Parameters

###### url

`string`

###### offlineProvider?

[`IOfflineProvider`](../interfaces/IOfflineProvider.md)

###### useArrayBuffer?

`true`

##### Returns

`Promise`\<`ArrayBuffer`\>

##### Inherited from

`ThinWebGPUEngine._loadFileAsync`

#### Call Signature

> **\_loadFileAsync**(`url`, `offlineProvider?`, `useArrayBuffer?`): `Promise`\<`string` \| `ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.types.ts#L10)

##### Parameters

###### url

`string`

###### offlineProvider?

[`IOfflineProvider`](../interfaces/IOfflineProvider.md)

###### useArrayBuffer?

`boolean`

##### Returns

`Promise`\<`string` \| `ArrayBuffer`\>

##### Inherited from

`ThinWebGPUEngine._loadFileAsync`

***

### areAllComputeEffectsReady()

> **areAllComputeEffectsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L87)

Gets a boolean indicating if all created compute effects are ready

#### Returns

`boolean`

true if all effects are ready

#### Inherited from

`ThinWebGPUEngine.areAllComputeEffectsReady`

***

### areAllEffectsReady()

> **areAllEffectsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:487](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L487)

Gets a boolean indicating if all created effects are ready

#### Returns

`boolean`

true if all effects are ready

#### Overrides

`ThinWebGPUEngine.areAllEffectsReady`

***

### beginFrame()

> **beginFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3089](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3089)

Begin a new frame

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.beginFrame`

***

### beginOcclusionQuery()

> **beginOcclusionQuery**(`algorithmType`, `query`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L35)

Initiates an occlusion query

#### Parameters

##### algorithmType

`number`

defines the algorithm to use

##### query

`OcclusionQuery`

defines the query to use

#### Returns

`boolean`

the current engine

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

`ThinWebGPUEngine.beginOcclusionQuery`

***

### bindAttachments()

#### Call Signature

> **bindAttachments**(`attachments`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L54)

Select a subsets of attachments to draw to.

##### Parameters

###### attachments

`number`[]

gl attachments

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.bindAttachments`

#### Call Signature

> **bindAttachments**(`attachments`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L55)

Select a subsets of attachments to draw to.

##### Parameters

###### attachments

`number`[]

gl attachments

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.bindAttachments`

***

### bindBuffers()

> **bindBuffers**(`vertexBuffers`, `indexBuffer`, `_effect`, `overrideVertexBuffers?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1837](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1837)

Bind a list of vertex buffers with the engine

#### Parameters

##### vertexBuffers

defines the list of vertex buffers to bind

##### indexBuffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the index buffer to bind

##### \_effect

[`Effect`](Effect.md)

defines the effect associated with the vertex buffers

##### overrideVertexBuffers?

defines optional list of avertex buffers that overrides the entries in vertexBuffers

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.bindBuffers`

***

### bindFramebuffer()

> **bindFramebuffer**(`texture`, `faceIndex?`, `requiredWidth?`, `requiredHeight?`, `forceFullscreenViewport?`, `lodLevel?`, `layer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3420)

Binds the frame buffer to the specified texture.

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target wrapper to render to

##### faceIndex?

`number` = `0`

The face of the texture to render to in case of cube texture

##### requiredWidth?

`number`

The width of the target to render to

##### requiredHeight?

`number`

The height of the target to render to

##### forceFullscreenViewport?

`boolean`

Forces the viewport to be the entire texture/screen if true

##### lodLevel?

`number` = `0`

defines the lod level to bind to the frame buffer

##### layer?

`number` = `0`

defines the 2d array index to bind to frame buffer to

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.bindFramebuffer`

***

### bindUniformBlock()

> **bindUniformBlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1936](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1936)

Unused in WebGPU

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.bindUniformBlock`

***

### bindUniformBufferBase()

> **bindUniformBufferBase**(`buffer`, `_location`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1929](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1929)

Bind a buffer to the current draw context

#### Parameters

##### buffer

[`DataBuffer`](DataBuffer.md)

defines the buffer to bind

##### \_location

`number`

not used in WebGPU

##### name

`string`

Name of the uniform variable to bind

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.bindUniformBufferBase`

***

### buildTextureLayout()

#### Call Signature

> **buildTextureLayout**(`textureStatus`, `backBufferLayout?`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L62)

Creates a layout object to draw/clear on specific textures in a MRT

##### Parameters

###### textureStatus

`boolean`[]

textureStatus[i] indicates if the i-th is active

###### backBufferLayout?

`boolean`

if true, the layout will be built to account for the back buffer only, and textureStatus won't be used

##### Returns

`number`[]

A layout to be fed to the engine, calling `bindAttachments`.

##### Inherited from

`ThinWebGPUEngine.buildTextureLayout`

#### Call Signature

> **buildTextureLayout**(`textureStatus`, `backBufferLayout?`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L63)

Creates a layout object to draw/clear on specific textures in a MRT

##### Parameters

###### textureStatus

`boolean`[]

textureStatus[i] indicates if the i-th is active

###### backBufferLayout?

`boolean`

if true, the layout will be built to account for the back buffer only, and textureStatus won't be used

##### Returns

`number`[]

A layout to be fed to the engine, calling `bindAttachments`.

##### Inherited from

`ThinWebGPUEngine.buildTextureLayout`

***

### cacheStencilState()

> **cacheStencilState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L167)

Caches the state of the stencil buffer

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.cacheStencilState`

***

### captureGPUFrameTime()

> **captureGPUFrameTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.types.ts#L17)

Enable or disable the GPU frame time capture

#### Parameters

##### value

`boolean`

True to enable, false to disable

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.captureGPUFrameTime`

***

### clear()

> **clear**(`color`, `backBuffer`, `depth`, `stencil?`, `stencilClearValue?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1568](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1568)

Clear the current render buffer or the current render target (if any is set up)

#### Parameters

##### color

[`Nullable`](../type-aliases/Nullable.md)\<`IColor4Like`\>

defines the color to use

##### backBuffer

`boolean`

defines if the back buffer must be cleared

##### depth

`boolean`

defines if the depth buffer must be cleared

##### stencil?

`boolean` = `false`

defines if the stencil buffer must be cleared

##### stencilClearValue?

`number` = `0`

defines the value to use to clear the stencil buffer (default is 0)

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.clear`

***

### clearInternalTexturesCache()

> **clearInternalTexturesCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1931](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1931)

Clears the list of texture accessible through engine.
This can help preventing texture load conflict due to name collision.

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.clearInternalTexturesCache`

***

### clearStorageBuffer()

> **clearStorageBuffer**(`storageBuffer`, `byteOffset?`, `byteLength?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4114)

Clears a storage buffer to zeroes

#### Parameters

##### storageBuffer

[`DataBuffer`](DataBuffer.md)

the storage buffer to clear

##### byteOffset?

`number`

the byte offset to start clearing (optional)

##### byteLength?

`number`

the byte length to clear (optional)

#### Returns

`void`

***

### computeDispatch()

> **computeDispatch**(`effect`, `context`, `bindings`, `x`, `y?`, `z?`, `bindingsMapping?`, `gpuPerfCounter?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L52)

Dispatches a compute shader

#### Parameters

##### effect

[`ComputeEffect`](ComputeEffect.md)

The compute effect

##### context

`IComputeContext`

The compute context

##### bindings

`ComputeBindingList`

The list of resources to bind to the shader

##### x

`number`

The number of workgroups to execute on the X dimension

##### y?

`number`

The number of workgroups to execute on the Y dimension

##### z?

`number`

The number of workgroups to execute on the Z dimension

##### bindingsMapping?

[`ComputeBindingMapping`](../type-aliases/ComputeBindingMapping.md)

list of bindings mapping (key is property name, value is binding location)

##### gpuPerfCounter?

`WebGPUPerfCounter`

GPU time computed for the compute shader will be assigned to this object

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.computeDispatch`

***

### computeDispatchIndirect()

> **computeDispatchIndirect**(`effect`, `context`, `bindings`, `buffer`, `offset?`, `bindingsMapping?`, `gpuPerfCounter?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L73)

Dispatches a compute shader

#### Parameters

##### effect

[`ComputeEffect`](ComputeEffect.md)

The compute effect

##### context

`IComputeContext`

The compute context

##### bindings

`ComputeBindingList`

The list of resources to bind to the shader

##### buffer

[`DataBuffer`](DataBuffer.md)

The buffer containing the dispatch parameters

##### offset?

`number`

The offset in the buffer where the dispatch parameters start

##### bindingsMapping?

[`ComputeBindingMapping`](../type-aliases/ComputeBindingMapping.md)

list of bindings mapping (key is property name, value is binding location)

##### gpuPerfCounter?

`WebGPUPerfCounter`

GPU time computed for the compute shader will be assigned to this object

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.computeDispatchIndirect`

***

### createCanvas()

> **createCanvas**(`width`, `height`): [`ICanvas`](../interfaces/ICanvas.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2647](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2647)

Create a canvas. This method is overridden by other engines

#### Parameters

##### width

`number`

width

##### height

`number`

height

#### Returns

[`ICanvas`](../interfaces/ICanvas.md)

ICanvas interface

#### Inherited from

`ThinWebGPUEngine.createCanvas`

***

### createCanvasImage()

> **createCanvasImage**(): [`IImage`](../interfaces/IImage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1565)

Create an image to use with canvas

#### Returns

[`IImage`](../interfaces/IImage.md)

IImage interface

#### Inherited from

`ThinWebGPUEngine.createCanvasImage`

***

### createCanvasPath2D()

> **createCanvasPath2D**(`d?`): [`IPath2D`](../interfaces/IPath2D.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1574)

Create a 2D path to use with canvas

#### Parameters

##### d?

`string`

SVG path string

#### Returns

[`IPath2D`](../interfaces/IPath2D.md)

IPath2D interface

#### Inherited from

`ThinWebGPUEngine.createCanvasPath2D`

***

### createComputeContext()

> **createComputeContext**(): `IComputeContext` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L39)

Creates a new compute context

#### Returns

`IComputeContext` \| `undefined`

the new context

#### Inherited from

`ThinWebGPUEngine.createComputeContext`

***

### createComputeEffect()

> **createComputeEffect**(`baseName`, `options`): [`ComputeEffect`](ComputeEffect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L17)

Creates a new compute effect

#### Parameters

##### baseName

`string` \| [`IComputeShaderPath`](../type-aliases/IComputeShaderPath.md) & `object`

Name of the effect

##### options

[`IComputeEffectCreationOptions`](../interfaces/IComputeEffectCreationOptions.md)

Options used to create the effect

#### Returns

[`ComputeEffect`](ComputeEffect.md)

The new compute effect

#### Inherited from

`ThinWebGPUEngine.createComputeEffect`

***

### createComputePipelineContext()

> **createComputePipelineContext**(): `IComputePipelineContext`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L33)

Creates a new compute pipeline context

#### Returns

`IComputePipelineContext`

the new pipeline

#### Inherited from

`ThinWebGPUEngine.createComputePipelineContext`

***

### createCubeTexture()

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`, `fallback`, `loaderOptions`, `useSRGBBuffer`, `buffer`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts#L40)

Creates a cube texture

##### Parameters

###### rootUrl

`string`

defines the url where the files to load is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### files

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

defines the list of files to load (1 per face)

###### noMipmap

`boolean` \| `undefined`

defines a boolean indicating that no mipmaps shall be generated (false by default)

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<(`data?`) => `void`\>

defines an optional callback raised when the texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines an optional callback raised if there is an issue to load the texture

###### format

`number` \| `undefined`

defines the format of the data

###### forcedExtension

`any`

defines the extension to use to pick the right loader

###### createPolynomials

`boolean`

if a polynomial sphere should be created for the cube texture

###### lodScale

`number`

defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness

###### lodOffset

`number`

defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness

###### fallback

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines texture to use while falling back when (compressed) texture file not found.

###### loaderOptions

`any`

options to be passed to the loader

###### useSRGBBuffer

`boolean`

defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).

###### buffer

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data buffer to load instead of loading the rootUrl

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createCubeTexture`

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts#L70)

Creates a cube texture

##### Parameters

###### rootUrl

`string`

defines the url where the files to load is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### files

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

defines the list of files to load (1 per face)

###### noMipmap

`boolean`

defines a boolean indicating that no mipmaps shall be generated (false by default)

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<(`data?`) => `void`\>

defines an optional callback raised when the texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines an optional callback raised if there is an issue to load the texture

###### format

`number` \| `undefined`

defines the format of the data

###### forcedExtension

`any`

defines the extension to use to pick the right loader

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createCubeTexture`

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts#L96)

Creates a cube texture

##### Parameters

###### rootUrl

`string`

defines the url where the files to load is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### files

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

defines the list of files to load (1 per face)

###### noMipmap

`boolean`

defines a boolean indicating that no mipmaps shall be generated (false by default)

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<(`data?`) => `void`\>

defines an optional callback raised when the texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines an optional callback raised if there is an issue to load the texture

###### format

`number` \| `undefined`

defines the format of the data

###### forcedExtension

`any`

defines the extension to use to pick the right loader

###### createPolynomials

`boolean`

if a polynomial sphere should be created for the cube texture

###### lodScale

`number`

defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness

###### lodOffset

`number`

defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createCubeTexture`

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`, `fallback`, `loaderOptions`, `useSRGBBuffer`, `buffer`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts#L41)

Creates a cube texture

##### Parameters

###### rootUrl

`string`

defines the url where the files to load is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### files

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

defines the list of files to load (1 per face)

###### noMipmap

`boolean` \| `undefined`

defines a boolean indicating that no mipmaps shall be generated (false by default)

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<(`data?`) => `void`\>

defines an optional callback raised when the texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines an optional callback raised if there is an issue to load the texture

###### format

`number` \| `undefined`

defines the format of the data

###### forcedExtension

`any`

defines the extension to use to pick the right loader

###### createPolynomials

`boolean`

if a polynomial sphere should be created for the cube texture

###### lodScale

`number`

defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness

###### lodOffset

`number`

defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness

###### fallback

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines texture to use while falling back when (compressed) texture file not found.

###### loaderOptions

`any`

options to be passed to the loader

###### useSRGBBuffer

`boolean`

defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).

###### buffer

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data buffer to load instead of loading the rootUrl

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createCubeTexture`

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts#L71)

Creates a cube texture

##### Parameters

###### rootUrl

`string`

defines the url where the files to load is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### files

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

defines the list of files to load (1 per face)

###### noMipmap

`boolean`

defines a boolean indicating that no mipmaps shall be generated (false by default)

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<(`data?`) => `void`\>

defines an optional callback raised when the texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines an optional callback raised if there is an issue to load the texture

###### format

`number` \| `undefined`

defines the format of the data

###### forcedExtension

`any`

defines the extension to use to pick the right loader

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createCubeTexture`

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts#L97)

Creates a cube texture

##### Parameters

###### rootUrl

`string`

defines the url where the files to load is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### files

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

defines the list of files to load (1 per face)

###### noMipmap

`boolean`

defines a boolean indicating that no mipmaps shall be generated (false by default)

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<(`data?`) => `void`\>

defines an optional callback raised when the texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines an optional callback raised if there is an issue to load the texture

###### format

`number` \| `undefined`

defines the format of the data

###### forcedExtension

`any`

defines the extension to use to pick the right loader

###### createPolynomials

`boolean`

if a polynomial sphere should be created for the cube texture

###### lodScale

`number`

defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness

###### lodOffset

`number`

defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createCubeTexture`

***

### createDepthStencilTexture()

> **createDepthStencilTexture**(`size`, `options`, `rtWrapper`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.texture.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.texture.types.ts#L15)

Creates a depth stencil texture.
This is only available in WebGL 2 or with the depth texture extension available.

#### Parameters

##### size

[`TextureSize`](../type-aliases/TextureSize.md)

The size of face edge in the texture.

##### options

[`DepthTextureCreationOptions`](../interfaces/DepthTextureCreationOptions.md)

The options defining the texture.

##### rtWrapper

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target wrapper for which the depth/stencil texture must be created

#### Returns

[`InternalTexture`](InternalTexture.md)

The texture

#### Inherited from

`ThinWebGPUEngine.createDepthStencilTexture`

***

### createDrawContext()

> **createDrawContext**(): [`WebGPUDrawContext`](WebGPUDrawContext.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2143)

Creates a new draw context

#### Returns

[`WebGPUDrawContext`](WebGPUDrawContext.md) \| `undefined`

the new context

#### Overrides

`ThinWebGPUEngine.createDrawContext`

***

### createDynamicTexture()

#### Call Signature

> **createDynamicTexture**(`width`, `height`, `generateMipMaps`, `samplingMode`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.types.ts#L15)

Creates a dynamic texture

##### Parameters

###### width

`number`

defines the width of the texture

###### height

`number`

defines the height of the texture

###### generateMipMaps

`boolean`

defines if the engine should generate the mip levels

###### samplingMode

`number`

defines the required sampling mode (Texture.NEAREST_SAMPLINGMODE by default)

##### Returns

[`InternalTexture`](InternalTexture.md)

the dynamic texture inside an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createDynamicTexture`

#### Call Signature

> **createDynamicTexture**(`width`, `height`, `generateMipMaps`, `samplingMode`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.types.ts#L15)

Creates a dynamic texture

##### Parameters

###### width

`number`

defines the width of the texture

###### height

`number`

defines the height of the texture

###### generateMipMaps

`boolean`

defines if the engine should generate the mip levels

###### samplingMode

`number`

defines the required sampling mode (Texture.NEAREST_SAMPLINGMODE by default)

##### Returns

[`InternalTexture`](InternalTexture.md)

the dynamic texture inside an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createDynamicTexture`

***

### createDynamicUniformBuffer()

> **createDynamicUniformBuffer**(`elements`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1886](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1886)

Create a dynamic uniform buffer (no different from a non dynamic uniform buffer in WebGPU)

#### Parameters

##### elements

[`FloatArray`](../type-aliases/FloatArray.md)

defines the content of the uniform buffer

##### label?

`string`

defines a name for the buffer (for debugging purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

the webGL uniform buffer

#### See

https://doc.babylonjs.com/setup/support/webGL2#uniform-buffer-objets

#### Overrides

`ThinWebGPUEngine.createDynamicUniformBuffer`

***

### createDynamicVertexBuffer()

> **createDynamicVertexBuffer**(`data`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1669)

Creates a vertex buffer

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

the data for the dynamic vertex buffer

##### label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

the new buffer

#### Overrides

`ThinWebGPUEngine.createDynamicVertexBuffer`

***

### createEffect()

> **createEffect**(`baseName`, `attributesNamesOrOptions`, `uniformsNamesOrEngine`, `samplers?`, `defines?`, `fallbacks?`, `onCompiled?`, `onError?`, `indexParameters?`, `shaderLanguage?`, `extraInitializationsAsync?`): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1957](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1957)

Create a new effect (used to store vertex/fragment shaders)

#### Parameters

##### baseName

`string` \| [`IShaderPath`](../type-aliases/IShaderPath.md) & `object`

defines the base name of the effect (The name of file without .fragment.fx or .vertex.fx)

##### attributesNamesOrOptions

`string`[] \| [`IEffectCreationOptions`](../interfaces/IEffectCreationOptions.md)

defines either a list of attribute names or an IEffectCreationOptions object

##### uniformsNamesOrEngine

`string`[] \| [`AbstractEngine`](AbstractEngine.md)

defines either a list of uniform names or the engine to use

##### samplers?

`string`[]

defines an array of string used to represent textures

##### defines?

`string`

defines the string containing the defines to use to compile the shaders

##### fallbacks?

[`EffectFallbacks`](EffectFallbacks.md)

defines the list of potential fallbacks to use if shader compilation fails

##### onCompiled?

[`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\>

defines a function to call when the effect creation is successful

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\>

defines a function to call when the effect creation has failed

##### indexParameters?

`any`

defines an object containing the index values to use to compile shaders (like the maximum number of simultaneous lights)

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

the language the shader is written in (default: GLSL)

##### extraInitializationsAsync?

() => `Promise`\<`void`\>

additional async code to run before preparing the effect

#### Returns

[`Effect`](Effect.md)

the new Effect

#### Overrides

`ThinWebGPUEngine.createEffect`

***

### createEffectForParticles()

> **createEffectForParticles**(`fragmentName`, `uniformsNames`, `samplers`, `defines`, `fallbacks?`, `onCompiled?`, `onError?`, `particleSystem?`, `shaderLanguage?`, `vertexName?`): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemComponent.types.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystemComponent.types.ts#L24)

Create an effect to use with particle systems.
Please note that some parameters like animation sheets or not being billboard are not supported in this configuration, except if you pass
the particle system for which you want to create a custom effect in the last parameter

#### Parameters

##### fragmentName

`string`

defines the base name of the effect (The name of file without .fragment.fx)

##### uniformsNames

`string`[]

defines a list of attribute names

##### samplers

`string`[]

defines an array of string used to represent textures

##### defines

`string`

defines the string containing the defines to use to compile the shaders

##### fallbacks?

[`EffectFallbacks`](EffectFallbacks.md)

defines the list of potential fallbacks to use if shader compilation fails

##### onCompiled?

(`effect`) => `void`

defines a function to call when the effect creation is successful

##### onError?

(`effect`, `errors`) => `void`

defines a function to call when the effect creation has failed

##### particleSystem?

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the particle system you want to create the effect for

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

defines the shader language to use

##### vertexName?

`string`

defines the vertex base name of the effect (The name of file without .vertex.fx)

#### Returns

[`Effect`](Effect.md)

the new Effect

#### Inherited from

`ThinWebGPUEngine.createEffectForParticles`

***

### createExternalTexture()

> **createExternalTexture**(`video`): [`Nullable`](../type-aliases/Nullable.md)\<[`ExternalTexture`](ExternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4062](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4062)

Creates an external texture

#### Parameters

##### video

`HTMLVideoElement`

video element

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ExternalTexture`](ExternalTexture.md)\>

the external texture, or null if external textures are not supported by the engine

***

### createImageBitmap()

> **createImageBitmap**(`image`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2603)

Engine abstraction for createImageBitmap

#### Parameters

##### image

`ImageBitmapSource`

source for image

##### options?

`ImageBitmapOptions`

An object that sets options for the image's extraction.

#### Returns

`Promise`\<`ImageBitmap`\>

ImageBitmap

#### Inherited from

`ThinWebGPUEngine.createImageBitmap`

***

### createIndexBuffer()

> **createIndexBuffer**(`indices`, `_updatable?`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1680)

Creates a new index buffer

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the content of the index buffer

##### \_updatable?

`boolean`

defines if the index buffer must be updatable

##### label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

a new buffer

#### Overrides

`ThinWebGPUEngine.createIndexBuffer`

***

### createMaterialContext()

> **createMaterialContext**(): `WebGPUMaterialContext` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2135)

Creates a new material context

#### Returns

`WebGPUMaterialContext` \| `undefined`

the new context

#### Overrides

`ThinWebGPUEngine.createMaterialContext`

***

### createMultipleRenderTarget()

#### Call Signature

> **createMultipleRenderTarget**(`size`, `options`, `initializeBuffers?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L25)

Create a multi render target texture

##### Parameters

###### size

[`TextureSize`](../type-aliases/TextureSize.md)

defines the size of the texture

###### options

[`IMultiRenderTargetOptions`](../interfaces/IMultiRenderTargetOptions.md)

defines the creation options

###### initializeBuffers?

`boolean`

if set to true, the engine will make an initializing call of drawBuffers

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

a new render target wrapper ready to render textures

##### See

https://doc.babylonjs.com/setup/support/webGL2#multiple-render-target

##### Inherited from

`ThinWebGPUEngine.createMultipleRenderTarget`

#### Call Signature

> **createMultipleRenderTarget**(`size`, `options`, `initializeBuffers?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L25)

Create a multi render target texture

##### Parameters

###### size

[`TextureSize`](../type-aliases/TextureSize.md)

defines the size of the texture

###### options

[`IMultiRenderTargetOptions`](../interfaces/IMultiRenderTargetOptions.md)

defines the creation options

###### initializeBuffers?

`boolean`

if set to true, the engine will make an initializing call of drawBuffers

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

a new render target wrapper ready to render textures

##### See

https://doc.babylonjs.com/setup/support/webGL2#multiple-render-target

##### Inherited from

`ThinWebGPUEngine.createMultipleRenderTarget`

***

### createPipelineContext()

> **createPipelineContext**(`shaderProcessingContext`): [`IPipelineContext`](../interfaces/IPipelineContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2127)

Creates a new pipeline context

#### Parameters

##### shaderProcessingContext

[`Nullable`](../type-aliases/Nullable.md)\<`_IShaderProcessingContext`\>

defines the shader processing context used during the processing if available

#### Returns

[`IPipelineContext`](../interfaces/IPipelineContext.md)

the new pipeline

#### Overrides

`ThinWebGPUEngine.createPipelineContext`

***

### createPrefilteredCubeTexture()

> **createPrefilteredCubeTexture**(`rootUrl`, `scene`, `lodScale`, `lodOffset`, `onLoad?`, `onError?`, `format?`, `forcedExtension?`, `createPolynomials?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2754)

Create a cube texture from prefiltered data (ie. the mipmaps contain ready to use data for PBR reflection)

#### Parameters

##### rootUrl

`string`

defines the url where the file to load is located

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

##### lodScale

`number`

defines scale to apply to the mip map selection

##### lodOffset

`number`

defines offset to apply to the mip map selection

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<(`internalTexture`) => `void`\> = `null`

defines an optional callback raised when the texture is loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\> = `null`

defines an optional callback raised if there is an issue to load the texture

##### format?

`number`

defines the format of the data

##### forcedExtension?

`any` = `null`

defines the extension to use to pick the right loader

##### createPolynomials?

`boolean` = `true`

defines wheter or not to create polynomails harmonics for the texture

#### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

#### Overrides

`ThinWebGPUEngine.createPrefilteredCubeTexture`

***

### createQuery()

> **createQuery**(): [`Nullable`](../type-aliases/Nullable.md)\<`OcclusionQuery`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L10)

Create a new webGL query (you must be sure that queries are supported by checking getCaps() function)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`OcclusionQuery`\>

the new query

#### Inherited from

`ThinWebGPUEngine.createQuery`

***

### createRawCubeTexture()

#### Call Signature

> **createRawCubeTexture**(`data`, `size`, `format`, `type`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2372)

Creates a new raw cube texture

##### Parameters

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>[]\>

defines the array of data to use to create each face

###### size

`number`

defines the size of the textures

###### format

`number`

defines the format of the data

###### type

`number`

defines the type of the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)

###### generateMipMaps

`boolean`

defines if the engine should generate the mip levels

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### samplingMode

`number`

defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)

###### compression?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createRawCubeTexture`

#### Call Signature

> **createRawCubeTexture**(`data`, `size`, `format`, `type`, `generateMipMaps`, `invertY`, `samplingMode`, `compression`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L50)

Creates a new raw cube texture

##### Parameters

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>[]\>

defines the array of data to use to create each face

###### size

`number`

defines the size of the textures

###### format

`number`

defines the format of the data

###### type

`number`

defines the type of the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)

###### generateMipMaps

`boolean`

defines if the engine should generate the mip levels

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### samplingMode

`number`

defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createRawCubeTexture`

***

### createRawCubeTextureFromUrl()

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L82)

Creates a new raw cube texture from a specified url

##### Parameters

###### url

`string`

defines the url where the data is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### size

`number`

defines the size of the textures

###### format

`number`

defines the format of the data

###### type

`number`

defines the type fo the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)

###### noMipmap

`boolean`

defines if the engine should avoid generating the mip levels

###### callback

(`ArrayBuffer`) => [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>[] \| `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>[]\>\>

defines a callback used to extract texture data from loaded data

###### mipmapGenerator

[`Nullable`](../type-aliases/Nullable.md)\<(`faces`) => `ArrayBufferView`\<`ArrayBufferLike`\>[][]\>

defines to provide an optional tool to generate mip levels

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

defines a callback called when texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines a callback called if there is an error

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createRawCubeTextureFromUrl`

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`, `samplingMode`, `invertY`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L111)

Creates a new raw cube texture from a specified url

##### Parameters

###### url

`string`

defines the url where the data is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### size

`number`

defines the size of the textures

###### format

`number`

defines the format of the data

###### type

`number`

defines the type fo the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)

###### noMipmap

`boolean`

defines if the engine should avoid generating the mip levels

###### callback

(`ArrayBuffer`) => [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>[] \| `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>[]\>\>

defines a callback used to extract texture data from loaded data

###### mipmapGenerator

[`Nullable`](../type-aliases/Nullable.md)\<(`faces`) => `ArrayBufferView`\<`ArrayBufferLike`\>[][]\>

defines to provide an optional tool to generate mip levels

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

defines a callback called when texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines a callback called if there is an error

###### samplingMode

`number`

defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createRawCubeTextureFromUrl`

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L108)

Creates a new raw cube texture from a specified url

##### Parameters

###### url

`string`

defines the url where the data is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### size

`number`

defines the size of the textures

###### format

`number`

defines the format of the data

###### type

`number`

defines the type fo the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)

###### noMipmap

`boolean`

defines if the engine should avoid generating the mip levels

###### callback

(`ArrayBuffer`) => [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>[] \| `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>[]\>\>

defines a callback used to extract texture data from loaded data

###### mipmapGenerator

[`Nullable`](../type-aliases/Nullable.md)\<(`faces`) => `ArrayBufferView`\<`ArrayBufferLike`\>[][]\>

defines to provide an optional tool to generate mip levels

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

defines a callback called when texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines a callback called if there is an error

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createRawCubeTextureFromUrl`

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`, `samplingMode`, `invertY`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L137)

Creates a new raw cube texture from a specified url

##### Parameters

###### url

`string`

defines the url where the data is located

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

###### size

`number`

defines the size of the textures

###### format

`number`

defines the format of the data

###### type

`number`

defines the type fo the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)

###### noMipmap

`boolean`

defines if the engine should avoid generating the mip levels

###### callback

(`ArrayBuffer`) => [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>[] \| `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>[]\>\>

defines a callback used to extract texture data from loaded data

###### mipmapGenerator

[`Nullable`](../type-aliases/Nullable.md)\<(`faces`) => `ArrayBufferView`\<`ArrayBufferLike`\>[][]\>

defines to provide an optional tool to generate mip levels

###### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

defines a callback called when texture is loaded

###### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines a callback called if there is an error

###### samplingMode

`number`

defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

##### Inherited from

`ThinWebGPUEngine.createRawCubeTextureFromUrl`

***

### createRawTexture()

> **createRawTexture**(`data`, `width`, `height`, `format`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`, `type?`, `creationFlags?`, `useSRGBBuffer?`, `mipLevelCount?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2342)

Creates a raw texture

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store in the texture

##### width

`number`

defines the width of the texture

##### height

`number`

defines the height of the texture

##### format

`number`

defines the format of the data

##### generateMipMaps

`boolean`

defines if the engine should generate the mip levels

##### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### samplingMode

`number`

defines the required sampling mode (Texture.NEAREST_SAMPLINGMODE by default)

##### compression?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

##### type?

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### useSRGBBuffer?

`boolean`

defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).

##### mipLevelCount?

`number`

defines the number of mip levels to allocate for the texture

#### Returns

[`InternalTexture`](InternalTexture.md)

the raw texture inside an InternalTexture

#### Inherited from

`ThinWebGPUEngine.createRawTexture`

***

### createRawTexture2DArray()

> **createRawTexture2DArray**(`data`, `width`, `height`, `depth`, `format`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`, `textureType?`, `creationFlags?`, `mipLevelCount?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2433)

Creates a new raw 2D array texture

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data used to create the texture

##### width

`number`

defines the width of the texture

##### height

`number`

defines the height of the texture

##### depth

`number`

defines the number of layers of the texture

##### format

`number`

defines the format of the texture

##### generateMipMaps

`boolean`

defines if the engine must generate mip levels

##### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### samplingMode

`number`

defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)

##### compression?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compressed used (can be null)

##### textureType?

`number`

defines the compressed used (can be null)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### mipLevelCount?

`number`

defines the number of mip levels to allocate for the texture

#### Returns

[`InternalTexture`](InternalTexture.md)

a new raw 2D array texture (stored in an InternalTexture)

#### Inherited from

`ThinWebGPUEngine.createRawTexture2DArray`

***

### createRawTexture3D()

> **createRawTexture3D**(`data`, `width`, `height`, `depth`, `format`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`, `textureType?`, `creationFlags?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2400)

Creates a new raw 3D texture

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data used to create the texture

##### width

`number`

defines the width of the texture

##### height

`number`

defines the height of the texture

##### depth

`number`

defines the depth of the texture

##### format

`number`

defines the format of the texture

##### generateMipMaps

`boolean`

defines if the engine must generate mip levels

##### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### samplingMode

`number`

defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)

##### compression?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compressed used (can be null)

##### textureType?

`number`

defines the compressed used (can be null)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

#### Returns

[`InternalTexture`](InternalTexture.md)

a new raw 3D texture (stored in an InternalTexture)

#### Inherited from

`ThinWebGPUEngine.createRawTexture3D`

***

### createRenderPassId()

> **createRenderPassId**(`name?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts#L23)

Creates a render pass id

#### Parameters

##### name?

`string`

Name of the render pass (for debug purpose only)

#### Returns

`number`

the id of the new render pass

#### Inherited from

`ThinWebGPUEngine.createRenderPassId`

***

### createRenderPipelineAsync()

> **createRenderPipelineAsync**(`options`): `Promise`\<`GPURenderPipeline`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3905](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3905)

Asynchronously pre-creates one or more render pipelines so they are cached and ready
to use without any compilation hitch when first rendered.

Call this for effects and meshes that are not yet rendering but will be soon
(e.g. streaming content, predicted material changes, pre-loading the next level).

When passing an array, cache state is set once per entry and restored only at the end,
making batch pre-warming efficient.

#### Parameters

##### options

[`IWebGPURenderPipelineAsyncCreationOptions`](../interfaces/IWebGPURenderPipelineAsyncCreationOptions.md) \| [`IWebGPURenderPipelineAsyncCreationOptions`](../interfaces/IWebGPURenderPipelineAsyncCreationOptions.md)[] \| `GPURenderPipelineDescriptor`

a single options object, an array of options objects,
                 or a raw GPURenderPipelineDescriptor for complete control

#### Returns

`Promise`\<`GPURenderPipeline`\>[]

an array of Promises for the pipelines that had cache misses (empty if all were cached).
         When a raw GPURenderPipelineDescriptor is provided, always returns a single-element array.

***

### createRenderTargetCubeTexture()

#### Call Signature

> **createRenderTargetCubeTexture**(`size`, `options?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTargetCube.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.renderTargetCube.types.ts#L12)

Creates a new render target cube wrapper

##### Parameters

###### size

`number`

defines the size of the texture

###### options?

[`RenderTargetCreationOptions`](../interfaces/RenderTargetCreationOptions.md)

defines the options used to create the texture

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

a new render target cube wrapper

##### Inherited from

`ThinWebGPUEngine.createRenderTargetCubeTexture`

#### Call Signature

> **createRenderTargetCubeTexture**(`size`, `options?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetCube.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetCube.types.ts#L12)

Creates a new render target cube wrapper

##### Parameters

###### size

`number`

defines the size of the texture

###### options?

[`RenderTargetCreationOptions`](../interfaces/RenderTargetCreationOptions.md)

defines the options used to create the texture

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

a new render target cube wrapper

##### Inherited from

`ThinWebGPUEngine.createRenderTargetCubeTexture`

***

### createRenderTargetTexture()

#### Call Signature

> **createRenderTargetTexture**(`size`, `options`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTarget.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.renderTarget.types.ts#L14)

Creates a new render target texture

##### Parameters

###### size

[`TextureSize`](../type-aliases/TextureSize.md)

defines the size of the texture

###### options

`boolean` \| [`RenderTargetCreationOptions`](../interfaces/RenderTargetCreationOptions.md)

defines the options used to create the texture

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

a new render target wrapper ready to render texture

##### Inherited from

`ThinWebGPUEngine.createRenderTargetTexture`

#### Call Signature

> **createRenderTargetTexture**(`size`, `options`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.types.ts#L14)

Creates a new render target texture

##### Parameters

###### size

[`TextureSize`](../type-aliases/TextureSize.md)

defines the size of the texture

###### options

`boolean` \| [`RenderTargetCreationOptions`](../interfaces/RenderTargetCreationOptions.md)

defines the options used to create the texture

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

a new render target wrapper ready to render texture

##### Inherited from

`ThinWebGPUEngine.createRenderTargetTexture`

***

### createStorageBuffer()

> **createStorageBuffer**(`data`, `creationFlags`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4104)

Creates a storage buffer

#### Parameters

##### data

`number` \| [`DataArray`](../type-aliases/DataArray.md)

the data for the storage buffer or the size of the buffer

##### creationFlags

`number`

flags to use when creating the buffer (see Constants.BUFFER_CREATIONFLAG_XXX). The BUFFER_CREATIONFLAG_STORAGE flag will be automatically added

##### label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

the new buffer

***

### createTexture()

> **createTexture**(`url`, `noMipmap`, `invertY`, `scene`, `samplingMode?`, `onLoad?`, `onError?`, `buffer?`, `fallback?`, `format?`, `forcedExtension?`, `mimeType?`, `loaderOptions?`, `creationFlags?`, `useSRGBBuffer?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2470)

Usually called from Texture.ts.
Passed information to create a hardware texture

#### Parameters

##### url

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines a value which contains one of the following:
* A conventional http URL, e.g. 'http://...' or 'file://...'
* A base64 string of in-line texture data, e.g. 'data:image/jpg;base64,/...'
* An indicator that data being passed using the buffer parameter, e.g. 'data:mytexture.jpg'

##### noMipmap

`boolean`

defines a boolean indicating that no mipmaps shall be generated.  Ignored for compressed textures.  They must be in the file

##### invertY

`boolean`

when true, image is flipped when loaded.  You probably want true. Certain compressed textures may invert this if their default is inverted (eg. ktx)

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<`ISceneLike`\>

needed for loading to the correct scene

##### samplingMode?

`number` = `Constants.TEXTURE_TRILINEAR_SAMPLINGMODE`

mode with should be used sample / access the texture (Default: Texture.TRILINEAR_SAMPLINGMODE)

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<(`texture`) => `void`\> = `null`

optional callback to be called upon successful completion

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`message`, `exception`) => `void`\> = `null`

optional callback to be called upon failure

##### buffer?

[`Nullable`](../type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\> = `null`

a source of a file previously fetched as either a base64 string, an ArrayBuffer (compressed or image format), HTMLImageElement (image format), or a Blob

##### fallback?

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\> = `null`

an internal argument in case the function must be called again, due to etc1 not having alpha capabilities

##### format?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

internal format.  Default: RGB when extension is '.jpg' else RGBA.  Ignored for compressed textures

##### forcedExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

defines the extension to use to pick the right loader

##### mimeType?

`string`

defines an optional mime type

##### loaderOptions?

`any`

options to be passed to the loader

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### useSRGBBuffer?

`boolean`

defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).

#### Returns

[`InternalTexture`](InternalTexture.md)

a InternalTexture for assignment back into BABYLON.Texture

#### Overrides

`ThinWebGPUEngine.createTexture`

***

### createUniformBuffer()

> **createUniformBuffer**(`elements`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1867](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1867)

Create an uniform buffer

#### Parameters

##### elements

[`FloatArray`](../type-aliases/FloatArray.md)

defines the content of the uniform buffer

##### label?

`string`

defines a name for the buffer (for debugging purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

the webGL uniform buffer

#### See

https://doc.babylonjs.com/setup/support/webGL2#uniform-buffer-objets

#### Overrides

`ThinWebGPUEngine.createUniformBuffer`

***

### createVertexBuffer()

> **createVertexBuffer**(`data`, `_updatable?`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1644)

Creates a vertex buffer

#### Parameters

##### data

`number` \| [`DataArray`](../type-aliases/DataArray.md)

the data or the size for the vertex buffer

##### \_updatable?

`boolean`

whether the buffer should be created as updatable

##### label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

the new buffer

#### Overrides

`ThinWebGPUEngine.createVertexBuffer`

***

### createVideoElement()

> **createVideoElement**(`constraints`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2519](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2519)

creates and returns a new video element

#### Parameters

##### constraints

`MediaTrackConstraints`

video constraints

#### Returns

`any`

video element

#### Inherited from

`ThinWebGPUEngine.createVideoElement`

***

### deleteQuery()

> **deleteQuery**(`query`): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L16)

Delete and release a webGL query

#### Parameters

##### query

`OcclusionQuery`

defines the query to delete

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the current engine

#### Inherited from

`ThinWebGPUEngine.deleteQuery`

***

### disableScissor()

> **disableScissor**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1501](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1501)

Disable previously set scissor test rectangle

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.disableScissor`

***

### displayLoadingUI()

> **displayLoadingUI**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L9)

Display the loading screen

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

`ThinWebGPUEngine.displayLoadingUI`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3995](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3995)

Dispose and release all associated resources

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.dispose`

***

### drawArraysType()

> **drawArraysType**(`fillMode`, `verticesStart`, `verticesCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3880](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3880)

Draw a list of unindexed primitives

#### Parameters

##### fillMode

`number`

defines the primitive to use

##### verticesStart

`number`

defines the index of first vertex to draw

##### verticesCount

`number`

defines the count of vertices to draw

##### instancesCount?

`number` = `1`

defines the number of instances to draw (if instantiation is enabled)

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.drawArraysType`

***

### drawElementsType()

> **drawElementsType**(`fillMode`, `indexStart`, `indexCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3869)

Draw a list of indexed primitives

#### Parameters

##### fillMode

`number`

defines the primitive to use

##### indexStart

`number`

defines the starting index

##### indexCount

`number`

defines the number of index to draw

##### instancesCount?

`number` = `1`

defines the number of instances to draw (if instantiation is enabled)

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.drawElementsType`

***

### enableEffect()

> **enableEffect**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2221)

Activates an effect, making it the current one (ie. the one used for rendering)

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md) \| [`DrawWrapper`](DrawWrapper.md)\>

defines the effect to activate

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.enableEffect`

***

### enableScissor()

> **enableScissor**(`x`, `y`, `width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1491)

Enable scissor test on a specific rectangle

#### Parameters

##### x

`number`

defines left coordinate of the rectangle

##### y

`number`

defines top coordinate of the rectangle

##### width

`number`

defines width of the rectangle

##### height

`number`

defines height of the rectangle

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.enableScissor`

***

### endFrame()

> **endFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3097](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3097)

End the current frame

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.endFrame`

***

### endOcclusionQuery()

> **endOcclusionQuery**(`algorithmType`): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L42)

Ends an occlusion query

#### Parameters

##### algorithmType

`number`

defines the algorithm to use

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the current engine

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

`ThinWebGPUEngine.endOcclusionQuery`

***

### enterFullscreen()

> **enterFullscreen**(`requestPointerLock`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1193)

Enters full screen mode

#### Parameters

##### requestPointerLock

`boolean`

defines if a pointer lock should be requested from the user

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.enterFullscreen`

***

### enterPointerlock()

> **enterPointerlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1214)

Enters Pointerlock mode

#### Returns

`void`

***

### exitFullscreen()

> **exitFullscreen**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1205)

Exits full screen mode

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.exitFullscreen`

***

### exitPointerlock()

> **exitPointerlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1223)

Exits Pointerlock mode

#### Returns

`void`

***

### extractDriverInfo()

> **extractDriverInfo**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3127)

Gets driver info if available

#### Returns

`string`

#### Overrides

`ThinWebGPUEngine.extractDriverInfo`

***

### generateMipmaps()

> **generateMipmaps**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2912](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2912)

Generates the mipmaps for a texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

texture to generate the mipmaps for

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.generateMipmaps`

***

### generateMipMapsForCubemap()

#### Call Signature

> **generateMipMapsForCubemap**(`texture`, `unbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.types.ts#L135)

Force the mipmap generation for the given render target texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the render target texture to use

###### unbind?

`boolean`

defines whether or not to unbind the texture after generation. Defaults to true.

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.generateMipMapsForCubemap`

#### Call Signature

> **generateMipMapsForCubemap**(`texture`, `unbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.types.ts#L170)

Force the mipmap generation for the given render target texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the render target texture to use

###### unbind?

`boolean`

defines whether or not to unbind the texture after generation. Defaults to true.

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.generateMipMapsForCubemap`

***

### generateMipMapsFramebuffer()

> **generateMipMapsFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3546)

Generates mipmaps for the texture of the (single) render target

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target containing the texture to generate the mipmaps for

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.generateMipMapsFramebuffer`

***

### generateMipMapsMultiFramebuffer()

#### Call Signature

> **generateMipMapsMultiFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L41)

Generates mipmaps for the texture of the (multi) render target

##### Parameters

###### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target containing the textures to generate the mipmaps for

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.generateMipMapsMultiFramebuffer`

#### Call Signature

> **generateMipMapsMultiFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L41)

Generates mipmaps for the texture of the (multi) render target

##### Parameters

###### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target containing the textures to generate the mipmaps for

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.generateMipMapsMultiFramebuffer`

***

### getAlphaEquation()

> **getAlphaEquation**(`targetIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L71)

Gets the current alpha equation.

#### Parameters

##### targetIndex?

`number`

defines the index of the target to get the alpha equation for (default is 0)

#### Returns

`number`

the current alpha equation

#### Inherited from

`ThinWebGPUEngine.getAlphaEquation`

***

### getAlphaMode()

> **getAlphaMode**(`targetIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L64)

Gets the current alpha mode

#### Parameters

##### targetIndex?

`number`

defines the index of the target to get the alpha mode for (default is 0)

#### Returns

`number`

the current alpha mode

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering

#### Inherited from

`ThinWebGPUEngine.getAlphaMode`

***

### getAspectRatio()

> **getAspectRatio**(`viewportOwner`, `useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L30)

Gets current aspect ratio

#### Parameters

##### viewportOwner

[`IViewportOwnerLike`](../interfaces/IViewportOwnerLike.md)

defines the camera to use to get the aspect ratio

##### useScreen?

`boolean`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the aspect ratio

#### Inherited from

`ThinWebGPUEngine.getAspectRatio`

***

### getAttributes()

> **getAttributes**(`pipelineContext`, `attributesNames`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2200)

Gets the list of active attributes for a given WebGPU program

#### Parameters

##### pipelineContext

[`IPipelineContext`](../interfaces/IPipelineContext.md)

defines the pipeline context to use

##### attributesNames

`string`[]

defines the list of attribute names to get

#### Returns

`number`[]

an array of indices indicating the offset of each attribute

***

### ~~getAudioContext()~~

> **getAudioContext**(): [`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2013](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2013)

Gets the audio context specified in engine initialization options

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

an Audio Context

#### Deprecated

please use AudioEngineV2 instead

#### Inherited from

`ThinWebGPUEngine.getAudioContext`

***

### ~~getAudioDestination()~~

> **getAudioDestination**(): [`Nullable`](../type-aliases/Nullable.md)\<`AudioDestinationNode` \| `MediaStreamAudioDestinationNode`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2022](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2022)

Gets the audio destination specified in engine initialization options

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AudioDestinationNode` \| `MediaStreamAudioDestinationNode`\>

an audio destination node

#### Deprecated

please use AudioEngineV2 instead

#### Inherited from

`ThinWebGPUEngine.getAudioDestination`

***

### getCaps()

> **getCaps**(): [`EngineCapabilities`](../interfaces/EngineCapabilities.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1944)

Gets the object containing all engine capabilities

#### Returns

[`EngineCapabilities`](../interfaces/EngineCapabilities.md)

the EngineCapabilities object

#### Inherited from

`ThinWebGPUEngine.getCaps`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:790](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L790)

Returns the string "AbstractEngine"

#### Returns

`string`

"AbstractEngine"

#### Inherited from

`ThinWebGPUEngine.getClassName`

***

### getColorWrite()

> **getColorWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1392)

Gets a boolean indicating if color writing is enabled

#### Returns

`boolean`

the current color writing state

#### Overrides

`ThinWebGPUEngine.getColorWrite`

***

### getCreationOptions()

> **getCreationOptions**(): [`AbstractEngineOptions`](../interfaces/AbstractEngineOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2096](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2096)

Gets the options used for engine creation
NOTE that modifying the object after engine creation will have no effect

#### Returns

[`AbstractEngineOptions`](../interfaces/AbstractEngineOptions.md)

EngineOptions object

#### Inherited from

`ThinWebGPUEngine.getCreationOptions`

***

### getCurrentRenderPassName()

> **getCurrentRenderPassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts#L16)

Gets the name of the current render pass

#### Returns

`string`

name of the current render pass

#### Inherited from

`ThinWebGPUEngine.getCurrentRenderPassName`

***

### getDeltaTime()

> **getDeltaTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2548)

Gets the time spent between current and previous frame

#### Returns

`number`

a number representing the delta time in ms

#### Inherited from

`ThinWebGPUEngine.getDeltaTime`

***

### getDepthBuffer()

> **getDepthBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1103)

Gets a boolean indicating if depth testing is enabled

#### Returns

`boolean`

the current state

#### Inherited from

`ThinWebGPUEngine.getDepthBuffer`

***

### getDepthFunction()

> **getDepthFunction**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L9)

Gets the current depth function

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

a number defining the depth function

#### Inherited from

`ThinWebGPUEngine.getDepthFunction`

***

### getDepthWrite()

> **getDepthWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L41)

Gets a boolean indicating if depth writing is enabled

#### Returns

`boolean`

the current depth writing state

#### Inherited from

`ThinWebGPUEngine.getDepthWrite`

***

### getError()

> **getError**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4048](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4048)

Get the current error code of the WebGPU context

#### Returns

`number`

the error code

#### Overrides

`ThinWebGPUEngine.getError`

***

### getFontOffset()

> **getFontOffset**(`font`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L496)

Get Font size information

#### Parameters

##### font

`string`

font name

#### Returns

`object`

an object containing ascent, height and descent

##### ascent

> **ascent**: `number`

##### descent

> **descent**: `number`

##### height

> **height**: `number`

#### Overrides

`ThinWebGPUEngine.getFontOffset`

***

### getFps()

> **getFps**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2540)

Gets the current framerate

#### Returns

`number`

a number representing the framerate

#### Inherited from

`ThinWebGPUEngine.getFps`

***

### getGPUFrameTimeCounter()

> **getGPUFrameTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.types.ts#L12)

Get the performance counter associated with the frame time computation

#### Returns

[`PerfCounter`](PerfCounter.md)

the perf counter

#### Inherited from

`ThinWebGPUEngine.getGPUFrameTimeCounter`

***

### getHardwareScalingLevel()

> **getHardwareScalingLevel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2059](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2059)

Gets the current hardware scaling level.
By default the hardware scaling level is computed from the window device ratio.
if level = 1 then the engine will render at the exact resolution of the canvas. If level = 0.5 then the engine will render at twice the size of the canvas.

#### Returns

`number`

a number indicating the current hardware scaling level

#### Inherited from

`ThinWebGPUEngine.getHardwareScalingLevel`

***

### getHostDocument()

> **getHostDocument**(): [`Nullable`](../type-aliases/Nullable.md)\<`Document`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1901](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1901)

Gets host document

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Document`\>

the host document object

#### Inherited from

`ThinWebGPUEngine.getHostDocument`

***

### getHostWindow()

> **getHostWindow**(): [`Nullable`](../type-aliases/Nullable.md)\<`Window`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1153)

Gets host window

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Window`\>

the host window object

#### Inherited from

`ThinWebGPUEngine.getHostWindow`

***

### getInfo()

> **getInfo**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L573)

Gets an object containing information about the current engine context

#### Returns

`object`

an object containing the vendor, the renderer and the version of the current engine context

##### renderer

> **renderer**: `string`

##### vendor

> **vendor**: `string`

##### version

> **version**: `string`

***

### getInputElement()

> **getInputElement**(): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L10)

Gets the HTML element used to attach event listeners

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

a HTML element

#### Inherited from

`ThinWebGPUEngine.getInputElement`

***

### getInputElementClientRect()

> **getInputElementClientRect**(): [`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L22)

Gets the client rect of the HTML element used for events

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

a client rectangle

#### Inherited from

`ThinWebGPUEngine.getInputElementClientRect`

***

### getLoadedTexturesCache()

> **getLoadedTexturesCache**(): [`InternalTexture`](InternalTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1923](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1923)

Gets the list of loaded textures

#### Returns

[`InternalTexture`](InternalTexture.md)[]

an array containing all loaded textures

#### Inherited from

`ThinWebGPUEngine.getLoadedTexturesCache`

***

### getLockstepMaxSteps()

> **getLockstepMaxSteps**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2574)

Gets the max steps when engine is running in deterministic lock step

#### Returns

`number`

the max steps

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

#### Inherited from

`ThinWebGPUEngine.getLockstepMaxSteps`

***

### getQueryResult()

> **getQueryResult**(`query`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L27)

Gets the value of a given query

#### Parameters

##### query

`OcclusionQuery`

defines the query to check

#### Returns

`number`

the value of the query

#### Inherited from

`ThinWebGPUEngine.getQueryResult`

***

### getRenderHeight()

> **getRenderHeight**(`useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4032](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4032)

Gets the current render height

#### Parameters

##### useScreen?

`boolean` = `false`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the current render height

#### Overrides

`ThinWebGPUEngine.getRenderHeight`

***

### getRenderingCanvas()

> **getRenderingCanvas**(): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2004](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2004)

Gets the HTML canvas attached with the current webGL context

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement`\>

a HTML canvas

#### Inherited from

`ThinWebGPUEngine.getRenderingCanvas`

***

### getRenderingCanvasClientRect()

> **getRenderingCanvasClientRect**(): [`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L16)

Gets the client rect of the HTML canvas attached with the current webGL context

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

a client rectangle

#### Inherited from

`ThinWebGPUEngine.getRenderingCanvasClientRect`

***

### getRenderPassNames()

> **getRenderPassNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts#L10)

Gets the names of the render passes that are currently created

#### Returns

`string`[]

list of the render pass names

#### Inherited from

`ThinWebGPUEngine.getRenderPassNames`

***

### getRenderWidth()

> **getRenderWidth**(`useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4019](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4019)

Gets the current render width

#### Parameters

##### useScreen?

`boolean` = `false`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the current render width

#### Overrides

`ThinWebGPUEngine.getRenderWidth`

***

### getScreenAspectRatio()

> **getScreenAspectRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L36)

Gets current screen aspect ratio

#### Returns

`number`

a number defining the aspect ratio

#### Inherited from

`ThinWebGPUEngine.getScreenAspectRatio`

***

### getStencilBackFunction()

> **getStencilBackFunction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L66)

Gets the current back stencil function

#### Returns

`number`

a number defining the back stencil function to use

#### Inherited from

`ThinWebGPUEngine.getStencilBackFunction`

***

### getStencilBackOperationDepthFail()

> **getStencilBackOperationDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L126)

Gets the current back stencil operation when depth fails

#### Returns

`number`

a number defining back stencil operation to use when depth fails

#### Inherited from

`ThinWebGPUEngine.getStencilBackOperationDepthFail`

***

### getStencilBackOperationFail()

> **getStencilBackOperationFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L114)

Gets the current back stencil operation when stencil fails

#### Returns

`number`

a number defining back stencil operation to use when stencil fails

#### Inherited from

`ThinWebGPUEngine.getStencilBackOperationFail`

***

### getStencilBackOperationPass()

> **getStencilBackOperationPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L31)

Gets the current back stencil operation when stencil passes

#### Returns

`number`

a number defining back stencil operation to use when stencil passes

#### Inherited from

`ThinWebGPUEngine.getStencilBackOperationPass`

***

### getStencilBuffer()

> **getStencilBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L37)

Gets a boolean indicating if stencil buffer is enabled

#### Returns

`boolean`

the current stencil buffer state

#### Inherited from

`ThinWebGPUEngine.getStencilBuffer`

***

### getStencilFunction()

> **getStencilFunction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L60)

Gets the current stencil function

#### Returns

`number`

a number defining the stencil function to use

#### Inherited from

`ThinWebGPUEngine.getStencilFunction`

***

### getStencilFunctionMask()

> **getStencilFunctionMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L78)

Gets the current stencil mask

#### Returns

`number`

a number defining the stencil mask to use

#### Inherited from

`ThinWebGPUEngine.getStencilFunctionMask`

***

### getStencilFunctionReference()

> **getStencilFunctionReference**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L72)

Gets the current stencil reference value

#### Returns

`number`

a number defining the stencil reference value to use

#### Inherited from

`ThinWebGPUEngine.getStencilFunctionReference`

***

### getStencilMask()

> **getStencilMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L49)

Gets the current stencil mask

#### Returns

`number`

a number defining the new stencil mask to use

#### Inherited from

`ThinWebGPUEngine.getStencilMask`

***

### getStencilOperationDepthFail()

> **getStencilOperationDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L120)

Gets the current stencil operation when depth fails

#### Returns

`number`

a number defining stencil operation to use when depth fails

#### Inherited from

`ThinWebGPUEngine.getStencilOperationDepthFail`

***

### getStencilOperationFail()

> **getStencilOperationFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L108)

Gets the current stencil operation when stencil fails

#### Returns

`number`

a number defining stencil operation to use when stencil fails

#### Inherited from

`ThinWebGPUEngine.getStencilOperationFail`

***

### getStencilOperationPass()

> **getStencilOperationPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L25)

Gets the current stencil operation when stencil passes

#### Returns

`number`

a number defining stencil operation to use when stencil passes

#### Inherited from

`ThinWebGPUEngine.getStencilOperationPass`

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2582)

Returns the time in ms between steps when using deterministic lock step.

#### Returns

`number`

time step in (ms)

#### Inherited from

`ThinWebGPUEngine.getTimeStep`

***

### getZOffset()

> **getZOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1127)

Gets the current value of the zOffset Factor

#### Returns

`number`

the current zOffset Factor state

#### Inherited from

`ThinWebGPUEngine.getZOffset`

***

### getZOffsetUnits()

> **getZOffsetUnits**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1144)

Gets the current value of the zOffset Units

#### Returns

`number`

the current zOffset Units state

#### Inherited from

`ThinWebGPUEngine.getZOffsetUnits`

***

### hideLoadingUI()

> **hideLoadingUI**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L15)

Hide the loading screen

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

`ThinWebGPUEngine.hideLoadingUI`

***

### initAsync()

> **initAsync**(`glslangOptions?`, `twgslOptions?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L705)

Initializes the WebGPU context and dependencies.

#### Parameters

##### glslangOptions?

[`GlslangOptions`](../interfaces/GlslangOptions.md)

Defines the GLSLang compiler options if necessary

##### twgslOptions?

[`TwgslOptions`](../interfaces/TwgslOptions.md)

Defines the Twgsl compiler options if necessary

#### Returns

`Promise`\<`void`\>

a promise notifying the readiness of the engine.

***

### inlineShaderCode()

> **inlineShaderCode**(`code`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2115)

Inline functions in shader code that are marked to be inlined

#### Parameters

##### code

`string`

code to inline

#### Returns

`string`

inlined code

#### Overrides

`ThinWebGPUEngine.inlineShaderCode`

***

### isDeterministicLockStep()

> **isDeterministicLockStep**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2565)

Gets a boolean indicating that the engine is running in deterministic lock step mode

#### Returns

`boolean`

true if engine is in deterministic lock step mode

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

#### Inherited from

`ThinWebGPUEngine.isDeterministicLockStep`

***

### isQueryResultAvailable()

> **isQueryResultAvailable**(`query`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L21)

#### Parameters

##### query

`OcclusionQuery`

#### Returns

`boolean`

#### Inherited from

`ThinWebGPUEngine.isQueryResultAvailable`

***

### prepareGlslangAndTintAsync()

> **prepareGlslangAndTintAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:679](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L679)

Load the glslang and tintWASM libraries and prepare them for use.

#### Returns

`Promise`\<`void`\>

a promise that resolves when the engine is ready to use the glslang and tintWASM

***

### readFromMultipleStorageBuffers()

> **readFromMultipleStorageBuffers**(`storageBuffers`, `offset?`, `size?`, `buffer?`, `noDelay?`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4235)

Read data from multiple storage buffers

#### Parameters

##### storageBuffers

[`DataBuffer`](DataBuffer.md)[]

The list of storage buffers to read from

##### offset?

`number`

The offset in the storage buffer to start reading from (default: 0). This is the same offset for all storage buffers!

##### size?

`number`

The number of bytes to read from each storage buffer (default: capacity of the first buffer)

##### buffer?

`ArrayBufferView`\<`ArrayBufferLike`\>

The buffer to write the data we have read from the storage buffers to (optional). If provided, the buffer should be large enough to hold the data from all storage buffers!

##### noDelay?

`boolean`

If true, a call to flushFramebuffer will be issued so that the data can be read back immediately and not in engine.onEndFrameObservable. This can speed up data retrieval, at the cost of a small perf penalty (default: false).

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

If not undefined, returns the (promise) buffer (as provided by the 4th parameter) filled with the data, else it returns a (promise) Uint8Array with the data read from the storage buffer

***

### readFromStorageBuffer()

> **readFromStorageBuffer**(`storageBuffer`, `offset?`, `size?`, `buffer?`, `noDelay?`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4210)

Read data from a storage buffer

#### Parameters

##### storageBuffer

[`DataBuffer`](DataBuffer.md)

The storage buffer to read from

##### offset?

`number`

The offset in the storage buffer to start reading from (default: 0)

##### size?

`number`

The number of bytes to read from the storage buffer (default: capacity of the buffer)

##### buffer?

`ArrayBufferView`\<`ArrayBufferLike`\>

The buffer to write the data we have read from the storage buffer to (optional)

##### noDelay?

`boolean`

If true, a call to flushFramebuffer will be issued so that the data can be read back immediately and not in engine.onEndFrameObservable. This can speed up data retrieval, at the cost of a small perf penalty (default: false).

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

If not undefined, returns the (promise) buffer (as provided by the 4th parameter) filled with the data, else it returns a (promise) Uint8Array with the data read from the storage buffer

***

### readPixels()

> **readPixels**(`x`, `y`, `width`, `height`, `_hasAlpha?`, `flushRenderer?`, `data?`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3048](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3048)

Reads pixels from the current frame buffer. Please note that this function can be slow

#### Parameters

##### x

`number`

defines the x coordinate of the rectangle where pixels must be read

##### y

`number`

defines the y coordinate of the rectangle where pixels must be read

##### width

`number`

defines the width of the rectangle where pixels must be read

##### height

`number`

defines the height of the rectangle where pixels must be read

##### \_hasAlpha?

`boolean` = `true`

defines whether the output should have alpha or not (defaults to true)

##### flushRenderer?

`boolean` = `true`

true to flush the renderer from the pending commands before reading the pixels

##### data?

[`Nullable`](../type-aliases/Nullable.md)\<`Uint8Array`\<`ArrayBufferLike`\>\> = `null`

defines the data to fill with the read pixels (if not provided, a new one will be created)

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

a ArrayBufferView promise (Uint8Array) containing RGBA colors

#### Overrides

`ThinWebGPUEngine.readPixels`

***

### registerView()

> **registerView**(`canvas`, `camera?`, `clearBeforeCopy?`): [`EngineView`](EngineView.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L47)

**`Since`**

Register a new child canvas

#### Parameters

##### canvas

`HTMLCanvasElement`

defines the canvas to register

##### camera?

[`Camera`](Camera.md) \| [`Camera`](Camera.md)[]

defines an optional camera or array of cameras to use with this canvas (it will overwrite the scene.activeCamera / scene.activeCameras for this view). Support for array of cameras

##### clearBeforeCopy?

`boolean`

Indicates if the destination view canvas should be cleared before copying the parent canvas. Can help if the scene clear color has alpha \< 1

#### Returns

[`EngineView`](EngineView.md)

the associated view

#### Inherited from

`ThinWebGPUEngine.registerView`

***

### releaseComputeEffects()

> **releaseComputeEffects**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L92)

Forces the engine to release all cached compute effects. This means that next effect compilation will have to be done completely even if a similar effect was already compiled

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.releaseComputeEffects`

***

### releaseEffects()

> **releaseEffects**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2288)

Force the engine to release all cached effects. This means that next effect compilation will have to be done completely even if a similar effect was already compiled

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.releaseEffects`

***

### releaseRenderPassId()

> **releaseRenderPassId**(`id`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts#L29)

Releases a render pass id

#### Parameters

##### id

`number`

id of the render pass to release

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.releaseRenderPassId`

***

### resetTextureCache()

> **resetTextureCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1951](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1951)

Reset the texture cache to empty state

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.resetTextureCache`

***

### resize()

> **resize**(`forceSetSize?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2154)

Resize the view according to the canvas' size

#### Parameters

##### forceSetSize?

`boolean` = `false`

true to force setting the sizes of the underlying canvas

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.resize`

***

### resizeImageBitmap()

> **resizeImageBitmap**(`image`, `bufferWidth`, `bufferHeight`): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1162)

Resize an image and returns the image data as an uint8array

#### Parameters

##### image

`HTMLImageElement` \| `ImageBitmap`

image to resize

##### bufferWidth

`number`

destination buffer width

##### bufferHeight

`number`

destination buffer height

#### Returns

`Uint8Array`

an uint8array containing RGBA values of bufferWidth * bufferHeight size

#### Overrides

`ThinWebGPUEngine.resizeImageBitmap`

***

### resolveFramebuffer()

> **resolveFramebuffer**(`texture`, `resolveColors?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3558)

Resolves the MSAA texture of the render target into its non-MSAA version.
Note that if "texture" is not a MSAA render target, no resolve is performed.

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target texture containing the MSAA texture to resolve

##### resolveColors?

`boolean` = `true`

If true, resolve the color textures (default: true) - still subject to texture.resolveMSAAColors

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.resolveFramebuffer`

***

### resolveMultiFramebuffer()

#### Call Signature

> **resolveMultiFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L48)

Resolves the MSAA textures of the (multi) render target into their non-MSAA version.
Note that if "texture" is not a MSAA render target, no resolve is performed.

##### Parameters

###### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target texture containing the MSAA textures to resolve

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.resolveMultiFramebuffer`

#### Call Signature

> **resolveMultiFramebuffer**(`texture`, `resolveColors?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L49)

Resolves the MSAA textures of the (multi) render target into their non-MSAA version.
Note that if "texture" is not a MSAA render target, no resolve is performed.

##### Parameters

###### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target texture containing the MSAA textures to resolve

###### resolveColors?

`boolean`

If true, resolve the color textures (default: true) - still subject to texture.resolveMSAAColors

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.resolveMultiFramebuffer`

***

### restoreDefaultFramebuffer()

> **restoreDefaultFramebuffer**(`unbindOnly?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3583)

Unbind the current render target and bind the default framebuffer

#### Parameters

##### unbindOnly?

`boolean`

defines a boolean indicating that the function should only unbind the current render target without binding the default framebuffer

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.restoreDefaultFramebuffer`

***

### restoreSingleAttachment()

#### Call Signature

> **restoreSingleAttachment**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L68)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is the canvas frame buffer

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.restoreSingleAttachment`

#### Call Signature

> **restoreSingleAttachment**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L69)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is the canvas frame buffer

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.restoreSingleAttachment`

***

### restoreSingleAttachmentForRenderTarget()

#### Call Signature

> **restoreSingleAttachmentForRenderTarget**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L74)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is not the canvas frame buffer

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.restoreSingleAttachmentForRenderTarget`

#### Call Signature

> **restoreSingleAttachmentForRenderTarget**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L75)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is not the canvas frame buffer

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.restoreSingleAttachmentForRenderTarget`

***

### restoreStencilState()

> **restoreStencilState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L172)

Restores the state of the stencil buffer

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.restoreStencilState`

***

### runRenderLoop()

> **runRenderLoop**(`renderFunction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1086](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1086)

Register and execute a render loop. The engine can have more than one render function

#### Parameters

##### renderFunction

() => `void`

defines the function to continuously execute

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.runRenderLoop`

***

### setAlphaConstants()

> **setAlphaConstants**(`r`, `g`, `b`, `a`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L56)

Sets alpha constants used by some alpha blending modes

#### Parameters

##### r

`number`

defines the red component

##### g

`number`

defines the green component

##### b

`number`

defines the blue component

##### a

`number`

defines the alpha component

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setAlphaConstants`

***

### setAlphaEquation()

> **setAlphaEquation**(`equation`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.alpha.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.alpha.types.ts#L11)

Sets the current alpha equation

#### Parameters

##### equation

`number`

defines the equation to use (one of the Engine.ALPHA_EQUATION_XXX)

##### targetIndex?

`number`

defines the index of the target to set the equation for (default is 0)

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setAlphaEquation`

***

### setAlphaMode()

#### Call Signature

> **setAlphaMode**(`mode`, `noDepthWriteChange?`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.alpha.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.alpha.types.ts#L15)

Sets the current alpha mode

##### Parameters

###### mode

`number`

defines the mode to use (one of the Engine.ALPHA_XXX)

###### noDepthWriteChange?

`boolean`

defines if depth writing state should remains unchanged (false by default)

###### targetIndex?

`number`

defines the index of the target to set the alpha mode for (default is 0)

##### Returns

`void`

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering

##### Inherited from

`ThinWebGPUEngine.setAlphaMode`

#### Call Signature

> **setAlphaMode**(`mode`, `noDepthWriteChange?`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.alpha.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.alpha.types.ts#L13)

Sets the current alpha mode

##### Parameters

###### mode

`number`

defines the mode to use (one of the Engine.ALPHA_XXX)

###### noDepthWriteChange?

`boolean`

defines if depth writing state should remains unchanged (false by default)

###### targetIndex?

`number`

defines the index of the target to set the alpha mode for (default is 0)

##### Returns

`void`

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering

##### Inherited from

`ThinWebGPUEngine.setAlphaMode`

***

### setColorWrite()

> **setColorWrite**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1383](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1383)

Enable or disable color writing

#### Parameters

##### enable

`boolean`

defines the state to set

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.setColorWrite`

***

### setCompressedTextureExclusions()

> **setCompressedTextureExclusions**(`skippedFiles`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts#L27)

Set the compressed texture extensions or file names to skip.

#### Parameters

##### skippedFiles

`string`[]

defines the list of those texture files you want to skip
Example: [".dds", ".env", "myfile.png"]

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setCompressedTextureExclusions`

***

### setDepthBuffer()

> **setDepthBuffer**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1111)

Enable or disable depth buffering

#### Parameters

##### enable

`boolean`

defines the state to set

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setDepthBuffer`

***

### setDepthFunction()

> **setDepthFunction**(`depthFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L15)

Sets the current depth function

#### Parameters

##### depthFunc

`number`

defines the function to use

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setDepthFunction`

***

### setDepthFunctionToGreater()

> **setDepthFunctionToGreater**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L20)

Sets the current depth function to GREATER

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setDepthFunctionToGreater`

***

### setDepthFunctionToGreaterOrEqual()

> **setDepthFunctionToGreaterOrEqual**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L25)

Sets the current depth function to GEQUAL

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setDepthFunctionToGreaterOrEqual`

***

### setDepthFunctionToLess()

> **setDepthFunctionToLess**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L30)

Sets the current depth function to LESS

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setDepthFunctionToLess`

***

### setDepthFunctionToLessOrEqual()

> **setDepthFunctionToLessOrEqual**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L35)

Sets the current depth function to LEQUAL

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setDepthFunctionToLessOrEqual`

***

### setDepthStencilTexture()

#### Call Signature

> **setDepthStencilTexture**(`channel`, `uniform`, `texture`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTargetTexture.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.renderTargetTexture.types.ts#L13)

Sets a depth stencil texture from a render target to the according uniform.

##### Parameters

###### channel

`number`

The texture channel

###### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

The uniform to set

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

The render target texture containing the depth stencil texture to apply

###### name?

`string`

The texture name

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.setDepthStencilTexture`

#### Call Signature

> **setDepthStencilTexture**(`channel`, `uniform`, `texture`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetTexture.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetTexture.types.ts#L13)

Sets a depth stencil texture from a render target to the according uniform.

##### Parameters

###### channel

`number`

The texture channel

###### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

The uniform to set

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

The render target texture containing the depth stencil texture to apply

###### name?

`string`

The texture name

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.setDepthStencilTexture`

***

### setDepthWrite()

> **setDepthWrite**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L47)

Enable or disable depth writing

#### Parameters

##### enable

`boolean`

defines the state to set

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setDepthWrite`

***

### setDitheringState()

> **setDitheringState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3631)

Set the dithering state (not applicable in WebGPU)

#### Returns

`void`

***

### setExternalTexture()

> **setExternalTexture**(`name`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4072](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4072)

Sets an internal texture to the according uniform.

#### Parameters

##### name

`string`

The name of the uniform in the effect

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`ExternalTexture`](ExternalTexture.md)\>

The texture to apply

#### Returns

`void`

***

### setHardwareScalingLevel()

> **setHardwareScalingLevel**(`level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2048](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2048)

Defines the hardware scaling level.
By default the hardware scaling level is computed from the window device ratio.
if level = 1 then the engine will render at the exact resolution of the canvas. If level = 0.5 then the engine will render at twice the size of the canvas.

#### Parameters

##### level

`number`

defines the level to use

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setHardwareScalingLevel`

***

### setRasterizerState()

> **setRasterizerState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3638](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3638)

Set the rasterizer state (not applicable in WebGPU)

#### Returns

`void`

***

### setSize()

> **setSize**(`width`, `height`, `forceSetSize?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1283)

Force a specific size of the canvas

#### Parameters

##### width

`number`

defines the new canvas' width

##### height

`number`

defines the new canvas' height

##### forceSetSize?

`boolean` = `false`

true to force setting the sizes of the underlying canvas

#### Returns

`boolean`

true if the size was changed

#### Overrides

`ThinWebGPUEngine.setSize`

***

### setState()

> **setState**(`culling`, `zOffset?`, `force?`, `reverseSide?`, `cullBackFaces?`, `stencil?`, `zOffsetUnits?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3685)

Set various states to the webGL context

#### Parameters

##### culling

`boolean`

defines culling state: true to enable culling, false to disable it

##### zOffset?

`number` = `0`

defines the value to apply to zOffset (0 by default)

##### force?

`boolean`

defines if states must be applied even if cache is up to date

##### reverseSide?

`boolean` = `false`

defines if culling must be reversed (CCW if false, CW if true)

##### cullBackFaces?

`boolean`

true to cull back faces, false to cull front faces (if culling is enabled)

##### stencil?

[`IStencilState`](../interfaces/IStencilState.md)

stencil states to set

##### zOffsetUnits?

`number` = `0`

defines the value to apply to zOffsetUnits (0 by default)

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.setState`

***

### setStateCullFaceType()

> **setStateCullFaceType**(`cullBackFaces?`, `force?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3668](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3668)

Sets the type of faces to cull

#### Parameters

##### cullBackFaces?

`boolean`

true to cull back faces, false to cull front faces (if culling is enabled)

##### force?

`boolean` = `false`

defines if states must be applied even if cache is up to date

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.setStateCullFaceType`

***

### setStencilBackFunction()

> **setStencilBackFunction**(`stencilFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L90)

Sets the current back stencil function

#### Parameters

##### stencilFunc

`number`

defines the new back stencil function to use

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilBackFunction`

***

### setStencilBackOperationDepthFail()

> **setStencilBackOperationDepthFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L150)

Sets the back stencil operation to use when depth fails

#### Parameters

##### operation

`number`

defines the back stencil operation to use when depth fails

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilBackOperationDepthFail`

***

### setStencilBackOperationFail()

> **setStencilBackOperationFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L138)

Sets the back stencil operation to use when stencil fails

#### Parameters

##### operation

`number`

defines the back stencil operation to use when stencil fails

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilBackOperationFail`

***

### setStencilBackOperationPass()

> **setStencilBackOperationPass**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L162)

Sets the back stencil operation to use when stencil passes

#### Parameters

##### operation

`number`

defines the back stencil operation to use when stencil passes

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilBackOperationPass`

***

### setStencilBuffer()

> **setStencilBuffer**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L43)

Enable or disable the stencil buffer

#### Parameters

##### enable

`boolean`

defines if the stencil buffer must be enabled or disabled

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilBuffer`

***

### setStencilFunction()

> **setStencilFunction**(`stencilFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L84)

Sets the current stencil function

#### Parameters

##### stencilFunc

`number`

defines the new stencil function to use

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilFunction`

***

### setStencilFunctionMask()

> **setStencilFunctionMask**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L102)

Sets the current stencil mask

#### Parameters

##### mask

`number`

defines the new stencil mask to use

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilFunctionMask`

***

### setStencilFunctionReference()

> **setStencilFunctionReference**(`reference`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L96)

Sets the current stencil reference

#### Parameters

##### reference

`number`

defines the new stencil reference to use

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilFunctionReference`

***

### setStencilMask()

> **setStencilMask**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L54)

Sets the current stencil mask

#### Parameters

##### mask

`number`

defines the new stencil mask to use

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilMask`

***

### setStencilOperationDepthFail()

> **setStencilOperationDepthFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L144)

Sets the stencil operation to use when depth fails

#### Parameters

##### operation

`number`

defines the stencil operation to use when depth fails

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilOperationDepthFail`

***

### setStencilOperationFail()

> **setStencilOperationFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L132)

Sets the stencil operation to use when stencil fails

#### Parameters

##### operation

`number`

defines the stencil operation to use when stencil fails

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilOperationFail`

***

### setStencilOperationPass()

> **setStencilOperationPass**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L156)

Sets the stencil operation to use when stencil passes

#### Parameters

##### operation

`number`

defines the stencil operation to use when stencil passes

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setStencilOperationPass`

***

### setStorageBuffer()

> **setStorageBuffer**(`name`, `buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4257)

Sets a storage buffer in the shader

#### Parameters

##### name

`string`

Defines the name of the storage buffer as defined in the shader

##### buffer

[`Nullable`](../type-aliases/Nullable.md)\<[`StorageBuffer`](StorageBuffer.md)\>

Defines the value to give to the uniform

#### Returns

`void`

***

### setTexture()

> **setTexture**(`channel`, `unused`, `texture`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2796](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2796)

Sets a texture to the according uniform.

#### Parameters

##### channel

`number`

The texture channel

##### unused

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

unused parameter

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

The texture to apply

##### name

`string`

The name of the uniform in the effect

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.setTexture`

***

### setTextureArray()

> **setTextureArray**(`channel`, `unused`, `textures`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2807](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2807)

Sets an array of texture to the WebGPU context

#### Parameters

##### channel

`number`

defines the channel where the texture array must be set

##### unused

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

unused parameter

##### textures

[`BaseTexture`](BaseTexture.md)[]

defines the array of textures to bind

##### name

`string`

name of the channel

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.setTextureArray`

***

### setTextureFormatToUse()

> **setTextureFormatToUse**(`formatsAvailable`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts#L49)

Set the compressed texture format to use, based on the formats you have, and the formats
supported by the hardware / browser.

Khronos Texture Container (.ktx) files are used to support this.  This format has the
advantage of being specifically designed for OpenGL.  Header elements directly correspond
to API arguments needed to compressed textures.  This puts the burden on the container
generator to house the arcane code for determining these for current & future formats.

for description see https://www.khronos.org/opengles/sdk/tools/KTX/
for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/

Note: The result of this call is not taken into account when a texture is base64.

#### Parameters

##### formatsAvailable

`string`[]

defines the list of those format families you have created
on your server.  Syntax: '-' + format family + '.ktx'.  (Case and order do not matter.)

Current families are astc, dxt, pvrtc, etc2, & etc1.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

The extension selected.

#### Inherited from

`ThinWebGPUEngine.setTextureFormatToUse`

***

### setTextureFromPostProcess()

> **setTextureFromPostProcess**(`channel`, `postProcess`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.types.ts#L12)

Sets a texture to the context from a postprocess

#### Parameters

##### channel

`number`

defines the channel to use

##### postProcess

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

defines the source postprocess

##### name

`string`

name of the channel

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setTextureFromPostProcess`

***

### setTextureFromPostProcessOutput()

> **setTextureFromPostProcessOutput**(`channel`, `postProcess`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.types.ts#L20)

Binds the output of the passed in post process to the texture channel specified

#### Parameters

##### channel

`number`

The channel the texture should be bound to

##### postProcess

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

The post process which's output should be bound

##### name

`string`

name of the channel

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setTextureFromPostProcessOutput`

***

### setTextureSampler()

> **setTextureSampler**(`name`, `sampler`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4089](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4089)

Sets a texture sampler to the according uniform.

#### Parameters

##### name

`string`

The name of the uniform in the effect

##### sampler

[`Nullable`](../type-aliases/Nullable.md)\<[`TextureSampler`](TextureSampler.md)\>

The sampler to apply

#### Returns

`void`

***

### setViewport()

> **setViewport**(`viewport`, `requiredWidth?`, `requiredHeight?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1520)

Set the WebGL's viewport

#### Parameters

##### viewport

`IViewportLike`

defines the viewport element to be used

##### requiredWidth?

`number`

defines the width required for rendering. If not provided the rendering canvas' width is used

##### requiredHeight?

`number`

defines the height required for rendering. If not provided the rendering canvas' height is used

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setViewport`

***

### setZOffset()

> **setZOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1119)

Set the z offset Factor to apply to current rendering

#### Parameters

##### value

`number`

defines the offset to apply

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setZOffset`

***

### setZOffsetUnits()

> **setZOffsetUnits**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1136)

Set the z offset Units to apply to current rendering

#### Parameters

##### value

`number`

defines the offset to apply

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.setZOffsetUnits`

***

### snapshotRenderingReset()

> **snapshotRenderingReset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L428)

Creates a new snapshot at the next frame using the current snapshotRenderingMode

#### Returns

`void`

***

### stopRenderLoop()

> **stopRenderLoop**(`renderFunction?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:880](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L880)

stop executing a render loop function and remove it from the execution array

#### Parameters

##### renderFunction?

() => `void`

defines the function to be removed. If not provided all functions will be removed.

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.stopRenderLoop`

***

### switchFullscreen()

> **switchFullscreen**(`requestPointerLock`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1181)

Toggle full screen mode

#### Parameters

##### requestPointerLock

`boolean`

defines if a pointer lock should be requested from the user

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.switchFullscreen`

***

### unBindFramebuffer()

> **unBindFramebuffer**(`texture`, `disableGenerateMipMaps?`, `onBeforeUnbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:3503](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L3503)

Unbind the current render target texture from the WebGPU context

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

defines the render target wrapper to unbind

##### disableGenerateMipMaps?

`boolean` = `false`

defines a boolean indicating that mipmaps must not be generated

##### onBeforeUnbind?

() => `void`

defines a function which will be called before the effective unbind

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.unBindFramebuffer`

***

### unbindInstanceAttributes()

> **unbindInstanceAttributes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1826](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1826)

Unbind all instance attributes

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.unbindInstanceAttributes`

***

### unBindMultiColorAttachmentFramebuffer()

#### Call Signature

> **unBindMultiColorAttachmentFramebuffer**(`rtWrapper`, `disableGenerateMipMaps`, `onBeforeUnbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L15)

Unbind a list of render target textures from the webGL context
This is used only when drawBuffer extension or webGL2 are active

##### Parameters

###### rtWrapper

[`RenderTargetWrapper`](RenderTargetWrapper.md)

defines the render target wrapper to unbind

###### disableGenerateMipMaps

`boolean`

defines a boolean indicating that mipmaps must not be generated

###### onBeforeUnbind?

() => `void`

defines a function which will be called before the effective unbind

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.unBindMultiColorAttachmentFramebuffer`

#### Call Signature

> **unBindMultiColorAttachmentFramebuffer**(`rtWrapper`, `disableGenerateMipMaps`, `onBeforeUnbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L15)

Unbind a list of render target textures from the webGL context
This is used only when drawBuffer extension or webGL2 are active

##### Parameters

###### rtWrapper

[`RenderTargetWrapper`](RenderTargetWrapper.md)

defines the render target wrapper to unbind

###### disableGenerateMipMaps

`boolean`

defines a boolean indicating that mipmaps must not be generated

###### onBeforeUnbind?

() => `void`

defines a function which will be called before the effective unbind

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.unBindMultiColorAttachmentFramebuffer`

***

### unRegisterView()

> **unRegisterView**(`canvas`): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L54)

Remove a registered child canvas

#### Parameters

##### canvas

`HTMLCanvasElement`

defines the canvas to remove

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the current engine

#### Inherited from

`ThinWebGPUEngine.unRegisterView`

***

### updateDynamicIndexBuffer()

> **updateDynamicIndexBuffer**(`indexBuffer`, `indices`, `offset?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1718](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1718)

Update a dynamic index buffer

#### Parameters

##### indexBuffer

[`DataBuffer`](DataBuffer.md)

defines the target index buffer

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the data to update

##### offset?

`number` = `0`

defines the offset in the target index buffer where update should start

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.updateDynamicIndexBuffer`

***

### updateDynamicTexture()

#### Call Signature

> **updateDynamicTexture**(`texture`, `source`, `invertY?`, `premulAlpha?`, `format?`, `forceBindTexture?`, `allowGPUOptimization?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.types.ts#L27)

Update the content of a dynamic texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### source

[`ICanvas`](../interfaces/ICanvas.md) \| [`ImageSource`](../type-aliases/ImageSource.md)

defines the source containing the data

###### invertY?

`boolean`

defines if data must be stored with Y axis inverted

###### premulAlpha?

`boolean`

defines if alpha is stored as premultiplied

###### format?

`number`

defines the format of the data

###### forceBindTexture?

`boolean`

if the texture should be forced to be bound eg. after a graphics context loss (Default: false)

###### allowGPUOptimization?

`boolean`

true to allow some specific GPU optimizations (subject to engine feature "allowGPUOptimizationsForGUI" being true)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateDynamicTexture`

#### Call Signature

> **updateDynamicTexture**(`texture`, `source`, `invertY?`, `premulAlpha?`, `format?`, `forceBindTexture?`, `allowGPUOptimization?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.types.ts#L27)

Update the content of a dynamic texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### source

[`ICanvas`](../interfaces/ICanvas.md) \| [`ImageSource`](../type-aliases/ImageSource.md)

defines the source containing the data

###### invertY?

`boolean`

defines if data must be stored with Y axis inverted

###### premulAlpha?

`boolean`

defines if alpha is stored as premultiplied

###### format?

`number`

defines the format of the data

###### forceBindTexture?

`boolean`

if the texture should be forced to be bound eg. after a graphics context loss (Default: false)

###### allowGPUOptimization?

`boolean`

true to allow some specific GPU optimizations (subject to engine feature "allowGPUOptimizationsForGUI" being true)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateDynamicTexture`

***

### updateDynamicVertexBuffer()

> **updateDynamicVertexBuffer**(`vertexBuffer`, `data`, `byteOffset?`, `byteLength?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1738)

Updates a dynamic vertex buffer.

#### Parameters

##### vertexBuffer

[`DataBuffer`](DataBuffer.md)

the vertex buffer to update

##### data

[`DataArray`](../type-aliases/DataArray.md)

the data used to update the vertex buffer

##### byteOffset?

`number`

the byte offset of the data

##### byteLength?

`number`

the byte length of the data

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.updateDynamicVertexBuffer`

***

### updateMultipleRenderTargetTextureSampleCount()

#### Call Signature

> **updateMultipleRenderTargetTextureSampleCount**(`rtWrapper`, `samples`, `initializeBuffers?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiRender.types.ts#L35)

Update the sample count for a given multiple render target texture

##### Parameters

###### rtWrapper

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

defines the render target wrapper to update

###### samples

`number`

defines the sample count to set

###### initializeBuffers?

`boolean`

if set to true, the engine will make an initializing call of drawBuffers

##### Returns

`number`

the effective sample count (could be 0 if multisample render targets are not supported)

##### See

https://doc.babylonjs.com/setup/support/webGL2#multisample-render-targets

##### Inherited from

`ThinWebGPUEngine.updateMultipleRenderTargetTextureSampleCount`

#### Call Signature

> **updateMultipleRenderTargetTextureSampleCount**(`rtWrapper`, `samples`, `initializeBuffers?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L35)

Update the sample count for a given multiple render target texture

##### Parameters

###### rtWrapper

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

defines the render target wrapper to update

###### samples

`number`

defines the sample count to set

###### initializeBuffers?

`boolean`

if set to true, the engine will make an initializing call of drawBuffers

##### Returns

`number`

the effective sample count (could be 0 if multisample render targets are not supported)

##### See

https://doc.babylonjs.com/setup/support/webGL2#multisample-render-targets

##### Inherited from

`ThinWebGPUEngine.updateMultipleRenderTargetTextureSampleCount`

***

### updateRawCubeTexture()

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L43)

Update a raw cube texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the data to store

###### format

`number`

defines the data format

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawCubeTexture`

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L54)

Update a raw cube texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the data to store

###### format

`number`

defines the data format

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawCubeTexture`

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`, `level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L66)

Update a raw cube texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the data to store

###### format

`number`

defines the data format

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

###### level

`number`

defines which level of the texture to update

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawCubeTexture`

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L69)

Update a raw cube texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the data to store

###### format

`number`

defines the data format

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawCubeTexture`

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L80)

Update a raw cube texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the data to store

###### format

`number`

defines the data format

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawCubeTexture`

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`, `level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L92)

Update a raw cube texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the data to store

###### format

`number`

defines the data format

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

###### level

`number`

defines which level of the texture to update

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawCubeTexture`

***

### updateRawTexture()

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L14)

Update a raw texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store in the texture

###### format

`number`

defines the format of the data

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture`

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`, `compression`, `type`, `useSRGBBuffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L26)

Update a raw texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store in the texture

###### format

`number`

defines the format of the data

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### useSRGBBuffer

`boolean`

defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture`

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L14)

Update a raw texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store in the texture

###### format

`number`

defines the format of the data

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture`

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`, `compression`, `type`, `useSRGBBuffer`, `mipLevel?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L27)

Update a raw texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store in the texture

###### format

`number`

defines the format of the data

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the compression used (null by default)

###### type

`number`

defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)

###### useSRGBBuffer

`boolean`

defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).

###### mipLevel?

`number`

defines which mipLevel of the texture is going to be updated

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture`

***

### updateRawTexture2DArray()

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L153)

Update a raw 2D array texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture2DArray`

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L164)

Update a raw 2D array texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the used compression (can be null)

###### textureType

`number`

defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture2DArray`

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L179)

Update a raw 2D array texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture2DArray`

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L190)

Update a raw 2D array texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the used compression (can be null)

###### textureType

`number`

defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture2DArray`

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`, `mipLevel?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L209)

Update a raw 2D array texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the used compression (can be null)

###### textureType

`number`

defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)

###### mipLevel?

`number`

defines which mipLevel of the texture is going to be updated

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture2DArray`

***

### updateRawTexture3D()

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L133)

Update a raw 3D texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture3D`

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.rawTexture.types.ts#L144)

Update a raw 3D texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the used compression (can be null)

###### textureType

`number`

defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture3D`

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L159)

Update a raw 3D texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture3D`

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.types.ts#L170)

Update a raw 3D texture

##### Parameters

###### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

###### data

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

defines the data to store

###### format

`number`

defines the data format

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

###### compression

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the used compression (can be null)

###### textureType

`number`

defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateRawTexture3D`

***

### updateRenderTargetTextureSampleCount()

#### Call Signature

> **updateRenderTargetTextureSampleCount**(`rtWrapper`, `samples`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTarget.types.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.renderTarget.types.ts#L23)

Updates the sample count of a render target texture

##### Parameters

###### rtWrapper

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

defines the render target wrapper to update

###### samples

`number`

defines the sample count to set

##### Returns

`number`

the effective sample count (could be 0 if multisample render targets are not supported)

##### See

https://doc.babylonjs.com/setup/support/webGL2#multisample-render-targets

##### Inherited from

`ThinWebGPUEngine.updateRenderTargetTextureSampleCount`

#### Call Signature

> **updateRenderTargetTextureSampleCount**(`rtWrapper`, `samples`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.types.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.types.ts#L23)

Updates the sample count of a render target texture

##### Parameters

###### rtWrapper

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

defines the render target wrapper to update

###### samples

`number`

defines the sample count to set

##### Returns

`number`

the effective sample count (could be 0 if multisample render targets are not supported)

##### See

https://doc.babylonjs.com/setup/support/webGL2#multisample-render-targets

##### Inherited from

`ThinWebGPUEngine.updateRenderTargetTextureSampleCount`

***

### updateStorageBuffer()

> **updateStorageBuffer**(`buffer`, `data`, `byteOffset?`, `byteLength?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:4127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L4127)

Updates a storage buffer

#### Parameters

##### buffer

[`DataBuffer`](DataBuffer.md)

the storage buffer to update

##### data

[`DataArray`](../type-aliases/DataArray.md)

the data used to update the storage buffer

##### byteOffset?

`number`

the byte offset of the data

##### byteLength?

`number`

the byte length of the data

#### Returns

`void`

***

### updateTextureComparisonFunction()

> **updateTextureComparisonFunction**(`texture`, `comparisonFunction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2347)

Update the comparison function of a texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

##### comparisonFunction

`number`

defines the comparison function to set

#### Returns

`void`

***

### updateTextureData()

> **updateTextureData**(`texture`, `imageData`, `xOffset`, `yOffset`, `width`, `height`, `faceIndex?`, `lod?`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2928](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2928)

Update a portion of an internal texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

##### imageData

`ArrayBufferView`

defines the data to store into the texture

##### xOffset

`number`

defines the x coordinates of the update rectangle

##### yOffset

`number`

defines the y coordinates of the update rectangle

##### width

`number`

defines the width of the update rectangle

##### height

`number`

defines the height of the update rectangle

##### faceIndex?

`number` = `0`

defines the face index if texture is a cube (0 by default)

##### lod?

`number` = `0`

defines the lod level to update (0 by default)

##### generateMipMaps?

`boolean` = `false`

defines whether to generate mipmaps or not

#### Returns

`void`

***

### updateTextureDimensions()

> **updateTextureDimensions**(`texture`, `width`, `height`, `depth?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2706](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2706)

Update the dimensions of a texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

texture to update

##### width

`number`

new width of the texture

##### height

`number`

new height of the texture

##### depth?

`number` = `1`

new depth of the texture

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.updateTextureDimensions`

***

### updateTextureSamplingMode()

> **updateTextureSamplingMode**(`samplingMode`, `texture`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2671](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2671)

Update the sampling mode of a given texture

#### Parameters

##### samplingMode

`number`

defines the required sampling mode

##### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

##### generateMipMaps?

`boolean` = `false`

defines whether to generate mipmaps for the texture

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.updateTextureSamplingMode`

***

### updateTextureWrappingMode()

> **updateTextureWrappingMode**(`texture`, `wrapU`, `wrapV?`, `wrapR?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2687](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2687)

Update the sampling mode of a given texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

defines the texture to update

##### wrapU

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

defines the texture wrap mode of the u coordinates

##### wrapV?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the texture wrap mode of the v coordinates

##### wrapR?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the texture wrap mode of the r coordinates

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.updateTextureWrappingMode`

***

### updateUniformBuffer()

> **updateUniformBuffer**(`uniformBuffer`, `elements`, `offset?`, `count?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1898)

Update an existing uniform buffer

#### Parameters

##### uniformBuffer

[`DataBuffer`](DataBuffer.md)

defines the target uniform buffer

##### elements

[`FloatArray`](../type-aliases/FloatArray.md)

defines the content to update

##### offset?

`number`

defines the offset in the uniform buffer where update should start

##### count?

`number`

defines the size of the data to update

#### Returns

`void`

#### See

https://doc.babylonjs.com/setup/support/webGL2#uniform-buffer-objets

#### Overrides

`ThinWebGPUEngine.updateUniformBuffer`

***

### updateVideoTexture()

#### Call Signature

> **updateVideoTexture**(`texture`, `video`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.videoTexture.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.videoTexture.types.ts#L13)

Update a video texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### video

`HTMLVideoElement` \| [`Nullable`](../type-aliases/Nullable.md)\<[`ExternalTexture`](ExternalTexture.md)\>

defines the video element to use

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateVideoTexture`

#### Call Signature

> **updateVideoTexture**(`texture`, `video`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.videoTexture.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.videoTexture.types.ts#L13)

Update a video texture

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

defines the texture to update

###### video

`HTMLVideoElement` \| [`Nullable`](../type-aliases/Nullable.md)\<[`ExternalTexture`](ExternalTexture.md)\>

defines the video element to use

###### invertY

`boolean`

defines if data must be stored with Y axis inverted

##### Returns

`void`

##### Inherited from

`ThinWebGPUEngine.updateVideoTexture`

***

### updateWrappedWebGLTexture()

> **updateWrappedWebGLTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2649)

Throws because the engine is WebGPU. Use [updateWrappedWebGPUTexture](#updatewrappedwebgputexture) instead.

#### Returns

`void`

***

### updateWrappedWebGPUTexture()

> **updateWrappedWebGPUTexture**(`internalTexture`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2604](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2604)

Replaces the underlying GPUTexture of a texture previously created via [wrapWebGPUTexture](#wrapwebgputexture), preserving the
InternalTexture identity.

Intended for the device-loss / device-restored flow: when the host recreates its external resource on the new
GPU device, it calls this method to repoint Babylon's wrapper at the new handle without losing references held
by materials, render-target wrappers, particle systems, etc.

The new GPUTexture must have the same dimensions as the original. To change dimensions, dispose the wrapped
texture and call [wrapWebGPUTexture](#wrapwebgputexture) again.

Throws if the target was not produced by [wrapWebGPUTexture](#wrapwebgputexture), or if the new GPUTexture's dimensions don't
match.

#### Parameters

##### internalTexture

[`InternalTexture`](InternalTexture.md)

defines the wrapped InternalTexture to repoint

##### texture

`GPUTexture`

defines the new GPUTexture to wrap

#### Returns

`void`

***

### wipeCaches()

> **wipeCaches**(`bruteForce?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:1348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L1348)

Force the entire cache to be cleared
You should not have to use this function unless your engine needs to share the WebGPU context with another engine

#### Parameters

##### bruteForce?

`boolean`

defines a boolean to force clearing ALL caches (including stencil, detoh and alpha states)

#### Returns

`void`

#### Overrides

`ThinWebGPUEngine.wipeCaches`

***

### wrapWebGLTexture()

> **wrapWebGLTexture**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2642)

Wraps an external web gl texture in a Babylon texture.

#### Returns

[`InternalTexture`](InternalTexture.md)

the babylon internal texture

***

### wrapWebGPUTexture()

> **wrapWebGPUTexture**(`texture`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:2576](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L2576)

Wraps an external web gpu texture in a Babylon texture.

#### Parameters

##### texture

`GPUTexture`

defines the external texture

#### Returns

[`InternalTexture`](InternalTexture.md)

the babylon internal texture

***

### CreateAsync()

> `static` **CreateAsync**(`canvas`, `options?`): `Promise`\<`WebGPUEngine`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.pure.ts:606](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L606)

Create a new instance of the gpu engine asynchronously

#### Parameters

##### canvas

`HTMLCanvasElement`

Defines the canvas to use to display the result

##### options?

[`WebGPUEngineOptions`](../interfaces/WebGPUEngineOptions.md) = `{}`

Defines the options passed to the engine to create the GPU context dependencies

#### Returns

`Promise`\<`WebGPUEngine`\>

a promise that resolves with the created engine

***

### DefaultLoadingScreenFactory()

> `static` **DefaultLoadingScreenFactory**(`canvas`): [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2827](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2827)

Method called to create the default loading screen.
This can be overridden in your own app.

#### Parameters

##### canvas

`HTMLCanvasElement`

The rendering canvas element

#### Returns

[`ILoadingScreen`](../interfaces/ILoadingScreen.md)

#### Inherited from

`ThinWebGPUEngine.DefaultLoadingScreenFactory`

***

### MarkAllMaterialsAsDirty()

> `static` **MarkAllMaterialsAsDirty**(`flag`, `predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2861](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2861)

Will flag all materials in all scenes in all engines as dirty to trigger new shader compilation

#### Parameters

##### flag

`number`

defines which part of the materials must be marked as dirty

##### predicate?

(`mat`) => `boolean`

defines a predicate used to filter which materials should be affected

#### Returns

`void`

#### Inherited from

`ThinWebGPUEngine.MarkAllMaterialsAsDirty`
