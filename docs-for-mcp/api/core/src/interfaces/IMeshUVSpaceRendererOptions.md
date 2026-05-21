[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMeshUVSpaceRendererOptions

# Interface: IMeshUVSpaceRendererOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts#L31)

**`Since`**

Options for the MeshUVSpaceRenderer
 5.49.1

## Properties

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts#L47)

Generate mip maps. Default: true

***

### height?

> `optional` **height?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts#L39)

Height of the texture. Default: 1024

***

### optimizeUVAllocation?

> `optional` **optimizeUVAllocation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts#L52)

Optimize UV allocation. Default: true
If you plan to use the texture as a decal map and rotate / offset the texture, you should set this to false

***

### textureType?

> `optional` **textureType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts#L43)

Type of the texture. Default: Constants.TEXTURETYPE_UNSIGNED_BYTE

***

### uvEdgeBlending?

> `optional` **uvEdgeBlending?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts#L56)

If true, a post processing effect will be applied to the texture to fix seams. Default: false

***

### width?

> `optional` **width?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUVSpaceRenderer.ts#L35)

Width of the texture. Default: 1024
