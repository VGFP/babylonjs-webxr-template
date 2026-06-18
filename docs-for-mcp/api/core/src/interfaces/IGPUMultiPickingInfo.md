[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGPUMultiPickingInfo

# Interface: IGPUMultiPickingInfo

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L56)

Stores the result of a multi GPU picking operation

## Properties

### meshes

> **meshes**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L60)

Picked mesh

***

### normals?

> `optional` **normals?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L78)

Reconstructed normals in world space.

Only available when enableDepthPicking is true and enough valid depth neighbors can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return null.

***

### pickedPoints?

> `optional` **pickedPoints?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L71)

Picked points in world space.

Only available when enableDepthPicking is true and a valid depth value can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return null.

***

### thinInstanceIndexes?

> `optional` **thinInstanceIndexes?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L64)

Picked thin instance index
