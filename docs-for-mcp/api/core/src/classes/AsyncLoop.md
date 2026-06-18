[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AsyncLoop

# Class: AsyncLoop

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1629](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1629)

An implementation of a loop for asynchronous functions.

## Constructors

### Constructor

> **new AsyncLoop**(`iterations`, `func`, `successCallback`, `offset?`): `AsyncLoop`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1645](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1645)

Constructor.

#### Parameters

##### iterations

`number`

the number of iterations.

##### func

(`asyncLoop`) => `void`

the function to run each iteration

##### successCallback

() => `void`

the callback that will be called upon successful execution

##### offset?

`number` = `0`

starting offset.

#### Returns

`AsyncLoop`

## Properties

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1633](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1633)

Defines the current index of the loop.

***

### iterations

> **iterations**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1649)

Defines the number of iterations for the loop

## Methods

### breakLoop()

> **breakLoop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1677](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1677)

Break the loop and run the success callback.

#### Returns

`void`

***

### executeNext()

> **executeNext**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1663)

Execute the next iteration. Must be called after the last iteration was finished.

#### Returns

`void`

***

### Run()

> `static` **Run**(`iterations`, `fn`, `successCallback`, `offset?`): `AsyncLoop`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1690)

Create and run an async loop.

#### Parameters

##### iterations

`number`

the number of iterations.

##### fn

(`asyncLoop`) => `void`

the function to run each iteration

##### successCallback

() => `void`

the callback that will be called upon successful execution

##### offset?

`number` = `0`

starting offset.

#### Returns

`AsyncLoop`

the created async loop object

***

### SyncAsyncForLoop()

> `static` **SyncAsyncForLoop**(`iterations`, `syncedIterations`, `fn`, `callback`, `breakFunction?`, `timeout?`): `AsyncLoop`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.pure.ts:1708](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/tools.pure.ts#L1708)

A for-loop that will run a given number of iterations synchronous and the rest async.

#### Parameters

##### iterations

`number`

total number of iterations

##### syncedIterations

`number`

number of synchronous iterations in each async iteration.

##### fn

(`iteration`) => `void`

the function to call each iteration.

##### callback

() => `void`

a success call back that will be called when iterating stops.

##### breakFunction?

() => `boolean`

a break condition (optional)

##### timeout?

`number` = `0`

timeout settings for the setTimeout function. default - 0.

#### Returns

`AsyncLoop`

the created async loop object
