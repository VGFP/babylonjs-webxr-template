[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IReadonlyObservable

# Interface: IReadonlyObservable\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L135)

An interface that defines the reader side of an Observable (receive notifications).

## Type Parameters

### T

`T` = `unknown`

## Methods

### add()

> **add**(`callback`, `mask?`, `insertFirst?`, `scope?`, `unregisterOnFirstCall?`): [`IObserver`](IObserver.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L145)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L152)

Create a new Observer with the specified callback and unregisters after the next notification

#### Parameters

##### callback

(`eventData`, `eventState`) => `void`

the callback that will be executed for that Observer

#### Returns

[`IObserver`](IObserver.md)

the new observer created for the callback
