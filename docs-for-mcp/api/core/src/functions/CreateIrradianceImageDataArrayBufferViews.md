[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateIrradianceImageDataArrayBufferViews

# Function: CreateIrradianceImageDataArrayBufferViews()

> **CreateIrradianceImageDataArrayBufferViews**(`data`, `info`): `ArrayBufferView`\<`ArrayBufferLike`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L538)

Creates the ArrayBufferViews used for initializing environment texture image data.

## Parameters

### data

`ArrayBufferView`

the image data

### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

parameters that determine what views will be created for accessing the underlying buffer

## Returns

`ArrayBufferView`\<`ArrayBufferLike`\>[]

the views described by info providing access to the underlying buffer
