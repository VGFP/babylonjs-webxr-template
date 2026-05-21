[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Observer

# Class: Observer\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L84)

Represent an observer registered to a given Observable object.

## Type Parameters

### T

`T`

## Implements

- [`IObserver`](../interfaces/IObserver.md)

## Constructors

### Constructor

> **new Observer**\<`T`\>(`callback`, `mask`, `scope?`): `Observer`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L105)

Creates a new observer

#### Parameters

##### callback

(`eventData`, `eventState`) => `void`

defines the callback to call when the observer is notified

##### mask

`number`

defines the mask of the observer (used to filter notifications)

##### scope?

`any` = `null`

defines the current scope used to restore the JS context

#### Returns

`Observer`\<`T`\>

## Properties

### callback

> **callback**: (`eventData`, `eventState`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L109)

Defines the callback to call when the observer is notified

#### Parameters

##### eventData

`T`

##### eventState

[`EventState`](EventState.md)

#### Returns

`void`

***

### mask

> **mask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L113)

Defines the mask of the observer (used to filter notifications)

***

### scope

> **scope**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L117)

[null] Defines the current scope used to restore the JS context

***

### unregisterOnNextCall

> **unregisterOnNextCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L90)

Gets or sets a property defining that the observer as to be unregistered after the next notification

## Methods

### remove()

> **remove**(`defer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L125)

Remove the observer from its observable
This can be used instead of using the observable's remove function.

#### Parameters

##### defer?

`boolean` = `false`

if true, the removal will be deferred to avoid callback skipping (default: false)

#### Returns

`void`

#### Implementation of

[`IObserver`](../interfaces/IObserver.md).[`remove`](../interfaces/IObserver.md#remove)
