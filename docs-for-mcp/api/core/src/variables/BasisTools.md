[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BasisTools

# Variable: BasisTools

> `const` **BasisTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/basis.ts#L334)

Used to load .Basis files
See https://github.com/BinomialLLC/basis_universal/tree/master/webgl

## Type Declaration

### GetInternalFormatFromBasisFormat

> **GetInternalFormatFromBasisFormat**: (`basisFormat`, `engine`) => `number`

Get the internal format to be passed to texImage2D corresponding to the .basis format value

Get the internal format to be passed to texImage2D corresponding to the .basis format value

#### Parameters

##### basisFormat

`number`

format chosen from GetSupportedTranscodeFormat

##### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

#### Returns

`number`

internal format corresponding to the Basis format

#### Param

format chosen from GetSupportedTranscodeFormat

#### Returns

internal format corresponding to the Basis format

### JSModuleURL

> **JSModuleURL**: `string` = `BasisToolsOptions.JSModuleURL`

URL to use when loading the basis transcoder

### LoadTextureFromTranscodeResult

> **LoadTextureFromTranscodeResult**: (`texture`, `transcodeResult`) => `void`

Loads a texture from the transcode result

Loads a texture from the transcode result

#### Parameters

##### texture

[`InternalTexture`](../classes/InternalTexture.md)

texture load to

##### transcodeResult

`TranscodeResult`

the result of transcoding the basis file to load from

#### Returns

`void`

#### Param

texture load to

#### Param

the result of transcoding the basis file to load from

### TranscodeAsync

> **TranscodeAsync**: (`data`, `config`) => `Promise`\<`TranscodeResult`\>

Transcodes a loaded image file to compressed pixel data

Transcodes a loaded image file to compressed pixel data

#### Parameters

##### data

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

image data to transcode

##### config

[`BasisTranscodeConfiguration`](../classes/BasisTranscodeConfiguration.md)

configuration options for the transcoding

#### Returns

`Promise`\<`TranscodeResult`\>

a promise resulting in the transcoded image

#### Param

image data to transcode

#### Param

configuration options for the transcoding

#### Returns

a promise resulting in the transcoded image

### WasmModuleURL

> **WasmModuleURL**: `string` = `BasisToolsOptions.WasmModuleURL`

URL to use when loading the wasm module for the transcoder
