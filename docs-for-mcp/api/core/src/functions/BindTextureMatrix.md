[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BindTextureMatrix

# Function: BindTextureMatrix()

> **BindTextureMatrix**(`texture`, `uniformBuffer`, `key`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L403)

Binds a texture matrix value to its corresponding uniform

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

The texture to bind the matrix for

### uniformBuffer

[`UniformBuffer`](../classes/UniformBuffer.md)

The uniform buffer receiving the data

### key

`string`

The channel key "diffuse", "specular"... used in the shader

## Returns

`void`
