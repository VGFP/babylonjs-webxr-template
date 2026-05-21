[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphSelectionOutlineLayerTask

# Class: FrameGraphSelectionOutlineLayerTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts#L8)

Task which applies a selection outline effect to a texture.

## Extends

- `FrameGraphBaseLayerTask`

## Constructors

### Constructor

> **new FrameGraphSelectionOutlineLayerTask**(`name`, `frameGraph`, `scene`, `options?`): `FrameGraphSelectionOutlineLayerTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts#L28)

Constructs a new selection outline layer task.

#### Parameters

##### name

`string`

Name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph this task is associated with.

##### scene

[`Scene`](Scene.md)

The scene to render the selection outline layer in.

##### options?

[`IThinSelectionOutlineLayerOptions`](../interfaces/IThinSelectionOutlineLayerOptions.md)

Options for the selection outline layer.

#### Returns

`FrameGraphSelectionOutlineLayerTask`

#### Overrides

`FrameGraphBaseLayerTask.constructor`

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

`FrameGraphBaseLayerTask.dependencies`

***

### depthTexture

> **depthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts#L19)

The depth texture to use when rendering the selection outline layer.
It must store the scene depth in camera view space Z, normalized or not.
If not normalized, the storeCameraSpaceZ option must be passed to the constructor.

***

### layer

> `readonly` **layer**: `ThinSelectionOutlineLayer`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts#L12)

The selection outline layer object. Use this object to update the selection outline layer properties (e.g. intensity, blur kernel size).

#### Overrides

`FrameGraphBaseLayerTask.layer`

***

### layerTexture?

> `optional` **layerTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L88)

The layer texture to render the effect into.
If not provided, a default texture will be created.

#### Inherited from

`FrameGraphBaseLayerTask.layerTexture`

***

### objectRendererTask

> **objectRendererTask**: [`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L82)

The object renderer task used to render the objects in the texture to which the layer will be applied.
This is needed because the layer may have to inject code in the rendering manager used by object renderer task.

#### Inherited from

`FrameGraphBaseLayerTask.objectRendererTask`

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

`FrameGraphBaseLayerTask.onAfterTaskExecute`

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

`FrameGraphBaseLayerTask.onBeforeTaskExecute`

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

`FrameGraphBaseLayerTask.onTexturesAllocatedObservable`

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L93)

The output texture of the task (same as targetTexture, but the handle will be different).

#### Inherited from

`FrameGraphBaseLayerTask.outputTexture`

***

### targetTexture

> **targetTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L76)

The target texture to apply the effect layer to.
The effect will be blended with the contents of this texture.

#### Inherited from

`FrameGraphBaseLayerTask.targetTexture`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L43)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`FrameGraphBaseLayerTask.disabled`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L103)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L107)

The name of the task.

##### Parameters

###### name

`string`

##### Returns

`void`

#### Inherited from

`FrameGraphBaseLayerTask.name`

***

### objectRendererForLayer

#### Get Signature

> **get** **objectRendererForLayer**(): [`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L128)

Gets the object renderer used to render the layer.

##### Returns

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md)

#### Inherited from

`FrameGraphBaseLayerTask.objectRendererForLayer`

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

`FrameGraphBaseLayerTask.passes`

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

`FrameGraphBaseLayerTask.passesDisabled`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:456](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L456)

Disposes of the task.

#### Returns

`void`

#### Inherited from

`FrameGraphBaseLayerTask.dispose`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts#L37)

#### Returns

`string`

#### Overrides

`FrameGraphBaseLayerTask.getClassName`

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L90)

This function is called once after the task has been added to the frame graph and before the frame graph is built for the first time.
This allows you to initialize asynchronous resources, which is not possible in the constructor.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the initialization is complete.

#### Inherited from

`FrameGraphBaseLayerTask.initAsync`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/baseLayerTask.ts#L212)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Inherited from

`FrameGraphBaseLayerTask.isReady`

***

### record()

> **record**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Layers/selectionOutlineTask.ts#L41)

#### Returns

`void`

#### Overrides

`FrameGraphBaseLayerTask.record`
