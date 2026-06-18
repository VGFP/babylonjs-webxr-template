[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMeshUVSpaceRendererOptions

# Interface: IMeshUVSpaceRendererOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L22)

**`Since`**

Options for the MeshUVSpaceRenderer
 5.49.1

## Properties

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L38)

Generate mip maps. Default: true

***

### height?

> `optional` **height?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L30)

Height of the texture. Default: 1024

***

### optimizeUVAllocation?

> `optional` **optimizeUVAllocation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L43)

Optimize UV allocation. Default: true
If you plan to use the texture as a decal map and rotate / offset the texture, you should set this to false

***

### textureType?

> `optional` **textureType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L34)

Type of the texture. Default: Constants.TEXTURETYPE_UNSIGNED_BYTE

***

### uvEdgeBlending?

> `optional` **uvEdgeBlending?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L47)

If true, a post processing effect will be applied to the texture to fix seams. Default: false

***

### width?

> `optional` **width?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L26)

Width of the texture. Default: 1024
