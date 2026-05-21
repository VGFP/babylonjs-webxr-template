[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IComputeShaderOptions

# Interface: IComputeShaderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Compute/computeShader.ts#L28)

Defines the options associated with the creation of a compute shader.

## Properties

### bindingsMapping

> **bindingsMapping**: [`ComputeBindingMapping`](../type-aliases/ComputeBindingMapping.md)

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Compute/computeShader.ts#L34)

list of bindings mapping (key is property name, value is binding location)
Must be provided because browsers don't support reflection for wgsl shaders yet (so there's no way to query the binding/group from a variable name)
TODO: remove this when browsers support reflection for wgsl shaders

***

### defines?

> `optional` **defines?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Compute/computeShader.ts#L39)

The list of defines used in the shader

***

### entryPoint?

> `optional` **entryPoint?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Compute/computeShader.ts#L44)

The name of the entry point in the shader source (default: "main")

***

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<(`code`) => `string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeShader.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Compute/computeShader.ts#L49)

If provided, will be called with the shader code so that this code can be updated before it is compiled by the GPU
