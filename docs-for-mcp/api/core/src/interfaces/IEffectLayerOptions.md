[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEffectLayerOptions

# Interface: IEffectLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L32)

Effect layer options. This helps customizing the behaviour
of the effect layer.

## Properties

### alphaBlendingMode

> **alphaBlendingMode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L47)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

***

### camera

> **camera**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L52)

The camera attached to the layer. Default: null

***

### generateStencilBuffer

> **generateStencilBuffer**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L72)

Whether or not to generate a stencil buffer. Default: false

***

### mainTextureFixedSize?

> `optional` **mainTextureFixedSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L42)

Enforces a fixed size texture to ensure effect stability across devices. Default: undefined

***

### mainTextureFormat

> **mainTextureFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L67)

The format of the main texture. Default: TEXTUREFORMAT_RGBA

***

### mainTextureRatio

> **mainTextureRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L37)

Multiplication factor apply to the canvas size to compute the render target size
used to generated the objects (the smaller the faster). Default: 0.5

***

### mainTextureType

> **mainTextureType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L62)

The type of the main texture. Default: TEXTURETYPE_UNSIGNED_BYTE

***

### renderingGroupId

> **renderingGroupId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L57)

The rendering group to draw the layer in. Default: -1
