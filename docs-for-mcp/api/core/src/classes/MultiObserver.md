[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MultiObserver

# Class: MultiObserver\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.extensions.pure.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.extensions.pure.ts#L10)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.extensions.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.extensions.pure.ts#L17)

Release associated resources

#### Returns

`void`

***

### Watch()

> `static` **Watch**\<`T`\>(`observables`, `callback`, `mask?`, `scope?`): `MultiObserver`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.extensions.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.extensions.pure.ts#L36)

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
