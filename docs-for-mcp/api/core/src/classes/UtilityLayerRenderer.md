[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UtilityLayerRenderer

# Class: UtilityLayerRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L17)

Renders a layer on top of an existing scene

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new UtilityLayerRenderer**(`originalScene`, `handleEvents?`, `manualRender?`): `UtilityLayerRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L165)

Instantiates a UtilityLayerRenderer

#### Parameters

##### originalScene

[`Scene`](Scene.md)

the original scene that will be rendered on top of

##### handleEvents?

`boolean` = `true`

boolean indicating if the utility layer should handle events

##### manualRender?

`boolean` = `false`

boolean indicating if the utility layer should render manually.

#### Returns

`UtilityLayerRenderer`

## Properties

### handleEvents

> `readonly` **handleEvents**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L168)

boolean indicating if the utility layer should handle events

***

### mainSceneTrackerPredicate

> **mainSceneTrackerPredicate**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L154)

Gets or sets a predicate that will be used to indicate utility meshes present in the main scene

#### Parameters

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Returns

`boolean`

***

### onlyCheckPointerDownEvents

> **onlyCheckPointerDownEvents**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L136)

If set to true, only pointer down onPointerObservable events will be blocked when picking is occluded by original scene

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L151)

Observable raised when the pointer moves from the utility layer scene to the main scene

***

### originalScene

> **originalScene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L167)

the original scene that will be rendered on top of

***

### pickingEnabled

> **pickingEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L146)

Set to false to disable picking

***

### pickUtilitySceneFirst

> **pickUtilitySceneFirst**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L74)

If the picking should be done on the utility layer prior to the actual scene (Default: true)

***

### processAllEvents

> **processAllEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L141)

If set to false, only pointerUp, pointerDown and pointerMove will be sent to the utilityLayerScene (false by default)

***

### shouldRender

> **shouldRender**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L132)

If the utility layer should automatically be rendered on top of existing scene

***

### utilityLayerScene

> **utilityLayerScene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L127)

The scene that is rendered on top of the original scene

## Accessors

### DefaultKeepDepthUtilityLayer

#### Get Signature

> **get** `static` **DefaultKeepDepthUtilityLayer**(): `UtilityLayerRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L102)

A shared utility layer that can be used to embed objects into a scene (Depth map of the previous scene is not cleared before drawing on top of it)

##### Returns

`UtilityLayerRenderer`

***

### DefaultUtilityLayer

#### Get Signature

> **get** `static` **DefaultUtilityLayer**(): `UtilityLayerRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L78)

A shared utility layer that can be used to overlay objects into a scene (Depth map of the previous scene is cleared before drawing on top of it)

##### Returns

`UtilityLayerRenderer`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L402)

Disposes of the renderer

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getRenderCamera()

> **getRenderCamera**(`getRigParentIfPossible?`): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L33)

Gets the camera that is used to render the utility layer (when not set, this will be the last active camera)

#### Parameters

##### getRigParentIfPossible?

`boolean`

if the current active camera is a rig camera, should its parent camera be returned

#### Returns

[`Camera`](Camera.md)

the camera that is used when rendering the utility layer

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L372)

Renders the utility layers scene on top of the original scene

#### Returns

`void`

***

### setRenderCamera()

> **setRenderCamera**(`cam`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/utilityLayerRenderer.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/utilityLayerRenderer.ts#L54)

Sets the camera that should be used when rendering the utility layer (If set to null the last active camera will be used)

#### Parameters

##### cam

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the camera that should be used when rendering the utility layer

#### Returns

`void`
