[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UploadIrradianceLevelsAsync

# Function: UploadIrradianceLevelsAsync()

> **UploadIrradianceLevelsAsync**(`mainTexture`, `imageData`, `size`, `imageType?`, `dominantDirection?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L690)

Uploads the levels of image data to the GPU.

## Parameters

### mainTexture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

### imageData

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the array buffer views of image data [mipmap][face]

### size

`number`

defines the size of the texture faces

### imageType?

`string` = `DefaultEnvironmentTextureImageType`

the mime type of the image data

### dominantDirection?

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\> = `null`

the dominant direction of light in the environment texture, if available

## Returns

`Promise`\<`void`\>

a promise
