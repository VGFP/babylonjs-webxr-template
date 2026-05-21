[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMeshDataOptions

# Interface: IMeshDataOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/abstractMesh.ts#L141)

Options when computing data about a mesh

## Properties

### applyMorph?

> `optional` **applyMorph?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/abstractMesh.ts#L146)

Apply morph when computing the bounding info. Defaults to false.

***

### applySkeleton?

> `optional` **applySkeleton?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/abstractMesh.ts#L143)

Apply skeleton when computing the bounding info. Defaults to false.

***

### cache?

> `optional` **cache?**: [`IMeshDataCache`](IMeshDataCache.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/abstractMesh.ts#L155)

Cache to avoid redundant allocations and computations when computing the bounding info multiple times. Pass in
an initial empty object and continue with subsequent calls using the same object. Caching is disabled by default.

***

### updatePositionsArray?

> `optional` **updatePositionsArray?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/abstractMesh.ts#L149)

Update the cached positions stored as a Vector3 array. Defaults to true.
