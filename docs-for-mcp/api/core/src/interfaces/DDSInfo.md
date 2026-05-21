[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DDSInfo

# Interface: DDSInfo

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L96)

Direct draw surface info

## See

https://docs.microsoft.com/en-us/windows/desktop/direct3ddds/dx-graphics-dds-pguide

## Properties

### dxgiFormat

> **dxgiFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L136)

The dxgiFormat of the texture

#### See

https://docs.microsoft.com/en-us/windows/desktop/api/dxgiformat/ne-dxgiformat-dxgi_format

***

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L104)

Width of the texture

***

### isCompressed

> **isCompressed**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L131)

If the texture is a compressed format eg. FOURCC_DXT1

***

### isCube

> **isCube**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L127)

If this is a cube texture

#### See

https://docs.microsoft.com/en-us/windows/desktop/direct3ddds/dds-file-layout-for-cubic-environment-maps

***

### isFourCC

> **isFourCC**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L114)

If the textures format is a known fourCC format

#### See

https://www.fourcc.org/

***

### isLuminance

> **isLuminance**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L122)

If the texture is a lumincance format

***

### isRGB

> **isRGB**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L118)

If the texture is an RGB format eg. DXGI_FORMAT_B8G8R8X8_UNORM format

***

### mipmapCount

> **mipmapCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L109)

Number of Mipmaps for the texture

#### See

https://en.wikipedia.org/wiki/Mipmap

***

### sphericalPolynomial?

> `optional` **sphericalPolynomial?**: [`SphericalPolynomial`](../classes/SphericalPolynomial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L144)

Sphericle polynomial created for the dds texture

***

### textureType

> **textureType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L140)

Texture type eg. Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dds.ts#L100)

Width of the texture
