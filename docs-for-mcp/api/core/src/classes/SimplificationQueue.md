[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SimplificationQueue

# Class: SimplificationQueue

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L94)

Queue used to order the simplification tasks

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

## Constructors

### Constructor

> **new SimplificationQueue**(): `SimplificationQueue`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L105)

Creates a new queue

#### Returns

`SimplificationQueue`

## Properties

### running

> **running**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L100)

Gets a boolean indicating that the process is still running

## Methods

### addTask()

> **addTask**(`task`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L114)

Adds a new simplification task

#### Parameters

##### task

[`ISimplificationTask`](../interfaces/ISimplificationTask.md)

defines a task to add

#### Returns

`void`

***

### executeNext()

> **executeNext**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L121)

Execute next task

#### Returns

`void`

***

### runSimplification()

> **runSimplification**(`task`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L135)

Execute a simplification task

#### Parameters

##### task

[`ISimplificationTask`](../interfaces/ISimplificationTask.md)

defines the task to run

#### Returns

`void`
