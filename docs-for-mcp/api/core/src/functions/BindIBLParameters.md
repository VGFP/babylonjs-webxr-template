[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BindIBLParameters

# Function: BindIBLParameters()

> **BindIBLParameters**(`scene`, `defines`, `ubo`, `reflectionColor`, `reflectionTexture?`, `realTimeFiltering?`, `supportTextureInfo?`, `supportLocalProjection?`, `usePBR?`, `supportSH?`, `useColor?`, `reflectionBlur?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L288)

Update parameters for IBL

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene

### defines

`any`

The list of shader defines for the material

### ubo

[`UniformBuffer`](../classes/UniformBuffer.md)

The uniform buffer to update

### reflectionColor

[`Color3`](../classes/Color3.md)

The color to use for the reflection

### reflectionTexture?

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\> = `null`

The IBL texture

### realTimeFiltering?

`boolean` = `false`

Whether realtime filtering of IBL texture is being used

### supportTextureInfo?

`boolean` = `false`

Whether the texture info is supported

### supportLocalProjection?

`boolean` = `false`

Whether local projection is supported

### usePBR?

`boolean` = `false`

Whether PBR is being used

### supportSH?

`boolean` = `false`

Whether spherical harmonics are supported

### useColor?

`boolean` = `false`

Whether to use the reflection color

### reflectionBlur?

`number` = `0`

The level of blur of the reflection

## Returns

`void`
