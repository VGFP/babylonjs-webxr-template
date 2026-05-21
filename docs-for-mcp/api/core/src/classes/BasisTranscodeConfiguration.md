[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BasisTranscodeConfiguration

# Class: BasisTranscodeConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/basis.ts#L42)

Configuration options for the Basis transcoder

## Constructors

### Constructor

> **new BasisTranscodeConfiguration**(): `BasisTranscodeConfiguration`

#### Returns

`BasisTranscodeConfiguration`

## Properties

### loadMipmapLevels?

> `optional` **loadMipmapLevels?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/basis.ts#L75)

If mipmap levels should be loaded for transcoded images (Default: true)

***

### loadSingleImage?

> `optional` **loadSingleImage?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/basis.ts#L79)

Index of a single image to load (Default: all images)

***

### supportedCompressionFormats?

> `optional` **supportedCompressionFormats?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/basis.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/basis.ts#L46)

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
