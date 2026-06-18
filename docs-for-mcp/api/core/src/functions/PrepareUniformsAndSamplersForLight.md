[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareUniformsAndSamplersForLight

# Function: PrepareUniformsAndSamplersForLight()

> **PrepareUniformsAndSamplersForLight**(`lightIndex`, `uniformsList`, `samplersList`, `projectedLightTexture?`, `uniformBuffersList?`, `updateOnlyBuffersList?`, `iesLightTexture?`, `clusteredLightTextures?`, `rectAreaLightTexture?`, `clusteredLightStorageBuffer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:1442](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L1442)

Prepares the uniforms and samplers list to be used in the effect (for a specific light)

## Parameters

### lightIndex

`number`

defines the light index

### uniformsList

`string`[]

The uniform list

### samplersList

`string`[]

The sampler list

### projectedLightTexture?

`any`

defines if projected texture must be used

### uniformBuffersList?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

defines an optional list of uniform buffers

### updateOnlyBuffersList?

`boolean` = `false`

True to only update the uniformBuffersList array

### iesLightTexture?

`boolean` = `false`

defines if IES texture must be used

### clusteredLightTextures?

`boolean` = `false`

defines if the clustered light textures must be used

### rectAreaLightTexture?

`boolean` = `false`

defines if rect area light is using a emission texture.

### clusteredLightStorageBuffer?

`boolean` = `false`

defines if the clustered light tile mask uses a storage buffer instead of a texture

## Returns

`void`
