[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphClearTextureTask

# Class: FrameGraphClearTextureTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L9)

Task used to clear a texture.

## Extends

- `FrameGraphTaskMultiRenderTarget`

## Constructors

### Constructor

> **new FrameGraphClearTextureTask**(`name`, `frameGraph`): `FrameGraphClearTextureTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L65)

Constructs a new clear task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph the task belongs to.

#### Returns

`FrameGraphClearTextureTask`

#### Overrides

`FrameGraphTaskMultiRenderTarget.constructor`

## Properties

### clearColor

> **clearColor**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L18)

If the color should be cleared.

***

### clearDepth

> **clearDepth**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L28)

If the depth should be cleared.

***

### clearStencil

> **clearStencil**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L33)

If the stencil should be cleared.

***

### color

> **color**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L13)

The color to clear the texture with.

***

### convertColorToLinearSpace

> **convertColorToLinearSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L23)

If the color should be converted to linear space (default: false).

***

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

`FrameGraphTaskMultiRenderTarget.dependencies`

***

### depthTexture?

> `optional` **depthTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L48)

The depth attachment texture to clear.

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.onAfterTaskExecute`

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.onBeforeTaskExecute`

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.onTexturesAllocatedObservable`

***

### outputDepthTexture

> `readonly` **outputDepthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L58)

The output depth texture (same as depthTexture, but the handle will be different).

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L53)

The output texture (same as targetTexture, but the handle will be different).

***

### stencilValue

> **stencilValue**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L38)

The value to use to clear the stencil buffer (default: 0).

***

### targetTexture?

> `optional` **targetTexture?**: `number` \| `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L43)

The color texture to clear.

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

`FrameGraphTaskMultiRenderTarget.disabled`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L30)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L34)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`FrameGraphTaskMultiRenderTarget.name`

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

`FrameGraphTaskMultiRenderTarget.passes`

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

`FrameGraphTaskMultiRenderTarget.passesDisabled`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L120)

Disposes of the task.

#### Returns

`void`

#### Inherited from

`FrameGraphTaskMultiRenderTarget.dispose`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L72)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

`FrameGraphTaskMultiRenderTarget.getClassName`

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

`FrameGraphTaskMultiRenderTarget.initAsync`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L113)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.isReady`

***

### record()

> **record**(`skipCreationOfDisabledPasses?`): [`FrameGraphRenderPass`](FrameGraphRenderPass.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Texture/clearTextureTask.ts#L76)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Parameters

##### skipCreationOfDisabledPasses?

`boolean` = `false`

If true, the disabled passe(s) won't be created.

#### Returns

[`FrameGraphRenderPass`](FrameGraphRenderPass.md)

#### Overrides

`FrameGraphTaskMultiRenderTarget.record`

***

### setOutputLayerAndFaceIndices()

> **setOutputLayerAndFaceIndices**(`indices`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTaskMultiRenderTarget.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTaskMultiRenderTarget.ts#L15)

Sets the output layer and face indices for multi-target rendering.

#### Parameters

##### indices

[`LayerAndFaceIndex`](../type-aliases/LayerAndFaceIndex.md)[]

The array of layer and face indices.

#### Returns

`void`

#### Inherited from

`FrameGraphTaskMultiRenderTarget.setOutputLayerAndFaceIndices`
