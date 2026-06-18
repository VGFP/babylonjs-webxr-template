[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IComputeEffectCreationOptions

# Interface: IComputeEffectCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L42)

Options to be used when creating a compute effect.

## Properties

### defines

> **defines**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L46)

Define statements that will be set in the shader.

***

### entryPoint?

> `optional` **entryPoint?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L50)

The name of the entry point in the shader source (default: "main")

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L54)

Callback that will be called when the shader is compiled.

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L58)

Callback that will be called if an error occurs during shader compilation.

***

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<(`code`) => `string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L62)

If provided, will be called with the shader code so that this code can be updated before it is compiled by the GPU

***

### useExplicitComputePipelineLayout?

> `optional` **useExplicitComputePipelineLayout?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L66)

If true, the engine should create an explicit pipeline layout for the compute effect instead of using an automatic layout.
