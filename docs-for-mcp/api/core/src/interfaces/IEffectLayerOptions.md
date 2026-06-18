[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEffectLayerOptions

# Interface: IEffectLayerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L33)

Effect layer options. This helps customizing the behaviour
of the effect layer.

## Properties

### alphaBlendingMode

> **alphaBlendingMode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L48)

Alpha blending mode used to apply the blur. Default depends of the implementation. Default: ALPHA_COMBINE

***

### camera

> **camera**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L53)

The camera attached to the layer. Default: null

***

### generateStencilBuffer

> **generateStencilBuffer**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L73)

Whether or not to generate a stencil buffer. Default: false

***

### mainTextureFixedSize?

> `optional` **mainTextureFixedSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L43)

Enforces a fixed size texture to ensure effect stability across devices. Default: undefined

***

### mainTextureFormat

> **mainTextureFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L68)

The format of the main texture. Default: TEXTUREFORMAT_RGBA

***

### mainTextureRatio

> **mainTextureRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L38)

Multiplication factor apply to the canvas size to compute the render target size
used to generated the objects (the smaller the faster). Default: 0.5

***

### mainTextureType

> **mainTextureType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L63)

The type of the main texture. Default: TEXTURETYPE_UNSIGNED_BYTE

***

### renderingGroupId

> **renderingGroupId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L58)

The rendering group to draw the layer in. Default: -1
