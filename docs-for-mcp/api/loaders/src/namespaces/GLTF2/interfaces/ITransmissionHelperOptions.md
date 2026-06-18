[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / ITransmissionHelperOptions

# Interface: ITransmissionHelperOptions

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L39)

Options for the TransmissionHelper.

## Properties

### clearColor?

> `optional` **clearColor?**: [`Color4`](../../../../../core/src/classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L74)

Clear color of the opaque texture. If not provided, use the scene clear color (which will be converted to linear space).
If provided, should be in linear space

***

### generateMipmaps

> **generateMipmaps**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L68)

Defines if the mipmaps for the refraction render target texture must be generated (default: true)

***

### lodGenerationOffset

> **lodGenerationOffset**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L58)

Offset to apply when selecting the LOD level to sample the refraction texture (default: -4)

***

### lodGenerationScale

> **lodGenerationScale**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L53)

Scale to apply when selecting the LOD level to sample the refraction texture (default: 1)

***

### renderSize

> **renderSize**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L43)

The size of the render buffers (default: 1024)

***

### renderTargetTextureType

> **renderTargetTextureType**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L63)

Type of the refraction render target texture (default: TEXTURETYPE_HALF_FLOAT)

***

### samples

> **samples**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L48)

The number of samples to use when generating the render target texture for opaque meshes (default: 4)
