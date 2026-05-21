[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinEngine

# Class: ThinEngine

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L111)

The base engine class (root of all engines)

## Extends

- [`AbstractEngine`](AbstractEngine.md)

## Extended by

- [`Engine`](Engine.md)

## Constructors

### Constructor

> **new ThinEngine**(`canvasOrContext`, `antialias?`, `options?`, `adaptToDeviceRatio?`): `ThinEngine`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L270)

Creates a new engine

#### Parameters

##### canvasOrContext

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement` \| `OffscreenCanvas` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`\>

defines the canvas or WebGL context to use for rendering. If you provide a WebGL context, Babylon.js will not hook events on the canvas (like pointers, keyboards, etc...) so no event observables will be available. This is mostly used when Babylon.js is used as a plugin on a system which already used the WebGL context

##### antialias?

`boolean`

defines whether anti-aliasing should be enabled (default value is "undefined", meaning that the browser may or may not enable it)

##### options?

[`EngineOptions`](../interfaces/EngineOptions.md)

defines further options to be sent to the getContext() function

##### adaptToDeviceRatio?

`boolean`

defines whether to adapt to the device's viewport characteristics (default: false)

#### Returns

`ThinEngine`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`constructor`](AbstractEngine.md#constructor)

## Properties

### activeView

> **activeView**: [`Nullable`](../type-aliases/Nullable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L61)

Gets the current engine view

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/multiCanvas

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`activeView`](AbstractEngine.md#activeview)

***

### adaptToDeviceRatio

> **adaptToDeviceRatio**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1984](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1984)

If set to true zooming in and out in the browser will rescale the hardware-scaling correctly.

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`adaptToDeviceRatio`](AbstractEngine.md#adapttodeviceratio)

***

### canvasTabIndex

> **canvasTabIndex**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L476)

Gets or sets the tab index to set to the rendering canvas. 1 is the minimum value to set to be able to capture keyboard events

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`canvasTabIndex`](AbstractEngine.md#canvastabindex)

***

### cullBackFaces

> **cullBackFaces**: [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2405)

Gets or sets a boolean indicating if back faces must be culled. If false, front faces are culled instead (true by default)
If non null, this takes precedence over the value from the material

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`cullBackFaces`](AbstractEngine.md#cullbackfaces)

***

### currentRenderPassId

> **currentRenderPassId**: `number` = `Constants.RENDERPASS_MAIN`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:463](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L463)

Gets or sets the current render pass id

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`currentRenderPassId`](AbstractEngine.md#currentrenderpassid)

***

### disableContextMenu

> **disableContextMenu**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:458](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L458)

Gets or sets a boolean to enable/disable the context menu (right-click) from appearing on the main canvas

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`disableContextMenu`](AbstractEngine.md#disablecontextmenu)

***

### disableManifestCheck

> **disableManifestCheck**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L453)

Gets or sets a boolean to enable/disable checking manifest if IndexedDB support is enabled (js will always consider the database is up to date)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`disableManifestCheck`](AbstractEngine.md#disablemanifestcheck)

***

### disablePerformanceMonitorInBackground

> **disablePerformanceMonitorInBackground**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L327)

Turn this value on if you want to pause FPS computation when in background

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`disablePerformanceMonitorInBackground`](AbstractEngine.md#disableperformancemonitorinbackground)

***

### disableUniformBuffers

> **disableUniformBuffers**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L175)

Gets or sets a boolean indicating that uniform buffers must be disabled even if they are supported

***

### disableVertexArrayObjects

> **disableVertexArrayObjects**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L332)

Gets or sets a boolean indicating that vertex array object must be disabled even if they are supported

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`disableVertexArrayObjects`](AbstractEngine.md#disablevertexarrayobjects)

***

### enableOfflineSupport

> **enableOfflineSupport**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:448](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L448)

Gets or sets a boolean to enable/disable IndexedDB support and avoid XHR on .manifest

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`enableOfflineSupport`](AbstractEngine.md#enableofflinesupport)

***

### enableUnpackFlipYCached

> **enableUnpackFlipYCached**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3272)

In case you are sharing the context with other applications, it might
be interested to not cache the unpack flip y state to ensure a consistent
value would be set.

***

### forcePOTTextures

> **forcePOTTextures**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L167)

Gets or sets a boolean that indicates if textures must be forced to power of 2 size even if not required

***

### hasOriginBottomLeft

> `readonly` **hasOriginBottomLeft**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:577](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L577)

Indicates that the origin of the texture/framebuffer space is the bottom left corner. If false, the origin is top left

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`hasOriginBottomLeft`](AbstractEngine.md#hasoriginbottomleft)

***

### hostInformation

> **hostInformation**: [`HostInformation`](../interfaces/HostInformation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:436](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L436)

Gets information about the current host

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`hostInformation`](AbstractEngine.md#hostinformation)

***

### inputElement

> **inputElement**: [`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L40)

Gets or sets the  HTML element to use for attaching events

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`inputElement`](AbstractEngine.md#inputelement)

***

### isFullscreen

> **isFullscreen**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L443)

Gets a boolean indicating if the engine is currently rendering in fullscreen mode

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isFullscreen`](AbstractEngine.md#isfullscreen)

***

### isNDCHalfZRange

> `readonly` **isNDCHalfZRange**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:572](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L572)

Indicates if the z range in NDC space is 0..1 (value: true) or -1..1 (value: false)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isNDCHalfZRange`](AbstractEngine.md#isndchalfzrange)

***

### isPointerLock

> **isPointerLock**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L468)

Gets a boolean indicating if the pointer is currently locked

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isPointerLock`](AbstractEngine.md#ispointerlock)

***

### loadingScreen

> **loadingScreen**: [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts#L24)

Gets or sets the current loading screen object

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`loadingScreen`](AbstractEngine.md#loadingscreen)

***

### loadingUIBackgroundColor

> **loadingUIBackgroundColor**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts#L36)

Sets the current loading screen background color

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`loadingUIBackgroundColor`](AbstractEngine.md#loadinguibackgroundcolor)

***

### loadingUIText

> **loadingUIText**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts#L30)

Sets the current loading screen text

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`loadingUIText`](AbstractEngine.md#loadinguitext)

***

### onAfterShaderCompilationObservable

> **onAfterShaderCompilationObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1137)

Observable raised when the engine has just compiled a shader

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onAfterShaderCompilationObservable`](AbstractEngine.md#onaftershadercompilationobservable)

***

### onAfterViewRenderObservable

> `readonly` **onAfterViewRenderObservable**: [`Observable`](Observable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L55)

Will be triggered after the view rendered

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onAfterViewRenderObservable`](AbstractEngine.md#onafterviewrenderobservable)

***

### onBeforeShaderCompilationObservable

> **onBeforeShaderCompilationObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1132)

Observable raised when the engine is about to compile a shader

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onBeforeShaderCompilationObservable`](AbstractEngine.md#onbeforeshadercompilationobservable)

***

### onBeforeTextureInitObservable

> **onBeforeTextureInitObservable**: [`Observable`](Observable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L753)

Observable event triggered before each texture is initialized

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onBeforeTextureInitObservable`](AbstractEngine.md#onbeforetextureinitobservable)

***

### onBeforeViewRenderObservable

> `readonly` **onBeforeViewRenderObservable**: [`Observable`](Observable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L51)

Will be triggered before the view renders

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onBeforeViewRenderObservable`](AbstractEngine.md#onbeforeviewrenderobservable)

***

### onBeginFrameObservable

> **onBeginFrameObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1142)

Observable raised when the engine begins a new frame

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onBeginFrameObservable`](AbstractEngine.md#onbeginframeobservable)

***

### onCanvasBlurObservable

> **onCanvasBlurObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L298)

Observable event triggered each time the canvas loses focus

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onCanvasBlurObservable`](AbstractEngine.md#oncanvasblurobservable)

***

### onCanvasFocusObservable

> **onCanvasFocusObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L302)

Observable event triggered each time the canvas gains focus

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onCanvasFocusObservable`](AbstractEngine.md#oncanvasfocusobservable)

***

### onCanvasPointerOutObservable

> **onCanvasPointerOutObservable**: [`Observable`](Observable.md)\<`PointerEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L317)

Observable event triggered each time the canvas receives pointerout event

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onCanvasPointerOutObservable`](AbstractEngine.md#oncanvaspointeroutobservable)

***

### onContextLostObservable

> **onContextLostObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1863](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1863)

Observable signaled when a context lost event is raised

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onContextLostObservable`](AbstractEngine.md#oncontextlostobservable)

***

### onContextRestoredObservable

> **onContextRestoredObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1867](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1867)

Observable signaled when a context restored event is raised

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onContextRestoredObservable`](AbstractEngine.md#oncontextrestoredobservable)

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2676)

An event triggered when the engine is disposed.

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onDisposeObservable`](AbstractEngine.md#ondisposeobservable)

***

### onEffectErrorObservable

> **onEffectErrorObservable**: [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `errors`: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L322)

Observable event triggered each time an effect compilation fails

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onEffectErrorObservable`](AbstractEngine.md#oneffecterrorobservable)

***

### onEndFrameObservable

> **onEndFrameObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1147)

Observable raised when the engine ends the current frame (requires a render loop, e.g. 'engine.runRenderLoop(...)')

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onEndFrameObservable`](AbstractEngine.md#onendframeobservable)

***

### onNewSceneAddedObservable

> **onNewSceneAddedObservable**: [`Observable`](Observable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L307)

Event raised when a new scene is created

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onNewSceneAddedObservable`](AbstractEngine.md#onnewsceneaddedobservable)

***

### onReleaseEffectsObservable

> `readonly` **onReleaseEffectsObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2681](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2681)

An event triggered when a global cleanup of all effects is required

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onReleaseEffectsObservable`](AbstractEngine.md#onreleaseeffectsobservable)

***

### onResizeObservable

> **onResizeObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L312)

Observable event triggered each time the rendering canvas is resized

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`onResizeObservable`](AbstractEngine.md#onresizeobservable)

***

### postProcesses

> **postProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L473)

Gets the list of created postprocesses

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`postProcesses`](AbstractEngine.md#postprocesses)

***

### premultipliedAlpha

> **premultipliedAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1979](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1979)

Defines whether the engine has been created with the premultipliedAlpha option on or not.

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`premultipliedAlpha`](AbstractEngine.md#premultipliedalpha)

***

### preventCacheWipeBetweenFrames

> **preventCacheWipeBetweenFrames**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:763](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L763)

Gets or sets a boolean indicating that cache can be kept between frames

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`preventCacheWipeBetweenFrames`](AbstractEngine.md#preventcachewipebetweenframes)

***

### renderEvenInBackground

> **renderEvenInBackground**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:758](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L758)

Gets or sets a boolean indicating if the engine must keep rendering even if the window is not in foreground

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`renderEvenInBackground`](AbstractEngine.md#rendereveninbackground)

***

### scenes

> **scenes**: [`Scene`](Scene.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:721](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L721)

Gets the list of created scenes

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`scenes`](AbstractEngine.md#scenes)

***

### skipFrameRender

> **skipFrameRender**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:928](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L928)

Skip frame rendering but keep the frame heartbeat (begin/end frame).
This is useful if you need all the plumbing but not the rendering work.
(for instance when capturing a screenshot where you do not want to mix rendering to the screen and to the screenshot)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`skipFrameRender`](AbstractEngine.md#skipframerender)

***

### startTime

> `readonly` **startTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1944](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1944)

The time (in milliseconds elapsed since the current page has been loaded) when the engine was initialized

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`startTime`](AbstractEngine.md#starttime)

***

### textureFormatInUse

> `readonly` **textureFormatInUse**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts#L21)

Gets the texture format in use

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`textureFormatInUse`](AbstractEngine.md#textureformatinuse)

***

### texturesSupported

> `readonly` **texturesSupported**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts#L16)

Gets the list of texture formats supported

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`texturesSupported`](AbstractEngine.md#texturessupported)

***

### useExactSrgbConversions

> `readonly` **useExactSrgbConversions**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L582)

Gets a boolean indicating if the exact sRGB conversions or faster approximations are used for converting to and from linear space.

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`useExactSrgbConversions`](AbstractEngine.md#useexactsrgbconversions)

***

### validateShaderPrograms

> **validateShaderPrograms**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L170)

Gets or sets a boolean indicating if the engine should validate programs after compilation

***

### views

> **views**: [`EngineView`](EngineView.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L64)

Gets or sets the list of views

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`views`](AbstractEngine.md#views)

***

### \_RescalePostProcessFactory

> `static` **\_RescalePostProcessFactory**: [`Nullable`](../type-aliases/Nullable.md)\<(`engine`) => [`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2770](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2770)

Method called to create the default rescale post process on each engine.

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`_RescalePostProcessFactory`](AbstractEngine.md#_rescalepostprocessfactory)

***

### ~~audioEngine~~

> `static` **audioEngine**: [`Nullable`](../type-aliases/Nullable.md)\<[`IAudioEngine`](../interfaces/IAudioEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2788](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2788)

Gets the audio engine

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

#### Deprecated

please use AudioEngineV2 instead

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`audioEngine`](AbstractEngine.md#audioengine)

***

### ~~AudioEngineFactory~~

> `static` **AudioEngineFactory**: (`hostElement`, `audioContext`, `audioDestination`) => [`IAudioEngine`](../interfaces/IAudioEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2795](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2795)

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

[`AbstractEngine`](AbstractEngine.md).[`AudioEngineFactory`](AbstractEngine.md#audioenginefactory)

***

### CollisionsEpsilon

> `static` **CollisionsEpsilon**: `number` = `0.001`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2827](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2827)

Gets or sets the epsilon value used by collision engine

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`CollisionsEpsilon`](AbstractEngine.md#collisionsepsilon)

***

### ExceptionList

> `static` **ExceptionList**: (\{ `capture`: `string`; `captureConstraint`: `number`; `key`: `string`; `targets`: `string`[]; \} \| \{ `capture`: `null`; `captureConstraint`: `null`; `key`: `string`; `targets`: `string`[]; \})[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L116)

Use this array to turn off some WebGL2 features on known buggy browsers version

***

### OfflineProviderFactory

> `static` **OfflineProviderFactory**: (`urlToScene`, `callbackManifestChecked`, `disableManifestCheck`) => [`IOfflineProvider`](../interfaces/IOfflineProvider.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2805](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2805)

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

[`AbstractEngine`](AbstractEngine.md).[`OfflineProviderFactory`](AbstractEngine.md#offlineproviderfactory)

***

### QueueNewFrame

> `static` **QueueNewFrame**: (`func`, `requester?`) => `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2835](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2835)

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

[`AbstractEngine`](AbstractEngine.md).[`QueueNewFrame`](AbstractEngine.md#queuenewframe)

## Accessors

### activeRenderLoops

#### Get Signature

> **get** **activeRenderLoops**(): readonly () => `void`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L846)

Gets the list of current active render loop functions

##### Returns

readonly () => `void`[]

a read only array with the current render loop functions

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`activeRenderLoops`](AbstractEngine.md#activerenderloops)

***

### alphaState

#### Get Signature

> **get** **alphaState**(): `AlphaState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L551)

Gets the alpha state manager

##### Returns

`AlphaState`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`alphaState`](AbstractEngine.md#alphastate)

***

### compatibilityMode

#### Get Signature

> **get** **compatibilityMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1120)

(WebGPU only) True (default) to be in compatibility mode, meaning rendering all existing scenes without artifacts (same rendering than WebGL).
Setting the property to false will improve performances but may not work in some scenes if some precautions are not taken.
See https://doc.babylonjs.com/setup/support/webGPU/webGPUOptimization/webGPUNonCompatibilityMode for more details

##### Returns

`boolean`

#### Set Signature

> **set** **compatibilityMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1124)

##### Parameters

###### mode

`boolean`

##### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`compatibilityMode`](AbstractEngine.md#compatibilitymode)

***

### currentViewport

#### Get Signature

> **get** **currentViewport**(): [`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1460)

Gets the current viewport

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`currentViewport`](AbstractEngine.md#currentviewport)

***

### depthCullingState

#### Get Signature

> **get** **depthCullingState**(): `DepthCullingState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:544](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L544)

Gets the depth culling state manager

##### Returns

`DepthCullingState`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`depthCullingState`](AbstractEngine.md#depthcullingstate)

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1531](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1531)

Returns a string describing the current engine

##### Returns

`string`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`description`](AbstractEngine.md#description)

***

### doNotHandleContextLost

#### Get Signature

> **get** **doNotHandleContextLost**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2020](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2020)

Gets or sets a boolean indicating if resources should be retained to be able to handle context lost events

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#handling-webgl-context-lost

##### Returns

`boolean`

#### Set Signature

> **set** **doNotHandleContextLost**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2024](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2024)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`doNotHandleContextLost`](AbstractEngine.md#donothandlecontextlost)

***

### emptyCubeTexture

#### Get Signature

> **get** **emptyCubeTexture**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:818](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L818)

Gets the default empty cube texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`emptyCubeTexture`](AbstractEngine.md#emptycubetexture)

***

### emptyTexture

#### Get Signature

> **get** **emptyTexture**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:776](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L776)

Gets the default empty texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`emptyTexture`](AbstractEngine.md#emptytexture)

***

### emptyTexture2DArray

#### Get Signature

> **get** **emptyTexture2DArray**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L798)

Gets the default empty 2D array texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`emptyTexture2DArray`](AbstractEngine.md#emptytexture2darray)

***

### emptyTexture3D

#### Get Signature

> **get** **emptyTexture3D**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:787](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L787)

Gets the default empty 3D texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`emptyTexture3D`](AbstractEngine.md#emptytexture3d)

***

### framebufferDimensionsObject

#### Set Signature

> **set** **framebufferDimensionsObject**(`dimensions`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L252)

sets the object from which width and height will be taken from when getting render width and height
Will fallback to the gl object

##### Parameters

###### dimensions

[`Nullable`](../type-aliases/Nullable.md)\<\{ `framebufferHeight`: `number`; `framebufferWidth`: `number`; \}\>

the framebuffer width and height that will be used.

##### Returns

`void`

***

### frameId

#### Get Signature

> **get** **frameId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L339)

Gets the current frame id

##### Returns

`number`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`frameId`](AbstractEngine.md#frameid)

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:714](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L714)

Gets a boolean indicating if the engine was disposed

##### Returns

`boolean`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isDisposed`](AbstractEngine.md#isdisposed)

***

### isStencilEnable

#### Get Signature

> **get** **isStencilEnable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2034](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2034)

Returns true if the stencil buffer has been enabled through the creation option of the context.

##### Returns

`boolean`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isStencilEnable`](AbstractEngine.md#isstencilenable)

***

### isWebGPU

#### Get Signature

> **get** **isWebGPU**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L345)

Gets a boolean indicating if the engine runs in WebGPU or not.

##### Returns

`boolean`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isWebGPU`](AbstractEngine.md#iswebgpu)

***

### maxFPS

#### Get Signature

> **get** **maxFPS**(): `number` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:931](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L931)

Gets or sets max frame per second allowed. Will return undefined if not capped

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **maxFPS**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:935](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L935)

##### Parameters

###### value

`number` \| `undefined`

##### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`maxFPS`](AbstractEngine.md#maxfps)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L139)

Gets or sets the name of the engine

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L143)

Gets or sets the name of the engine

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`name`](AbstractEngine.md#name)

***

### needPOTTextures

#### Get Signature

> **get** **needPOTTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L203)

Gets a boolean indicating that only power of 2 textures are supported
Please note that you can still use non power of 2 textures but in this case the engine will forcefully convert them

##### Returns

`boolean`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`needPOTTextures`](AbstractEngine.md#needpottextures)

***

### performanceMonitor

#### Get Signature

> **get** **performanceMonitor**(): [`PerformanceMonitor`](PerformanceMonitor.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1042](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1042)

Gets the performance monitor attached to this engine

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#engineinstrumentation

##### Returns

[`PerformanceMonitor`](PerformanceMonitor.md)

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`performanceMonitor`](AbstractEngine.md#performancemonitor)

***

### shaderPlatformName

#### Get Signature

> **get** **shaderPlatformName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L429)

Gets the shader platform name used by the effects.

##### Returns

`string`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`shaderPlatformName`](AbstractEngine.md#shaderplatformname)

***

### snapshotRendering

#### Get Signature

> **get** **snapshotRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:733](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L733)

Enables or disables the snapshot rendering mode
Note that the WebGL engine does not support snapshot rendering so setting the value won't have any effect for this engine

##### Returns

`boolean`

#### Set Signature

> **set** **snapshotRendering**(`activate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:737](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L737)

##### Parameters

###### activate

`boolean`

##### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`snapshotRendering`](AbstractEngine.md#snapshotrendering)

***

### snapshotRenderingMode

#### Get Signature

> **get** **snapshotRenderingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L744)

Gets or sets the snapshot rendering mode

##### Returns

`number`

#### Set Signature

> **set** **snapshotRenderingMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:748](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L748)

##### Parameters

###### mode

`number`

##### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`snapshotRenderingMode`](AbstractEngine.md#snapshotrenderingmode)

***

### stencilState

#### Get Signature

> **get** **stencilState**(): `StencilState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L558)

Gets the stencil state manager

##### Returns

`StencilState`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`stencilState`](AbstractEngine.md#stencilstate)

***

### stencilStateComposer

#### Get Signature

> **get** **stencilStateComposer**(): `StencilStateComposer`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L565)

Gets the stencil state composer

##### Returns

`StencilStateComposer`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`stencilStateComposer`](AbstractEngine.md#stencilstatecomposer)

***

### supportsUniformBuffers

#### Get Signature

> **get** **supportsUniformBuffers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L181)

Gets a boolean indicating that the engine supports uniform buffers

##### See

https://doc.babylonjs.com/setup/support/webGL2#uniform-buffer-objets

##### Returns

`boolean`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`supportsUniformBuffers`](AbstractEngine.md#supportsuniformbuffers)

***

### useReverseDepthBuffer

#### Get Signature

> **get** **useReverseDepthBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L504)

Gets or sets a boolean indicating if depth buffer should be reverse, going from far to near.
This can provide greater z depth for distant objects.

##### Returns

`boolean`

#### Set Signature

> **set** **useReverseDepthBuffer**(`useReverse`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:508](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L508)

##### Parameters

###### useReverse

`boolean`

##### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`useReverseDepthBuffer`](AbstractEngine.md#usereversedepthbuffer)

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L150)

Returns the version of the engine

##### Returns

`number`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`version`](AbstractEngine.md#version)

***

### webGLVersion

#### Get Signature

> **get** **webGLVersion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:863](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L863)

Gets version of the current webGL context
Keep it for back compat - use version instead

##### Returns

`number`

***

### HasMajorPerformanceCaveat

#### Get Signature

> **get** `static` **HasMajorPerformanceCaveat**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4693)

Gets a boolean indicating if the engine can be instantiated on a performant device (ie. if a webGL context can be found and it does not use a slow implementation)

##### Returns

`boolean`

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4662)

Gets a boolean indicating if the engine can be instantiated (ie. if a webGL context can be found)

##### Returns

`boolean`

***

### IsSupportedAsync

#### Get Signature

> **get** `static` **IsSupportedAsync**(): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4655](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4655)

Gets a Promise<boolean> indicating if the engine can be instantiated (ie. if a webGL context can be found)

##### Returns

`Promise`\<`boolean`\>

***

### NpmPackage

#### Get Signature

> **get** `static` **NpmPackage**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1930](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1930)

Returns the current npm package of the sdk

##### Returns

`string`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`NpmPackage`](AbstractEngine.md#npmpackage)

***

### ShadersRepository

#### Get Signature

> **get** `static` **ShadersRepository**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L157)

Gets or sets the relative url used to load shaders if using the engine in non-minified mode

##### Returns

`string`

#### Set Signature

> **set** `static` **ShadersRepository**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L160)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### Version

#### Get Signature

> **get** `static` **Version**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1937](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1937)

Returns the current version of the framework

##### Returns

`string`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`Version`](AbstractEngine.md#version-1)

## Methods

### \_createDepthStencilCubeTexture()

#### Call Signature

> **\_createDepthStencilCubeTexture**(`size`, `options`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts#L24)

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

[`AbstractEngine`](AbstractEngine.md).[`_createDepthStencilCubeTexture`](AbstractEngine.md#_createdepthstencilcubetexture)

#### Call Signature

> **\_createDepthStencilCubeTexture**(`size`, `options`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts#L26)

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

[`AbstractEngine`](AbstractEngine.md).[`_createDepthStencilCubeTexture`](AbstractEngine.md#_createdepthstencilcubetexture)

***

### \_createImageBitmapFromSource()

> **\_createImageBitmapFromSource**(`imageSource`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2543)

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

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`_createImageBitmapFromSource`](AbstractEngine.md#_createimagebitmapfromsource)

***

### \_getInternalFormatFromDepthTextureFormat()

> **\_getInternalFormatFromDepthTextureFormat**(`textureFormat`, `hasDepth`, `hasStencil`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3670](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3670)

#### Parameters

##### textureFormat

`number`

##### hasDepth

`boolean`

##### hasStencil

`boolean`

#### Returns

`number`

***

### \_getWebGLTextureTypeFromDepthTextureFormat()

> **\_getWebGLTextureTypeFromDepthTextureFormat**(`textureFormat`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3698](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3698)

#### Parameters

##### textureFormat

`number`

#### Returns

`number`

***

### \_loadFileAsync()

#### Call Signature

> **\_loadFileAsync**(`url`, `offlineProvider?`, `useArrayBuffer?`): `Promise`\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.ts#L11)

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

[`AbstractEngine`](AbstractEngine.md).[`_loadFileAsync`](AbstractEngine.md#_loadfileasync)

#### Call Signature

> **\_loadFileAsync**(`url`, `offlineProvider?`, `useArrayBuffer?`): `Promise`\<`string` \| `ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadFile.ts#L12)

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

[`AbstractEngine`](AbstractEngine.md).[`_loadFileAsync`](AbstractEngine.md#_loadfileasync)

***

### \_updateRenderBuffer()

> **\_updateRenderBuffer**(`renderBuffer`, `width`, `height`, `samples`, `internalFormat`, `msInternalFormat`, `attachment`, `unbindBuffer?`): [`Nullable`](../type-aliases/Nullable.md)\<`WebGLRenderbuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3766](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3766)

#### Parameters

##### renderBuffer

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLRenderbuffer`\>

##### width

`number`

##### height

`number`

##### samples

`number`

##### internalFormat

`number`

##### msInternalFormat

`number`

##### attachment

`number`

##### unbindBuffer?

`boolean` = `true`

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLRenderbuffer`\>

***

### applyStates()

> **applyStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2760](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2760)

Apply all cached states (depth, culling, stencil and alpha)

#### Returns

`void`

#### Overrides

`AbstractEngine.applyStates`

***

### areAllComputeEffectsReady()

> **areAllComputeEffectsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts#L145)

Gets a boolean indicating if all created compute effects are ready

#### Returns

`boolean`

true if all effects are ready

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`areAllComputeEffectsReady`](AbstractEngine.md#areallcomputeeffectsready)

***

### areAllEffectsReady()

> **areAllEffectsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:481](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L481)

Gets a boolean indicating if all created effects are ready

#### Returns

`boolean`

true if all effects are ready

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`areAllEffectsReady`](AbstractEngine.md#arealleffectsready)

***

### attachContextLostEvent()

> **attachContextLostEvent**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4219)

Attach a new callback raised when context lost event is fired

#### Parameters

##### callback

(`event`) => `void`

defines the callback to call

#### Returns

`void`

***

### attachContextRestoredEvent()

> **attachContextRestoredEvent**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4229)

Attach a new callback raised when context restored event is fired

#### Parameters

##### callback

(`event`) => `void`

defines the callback to call

#### Returns

`void`

***

### beginFrame()

> **beginFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:896](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L896)

Begin a new frame

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`beginFrame`](AbstractEngine.md#beginframe)

***

### beginOcclusionQuery()

> **beginOcclusionQuery**(`algorithmType`, `query`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts#L68)

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

[`AbstractEngine`](AbstractEngine.md).[`beginOcclusionQuery`](AbstractEngine.md#beginocclusionquery)

***

### bindArrayBuffer()

> **bindArrayBuffer**(`buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1420)

Bind a webGL buffer to the webGL context

#### Parameters

##### buffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the buffer to bind

#### Returns

`void`

***

### bindAttachments()

#### Call Signature

> **bindAttachments**(`attachments`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L61)

Select a subsets of attachments to draw to.

##### Parameters

###### attachments

`number`[]

gl attachments

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`bindAttachments`](AbstractEngine.md#bindattachments)

#### Call Signature

> **bindAttachments**(`attachments`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L61)

Select a subsets of attachments to draw to.

##### Parameters

###### attachments

`number`[]

gl attachments

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`bindAttachments`](AbstractEngine.md#bindattachments)

***

### bindBuffers()

> **bindBuffers**(`vertexBuffers`, `indexBuffer`, `effect`, `overrideVertexBuffers?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1693)

Bind a list of vertex buffers to the webGL context

#### Parameters

##### vertexBuffers

defines the list of vertex buffers to bind

##### indexBuffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the index buffer to bind

##### effect

[`Effect`](Effect.md)

defines the effect associated with the vertex buffers

##### overrideVertexBuffers?

defines optional list of avertex buffers that overrides the entries in vertexBuffers

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`bindBuffers`](AbstractEngine.md#bindbuffers)

***

### bindBuffersDirectly()

> **bindBuffersDirectly**(`vertexBuffer`, `indexBuffer`, `vertexDeclaration`, `vertexStrideSize`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1648)

Bind webGl buffers directly to the webGL context

#### Parameters

##### vertexBuffer

[`DataBuffer`](DataBuffer.md)

defines the vertex buffer to bind

##### indexBuffer

[`DataBuffer`](DataBuffer.md)

defines the index buffer to bind

##### vertexDeclaration

`number`[]

defines the vertex declaration to use with the vertex buffer

##### vertexStrideSize

`number`

defines the vertex stride of the vertex buffer

##### effect

[`Effect`](Effect.md)

defines the effect associated with the vertex buffer

#### Returns

`void`

***

### bindFramebuffer()

> **bindFramebuffer**(`rtWrapper`, `faceIndex?`, `requiredWidth?`, `requiredHeight?`, `forceFullscreenViewport?`, `lodLevel?`, `layer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1056](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1056)

Binds the frame buffer to the specified texture.

#### Parameters

##### rtWrapper

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target wrapper to render to

##### faceIndex?

`number` = `0`

The face of the texture to render to in case of cube texture and if the render target wrapper is not a multi render target

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

Defines the lod level to bind to the frame buffer

##### layer?

`number` = `0`

Defines the 2d array index to bind to the frame buffer if the render target wrapper is not a multi render target

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`bindFramebuffer`](AbstractEngine.md#bindframebuffer)

***

### bindInstancesBuffer()

> **bindInstancesBuffer**(`instancesBuffer`, `attributesInfo`, `computeStride?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1790](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1790)

Bind the content of a webGL buffer used with instantiation

#### Parameters

##### instancesBuffer

[`DataBuffer`](DataBuffer.md)

defines the webGL buffer to bind

##### attributesInfo

[`InstancingAttributeInfo`](../interfaces/InstancingAttributeInfo.md)[]

defines the offsets or attributes information used to determine where data must be stored in the buffer

##### computeStride?

`boolean` = `true`

defines Whether to compute the strides from the info or use the default 0

#### Returns

`void`

***

### bindSamplers()

> **bindSamplers**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3848](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3848)

Binds an effect to the webGL context

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`bindSamplers`](AbstractEngine.md#bindsamplers)

***

### bindUniformBlock()

#### Call Signature

> **bindUniformBlock**(`pipelineContext`, `blockName`, `index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1433](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1433)

Bind a specific block at a given index in a specific shader program

##### Parameters

###### pipelineContext

[`IPipelineContext`](../interfaces/IPipelineContext.md)

defines the pipeline context to use

###### blockName

`string`

defines the block name

###### index

`number`

defines the index where to bind the block

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`bindUniformBlock`](AbstractEngine.md#binduniformblock)

#### Call Signature

> **bindUniformBlock**(`pipelineContext`, `blockName`, `index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts#L59)

Bind a specific block at a given index in a specific shader program

##### Parameters

###### pipelineContext

[`IPipelineContext`](../interfaces/IPipelineContext.md)

defines the pipeline context to use

###### blockName

`string`

defines the block name

###### index

`number`

defines the index where to bind the block

##### Returns

`void`

##### Inherited from

`AbstractEngine.bindUniformBlock`

***

### bindUniformBuffer()

> **bindUniformBuffer**(`buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts#L43)

Bind an uniform buffer to the current webGL context

#### Parameters

##### buffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the buffer to bind

#### Returns

`void`

***

### bindUniformBufferBase()

> **bindUniformBufferBase**(`buffer`, `location`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts#L51)

Bind a buffer to the current webGL context at a given location

#### Parameters

##### buffer

[`DataBuffer`](DataBuffer.md)

defines the buffer to bind

##### location

`number`

defines the index where to bind the buffer

##### name

`string`

Name of the uniform variable to bind

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`bindUniformBufferBase`](AbstractEngine.md#binduniformbufferbase)

***

### bindVertexArrayObject()

> **bindVertexArrayObject**(`vertexArrayObject`, `indexBuffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1627)

Bind a specific vertex array object

#### Parameters

##### vertexArrayObject

`WebGLVertexArrayObject`

defines the vertex array object to bind

##### indexBuffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the index buffer to bind

#### Returns

`void`

#### See

https://doc.babylonjs.com/setup/support/webGL2#vertex-array-objects

***

### buildTextureLayout()

#### Call Signature

> **buildTextureLayout**(`textureStatus`, `backBufferLayout?`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L69)

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

[`AbstractEngine`](AbstractEngine.md).[`buildTextureLayout`](AbstractEngine.md#buildtexturelayout)

#### Call Signature

> **buildTextureLayout**(`textureStatus`, `backBufferLayout?`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L69)

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

[`AbstractEngine`](AbstractEngine.md).[`buildTextureLayout`](AbstractEngine.md#buildtexturelayout)

***

### cacheStencilState()

> **cacheStencilState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L169)

Caches the state of the stencil buffer

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`cacheStencilState`](AbstractEngine.md#cachestencilstate)

***

### captureGPUFrameTime()

> **captureGPUFrameTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.ts#L19)

Enable or disable the GPU frame time capture

#### Parameters

##### value

`boolean`

True to enable, false to disable

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`captureGPUFrameTime`](AbstractEngine.md#capturegpuframetime)

***

### clear()

> **clear**(`color`, `backBuffer`, `depth`, `stencil?`, `stencilClearValue?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:953](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L953)

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

[`AbstractEngine`](AbstractEngine.md).[`clear`](AbstractEngine.md#clear)

***

### clearInternalTexturesCache()

> **clearInternalTexturesCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1881](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1881)

Clears the list of texture accessible through engine.
This can help preventing texture load conflict due to name collision.

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`clearInternalTexturesCache`](AbstractEngine.md#clearinternaltexturescache)

***

### computeDispatch()

> **computeDispatch**(`effect`, `context`, `bindings`, `x`, `y?`, `z?`, `bindingsMapping?`, `gpuPerfCounter?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts#L110)

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

[`AbstractEngine`](AbstractEngine.md).[`computeDispatch`](AbstractEngine.md#computedispatch)

***

### computeDispatchIndirect()

> **computeDispatchIndirect**(`effect`, `context`, `bindings`, `buffer`, `offset?`, `bindingsMapping?`, `gpuPerfCounter?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts#L131)

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

[`AbstractEngine`](AbstractEngine.md).[`computeDispatchIndirect`](AbstractEngine.md#computedispatchindirect)

***

### createCanvas()

> **createCanvas**(`width`, `height`): [`ICanvas`](../interfaces/ICanvas.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2598](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2598)

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

[`AbstractEngine`](AbstractEngine.md).[`createCanvas`](AbstractEngine.md#createcanvas)

***

### createCanvasImage()

> **createCanvasImage**(): [`IImage`](../interfaces/IImage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1515](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1515)

Create an image to use with canvas

#### Returns

[`IImage`](../interfaces/IImage.md)

IImage interface

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createCanvasImage`](AbstractEngine.md#createcanvasimage)

***

### createCanvasPath2D()

> **createCanvasPath2D**(`d?`): [`IPath2D`](../interfaces/IPath2D.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1524)

Create a 2D path to use with canvas

#### Parameters

##### d?

`string`

SVG path string

#### Returns

[`IPath2D`](../interfaces/IPath2D.md)

IPath2D interface

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createCanvasPath2D`](AbstractEngine.md#createcanvaspath2d)

***

### createComputeContext()

> **createComputeContext**(): `IComputeContext` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts#L97)

Creates a new compute context

#### Returns

`IComputeContext` \| `undefined`

the new context

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createComputeContext`](AbstractEngine.md#createcomputecontext)

***

### createComputeEffect()

> **createComputeEffect**(`baseName`, `options`): [`ComputeEffect`](ComputeEffect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts#L75)

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

[`AbstractEngine`](AbstractEngine.md).[`createComputeEffect`](AbstractEngine.md#createcomputeeffect)

***

### createComputePipelineContext()

> **createComputePipelineContext**(): `IComputePipelineContext`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts#L91)

Creates a new compute pipeline context

#### Returns

`IComputePipelineContext`

the new pipeline

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createComputePipelineContext`](AbstractEngine.md#createcomputepipelinecontext)

***

### createCubeTexture()

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`, `fallback`, `loaderOptions`, `useSRGBBuffer`, `buffer`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts#L45)

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

[`AbstractEngine`](AbstractEngine.md).[`createCubeTexture`](AbstractEngine.md#createcubetexture)

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts#L75)

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

[`AbstractEngine`](AbstractEngine.md).[`createCubeTexture`](AbstractEngine.md#createcubetexture)

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts#L101)

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

[`AbstractEngine`](AbstractEngine.md).[`createCubeTexture`](AbstractEngine.md#createcubetexture)

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`, `fallback`, `loaderOptions`, `useSRGBBuffer`, `buffer`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts#L47)

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

[`AbstractEngine`](AbstractEngine.md).[`createCubeTexture`](AbstractEngine.md#createcubetexture)

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts#L77)

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

[`AbstractEngine`](AbstractEngine.md).[`createCubeTexture`](AbstractEngine.md#createcubetexture)

#### Call Signature

> **createCubeTexture**(`rootUrl`, `scene`, `files`, `noMipmap`, `onLoad`, `onError`, `format`, `forcedExtension`, `createPolynomials`, `lodScale`, `lodOffset`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts#L103)

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

[`AbstractEngine`](AbstractEngine.md).[`createCubeTexture`](AbstractEngine.md#createcubetexture)

***

### createDepthStencilTexture()

> **createDepthStencilTexture**(`size`, `options`, `rtWrapper`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.texture.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.texture.ts#L17)

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

[`AbstractEngine`](AbstractEngine.md).[`createDepthStencilTexture`](AbstractEngine.md#createdepthstenciltexture)

***

### createDrawContext()

> **createDrawContext**(): [`IDrawContext`](../interfaces/IDrawContext.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2176)

Creates a new draw context

#### Returns

[`IDrawContext`](../interfaces/IDrawContext.md) \| `undefined`

the new context

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`createDrawContext`](AbstractEngine.md#createdrawcontext)

***

### createDynamicTexture()

#### Call Signature

> **createDynamicTexture**(`width`, `height`, `generateMipMaps`, `samplingMode`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.ts#L18)

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

[`AbstractEngine`](AbstractEngine.md).[`createDynamicTexture`](AbstractEngine.md#createdynamictexture)

#### Call Signature

> **createDynamicTexture**(`width`, `height`, `generateMipMaps`, `samplingMode`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.ts#L19)

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

[`AbstractEngine`](AbstractEngine.md).[`createDynamicTexture`](AbstractEngine.md#createdynamictexture)

***

### createDynamicUniformBuffer()

> **createDynamicUniformBuffer**(`elements`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts#L27)

Create a dynamic uniform buffer

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

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createDynamicUniformBuffer`](AbstractEngine.md#createdynamicuniformbuffer)

***

### createDynamicVertexBuffer()

> **createDynamicVertexBuffer**(`data`, `_label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1356)

Creates a dynamic vertex buffer

#### Parameters

##### data

`number` \| [`DataArray`](../type-aliases/DataArray.md)

the data for the dynamic vertex buffer

##### \_label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

the new WebGL dynamic buffer

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`createDynamicVertexBuffer`](AbstractEngine.md#createdynamicvertexbuffer)

***

### createEffect()

> **createEffect**(`baseName`, `attributesNamesOrOptions`, `uniformsNamesOrEngine`, `samplers?`, `defines?`, `fallbacks?`, `onCompiled?`, `onError?`, `indexParameters?`, `shaderLanguage?`, `extraInitializationsAsync?`): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2025](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2025)

Create a new effect (used to store vertex/fragment shaders)

#### Parameters

##### baseName

`string` \| [`IShaderPath`](../type-aliases/IShaderPath.md) & `object`

defines the base name of the effect (The name of file without .fragment.fx or .vertex.fx)

##### attributesNamesOrOptions

`string`[] \| [`IEffectCreationOptions`](../interfaces/IEffectCreationOptions.md)

defines either a list of attribute names or an IEffectCreationOptions object

##### uniformsNamesOrEngine

`string`[] \| `ThinEngine`

defines either a list of uniform names or the engine to use

##### samplers?

`string`[]

defines an array of string used to represent textures

##### defines?

`string`

defines the string containing the defines to use to compile the shaders

##### fallbacks?

[`IEffectFallbacks`](../interfaces/IEffectFallbacks.md)

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

[`AbstractEngine`](AbstractEngine.md).[`createEffect`](AbstractEngine.md#createeffect)

***

### createEffectForParticles()

> **createEffectForParticles**(`fragmentName`, `uniformsNames`, `samplers`, `defines`, `fallbacks?`, `onCompiled?`, `onError?`, `particleSystem?`, `shaderLanguage?`, `vertexName?`): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemComponent.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemComponent.ts#L60)

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

[`AbstractEngine`](AbstractEngine.md).[`createEffectForParticles`](AbstractEngine.md#createeffectforparticles)

***

### createImageBitmap()

> **createImageBitmap**(`image`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2554](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2554)

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

[`AbstractEngine`](AbstractEngine.md).[`createImageBitmap`](AbstractEngine.md#createimagebitmap)

***

### createIndexBuffer()

> **createIndexBuffer**(`indices`, `updatable?`, `_label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1372)

Creates a new index buffer

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the content of the index buffer

##### updatable?

`boolean`

defines if the index buffer must be updatable

##### \_label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

a new webGL buffer

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`createIndexBuffer`](AbstractEngine.md#createindexbuffer)

***

### createMaterialContext()

> **createMaterialContext**(): `IMaterialContext` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2168)

Creates a new material context

#### Returns

`IMaterialContext` \| `undefined`

the new context

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`createMaterialContext`](AbstractEngine.md#creatematerialcontext)

***

### createMultipleRenderTarget()

#### Call Signature

> **createMultipleRenderTarget**(`size`, `options`, `initializeBuffers?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L32)

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

[`AbstractEngine`](AbstractEngine.md).[`createMultipleRenderTarget`](AbstractEngine.md#createmultiplerendertarget)

#### Call Signature

> **createMultipleRenderTarget**(`size`, `options`, `initializeBuffers?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L31)

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

[`AbstractEngine`](AbstractEngine.md).[`createMultipleRenderTarget`](AbstractEngine.md#createmultiplerendertarget)

***

### createPipelineContext()

> **createPipelineContext**(`shaderProcessingContext`): [`IPipelineContext`](../interfaces/IPipelineContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2154)

Creates a new pipeline context

#### Parameters

##### shaderProcessingContext

[`Nullable`](../type-aliases/Nullable.md)\<`_IShaderProcessingContext`\>

defines the shader processing context used during the processing if available

#### Returns

[`IPipelineContext`](../interfaces/IPipelineContext.md)

the new pipeline

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`createPipelineContext`](AbstractEngine.md#createpipelinecontext)

***

### createPrefilteredCubeTexture()

> **createPrefilteredCubeTexture**(`rootUrl`, `scene`, `lodScale`, `lodOffset`, `onLoad?`, `onError?`, `format?`, `forcedExtension?`, `createPolynomials?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.prefilteredCubeTexture.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.prefilteredCubeTexture.ts#L27)

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

[`Nullable`](../type-aliases/Nullable.md)\<(`internalTexture`) => `void`\>

defines an optional callback raised when the texture is loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines an optional callback raised if there is an issue to load the texture

##### format?

`number`

defines the format of the data

##### forcedExtension?

`any`

defines the extension to use to pick the right loader

##### createPolynomials?

`boolean`

defines wheter or not to create polynomails harmonics for the texture

#### Returns

[`InternalTexture`](InternalTexture.md)

the cube texture as an InternalTexture

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createPrefilteredCubeTexture`](AbstractEngine.md#createprefilteredcubetexture)

***

### createQuery()

> **createQuery**(): [`Nullable`](../type-aliases/Nullable.md)\<`OcclusionQuery`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts#L43)

Create a new webGL query (you must be sure that queries are supported by checking getCaps() function)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`OcclusionQuery`\>

the new query

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createQuery`](AbstractEngine.md#createquery)

***

### createRawCubeTexture()

#### Call Signature

> **createRawCubeTexture**(`data`, `size`, `format`, `type`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2323)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawCubeTexture`](AbstractEngine.md#createrawcubetexture)

#### Call Signature

> **createRawCubeTexture**(`data`, `size`, `format`, `type`, `generateMipMaps`, `invertY`, `samplingMode`, `compression`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L57)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawCubeTexture`](AbstractEngine.md#createrawcubetexture)

***

### createRawCubeTextureFromUrl()

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L88)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawCubeTextureFromUrl`](AbstractEngine.md#createrawcubetexturefromurl)

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`, `samplingMode`, `invertY`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L117)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawCubeTextureFromUrl`](AbstractEngine.md#createrawcubetexturefromurl)

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L115)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawCubeTextureFromUrl`](AbstractEngine.md#createrawcubetexturefromurl)

#### Call Signature

> **createRawCubeTextureFromUrl**(`url`, `scene`, `size`, `format`, `type`, `noMipmap`, `callback`, `mipmapGenerator`, `onLoad`, `onError`, `samplingMode`, `invertY`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L144)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawCubeTextureFromUrl`](AbstractEngine.md#createrawcubetexturefromurl)

***

### createRawShaderProgram()

> **createRawShaderProgram**(`pipelineContext`, `vertexCode`, `fragmentCode`, `context?`, `transformFeedbackVaryings?`): `WebGLProgram`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2101)

Directly creates a webGL program

#### Parameters

##### pipelineContext

[`IPipelineContext`](../interfaces/IPipelineContext.md)

defines the pipeline context to attach to

##### vertexCode

`string`

defines the vertex shader code to use

##### fragmentCode

`string`

defines the fragment shader code to use

##### context?

`WebGLRenderingContext`

defines the webGL context to use (if not set, the current one will be used)

##### transformFeedbackVaryings?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

defines the list of transform feedback varyings to use

#### Returns

`WebGLProgram`

the new webGL program

***

### createRawTexture()

> **createRawTexture**(`data`, `width`, `height`, `format`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`, `type?`, `creationFlags?`, `useSRGBBuffer?`, `mipLevelCount?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2293)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawTexture`](AbstractEngine.md#createrawtexture)

***

### createRawTexture2DArray()

> **createRawTexture2DArray**(`data`, `width`, `height`, `depth`, `format`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`, `textureType?`, `creationFlags?`, `mipLevelCount?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2384)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawTexture2DArray`](AbstractEngine.md#createrawtexture2darray)

***

### createRawTexture3D()

> **createRawTexture3D**(`data`, `width`, `height`, `depth`, `format`, `generateMipMaps`, `invertY`, `samplingMode`, `compression?`, `textureType?`, `creationFlags?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2351)

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

[`AbstractEngine`](AbstractEngine.md).[`createRawTexture3D`](AbstractEngine.md#createrawtexture3d)

***

### createRenderPassId()

> **createRenderPassId**(`name?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts#L23)

Creates a render pass id

#### Parameters

##### name?

`string`

Name of the render pass (for debug purpose only)

#### Returns

`number`

the id of the new render pass

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createRenderPassId`](AbstractEngine.md#createrenderpassid)

***

### createRenderTargetCubeTexture()

#### Call Signature

> **createRenderTargetCubeTexture**(`size`, `options?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTargetCube.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.renderTargetCube.ts#L18)

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

[`AbstractEngine`](AbstractEngine.md).[`createRenderTargetCubeTexture`](AbstractEngine.md#createrendertargetcubetexture)

#### Call Signature

> **createRenderTargetCubeTexture**(`size`, `options?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetCube.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetCube.ts#L16)

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

[`AbstractEngine`](AbstractEngine.md).[`createRenderTargetCubeTexture`](AbstractEngine.md#createrendertargetcubetexture)

***

### createRenderTargetTexture()

#### Call Signature

> **createRenderTargetTexture**(`size`, `options`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTarget.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.renderTarget.ts#L30)

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

[`AbstractEngine`](AbstractEngine.md).[`createRenderTargetTexture`](AbstractEngine.md#createrendertargettexture)

#### Call Signature

> **createRenderTargetTexture**(`size`, `options`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.ts#L22)

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

[`AbstractEngine`](AbstractEngine.md).[`createRenderTargetTexture`](AbstractEngine.md#createrendertargettexture)

***

### createShaderProgram()

> **createShaderProgram**(`pipelineContext`, `vertexCode`, `fragmentCode`, `defines`, `context?`, `transformFeedbackVaryings?`): `WebGLProgram`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2124)

Creates a webGL program

#### Parameters

##### pipelineContext

[`IPipelineContext`](../interfaces/IPipelineContext.md)

defines the pipeline context to attach to

##### vertexCode

`string`

defines the vertex shader code to use

##### fragmentCode

`string`

defines the fragment shader code to use

##### defines

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the string containing the defines to use to compile the shaders

##### context?

`WebGLRenderingContext`

defines the webGL context to use (if not set, the current one will be used)

##### transformFeedbackVaryings?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

defines the list of transform feedback varyings to use

#### Returns

`WebGLProgram`

the new webGL program

***

### createTexture()

> **createTexture**(`url`, `noMipmap`, `invertY`, `scene`, `samplingMode?`, `onLoad?`, `onError?`, `buffer?`, `fallback?`, `format?`, `forcedExtension?`, `mimeType?`, `loaderOptions?`, `creationFlags?`, `useSRGBBuffer?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3143)

Usually called from Texture.ts.
Passed information to create a WebGLTexture

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

[`AbstractEngine`](AbstractEngine.md).[`createTexture`](AbstractEngine.md#createtexture)

***

### createUniformBuffer()

> **createUniformBuffer**(`elements`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts#L18)

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

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createUniformBuffer`](AbstractEngine.md#createuniformbuffer)

***

### createVertexBuffer()

> **createVertexBuffer**(`data`, `_updatable?`, `_label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1317)

Creates a vertex buffer

#### Parameters

##### data

`number` \| [`DataArray`](../type-aliases/DataArray.md)

the data or size for the vertex buffer

##### \_updatable?

`boolean`

whether the buffer should be created as updatable

##### \_label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

[`DataBuffer`](DataBuffer.md)

the new WebGL static buffer

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`createVertexBuffer`](AbstractEngine.md#createvertexbuffer)

***

### createVideoElement()

> **createVideoElement**(`constraints`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2470)

creates and returns a new video element

#### Parameters

##### constraints

`MediaTrackConstraints`

video constraints

#### Returns

`any`

video element

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`createVideoElement`](AbstractEngine.md#createvideoelement)

***

### deleteQuery()

> **deleteQuery**(`query`): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts#L49)

Delete and release a webGL query

#### Parameters

##### query

`OcclusionQuery`

defines the query to delete

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the current engine

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`deleteQuery`](AbstractEngine.md#deletequery)

***

### disableAttributeByIndex()

> **disableAttributeByIndex**(`attributeLocation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1860](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1860)

Disable the attribute corresponding to the location in parameter

#### Parameters

##### attributeLocation

`number`

defines the attribute location of the attribute to disable

#### Returns

`void`

***

### disableInstanceAttribute()

> **disableInstanceAttribute**(`attributeLocation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1840](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1840)

Disable the instance attribute corresponding to the location in parameter

#### Parameters

##### attributeLocation

`number`

defines the attribute location of the attribute to disable

#### Returns

`void`

***

### disableInstanceAttributeByName()

> **disableInstanceAttributeByName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1827](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1827)

Disable the instance attribute corresponding to the name in parameter

#### Parameters

##### name

`string`

defines the name of the attribute to disable

#### Returns

`void`

***

### displayLoadingUI()

> **displayLoadingUI**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts#L12)

Display the loading screen

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`displayLoadingUI`](AbstractEngine.md#displayloadingui)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4180)

Dispose and release all associated resources

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`dispose`](AbstractEngine.md#dispose)

***

### draw()

> **draw**(`useTriangles`, `indexStart`, `indexCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1873](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1873)

Send a draw order

#### Parameters

##### useTriangles

`boolean`

defines if triangles must be used to draw (else wireframe will be used)

##### indexStart

`number`

defines the starting index

##### indexCount

`number`

defines the number of index to draw

##### instancesCount?

`number`

defines the number of instances to draw (if instantiation is enabled)

#### Returns

`void`

***

### drawArraysType()

> **drawArraysType**(`fillMode`, `verticesStart`, `verticesCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1930](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1930)

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

`number`

defines the number of instances to draw (if instantiation is enabled)

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`drawArraysType`](AbstractEngine.md#drawarraystype)

***

### drawElementsType()

> **drawElementsType**(`fillMode`, `indexStart`, `indexCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1905](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1905)

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

`number`

defines the number of instances to draw (if instantiation is enabled)

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`drawElementsType`](AbstractEngine.md#drawelementstype)

***

### drawPointClouds()

> **drawPointClouds**(`verticesStart`, `verticesCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1883](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1883)

Draw a list of points

#### Parameters

##### verticesStart

`number`

defines the index of first vertex to draw

##### verticesCount

`number`

defines the count of vertices to draw

##### instancesCount?

`number`

defines the number of instances to draw (if instantiation is enabled)

#### Returns

`void`

***

### drawUnIndexed()

> **drawUnIndexed**(`useTriangles`, `verticesStart`, `verticesCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1894](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1894)

Draw a list of unindexed primitives

#### Parameters

##### useTriangles

`boolean`

defines if triangles must be used to draw (else wireframe will be used)

##### verticesStart

`number`

defines the index of first vertex to draw

##### verticesCount

`number`

defines the count of vertices to draw

##### instancesCount?

`number`

defines the number of instances to draw (if instantiation is enabled)

#### Returns

`void`

***

### enableEffect()

> **enableEffect**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2293)

Activates an effect, making it the current one (ie. the one used for rendering)

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md) \| [`DrawWrapper`](DrawWrapper.md)\>

defines the effect to activate

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`enableEffect`](AbstractEngine.md#enableeffect)

***

### endFrame()

> **endFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1030](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1030)

End the current frame

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`endFrame`](AbstractEngine.md#endframe)

***

### endOcclusionQuery()

> **endOcclusionQuery**(`algorithmType`): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts#L75)

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

[`AbstractEngine`](AbstractEngine.md).[`endOcclusionQuery`](AbstractEngine.md#endocclusionquery)

***

### endTimeQuery()

> **endTimeQuery**(`token`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.query.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.query.ts#L34)

Ends a time query

#### Parameters

##### token

`_TimeToken`

defines the token used to measure the time span

#### Returns

`number`

the time spent (in ns)

***

### enterFullscreen()

> **enterFullscreen**(`requestPointerLock`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L60)

Enters full screen mode

#### Parameters

##### requestPointerLock

`boolean`

defines if a pointer lock should be requested from the user

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`enterFullscreen`](AbstractEngine.md#enterfullscreen)

***

### exitFullscreen()

> **exitFullscreen**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L65)

Exits full screen mode

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`exitFullscreen`](AbstractEngine.md#exitfullscreen)

***

### extractDriverInfo()

> **extractDriverInfo**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:910](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L910)

Gets driver info if available

#### Returns

`string`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`extractDriverInfo`](AbstractEngine.md#extractdriverinfo)

***

### flushFramebuffer()

> **flushFramebuffer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1282)

Force a webGL flush (ie. a flush of all waiting webGL commands)

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`flushFramebuffer`](AbstractEngine.md#flushframebuffer)

***

### generateMipmaps()

> **generateMipmaps**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1217)

Generates the mipmaps for a texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

texture to generate the mipmaps for

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`generateMipmaps`](AbstractEngine.md#generatemipmaps)

***

### generateMipMapsForCubemap()

#### Call Signature

> **generateMipMapsForCubemap**(`texture`, `unbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.cubeTexture.ts#L140)

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

[`AbstractEngine`](AbstractEngine.md).[`generateMipMapsForCubemap`](AbstractEngine.md#generatemipmapsforcubemap)

#### Call Signature

> **generateMipMapsForCubemap**(`texture`, `unbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.cubeTexture.ts#L176)

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

[`AbstractEngine`](AbstractEngine.md).[`generateMipMapsForCubemap`](AbstractEngine.md#generatemipmapsforcubemap)

***

### generateMipMapsFramebuffer()

> **generateMipMapsFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1251)

Generates mipmaps for the texture of the (single) render target

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target containing the texture to generate the mipmaps for

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`generateMipMapsFramebuffer`](AbstractEngine.md#generatemipmapsframebuffer)

***

### generateMipMapsMultiFramebuffer()

#### Call Signature

> **generateMipMapsMultiFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L48)

Generates mipmaps for the texture of the (multi) render target

##### Parameters

###### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target containing the textures to generate the mipmaps for

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`generateMipMapsMultiFramebuffer`](AbstractEngine.md#generatemipmapsmultiframebuffer)

#### Call Signature

> **generateMipMapsMultiFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L47)

Generates mipmaps for the texture of the (multi) render target

##### Parameters

###### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target containing the textures to generate the mipmaps for

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`generateMipMapsMultiFramebuffer`](AbstractEngine.md#generatemipmapsmultiframebuffer)

***

### getAlphaEquation()

> **getAlphaEquation**(`targetIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L76)

Gets the current alpha equation.

#### Parameters

##### targetIndex?

`number`

defines the index of the target to get the alpha equation for (default is 0)

#### Returns

`number`

the current alpha equation

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getAlphaEquation`](AbstractEngine.md#getalphaequation)

***

### getAlphaMode()

> **getAlphaMode**(`targetIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L69)

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

[`AbstractEngine`](AbstractEngine.md).[`getAlphaMode`](AbstractEngine.md#getalphamode)

***

### getAspectRatio()

> **getAspectRatio**(`viewportOwner`, `useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L42)

Gets current aspect ratio

#### Parameters

##### viewportOwner

`IViewportOwnerLike`

defines the camera to use to get the aspect ratio

##### useScreen?

`boolean`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the aspect ratio

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getAspectRatio`](AbstractEngine.md#getaspectratio)

***

### getAttributes()

> **getAttributes**(`pipelineContext`, `attributesNames`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2274)

Gets the list of active attributes for a given webGL program

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1963](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1963)

Gets the audio context specified in engine initialization options

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

an Audio Context

#### Deprecated

please use AudioEngineV2 instead

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getAudioContext`](AbstractEngine.md#getaudiocontext)

***

### ~~getAudioDestination()~~

> **getAudioDestination**(): [`Nullable`](../type-aliases/Nullable.md)\<`AudioDestinationNode` \| `MediaStreamAudioDestinationNode`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1972](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1972)

Gets the audio destination specified in engine initialization options

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AudioDestinationNode` \| `MediaStreamAudioDestinationNode`\>

an audio destination node

#### Deprecated

please use AudioEngineV2 instead

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getAudioDestination`](AbstractEngine.md#getaudiodestination)

***

### getCaps()

> **getCaps**(): [`EngineCapabilities`](../interfaces/EngineCapabilities.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1894](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1894)

Gets the object containing all engine capabilities

#### Returns

[`EngineCapabilities`](../interfaces/EngineCapabilities.md)

the EngineCapabilities object

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getCaps`](AbstractEngine.md#getcaps)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:871](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L871)

Gets a string identifying the name of the class

#### Returns

`string`

"Engine" string

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`getClassName`](AbstractEngine.md#getclassname)

***

### getColorWrite()

> **getColorWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L537)

Gets a boolean indicating if color writing is enabled

#### Returns

`boolean`

the current color writing state

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getColorWrite`](AbstractEngine.md#getcolorwrite)

***

### getCreationOptions()

> **getCreationOptions**(): [`AbstractEngineOptions`](../interfaces/AbstractEngineOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2046](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2046)

Gets the options used for engine creation
NOTE that modifying the object after engine creation will have no effect

#### Returns

[`AbstractEngineOptions`](../interfaces/AbstractEngineOptions.md)

EngineOptions object

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getCreationOptions`](AbstractEngine.md#getcreationoptions)

***

### getCurrentRenderPassName()

> **getCurrentRenderPassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts#L16)

Gets the name of the current render pass

#### Returns

`string`

name of the current render pass

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getCurrentRenderPassName`](AbstractEngine.md#getcurrentrenderpassname)

***

### getDeltaTime()

> **getDeltaTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2499](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2499)

Gets the time spent between current and previous frame

#### Returns

`number`

a number representing the delta time in ms

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getDeltaTime`](AbstractEngine.md#getdeltatime)

***

### getDepthBuffer()

> **getDepthBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1053](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1053)

Gets a boolean indicating if depth testing is enabled

#### Returns

`boolean`

the current state

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getDepthBuffer`](AbstractEngine.md#getdepthbuffer)

***

### getDepthFunction()

> **getDepthFunction**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L14)

Gets the current depth function

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

a number defining the depth function

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getDepthFunction`](AbstractEngine.md#getdepthfunction)

***

### getDepthWrite()

> **getDepthWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L46)

Gets a boolean indicating if depth writing is enabled

#### Returns

`boolean`

the current depth writing state

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getDepthWrite`](AbstractEngine.md#getdepthwrite)

***

### getError()

> **getError**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4240)

Get the current error code of the webGL context

#### Returns

`number`

the error code

#### See

https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getError

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`getError`](AbstractEngine.md#geterror)

***

### getFontOffset()

> **getFontOffset**(`font`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2578](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2578)

Get Font size information

#### Parameters

##### font

`string`

font name

#### Returns

`object`

##### ascent

> **ascent**: `number`

##### descent

> **descent**: `number`

##### height

> **height**: `number`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getFontOffset`](AbstractEngine.md#getfontoffset)

***

### getFps()

> **getFps**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2491)

Gets the current framerate

#### Returns

`number`

a number representing the framerate

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getFps`](AbstractEngine.md#getfps)

***

### getGlInfo()

> **getGlInfo**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:901](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L901)

Gets an object containing information about the current webGL context

#### Returns

`object`

an object containing the vendor, the renderer and the version of the current webGL context

##### renderer

> **renderer**: `string`

##### vendor

> **vendor**: `string`

##### version

> **version**: `string`

***

### getGPUFrameTimeCounter()

> **getGPUFrameTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.ts#L14)

Get the performance counter associated with the frame time computation

#### Returns

[`PerfCounter`](PerfCounter.md)

the perf counter

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getGPUFrameTimeCounter`](AbstractEngine.md#getgpuframetimecounter)

***

### getHardwareScalingLevel()

> **getHardwareScalingLevel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2009](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2009)

Gets the current hardware scaling level.
By default the hardware scaling level is computed from the window device ratio.
if level = 1 then the engine will render at the exact resolution of the canvas. If level = 0.5 then the engine will render at twice the size of the canvas.

#### Returns

`number`

a number indicating the current hardware scaling level

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getHardwareScalingLevel`](AbstractEngine.md#gethardwarescalinglevel)

***

### getHostDocument()

> **getHostDocument**(): [`Nullable`](../type-aliases/Nullable.md)\<`Document`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1851](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1851)

Gets host document

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Document`\>

the host document object

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getHostDocument`](AbstractEngine.md#gethostdocument)

***

### getHostWindow()

> **getHostWindow**(): [`Nullable`](../type-aliases/Nullable.md)\<`Window`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1103)

Gets host window

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Window`\>

the host window object

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getHostWindow`](AbstractEngine.md#gethostwindow)

***

### getInfo()

> **getInfo**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:893](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L893)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L22)

Gets the HTML element used to attach event listeners

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

a HTML element

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getInputElement`](AbstractEngine.md#getinputelement)

***

### getInputElementClientRect()

> **getInputElementClientRect**(): [`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L34)

Gets the client rect of the HTML element used for events

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

a client rectangle

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getInputElementClientRect`](AbstractEngine.md#getinputelementclientrect)

***

### getLoadedTexturesCache()

> **getLoadedTexturesCache**(): [`InternalTexture`](InternalTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1873](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1873)

Gets the list of loaded textures

#### Returns

[`InternalTexture`](InternalTexture.md)[]

an array containing all loaded textures

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getLoadedTexturesCache`](AbstractEngine.md#getloadedtexturescache)

***

### getLockstepMaxSteps()

> **getLockstepMaxSteps**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2525](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2525)

Gets the max steps when engine is running in deterministic lock step

#### Returns

`number`

the max steps

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getLockstepMaxSteps`](AbstractEngine.md#getlockstepmaxsteps)

***

### getQueryResult()

> **getQueryResult**(`query`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts#L60)

Gets the value of a given query

#### Parameters

##### query

`OcclusionQuery`

defines the query to check

#### Returns

`number`

the value of the query

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getQueryResult`](AbstractEngine.md#getqueryresult)

***

### getRenderHeight()

> **getRenderHeight**(`useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:937](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L937)

Gets the current render height

#### Parameters

##### useScreen?

`boolean` = `false`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the current render height

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`getRenderHeight`](AbstractEngine.md#getrenderheight)

***

### getRenderingCanvas()

> **getRenderingCanvas**(): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1954](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1954)

Gets the HTML canvas attached with the current webGL context

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement`\>

a HTML canvas

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getRenderingCanvas`](AbstractEngine.md#getrenderingcanvas)

***

### getRenderingCanvasClientRect()

> **getRenderingCanvasClientRect**(): [`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L28)

Gets the client rect of the HTML canvas attached with the current webGL context

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

a client rectangle

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getRenderingCanvasClientRect`](AbstractEngine.md#getrenderingcanvasclientrect)

***

### getRenderPassNames()

> **getRenderPassNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts#L10)

Gets the names of the render passes that are currently created

#### Returns

`string`[]

list of the render pass names

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getRenderPassNames`](AbstractEngine.md#getrenderpassnames)

***

### getRenderWidth()

> **getRenderWidth**(`useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L924)

Gets the current render width

#### Parameters

##### useScreen?

`boolean` = `false`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the current render width

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`getRenderWidth`](AbstractEngine.md#getrenderwidth)

***

### getScreenAspectRatio()

> **getScreenAspectRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L48)

Gets current screen aspect ratio

#### Returns

`number`

a number defining the aspect ratio

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getScreenAspectRatio`](AbstractEngine.md#getscreenaspectratio)

***

### getStencilBackFunction()

> **getStencilBackFunction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L68)

Gets the current back stencil function

#### Returns

`number`

a number defining the back stencil function to use

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilBackFunction`](AbstractEngine.md#getstencilbackfunction)

***

### getStencilBackOperationDepthFail()

> **getStencilBackOperationDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L128)

Gets the current back stencil operation when depth fails

#### Returns

`number`

a number defining back stencil operation to use when depth fails

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilBackOperationDepthFail`](AbstractEngine.md#getstencilbackoperationdepthfail)

***

### getStencilBackOperationFail()

> **getStencilBackOperationFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L116)

Gets the current back stencil operation when stencil fails

#### Returns

`number`

a number defining back stencil operation to use when stencil fails

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilBackOperationFail`](AbstractEngine.md#getstencilbackoperationfail)

***

### getStencilBackOperationPass()

> **getStencilBackOperationPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L33)

Gets the current back stencil operation when stencil passes

#### Returns

`number`

a number defining back stencil operation to use when stencil passes

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilBackOperationPass`](AbstractEngine.md#getstencilbackoperationpass)

***

### getStencilBuffer()

> **getStencilBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L39)

Gets a boolean indicating if stencil buffer is enabled

#### Returns

`boolean`

the current stencil buffer state

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilBuffer`](AbstractEngine.md#getstencilbuffer)

***

### getStencilFunction()

> **getStencilFunction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L62)

Gets the current stencil function

#### Returns

`number`

a number defining the stencil function to use

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilFunction`](AbstractEngine.md#getstencilfunction)

***

### getStencilFunctionMask()

> **getStencilFunctionMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L80)

Gets the current stencil mask

#### Returns

`number`

a number defining the stencil mask to use

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilFunctionMask`](AbstractEngine.md#getstencilfunctionmask)

***

### getStencilFunctionReference()

> **getStencilFunctionReference**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L74)

Gets the current stencil reference value

#### Returns

`number`

a number defining the stencil reference value to use

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilFunctionReference`](AbstractEngine.md#getstencilfunctionreference)

***

### getStencilMask()

> **getStencilMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L51)

Gets the current stencil mask

#### Returns

`number`

a number defining the new stencil mask to use

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilMask`](AbstractEngine.md#getstencilmask)

***

### getStencilOperationDepthFail()

> **getStencilOperationDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L122)

Gets the current stencil operation when depth fails

#### Returns

`number`

a number defining stencil operation to use when depth fails

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilOperationDepthFail`](AbstractEngine.md#getstenciloperationdepthfail)

***

### getStencilOperationFail()

> **getStencilOperationFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L110)

Gets the current stencil operation when stencil fails

#### Returns

`number`

a number defining stencil operation to use when stencil fails

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilOperationFail`](AbstractEngine.md#getstenciloperationfail)

***

### getStencilOperationPass()

> **getStencilOperationPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L27)

Gets the current stencil operation when stencil passes

#### Returns

`number`

a number defining stencil operation to use when stencil passes

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getStencilOperationPass`](AbstractEngine.md#getstenciloperationpass)

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2533)

Returns the time in ms between steps when using deterministic lock step.

#### Returns

`number`

time step in (ms)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getTimeStep`](AbstractEngine.md#gettimestep)

***

### getUniforms()

> **getUniforms**(`pipelineContext`, `uniformsNames`): [`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2257)

Gets the list of webGL uniform locations associated with a specific program based on a list of uniform names

#### Parameters

##### pipelineContext

[`IPipelineContext`](../interfaces/IPipelineContext.md)

defines the pipeline context to use

##### uniformsNames

`string`[]

defines the list of uniform names

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>[]

an array of webGL uniform locations

***

### getZOffset()

> **getZOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1077](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1077)

Gets the current value of the zOffset Factor

#### Returns

`number`

the current zOffset Factor state

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getZOffset`](AbstractEngine.md#getzoffset)

***

### getZOffsetUnits()

> **getZOffsetUnits**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1094](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1094)

Gets the current value of the zOffset Units

#### Returns

`number`

the current zOffset Units state

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`getZOffsetUnits`](AbstractEngine.md#getzoffsetunits)

***

### hideLoadingUI()

> **hideLoadingUI**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.ts#L18)

Hide the loading screen

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`hideLoadingUI`](AbstractEngine.md#hideloadingui)

***

### inlineShaderCode()

> **inlineShaderCode**(`code`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2144)

Inline functions in shader code that are marked to be inlined

#### Parameters

##### code

`string`

code to inline

#### Returns

`string`

inlined code

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`inlineShaderCode`](AbstractEngine.md#inlineshadercode)

***

### isDeterministicLockStep()

> **isDeterministicLockStep**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2516](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2516)

Gets a boolean indicating that the engine is running in deterministic lock step mode

#### Returns

`boolean`

true if engine is in deterministic lock step mode

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isDeterministicLockStep`](AbstractEngine.md#isdeterministiclockstep)

***

### isQueryResultAvailable()

> **isQueryResultAvailable**(`query`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.ts#L54)

#### Parameters

##### query

`OcclusionQuery`

#### Returns

`boolean`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`isQueryResultAvailable`](AbstractEngine.md#isqueryresultavailable)

***

### readPixels()

> **readPixels**(`x`, `y`, `width`, `height`, `hasAlpha?`, `flushRenderer?`, `data?`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4627)

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

##### hasAlpha?

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

[`AbstractEngine`](AbstractEngine.md).[`readPixels`](AbstractEngine.md#readpixels)

***

### recordVertexArrayObject()

> **recordVertexArrayObject**(`vertexBuffers`, `indexBuffer`, `effect`, `overrideVertexBuffers?`): `WebGLVertexArrayObject`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1594](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1594)

Records a vertex array object

#### Parameters

##### vertexBuffers

defines the list of vertex buffers to store

##### indexBuffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the index buffer to store

##### effect

[`Effect`](Effect.md)

defines the effect to store

##### overrideVertexBuffers?

defines optional list of avertex buffers that overrides the entries in vertexBuffers

#### Returns

`WebGLVertexArrayObject`

the new vertex array object

#### See

https://doc.babylonjs.com/setup/support/webGL2#vertex-array-objects

***

### registerView()

> **registerView**(`canvas`, `camera?`, `clearBeforeCopy?`): [`EngineView`](EngineView.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L73)

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

[`AbstractEngine`](AbstractEngine.md).[`registerView`](AbstractEngine.md#registerview)

***

### releaseComputeEffects()

> **releaseComputeEffects**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.computeShader.ts#L150)

Forces the engine to release all cached compute effects. This means that next effect compilation will have to be done completely even if a similar effect was already compiled

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`releaseComputeEffects`](AbstractEngine.md#releasecomputeeffects)

***

### releaseEffects()

> **releaseEffects**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4172)

Force the engine to release all cached effects. This means that next effect compilation will have to be done completely even if a similar effect was already compiled

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`releaseEffects`](AbstractEngine.md#releaseeffects)

***

### releaseRenderPassId()

> **releaseRenderPassId**(`id`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.ts#L29)

Releases a render pass id

#### Parameters

##### id

`number`

id of the render pass to release

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`releaseRenderPassId`](AbstractEngine.md#releaserenderpassid)

***

### releaseVertexArrayObject()

> **releaseVertexArrayObject**(`vao`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1731](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1731)

Release and free the memory of a vertex array object

#### Parameters

##### vao

`WebGLVertexArrayObject`

defines the vertex array object to delete

#### Returns

`void`

***

### resetTextureCache()

> **resetTextureCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1901](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1901)

Reset the texture cache to empty state

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`resetTextureCache`](AbstractEngine.md#resettexturecache)

***

### resize()

> **resize**(`forceSetSize?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2105)

Resize the view according to the canvas' size

#### Parameters

##### forceSetSize?

`boolean` = `false`

true to force setting the sizes of the underlying canvas

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`resize`](AbstractEngine.md#resize)

***

### resizeImageBitmap()

> **resizeImageBitmap**(`image`, `bufferWidth`, `bufferHeight`): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2564](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2564)

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

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`resizeImageBitmap`](AbstractEngine.md#resizeimagebitmap)

***

### resolveFramebuffer()

> **resolveFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1262)

Resolves the MSAA texture of the (single) render target into its non-MSAA version.
Note that if "texture" is not a MSAA render target, no resolve is performed.

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target texture containing the MSAA textures to resolve

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`resolveFramebuffer`](AbstractEngine.md#resolveframebuffer)

***

### resolveMultiFramebuffer()

#### Call Signature

> **resolveMultiFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L55)

Resolves the MSAA textures of the (multi) render target into their non-MSAA version.
Note that if "texture" is not a MSAA render target, no resolve is performed.

##### Parameters

###### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target texture containing the MSAA textures to resolve

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`resolveMultiFramebuffer`](AbstractEngine.md#resolvemultiframebuffer)

#### Call Signature

> **resolveMultiFramebuffer**(`texture`, `resolveColors?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L55)

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

[`AbstractEngine`](AbstractEngine.md).[`resolveMultiFramebuffer`](AbstractEngine.md#resolvemultiframebuffer)

***

### restoreDefaultFramebuffer()

> **restoreDefaultFramebuffer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1289)

Unbind the current render target and bind the default framebuffer

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`restoreDefaultFramebuffer`](AbstractEngine.md#restoredefaultframebuffer)

***

### restoreSingleAttachment()

#### Call Signature

> **restoreSingleAttachment**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L75)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is the canvas frame buffer

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`restoreSingleAttachment`](AbstractEngine.md#restoresingleattachment)

#### Call Signature

> **restoreSingleAttachment**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L75)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is the canvas frame buffer

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`restoreSingleAttachment`](AbstractEngine.md#restoresingleattachment)

***

### restoreSingleAttachmentForRenderTarget()

#### Call Signature

> **restoreSingleAttachmentForRenderTarget**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L81)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is not the canvas frame buffer

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`restoreSingleAttachmentForRenderTarget`](AbstractEngine.md#restoresingleattachmentforrendertarget)

#### Call Signature

> **restoreSingleAttachmentForRenderTarget**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L81)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is not the canvas frame buffer

##### Returns

`void`

##### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`restoreSingleAttachmentForRenderTarget`](AbstractEngine.md#restoresingleattachmentforrendertarget)

***

### restoreStencilState()

> **restoreStencilState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L174)

Restores the state of the stencil buffer

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`restoreStencilState`](AbstractEngine.md#restorestencilstate)

***

### runRenderLoop()

> **runRenderLoop**(`renderFunction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1036](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1036)

Register and execute a render loop. The engine can have more than one render function

#### Parameters

##### renderFunction

() => `void`

defines the function to continuously execute

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`runRenderLoop`](AbstractEngine.md#runrenderloop)

***

### setAlphaConstants()

> **setAlphaConstants**(`r`, `g`, `b`, `a`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L61)

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

[`AbstractEngine`](AbstractEngine.md).[`setAlphaConstants`](AbstractEngine.md#setalphaconstants)

***

### setAlphaEquation()

> **setAlphaEquation**(`equation`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.alpha.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.alpha.ts#L12)

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

[`AbstractEngine`](AbstractEngine.md).[`setAlphaEquation`](AbstractEngine.md#setalphaequation)

***

### setAlphaMode()

#### Call Signature

> **setAlphaMode**(`mode`, `noDepthWriteChange?`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.alpha.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.alpha.ts#L14)

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

[`AbstractEngine`](AbstractEngine.md).[`setAlphaMode`](AbstractEngine.md#setalphamode)

#### Call Signature

> **setAlphaMode**(`mode`, `noDepthWriteChange?`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.alpha.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.alpha.ts#L17)

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

[`AbstractEngine`](AbstractEngine.md).[`setAlphaMode`](AbstractEngine.md#setalphamode)

***

### setArray()

> **setArray**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2583)

Set the value of an uniform to an array of number

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the array of number to store

#### Returns

`boolean`

true if the value was set

***

### setArray2()

> **setArray2**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2601)

Set the value of an uniform to an array of number (stored as vec2)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the array of number to store

#### Returns

`boolean`

true if the value was set

***

### setArray3()

> **setArray3**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2616)

Set the value of an uniform to an array of number (stored as vec3)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the array of number to store

#### Returns

`boolean`

true if the value was set

***

### setArray4()

> **setArray4**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2631)

Set the value of an uniform to an array of number (stored as vec4)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the array of number to store

#### Returns

`boolean`

true if the value was set

***

### setColorWrite()

> **setColorWrite**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:526](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L526)

Enable or disable color writing

#### Parameters

##### enable

`boolean`

defines the state to set

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setColorWrite`](AbstractEngine.md#setcolorwrite)

***

### setCompressedTextureExclusions()

> **setCompressedTextureExclusions**(`skippedFiles`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts#L29)

Set the compressed texture extensions or file names to skip.

#### Parameters

##### skippedFiles

`string`[]

defines the list of those texture files you want to skip
Example: [".dds", ".env", "myfile.png"]

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setCompressedTextureExclusions`](AbstractEngine.md#setcompressedtextureexclusions)

***

### setDepthBuffer()

> **setDepthBuffer**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1061](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1061)

Enable or disable depth buffering

#### Parameters

##### enable

`boolean`

defines the state to set

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setDepthBuffer`](AbstractEngine.md#setdepthbuffer)

***

### setDepthFunction()

> **setDepthFunction**(`depthFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L20)

Sets the current depth function

#### Parameters

##### depthFunc

`number`

defines the function to use

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setDepthFunction`](AbstractEngine.md#setdepthfunction)

***

### setDepthFunctionToGreater()

> **setDepthFunctionToGreater**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L25)

Sets the current depth function to GREATER

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setDepthFunctionToGreater`](AbstractEngine.md#setdepthfunctiontogreater)

***

### setDepthFunctionToGreaterOrEqual()

> **setDepthFunctionToGreaterOrEqual**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L30)

Sets the current depth function to GEQUAL

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setDepthFunctionToGreaterOrEqual`](AbstractEngine.md#setdepthfunctiontogreaterorequal)

***

### setDepthFunctionToLess()

> **setDepthFunctionToLess**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L35)

Sets the current depth function to LESS

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setDepthFunctionToLess`](AbstractEngine.md#setdepthfunctiontoless)

***

### setDepthFunctionToLessOrEqual()

> **setDepthFunctionToLessOrEqual**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L40)

Sets the current depth function to LEQUAL

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setDepthFunctionToLessOrEqual`](AbstractEngine.md#setdepthfunctiontolessorequal)

***

### setDepthStencilTexture()

#### Call Signature

> **setDepthStencilTexture**(`channel`, `uniform`, `texture`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTargetTexture.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.renderTargetTexture.ts#L15)

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

[`AbstractEngine`](AbstractEngine.md).[`setDepthStencilTexture`](AbstractEngine.md#setdepthstenciltexture)

#### Call Signature

> **setDepthStencilTexture**(`channel`, `uniform`, `texture`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetTexture.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTargetTexture.ts#L15)

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

[`AbstractEngine`](AbstractEngine.md).[`setDepthStencilTexture`](AbstractEngine.md#setdepthstenciltexture)

***

### setDepthWrite()

> **setDepthWrite**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.ts#L52)

Enable or disable depth writing

#### Parameters

##### enable

`boolean`

defines the state to set

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setDepthWrite`](AbstractEngine.md#setdepthwrite)

***

### setFloat()

> **setFloat**(`uniform`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2691](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2691)

Set the value of an uniform to a number (float)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### value

`number`

defines the float number to store

#### Returns

`boolean`

true if the value was transferred

***

### setFloat2()

> **setFloat2**(`uniform`, `x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2708](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2708)

Set the value of an uniform to a vec2

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

#### Returns

`boolean`

true if the value was set

***

### setFloat3()

> **setFloat3**(`uniform`, `x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2726](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2726)

Set the value of an uniform to a vec3

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

##### z

`number`

defines the 3rd component of the value

#### Returns

`boolean`

true if the value was set

***

### setFloat4()

> **setFloat4**(`uniform`, `x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2745](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2745)

Set the value of an uniform to a vec4

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

##### z

`number`

defines the 3rd component of the value

##### w

`number`

defines the 4th component of the value

#### Returns

`boolean`

true if the value was set

***

### setHardwareScalingLevel()

> **setHardwareScalingLevel**(`level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1998](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1998)

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

[`AbstractEngine`](AbstractEngine.md).[`setHardwareScalingLevel`](AbstractEngine.md#sethardwarescalinglevel)

***

### setInt()

> **setInt**(`uniform`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2321)

Set the value of an uniform to a number (int)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### value

`number`

defines the int number to store

#### Returns

`boolean`

true if the value was set

***

### setInt2()

> **setInt2**(`uniform`, `x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2338)

Set the value of an uniform to a int2

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

#### Returns

`boolean`

true if the value was set

***

### setInt3()

> **setInt3**(`uniform`, `x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2356)

Set the value of an uniform to a int3

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

##### z

`number`

defines the 3rd component of the value

#### Returns

`boolean`

true if the value was set

***

### setInt4()

> **setInt4**(`uniform`, `x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2375)

Set the value of an uniform to a int4

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

##### z

`number`

defines the 3rd component of the value

##### w

`number`

defines the 4th component of the value

#### Returns

`boolean`

true if the value was set

***

### setIntArray()

> **setIntArray**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2391)

Set the value of an uniform to an array of int32

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Int32Array`

defines the array of int32 to store

#### Returns

`boolean`

true if the value was set

***

### setIntArray2()

> **setIntArray2**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2407)

Set the value of an uniform to an array of int32 (stored as vec2)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Int32Array`

defines the array of int32 to store

#### Returns

`boolean`

true if the value was set

***

### setIntArray3()

> **setIntArray3**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2422)

Set the value of an uniform to an array of int32 (stored as vec3)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Int32Array`

defines the array of int32 to store

#### Returns

`boolean`

true if the value was set

***

### setIntArray4()

> **setIntArray4**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2437)

Set the value of an uniform to an array of int32 (stored as vec4)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Int32Array`

defines the array of int32 to store

#### Returns

`boolean`

true if the value was set

***

### setMatrices()

> **setMatrices**(`uniform`, `matrices`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2646](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2646)

Set the value of an uniform to an array of float32 (stored as matrices)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### matrices

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the array of float32 to store

#### Returns

`boolean`

true if the value was set

***

### setMatrix2x2()

> **setMatrix2x2**(`uniform`, `matrix`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2676)

Set the value of an uniform to a matrix (2x2)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### matrix

`Float32Array`

defines the Float32Array representing the 2x2 matrix to store

#### Returns

`boolean`

true if the value was set

***

### setMatrix3x3()

> **setMatrix3x3**(`uniform`, `matrix`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2661](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2661)

Set the value of an uniform to a matrix (3x3)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### matrix

`Float32Array`

defines the Float32Array representing the 3x3 matrix to store

#### Returns

`boolean`

true if the value was set

***

### setSize()

> **setSize**(`width`, `height`, `forceSetSize?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2142)

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

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setSize`](AbstractEngine.md#setsize)

***

### setState()

> **setState**(`culling`, `zOffset?`, `force?`, `reverseSide?`, `cullBackFaces?`, `stencil?`, `zOffsetUnits?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1156)

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

[`AbstractEngine`](AbstractEngine.md).[`setState`](AbstractEngine.md#setstate)

***

### setStateCullFaceType()

> **setStateCullFaceType**(`cullBackFaces?`, `force?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1139)

Sets the type of faces to cull

#### Parameters

##### cullBackFaces?

`boolean`

true to cull back faces, false to cull front faces (if culling is enabled)

##### force?

`boolean`

defines if states must be applied even if cache is up to date

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`setStateCullFaceType`](AbstractEngine.md#setstatecullfacetype)

***

### setStencilBackFunction()

> **setStencilBackFunction**(`stencilFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L92)

Sets the current back stencil function

#### Parameters

##### stencilFunc

`number`

defines the new back stencil function to use

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilBackFunction`](AbstractEngine.md#setstencilbackfunction)

***

### setStencilBackOperationDepthFail()

> **setStencilBackOperationDepthFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L152)

Sets the back stencil operation to use when depth fails

#### Parameters

##### operation

`number`

defines the back stencil operation to use when depth fails

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilBackOperationDepthFail`](AbstractEngine.md#setstencilbackoperationdepthfail)

***

### setStencilBackOperationFail()

> **setStencilBackOperationFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L140)

Sets the back stencil operation to use when stencil fails

#### Parameters

##### operation

`number`

defines the back stencil operation to use when stencil fails

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilBackOperationFail`](AbstractEngine.md#setstencilbackoperationfail)

***

### setStencilBackOperationPass()

> **setStencilBackOperationPass**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L164)

Sets the back stencil operation to use when stencil passes

#### Parameters

##### operation

`number`

defines the back stencil operation to use when stencil passes

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilBackOperationPass`](AbstractEngine.md#setstencilbackoperationpass)

***

### setStencilBuffer()

> **setStencilBuffer**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L45)

Enable or disable the stencil buffer

#### Parameters

##### enable

`boolean`

defines if the stencil buffer must be enabled or disabled

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilBuffer`](AbstractEngine.md#setstencilbuffer)

***

### setStencilFunction()

> **setStencilFunction**(`stencilFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L86)

Sets the current stencil function

#### Parameters

##### stencilFunc

`number`

defines the new stencil function to use

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilFunction`](AbstractEngine.md#setstencilfunction)

***

### setStencilFunctionMask()

> **setStencilFunctionMask**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L104)

Sets the current stencil mask

#### Parameters

##### mask

`number`

defines the new stencil mask to use

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilFunctionMask`](AbstractEngine.md#setstencilfunctionmask)

***

### setStencilFunctionReference()

> **setStencilFunctionReference**(`reference`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L98)

Sets the current stencil reference

#### Parameters

##### reference

`number`

defines the new stencil reference to use

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilFunctionReference`](AbstractEngine.md#setstencilfunctionreference)

***

### setStencilMask()

> **setStencilMask**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L56)

Sets the current stencil mask

#### Parameters

##### mask

`number`

defines the new stencil mask to use

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilMask`](AbstractEngine.md#setstencilmask)

***

### setStencilOperationDepthFail()

> **setStencilOperationDepthFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L146)

Sets the stencil operation to use when depth fails

#### Parameters

##### operation

`number`

defines the stencil operation to use when depth fails

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilOperationDepthFail`](AbstractEngine.md#setstenciloperationdepthfail)

***

### setStencilOperationFail()

> **setStencilOperationFail**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L134)

Sets the stencil operation to use when stencil fails

#### Parameters

##### operation

`number`

defines the stencil operation to use when stencil fails

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilOperationFail`](AbstractEngine.md#setstenciloperationfail)

***

### setStencilOperationPass()

> **setStencilOperationPass**(`operation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.ts#L158)

Sets the stencil operation to use when stencil passes

#### Parameters

##### operation

`number`

defines the stencil operation to use when stencil passes

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setStencilOperationPass`](AbstractEngine.md#setstenciloperationpass)

***

### setTexture()

> **setTexture**(`channel`, `uniform`, `texture`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3949](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3949)

Sets a texture to the according uniform.

#### Parameters

##### channel

`number`

The texture channel

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

The uniform to set

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

The texture to apply

##### name

`string`

The name of the uniform in the effect

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`setTexture`](AbstractEngine.md#settexture)

***

### setTextureArray()

> **setTextureArray**(`channel`, `uniform`, `textures`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4086](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4086)

Sets an array of texture to the webGL context

#### Parameters

##### channel

`number`

defines the channel where the texture array must be set

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the associated uniform location

##### textures

[`ThinTexture`](ThinTexture.md)[]

defines the array of textures to bind

##### name

`string`

name of the channel

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`setTextureArray`](AbstractEngine.md#settexturearray)

***

### setTextureFormatToUse()

> **setTextureFormatToUse**(`formatsAvailable`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.ts#L51)

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

[`AbstractEngine`](AbstractEngine.md).[`setTextureFormatToUse`](AbstractEngine.md#settextureformattouse)

***

### setTextureFromPostProcess()

> **setTextureFromPostProcess**(`channel`, `postProcess`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L38)

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

[`AbstractEngine`](AbstractEngine.md).[`setTextureFromPostProcess`](AbstractEngine.md#settexturefrompostprocess)

***

### setTextureFromPostProcessOutput()

> **setTextureFromPostProcessOutput**(`channel`, `postProcess`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L46)

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

[`AbstractEngine`](AbstractEngine.md).[`setTextureFromPostProcessOutput`](AbstractEngine.md#settexturefrompostprocessoutput)

***

### setUInt()

> **setUInt**(`uniform`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2452](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2452)

Set the value of an uniform to a number (unsigned int)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### value

`number`

defines the unsigned int number to store

#### Returns

`boolean`

true if the value was set

***

### setUInt2()

> **setUInt2**(`uniform`, `x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2469](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2469)

Set the value of an uniform to a unsigned int2

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

#### Returns

`boolean`

true if the value was set

***

### setUInt3()

> **setUInt3**(`uniform`, `x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2487](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2487)

Set the value of an uniform to a unsigned int3

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

##### z

`number`

defines the 3rd component of the value

#### Returns

`boolean`

true if the value was set

***

### setUInt4()

> **setUInt4**(`uniform`, `x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2506](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2506)

Set the value of an uniform to a unsigned int4

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### x

`number`

defines the 1st component of the value

##### y

`number`

defines the 2nd component of the value

##### z

`number`

defines the 3rd component of the value

##### w

`number`

defines the 4th component of the value

#### Returns

`boolean`

true if the value was set

***

### setUIntArray()

> **setUIntArray**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2522](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2522)

Set the value of an uniform to an array of unsigned int32

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Uint32Array`

defines the array of unsigned int32 to store

#### Returns

`boolean`

true if the value was set

***

### setUIntArray2()

> **setUIntArray2**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2538)

Set the value of an uniform to an array of unsigned int32 (stored as vec2)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Uint32Array`

defines the array of unsigned int32 to store

#### Returns

`boolean`

true if the value was set

***

### setUIntArray3()

> **setUIntArray3**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2553](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2553)

Set the value of an uniform to an array of unsigned int32 (stored as vec3)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Uint32Array`

defines the array of unsigned int32 to store

#### Returns

`boolean`

true if the value was set

***

### setUIntArray4()

> **setUIntArray4**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2568)

Set the value of an uniform to an array of unsigned int32 (stored as vec4)

#### Parameters

##### uniform

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

defines the webGL uniform location where to store the value

##### array

`Uint32Array`

defines the array of unsigned int32 to store

#### Returns

`boolean`

true if the value was set

***

### setViewport()

> **setViewport**(`viewport`, `requiredWidth?`, `requiredHeight?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1470)

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

[`AbstractEngine`](AbstractEngine.md).[`setViewport`](AbstractEngine.md#setviewport)

***

### setZOffset()

> **setZOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1069](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1069)

Set the z offset Factor to apply to current rendering

#### Parameters

##### value

`number`

defines the offset to apply

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setZOffset`](AbstractEngine.md#setzoffset)

***

### setZOffsetUnits()

> **setZOffsetUnits**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:1086](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L1086)

Set the z offset Units to apply to current rendering

#### Parameters

##### value

`number`

defines the offset to apply

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`setZOffsetUnits`](AbstractEngine.md#setzoffsetunits)

***

### snapshotRenderingReset()

> **snapshotRenderingReset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L259)

Creates a new snapshot at the next frame using the current snapshotRenderingMode

#### Returns

`void`

***

### startTimeQuery()

> **startTimeQuery**(): [`Nullable`](../type-aliases/Nullable.md)\<`_TimeToken`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.query.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.query.ts#L27)

Starts a time query (used to measure time spent by the GPU on a specific frame)
Please note that only one query can be issued at a time

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`_TimeToken`\>

a time token used to track the time span

***

### stopRenderLoop()

> **stopRenderLoop**(`renderFunction?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:854](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L854)

stop executing a render loop function and remove it from the execution array

#### Parameters

##### renderFunction?

() => `void`

defines the function to be removed. If not provided all functions will be removed.

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`stopRenderLoop`](AbstractEngine.md#stoprenderloop)

***

### switchFullscreen()

> **switchFullscreen**(`requestPointerLock`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.ts#L54)

Toggle full screen mode

#### Parameters

##### requestPointerLock

`boolean`

defines if a pointer lock should be requested from the user

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`switchFullscreen`](AbstractEngine.md#switchfullscreen)

***

### unbindAllAttributes()

> **unbindAllAttributes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4150)

Unbind all vertex attributes from the webGL context

#### Returns

`void`

***

### unbindAllTextures()

> **unbindAllTextures**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3930](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3930)

Unbind all textures from the webGL context

#### Returns

`void`

***

### unBindFramebuffer()

> **unBindFramebuffer**(`texture`, `disableGenerateMipMaps?`, `onBeforeUnbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1230)

Unbind the current render target texture from the webGL context

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

defines the render target wrapper to unbind

##### disableGenerateMipMaps?

`boolean`

defines a boolean indicating that mipmaps must not be generated

##### onBeforeUnbind?

() => `void`

defines a function which will be called before the effective unbind

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`unBindFramebuffer`](AbstractEngine.md#unbindframebuffer)

***

### unbindInstanceAttributes()

> **unbindInstanceAttributes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1712](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1712)

Unbind all instance attributes

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`unbindInstanceAttributes`](AbstractEngine.md#unbindinstanceattributes)

***

### unBindMultiColorAttachmentFramebuffer()

#### Call Signature

> **unBindMultiColorAttachmentFramebuffer**(`rtWrapper`, `disableGenerateMipMaps`, `onBeforeUnbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L22)

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

[`AbstractEngine`](AbstractEngine.md).[`unBindMultiColorAttachmentFramebuffer`](AbstractEngine.md#unbindmulticolorattachmentframebuffer)

#### Call Signature

> **unBindMultiColorAttachmentFramebuffer**(`rtWrapper`, `disableGenerateMipMaps`, `onBeforeUnbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L21)

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

[`AbstractEngine`](AbstractEngine.md).[`unBindMultiColorAttachmentFramebuffer`](AbstractEngine.md#unbindmulticolorattachmentframebuffer)

***

### unRegisterView()

> **unRegisterView**(`canvas`): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L80)

Remove a registered child canvas

#### Parameters

##### canvas

`HTMLCanvasElement`

defines the canvas to remove

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the current engine

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`unRegisterView`](AbstractEngine.md#unregisterview)

***

### updateAndBindInstancesBuffer()

> **updateAndBindInstancesBuffer**(`instancesBuffer`, `data`, `offsetLocations`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1759](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1759)

Update the content of a webGL buffer used with instantiation and bind it to the webGL context

#### Parameters

##### instancesBuffer

[`DataBuffer`](DataBuffer.md)

defines the webGL buffer to update and bind

##### data

`Float32Array`

defines the data to store in the buffer

##### offsetLocations

`number`[] \| [`InstancingAttributeInfo`](../interfaces/InstancingAttributeInfo.md)[]

defines the offsets or attributes information used to determine where data must be stored in the buffer

#### Returns

`void`

***

### updateArrayBuffer()

> **updateArrayBuffer**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:1460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L1460)

update the bound buffer with the given data

#### Parameters

##### data

`Float32Array`

defines the data to update

#### Returns

`void`

***

### updateDynamicIndexBuffer()

> **updateDynamicIndexBuffer**(`indexBuffer`, `indices`, `offset?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.ts#L14)

Update a dynamic index buffer

#### Parameters

##### indexBuffer

[`DataBuffer`](DataBuffer.md)

defines the target index buffer

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the data to update

##### offset?

`number`

defines the offset in the target index buffer where update should start

#### Returns

`void`

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`updateDynamicIndexBuffer`](AbstractEngine.md#updatedynamicindexbuffer)

***

### updateDynamicTexture()

#### Call Signature

> **updateDynamicTexture**(`texture`, `source`, `invertY?`, `premulAlpha?`, `format?`, `forceBindTexture?`, `allowGPUOptimization?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.dynamicTexture.ts#L30)

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

[`AbstractEngine`](AbstractEngine.md).[`updateDynamicTexture`](AbstractEngine.md#updatedynamictexture)

#### Call Signature

> **updateDynamicTexture**(`texture`, `source`, `invertY?`, `premulAlpha?`, `format?`, `forceBindTexture?`, `allowGPUOptimization?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.dynamicTexture.ts#L31)

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

[`AbstractEngine`](AbstractEngine.md).[`updateDynamicTexture`](AbstractEngine.md#updatedynamictexture)

***

### updateDynamicVertexBuffer()

> **updateDynamicVertexBuffer**(`vertexBuffer`, `data`, `byteOffset?`, `byteLength?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.ts#L23)

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

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`updateDynamicVertexBuffer`](AbstractEngine.md#updatedynamicvertexbuffer)

***

### updateMultipleRenderTargetTextureSampleCount()

#### Call Signature

> **updateMultipleRenderTargetTextureSampleCount**(`rtWrapper`, `samples`, `initializeBuffers?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.multiRender.ts#L42)

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

[`AbstractEngine`](AbstractEngine.md).[`updateMultipleRenderTargetTextureSampleCount`](AbstractEngine.md#updatemultiplerendertargettexturesamplecount)

#### Call Signature

> **updateMultipleRenderTargetTextureSampleCount**(`rtWrapper`, `samples`, `initializeBuffers?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.ts#L41)

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

[`AbstractEngine`](AbstractEngine.md).[`updateMultipleRenderTargetTextureSampleCount`](AbstractEngine.md#updatemultiplerendertargettexturesamplecount)

***

### updateRawCubeTexture()

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L49)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawCubeTexture`](AbstractEngine.md#updaterawcubetexture)

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L60)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawCubeTexture`](AbstractEngine.md#updaterawcubetexture)

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`, `level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L72)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawCubeTexture`](AbstractEngine.md#updaterawcubetexture)

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L76)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawCubeTexture`](AbstractEngine.md#updaterawcubetexture)

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L87)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawCubeTexture`](AbstractEngine.md#updaterawcubetexture)

#### Call Signature

> **updateRawCubeTexture**(`texture`, `data`, `format`, `type`, `invertY`, `compression`, `level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L99)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawCubeTexture`](AbstractEngine.md#updaterawcubetexture)

***

### updateRawTexture()

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L20)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture`](AbstractEngine.md#updaterawtexture)

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`, `compression`, `type`, `useSRGBBuffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L32)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture`](AbstractEngine.md#updaterawtexture)

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L21)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture`](AbstractEngine.md#updaterawtexture)

#### Call Signature

> **updateRawTexture**(`texture`, `data`, `format`, `invertY`, `compression`, `type`, `useSRGBBuffer`, `mipLevel?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L34)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture`](AbstractEngine.md#updaterawtexture)

***

### updateRawTexture2DArray()

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L159)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture2DArray`](AbstractEngine.md#updaterawtexture2darray)

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L170)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture2DArray`](AbstractEngine.md#updaterawtexture2darray)

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L186)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture2DArray`](AbstractEngine.md#updaterawtexture2darray)

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L197)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture2DArray`](AbstractEngine.md#updaterawtexture2darray)

#### Call Signature

> **updateRawTexture2DArray**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`, `mipLevel?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L216)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture2DArray`](AbstractEngine.md#updaterawtexture2darray)

***

### updateRawTexture3D()

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L139)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture3D`](AbstractEngine.md#updaterawtexture3d)

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.rawTexture.ts#L150)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture3D`](AbstractEngine.md#updaterawtexture3d)

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L166)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture3D`](AbstractEngine.md#updaterawtexture3d)

#### Call Signature

> **updateRawTexture3D**(`texture`, `data`, `format`, `invertY`, `compression`, `textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.rawTexture.ts#L177)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRawTexture3D`](AbstractEngine.md#updaterawtexture3d)

***

### updateRenderTargetTextureSampleCount()

#### Call Signature

> **updateRenderTargetTextureSampleCount**(`rtWrapper`, `samples`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.renderTarget.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.renderTarget.ts#L39)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRenderTargetTextureSampleCount`](AbstractEngine.md#updaterendertargettexturesamplecount)

#### Call Signature

> **updateRenderTargetTextureSampleCount**(`rtWrapper`, `samples`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.renderTarget.ts#L31)

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

[`AbstractEngine`](AbstractEngine.md).[`updateRenderTargetTextureSampleCount`](AbstractEngine.md#updaterendertargettexturesamplecount)

***

### updateTextureData()

> **updateTextureData**(`texture`, `imageData`, `xOffset`, `yOffset`, `width`, `height`, `faceIndex?`, `lod?`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3540)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3334)

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

[`AbstractEngine`](AbstractEngine.md).[`updateTextureDimensions`](AbstractEngine.md#updatetexturedimensions)

***

### updateTextureSamplingMode()

> **updateTextureSamplingMode**(`samplingMode`, `texture`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3310)

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

[`AbstractEngine`](AbstractEngine.md).[`updateTextureSamplingMode`](AbstractEngine.md#updatetexturesamplingmode)

***

### updateTextureWrappingMode()

> **updateTextureWrappingMode**(`texture`, `wrapU`, `wrapV?`, `wrapR?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:3343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L3343)

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

[`AbstractEngine`](AbstractEngine.md).[`updateTextureWrappingMode`](AbstractEngine.md#updatetexturewrappingmode)

***

### updateUniformBuffer()

> **updateUniformBuffer**(`uniformBuffer`, `elements`, `offset?`, `count?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.ts#L37)

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

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`updateUniformBuffer`](AbstractEngine.md#updateuniformbuffer)

***

### updateVideoTexture()

#### Call Signature

> **updateVideoTexture**(`texture`, `video`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.videoTexture.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Extensions/engine.videoTexture.ts#L16)

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

[`AbstractEngine`](AbstractEngine.md).[`updateVideoTexture`](AbstractEngine.md#updatevideotexture)

#### Call Signature

> **updateVideoTexture**(`texture`, `video`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.videoTexture.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/Extensions/engine.videoTexture.ts#L16)

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

[`AbstractEngine`](AbstractEngine.md).[`updateVideoTexture`](AbstractEngine.md#updatevideotexture)

***

### wipeCaches()

> **wipeCaches**(`bruteForce?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:2779](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L2779)

Force the entire cache to be cleared
You should not have to use this function unless your engine needs to share the webGL context with another engine

#### Parameters

##### bruteForce?

`boolean`

defines a boolean to force clearing ALL caches (including stencil, detoh and alpha states)

#### Returns

`void`

#### Overrides

[`AbstractEngine`](AbstractEngine.md).[`wipeCaches`](AbstractEngine.md#wipecaches)

***

### DefaultLoadingScreenFactory()

> `static` **DefaultLoadingScreenFactory**(`canvas`): [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2778](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2778)

Method called to create the default loading screen.
This can be overridden in your own app.

#### Parameters

##### canvas

`HTMLCanvasElement`

The rendering canvas element

#### Returns

[`ILoadingScreen`](../interfaces/ILoadingScreen.md)

#### Inherited from

[`AbstractEngine`](AbstractEngine.md).[`DefaultLoadingScreenFactory`](AbstractEngine.md#defaultloadingscreenfactory)

***

### isSupported()

> `static` **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:4671](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L4671)

Gets a boolean indicating if the engine can be instantiated (ie. if a webGL context can be found)

#### Returns

`boolean`

true if the engine can be created

***

### MarkAllMaterialsAsDirty()

> `static` **MarkAllMaterialsAsDirty**(`flag`, `predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:2812](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L2812)

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

[`AbstractEngine`](AbstractEngine.md).[`MarkAllMaterialsAsDirty`](AbstractEngine.md#markallmaterialsasdirty)
