[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TranscodeAsync

# Function: TranscodeAsync()

> **TranscodeAsync**(`data`, `config`): `Promise`\<`TranscodeResult`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/basis.ts#L208)

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
