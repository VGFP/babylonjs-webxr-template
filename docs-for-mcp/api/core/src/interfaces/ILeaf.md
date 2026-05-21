[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ILeaf

# Interface: ILeaf

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L43)

Leaf node of a decision tree
It defines the transcoding format to use to transcode the texture as well as the corresponding format to use at the engine level when creating the texture

## Properties

### engineFormat

> **engineFormat**: [`EngineFormat`](../enumerations/EngineFormat.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L52)

The format to use when creating the texture at the engine level after it has been transcoded to transcodeFormat

***

### roundToMultiple4?

> `optional` **roundToMultiple4?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L57)

Whether the texture must be rounded to a multiple of 4 (should normally be the case for all compressed formats). Default: true

***

### transcodeFormat

> **transcodeFormat**: [`TranscodeTarget`](../enumerations/TranscodeTarget.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L47)

The format to transcode to
