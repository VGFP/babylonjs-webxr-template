[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TextureTools

# Variable: TextureTools

> `const` **TextureTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/textureTools.ts:474](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/textureTools.ts#L474)

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

**postProcessName**

name of the fragment post process

#### Param

**internalTexture**

the texture to encode

#### Param

**scene**

the scene hosting the texture

#### Param

**type**

type of the output texture. If not provided, use the one from internalTexture

#### Param

**samplingMode**

sampling mode to use to sample the source texture. If not provided, use the one from internalTexture

#### Param

**format**

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

**texture**

Texture to copy from

#### Param

**width**

defines the desired width

#### Param

**height**

defines the desired height

#### Param

**useBilinearMode**

defines if bilinear mode has to be used

#### Returns

the generated texture

### FromHalfFloat

> **FromHalfFloat**: (`value`) => `number`

Converts a half float to a number

Converts a 16-bit half-float bit pattern back to a 32-bit float.

#### Parameters

##### value

`number`

the half-float bit pattern, in the range 0..65535

#### Returns

`number`

the decoded float

#### Param

**value**

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

**texture**

the source texture

#### Param

**width**

the width of the result, which does not have to match the source texture width

#### Param

**height**

the height of the result, which does not have to match the source texture height

#### Param

**face**

if the texture has multiple faces, the face index to use for the source

#### Param

**lod**

if the texture has multiple LODs, the lod index to use for the source

#### Returns

the 8-bit texture data

### ToHalfFloat

> **ToHalfFloat**: (`value`) => `number`

Converts a number to half float

Converts a 32-bit float to its 16-bit half-float bit pattern.

#### Parameters

##### value

`number`

the float to convert

#### Returns

`number`

the half-float bit pattern, in the range 0..65535

#### Param

**value**

number to convert

#### Returns

converted number
