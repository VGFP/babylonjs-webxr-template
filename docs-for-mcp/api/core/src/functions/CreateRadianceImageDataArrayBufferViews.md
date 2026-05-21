[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateRadianceImageDataArrayBufferViews

# Function: CreateRadianceImageDataArrayBufferViews()

> **CreateRadianceImageDataArrayBufferViews**(`data`, `info`): `ArrayBufferView`\<`ArrayBufferLike`\>[][]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:507](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L507)

Creates the ArrayBufferViews used for initializing environment texture image data.

## Parameters

### data

`ArrayBufferView`

the image data

### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

parameters that determine what views will be created for accessing the underlying buffer

## Returns

`ArrayBufferView`\<`ArrayBufferLike`\>[][]

the views described by info providing access to the underlying buffer
