[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IThinGlowLayerOptions

# Interface: IThinGlowLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinGlowLayer.ts#L23)

Glow layer options. This helps customizing the behaviour
of the glow layer.

## Extends

- [`IThinEffectLayerOptions`](IThinEffectLayerOptions.md)

## Extended by

- [`IGlowLayerOptions`](IGlowLayerOptions.md)

## Properties

### alphaBlendingMode?

> `optional` **alphaBlendingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L115)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`alphaBlendingMode`](IThinEffectLayerOptions.md#alphablendingmode)

***

### blurKernelSize?

> `optional` **blurKernelSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinGlowLayer.ts#L27)

How big is the kernel of the blur texture. Default: 32

***

### camera?

> `optional` **camera?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L120)

The camera attached to the layer. Default: null

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`camera`](IThinEffectLayerOptions.md#camera)

***

### excludeByDefault?

> `optional` **excludeByDefault?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinGlowLayer.ts#L40)

Exclude all meshes from the glow layer by default.
This is useful if you have dynamic meshes and you want to control them specifically and
make sure that there are no "leaking" glowing meshes.
Default: false

***

### ldrMerge?

> `optional` **ldrMerge?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinGlowLayer.ts#L32)

Forces the merge step to be done in ldr (clamp values > 1). Default: false

***

### mainTextureFixedSize?

> `optional` **mainTextureFixedSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L100)

Enforces a fixed size texture to ensure resize independent blur. Default: undefined

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureFixedSize`](IThinEffectLayerOptions.md#maintexturefixedsize)

***

### mainTextureFormat?

> `optional` **mainTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L110)

The format of the main texture. Default: TEXTUREFORMAT_RGBA

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureFormat`](IThinEffectLayerOptions.md#maintextureformat)

***

### mainTextureRatio?

> `optional` **mainTextureRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L95)

Multiplication factor apply to the canvas size to compute the render target size
used to generated the glowing objects (the smaller the faster). Default: 0.5

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureRatio`](IThinEffectLayerOptions.md#maintextureratio)

***

### mainTextureType?

> `optional` **mainTextureType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L105)

The type of the main texture. Default: TEXTURETYPE_UNSIGNED_BYTE

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureType`](IThinEffectLayerOptions.md#maintexturetype)

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L125)

The rendering group to draw the layer in. Default: -1

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`renderingGroupId`](IThinEffectLayerOptions.md#renderinggroupid)
