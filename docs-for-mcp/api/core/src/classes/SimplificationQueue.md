[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SimplificationQueue

# Class: SimplificationQueue

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L59)

Queue used to order the simplification tasks

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

## Constructors

### Constructor

> **new SimplificationQueue**(): `SimplificationQueue`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L70)

Creates a new queue

#### Returns

`SimplificationQueue`

## Properties

### running

> **running**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L65)

Gets a boolean indicating that the process is still running

## Methods

### addTask()

> **addTask**(`task`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L80)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L87)

Execute next task

#### Returns

`void`

***

### runSimplification()

> **runSimplification**(`task`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L101)

Execute a simplification task

#### Parameters

##### task

[`ISimplificationTask`](../interfaces/ISimplificationTask.md)

defines the task to run

#### Returns

`void`
