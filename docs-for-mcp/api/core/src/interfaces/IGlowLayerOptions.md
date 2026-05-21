[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGlowLayerOptions

# Interface: IGlowLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/glowLayer.ts#L51)

Glow layer options. This helps customizing the behaviour
of the glow layer.

## Extends

- [`IThinGlowLayerOptions`](IThinGlowLayerOptions.md)

## Properties

### alphaBlendingMode?

> `optional` **alphaBlendingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L114)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`alphaBlendingMode`](IThinGlowLayerOptions.md#alphablendingmode)

***

### blurKernelSize?

> `optional` **blurKernelSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinGlowLayer.ts#L27)

How big is the kernel of the blur texture. Default: 32

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`blurKernelSize`](IThinGlowLayerOptions.md#blurkernelsize)

***

### camera?

> `optional` **camera?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L119)

The camera attached to the layer. Default: null

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`camera`](IThinGlowLayerOptions.md#camera)

***

### excludeByDefault?

> `optional` **excludeByDefault?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinGlowLayer.ts#L40)

Exclude all meshes from the glow layer by default.
This is useful if you have dynamic meshes and you want to control them specifically and
make sure that there are no "leaking" glowing meshes.
Default: false

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`excludeByDefault`](IThinGlowLayerOptions.md#excludebydefault)

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/glowLayer.ts#L60)

Whether or not to generate a stencil buffer. Default: false

***

### ldrMerge?

> `optional` **ldrMerge?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinGlowLayer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinGlowLayer.ts#L32)

Forces the merge step to be done in ldr (clamp values > 1). Default: false

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`ldrMerge`](IThinGlowLayerOptions.md#ldrmerge)

***

### mainTextureFixedSize?

> `optional` **mainTextureFixedSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L99)

Enforces a fixed size texture to ensure resize independent blur. Default: undefined

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureFixedSize`](IThinGlowLayerOptions.md#maintexturefixedsize)

***

### mainTextureFormat?

> `optional` **mainTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L109)

The format of the main texture. Default: TEXTUREFORMAT_RGBA

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureFormat`](IThinGlowLayerOptions.md#maintextureformat)

***

### mainTextureRatio?

> `optional` **mainTextureRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L94)

Multiplication factor apply to the canvas size to compute the render target size
used to generated the glowing objects (the smaller the faster). Default: 0.5

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureRatio`](IThinGlowLayerOptions.md#maintextureratio)

***

### mainTextureSamples?

> `optional` **mainTextureSamples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/glowLayer.ts#L55)

Enable MSAA by choosing the number of samples. Default: 1

***

### mainTextureType?

> `optional` **mainTextureType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L104)

The type of the main texture. Default: TEXTURETYPE_UNSIGNED_BYTE

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`mainTextureType`](IThinGlowLayerOptions.md#maintexturetype)

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/thinEffectLayer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/thinEffectLayer.ts#L124)

The rendering group to draw the layer in. Default: -1

#### Inherited from

[`IThinGlowLayerOptions`](IThinGlowLayerOptions.md).[`renderingGroupId`](IThinGlowLayerOptions.md#renderinggroupid)
