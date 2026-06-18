[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IComputeShaderOptions

# Interface: IComputeShaderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L30)

Defines the options associated with the creation of a compute shader.

## Properties

### bindingsMapping

> **bindingsMapping**: [`ComputeBindingMapping`](../type-aliases/ComputeBindingMapping.md)

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L36)

list of bindings mapping (key is property name, value is binding location)
Must be provided because browsers don't support reflection for wgsl shaders yet (so there's no way to query the binding/group from a variable name)
TODO: remove this when browsers support reflection for wgsl shaders

***

### defines?

> `optional` **defines?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L41)

The list of defines used in the shader

***

### entryPoint?

> `optional` **entryPoint?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L46)

The name of the entry point in the shader source (default: "main")

***

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<(`code`) => `string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L51)

If provided, will be called with the shader code so that this code can be updated before it is compiled by the GPU

***

### useExplicitComputePipelineLayout?

> `optional` **useExplicitComputePipelineLayout?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeShader.pure.ts#L56)

If true, the engine should create an explicit pipeline layout for this compute shader instead of using an automatic layout.
