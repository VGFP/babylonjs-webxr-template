[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ComputeShader

# Class: ComputeShader

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L64)

The ComputeShader object lets you execute a compute shader on your GPU (if supported by the engine)

## Constructors

### Constructor

> **new ComputeShader**(`name`, `engine`, `shaderPath`, `options?`): `ComputeShader`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L139)

Instantiates a new compute shader.

#### Parameters

##### name

`string`

Defines the name of the compute shader in the scene

##### engine

[`AbstractEngine`](AbstractEngine.md)

Defines the engine the compute shader belongs to

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

`ComputeShader`

## Properties

### fastMode

> **fastMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L105)

When set to true, dispatch won't call isReady anymore and won't check if the underlying GPU resources should be (re)created because of a change in the inputs (texture, uniform buffer, etc.)
If you know that your inputs did not change since last time dispatch was called and that isReady() returns true, set this flag to true to improve performance

***

### gpuTimeInFrame?

> `readonly` `optional` **gpuTimeInFrame?**: `WebGPUPerfCounter`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L121)

Gets the GPU time spent running the compute shader for the last frame rendered (in nanoseconds).
You have to enable the "timestamp-query" extension in the engine constructor options and set engine.enableGPUTimingMeasurements = true.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L84)

The name of the shader

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L110)

Callback triggered when the shader is compiled

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L115)

Callback triggered when an error occurs

***

### triggerContextRebuild

> **triggerContextRebuild**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L126)

If set to true, the compute context will be rebuilt at the next dispatch even if in fast mode

***

### uniqueId

> `readonly` **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L78)

Gets the unique id of the compute shader

## Accessors

### options

#### Get Signature

> **get** **options**(): [`IComputeShaderOptions`](../interfaces/IComputeShaderOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L89)

The options used to create the shader

##### Returns

[`IComputeShaderOptions`](../interfaces/IComputeShaderOptions.md)

***

### shaderPath

#### Get Signature

> **get** **shaderPath**(): `string` \| [`IComputeShaderPath`](../type-aliases/IComputeShaderPath.md)

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L96)

The shaderPath used to create the shader

##### Returns

`string` \| [`IComputeShaderPath`](../type-aliases/IComputeShaderPath.md)

## Methods

### dispatch()

> **dispatch**(`x`, `y?`, `z?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L382)

Dispatches (executes) the compute shader

#### Parameters

##### x

`number`

Number of workgroups to execute on the X dimension

##### y?

`number`

Number of workgroups to execute on the Y dimension (default: 1)

##### z?

`number`

Number of workgroups to execute on the Z dimension (default: 1)

#### Returns

`boolean`

True if the dispatch could be done, else false (meaning either the compute effect or at least one of the bound resources was not ready)

***

### dispatchIndirect()

> **dispatchIndirect**(`buffer`, `offset?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L397)

Dispatches (executes) the compute shader.

#### Parameters

##### buffer

[`DataBuffer`](DataBuffer.md) \| [`StorageBuffer`](StorageBuffer.md)

Buffer containing the number of workgroups to execute on the X, Y and Z dimensions

##### offset?

`number` = `0`

Offset in the buffer where the workgroup counts are stored (default: 0)

#### Returns

`boolean`

True if the dispatch could be done, else false (meaning either the compute effect or at least one of the bound resources was not ready)

***

### dispatchWhenReady()

> **dispatchWhenReady**(`x`, `y?`, `z?`, `delay?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L471)

Waits for the compute shader to be ready and executes it

#### Parameters

##### x

`number`

Number of workgroups to execute on the X dimension

##### y?

`number`

Number of workgroups to execute on the Y dimension (default: 1)

##### z?

`number`

Number of workgroups to execute on the Z dimension (default: 1)

##### delay?

`number` = `10`

Delay between the retries while the shader is not ready (in milliseconds - 10 by default)

#### Returns

`Promise`\<`void`\>

A promise that is resolved once the shader has been sent to the GPU. Note that it does not mean that the shader execution itself is finished!

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L171)

Gets the current class name of the material e.g. "ComputeShader"
Mainly use in serialization.

#### Returns

`string`

the class name

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L314)

Specifies that the compute shader is ready to be executed (the compute effect and all the resources are ready)

#### Returns

`boolean`

true if the compute shader is ready to be executed

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L481)

Serializes this compute shader in a JSON representation

#### Returns

`any`

the serialized compute shader object

***

### setExternalTexture()

> **setExternalTexture**(`name`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L232)

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

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L198)

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

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L281)

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

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L215)

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

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L181)

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

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L298)

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

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L264)

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

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L250)

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
