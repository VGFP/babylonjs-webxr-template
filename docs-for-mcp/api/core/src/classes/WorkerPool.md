[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WorkerPool

# Class: WorkerPool

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L12)

Helper class to push actions to a pool of workers.

## Extended by

- [`AutoReleaseWorkerPool`](AutoReleaseWorkerPool.md)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WorkerPool**(`workers`): `WorkerPool`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L20)

Constructor

#### Parameters

##### workers

`Worker`[]

Array of workers to use for actions

#### Returns

`WorkerPool`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L30)

Terminates all workers and clears any pending actions.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### push()

> **push**(`action`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L47)

Pushes an action to the worker pool. If all the workers are active, the action will be
pended until a worker has completed its action.

#### Parameters

##### action

(`worker`, `onComplete`) => `void`

The action to perform. Call onComplete when the action is complete.

#### Returns

`void`
