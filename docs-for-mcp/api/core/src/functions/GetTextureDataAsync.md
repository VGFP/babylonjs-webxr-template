[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetTextureDataAsync

# Function: GetTextureDataAsync()

> **GetTextureDataAsync**(`texture`, `width?`, `height?`, `face?`, `lod?`, `forceRTT?`, `slice?`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/textureTools.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/textureTools.ts#L444)

Gets the pixel data of the specified texture, either by reading it directly
or by rendering it to an intermediate RGBA texture and retrieving the bytes from it.
This is convenient to get 8-bit RGBA values for a texture in a GPU compressed format.
When direct readback returns non-RGBA channel layouts, the result is normalized to RGBA8.

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

the source texture

### width?

`number`

the target width of the result, which does not have to match the source texture width

### height?

`number`

the target height of the result, which does not have to match the source texture height

### face?

`number` = `0`

if the texture has multiple faces, the face index to use for the source

### lod?

`number` = `0`

if the texture has multiple LODs, the lod index to use for the source

### forceRTT?

`boolean` = `false`

if true, forces the use of the RTT path for reading pixels (useful for cube maps to ensure correct orientation and gamma)

### slice?

`number` = `0`

if the texture is 3D, the depth slice index to use for the source

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

the 8-bit texture data
