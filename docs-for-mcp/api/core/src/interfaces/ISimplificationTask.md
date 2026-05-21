[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISimplificationTask

# Interface: ISimplificationTask

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L67)

Interface used to define a simplification task

## Properties

### mesh

> **mesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L79)

Mesh to simplify

***

### parallelProcessing

> **parallelProcessing**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L87)

Defines if parallel processing can be used

***

### settings

> **settings**: [`ISimplificationSettings`](ISimplificationSettings.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L71)

Array of settings

***

### simplificationType

> **simplificationType**: [`QUADRATIC`](../enumerations/SimplificationType.md#quadratic)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L75)

Simplification type

***

### successCallback?

> `optional` **successCallback?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L83)

Callback called on success

#### Returns

`void`
