[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IKTX2DecoderOptions

# Interface: IKTX2DecoderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L224)

Options passed to the KTX2 decode function

## Properties

### bypassTranscoders?

> `optional` **bypassTranscoders?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L248)

list of transcoders to bypass when looking for a suitable transcoder. The available transcoders are:
     UniversalTranscoder_UASTC_ASTC
     UniversalTranscoder_UASTC_BC7
     UniversalTranscoder_UASTC_RGBA_UNORM
     UniversalTranscoder_UASTC_RGBA_SRGB
     UniversalTranscoder_UASTC_R8_UNORM
     UniversalTranscoder_UASTC_RG8_UNORM
     MSCTranscoder

***

### forceR8?

> `optional` **forceR8?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L232)

force to always use (uncompressed) R8 for transcoded format

***

### forceRG8?

> `optional` **forceRG8?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L236)

force to always use (uncompressed) RG8 for transcoded format

***

### forceRGBA?

> `optional` **forceRGBA?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L229)

force to always use (uncompressed) RGBA for transcoded format

***

### transcodeFormatDecisionTree?

> `optional` **transcodeFormatDecisionTree?**: [`IDecisionTree`](IDecisionTree.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L255)

Custom decision tree to apply after the default decision tree has selected a transcoding format.
Allows the user to override the default decision tree selection.
The decision tree can use the INode.transcodeFormat property to base its decision on the transcoding format selected by the default decision tree.

***

### useRGBAIfASTCBC7NotAvailableWhenUASTC?

> `optional` **useRGBAIfASTCBC7NotAvailableWhenUASTC?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L226)

use RGBA format if ASTC and BC7 are not available as transcoded format
