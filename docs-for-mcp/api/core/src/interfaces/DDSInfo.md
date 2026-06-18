[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DDSInfo

# Interface: DDSInfo

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L96)

Direct draw surface info

## See

https://docs.microsoft.com/en-us/windows/desktop/direct3ddds/dx-graphics-dds-pguide

## Properties

### dxgiFormat

> **dxgiFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L136)

The dxgiFormat of the texture

#### See

https://docs.microsoft.com/en-us/windows/desktop/api/dxgiformat/ne-dxgiformat-dxgi_format

***

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L104)

Width of the texture

***

### isCompressed

> **isCompressed**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L131)

If the texture is a compressed format eg. FOURCC_DXT1

***

### isCube

> **isCube**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L127)

If this is a cube texture

#### See

https://docs.microsoft.com/en-us/windows/desktop/direct3ddds/dds-file-layout-for-cubic-environment-maps

***

### isFourCC

> **isFourCC**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L114)

If the textures format is a known fourCC format

#### See

https://www.fourcc.org/

***

### isLuminance

> **isLuminance**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L122)

If the texture is a lumincance format

***

### isRGB

> **isRGB**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L118)

If the texture is an RGB format eg. DXGI_FORMAT_B8G8R8X8_UNORM format

***

### mipmapCount

> **mipmapCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L109)

Number of Mipmaps for the texture

#### See

https://en.wikipedia.org/wiki/Mipmap

***

### sphericalPolynomial?

> `optional` **sphericalPolynomial?**: [`SphericalPolynomial`](../classes/SphericalPolynomial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L144)

Sphericle polynomial created for the dds texture

***

### textureType

> **textureType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L140)

Texture type eg. Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dds.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dds.pure.ts#L100)

Width of the texture
