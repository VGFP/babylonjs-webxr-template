[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForMergedUV

# Function: PrepareDefinesForMergedUV()

> **PrepareDefinesForMergedUV**(`texture`, `defines`, `key`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:386](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L386)

Helps preparing the defines values about the UVs in used in the effect.
UVs are shared as much as we can across channels in the shaders.

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

The texture we are preparing the UVs for

### defines

`any`

The defines to update

### key

`string`

The channel key "diffuse", "specular"... used in the shader

## Returns

`void`
