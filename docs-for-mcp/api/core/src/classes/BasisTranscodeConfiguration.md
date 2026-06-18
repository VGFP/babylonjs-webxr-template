[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BasisTranscodeConfiguration

# Class: BasisTranscodeConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/basis.pure.ts#L46)

Configuration options for the Basis transcoder

## Constructors

### Constructor

> **new BasisTranscodeConfiguration**(): `BasisTranscodeConfiguration`

#### Returns

`BasisTranscodeConfiguration`

## Properties

### loadMipmapLevels?

> `optional` **loadMipmapLevels?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/basis.pure.ts#L79)

If mipmap levels should be loaded for transcoded images (Default: true)

***

### loadSingleImage?

> `optional` **loadSingleImage?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/basis.pure.ts#L83)

Index of a single image to load (Default: all images)

***

### supportedCompressionFormats?

> `optional` **supportedCompressionFormats?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/basis.pure.ts#L50)

Supported compression formats used to determine the supported output format of the transcoder

#### astc?

> `optional` **astc?**: `boolean`

astc compression format

#### bc7?

> `optional` **bc7?**: `boolean`

bc7 compression format

#### etc1?

> `optional` **etc1?**: `boolean`

etc1 compression format

#### etc2?

> `optional` **etc2?**: `boolean`

etc2 compression format

#### pvrtc?

> `optional` **pvrtc?**: `boolean`

pvrtc compression format

#### s3tc?

> `optional` **s3tc?**: `boolean`

s3tc compression format
