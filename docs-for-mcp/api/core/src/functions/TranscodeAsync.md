[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TranscodeAsync

# Function: TranscodeAsync()

> **TranscodeAsync**(`data`, `config`): `Promise`\<`TranscodeResult`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/basis.pure.ts#L212)

Transcodes a loaded image file to compressed pixel data

## Parameters

### data

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

image data to transcode

### config

[`BasisTranscodeConfiguration`](../classes/BasisTranscodeConfiguration.md)

configuration options for the transcoding

## Returns

`Promise`\<`TranscodeResult`\>

a promise resulting in the transcoded image
