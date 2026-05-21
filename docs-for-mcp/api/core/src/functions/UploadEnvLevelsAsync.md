[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UploadEnvLevelsAsync

# Function: UploadEnvLevelsAsync()

> **UploadEnvLevelsAsync**(`texture`, `data`, `info`): `Promise`\<`void`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L565)

Uploads the texture info contained in the env file to the GPU.

## Parameters

### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

### data

`ArrayBufferView`

defines the data to load

### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

defines the texture info retrieved through the GetEnvInfo method

## Returns

`Promise`\<`void`[]\>

a promise
