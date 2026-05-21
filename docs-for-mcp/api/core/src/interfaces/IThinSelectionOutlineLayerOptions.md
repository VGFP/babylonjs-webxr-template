[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IThinSelectionOutlineLayerOptions

# Interface: IThinSelectionOutlineLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts#L25)

Selection outline layer options. This helps customizing the behaviour
of the selection outline layer.

## Extends

- [`IThinEffectLayerOptions`](IThinEffectLayerOptions.md)

## Extended by

- [`ISelectionOutlineLayerOptions`](ISelectionOutlineLayerOptions.md)

## Properties

### alphaBlendingMode?

> `optional` **alphaBlendingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L114)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`alphaBlendingMode`](IThinEffectLayerOptions.md#alphablendingmode)

***

### camera?

> `optional` **camera?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L119)

The camera attached to the layer. Default: null

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`camera`](IThinEffectLayerOptions.md#camera)

***

### forceGLSL?

> `optional` **forceGLSL?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts#L29)

Use the GLSL code generation for the shader (even on WebGPU). Default is false

***

### mainTextureFixedSize?

> `optional` **mainTextureFixedSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L99)

Enforces a fixed size texture to ensure resize independent blur. Default: undefined

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureFixedSize`](IThinEffectLayerOptions.md#maintexturefixedsize)

***

### mainTextureFormat?

> `optional` **mainTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L109)

The format of the main texture. Default: TEXTUREFORMAT_RGBA

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureFormat`](IThinEffectLayerOptions.md#maintextureformat)

***

### mainTextureRatio?

> `optional` **mainTextureRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L94)

Multiplication factor apply to the canvas size to compute the render target size
used to generated the glowing objects (the smaller the faster). Default: 0.5

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureRatio`](IThinEffectLayerOptions.md#maintextureratio)

***

### mainTextureType?

> `optional` **mainTextureType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L104)

The type of the main texture. Default: TEXTURETYPE_UNSIGNED_BYTE

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`mainTextureType`](IThinEffectLayerOptions.md#maintexturetype)

***

### outlineMethod?

> `optional` **outlineMethod?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts#L41)

Outline method to use (default: Constants.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL)

#### See

[Constants.OUTLINELAYER\_SAMPLING\_TRIDIRECTIONAL](../classes/Constants.md#outlinelayer_sampling_tridirectional)

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L124)

The rendering group to draw the layer in. Default: -1

#### Inherited from

[`IThinEffectLayerOptions`](IThinEffectLayerOptions.md).[`renderingGroupId`](IThinEffectLayerOptions.md#renderinggroupid)

***

### storeCameraSpaceZ?

> `optional` **storeCameraSpaceZ?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinSelectionOutlineLayer.ts#L34)

Specifies whether the depth stored is the Z coordinate in camera space.
