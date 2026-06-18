[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BindIBLSamplers

# Function: BindIBLSamplers()

> **BindIBLSamplers**(`scene`, `defines`, `ubo`, `reflectionTexture?`, `realTimeFiltering?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L370)

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

### reflectionTexture?

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\> = `null`

The IBL texture

### realTimeFiltering?

`boolean` = `false`

Whether realtime filtering of IBL texture is being used

## Returns

`void`
