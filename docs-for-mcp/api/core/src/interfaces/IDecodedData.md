[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IDecodedData

# Interface: IDecodedData

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L122)

Result of the KTX2 decode function

## Properties

### errors?

> `optional` **errors?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L163)

The errors (if any) encountered during the decoding process

***

### hasAlpha

> **hasAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L153)

Whether the texture has an alpha channel or not

***

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L131)

Height of the texture

***

### isInGammaSpace

> **isInGammaSpace**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L148)

Whether the texture data is in gamma space or not

***

### mipmaps

> **mipmaps**: [`IMipmap`](IMipmap.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L143)

List of mipmap levels.
The first element is the base level, the last element is the smallest mipmap level (if more than one mipmap level is present)

***

### transcodedFormat

> **transcodedFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L137)

The format to use when creating the texture at the engine level
This corresponds to the engineFormat property of the leaf node of the decision tree

***

### transcoderName

> **transcoderName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L158)

The name of the transcoder used to transcode the texture

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L126)

Width of the texture
