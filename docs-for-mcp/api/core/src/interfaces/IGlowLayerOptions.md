[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGlowLayerOptions

# Interface: IGlowLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L29)

Glow layer options. This helps customizing the behaviour
of the glow layer.

## Extends

- [`IThinGlowLayerOptions`](IThinGlowLayerOptions.md)

## Properties

### alphaBlendingMode?

> `optional` **alphaBlendingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L115)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`alphaBlendingMode`](IThinGlowLayerOptions.md#alphablendingmode)

***

### blurKernelSize?

> `optional` **blurKernelSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinGlowLayer.ts#L27)

How big is the kernel of the blur texture. Default: 32

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`blurKernelSize`](IThinGlowLayerOptions.md#blurkernelsize)

***

### camera?

> `optional` **camera?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L120)

The camera attached to the layer. Default: null

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`camera`](IThinGlowLayerOptions.md#camera)

***

### excludeByDefault?

> `optional` **excludeByDefault?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinGlowLayer.ts#L40)

Exclude all meshes from the glow layer by default.
This is useful if you have dynamic meshes and you want to control them specifically and
make sure that there are no "leaking" glowing meshes.
Default: false

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`excludeByDefault`](IThinGlowLayerOptions.md#excludebydefault)

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L38)

Whether or not to generate a stencil buffer. Default: false

***

### ldrMerge?

> `optional` **ldrMerge?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinGlowLayer.ts#L32)

Forces the merge step to be done in ldr (clamp values > 1). Default: false

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`ldrMerge`](IThinGlowLayerOptions.md#ldrmerge)

***

### mainTextureFixedSize?

> `optional` **mainTextureFixedSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L100)

Enforces a fixed size texture to ensure resize independent blur. Default: undefined

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureFixedSize`](IThinGlowLayerOptions.md#maintexturefixedsize)

***

### mainTextureFormat?

> `optional` **mainTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L110)

The format of the main texture. Default: TEXTUREFORMAT_RGBA

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureFormat`](IThinGlowLayerOptions.md#maintextureformat)

***

### mainTextureRatio?

> `optional` **mainTextureRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L95)

Multiplication factor apply to the canvas size to compute the render target size
used to generated the glowing objects (the smaller the faster). Default: 0.5

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureRatio`](IThinGlowLayerOptions.md#maintextureratio)

***

### mainTextureSamples?

> `optional` **mainTextureSamples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L33)

Enable MSAA by choosing the number of samples. Default: 1

***

### mainTextureType?

> `optional` **mainTextureType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L105)

The type of the main texture. Default: TEXTURETYPE_UNSIGNED_BYTE

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureType`](IThinGlowLayerOptions.md#maintexturetype)

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L125)

The rendering group to draw the layer in. Default: -1

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`renderingGroupId`](IThinGlowLayerOptions.md#renderinggroupid)
