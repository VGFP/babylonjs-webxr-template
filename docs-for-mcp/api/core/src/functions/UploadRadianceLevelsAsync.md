[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UploadRadianceLevelsAsync

# Function: UploadRadianceLevelsAsync()

> **UploadRadianceLevelsAsync**(`texture`, `imageData`, `imageType?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:667](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L667)

Uploads the levels of image data to the GPU.

## Parameters

### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

### imageData

`ArrayBufferView`\<`ArrayBufferLike`\>[][]

defines the array buffer views of image data [mipmap][face]

### imageType?

`string` = `DefaultEnvironmentTextureImageType`

the mime type of the image data

## Returns

`Promise`\<`void`\>

a promise
