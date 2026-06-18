[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IReadonlyObservable

# Interface: IReadonlyObservable\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L137)

An interface that defines the reader side of an Observable (receive notifications).

## Type Parameters

### T

`T` = `unknown`

## Methods

### add()

> **add**(`callback`, `mask?`, `insertFirst?`, `scope?`, `unregisterOnFirstCall?`): [`IObserver`](IObserver.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L147)

Create a new Observer with the specified callback

#### Parameters

##### callback

(`eventData`, `eventState`) => `void`

the callback that will be executed for that Observer

##### mask?

`number`

the mask used to filter observers

##### insertFirst?

`boolean`

if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present.

##### scope?

`unknown`

optional scope for the callback to be called from

##### unregisterOnFirstCall?

`boolean`

defines if the observer as to be unregistered after the next notification

#### Returns

[`IObserver`](IObserver.md)

the new observer created for the callback

***

### addOnce()

> **addOnce**(`callback`): [`IObserver`](IObserver.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L154)

Create a new Observer with the specified callback and unregisters after the next notification

#### Parameters

##### callback

(`eventData`, `eventState`) => `void`

the callback that will be executed for that Observer

#### Returns

[`IObserver`](IObserver.md)

the new observer created for the callback
