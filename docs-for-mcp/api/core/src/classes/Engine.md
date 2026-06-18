[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Engine

# Class: Engine

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L42)

The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio

## Extends

- [`ThinEngine`](ThinEngine.md)

## Extended by

- [`NullEngine`](NullEngine.md)

## Constructors

### Constructor

> **new Engine**(`canvasOrContext`, `antialias?`, `options?`, `adaptToDeviceRatio?`): `Engine`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L353)

Creates a new engine

#### Parameters

##### canvasOrContext

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement` \| `OffscreenCanvas` \| `WebGLRenderingContext` \| `WebGL2RenderingContext`\>

defines the canvas or WebGL context to use for rendering. If you provide a WebGL context, Babylon.js will not hook events on the canvas (like pointers, keyboards, etc...) so no event observables will be available. This is mostly used when Babylon.js is used as a plugin on a system which already used the WebGL context

##### antialias?

`boolean`

defines enable antialiasing (default: false)

##### options?

[`EngineOptions`](../interfaces/EngineOptions.md)

defines further options to be sent to the getContext() function

##### adaptToDeviceRatio?

`boolean` = `false`

defines whether to adapt to the device's viewport characteristics (default: false)

#### Returns

`Engine`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`constructor`](ThinEngine.md#constructor)

## Properties

### activeView

> **activeView**: [`Nullable`](../type-aliases/Nullable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L35)

Gets the current engine view

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/multiCanvas

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`activeView`](ThinEngine.md#activeview)

***

### adaptToDeviceRatio

> **adaptToDeviceRatio**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2034](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2034)

If set to true zooming in and out in the browser will rescale the hardware-scaling correctly.

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`adaptToDeviceRatio`](ThinEngine.md#adapttodeviceratio)

***

### canvasTabIndex

> **canvasTabIndex**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:486](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L486)

Gets or sets the tab index to set to the rendering canvas. 1 is the minimum value to set to be able to capture keyboard events

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`canvasTabIndex`](ThinEngine.md#canvastabindex)

***

### cullBackFaces

> **cullBackFaces**: [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2454)

Gets or sets a boolean indicating if back faces must be culled. If false, front faces are culled instead (true by default)
If non null, this takes precedence over the value from the material

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`cullBackFaces`](ThinEngine.md#cullbackfaces)

***

### currentRenderPassId

> **currentRenderPassId**: `number` = `Constants.RENDERPASS_MAIN`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L473)

Gets or sets the current render pass id

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`currentRenderPassId`](ThinEngine.md#currentrenderpassid)

***

### customAnimationFrameRequester

> **customAnimationFrameRequester**: [`Nullable`](../type-aliases/Nullable.md)\<[`ICustomAnimationFrameRequester`](../interfaces/ICustomAnimationFrameRequester.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:866](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L866)

If set, will be used to request the next animation frame for the render loop

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`customAnimationFrameRequester`](ThinEngine.md#customanimationframerequester)

***

### disableContextMenu

> **disableContextMenu**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L468)

Gets or sets a boolean to enable/disable the context menu (right-click) from appearing on the main canvas

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableContextMenu`](ThinEngine.md#disablecontextmenu)

***

### disableManifestCheck

> **disableManifestCheck**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:463](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L463)

Gets or sets a boolean to enable/disable checking manifest if IndexedDB support is enabled (js will always consider the database is up to date)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableManifestCheck`](ThinEngine.md#disablemanifestcheck)

***

### disablePerformanceMonitorInBackground

> **disablePerformanceMonitorInBackground**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L337)

Turn this value on if you want to pause FPS computation when in background

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disablePerformanceMonitorInBackground`](ThinEngine.md#disableperformancemonitorinbackground)

***

### disableUniformBuffers

> **disableUniformBuffers**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L177)

Gets or sets a boolean indicating that uniform buffers must be disabled even if they are supported

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableUniformBuffers`](ThinEngine.md#disableuniformbuffers)

***

### disableVertexArrayObjects

> **disableVertexArrayObjects**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L342)

Gets or sets a boolean indicating that vertex array object must be disabled even if they are supported

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableVertexArrayObjects`](ThinEngine.md#disablevertexarrayobjects)

***

### enableOfflineSupport

> **enableOfflineSupport**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L458)

Gets or sets a boolean to enable/disable IndexedDB support and avoid XHR on .manifest

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`enableOfflineSupport`](ThinEngine.md#enableofflinesupport)

***

### enableUnpackFlipYCached

> **enableUnpackFlipYCached**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3274)

In case you are sharing the context with other applications, it might
be interested to not cache the unpack flip y state to ensure a consistent
value would be set.

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`enableUnpackFlipYCached`](ThinEngine.md#enableunpackflipycached)

***

### forcePOTTextures

> **forcePOTTextures**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L169)

Gets or sets a boolean that indicates if textures must be forced to power of 2 size even if not required

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`forcePOTTextures`](ThinEngine.md#forcepottextures)

***

### hasOriginBottomLeft

> `readonly` **hasOriginBottomLeft**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L591)

Indicates that the origin of the texture/framebuffer space is the bottom left corner. If false, the origin is top left

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`hasOriginBottomLeft`](ThinEngine.md#hasoriginbottomleft)

***

### hostInformation

> **hostInformation**: [`HostInformation`](../interfaces/HostInformation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L446)

Gets information about the current host

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`hostInformation`](ThinEngine.md#hostinformation)

***

### inputElement

> **inputElement**: [`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L14)

Gets or sets the  HTML element to use for attaching events

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`inputElement`](ThinEngine.md#inputelement)

***

### isFullscreen

> **isFullscreen**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L453)

Gets a boolean indicating if the engine is currently rendering in fullscreen mode

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`isFullscreen`](ThinEngine.md#isfullscreen)

***

### isNDCHalfZRange

> `readonly` **isNDCHalfZRange**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L586)

Indicates if the z range in NDC space is 0..1 (value: true) or -1..1 (value: false)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`isNDCHalfZRange`](ThinEngine.md#isndchalfzrange)

***

### isPointerLock

> **isPointerLock**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L478)

Gets a boolean indicating if the pointer is currently locked

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`isPointerLock`](ThinEngine.md#ispointerlock)

***

### loadingScreen

> **loadingScreen**: [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L21)

Gets or sets the current loading screen object

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`loadingScreen`](ThinEngine.md#loadingscreen)

***

### loadingUIBackgroundColor

> **loadingUIBackgroundColor**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L33)

Sets the current loading screen background color

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`loadingUIBackgroundColor`](ThinEngine.md#loadinguibackgroundcolor)

***

### loadingUIText

> **loadingUIText**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.loadingScreen.types.ts#L27)

Sets the current loading screen text

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`loadingUIText`](ThinEngine.md#loadinguitext)

***

### onAfterShaderCompilationObservable

> **onAfterShaderCompilationObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1187)

Observable raised when the engine has just compiled a shader

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onAfterShaderCompilationObservable`](ThinEngine.md#onaftershadercompilationobservable)

***

### onAfterViewRenderObservable

> `readonly` **onAfterViewRenderObservable**: [`Observable`](Observable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L29)

Will be triggered after the view rendered

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onAfterViewRenderObservable`](ThinEngine.md#onafterviewrenderobservable)

***

### onBeforeShaderCompilationObservable

> **onBeforeShaderCompilationObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1182)

Observable raised when the engine is about to compile a shader

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onBeforeShaderCompilationObservable`](ThinEngine.md#onbeforeshadercompilationobservable)

***

### onBeforeTextureInitObservable

> **onBeforeTextureInitObservable**: [`Observable`](Observable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:774](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L774)

Observable event triggered before each texture is initialized

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onBeforeTextureInitObservable`](ThinEngine.md#onbeforetextureinitobservable)

***

### onBeforeViewRenderObservable

> `readonly` **onBeforeViewRenderObservable**: [`Observable`](Observable.md)\<[`EngineView`](EngineView.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L25)

Will be triggered before the view renders

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onBeforeViewRenderObservable`](ThinEngine.md#onbeforeviewrenderobservable)

***

### onBeginFrameObservable

> **onBeginFrameObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1192)

Observable raised when the engine begins a new frame

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onBeginFrameObservable`](ThinEngine.md#onbeginframeobservable)

***

### onCanvasBlurObservable

> **onCanvasBlurObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L308)

Observable event triggered each time the canvas loses focus

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onCanvasBlurObservable`](ThinEngine.md#oncanvasblurobservable)

***

### onCanvasFocusObservable

> **onCanvasFocusObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L312)

Observable event triggered each time the canvas gains focus

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onCanvasFocusObservable`](ThinEngine.md#oncanvasfocusobservable)

***

### onCanvasPointerOutObservable

> **onCanvasPointerOutObservable**: [`Observable`](Observable.md)\<`PointerEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L327)

Observable event triggered each time the canvas receives pointerout event

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onCanvasPointerOutObservable`](ThinEngine.md#oncanvaspointeroutobservable)

***

### onContextLostObservable

> **onContextLostObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1913)

Observable signaled when a context lost event is raised

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onContextLostObservable`](ThinEngine.md#oncontextlostobservable)

***

### onContextRestoredObservable

> **onContextRestoredObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1917)

Observable signaled when a context restored event is raised

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onContextRestoredObservable`](ThinEngine.md#oncontextrestoredobservable)

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2725](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2725)

An event triggered when the engine is disposed.

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onDisposeObservable`](ThinEngine.md#ondisposeobservable)

***

### onEffectErrorObservable

> **onEffectErrorObservable**: [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `errors`: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L332)

Observable event triggered each time an effect compilation fails

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onEffectErrorObservable`](ThinEngine.md#oneffecterrorobservable)

***

### onEndFrameObservable

> **onEndFrameObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1197)

Observable raised when the engine ends the current frame (requires a render loop, e.g. 'engine.runRenderLoop(...)')

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onEndFrameObservable`](ThinEngine.md#onendframeobservable)

***

### onNewSceneAddedObservable

> **onNewSceneAddedObservable**: [`Observable`](Observable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L317)

Event raised when a new scene is created

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onNewSceneAddedObservable`](ThinEngine.md#onnewsceneaddedobservable)

***

### onReleaseEffectsObservable

> `readonly` **onReleaseEffectsObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2730](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2730)

An event triggered when a global cleanup of all effects is required

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onReleaseEffectsObservable`](ThinEngine.md#onreleaseeffectsobservable)

***

### onResizeObservable

> **onResizeObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L322)

Observable event triggered each time the rendering canvas is resized

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`onResizeObservable`](ThinEngine.md#onresizeobservable)

***

### postProcesses

> **postProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L483)

Gets the list of created postprocesses

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`postProcesses`](ThinEngine.md#postprocesses)

***

### premultipliedAlpha

> **premultipliedAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2029)

Defines whether the engine has been created with the premultipliedAlpha option on or not.

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`premultipliedAlpha`](ThinEngine.md#premultipliedalpha)

***

### preventCacheWipeBetweenFrames

> **preventCacheWipeBetweenFrames**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:784](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L784)

Gets or sets a boolean indicating that cache can be kept between frames

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`preventCacheWipeBetweenFrames`](ThinEngine.md#preventcachewipebetweenframes)

***

### renderEvenInBackground

> **renderEvenInBackground**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:779](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L779)

Gets or sets a boolean indicating if the engine must keep rendering even if the window is not in foreground

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`renderEvenInBackground`](ThinEngine.md#rendereveninbackground)

***

### scenes

> **scenes**: [`Scene`](Scene.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:742](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L742)

Gets the list of created scenes

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`scenes`](ThinEngine.md#scenes)

***

### skipFrameRender

> **skipFrameRender**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:966](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L966)

Skip frame rendering but keep the frame heartbeat (begin/end frame).
This is useful if you need all the plumbing but not the rendering work.
(for instance when capturing a screenshot where you do not want to mix rendering to the screen and to the screenshot)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`skipFrameRender`](ThinEngine.md#skipframerender)

***

### startTime

> `readonly` **startTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1994](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1994)

The time (in milliseconds elapsed since the current page has been loaded) when the engine was initialized

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`startTime`](ThinEngine.md#starttime)

***

### textureFormatInUse

> `readonly` **textureFormatInUse**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts#L19)

Gets the texture format in use

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`textureFormatInUse`](ThinEngine.md#textureformatinuse)

***

### texturesSupported

> `readonly` **texturesSupported**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.textureSelector.types.ts#L14)

Gets the list of texture formats supported

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`texturesSupported`](ThinEngine.md#texturessupported)

***

### useExactSrgbConversions

> `readonly` **useExactSrgbConversions**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L596)

Gets a boolean indicating if the exact sRGB conversions or faster approximations are used for converting to and from linear space.

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`useExactSrgbConversions`](ThinEngine.md#useexactsrgbconversions)

***

### validateShaderPrograms

> **validateShaderPrograms**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L172)

Gets or sets a boolean indicating if the engine should validate programs after compilation

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`validateShaderPrograms`](ThinEngine.md#validateshaderprograms)

***

### views

> **views**: [`EngineView`](EngineView.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.types.ts#L38)

Gets or sets the list of views

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`views`](ThinEngine.md#views)

***

### \_RescalePostProcessFactory

> `static` **\_RescalePostProcessFactory**: [`Nullable`](../type-aliases/Nullable.md)\<(`engine`) => [`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2819)

Method called to create the default rescale post process on each engine.

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`_RescalePostProcessFactory`](ThinEngine.md#_rescalepostprocessfactory)

***

### ALPHA\_ADD

> `readonly` `static` **ALPHA\_ADD**: `1` = `Constants.ALPHA_ADD`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L48)

Defines that alpha blending to SRC ALPHA * SRC + DEST

***

### ALPHA\_COMBINE

> `readonly` `static` **ALPHA\_COMBINE**: `2` = `Constants.ALPHA_COMBINE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L50)

Defines that alpha blending to SRC ALPHA * SRC + (1 - SRC ALPHA) * DEST

***

### ALPHA\_DISABLE

> `readonly` `static` **ALPHA\_DISABLE**: `0` = `Constants.ALPHA_DISABLE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L46)

Defines that alpha blending is disabled

***

### ALPHA\_INTERPOLATE

> `readonly` `static` **ALPHA\_INTERPOLATE**: `9` = `Constants.ALPHA_INTERPOLATE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L67)

Defines that alpha blending to CST * SRC + (1 - CST) * DEST

***

### ALPHA\_MAXIMIZED

> `readonly` `static` **ALPHA\_MAXIMIZED**: `5` = `Constants.ALPHA_MAXIMIZED`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L56)

Defines that alpha blending to SRC ALPHA * SRC + (1 - SRC) * DEST

***

### ALPHA\_MULTIPLY

> `readonly` `static` **ALPHA\_MULTIPLY**: `4` = `Constants.ALPHA_MULTIPLY`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L54)

Defines that alpha blending to SRC * DEST

***

### ALPHA\_ONEONE

> `readonly` `static` **ALPHA\_ONEONE**: `6` = `Constants.ALPHA_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L58)

Defines that alpha blending to SRC + DEST

***

### ALPHA\_PREMULTIPLIED

> `readonly` `static` **ALPHA\_PREMULTIPLIED**: `7` = `Constants.ALPHA_PREMULTIPLIED`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L60)

Defines that alpha blending to SRC + (1 - SRC ALPHA) * DEST

***

### ALPHA\_PREMULTIPLIED\_PORTERDUFF

> `readonly` `static` **ALPHA\_PREMULTIPLIED\_PORTERDUFF**: `8` = `Constants.ALPHA_PREMULTIPLIED_PORTERDUFF`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L65)

Defines that alpha blending to SRC + (1 - SRC ALPHA) * DEST
Alpha will be set to (1 - SRC ALPHA) * DEST ALPHA

***

### ALPHA\_SCREENMODE

> `readonly` `static` **ALPHA\_SCREENMODE**: `10` = `Constants.ALPHA_SCREENMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L72)

Defines that alpha blending to SRC + (1 - SRC) * DEST
Alpha will be set to SRC ALPHA + (1 - SRC ALPHA) * DEST ALPHA

***

### ALPHA\_SUBTRACT

> `readonly` `static` **ALPHA\_SUBTRACT**: `3` = `Constants.ALPHA_SUBTRACT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L52)

Defines that alpha blending to DEST - SRC * DEST

***

### ALWAYS

> `readonly` `static` **ALWAYS**: `519` = `Constants.ALWAYS`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L87)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn

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

[`ThinEngine`](ThinEngine.md).[`audioEngine`](ThinEngine.md#audioengine)

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

[`ThinEngine`](ThinEngine.md).[`AudioEngineFactory`](ThinEngine.md#audioenginefactory)

***

### CollisionsEpsilon

> `static` **CollisionsEpsilon**: `number` = `0.001`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2876](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2876)

Gets or sets the epsilon value used by collision engine

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`CollisionsEpsilon`](ThinEngine.md#collisionsepsilon)

***

### DECR

> `readonly` `static` **DECR**: `7683` = `Constants.DECR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L109)

Passed to stencilOperation to specify that stencil value must be decremented

***

### DECR\_WRAP

> `readonly` `static` **DECR\_WRAP**: `34056` = `Constants.DECR_WRAP`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L115)

Passed to stencilOperation to specify that stencil value must be decremented with wrapping

***

### DELAYLOADSTATE\_LOADED

> `readonly` `static` **DELAYLOADSTATE\_LOADED**: `1` = `Constants.DELAYLOADSTATE_LOADED`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L77)

Defines that the resource was successfully delay loaded

***

### DELAYLOADSTATE\_LOADING

> `readonly` `static` **DELAYLOADSTATE\_LOADING**: `2` = `Constants.DELAYLOADSTATE_LOADING`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L79)

Defines that the resource is currently delay loading

***

### DELAYLOADSTATE\_NONE

> `readonly` `static` **DELAYLOADSTATE\_NONE**: `0` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L75)

Defines that the resource is not delayed

***

### DELAYLOADSTATE\_NOTLOADED

> `readonly` `static` **DELAYLOADSTATE\_NOTLOADED**: `4` = `Constants.DELAYLOADSTATE_NOTLOADED`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L81)

Defines that the resource is delayed and has not started loading

***

### EQUAL

> `readonly` `static` **EQUAL**: `514` = `Constants.EQUAL`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L91)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value

***

### ExceptionList

> `static` **ExceptionList**: (\{ `capture`: `string`; `captureConstraint`: `number`; `key`: `string`; `targets`: `string`[]; \} \| \{ `capture`: `null`; `captureConstraint`: `null`; `key`: `string`; `targets`: `string`[]; \})[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L118)

Use this array to turn off some WebGL2 features on known buggy browsers version

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`ExceptionList`](ThinEngine.md#exceptionlist)

***

### GEQUAL

> `readonly` `static` **GEQUAL**: `518` = `Constants.GEQUAL`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L97)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value

***

### GREATER

> `readonly` `static` **GREATER**: `516` = `Constants.GREATER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L95)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value

***

### INCR

> `readonly` `static` **INCR**: `7682` = `Constants.INCR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L107)

Passed to stencilOperation to specify that stencil value must be incremented

***

### INCR\_WRAP

> `readonly` `static` **INCR\_WRAP**: `34055` = `Constants.INCR_WRAP`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L113)

Passed to stencilOperation to specify that stencil value must be incremented with wrapping

***

### INVERT

> `readonly` `static` **INVERT**: `5386` = `Constants.INVERT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L111)

Passed to stencilOperation to specify that stencil value must be inverted

***

### KEEP

> `readonly` `static` **KEEP**: `7680` = `Constants.KEEP`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L103)

Passed to stencilOperation to specify that stencil value must be kept

***

### LEQUAL

> `readonly` `static` **LEQUAL**: `515` = `Constants.LEQUAL`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L93)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value

***

### LESS

> `readonly` `static` **LESS**: `513` = `Constants.LESS`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L89)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value

***

### NEVER

> `readonly` `static` **NEVER**: `512` = `Constants.NEVER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L85)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn

***

### NOTEQUAL

> `readonly` `static` **NOTEQUAL**: `517` = `Constants.NOTEQUAL`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L99)

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value

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

[`ThinEngine`](ThinEngine.md).[`OfflineProviderFactory`](ThinEngine.md#offlineproviderfactory)

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

[`ThinEngine`](ThinEngine.md).[`QueueNewFrame`](ThinEngine.md#queuenewframe)

***

### REPLACE

> `readonly` `static` **REPLACE**: `7681` = `Constants.REPLACE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L105)

Passed to stencilOperation to specify that stencil value must be replaced

***

### SCALEMODE\_CEILING

> `readonly` `static` **SCALEMODE\_CEILING**: `3` = `Constants.SCALEMODE_CEILING`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L271)

Defines that texture rescaling will use a ceil to find the closer power of 2 size

***

### SCALEMODE\_FLOOR

> `readonly` `static` **SCALEMODE\_FLOOR**: `1` = `Constants.SCALEMODE_FLOOR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L267)

Defines that texture rescaling will use a floor to find the closer power of 2 size

***

### SCALEMODE\_NEAREST

> `readonly` `static` **SCALEMODE\_NEAREST**: `2` = `Constants.SCALEMODE_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L269)

Defines that texture rescaling will look for the nearest power of 2 size

***

### TEXTURE\_BILINEAR\_SAMPLINGMODE

> `readonly` `static` **TEXTURE\_BILINEAR\_SAMPLINGMODE**: `2` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L213)

Bilinear is mag = linear and min = linear and mip = nearest

***

### TEXTURE\_CLAMP\_ADDRESSMODE

> `readonly` `static` **TEXTURE\_CLAMP\_ADDRESSMODE**: `0` = `Constants.TEXTURE_CLAMP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L118)

Texture is not repeating outside of 0..1 UVs

***

### TEXTURE\_CUBIC\_MODE

> `readonly` `static` **TEXTURE\_CUBIC\_MODE**: `3` = `Constants.TEXTURE_CUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L248)

Cubic coordinates mode

***

### TEXTURE\_EQUIRECTANGULAR\_MODE

> `readonly` `static` **TEXTURE\_EQUIRECTANGULAR\_MODE**: `7` = `Constants.TEXTURE_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L257)

Equirectangular coordinates mode

***

### TEXTURE\_EXPLICIT\_MODE

> `readonly` `static` **TEXTURE\_EXPLICIT\_MODE**: `0` = `Constants.TEXTURE_EXPLICIT_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L242)

Explicit coordinates mode

***

### TEXTURE\_FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE

> `readonly` `static` **TEXTURE\_FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE**: `9` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L263)

Equirectangular Fixed Mirrored coordinates mode

***

### TEXTURE\_FIXED\_EQUIRECTANGULAR\_MODE

> `readonly` `static` **TEXTURE\_FIXED\_EQUIRECTANGULAR\_MODE**: `8` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L260)

Equirectangular Fixed coordinates mode

***

### TEXTURE\_INVCUBIC\_MODE

> `readonly` `static` **TEXTURE\_INVCUBIC\_MODE**: `6` = `Constants.TEXTURE_INVCUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L254)

Inverse Cubic coordinates mode

***

### TEXTURE\_LINEAR\_LINEAR

> `readonly` `static` **TEXTURE\_LINEAR\_LINEAR**: `2` = `Constants.TEXTURE_LINEAR_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L237)

mag = linear and min = linear and mip = none

***

### TEXTURE\_LINEAR\_LINEAR\_MIPLINEAR

> `readonly` `static` **TEXTURE\_LINEAR\_LINEAR\_MIPLINEAR**: `3` = `Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L221)

Trilinear is mag = linear and min = linear and mip = linear

***

### TEXTURE\_LINEAR\_LINEAR\_MIPNEAREST

> `readonly` `static` **TEXTURE\_LINEAR\_LINEAR\_MIPNEAREST**: `11` = `Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L219)

Bilinear is mag = linear and min = linear and mip = nearest

***

### TEXTURE\_LINEAR\_NEAREST

> `readonly` `static` **TEXTURE\_LINEAR\_NEAREST**: `12` = `Constants.TEXTURE_LINEAR_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L239)

mag = linear and min = nearest and mip = none

***

### TEXTURE\_LINEAR\_NEAREST\_MIPLINEAR

> `readonly` `static` **TEXTURE\_LINEAR\_NEAREST\_MIPLINEAR**: `10` = `Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L235)

mag = linear and min = nearest and mip = linear

***

### TEXTURE\_LINEAR\_NEAREST\_MIPNEAREST

> `readonly` `static` **TEXTURE\_LINEAR\_NEAREST\_MIPNEAREST**: `9` = `Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L233)

mag = linear and min = nearest and mip = nearest

***

### TEXTURE\_MIRROR\_ADDRESSMODE

> `readonly` `static` **TEXTURE\_MIRROR\_ADDRESSMODE**: `2` = `Constants.TEXTURE_MIRROR_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L122)

Texture is repeating and mirrored

***

### TEXTURE\_NEAREST\_LINEAR

> `readonly` `static` **TEXTURE\_NEAREST\_LINEAR**: `7` = `Constants.TEXTURE_NEAREST_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L229)

mag = nearest and min = linear and mip = none

***

### TEXTURE\_NEAREST\_LINEAR\_MIPLINEAR

> `readonly` `static` **TEXTURE\_NEAREST\_LINEAR\_MIPLINEAR**: `6` = `Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L227)

mag = nearest and min = linear and mip = linear

***

### TEXTURE\_NEAREST\_LINEAR\_MIPNEAREST

> `readonly` `static` **TEXTURE\_NEAREST\_LINEAR\_MIPNEAREST**: `5` = `Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L225)

mag = nearest and min = linear and mip = nearest

***

### TEXTURE\_NEAREST\_NEAREST

> `readonly` `static` **TEXTURE\_NEAREST\_NEAREST**: `1` = `Constants.TEXTURE_NEAREST_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L231)

mag = nearest and min = nearest and mip = none

***

### TEXTURE\_NEAREST\_NEAREST\_MIPLINEAR

> `readonly` `static` **TEXTURE\_NEAREST\_NEAREST\_MIPLINEAR**: `8` = `Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L217)

nearest is mag = nearest and min = nearest and mip = linear

***

### TEXTURE\_NEAREST\_NEAREST\_MIPNEAREST

> `readonly` `static` **TEXTURE\_NEAREST\_NEAREST\_MIPNEAREST**: `4` = `Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L223)

mag = nearest and min = nearest and mip = nearest

***

### TEXTURE\_NEAREST\_SAMPLINGMODE

> `readonly` `static` **TEXTURE\_NEAREST\_SAMPLINGMODE**: `1` = `Constants.TEXTURE_NEAREST_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L211)

nearest is mag = nearest and min = nearest and mip = none

***

### TEXTURE\_PLANAR\_MODE

> `readonly` `static` **TEXTURE\_PLANAR\_MODE**: `2` = `Constants.TEXTURE_PLANAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L246)

Planar coordinates mode

***

### TEXTURE\_PROJECTION\_MODE

> `readonly` `static` **TEXTURE\_PROJECTION\_MODE**: `4` = `Constants.TEXTURE_PROJECTION_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L250)

Projection coordinates mode

***

### TEXTURE\_SKYBOX\_MODE

> `readonly` `static` **TEXTURE\_SKYBOX\_MODE**: `5` = `Constants.TEXTURE_SKYBOX_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L252)

Skybox coordinates mode

***

### TEXTURE\_SPHERICAL\_MODE

> `readonly` `static` **TEXTURE\_SPHERICAL\_MODE**: `1` = `Constants.TEXTURE_SPHERICAL_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L244)

Spherical coordinates mode

***

### TEXTURE\_TRILINEAR\_SAMPLINGMODE

> `readonly` `static` **TEXTURE\_TRILINEAR\_SAMPLINGMODE**: `3` = `Constants.TEXTURE_TRILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L215)

Trilinear is mag = linear and min = linear and mip = linear

***

### TEXTURE\_WRAP\_ADDRESSMODE

> `readonly` `static` **TEXTURE\_WRAP\_ADDRESSMODE**: `1` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L120)

Texture is repeating outside of 0..1 UVs

***

### TEXTUREFORMAT\_ALPHA

> `readonly` `static` **TEXTUREFORMAT\_ALPHA**: `0` = `Constants.TEXTUREFORMAT_ALPHA`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L125)

ALPHA

***

### TEXTUREFORMAT\_LUMINANCE

> `readonly` `static` **TEXTUREFORMAT\_LUMINANCE**: `1` = `Constants.TEXTUREFORMAT_LUMINANCE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L127)

LUMINANCE

***

### TEXTUREFORMAT\_LUMINANCE\_ALPHA

> `readonly` `static` **TEXTUREFORMAT\_LUMINANCE\_ALPHA**: `2` = `Constants.TEXTUREFORMAT_LUMINANCE_ALPHA`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L129)

LUMINANCE_ALPHA

***

### TEXTUREFORMAT\_R

> `readonly` `static` **TEXTUREFORMAT\_R**: `6` = `Constants.TEXTUREFORMAT_R`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L139)

RED (2nd reference)

***

### TEXTUREFORMAT\_R\_INTEGER

> `readonly` `static` **TEXTUREFORMAT\_R\_INTEGER**: `8` = `Constants.TEXTUREFORMAT_R_INTEGER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L165)

RED_INTEGER (2nd reference)

***

### TEXTUREFORMAT\_R16\_SNORM

> `readonly` `static` **TEXTUREFORMAT\_R16\_SNORM**: `36760` = `Constants.TEXTUREFORMAT_R16_SNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L151)

RED signed short normed to [-1, 1] *

***

### TEXTUREFORMAT\_R16\_UNORM

> `readonly` `static` **TEXTUREFORMAT\_R16\_UNORM**: `33322` = `Constants.TEXTUREFORMAT_R16_UNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L141)

RED unsigned short normed to [0, 1] *

***

### TEXTUREFORMAT\_RED

> `readonly` `static` **TEXTUREFORMAT\_RED**: `6` = `Constants.TEXTUREFORMAT_RED`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L137)

RED

***

### TEXTUREFORMAT\_RED\_INTEGER

> `readonly` `static` **TEXTUREFORMAT\_RED\_INTEGER**: `8` = `Constants.TEXTUREFORMAT_RED_INTEGER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L163)

RED_INTEGER

***

### TEXTUREFORMAT\_RG

> `readonly` `static` **TEXTUREFORMAT\_RG**: `7` = `Constants.TEXTUREFORMAT_RG`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L161)

RG

***

### TEXTUREFORMAT\_RG\_INTEGER

> `readonly` `static` **TEXTUREFORMAT\_RG\_INTEGER**: `9` = `Constants.TEXTUREFORMAT_RG_INTEGER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L167)

RG_INTEGER

***

### TEXTUREFORMAT\_RG16\_SNORM

> `readonly` `static` **TEXTUREFORMAT\_RG16\_SNORM**: `36761` = `Constants.TEXTUREFORMAT_RG16_SNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L153)

RG signed short normed to [-1, 1] *

***

### TEXTUREFORMAT\_RG16\_UNORM

> `readonly` `static` **TEXTUREFORMAT\_RG16\_UNORM**: `33324` = `Constants.TEXTUREFORMAT_RG16_UNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L143)

RG unsigned short normed to [0, 1] *

***

### TEXTUREFORMAT\_RGB

> `readonly` `static` **TEXTUREFORMAT\_RGB**: `4` = `Constants.TEXTUREFORMAT_RGB`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L132)

RGB

***

### TEXTUREFORMAT\_RGB\_INTEGER

> `readonly` `static` **TEXTUREFORMAT\_RGB\_INTEGER**: `10` = `Constants.TEXTUREFORMAT_RGB_INTEGER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L170)

RGB_INTEGER

***

### TEXTUREFORMAT\_RGB16\_SNORM

> `readonly` `static` **TEXTUREFORMAT\_RGB16\_SNORM**: `36762` = `Constants.TEXTUREFORMAT_RGB16_SNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L156)

RGB signed short normed to [-1, 1] *

***

### TEXTUREFORMAT\_RGB16\_UNORM

> `readonly` `static` **TEXTUREFORMAT\_RGB16\_UNORM**: `32852` = `Constants.TEXTUREFORMAT_RGB16_UNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L146)

RGB unsigned short normed to [0, 1] *

***

### TEXTUREFORMAT\_RGBA

> `readonly` `static` **TEXTUREFORMAT\_RGBA**: `5` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L135)

RGBA

***

### TEXTUREFORMAT\_RGBA\_INTEGER

> `readonly` `static` **TEXTUREFORMAT\_RGBA\_INTEGER**: `11` = `Constants.TEXTUREFORMAT_RGBA_INTEGER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L173)

RGBA_INTEGER

***

### TEXTUREFORMAT\_RGBA16\_SNORM

> `readonly` `static` **TEXTUREFORMAT\_RGBA16\_SNORM**: `36763` = `Constants.TEXTUREFORMAT_RGBA16_SNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L159)

RGBA signed short normed to [-1, 1] *

***

### TEXTUREFORMAT\_RGBA16\_UNORM

> `readonly` `static` **TEXTUREFORMAT\_RGBA16\_UNORM**: `32859` = `Constants.TEXTUREFORMAT_RGBA16_UNORM`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L149)

RGBA unsigned short normed to [0, 1] *

***

### TEXTURETYPE\_BYTE

> `readonly` `static` **TEXTURETYPE\_BYTE**: `3` = `Constants.TEXTURETYPE_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L184)

BYTE

***

### TEXTURETYPE\_FLOAT

> `readonly` `static` **TEXTURETYPE\_FLOAT**: `1` = `Constants.TEXTURETYPE_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L180)

FLOAT

***

### TEXTURETYPE\_FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV

> `readonly` `static` **TEXTURETYPE\_FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV**: `15` = `Constants.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L208)

FLOAT_32_UNSIGNED_INT_24_8_REV

***

### TEXTURETYPE\_HALF\_FLOAT

> `readonly` `static` **TEXTURETYPE\_HALF\_FLOAT**: `2` = `Constants.TEXTURETYPE_HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L182)

HALF_FLOAT

***

### TEXTURETYPE\_INT

> `readonly` `static` **TEXTURETYPE\_INT**: `6` = `Constants.TEXTURETYPE_INT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L190)

INT

***

### TEXTURETYPE\_SHORT

> `readonly` `static` **TEXTURETYPE\_SHORT**: `4` = `Constants.TEXTURETYPE_SHORT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L186)

SHORT

***

### TEXTURETYPE\_UNSIGNED\_BYTE

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_BYTE**: `0` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L176)

UNSIGNED_BYTE

***

### ~~TEXTURETYPE\_UNSIGNED\_INT~~

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_INT**: `0` = `Constants.TEXTURETYPE_UNSIGNED_INT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L178)

#### Deprecated

use more explicit TEXTURETYPE_UNSIGNED_BYTE instead. Use TEXTURETYPE_UNSIGNED_INTEGER for 32bits values.

***

### TEXTURETYPE\_UNSIGNED\_INT\_10F\_11F\_11F\_REV

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_INT\_10F\_11F\_11F\_REV**: `13` = `Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L204)

UNSIGNED_INT_10F_11F_11F_REV

***

### TEXTURETYPE\_UNSIGNED\_INT\_2\_10\_10\_10\_REV

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_INT\_2\_10\_10\_10\_REV**: `11` = `Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L200)

UNSIGNED_INT_2_10_10_10_REV

***

### TEXTURETYPE\_UNSIGNED\_INT\_24\_8

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_INT\_24\_8**: `12` = `Constants.TEXTURETYPE_UNSIGNED_INT_24_8`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L202)

UNSIGNED_INT_24_8

***

### TEXTURETYPE\_UNSIGNED\_INT\_5\_9\_9\_9\_REV

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_INT\_5\_9\_9\_9\_REV**: `14` = `Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L206)

UNSIGNED_INT_5_9_9_9_REV

***

### TEXTURETYPE\_UNSIGNED\_INTEGER

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_INTEGER**: `7` = `Constants.TEXTURETYPE_UNSIGNED_INTEGER`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L192)

UNSIGNED_INT

***

### TEXTURETYPE\_UNSIGNED\_SHORT

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_SHORT**: `5` = `Constants.TEXTURETYPE_UNSIGNED_SHORT`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L188)

UNSIGNED_SHORT

***

### TEXTURETYPE\_UNSIGNED\_SHORT\_4\_4\_4\_4

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_SHORT\_4\_4\_4\_4**: `8` = `Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L194)

UNSIGNED_SHORT_4_4_4_4

***

### TEXTURETYPE\_UNSIGNED\_SHORT\_5\_5\_5\_1

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_SHORT\_5\_5\_5\_1**: `9` = `Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L196)

UNSIGNED_SHORT_5_5_5_1

***

### TEXTURETYPE\_UNSIGNED\_SHORT\_5\_6\_5

> `readonly` `static` **TEXTURETYPE\_UNSIGNED\_SHORT\_5\_6\_5**: `10` = `Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L198)

UNSIGNED_SHORT_5_6_5

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

[`ThinEngine`](ThinEngine.md).[`activeRenderLoops`](ThinEngine.md#activerenderloops)

***

### alphaState

#### Get Signature

> **get** **alphaState**(): `AlphaState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L565)

Gets the alpha state manager

##### Returns

`AlphaState`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`alphaState`](ThinEngine.md#alphastate)

***

### compatibilityMode

#### Get Signature

> **get** **compatibilityMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1170)

(WebGPU only) True (default) to be in compatibility mode, meaning rendering all existing scenes without artifacts (same rendering than WebGL).
Setting the property to false will improve performances but may not work in some scenes if some precautions are not taken.
See https://doc.babylonjs.com/setup/support/webGPU/webGPUOptimization/webGPUNonCompatibilityMode for more details

##### Returns

`boolean`

#### Set Signature

> **set** **compatibilityMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1174)

##### Parameters

###### mode

`boolean`

##### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`compatibilityMode`](ThinEngine.md#compatibilitymode)

***

### currentViewport

#### Get Signature

> **get** **currentViewport**(): [`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1510)

Gets the current viewport

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`currentViewport`](ThinEngine.md#currentviewport)

***

### depthCullingState

#### Get Signature

> **get** **depthCullingState**(): `DepthCullingState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L558)

Gets the depth culling state manager

##### Returns

`DepthCullingState`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`depthCullingState`](ThinEngine.md#depthcullingstate)

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1581)

Returns a string describing the current engine

##### Returns

`string`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`description`](ThinEngine.md#description)

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

[`ThinEngine`](ThinEngine.md).[`doNotHandleContextLost`](ThinEngine.md#donothandlecontextlost)

***

### emptyCubeTexture

#### Get Signature

> **get** **emptyCubeTexture**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L839)

Gets the default empty cube texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`emptyCubeTexture`](ThinEngine.md#emptycubetexture)

***

### emptyTexture

#### Get Signature

> **get** **emptyTexture**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:797](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L797)

Gets the default empty texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`emptyTexture`](ThinEngine.md#emptytexture)

***

### emptyTexture2DArray

#### Get Signature

> **get** **emptyTexture2DArray**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L819)

Gets the default empty 2D array texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`emptyTexture2DArray`](ThinEngine.md#emptytexture2darray)

***

### emptyTexture3D

#### Get Signature

> **get** **emptyTexture3D**(): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:808](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L808)

Gets the default empty 3D texture

##### Returns

[`InternalTexture`](InternalTexture.md)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`emptyTexture3D`](ThinEngine.md#emptytexture3d)

***

### framebufferDimensionsObject

#### Set Signature

> **set** **framebufferDimensionsObject**(`dimensions`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L536)

sets the object from which width and height will be taken from when getting render width and height
Will fallback to the gl object

##### Parameters

###### dimensions

[`Nullable`](../type-aliases/Nullable.md)\<\{ `framebufferHeight`: `number`; `framebufferWidth`: `number`; \}\>

the framebuffer width and height that will be used.

##### Returns

`void`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`framebufferDimensionsObject`](ThinEngine.md#framebufferdimensionsobject)

***

### frameId

#### Get Signature

> **get** **frameId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L349)

Gets the current frame id

##### Returns

`number`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`frameId`](ThinEngine.md#frameid)

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L735)

Gets a boolean indicating if the engine was disposed

##### Returns

`boolean`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`isDisposed`](ThinEngine.md#isdisposed)

***

### isStencilEnable

#### Get Signature

> **get** **isStencilEnable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2084](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2084)

Returns true if the stencil buffer has been enabled through the creation option of the context.

##### Returns

`boolean`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`isStencilEnable`](ThinEngine.md#isstencilenable)

***

### isWebGPU

#### Get Signature

> **get** **isWebGPU**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L355)

Gets a boolean indicating if the engine runs in WebGPU or not.

##### Returns

`boolean`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`isWebGPU`](ThinEngine.md#iswebgpu)

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

[`ThinEngine`](ThinEngine.md).[`maxFPS`](ThinEngine.md#maxfps)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L141)

Gets or sets the name of the engine

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L145)

Gets or sets the name of the engine

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`name`](ThinEngine.md#name)

***

### needPOTTextures

#### Get Signature

> **get** **needPOTTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L205)

Gets a boolean indicating that only power of 2 textures are supported
Please note that you can still use non power of 2 textures but in this case the engine will forcefully convert them

##### Returns

`boolean`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`needPOTTextures`](ThinEngine.md#needpottextures)

***

### performanceMonitor

#### Get Signature

> **get** **performanceMonitor**(): [`PerformanceMonitor`](PerformanceMonitor.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L340)

Gets the performance monitor attached to this engine

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#engineinstrumentation

##### Returns

[`PerformanceMonitor`](PerformanceMonitor.md)

#### Overrides

[`ThinEngine`](ThinEngine.md).[`performanceMonitor`](ThinEngine.md#performancemonitor)

***

### shaderPlatformName

#### Get Signature

> **get** **shaderPlatformName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L439)

Gets the shader platform name used by the effects.

##### Returns

`string`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`shaderPlatformName`](ThinEngine.md#shaderplatformname)

***

### snapshotRendering

#### Get Signature

> **get** **snapshotRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L754)

Enables or disables the snapshot rendering mode
Note that the WebGL engine does not support snapshot rendering so setting the value won't have any effect for this engine

##### Returns

`boolean`

#### Set Signature

> **set** **snapshotRendering**(`activate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L758)

##### Parameters

###### activate

`boolean`

##### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`snapshotRendering`](ThinEngine.md#snapshotrendering)

***

### snapshotRenderingMode

#### Get Signature

> **get** **snapshotRenderingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L765)

Gets or sets the snapshot rendering mode

##### Returns

`number`

#### Set Signature

> **set** **snapshotRenderingMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:769](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L769)

##### Parameters

###### mode

`number`

##### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`snapshotRenderingMode`](ThinEngine.md#snapshotrenderingmode)

***

### stencilState

#### Get Signature

> **get** **stencilState**(): `StencilState`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:572](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L572)

Gets the stencil state manager

##### Returns

`StencilState`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`stencilState`](ThinEngine.md#stencilstate)

***

### stencilStateComposer

#### Get Signature

> **get** **stencilStateComposer**(): `StencilStateComposer`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:579](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L579)

Gets the stencil state composer

##### Returns

`StencilStateComposer`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`stencilStateComposer`](ThinEngine.md#stencilstatecomposer)

***

### supportsUniformBuffers

#### Get Signature

> **get** **supportsUniformBuffers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L183)

Gets a boolean indicating that the engine supports uniform buffers

##### See

https://doc.babylonjs.com/setup/support/webGL2#uniform-buffer-objets

##### Returns

`boolean`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`supportsUniformBuffers`](ThinEngine.md#supportsuniformbuffers)

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

[`ThinEngine`](ThinEngine.md).[`useReverseDepthBuffer`](ThinEngine.md#usereversedepthbuffer)

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L152)

Returns the version of the engine

##### Returns

`number`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`version`](ThinEngine.md#version)

***

### webGLVersion

#### Get Signature

> **get** **webGLVersion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:865](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L865)

Gets version of the current webGL context
Keep it for back compat - use version instead

##### Returns

`number`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`webGLVersion`](ThinEngine.md#webglversion)

***

### HasMajorPerformanceCaveat

#### Get Signature

> **get** `static` **HasMajorPerformanceCaveat**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4695](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4695)

Gets a boolean indicating if the engine can be instantiated on a performant device (ie. if a webGL context can be found and it does not use a slow implementation)

##### Returns

`boolean`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`HasMajorPerformanceCaveat`](ThinEngine.md#hasmajorperformancecaveat)

***

### Instances

#### Get Signature

> **get** `static` **Instances**(): [`AbstractEngine`](AbstractEngine.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L289)

Gets the list of created engines

##### Returns

[`AbstractEngine`](AbstractEngine.md)[]

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4664)

Gets a boolean indicating if the engine can be instantiated (ie. if a webGL context can be found)

##### Returns

`boolean`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`IsSupported`](ThinEngine.md#issupported)

***

### IsSupportedAsync

#### Get Signature

> **get** `static` **IsSupportedAsync**(): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4657](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4657)

Gets a Promise<boolean> indicating if the engine can be instantiated (ie. if a webGL context can be found)

##### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`IsSupportedAsync`](ThinEngine.md#issupportedasync)

***

### LastCreatedEngine

#### Get Signature

> **get** `static` **LastCreatedEngine**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L296)

Gets the latest created engine

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

***

### LastCreatedScene

#### Get Signature

> **get** `static` **LastCreatedScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L303)

Gets the latest created scene

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

***

### NpmPackage

#### Get Signature

> **get** `static` **NpmPackage**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L277)

Returns the current npm package of the sdk

##### Returns

`string`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`NpmPackage`](ThinEngine.md#npmpackage)

***

### ShadersRepository

#### Get Signature

> **get** `static` **ShadersRepository**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L159)

Gets or sets the relative url used to load shaders if using the engine in non-minified mode

##### Returns

`string`

#### Set Signature

> **set** `static` **ShadersRepository**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L162)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`ShadersRepository`](ThinEngine.md#shadersrepository)

***

### Version

#### Get Signature

> **get** `static` **Version**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L284)

Returns the current version of the framework

##### Returns

`string`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`Version`](ThinEngine.md#version-1)

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

[`ThinEngine`](ThinEngine.md).[`_createDepthStencilCubeTexture`](ThinEngine.md#_createdepthstencilcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`_createDepthStencilCubeTexture`](ThinEngine.md#_createdepthstencilcubetexture)

***

### \_createImageBitmapFromSource()

> **\_createImageBitmapFromSource**(`imageSource`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L406)

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

[`ThinEngine`](ThinEngine.md).[`_createImageBitmapFromSource`](ThinEngine.md#_createimagebitmapfromsource)

***

### \_getInternalFormatFromDepthTextureFormat()

> **\_getInternalFormatFromDepthTextureFormat**(`textureFormat`, `hasDepth`, `hasStencil`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3672)

#### Parameters

##### textureFormat

`number`

##### hasDepth

`boolean`

##### hasStencil

`boolean`

#### Returns

`number`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`_getInternalFormatFromDepthTextureFormat`](ThinEngine.md#_getinternalformatfromdepthtextureformat)

***

### \_getWebGLTextureTypeFromDepthTextureFormat()

> **\_getWebGLTextureTypeFromDepthTextureFormat**(`textureFormat`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3700](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3700)

#### Parameters

##### textureFormat

`number`

#### Returns

`number`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`_getWebGLTextureTypeFromDepthTextureFormat`](ThinEngine.md#_getwebgltexturetypefromdepthtextureformat)

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

[`ThinEngine`](ThinEngine.md).[`_loadFileAsync`](ThinEngine.md#_loadfileasync)

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

[`ThinEngine`](ThinEngine.md).[`_loadFileAsync`](ThinEngine.md#_loadfileasync)

***

### \_updateRenderBuffer()

> **\_updateRenderBuffer**(`renderBuffer`, `width`, `height`, `samples`, `internalFormat`, `msInternalFormat`, `attachment`, `unbindBuffer?`): [`Nullable`](../type-aliases/Nullable.md)\<`WebGLRenderbuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3768](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3768)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`_updateRenderBuffer`](ThinEngine.md#_updaterenderbuffer)

***

### applyStates()

> **applyStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2762](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2762)

Apply all cached states (depth, culling, stencil and alpha)

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`applyStates`](ThinEngine.md#applystates)

***

### areAllComputeEffectsReady()

> **areAllComputeEffectsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L87)

Gets a boolean indicating if all created compute effects are ready

#### Returns

`boolean`

true if all effects are ready

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`areAllComputeEffectsReady`](ThinEngine.md#areallcomputeeffectsready)

***

### areAllEffectsReady()

> **areAllEffectsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L483)

Gets a boolean indicating if all created effects are ready

#### Returns

`boolean`

true if all effects are ready

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`areAllEffectsReady`](ThinEngine.md#arealleffectsready)

***

### attachContextLostEvent()

> **attachContextLostEvent**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4221)

Attach a new callback raised when context lost event is fired

#### Parameters

##### callback

(`event`) => `void`

defines the callback to call

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`attachContextLostEvent`](ThinEngine.md#attachcontextlostevent)

***

### attachContextRestoredEvent()

> **attachContextRestoredEvent**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4231)

Attach a new callback raised when context restored event is fired

#### Parameters

##### callback

(`event`) => `void`

defines the callback to call

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`attachContextRestoredEvent`](ThinEngine.md#attachcontextrestoredevent)

***

### beginFrame()

> **beginFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L586)

Begin a new frame

#### Returns

`void`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`beginFrame`](ThinEngine.md#beginframe)

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

[`ThinEngine`](ThinEngine.md).[`beginOcclusionQuery`](ThinEngine.md#beginocclusionquery)

***

### beginTransformFeedback()

> **beginTransformFeedback**(`usePoints`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L29)

Begins a transform feedback operation

#### Parameters

##### usePoints

`boolean`

defines if points or triangles must be used

#### Returns

`void`

***

### bindArrayBuffer()

> **bindArrayBuffer**(`buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1422](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1422)

Bind a webGL buffer to the webGL context

#### Parameters

##### buffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the buffer to bind

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindArrayBuffer`](ThinEngine.md#bindarraybuffer)

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

[`ThinEngine`](ThinEngine.md).[`bindAttachments`](ThinEngine.md#bindattachments)

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

[`ThinEngine`](ThinEngine.md).[`bindAttachments`](ThinEngine.md#bindattachments)

***

### bindBuffers()

> **bindBuffers**(`vertexBuffers`, `indexBuffer`, `effect`, `overrideVertexBuffers?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1695](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1695)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindBuffers`](ThinEngine.md#bindbuffers)

***

### bindBuffersDirectly()

> **bindBuffersDirectly**(`vertexBuffer`, `indexBuffer`, `vertexDeclaration`, `vertexStrideSize`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1650)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindBuffersDirectly`](ThinEngine.md#bindbuffersdirectly)

***

### bindFramebuffer()

> **bindFramebuffer**(`rtWrapper`, `faceIndex?`, `requiredWidth?`, `requiredHeight?`, `forceFullscreenViewport?`, `lodLevel?`, `layer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1058](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1058)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindFramebuffer`](ThinEngine.md#bindframebuffer)

***

### bindInstancesBuffer()

> **bindInstancesBuffer**(`instancesBuffer`, `attributesInfo`, `computeStride?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1792](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1792)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindInstancesBuffer`](ThinEngine.md#bindinstancesbuffer)

***

### bindMultiviewFramebuffer()

> **bindMultiviewFramebuffer**(`multiviewTexture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiview.types.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiview.types.ts#L22)

Binds a multiview render target wrapper to be drawn to

#### Parameters

##### multiviewTexture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

render target wrapper to bind

#### Returns

`void`

***

### bindSamplers()

> **bindSamplers**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3850)

Binds an effect to the webGL context

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindSamplers`](ThinEngine.md#bindsamplers)

***

### bindSpaceWarpFramebuffer()

> **bindSpaceWarpFramebuffer**(`spaceWarpTexture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiview.types.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiview.types.ts#L28)

Binds a Space Warp render target wrapper to be drawn to

#### Parameters

##### spaceWarpTexture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

render target wrapper to bind

#### Returns

`void`

***

### bindTransformFeedback()

> **bindTransformFeedback**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L23)

Bind a webGL transform feedback object to the webgl context

#### Parameters

##### value

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLTransformFeedback`\>

defines the webGL transform feedback object to bind

#### Returns

`void`

***

### bindTransformFeedbackBuffer()

> **bindTransformFeedbackBuffer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L47)

Bind a webGL buffer for a transform feedback operation

#### Parameters

##### value

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the webGL buffer to bind

#### Returns

`void`

***

### bindUniformBlock()

#### Call Signature

> **bindUniformBlock**(`pipelineContext`, `blockName`, `index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1435)

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

[`ThinEngine`](ThinEngine.md).[`bindUniformBlock`](ThinEngine.md#binduniformblock)

#### Call Signature

> **bindUniformBlock**(`pipelineContext`, `blockName`, `index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts#L55)

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

[`ThinEngine`](ThinEngine.md).[`bindUniformBlock`](ThinEngine.md#binduniformblock)

***

### bindUniformBuffer()

> **bindUniformBuffer**(`buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts#L39)

Bind an uniform buffer to the current webGL context

#### Parameters

##### buffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

defines the buffer to bind

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindUniformBuffer`](ThinEngine.md#binduniformbuffer)

***

### bindUniformBufferBase()

> **bindUniformBufferBase**(`buffer`, `location`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts#L47)

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

[`ThinEngine`](ThinEngine.md).[`bindUniformBufferBase`](ThinEngine.md#binduniformbufferbase)

***

### bindVertexArrayObject()

> **bindVertexArrayObject**(`vertexArrayObject`, `indexBuffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1629](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1629)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`bindVertexArrayObject`](ThinEngine.md#bindvertexarrayobject)

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

[`ThinEngine`](ThinEngine.md).[`buildTextureLayout`](ThinEngine.md#buildtexturelayout)

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

[`ThinEngine`](ThinEngine.md).[`buildTextureLayout`](ThinEngine.md#buildtexturelayout)

***

### cacheStencilState()

> **cacheStencilState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L167)

Caches the state of the stencil buffer

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`cacheStencilState`](ThinEngine.md#cachestencilstate)

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

[`ThinEngine`](ThinEngine.md).[`captureGPUFrameTime`](ThinEngine.md#capturegpuframetime)

***

### clear()

> **clear**(`color`, `backBuffer`, `depth`, `stencil?`, `stencilClearValue?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L955)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`clear`](ThinEngine.md#clear)

***

### clearInternalTexturesCache()

> **clearInternalTexturesCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1931](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1931)

Clears the list of texture accessible through engine.
This can help preventing texture load conflict due to name collision.

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`clearInternalTexturesCache`](ThinEngine.md#clearinternaltexturescache)

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

[`ThinEngine`](ThinEngine.md).[`computeDispatch`](ThinEngine.md#computedispatch)

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

[`ThinEngine`](ThinEngine.md).[`computeDispatchIndirect`](ThinEngine.md#computedispatchindirect)

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

[`ThinEngine`](ThinEngine.md).[`createCanvas`](ThinEngine.md#createcanvas)

***

### createCanvasImage()

> **createCanvasImage**(): [`IImage`](../interfaces/IImage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1565)

Create an image to use with canvas

#### Returns

[`IImage`](../interfaces/IImage.md)

IImage interface

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createCanvasImage`](ThinEngine.md#createcanvasimage)

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

[`ThinEngine`](ThinEngine.md).[`createCanvasPath2D`](ThinEngine.md#createcanvaspath2d)

***

### createComputeContext()

> **createComputeContext**(): `IComputeContext` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L39)

Creates a new compute context

#### Returns

`IComputeContext` \| `undefined`

the new context

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createComputeContext`](ThinEngine.md#createcomputecontext)

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

[`ThinEngine`](ThinEngine.md).[`createComputeEffect`](ThinEngine.md#createcomputeeffect)

***

### createComputePipelineContext()

> **createComputePipelineContext**(): `IComputePipelineContext`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L33)

Creates a new compute pipeline context

#### Returns

`IComputePipelineContext`

the new pipeline

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createComputePipelineContext`](ThinEngine.md#createcomputepipelinecontext)

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

[`ThinEngine`](ThinEngine.md).[`createCubeTexture`](ThinEngine.md#createcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createCubeTexture`](ThinEngine.md#createcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createCubeTexture`](ThinEngine.md#createcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createCubeTexture`](ThinEngine.md#createcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createCubeTexture`](ThinEngine.md#createcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createCubeTexture`](ThinEngine.md#createcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createDepthStencilTexture`](ThinEngine.md#createdepthstenciltexture)

***

### createDrawContext()

> **createDrawContext**(): [`IDrawContext`](../interfaces/IDrawContext.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2178)

Creates a new draw context

#### Returns

[`IDrawContext`](../interfaces/IDrawContext.md) \| `undefined`

the new context

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createDrawContext`](ThinEngine.md#createdrawcontext)

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

[`ThinEngine`](ThinEngine.md).[`createDynamicTexture`](ThinEngine.md#createdynamictexture)

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

[`ThinEngine`](ThinEngine.md).[`createDynamicTexture`](ThinEngine.md#createdynamictexture)

***

### createDynamicUniformBuffer()

> **createDynamicUniformBuffer**(`elements`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts#L23)

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

[`ThinEngine`](ThinEngine.md).[`createDynamicUniformBuffer`](ThinEngine.md#createdynamicuniformbuffer)

***

### createDynamicVertexBuffer()

> **createDynamicVertexBuffer**(`data`, `_label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1358)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createDynamicVertexBuffer`](ThinEngine.md#createdynamicvertexbuffer)

***

### createEffect()

> **createEffect**(`baseName`, `attributesNamesOrOptions`, `uniformsNamesOrEngine`, `samplers?`, `defines?`, `fallbacks?`, `onCompiled?`, `onError?`, `indexParameters?`, `shaderLanguage?`, `extraInitializationsAsync?`): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2027](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2027)

Create a new effect (used to store vertex/fragment shaders)

#### Parameters

##### baseName

`string` \| [`IShaderPath`](../type-aliases/IShaderPath.md) & `object`

defines the base name of the effect (The name of file without .fragment.fx or .vertex.fx)

##### attributesNamesOrOptions

`string`[] \| [`IEffectCreationOptions`](../interfaces/IEffectCreationOptions.md)

defines either a list of attribute names or an IEffectCreationOptions object

##### uniformsNamesOrEngine

`string`[] \| [`ThinEngine`](ThinEngine.md)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createEffect`](ThinEngine.md#createeffect)

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

[`ThinEngine`](ThinEngine.md).[`createEffectForParticles`](ThinEngine.md#createeffectforparticles)

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

[`ThinEngine`](ThinEngine.md).[`createImageBitmap`](ThinEngine.md#createimagebitmap)

***

### createIndexBuffer()

> **createIndexBuffer**(`indices`, `updatable?`, `_label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1374)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createIndexBuffer`](ThinEngine.md#createindexbuffer)

***

### createInstancesBuffer()

> **createInstancesBuffer**(`capacity`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L973)

Creates a webGL buffer to use with instantiation

#### Parameters

##### capacity

`number`

defines the size of the buffer

#### Returns

[`DataBuffer`](DataBuffer.md)

the webGL buffer

***

### createMaterialContext()

> **createMaterialContext**(): `IMaterialContext` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2170)

Creates a new material context

#### Returns

`IMaterialContext` \| `undefined`

the new context

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createMaterialContext`](ThinEngine.md#creatematerialcontext)

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

[`ThinEngine`](ThinEngine.md).[`createMultipleRenderTarget`](ThinEngine.md#createmultiplerendertarget)

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

[`ThinEngine`](ThinEngine.md).[`createMultipleRenderTarget`](ThinEngine.md#createmultiplerendertarget)

***

### createMultiviewRenderTargetTexture()

> **createMultiviewRenderTargetTexture**(`width`, `height`, `colorTexture?`, `depthStencilTexture?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.multiview.types.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.multiview.types.ts#L16)

Creates a new multiview render target

#### Parameters

##### width

`number`

defines the width of the texture

##### height

`number`

defines the height of the texture

##### colorTexture?

`WebGLTexture`

##### depthStencilTexture?

`WebGLTexture`

#### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

the created multiview render target wrapper

***

### createPipelineContext()

> **createPipelineContext**(`shaderProcessingContext`): [`IPipelineContext`](../interfaces/IPipelineContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2156)

Creates a new pipeline context

#### Parameters

##### shaderProcessingContext

[`Nullable`](../type-aliases/Nullable.md)\<`_IShaderProcessingContext`\>

defines the shader processing context used during the processing if available

#### Returns

[`IPipelineContext`](../interfaces/IPipelineContext.md)

the new pipeline

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createPipelineContext`](ThinEngine.md#createpipelinecontext)

***

### createPrefilteredCubeTexture()

> **createPrefilteredCubeTexture**(`rootUrl`, `scene`, `lodScale`, `lodOffset`, `onLoad?`, `onError?`, `format?`, `forcedExtension?`, `createPolynomials?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.prefilteredCubeTexture.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.prefilteredCubeTexture.types.ts#L20)

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

[`ThinEngine`](ThinEngine.md).[`createPrefilteredCubeTexture`](ThinEngine.md#createprefilteredcubetexture)

***

### createQuery()

> **createQuery**(): [`Nullable`](../type-aliases/Nullable.md)\<`OcclusionQuery`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L10)

Create a new webGL query (you must be sure that queries are supported by checking getCaps() function)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`OcclusionQuery`\>

the new query

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createQuery`](ThinEngine.md#createquery)

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

[`ThinEngine`](ThinEngine.md).[`createRawCubeTexture`](ThinEngine.md#createrawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createRawCubeTexture`](ThinEngine.md#createrawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createRawCubeTextureFromUrl`](ThinEngine.md#createrawcubetexturefromurl)

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

[`ThinEngine`](ThinEngine.md).[`createRawCubeTextureFromUrl`](ThinEngine.md#createrawcubetexturefromurl)

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

[`ThinEngine`](ThinEngine.md).[`createRawCubeTextureFromUrl`](ThinEngine.md#createrawcubetexturefromurl)

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

[`ThinEngine`](ThinEngine.md).[`createRawCubeTextureFromUrl`](ThinEngine.md#createrawcubetexturefromurl)

***

### createRawShaderProgram()

> **createRawShaderProgram**(`pipelineContext`, `vertexCode`, `fragmentCode`, `context?`, `transformFeedbackVaryings?`): `WebGLProgram`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2103)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createRawShaderProgram`](ThinEngine.md#createrawshaderprogram)

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

[`ThinEngine`](ThinEngine.md).[`createRawTexture`](ThinEngine.md#createrawtexture)

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

[`ThinEngine`](ThinEngine.md).[`createRawTexture2DArray`](ThinEngine.md#createrawtexture2darray)

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

[`ThinEngine`](ThinEngine.md).[`createRawTexture3D`](ThinEngine.md#createrawtexture3d)

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

[`ThinEngine`](ThinEngine.md).[`createRenderPassId`](ThinEngine.md#createrenderpassid)

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

[`ThinEngine`](ThinEngine.md).[`createRenderTargetCubeTexture`](ThinEngine.md#createrendertargetcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createRenderTargetCubeTexture`](ThinEngine.md#createrendertargetcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`createRenderTargetTexture`](ThinEngine.md#createrendertargettexture)

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

[`ThinEngine`](ThinEngine.md).[`createRenderTargetTexture`](ThinEngine.md#createrendertargettexture)

***

### createShaderProgram()

> **createShaderProgram**(`pipelineContext`, `vertexCode`, `fragmentCode`, `defines`, `context?`, `transformFeedbackVaryings?`): `WebGLProgram`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:602](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L602)

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

#### Overrides

[`ThinEngine`](ThinEngine.md).[`createShaderProgram`](ThinEngine.md#createshaderprogram)

***

### createTexture()

> **createTexture**(`url`, `noMipmap`, `invertY`, `scene`, `samplingMode?`, `onLoad?`, `onError?`, `buffer?`, `fallback?`, `format?`, `forcedExtension?`, `mimeType?`, `loaderOptions?`, `creationFlags?`, `useSRGBBuffer?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3145)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createTexture`](ThinEngine.md#createtexture)

***

### createTransformFeedback()

> **createTransformFeedback**(): `WebGLTransformFeedback`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L11)

Creates a webGL transform feedback object
Please makes sure to check webGLVersion property to check if you are running webGL 2+

#### Returns

`WebGLTransformFeedback`

the webGL transform feedback object

***

### createUniformBuffer()

> **createUniformBuffer**(`elements`, `label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts#L14)

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

[`ThinEngine`](ThinEngine.md).[`createUniformBuffer`](ThinEngine.md#createuniformbuffer)

***

### createVertexBuffer()

> **createVertexBuffer**(`data`, `_updatable?`, `_label?`): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1319)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`createVertexBuffer`](ThinEngine.md#createvertexbuffer)

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

[`ThinEngine`](ThinEngine.md).[`createVideoElement`](ThinEngine.md#createvideoelement)

***

### deleteInstancesBuffer()

> **deleteInstancesBuffer**(`buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:995](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L995)

Delete a webGL buffer used with instantiation

#### Parameters

##### buffer

`WebGLBuffer`

defines the webGL buffer to delete

#### Returns

`void`

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

[`ThinEngine`](ThinEngine.md).[`deleteQuery`](ThinEngine.md#deletequery)

***

### deleteTransformFeedback()

> **deleteTransformFeedback**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L17)

Delete a webGL transform feedback object

#### Parameters

##### value

`WebGLTransformFeedback`

defines the webGL transform feedback object to delete

#### Returns

`void`

***

### disableAttributeByIndex()

> **disableAttributeByIndex**(`attributeLocation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1862](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1862)

Disable the attribute corresponding to the location in parameter

#### Parameters

##### attributeLocation

`number`

defines the attribute location of the attribute to disable

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableAttributeByIndex`](ThinEngine.md#disableattributebyindex)

***

### disableInstanceAttribute()

> **disableInstanceAttribute**(`attributeLocation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1842)

Disable the instance attribute corresponding to the location in parameter

#### Parameters

##### attributeLocation

`number`

defines the attribute location of the attribute to disable

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableInstanceAttribute`](ThinEngine.md#disableinstanceattribute)

***

### disableInstanceAttributeByName()

> **disableInstanceAttributeByName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1829](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1829)

Disable the instance attribute corresponding to the name in parameter

#### Parameters

##### name

`string`

defines the name of the attribute to disable

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableInstanceAttributeByName`](ThinEngine.md#disableinstanceattributebyname)

***

### disableScissor()

> **disableScissor**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.scissor.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.scissor.ts#L20)

Disable previously set scissor test rectangle

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`disableScissor`](ThinEngine.md#disablescissor)

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

[`ThinEngine`](ThinEngine.md).[`displayLoadingUI`](ThinEngine.md#displayloadingui)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:1057](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L1057)

Dispose and release all associated resources

#### Returns

`void`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`dispose`](ThinEngine.md#dispose)

***

### draw()

> **draw**(`useTriangles`, `indexStart`, `indexCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1875](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1875)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`draw`](ThinEngine.md#draw)

***

### drawArraysType()

> **drawArraysType**(`fillMode`, `verticesStart`, `verticesCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1932)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`drawArraysType`](ThinEngine.md#drawarraystype)

***

### drawElementsType()

> **drawElementsType**(`fillMode`, `indexStart`, `indexCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1907)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`drawElementsType`](ThinEngine.md#drawelementstype)

***

### drawPointClouds()

> **drawPointClouds**(`verticesStart`, `verticesCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1885)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`drawPointClouds`](ThinEngine.md#drawpointclouds)

***

### drawUnIndexed()

> **drawUnIndexed**(`useTriangles`, `verticesStart`, `verticesCount`, `instancesCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1896](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1896)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`drawUnIndexed`](ThinEngine.md#drawunindexed)

***

### enableEffect()

> **enableEffect**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2295)

Activates an effect, making it the current one (ie. the one used for rendering)

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md) \| [`DrawWrapper`](DrawWrapper.md)\>

defines the effect to activate

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`enableEffect`](ThinEngine.md#enableeffect)

***

### enableScissor()

> **enableScissor**(`x`, `y`, `width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.scissor.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.scissor.ts#L15)

Enable scissor test on a specific rectangle (ie. render will only be executed on a specific portion of the screen)

#### Parameters

##### x

`number`

defines the x-coordinate of the bottom left corner of the scissor rectangle

##### y

`number`

defines the y-coordinate of the bottom left corner of the scissor rectangle

##### width

`number`

defines the width of the scissor rectangle

##### height

`number`

defines the height of the scissor rectangle

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`enableScissor`](ThinEngine.md#enablescissor)

***

### endFrame()

> **endFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1032](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1032)

End the current frame

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`endFrame`](ThinEngine.md#endframe)

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

[`ThinEngine`](ThinEngine.md).[`endOcclusionQuery`](ThinEngine.md#endocclusionquery)

***

### endTimeQuery()

> **endTimeQuery**(`token`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.query.types.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.query.types.ts#L29)

Ends a time query

#### Parameters

##### token

`_TimeToken`

defines the token used to measure the time span

#### Returns

`number`

the time spent (in ns)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`endTimeQuery`](ThinEngine.md#endtimequery)

***

### endTransformFeedback()

> **endTransformFeedback**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L34)

Ends a transform feedback operation

#### Returns

`void`

***

### enterFullscreen()

> **enterFullscreen**(`requestPointerLock`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:426](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L426)

Enters full screen mode

#### Parameters

##### requestPointerLock

`boolean`

defines if a pointer lock should be requested from the user

#### Returns

`void`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`enterFullscreen`](ThinEngine.md#enterfullscreen)

***

### enterPointerlock()

> **enterPointerlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L570)

Enters Pointerlock mode

#### Returns

`void`

***

### exitFullscreen()

> **exitFullscreen**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L438)

Exits full screen mode

#### Returns

`void`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`exitFullscreen`](ThinEngine.md#exitfullscreen)

***

### exitPointerlock()

> **exitPointerlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:579](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L579)

Exits Pointerlock mode

#### Returns

`void`

***

### extractDriverInfo()

> **extractDriverInfo**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:912](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L912)

Gets driver info if available

#### Returns

`string`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`extractDriverInfo`](ThinEngine.md#extractdriverinfo)

***

### flushFramebuffer()

> **flushFramebuffer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1284)

Force a webGL flush (ie. a flush of all waiting webGL commands)

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`flushFramebuffer`](ThinEngine.md#flushframebuffer)

***

### generateMipmaps()

> **generateMipmaps**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1219)

Generates the mipmaps for a texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

texture to generate the mipmaps for

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`generateMipmaps`](ThinEngine.md#generatemipmaps)

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

[`ThinEngine`](ThinEngine.md).[`generateMipMapsForCubemap`](ThinEngine.md#generatemipmapsforcubemap)

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

[`ThinEngine`](ThinEngine.md).[`generateMipMapsForCubemap`](ThinEngine.md#generatemipmapsforcubemap)

***

### generateMipMapsFramebuffer()

> **generateMipMapsFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1253)

Generates mipmaps for the texture of the (single) render target

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target containing the texture to generate the mipmaps for

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`generateMipMapsFramebuffer`](ThinEngine.md#generatemipmapsframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`generateMipMapsMultiFramebuffer`](ThinEngine.md#generatemipmapsmultiframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`generateMipMapsMultiFramebuffer`](ThinEngine.md#generatemipmapsmultiframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`getAlphaEquation`](ThinEngine.md#getalphaequation)

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

[`ThinEngine`](ThinEngine.md).[`getAlphaMode`](ThinEngine.md#getalphamode)

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

[`ThinEngine`](ThinEngine.md).[`getAspectRatio`](ThinEngine.md#getaspectratio)

***

### getAttributes()

> **getAttributes**(`pipelineContext`, `attributesNames`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2276)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getAttributes`](ThinEngine.md#getattributes)

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

[`ThinEngine`](ThinEngine.md).[`getAudioContext`](ThinEngine.md#getaudiocontext)

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

[`ThinEngine`](ThinEngine.md).[`getAudioDestination`](ThinEngine.md#getaudiodestination)

***

### getCaps()

> **getCaps**(): [`EngineCapabilities`](../interfaces/EngineCapabilities.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1944)

Gets the object containing all engine capabilities

#### Returns

[`EngineCapabilities`](../interfaces/EngineCapabilities.md)

the EngineCapabilities object

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getCaps`](ThinEngine.md#getcaps)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L873)

Gets a string identifying the name of the class

#### Returns

`string`

"Engine" string

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getClassName`](ThinEngine.md#getclassname)

***

### getColorWrite()

> **getColorWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L551)

Gets a boolean indicating if color writing is enabled

#### Returns

`boolean`

the current color writing state

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getColorWrite`](ThinEngine.md#getcolorwrite)

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

[`ThinEngine`](ThinEngine.md).[`getCreationOptions`](ThinEngine.md#getcreationoptions)

***

### getCurrentRenderPassName()

> **getCurrentRenderPassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts#L16)

Gets the name of the current render pass

#### Returns

`string`

name of the current render pass

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getCurrentRenderPassName`](ThinEngine.md#getcurrentrenderpassname)

***

### getDeltaTime()

> **getDeltaTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2548)

Gets the time spent between current and previous frame

#### Returns

`number`

a number representing the delta time in ms

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getDeltaTime`](ThinEngine.md#getdeltatime)

***

### getDepthBuffer()

> **getDepthBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1103)

Gets a boolean indicating if depth testing is enabled

#### Returns

`boolean`

the current state

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getDepthBuffer`](ThinEngine.md#getdepthbuffer)

***

### getDepthFunction()

> **getDepthFunction**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L9)

Gets the current depth function

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

a number defining the depth function

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getDepthFunction`](ThinEngine.md#getdepthfunction)

***

### getDepthWrite()

> **getDepthWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L41)

Gets a boolean indicating if depth writing is enabled

#### Returns

`boolean`

the current depth writing state

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getDepthWrite`](ThinEngine.md#getdepthwrite)

***

### getError()

> **getError**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4242)

Get the current error code of the webGL context

#### Returns

`number`

the error code

#### See

https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getError

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getError`](ThinEngine.md#geterror)

***

### getFontOffset()

> **getFontOffset**(`font`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L563)

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

[`ThinEngine`](ThinEngine.md).[`getFontOffset`](ThinEngine.md#getfontoffset)

***

### getFps()

> **getFps**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2540)

Gets the current framerate

#### Returns

`number`

a number representing the framerate

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getFps`](ThinEngine.md#getfps)

***

### getFragmentShaderSource()

> **getFragmentShaderSource**(`program`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:521](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L521)

Gets the source code of the fragment shader associated with a specific webGL program

#### Parameters

##### program

`WebGLProgram`

defines the program to use

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

a string containing the source code of the fragment shader associated with the program

***

### getGlInfo()

> **getGlInfo**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:903](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L903)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getGlInfo`](ThinEngine.md#getglinfo)

***

### getGPUFrameTimeCounter()

> **getGPUFrameTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.timeQuery.types.ts#L12)

Get the performance counter associated with the frame time computation

#### Returns

[`PerfCounter`](PerfCounter.md)

the perf counter

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getGPUFrameTimeCounter`](ThinEngine.md#getgpuframetimecounter)

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

[`ThinEngine`](ThinEngine.md).[`getHardwareScalingLevel`](ThinEngine.md#gethardwarescalinglevel)

***

### getHostDocument()

> **getHostDocument**(): [`Nullable`](../type-aliases/Nullable.md)\<`Document`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1901](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1901)

Gets host document

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Document`\>

the host document object

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getHostDocument`](ThinEngine.md#gethostdocument)

***

### getHostWindow()

> **getHostWindow**(): [`Nullable`](../type-aliases/Nullable.md)\<`Window`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1153)

Gets host window

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Window`\>

the host window object

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getHostWindow`](ThinEngine.md#gethostwindow)

***

### getInfo()

> **getInfo**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:895](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L895)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getInfo`](ThinEngine.md#getinfo)

***

### getInputElement()

> **getInputElement**(): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L10)

Gets the HTML element used to attach event listeners

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\>

a HTML element

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getInputElement`](ThinEngine.md#getinputelement)

***

### getInputElementClientRect()

> **getInputElementClientRect**(): [`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L22)

Gets the client rect of the HTML element used for events

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

a client rectangle

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getInputElementClientRect`](ThinEngine.md#getinputelementclientrect)

***

### getLoadedTexturesCache()

> **getLoadedTexturesCache**(): [`InternalTexture`](InternalTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1923](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1923)

Gets the list of loaded textures

#### Returns

[`InternalTexture`](InternalTexture.md)[]

an array containing all loaded textures

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getLoadedTexturesCache`](ThinEngine.md#getloadedtexturescache)

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

[`ThinEngine`](ThinEngine.md).[`getLockstepMaxSteps`](ThinEngine.md#getlockstepmaxsteps)

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

[`ThinEngine`](ThinEngine.md).[`getQueryResult`](ThinEngine.md#getqueryresult)

***

### getRenderHeight()

> **getRenderHeight**(`useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:939](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L939)

Gets the current render height

#### Parameters

##### useScreen?

`boolean` = `false`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the current render height

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getRenderHeight`](ThinEngine.md#getrenderheight)

***

### getRenderingCanvas()

> **getRenderingCanvas**(): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2004](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2004)

Gets the HTML canvas attached with the current webGL context

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement`\>

a HTML canvas

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getRenderingCanvas`](ThinEngine.md#getrenderingcanvas)

***

### getRenderingCanvasClientRect()

> **getRenderingCanvasClientRect**(): [`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L16)

Gets the client rect of the HTML canvas attached with the current webGL context

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ClientRect`\>

a client rectangle

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getRenderingCanvasClientRect`](ThinEngine.md#getrenderingcanvasclientrect)

***

### getRenderPassNames()

> **getRenderPassNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.renderPass.types.ts#L10)

Gets the names of the render passes that are currently created

#### Returns

`string`[]

list of the render pass names

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getRenderPassNames`](ThinEngine.md#getrenderpassnames)

***

### getRenderWidth()

> **getRenderWidth**(`useScreen?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:926](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L926)

Gets the current render width

#### Parameters

##### useScreen?

`boolean` = `false`

defines if screen size must be used (or the current render target if any)

#### Returns

`number`

a number defining the current render width

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getRenderWidth`](ThinEngine.md#getrenderwidth)

***

### getScreenAspectRatio()

> **getScreenAspectRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.dom.types.ts#L36)

Gets current screen aspect ratio

#### Returns

`number`

a number defining the aspect ratio

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getScreenAspectRatio`](ThinEngine.md#getscreenaspectratio)

***

### getStencilBackFunction()

> **getStencilBackFunction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L66)

Gets the current back stencil function

#### Returns

`number`

a number defining the back stencil function to use

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilBackFunction`](ThinEngine.md#getstencilbackfunction)

***

### getStencilBackOperationDepthFail()

> **getStencilBackOperationDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L126)

Gets the current back stencil operation when depth fails

#### Returns

`number`

a number defining back stencil operation to use when depth fails

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilBackOperationDepthFail`](ThinEngine.md#getstencilbackoperationdepthfail)

***

### getStencilBackOperationFail()

> **getStencilBackOperationFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L114)

Gets the current back stencil operation when stencil fails

#### Returns

`number`

a number defining back stencil operation to use when stencil fails

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilBackOperationFail`](ThinEngine.md#getstencilbackoperationfail)

***

### getStencilBackOperationPass()

> **getStencilBackOperationPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L31)

Gets the current back stencil operation when stencil passes

#### Returns

`number`

a number defining back stencil operation to use when stencil passes

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilBackOperationPass`](ThinEngine.md#getstencilbackoperationpass)

***

### getStencilBuffer()

> **getStencilBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L37)

Gets a boolean indicating if stencil buffer is enabled

#### Returns

`boolean`

the current stencil buffer state

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilBuffer`](ThinEngine.md#getstencilbuffer)

***

### getStencilFunction()

> **getStencilFunction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L60)

Gets the current stencil function

#### Returns

`number`

a number defining the stencil function to use

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilFunction`](ThinEngine.md#getstencilfunction)

***

### getStencilFunctionMask()

> **getStencilFunctionMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L78)

Gets the current stencil mask

#### Returns

`number`

a number defining the stencil mask to use

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilFunctionMask`](ThinEngine.md#getstencilfunctionmask)

***

### getStencilFunctionReference()

> **getStencilFunctionReference**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L72)

Gets the current stencil reference value

#### Returns

`number`

a number defining the stencil reference value to use

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilFunctionReference`](ThinEngine.md#getstencilfunctionreference)

***

### getStencilMask()

> **getStencilMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L49)

Gets the current stencil mask

#### Returns

`number`

a number defining the new stencil mask to use

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilMask`](ThinEngine.md#getstencilmask)

***

### getStencilOperationDepthFail()

> **getStencilOperationDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L120)

Gets the current stencil operation when depth fails

#### Returns

`number`

a number defining stencil operation to use when depth fails

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilOperationDepthFail`](ThinEngine.md#getstenciloperationdepthfail)

***

### getStencilOperationFail()

> **getStencilOperationFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L108)

Gets the current stencil operation when stencil fails

#### Returns

`number`

a number defining stencil operation to use when stencil fails

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilOperationFail`](ThinEngine.md#getstenciloperationfail)

***

### getStencilOperationPass()

> **getStencilOperationPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L25)

Gets the current stencil operation when stencil passes

#### Returns

`number`

a number defining stencil operation to use when stencil passes

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getStencilOperationPass`](ThinEngine.md#getstenciloperationpass)

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2582)

Returns the time in ms between steps when using deterministic lock step.

#### Returns

`number`

time step in (ms)

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getTimeStep`](ThinEngine.md#gettimestep)

***

### getUniforms()

> **getUniforms**(`pipelineContext`, `uniformsNames`): [`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2259)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getUniforms`](ThinEngine.md#getuniforms)

***

### getVertexShaderSource()

> **getVertexShaderSource**(`program`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:506](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L506)

Gets the source code of the vertex shader associated with a specific webGL program

#### Parameters

##### program

`WebGLProgram`

defines the program to use

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

a string containing the source code of the vertex shader associated with the program

***

### getZOffset()

> **getZOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1127)

Gets the current value of the zOffset Factor

#### Returns

`number`

the current zOffset Factor state

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getZOffset`](ThinEngine.md#getzoffset)

***

### getZOffsetUnits()

> **getZOffsetUnits**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1144)

Gets the current value of the zOffset Units

#### Returns

`number`

the current zOffset Units state

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`getZOffsetUnits`](ThinEngine.md#getzoffsetunits)

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

[`ThinEngine`](ThinEngine.md).[`hideLoadingUI`](ThinEngine.md#hideloadingui)

***

### inlineShaderCode()

> **inlineShaderCode**(`code`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2146)

Inline functions in shader code that are marked to be inlined

#### Parameters

##### code

`string`

code to inline

#### Returns

`string`

inlined code

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`inlineShaderCode`](ThinEngine.md#inlineshadercode)

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

[`ThinEngine`](ThinEngine.md).[`isDeterministicLockStep`](ThinEngine.md#isdeterministiclockstep)

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

[`ThinEngine`](ThinEngine.md).[`isQueryResultAvailable`](ThinEngine.md#isqueryresultavailable)

***

### readPixels()

> **readPixels**(`x`, `y`, `width`, `height`, `hasAlpha?`, `flushRenderer?`, `data?`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4629](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4629)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`readPixels`](ThinEngine.md#readpixels)

***

### readTransformFeedbackBuffer()

> **readTransformFeedbackBuffer**(`target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L53)

Read data back from the bound transform feedback buffer

#### Parameters

##### target

`ArrayBufferView`

defines the webGL buffer to write to

#### Returns

`void`

***

### recordVertexArrayObject()

> **recordVertexArrayObject**(`vertexBuffers`, `indexBuffer`, `effect`, `overrideVertexBuffers?`): `WebGLVertexArrayObject`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1596)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`recordVertexArrayObject`](ThinEngine.md#recordvertexarrayobject)

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

[`ThinEngine`](ThinEngine.md).[`registerView`](ThinEngine.md#registerview)

***

### releaseComputeEffects()

> **releaseComputeEffects**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.computeShader.types.ts#L92)

Forces the engine to release all cached compute effects. This means that next effect compilation will have to be done completely even if a similar effect was already compiled

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`releaseComputeEffects`](ThinEngine.md#releasecomputeeffects)

***

### releaseEffects()

> **releaseEffects**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4174)

Force the engine to release all cached effects. This means that next effect compilation will have to be done completely even if a similar effect was already compiled

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`releaseEffects`](ThinEngine.md#releaseeffects)

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

[`ThinEngine`](ThinEngine.md).[`releaseRenderPassId`](ThinEngine.md#releaserenderpassid)

***

### releaseVertexArrayObject()

> **releaseVertexArrayObject**(`vao`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1733](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1733)

Release and free the memory of a vertex array object

#### Parameters

##### vao

`WebGLVertexArrayObject`

defines the vertex array object to delete

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`releaseVertexArrayObject`](ThinEngine.md#releasevertexarrayobject)

***

### resetTextureCache()

> **resetTextureCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:1951](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L1951)

Reset the texture cache to empty state

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`resetTextureCache`](ThinEngine.md#resettexturecache)

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

[`ThinEngine`](ThinEngine.md).[`resize`](ThinEngine.md#resize)

***

### resizeImageBitmap()

> **resizeImageBitmap**(`image`, `bufferWidth`, `bufferHeight`): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L395)

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

[`ThinEngine`](ThinEngine.md).[`resizeImageBitmap`](ThinEngine.md#resizeimagebitmap)

***

### resolveFramebuffer()

> **resolveFramebuffer**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1264)

Resolves the MSAA texture of the (single) render target into its non-MSAA version.
Note that if "texture" is not a MSAA render target, no resolve is performed.

#### Parameters

##### texture

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target texture containing the MSAA textures to resolve

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`resolveFramebuffer`](ThinEngine.md#resolveframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`resolveMultiFramebuffer`](ThinEngine.md#resolvemultiframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`resolveMultiFramebuffer`](ThinEngine.md#resolvemultiframebuffer)

***

### restoreDefaultFramebuffer()

> **restoreDefaultFramebuffer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1291](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1291)

Unbind the current render target and bind the default framebuffer

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`restoreDefaultFramebuffer`](ThinEngine.md#restoredefaultframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`restoreSingleAttachment`](ThinEngine.md#restoresingleattachment)

#### Call Signature

> **restoreSingleAttachment**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L69)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is the canvas frame buffer

##### Returns

`void`

##### Inherited from

[`ThinEngine`](ThinEngine.md).[`restoreSingleAttachment`](ThinEngine.md#restoresingleattachment)

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

[`ThinEngine`](ThinEngine.md).[`restoreSingleAttachmentForRenderTarget`](ThinEngine.md#restoresingleattachmentforrendertarget)

#### Call Signature

> **restoreSingleAttachmentForRenderTarget**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/WebGPU/Extensions/engine.multiRender.types.ts#L75)

Restores the webgl state to only draw on the main color attachment
when the frame buffer associated is not the canvas frame buffer

##### Returns

`void`

##### Inherited from

[`ThinEngine`](ThinEngine.md).[`restoreSingleAttachmentForRenderTarget`](ThinEngine.md#restoresingleattachmentforrendertarget)

***

### restoreStencilState()

> **restoreStencilState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.stencil.types.ts#L172)

Restores the state of the stencil buffer

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`restoreStencilState`](ThinEngine.md#restorestencilstate)

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

[`ThinEngine`](ThinEngine.md).[`runRenderLoop`](ThinEngine.md#runrenderloop)

***

### scissorClear()

> **scissorClear**(`x`, `y`, `width`, `height`, `clearColor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L495)

Executes a scissor clear (ie. a clear on a specific portion of the screen)

#### Parameters

##### x

`number`

defines the x-coordinate of the bottom left corner of the clear rectangle

##### y

`number`

defines the y-coordinate of the corner of the clear rectangle

##### width

`number`

defines the width of the clear rectangle

##### height

`number`

defines the height of the clear rectangle

##### clearColor

`IColor4Like`

defines the clear color

#### Returns

`void`

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

[`ThinEngine`](ThinEngine.md).[`setAlphaConstants`](ThinEngine.md#setalphaconstants)

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

[`ThinEngine`](ThinEngine.md).[`setAlphaEquation`](ThinEngine.md#setalphaequation)

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

[`ThinEngine`](ThinEngine.md).[`setAlphaMode`](ThinEngine.md#setalphamode)

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

[`ThinEngine`](ThinEngine.md).[`setAlphaMode`](ThinEngine.md#setalphamode)

***

### setArray()

> **setArray**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2585](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2585)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setArray`](ThinEngine.md#setarray)

***

### setArray2()

> **setArray2**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2603)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setArray2`](ThinEngine.md#setarray2)

***

### setArray3()

> **setArray3**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2618](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2618)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setArray3`](ThinEngine.md#setarray3)

***

### setArray4()

> **setArray4**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2633](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2633)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setArray4`](ThinEngine.md#setarray4)

***

### setColorWrite()

> **setColorWrite**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L540)

Enable or disable color writing

#### Parameters

##### enable

`boolean`

defines the state to set

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setColorWrite`](ThinEngine.md#setcolorwrite)

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

[`ThinEngine`](ThinEngine.md).[`setCompressedTextureExclusions`](ThinEngine.md#setcompressedtextureexclusions)

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

[`ThinEngine`](ThinEngine.md).[`setDepthBuffer`](ThinEngine.md#setdepthbuffer)

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

[`ThinEngine`](ThinEngine.md).[`setDepthFunction`](ThinEngine.md#setdepthfunction)

***

### setDepthFunctionToGreater()

> **setDepthFunctionToGreater**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L20)

Sets the current depth function to GREATER

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setDepthFunctionToGreater`](ThinEngine.md#setdepthfunctiontogreater)

***

### setDepthFunctionToGreaterOrEqual()

> **setDepthFunctionToGreaterOrEqual**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L25)

Sets the current depth function to GEQUAL

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setDepthFunctionToGreaterOrEqual`](ThinEngine.md#setdepthfunctiontogreaterorequal)

***

### setDepthFunctionToLess()

> **setDepthFunctionToLess**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L30)

Sets the current depth function to LESS

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setDepthFunctionToLess`](ThinEngine.md#setdepthfunctiontoless)

***

### setDepthFunctionToLessOrEqual()

> **setDepthFunctionToLessOrEqual**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.states.types.ts#L35)

Sets the current depth function to LEQUAL

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setDepthFunctionToLessOrEqual`](ThinEngine.md#setdepthfunctiontolessorequal)

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

[`ThinEngine`](ThinEngine.md).[`setDepthStencilTexture`](ThinEngine.md#setdepthstenciltexture)

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

[`ThinEngine`](ThinEngine.md).[`setDepthStencilTexture`](ThinEngine.md#setdepthstenciltexture)

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

[`ThinEngine`](ThinEngine.md).[`setDepthWrite`](ThinEngine.md#setdepthwrite)

***

### setDirectViewport()

> **setDirectViewport**(`x`, `y`, `width`, `height`): [`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L478)

Directly set the WebGL Viewport

#### Parameters

##### x

`number`

defines the x coordinate of the viewport (in screen space)

##### y

`number`

defines the y coordinate of the viewport (in screen space)

##### width

`number`

defines the width of the viewport (in screen space)

##### height

`number`

defines the height of the viewport (in screen space)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

the current viewport Object (if any) that is being replaced by this call. You can restore this viewport later on to go back to the original state

***

### setDitheringState()

> **setDitheringState**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L450)

Sets a boolean indicating if the dithering state is enabled or disabled

#### Parameters

##### value

`boolean`

defines the dithering state

#### Returns

`void`

***

### setFloat()

> **setFloat**(`uniform`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2693](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2693)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setFloat`](ThinEngine.md#setfloat)

***

### setFloat2()

> **setFloat2**(`uniform`, `x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2710](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2710)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setFloat2`](ThinEngine.md#setfloat2)

***

### setFloat3()

> **setFloat3**(`uniform`, `x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2728](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2728)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setFloat3`](ThinEngine.md#setfloat3)

***

### setFloat4()

> **setFloat4**(`uniform`, `x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2747](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2747)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setFloat4`](ThinEngine.md#setfloat4)

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

[`ThinEngine`](ThinEngine.md).[`setHardwareScalingLevel`](ThinEngine.md#sethardwarescalinglevel)

***

### setInt()

> **setInt**(`uniform`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2323)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setInt`](ThinEngine.md#setint)

***

### setInt2()

> **setInt2**(`uniform`, `x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2340)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setInt2`](ThinEngine.md#setint2)

***

### setInt3()

> **setInt3**(`uniform`, `x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2358)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setInt3`](ThinEngine.md#setint3)

***

### setInt4()

> **setInt4**(`uniform`, `x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2377)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setInt4`](ThinEngine.md#setint4)

***

### setIntArray()

> **setIntArray**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2393](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2393)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setIntArray`](ThinEngine.md#setintarray)

***

### setIntArray2()

> **setIntArray2**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2409)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setIntArray2`](ThinEngine.md#setintarray2)

***

### setIntArray3()

> **setIntArray3**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2424](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2424)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setIntArray3`](ThinEngine.md#setintarray3)

***

### setIntArray4()

> **setIntArray4**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2439)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setIntArray4`](ThinEngine.md#setintarray4)

***

### setMatrices()

> **setMatrices**(`uniform`, `matrices`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2648](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2648)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setMatrices`](ThinEngine.md#setmatrices)

***

### setMatrix2x2()

> **setMatrix2x2**(`uniform`, `matrix`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2678](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2678)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setMatrix2x2`](ThinEngine.md#setmatrix2x2)

***

### setMatrix3x3()

> **setMatrix3x3**(`uniform`, `matrix`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2663)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setMatrix3x3`](ThinEngine.md#setmatrix3x3)

***

### setRasterizerState()

> **setRasterizerState**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L462)

Sets a boolean indicating if the rasterizer state is enabled or disabled

#### Parameters

##### value

`boolean`

defines the rasterizer state

#### Returns

`void`

***

### setSize()

> **setSize**(`width`, `height`, `forceSetSize?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:2191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L2191)

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

[`ThinEngine`](ThinEngine.md).[`setSize`](ThinEngine.md#setsize)

***

### setState()

> **setState**(`culling`, `zOffset?`, `force?`, `reverseSide?`, `cullBackFaces?`, `stencil?`, `zOffsetUnits?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1158)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setState`](ThinEngine.md#setstate)

***

### setStateCullFaceType()

> **setStateCullFaceType**(`cullBackFaces?`, `force?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1141)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setStateCullFaceType`](ThinEngine.md#setstatecullfacetype)

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

[`ThinEngine`](ThinEngine.md).[`setStencilBackFunction`](ThinEngine.md#setstencilbackfunction)

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

[`ThinEngine`](ThinEngine.md).[`setStencilBackOperationDepthFail`](ThinEngine.md#setstencilbackoperationdepthfail)

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

[`ThinEngine`](ThinEngine.md).[`setStencilBackOperationFail`](ThinEngine.md#setstencilbackoperationfail)

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

[`ThinEngine`](ThinEngine.md).[`setStencilBackOperationPass`](ThinEngine.md#setstencilbackoperationpass)

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

[`ThinEngine`](ThinEngine.md).[`setStencilBuffer`](ThinEngine.md#setstencilbuffer)

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

[`ThinEngine`](ThinEngine.md).[`setStencilFunction`](ThinEngine.md#setstencilfunction)

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

[`ThinEngine`](ThinEngine.md).[`setStencilFunctionMask`](ThinEngine.md#setstencilfunctionmask)

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

[`ThinEngine`](ThinEngine.md).[`setStencilFunctionReference`](ThinEngine.md#setstencilfunctionreference)

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

[`ThinEngine`](ThinEngine.md).[`setStencilMask`](ThinEngine.md#setstencilmask)

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

[`ThinEngine`](ThinEngine.md).[`setStencilOperationDepthFail`](ThinEngine.md#setstenciloperationdepthfail)

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

[`ThinEngine`](ThinEngine.md).[`setStencilOperationFail`](ThinEngine.md#setstenciloperationfail)

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

[`ThinEngine`](ThinEngine.md).[`setStencilOperationPass`](ThinEngine.md#setstenciloperationpass)

***

### setTexture()

> **setTexture**(`channel`, `uniform`, `texture`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3951](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3951)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setTexture`](ThinEngine.md#settexture)

***

### setTextureArray()

> **setTextureArray**(`channel`, `uniform`, `textures`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4088](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4088)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setTextureArray`](ThinEngine.md#settexturearray)

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

[`ThinEngine`](ThinEngine.md).[`setTextureFormatToUse`](ThinEngine.md#settextureformattouse)

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

[`ThinEngine`](ThinEngine.md).[`setTextureFromPostProcess`](ThinEngine.md#settexturefrompostprocess)

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

[`ThinEngine`](ThinEngine.md).[`setTextureFromPostProcessOutput`](ThinEngine.md#settexturefrompostprocessoutput)

***

### setTranformFeedbackVaryings()

> **setTranformFeedbackVaryings**(`program`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.transformFeedback.types.ts#L41)

Specify the varyings to use with transform feedback

#### Parameters

##### program

`WebGLProgram`

defines the associated webGL program

##### value

`string`[]

defines the list of strings representing the varying names

#### Returns

`void`

***

### setUInt()

> **setUInt**(`uniform`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2454)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUInt`](ThinEngine.md#setuint)

***

### setUInt2()

> **setUInt2**(`uniform`, `x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2471)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUInt2`](ThinEngine.md#setuint2)

***

### setUInt3()

> **setUInt3**(`uniform`, `x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2489](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2489)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUInt3`](ThinEngine.md#setuint3)

***

### setUInt4()

> **setUInt4**(`uniform`, `x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2508)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUInt4`](ThinEngine.md#setuint4)

***

### setUIntArray()

> **setUIntArray**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2524](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2524)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUIntArray`](ThinEngine.md#setuintarray)

***

### setUIntArray2()

> **setUIntArray2**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2540)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUIntArray2`](ThinEngine.md#setuintarray2)

***

### setUIntArray3()

> **setUIntArray3**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2555)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUIntArray3`](ThinEngine.md#setuintarray3)

***

### setUIntArray4()

> **setUIntArray4**(`uniform`, `array`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2570)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`setUIntArray4`](ThinEngine.md#setuintarray4)

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

[`ThinEngine`](ThinEngine.md).[`setViewport`](ThinEngine.md#setviewport)

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

[`ThinEngine`](ThinEngine.md).[`setZOffset`](ThinEngine.md#setzoffset)

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

[`ThinEngine`](ThinEngine.md).[`setZOffsetUnits`](ThinEngine.md#setzoffsetunits)

***

### snapshotRenderingReset()

> **snapshotRenderingReset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L261)

Creates a new snapshot at the next frame using the current snapshotRenderingMode

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`snapshotRenderingReset`](ThinEngine.md#snapshotrenderingreset)

***

### startTimeQuery()

> **startTimeQuery**(): [`Nullable`](../type-aliases/Nullable.md)\<`_TimeToken`\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.query.types.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.query.types.ts#L22)

Starts a time query (used to measure time spent by the GPU on a specific frame)
Please note that only one query can be issued at a time

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`_TimeToken`\>

a time token used to track the time span

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`startTimeQuery`](ThinEngine.md#starttimequery)

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

[`ThinEngine`](ThinEngine.md).[`stopRenderLoop`](ThinEngine.md#stoprenderloop)

***

### switchFullscreen()

> **switchFullscreen**(`requestPointerLock`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L414)

Toggle full screen mode

#### Parameters

##### requestPointerLock

`boolean`

defines if a pointer lock should be requested from the user

#### Returns

`void`

#### Overrides

[`ThinEngine`](ThinEngine.md).[`switchFullscreen`](ThinEngine.md#switchfullscreen)

***

### unbindAllAttributes()

> **unbindAllAttributes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4152)

Unbind all vertex attributes from the webGL context

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`unbindAllAttributes`](ThinEngine.md#unbindallattributes)

***

### unbindAllTextures()

> **unbindAllTextures**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3932)

Unbind all textures from the webGL context

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`unbindAllTextures`](ThinEngine.md#unbindalltextures)

***

### unBindFramebuffer()

> **unBindFramebuffer**(`texture`, `disableGenerateMipMaps?`, `onBeforeUnbind?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1232)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`unBindFramebuffer`](ThinEngine.md#unbindframebuffer)

***

### unbindInstanceAttributes()

> **unbindInstanceAttributes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1714](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1714)

Unbind all instance attributes

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`unbindInstanceAttributes`](ThinEngine.md#unbindinstanceattributes)

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

[`ThinEngine`](ThinEngine.md).[`unBindMultiColorAttachmentFramebuffer`](ThinEngine.md#unbindmulticolorattachmentframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`unBindMultiColorAttachmentFramebuffer`](ThinEngine.md#unbindmulticolorattachmentframebuffer)

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

[`ThinEngine`](ThinEngine.md).[`unRegisterView`](ThinEngine.md#unregisterview)

***

### updateAndBindInstancesBuffer()

> **updateAndBindInstancesBuffer**(`instancesBuffer`, `data`, `offsetLocations`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1761](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1761)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`updateAndBindInstancesBuffer`](ThinEngine.md#updateandbindinstancesbuffer)

***

### updateArrayBuffer()

> **updateArrayBuffer**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:1462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L1462)

update the bound buffer with the given data

#### Parameters

##### data

`Float32Array`

defines the data to update

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`updateArrayBuffer`](ThinEngine.md#updatearraybuffer)

***

### updateDynamicIndexBuffer()

> **updateDynamicIndexBuffer**(`indexBuffer`, `indices`, `offset?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.types.ts#L12)

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

[`ThinEngine`](ThinEngine.md).[`updateDynamicIndexBuffer`](ThinEngine.md#updatedynamicindexbuffer)

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

[`ThinEngine`](ThinEngine.md).[`updateDynamicTexture`](ThinEngine.md#updatedynamictexture)

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

[`ThinEngine`](ThinEngine.md).[`updateDynamicTexture`](ThinEngine.md#updatedynamictexture)

***

### updateDynamicVertexBuffer()

> **updateDynamicVertexBuffer**(`vertexBuffer`, `data`, `byteOffset?`, `byteLength?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.types.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.dynamicBuffer.types.ts#L21)

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

[`ThinEngine`](ThinEngine.md).[`updateDynamicVertexBuffer`](ThinEngine.md#updatedynamicvertexbuffer)

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

[`ThinEngine`](ThinEngine.md).[`updateMultipleRenderTargetTextureSampleCount`](ThinEngine.md#updatemultiplerendertargettexturesamplecount)

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

[`ThinEngine`](ThinEngine.md).[`updateMultipleRenderTargetTextureSampleCount`](ThinEngine.md#updatemultiplerendertargettexturesamplecount)

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

[`ThinEngine`](ThinEngine.md).[`updateRawCubeTexture`](ThinEngine.md#updaterawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawCubeTexture`](ThinEngine.md#updaterawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawCubeTexture`](ThinEngine.md#updaterawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawCubeTexture`](ThinEngine.md#updaterawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawCubeTexture`](ThinEngine.md#updaterawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawCubeTexture`](ThinEngine.md#updaterawcubetexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture`](ThinEngine.md#updaterawtexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture`](ThinEngine.md#updaterawtexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture`](ThinEngine.md#updaterawtexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture`](ThinEngine.md#updaterawtexture)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture2DArray`](ThinEngine.md#updaterawtexture2darray)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture2DArray`](ThinEngine.md#updaterawtexture2darray)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture2DArray`](ThinEngine.md#updaterawtexture2darray)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture2DArray`](ThinEngine.md#updaterawtexture2darray)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture2DArray`](ThinEngine.md#updaterawtexture2darray)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture3D`](ThinEngine.md#updaterawtexture3d)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture3D`](ThinEngine.md#updaterawtexture3d)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture3D`](ThinEngine.md#updaterawtexture3d)

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

[`ThinEngine`](ThinEngine.md).[`updateRawTexture3D`](ThinEngine.md#updaterawtexture3d)

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

[`ThinEngine`](ThinEngine.md).[`updateRenderTargetTextureSampleCount`](ThinEngine.md#updaterendertargettexturesamplecount)

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

[`ThinEngine`](ThinEngine.md).[`updateRenderTargetTextureSampleCount`](ThinEngine.md#updaterendertargettexturesamplecount)

***

### updateTextureComparisonFunction()

> **updateTextureComparisonFunction**(`texture`, `comparisonFunction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:931](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L931)

Updates a depth texture Comparison Mode and Function.
If the comparison Function is equal to 0, the mode will be set to none.
Otherwise, this only works in webgl 2 and requires a shadow sampler in the shader.

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

The texture to set the comparison function for

##### comparisonFunction

`number`

The comparison function to set, 0 if no comparison required

#### Returns

`void`

***

### updateTextureData()

> **updateTextureData**(`texture`, `imageData`, `xOffset`, `yOffset`, `width`, `height`, `faceIndex?`, `lod?`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3542](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3542)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`updateTextureData`](ThinEngine.md#updatetexturedata)

***

### updateTextureDimensions()

> **updateTextureDimensions**(`texture`, `width`, `height`, `depth?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3336)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`updateTextureDimensions`](ThinEngine.md#updatetexturedimensions)

***

### updateTextureSamplingMode()

> **updateTextureSamplingMode**(`samplingMode`, `texture`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3312)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`updateTextureSamplingMode`](ThinEngine.md#updatetexturesamplingmode)

***

### updateTextureWrappingMode()

> **updateTextureWrappingMode**(`texture`, `wrapU`, `wrapV?`, `wrapR?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:3345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L3345)

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

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`updateTextureWrappingMode`](ThinEngine.md#updatetexturewrappingmode)

***

### updateUniformBuffer()

> **updateUniformBuffer**(`uniformBuffer`, `elements`, `offset?`, `count?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Extensions/engine.uniformBuffer.types.ts#L33)

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

[`ThinEngine`](ThinEngine.md).[`updateUniformBuffer`](ThinEngine.md#updateuniformbuffer)

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

[`ThinEngine`](ThinEngine.md).[`updateVideoTexture`](ThinEngine.md#updatevideotexture)

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

[`ThinEngine`](ThinEngine.md).[`updateVideoTexture`](ThinEngine.md#updatevideotexture)

***

### updateWrappedWebGLTexture()

> **updateWrappedWebGLTexture**(`internalTexture`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:813](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L813)

Replaces the underlying WebGL handle of a texture previously created via [wrapWebGLTexture](#wrapwebgltexture), preserving
the InternalTexture identity.

Intended for the context-loss / context-restored flow: when the host application recreates its external resource
on the new WebGL context, it calls this method to repoint Babylon's wrapper at the new handle without losing
references held by materials, render-target wrappers, particle systems, etc.

The new handle must describe a texture with the same dimensions the wrapped texture was created with. A WebGL
handle is opaque (the dimensions can't be introspected), so we can't validate this -- passing a mismatched
handle is undefined behaviour. Sampling mode and mip-map flag are properties of the logical wrapped texture and
are re-applied to the new resource. Any render-target wrapper holding this texture as its color attachment has
its framebuffer rebuilt with the new handle (including a fresh depth/stencil renderbuffer, since the old one
came from the dead context). If the wrapper is multisampled, the MSAA framebuffer + color renderbuffer + MSAA
depth/stencil buffer are rebuilt too.

Throws if the target was not produced by [wrapWebGLTexture](#wrapwebgltexture), if the wrapped texture is part of a multi
render-target wrapper, or if the wrapper has a depth/stencil texture (these are not supported in this version;
dispose and re-wrap).

#### Parameters

##### internalTexture

[`InternalTexture`](InternalTexture.md)

defines the wrapped InternalTexture to repoint

##### texture

`WebGLTexture`

defines the new WebGL handle to wrap

#### Returns

`void`

***

### wipeCaches()

> **wipeCaches**(`bruteForce?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:2781](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L2781)

Force the entire cache to be cleared
You should not have to use this function unless your engine needs to share the webGL context with another engine

#### Parameters

##### bruteForce?

`boolean`

defines a boolean to force clearing ALL caches (including stencil, detoh and alpha states)

#### Returns

`void`

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`wipeCaches`](ThinEngine.md#wipecaches)

***

### wrapWebGLTexture()

> **wrapWebGLTexture**(`texture`, `hasMipMaps?`, `samplingMode?`, `width?`, `height?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:771](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L771)

Wraps an external web gl texture in a Babylon texture.

#### Parameters

##### texture

`WebGLTexture`

defines the external texture

##### hasMipMaps?

`boolean` = `false`

defines whether the external texture has mip maps (default: false)

##### samplingMode?

`number` = `Constants.TEXTURE_TRILINEAR_SAMPLINGMODE`

defines the sampling mode for the external texture (default: Constants.TEXTURE_TRILINEAR_SAMPLINGMODE)

##### width?

`number` = `0`

defines the width for the external texture (default: 0)

##### height?

`number` = `0`

defines the height for the external texture (default: 0)

#### Returns

[`InternalTexture`](InternalTexture.md)

the babylon internal texture

***

### DefaultLoadingScreenFactory()

> `static` **DefaultLoadingScreenFactory**(`canvas`): [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engine.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engine.pure.ts#L317)

Method called to create the default loading screen.
This can be overridden in your own app.

#### Parameters

##### canvas

`HTMLCanvasElement`

The rendering canvas element

#### Returns

[`ILoadingScreen`](../interfaces/ILoadingScreen.md)

The loading screen

#### Overrides

[`ThinEngine`](ThinEngine.md).[`DefaultLoadingScreenFactory`](ThinEngine.md#defaultloadingscreenfactory)

***

### isSupported()

> `static` **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.pure.ts:4673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinEngine.pure.ts#L4673)

Gets a boolean indicating if the engine can be instantiated (ie. if a webGL context can be found)

#### Returns

`boolean`

true if the engine can be created

#### Inherited from

[`ThinEngine`](ThinEngine.md).[`isSupported`](ThinEngine.md#issupported-1)

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

[`ThinEngine`](ThinEngine.md).[`MarkAllMaterialsAsDirty`](ThinEngine.md#markallmaterialsasdirty)
