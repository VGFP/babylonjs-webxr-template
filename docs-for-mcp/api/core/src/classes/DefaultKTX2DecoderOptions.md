[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DefaultKTX2DecoderOptions

# Class: DefaultKTX2DecoderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L18)

Class that defines the default KTX2 decoder options.

This class is useful for providing options to the KTX2 decoder to control how the source data is transcoded.

## Constructors

### Constructor

> **new DefaultKTX2DecoderOptions**(): `DefaultKTX2DecoderOptions`

#### Returns

`DefaultKTX2DecoderOptions`

## Accessors

### bypassTranscoders

#### Get Signature

> **get** **bypassTranscoders**(): `string`[] \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L121)

list of transcoders to bypass when looking for a suitable transcoder. The available transcoders are:
     UniversalTranscoder_UASTC_ASTC
     UniversalTranscoder_UASTC_BC7
     UniversalTranscoder_UASTC_RGBA_UNORM
     UniversalTranscoder_UASTC_RGBA_SRGB
     UniversalTranscoder_UASTC_R8_UNORM
     UniversalTranscoder_UASTC_RG8_UNORM
     MSCTranscoder

##### Returns

`string`[] \| `undefined`

#### Set Signature

> **set** **bypassTranscoders**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L125)

##### Parameters

###### value

`string`[] \| `undefined`

##### Returns

`void`

***

### forceR8

#### Get Signature

> **get** **forceR8**(): `boolean` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L82)

force to always use (uncompressed) R8 for transcoded format

##### Returns

`boolean` \| `undefined`

#### Set Signature

> **set** **forceR8**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L86)

##### Parameters

###### value

`boolean` \| `undefined`

##### Returns

`void`

***

### forceRG8

#### Get Signature

> **get** **forceRG8**(): `boolean` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L98)

force to always use (uncompressed) RG8 for transcoded format

##### Returns

`boolean` \| `undefined`

#### Set Signature

> **set** **forceRG8**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L102)

##### Parameters

###### value

`boolean` \| `undefined`

##### Returns

`void`

***

### forceRGBA

#### Get Signature

> **get** **forceRGBA**(): `boolean` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L66)

force to always use (uncompressed) RGBA for transcoded format

##### Returns

`boolean` \| `undefined`

#### Set Signature

> **set** **forceRGBA**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L70)

##### Parameters

###### value

`boolean` \| `undefined`

##### Returns

`void`

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L24)

Gets the dirty flag

##### Returns

`boolean`

***

### useRGBAIfASTCBC7NotAvailableWhenUASTC

#### Get Signature

> **get** **useRGBAIfASTCBC7NotAvailableWhenUASTC**(): `boolean` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L32)

force a (uncompressed) RGBA transcoded format if transcoding a UASTC source format and ASTC + BC7 are not available as a compressed transcoded format

##### Returns

`boolean` \| `undefined`

#### Set Signature

> **set** **useRGBAIfASTCBC7NotAvailableWhenUASTC**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L36)

##### Parameters

###### value

`boolean` \| `undefined`

##### Returns

`void`

***

### useRGBAIfOnlyBC1BC3AvailableWhenUASTC

#### Get Signature

> **get** **useRGBAIfOnlyBC1BC3AvailableWhenUASTC**(): `boolean` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L50)

force a (uncompressed) RGBA transcoded format if transcoding a UASTC source format and only BC1 or BC3 are available as a compressed transcoded format.
This property is true by default to favor speed over memory, because currently transcoding from UASTC to BC1/3 is slow because the transcoder transcodes
to uncompressed and then recompresses the texture

##### Returns

`boolean` \| `undefined`

#### Set Signature

> **set** **useRGBAIfOnlyBC1BC3AvailableWhenUASTC**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L54)

##### Parameters

###### value

`boolean` \| `undefined`

##### Returns

`void`
