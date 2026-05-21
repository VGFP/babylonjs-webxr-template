[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphComputeShaderTask

# Class: FrameGraphComputeShaderTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L24)

Task used to execute a compute shader (WebGPU only)

## Extends

- [`FrameGraphTask`](FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphComputeShaderTask**(`name`, `frameGraph`, `shaderPath`, `options?`): `FrameGraphComputeShaderTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L73)

Creates a new compute shader task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph the task belongs to.

##### shaderPath

`string` \| [`IComputeShaderPath`](../type-aliases/IComputeShaderPath.md)

Defines the route to the shader code in one of three ways:
 * object: { compute: "custom" }, used with ShaderStore.ShadersStoreWGSL["customComputeShader"]
 * object: { computeElement: "HTMLElementId" }, used with shader code in script tags
 * object: { computeSource: "compute shader code string" }, where the string contains the shader code
 * string: try first to find the code in ShaderStore.ShadersStoreWGSL[shaderPath + "ComputeShader"]. If not, assumes it is a file with name shaderPath.compute.fx in index.html folder.

##### options?

`Partial`\<[`IComputeShaderOptions`](../interfaces/IComputeShaderOptions.md)\> = `{}`

Define the options used to create the shader

#### Returns

`FrameGraphComputeShaderTask`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`constructor`](FrameGraphTask.md#constructor)

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`dependencies`](FrameGraphTask.md#dependencies)

***

### dispatchSize

> **dispatchSize**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L32)

Defines the dispatch size for the compute shader

***

### execute?

> `optional` **execute?**: (`context`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L44)

An optional execute function that will be called at the beginning of the task execution

#### Parameters

##### context

[`FrameGraphContext`](FrameGraphContext.md)

#### Returns

`void`

***

### indirectDispatch?

> `optional` **indirectDispatch?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L39)

Defines an indirect dispatch buffer and offset.
If set, this will be used instead of the dispatchSize property and an indirect dispatch will be performed.
"offset" is the offset in the buffer where the workgroup counts are stored (default: 0)

#### buffer

> **buffer**: [`DataBuffer`](DataBuffer.md) \| [`StorageBuffer`](StorageBuffer.md)

#### offset?

> `optional` **offset?**: `number`

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onAfterTaskExecute`](FrameGraphTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onBeforeTaskExecute`](FrameGraphTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onTexturesAllocatedObservable`](FrameGraphTask.md#ontexturesallocatedobservable)

## Accessors

### computeShader

#### Get Signature

> **get** **computeShader**(): [`ComputeShader`](ComputeShader.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L49)

Gets the compute shader used by the task

##### Returns

[`ComputeShader`](ComputeShader.md)

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

[`FrameGraphTask`](FrameGraphTask.md).[`disabled`](FrameGraphTask.md#disabled)

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

[`FrameGraphTask`](FrameGraphTask.md).[`name`](FrameGraphTask.md#name)

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passes`](FrameGraphTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passesDisabled`](FrameGraphTask.md#passesdisabled)

## Methods

### createUniformBuffer()

> **createUniformBuffer**(`name`, `description`, `autoUpdate?`): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L98)

Creates a uniform buffer and binds it to the shader

#### Parameters

##### name

`string`

Name of the uniform buffer

##### description

Description of the uniform buffer: names and sizes (in floats) of the uniforms

##### autoUpdate?

`boolean` = `true`

If the UBO must be updated automatically before each dispatch (default: true)

#### Returns

[`UniformBuffer`](UniformBuffer.md)

The created uniform buffer

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L227)

Disposes of the task.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`dispose`](FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L186)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`getClassName`](FrameGraphTask.md#getclassname)

***

### getUniformBuffer()

> **getUniformBuffer**(`name`): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L58)

Gets a uniform buffer created by a call to createUniformBuffer()

#### Parameters

##### name

`string`

Name of the uniform buffer

#### Returns

[`UniformBuffer`](UniformBuffer.md)

The uniform buffer

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

[`FrameGraphTask`](FrameGraphTask.md).[`initAsync`](FrameGraphTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L87)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`isReady`](FrameGraphTask.md#isready)

***

### record()

> **record**(`skipCreationOfDisabledPasses?`): [`FrameGraphPass`](FrameGraphPass.md)\<[`FrameGraphContext`](FrameGraphContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L190)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Parameters

##### skipCreationOfDisabledPasses?

`boolean`

If true, the disabled passe(s) won't be created.

#### Returns

[`FrameGraphPass`](FrameGraphPass.md)\<[`FrameGraphContext`](FrameGraphContext.md)\>

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`record`](FrameGraphTask.md#record)

***

### setExternalTexture()

> **setExternalTexture**(`name`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L145)

Binds an external texture to the shader

#### Parameters

##### name

`string`

Binding name of the texture

##### texture

[`ExternalTexture`](ExternalTexture.md)

Texture to bind

#### Returns

`void`

***

### setInternalTexture()

> **setInternalTexture**(`name`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L127)

Binds an internal texture to the shader

#### Parameters

##### name

`string`

Binding name of the texture

##### texture

[`InternalTexture`](InternalTexture.md)

Texture to bind

#### Returns

`void`

***

### setStorageBuffer()

> **setStorageBuffer**(`name`, `buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L173)

Binds a storage buffer to the shader

#### Parameters

##### name

`string`

Binding name of the buffer

##### buffer

[`DataBuffer`](DataBuffer.md) \| [`StorageBuffer`](StorageBuffer.md)

Buffer to bind

#### Returns

`void`

***

### setStorageTexture()

> **setStorageTexture**(`name`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L136)

Binds a storage texture to the shader

#### Parameters

##### name

`string`

Binding name of the texture

##### texture

[`BaseTexture`](BaseTexture.md)

Texture to bind

#### Returns

`void`

***

### setTexture()

> **setTexture**(`name`, `texture`, `bindSampler?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L118)

Binds a texture to the shader

#### Parameters

##### name

`string`

Binding name of the texture

##### texture

[`BaseTexture`](BaseTexture.md)

Texture to bind

##### bindSampler?

`boolean` = `true`

Bind the sampler corresponding to the texture (default: true). The sampler will be bound just before the binding index of the texture

#### Returns

`void`

***

### setTextureSampler()

> **setTextureSampler**(`name`, `sampler`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L182)

Binds a texture sampler to the shader

#### Parameters

##### name

`string`

Binding name of the sampler

##### sampler

[`TextureSampler`](TextureSampler.md)

Sampler to bind

#### Returns

`void`

***

### setUniformBuffer()

> **setUniformBuffer**(`name`, `buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L164)

Binds a uniform buffer to the shader

#### Parameters

##### name

`string`

Binding name of the buffer

##### buffer

[`DataBuffer`](DataBuffer.md) \| [`UniformBuffer`](UniformBuffer.md)

Buffer to bind

#### Returns

`void`

***

### setVideoTexture()

> **setVideoTexture**(`name`, `texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/computeShaderTask.ts#L155)

Binds a video texture to the shader (by binding the external texture attached to this video)

#### Parameters

##### name

`string`

Binding name of the texture

##### texture

[`VideoTexture`](VideoTexture.md)

Texture to bind

#### Returns

`boolean`

true if the video texture was successfully bound, else false. false will be returned if the current engine does not support external textures
