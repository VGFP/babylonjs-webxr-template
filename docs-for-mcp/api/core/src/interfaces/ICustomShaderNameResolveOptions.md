[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICustomShaderNameResolveOptions

# Interface: ICustomShaderNameResolveOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L77)

Options passed when calling customShaderNameResolve

## Properties

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L81)

If provided, will be called two times with the vertex and fragment code so that this code can be updated before it is compiled by the GPU
