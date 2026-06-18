[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGaussianSplattingDebugOptions

# Interface: IGaussianSplattingDebugOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L49)

Per-part debug options for compound Gaussian splat meshes.
Each field is optional; unset fields fall back to the global setting on the plugin,
and if that is also unset, a neutral value is used (no culling, full SH, etc.).

## Properties

### clippingBox

> **clippingBox**: [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: [`Vector3`](../classes/Vector3.md); `min`: [`Vector3`](../classes/Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L51)

World-space axis-aligned clipping box, or null to disable.

***

### opacityCulling

> **opacityCulling**: [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L53)

Opacity culling range [0..1], or null to disable.

***

### opacitySaturate

> **opacitySaturate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L59)

When true, replaces Gaussian falloff with flat disk opacity.

***

### opacityScale

> **opacityScale**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L57)

Scalar opacity multiplier. 1.0 = no change.

***

### shDc

> **shDc**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L61)

Include the DC (base) SH color.

***

### shOrder1

> **shOrder1**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L63)

Include SH band 1 contribution.

***

### shOrder2

> **shOrder2**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L65)

Include SH band 2 contribution.

***

### shOrder3

> **shOrder3**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L67)

Include SH band 3 contribution.

***

### shOrder4

> **shOrder4**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L69)

Include SH band 4 contribution.

***

### sizeCulling

> **sizeCulling**: [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L55)

Size culling range, or null to disable.
