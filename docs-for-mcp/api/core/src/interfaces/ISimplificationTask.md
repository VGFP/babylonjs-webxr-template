[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISimplificationTask

# Interface: ISimplificationTask

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L32)

Interface used to define a simplification task

## Properties

### mesh

> **mesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L44)

Mesh to simplify

***

### parallelProcessing

> **parallelProcessing**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L52)

Defines if parallel processing can be used

***

### settings

> **settings**: [`ISimplificationSettings`](ISimplificationSettings.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L36)

Array of settings

***

### simplificationType

> **simplificationType**: [`QUADRATIC`](../enumerations/SimplificationType.md#quadratic)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L40)

Simplification type

***

### successCallback?

> `optional` **successCallback?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L48)

Callback called on success

#### Returns

`void`
