[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AutoReleaseWorkerPool

# Class: AutoReleaseWorkerPool

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L95)

Similar to the WorkerPool class except it creates and destroys workers automatically with a maximum of `maxWorkers` workers.
Workers are terminated when it is idle for at least `idleTimeElapsedBeforeRelease` milliseconds.

## Extends

- [`WorkerPool`](WorkerPool.md)

## Constructors

### Constructor

> **new AutoReleaseWorkerPool**(`maxWorkers`, `createWorkerAsync`, `options?`): `AutoReleaseWorkerPool`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L108)

#### Parameters

##### maxWorkers

`number`

##### createWorkerAsync

() => `Promise`\<`Worker`\>

##### options?

[`AutoReleaseWorkerPoolOptions`](../interfaces/AutoReleaseWorkerPoolOptions.md) = `AutoReleaseWorkerPool.DefaultOptions`

#### Returns

`AutoReleaseWorkerPool`

#### Overrides

[`WorkerPool`](WorkerPool.md).[`constructor`](WorkerPool.md#constructor)

## Properties

### DefaultOptions

> `static` **DefaultOptions**: [`AutoReleaseWorkerPoolOptions`](../interfaces/AutoReleaseWorkerPoolOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L100)

Default options for the constructor.
Override to change the defaults.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L30)

Terminates all workers and clears any pending actions.

#### Returns

`void`

#### Inherited from

[`WorkerPool`](WorkerPool.md).[`dispose`](WorkerPool.md#dispose)

***

### push()

> **push**(`action`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/workerPool.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/workerPool.ts#L116)

Pushes an action to the worker pool. If all the workers are active, the action will be
pended until a worker has completed its action.

#### Parameters

##### action

(`worker`, `onComplete`) => `void`

The action to perform. Call onComplete when the action is complete.

#### Returns

`void`

#### Overrides

[`WorkerPool`](WorkerPool.md).[`push`](WorkerPool.md#push)
