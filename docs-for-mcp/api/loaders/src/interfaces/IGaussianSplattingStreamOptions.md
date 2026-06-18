[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / IGaussianSplattingStreamOptions

# Interface: IGaussianSplattingStreamOptions

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L81)

Options for [GaussianSplattingStream](../classes/GaussianSplattingStream.md).

## Properties

### debugDisplay?

> `optional` **debugDisplay?**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L87)

When true, renders a wireframe box per LOD node, colored by the node's LOD level.

***

### debugLodSource?

> `optional` **debugLodSource?**: [`GaussianSplattingStreamDebugLodSource`](../type-aliases/GaussianSplattingStreamDebugLodSource.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L89)

Which LOD value drives the debug wireframe colors. Defaults to `"optimal"`.

***

### deflateURL?

> `optional` **deflateURL?**: `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L83)

URL of the fflate UMD module used to unzip `.sog` environment bundles.

***

### fflate?

> `optional` **fflate?**: `any`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L85)

Pre-loaded fflate module.

***

### frustumCulling?

> `optional` **frustumCulling?**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L118)

When true (default), LOD nodes outside the camera frustum are biased to their coarsest LOD rather than
rendered at full detail. They stay in the sort/render set so they appear instantly (at low detail) when
the camera turns toward them, then refine. Set to `false` to render every node at its distance LOD.

***

### lodBaseDistance?

> `optional` **lodBaseDistance?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L91)

Distance (in local units) of the first LOD transition. PlayCanvas default `5`.

***

### lodBehindPenalty?

> `optional` **lodBehindPenalty?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L95)

Distance multiplier applied to nodes behind the camera (`1` = no penalty). PlayCanvas default `1`.

***

### lodCooldownFrames?

> `optional` **lodCooldownFrames?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L103)

Frames a node must wait after switching LOD before it may switch again (oscillation damping). Defaults to `10`.

***

### lodMultiplier?

> `optional` **lodMultiplier?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L93)

Geometric ratio between successive LOD transition distances. PlayCanvas default `3`.

***

### lodRangeMax?

> `optional` **lodRangeMax?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L99)

Highest LOD index the optimal-LOD heuristic may select. Defaults to `lodLevels - 1`.

***

### lodRangeMin?

> `optional` **lodRangeMin?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L97)

Lowest LOD index the optimal-LOD heuristic may select. Defaults to `0`.

***

### lodUpdateDistance?

> `optional` **lodUpdateDistance?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L107)

Minimum camera movement (world units) required to re-evaluate LODs. Defaults to `0.5`.

***

### lodUpdateInterval?

> `optional` **lodUpdateInterval?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L105)

Minimum number of frames between LOD re-evaluations (throttles per-frame work during motion). Defaults to `4`.

***

### maxDecodesPerFrame?

> `optional` **maxDecodesPerFrame?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L101)

Maximum number of LOD source files to GPU-decode per frame (spreads work to avoid hitches). Defaults to `1`.

***

### maxDetailLod?

> `optional` **maxDetailLod?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L112)

Finest (most detailed) LOD level any node is allowed to render. `0` allows full detail (level 0);
`1` caps detail at the next-coarser level, and so on. Higher values force a coarser maximum detail.
