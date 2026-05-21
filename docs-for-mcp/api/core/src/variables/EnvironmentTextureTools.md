[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EnvironmentTextureTools

# Variable: EnvironmentTextureTools

> `const` **EnvironmentTextureTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:1030](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L1030)

Sets of helpers addressing the serialization and deserialization of environment texture
stored in a BabylonJS env file.
Those files are usually stored as .env files.

## Type Declaration

### CreateEnvTextureAsync

> **CreateEnvTextureAsync**: (`texture`, `options`) => `Promise`\<`ArrayBuffer`\>

Creates an environment texture from a loaded cube texture.

Creates an environment texture from a loaded cube texture.

#### Parameters

##### texture

[`BaseTexture`](../classes/BaseTexture.md)

defines the cube texture to convert in env file

##### options?

[`CreateEnvTextureOptions`](../interfaces/CreateEnvTextureOptions.md) = `{}`

options for the conversion process

#### Returns

`Promise`\<`ArrayBuffer`\>

a promise containing the environment data if successful.

#### Param

defines the cube texture to convert in env file

#### Param

options for the conversion process

#### Param

the mime type for the encoded images, with support for "image/png" (default) and "image/webp"

#### Param

the image quality of encoded WebP images.

#### Returns

a promise containing the environment data if successful.

### CreateIrradianceImageDataArrayBufferViews

> **CreateIrradianceImageDataArrayBufferViews**: (`data`, `info`) => `ArrayBufferView`\<`ArrayBufferLike`\>[]

Creates the ArrayBufferViews used for initializing environment texture image data.

Creates the ArrayBufferViews used for initializing environment texture image data.

#### Parameters

##### data

`ArrayBufferView`

the image data

##### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

parameters that determine what views will be created for accessing the underlying buffer

#### Returns

`ArrayBufferView`\<`ArrayBufferLike`\>[]

the views described by info providing access to the underlying buffer

#### Param

the image data

#### Param

parameters that determine what views will be created for accessing the underlying buffer

#### Returns

the views described by info providing access to the underlying buffer

### CreateRadianceImageDataArrayBufferViews

> **CreateRadianceImageDataArrayBufferViews**: (`data`, `info`) => `ArrayBufferView`\<`ArrayBufferLike`\>[][]

Creates the ArrayBufferViews used for initializing environment texture image data.

Creates the ArrayBufferViews used for initializing environment texture image data.

#### Parameters

##### data

`ArrayBufferView`

the image data

##### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

parameters that determine what views will be created for accessing the underlying buffer

#### Returns

`ArrayBufferView`\<`ArrayBufferLike`\>[][]

the views described by info providing access to the underlying buffer

#### Param

the image data

#### Param

parameters that determine what views will be created for accessing the underlying buffer

#### Returns

the views described by info providing access to the underlying buffer

### GetEnvInfo

> **GetEnvInfo**: (`data`) => [`Nullable`](../type-aliases/Nullable.md)\<`EnvironmentTextureInfoV2`\>

Gets the environment info from an env file.

Gets the environment info from an env file.

#### Parameters

##### data

`ArrayBufferView`

The array buffer containing the .env bytes.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`EnvironmentTextureInfoV2`\>

the environment file info (the json header) if successfully parsed, normalized to the latest supported version.

#### Param

The array buffer containing the .env bytes.

#### Returns

the environment file info (the json header) if successfully parsed, normalized to the latest supported version.

### UploadEnvLevelsAsync

> **UploadEnvLevelsAsync**: (`texture`, `data`, `info`) => `Promise`\<`void`[]\>

Uploads the texture info contained in the env file to the GPU.

Uploads the texture info contained in the env file to the GPU.

#### Parameters

##### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

##### data

`ArrayBufferView`

defines the data to load

##### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

defines the texture info retrieved through the GetEnvInfo method

#### Returns

`Promise`\<`void`[]\>

a promise

#### Param

defines the internal texture to upload to

#### Param

defines the data to load

#### Param

defines the texture info retrieved through the GetEnvInfo method

#### Returns

a promise

### UploadEnvSpherical

> **UploadEnvSpherical**: (`texture`, `info`) => `void`

Uploads spherical polynomials information to the texture.

Uploads spherical polynomials information to the texture.

#### Parameters

##### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the texture we are trying to upload the information to

##### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

defines the environment texture info retrieved through the GetEnvInfo method

#### Returns

`void`

#### Param

defines the texture we are trying to upload the information to

#### Param

defines the environment texture info retrieved through the GetEnvInfo method

### UploadIrradianceLevelsAsync

> **UploadIrradianceLevelsAsync**: (`mainTexture`, `imageData`, `size`, `imageType`, `dominantDirection`) => `Promise`\<`void`\>

Uploads the levels of image data to the GPU.

Uploads the levels of image data to the GPU.

#### Parameters

##### mainTexture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

##### imageData

`ArrayBufferView`\<`ArrayBufferLike`\>[]

defines the array buffer views of image data [mipmap][face]

##### size

`number`

defines the size of the texture faces

##### imageType?

`string` = `DefaultEnvironmentTextureImageType`

the mime type of the image data

##### dominantDirection?

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\> = `null`

the dominant direction of light in the environment texture, if available

#### Returns

`Promise`\<`void`\>

a promise

#### Param

defines the internal texture to upload to

#### Param

defines the array buffer views of image data [mipmap][face]

#### Param

the mime type of the image data

#### Param

the dominant direction of light in the environment texture, if available

#### Returns

a promise

### UploadRadianceLevelsAsync

> **UploadRadianceLevelsAsync**: (`texture`, `imageData`, `imageType`) => `Promise`\<`void`\>

Uploads the levels of image data to the GPU.

Uploads the levels of image data to the GPU.

#### Parameters

##### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

##### imageData

`ArrayBufferView`\<`ArrayBufferLike`\>[][]

defines the array buffer views of image data [mipmap][face]

##### imageType?

`string` = `DefaultEnvironmentTextureImageType`

the mime type of the image data

#### Returns

`Promise`\<`void`\>

a promise

#### Param

defines the internal texture to upload to

#### Param

defines the array buffer views of image data [mipmap][face]

#### Param

the mime type of the image data

#### Returns

a promise
