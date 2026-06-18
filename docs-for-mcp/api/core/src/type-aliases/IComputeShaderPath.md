[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IComputeShaderPath

# Type Alias: IComputeShaderPath

> **IComputeShaderPath** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L23)

Defines the route to the shader code. The priority is as follows:
 * object: `{ computeSource: "compute shader code string"}` for directly passing the shader code
 * object: `{ computeElement: "vertexShaderCode" }`, used with shader code in script tags
 * object: `{ compute: "custom" }`, used with `Effect.ShadersStore["customVertexShader"]` and `Effect.ShadersStore["customFragmentShader"]`
 * string: `"./COMMON_NAME"`, used with external files COMMON_NAME.vertex.fx and COMMON_NAME.fragment.fx in index.html folder.

## Properties

### compute?

> `optional` **compute?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L32)

Used with Effect.ShadersStore. If the `vertex` is set to `"custom`, then
Babylon.js will read from Effect.ShadersStore["customVertexShader"]

***

### computeElement?

> `optional` **computeElement?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L36)

Used with shader code in script tags

***

### computeSource?

> `optional` **computeSource?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L27)

Directly pass the shader code
