[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MultiObserver

# Class: MultiObserver\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.extensions.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.extensions.ts#L7)

Represent a list of observers registered to multiple Observables object.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new MultiObserver**\<`T`\>(): `MultiObserver`\<`T`\>

#### Returns

`MultiObserver`\<`T`\>

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.extensions.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.extensions.ts#L14)

Release associated resources

#### Returns

`void`

***

### Watch()

> `static` **Watch**\<`T`\>(`observables`, `callback`, `mask?`, `scope?`): `MultiObserver`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.extensions.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.extensions.ts#L33)

Raise a callback when one of the observable will notify

#### Type Parameters

##### T

`T`

#### Parameters

##### observables

[`Observable`](Observable.md)\<`T`\>[]

defines a list of observables to watch

##### callback

(`eventData`, `eventState`) => `void`

defines the callback to call on notification

##### mask?

`number` = `-1`

defines the mask used to filter notifications

##### scope?

`any` = `null`

defines the current scope used to restore the JS context

#### Returns

`MultiObserver`\<`T`\>

the new MultiObserver
