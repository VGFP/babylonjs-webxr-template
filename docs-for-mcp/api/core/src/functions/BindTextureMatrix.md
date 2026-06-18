[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BindTextureMatrix

# Function: BindTextureMatrix()

> **BindTextureMatrix**(`texture`, `uniformBuffer`, `key`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L416)

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
