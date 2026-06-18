[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGPUPickingInfo

# Interface: IGPUPickingInfo

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L28)

Class used to store the result of a GPU picking operation

## Properties

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L32)

Picked mesh

***

### normal?

> `optional` **normal?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L50)

Reconstructed normal in world space.

Only available when enableDepthPicking is true and enough valid depth neighbors can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return undefined.

***

### pickedPoint?

> `optional` **pickedPoint?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L43)

Picked point in world space.

Only available when enableDepthPicking is true and a valid depth value can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return undefined.

***

### thinInstanceIndex?

> `optional` **thinInstanceIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L36)

Picked thin instance index
