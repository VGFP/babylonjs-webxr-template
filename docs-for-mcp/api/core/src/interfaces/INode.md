[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INode

# Interface: INode

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L66)

Regular node of a decision tree

Each property (except for "yes" and "no"), if not empty, will be checked in order to determine the next node to select.
If all checks are successful, the "yes" node will be selected, else the "no" node will be selected.

## Properties

### alpha?

> `optional` **alpha?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L86)

Checks if alpha is present in the texture

***

### cap?

> `optional` **cap?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L76)

The name of the capability to check. Can be one of the following:
     astc
     bptc
     s3tc
     pvrtc
     etc2
     etc1

***

### needsPowerOfTwo?

> `optional` **needsPowerOfTwo?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L96)

Checks that the texture is a power of two

***

### no?

> `optional` **no?**: [`ILeaf`](ILeaf.md) \| `INode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L106)

The node to select if at least one check is not successful

***

### option?

> `optional` **option?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L81)

The name of the option to check from the options object passed to the KTX2 decode function. [IKTX2DecoderOptions](IKTX2DecoderOptions.md)

***

### transcodeFormat?

> `optional` **transcodeFormat?**: [`TranscodeTarget`](../enumerations/TranscodeTarget.md) \| [`TranscodeTarget`](../enumerations/TranscodeTarget.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L91)

Checks the currently selected transcoding format.

***

### yes?

> `optional` **yes?**: [`ILeaf`](ILeaf.md) \| `INode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L101)

The node to select if all checks are successful
