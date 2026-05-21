[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMeshRebuildOptions

# Interface: IMeshRebuildOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L56)

Interface to customize the mesh rebuild options

## Properties

### centerMesh?

> `optional` **centerMesh?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L64)

True to center the mesh on 0,0,0

***

### materialToUse?

> `optional` **materialToUse?**: [`Material`](../classes/Material.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L68)

Defines a material to use for that mesh. When not defined the system will either reuse the one from the source or create a multimaterial if several materials were involved

***

### rebuildNormals?

> `optional` **rebuildNormals?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L60)

Rebuild normals
