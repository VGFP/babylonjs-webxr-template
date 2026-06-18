[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMeshDataOptions

# Interface: IMeshDataOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L248)

Options when computing data about a mesh

## Properties

### applyBakedVertexAnimation?

> `optional` **applyBakedVertexAnimation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L256)

Apply baked vertex animation when computing data. Defaults to false.

***

### applyMorph?

> `optional` **applyMorph?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L253)

Apply morph when computing the bounding info. Defaults to false.

***

### applySkeleton?

> `optional` **applySkeleton?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L250)

Apply skeleton when computing the bounding info. Defaults to false.

***

### bakedVertexAnimationSettings?

> `optional` **bakedVertexAnimationSettings?**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Vector4`](../classes/Vector4.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L259)

Baked vertex animation settings to use instead of the manager's animationParameters.

***

### cache?

> `optional` **cache?**: [`IMeshDataCache`](IMeshDataCache.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L268)

Cache to avoid redundant allocations and computations when computing the bounding info multiple times. Pass in
an initial empty object and continue with subsequent calls using the same object. Caching is disabled by default.

***

### updatePositionsArray?

> `optional` **updatePositionsArray?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L262)

Update the cached positions stored as a Vector3 array. Defaults to true.
