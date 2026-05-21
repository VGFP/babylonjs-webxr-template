[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IHighlightLayerOptions

# Interface: IHighlightLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L112)

Highlight layer options. This helps customizing the behaviour
of the highlight layer.

## Extends

- [`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md)

## Properties

### alphaBlendingMode?

> `optional` **alphaBlendingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L114)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`alphaBlendingMode`](IThinHighlightLayerOptions.md#alphablendingmode)

***

### blurHorizontalSize?

> `optional` **blurHorizontalSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinHighlightLayer.ts#L46)

How big in texel of the blur texture is the horizontal blur. Default: 1

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`blurHorizontalSize`](IThinHighlightLayerOptions.md#blurhorizontalsize)

***

### blurTextureSizeRatio?

> `optional` **blurTextureSizeRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinHighlightLayer.ts#L36)

Multiplication factor apply to the main texture size in the first step of the blur to reduce the size
of the picture to blur (the smaller the faster). Default: 0.5

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`blurTextureSizeRatio`](IThinHighlightLayerOptions.md#blurtexturesizeratio)

***

### blurVerticalSize?

> `optional` **blurVerticalSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinHighlightLayer.ts#L41)

How big in texel of the blur texture is the vertical blur. Default: 1

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`blurVerticalSize`](IThinHighlightLayerOptions.md#blurverticalsize)

***

### camera?

> `optional` **camera?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L119)

The camera attached to the layer. Default: null

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`camera`](IThinHighlightLayerOptions.md#camera)

***

### forceGLSL?

> `optional` **forceGLSL?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinHighlightLayer.ts#L56)

Use the GLSL code generation for the shader (even on WebGPU). Default is false

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`forceGLSL`](IThinHighlightLayerOptions.md#forceglsl)

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L116)

Whether or not to generate a stencil buffer. Default: false

***

### isStroke?

> `optional` **isStroke?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinHighlightLayer.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinHighlightLayer.ts#L51)

Should we display highlight as a solid stroke? Default: false

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`isStroke`](IThinHighlightLayerOptions.md#isstroke)

***

### mainTextureFixedSize?

> `optional` **mainTextureFixedSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L99)

Enforces a fixed size texture to ensure resize independent blur. Default: undefined

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`mainTextureFixedSize`](IThinHighlightLayerOptions.md#maintexturefixedsize)

***

### mainTextureFormat?

> `optional` **mainTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L109)

The format of the main texture. Default: TEXTUREFORMAT_RGBA

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`mainTextureFormat`](IThinHighlightLayerOptions.md#maintextureformat)

***

### mainTextureRatio?

> `optional` **mainTextureRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L94)

Multiplication factor apply to the canvas size to compute the render target size
used to generated the glowing objects (the smaller the faster). Default: 0.5

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`mainTextureRatio`](IThinHighlightLayerOptions.md#maintextureratio)

***

### mainTextureType?

> `optional` **mainTextureType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L104)

The type of the main texture. Default: TEXTURETYPE_UNSIGNED_BYTE

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`mainTextureType`](IThinHighlightLayerOptions.md#maintexturetype)

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L124)

The rendering group to draw the layer in. Default: -1

#### Inherited from

[`IThinHighlightLayerOptions`](IThinHighlightLayerOptions.md).[`renderingGroupId`](IThinHighlightLayerOptions.md#renderinggroupid)
