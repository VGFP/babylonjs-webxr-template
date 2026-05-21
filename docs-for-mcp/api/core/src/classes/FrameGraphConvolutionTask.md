[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphConvolutionTask

# Class: FrameGraphConvolutionTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts#L8)

Task which applies a convolution post process.

## Extends

- [`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md)

## Constructors

### Constructor

> **new FrameGraphConvolutionTask**(`name`, `frameGraph`, `thinPostProcess?`): `FrameGraphConvolutionTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts#L17)

Constructs a new convolution task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph this task belongs to.

##### thinPostProcess?

[`ThinConvolutionPostProcess`](ThinConvolutionPostProcess.md)

The thin post process to use for the task. If not provided, a new one will be created.

#### Returns

`FrameGraphConvolutionTask`

#### Overrides

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`constructor`](FrameGraphPostProcessTask.md#constructor)

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`dependencies`](FrameGraphPostProcessTask.md#dependencies)

***

### depthAttachmentTexture?

> `optional` **depthAttachmentTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L46)

The depth attachment texture to use for the post process (optional).
Note that a post-process task never writes to the depth buffer: attaching a depth texture is only useful if you want to test against the depth/stencil aspect or write to the stencil buffer.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`depthAttachmentTexture`](FrameGraphPostProcessTask.md#depthattachmenttexture)

***

### depthReadOnly

> **depthReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L54)

If true, the depth attachment will be read-only.
This means that the post process will not write to the depth buffer.
Setting depthReadOnly and stencilReadOnly to true is useful when you want to also be able to bind this same depth/stencil attachment to a shader.
Note that it will only work in WebGPU, as WebGL does not support read-only depth/stencil attachments.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`depthReadOnly`](FrameGraphPostProcessTask.md#depthreadonly)

***

### depthTest

> **depthTest**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L78)

If depth testing should be enabled (default is true).

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`depthTest`](FrameGraphPostProcessTask.md#depthtest)

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L68)

If true, color write will be disabled when applying the post process.
This means that the post process will not write to the color buffer.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`disableColorWrite`](FrameGraphPostProcessTask.md#disablecolorwrite)

***

### drawBackFace

> **drawBackFace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L73)

If true, the post process will be generated by a back face full-screen quad (CW order).

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`drawBackFace`](FrameGraphPostProcessTask.md#drawbackface)

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`onAfterTaskExecute`](FrameGraphPostProcessTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`onBeforeTaskExecute`](FrameGraphPostProcessTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`onTexturesAllocatedObservable`](FrameGraphPostProcessTask.md#ontexturesallocatedobservable)

***

### outputDepthAttachmentTexture

> `readonly` **outputDepthAttachmentTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L108)

The output depth attachment texture.
This texture will point to the same texture than the depthAttachmentTexture property if it is set.
Note, however, that the handle itself will be different!

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`outputDepthAttachmentTexture`](FrameGraphPostProcessTask.md#outputdepthattachmenttexture)

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L101)

The output texture of the post process.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`outputTexture`](FrameGraphPostProcessTask.md#outputtexture)

***

### postProcess

> `readonly` **postProcess**: [`ThinConvolutionPostProcess`](ThinConvolutionPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts#L9)

The post process to apply.

#### Overrides

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`postProcess`](FrameGraphPostProcessTask.md#postprocess)

***

### sourceSamplingMode

> **sourceSamplingMode**: `number` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L29)

The sampling mode to use for the source texture.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`sourceSamplingMode`](FrameGraphPostProcessTask.md#sourcesamplingmode)

***

### sourceTexture?

> `optional` **sourceTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L24)

The source texture to apply the post process on.
It's allowed to be undefined if the post process does not require a source texture.
In that case, targetTexture must be provided.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`sourceTexture`](FrameGraphPostProcessTask.md#sourcetexture)

***

### stencilReadOnly

> **stencilReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L62)

If true, the stencil attachment will be read-only.
This means that the post process will not write to the stencil buffer.
Setting depthReadOnly and stencilReadOnly to true is useful when you want to also be able to bind this same depth/stencil attachment to a shader.
Note that it will only work in WebGPU, as WebGL does not support read-only depth/stencil attachments.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`stencilReadOnly`](FrameGraphPostProcessTask.md#stencilreadonly)

***

### stencilState?

> `optional` **stencilState?**: [`IStencilStateProperties`](../interfaces/IStencilStateProperties.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L40)

The stencil state to use for the post process (optional).

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`stencilState`](FrameGraphPostProcessTask.md#stencilstate)

***

### targetTexture?

> `optional` **targetTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L35)

The target texture to render the post process to.
If not supplied, a texture with the same configuration as the source texture will be created.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`targetTexture`](FrameGraphPostProcessTask.md#targettexture)

***

### viewport?

> `optional` **viewport?**: [`Nullable`](../type-aliases/Nullable.md)\<`IViewportLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L96)

The viewport to use when applying the post process.
If set to null, the currently active viewport is used.
If undefined (default), the viewport is reset to a full screen viewport before applying the post process.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`viewport`](FrameGraphPostProcessTask.md#viewport)

## Accessors

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L83)

The alpha mode to use when applying the post process (default is ALPHA_DISABLE).

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L87)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`alphaMode`](FrameGraphPostProcessTask.md#alphamode)

***

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

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`disabled`](FrameGraphPostProcessTask.md#disabled)

***

### drawWrapper

#### Get Signature

> **get** **drawWrapper**(): [`DrawWrapper`](DrawWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L118)

The draw wrapper used by the post process

##### Returns

[`DrawWrapper`](DrawWrapper.md)

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`drawWrapper`](FrameGraphPostProcessTask.md#drawwrapper)

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

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`name`](FrameGraphPostProcessTask.md#name)

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`passes`](FrameGraphPostProcessTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`passesDisabled`](FrameGraphPostProcessTask.md#passesdisabled)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L243)

Disposes of the task.

#### Returns

`void`

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`dispose`](FrameGraphPostProcessTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts#L21)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`getClassName`](FrameGraphPostProcessTask.md#getclassname)

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

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`initAsync`](FrameGraphPostProcessTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/postProcessTask.ts#L144)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Inherited from

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`isReady`](FrameGraphPostProcessTask.md#isready)

***

### record()

> **record**(`skipCreationOfDisabledPasses?`, `additionalExecute?`, `additionalBindings?`): [`FrameGraphRenderPass`](FrameGraphRenderPass.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/convolutionTask.ts#L25)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Parameters

##### skipCreationOfDisabledPasses?

`boolean` = `false`

If true, the disabled passe(s) won't be created.

##### additionalExecute?

(`context`) => `void`

##### additionalBindings?

(`context`) => `void`

#### Returns

[`FrameGraphRenderPass`](FrameGraphRenderPass.md)

#### Overrides

[`FrameGraphPostProcessTask`](FrameGraphPostProcessTask.md).[`record`](FrameGraphPostProcessTask.md#record)
