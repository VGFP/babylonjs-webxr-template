[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICustomShaderNameResolveOptions

# Interface: ICustomShaderNameResolveOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L75)

Options passed when calling customShaderNameResolve

## Properties

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L79)

If provided, will be called two times with the vertex and fragment code so that this code can be updated before it is compiled by the GPU
