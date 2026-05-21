[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TextureTools

# Variable: TextureTools

> `const` **TextureTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/textureTools.ts:540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/textureTools.ts#L540)

Class used to host texture specific utilities

## Type Declaration

### ApplyPostProcess

> **ApplyPostProcess**: (`postProcessName`, `internalTexture`, `scene`, `type?`, `samplingMode?`, `format?`, `width?`, `height?`) => `Promise`\<[`InternalTexture`](../classes/InternalTexture.md)\>

Apply a post process to a texture

Apply a post process to a texture

#### Parameters

##### postProcessName

`string`

name of the fragment post process

##### internalTexture

[`InternalTexture`](../classes/InternalTexture.md)

the texture to encode

##### scene

[`Scene`](../classes/Scene.md)

the scene hosting the texture

##### type?

`number`

type of the output texture. If not provided, use the one from internalTexture

##### samplingMode?

`number`

sampling mode to use to sample the source texture. If not provided, use the one from internalTexture

##### format?

`number`

format of the output texture. If not provided, use the one from internalTexture

##### width?

`number`

width of the output texture. If not provided, use the one from internalTexture

##### height?

`number`

height of the output texture. If not provided, use the one from internalTexture

#### Returns

`Promise`\<[`InternalTexture`](../classes/InternalTexture.md)\>

a promise with the internalTexture having its texture replaced by the result of the processing

#### Param

name of the fragment post process

#### Param

the texture to encode

#### Param

the scene hosting the texture

#### Param

type of the output texture. If not provided, use the one from internalTexture

#### Param

sampling mode to use to sample the source texture. If not provided, use the one from internalTexture

#### Param

format of the output texture. If not provided, use the one from internalTexture

#### Returns

a promise with the internalTexture having its texture replaced by the result of the processing

### CreateResizedCopy

> **CreateResizedCopy**: (`texture`, `width`, `height`, `useBilinearMode`) => [`Texture`](../classes/Texture.md)

Uses the GPU to create a copy texture rescaled at a given size

Uses the GPU to create a copy texture rescaled at a given size

#### Parameters

##### texture

[`Texture`](../classes/Texture.md)

Texture to copy from

##### width

`number`

defines the desired width

##### height

`number`

defines the desired height

##### useBilinearMode?

`boolean` = `true`

defines if bilinear mode has to be used

#### Returns

[`Texture`](../classes/Texture.md)

the generated texture

#### Param

Texture to copy from

#### Param

defines the desired width

#### Param

defines the desired height

#### Param

defines if bilinear mode has to be used

#### Returns

the generated texture

### FromHalfFloat

> **FromHalfFloat**: (`value`) => `number`

Converts a half float to a number

Converts a half float to a number

#### Parameters

##### value

`number`

half float to convert

#### Returns

`number`

converted half float

#### Param

half float to convert

#### Returns

converted half float

### GetTextureDataAsync

> **GetTextureDataAsync**: (`texture`, `width?`, `height?`, `face`, `lod`, `forceRTT`, `slice`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Gets the data of the specified texture by rendering it to an intermediate RGBA texture and retrieving the bytes from it.
This is convienent to get 8-bit RGBA values for a texture in a GPU compressed format.

Gets the pixel data of the specified texture, either by reading it directly
or by rendering it to an intermediate RGBA texture and retrieving the bytes from it.
This is convenient to get 8-bit RGBA values for a texture in a GPU compressed format.
When direct readback returns non-RGBA channel layouts, the result is normalized to RGBA8.

#### Parameters

##### texture

[`BaseTexture`](../classes/BaseTexture.md)

the source texture

##### width?

`number`

the target width of the result, which does not have to match the source texture width

##### height?

`number`

the target height of the result, which does not have to match the source texture height

##### face?

`number` = `0`

if the texture has multiple faces, the face index to use for the source

##### lod?

`number` = `0`

if the texture has multiple LODs, the lod index to use for the source

##### forceRTT?

`boolean` = `false`

if true, forces the use of the RTT path for reading pixels (useful for cube maps to ensure correct orientation and gamma)

##### slice?

`number` = `0`

if the texture is 3D, the depth slice index to use for the source

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

the 8-bit texture data

#### Param

the source texture

#### Param

the width of the result, which does not have to match the source texture width

#### Param

the height of the result, which does not have to match the source texture height

#### Param

if the texture has multiple faces, the face index to use for the source

#### Param

if the texture has multiple LODs, the lod index to use for the source

#### Returns

the 8-bit texture data

### ToHalfFloat

> **ToHalfFloat**: (`value`) => `number`

Converts a number to half float

Converts a number to half float

#### Parameters

##### value

`number`

number to convert

#### Returns

`number`

converted number

#### Param

number to convert

#### Returns

converted number
