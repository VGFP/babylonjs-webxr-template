[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IThinHighlightLayerOptions

# Interface: IThinHighlightLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinHighlightLayer.ts#L31)

Highlight layer options. This helps customizing the behaviour
of the highlight layer.

## Extends

- [`IThinEffectLayerOptions`](IThinEffectLayerOptions.md)

## Extended by

- [`IHighlightLayerOptions`](IHighlightLayerOptions.md)

## Properties

### alphaBlendingMode?

> `optional` **alphaBlendingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L115)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`alphaBlendingMode`](IThinEffectLayerOptions.md#alphablendingmode)

***

### blurHorizontalSize?

> `optional` **blurHorizontalSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinHighlightLayer.ts#L46)

How big in texel of the blur texture is the horizontal blur. Default: 1

***

### blurTextureSizeRatio?

> `optional` **blurTextureSizeRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinHighlightLayer.ts#L36)

Multiplication factor apply to the main texture size in the first step of the blur to reduce the size
of the picture to blur (the smaller the faster). Default: 0.5

***

### blurVerticalSize?

> `optional` **blurVerticalSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinHighlightLayer.ts#L41)

How big in texel of the blur texture is the vertical blur. Default: 1

***

### camera?

> `optional` **camera?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinEffectLayer.ts#L120)

The camera attached to the layer. Default: null

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`camera`](IThinEffectLayerOptions.md#camera)

***

### forceGLSL?

> `optional` **forceGLSL?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinHighlightLayer.ts#L56)

Use the GLSL code generation for the shader (even on WebGPU). Default is false

***

### isStroke?

> `optional` **isStroke?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/thinHighlightLayer.ts#L51)

Should we display highlight as a solid stroke? Default: false

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
