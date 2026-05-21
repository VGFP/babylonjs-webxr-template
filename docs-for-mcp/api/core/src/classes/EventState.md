[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EventState

# Class: EventState

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L10)

A class serves as a medium between the observable and its observers

## Constructors

### Constructor

> **new EventState**(`mask`, `skipNextObservers?`, `target?`, `currentTarget?`): `EventState`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L18)

Create a new EventState

#### Parameters

##### mask

`number`

defines the mask associated with this state

##### skipNextObservers?

`boolean` = `false`

defines a flag which will instruct the observable to skip following observers when set to true

##### target?

`any`

defines the original target of the state

##### currentTarget?

`any`

defines the current target of the state

#### Returns

`EventState`

## Properties

### currentTarget?

> `optional` **currentTarget?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L56)

The current object in the bubbling phase

***

### lastReturnValue?

> `optional` **lastReturnValue?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L62)

This will be populated with the return value of the last function that was executed.
If it is the first function in the callback chain it will be the event data.

***

### mask

> **mask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L46)

Get the mask value that were used to trigger the event corresponding to this EventState object

***

### skipNextObservers

> **skipNextObservers**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L41)

An Observer can set this property to true to prevent subsequent observers of being notified

***

### target?

> `optional` **target?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L51)

The object that originally notified the event

***

### userInfo?

> `optional` **userInfo?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L67)

User defined information that will be sent to observers

## Methods

### initialize()

> **initialize**(`mask`, `skipNextObservers?`, `target?`, `currentTarget?`): `EventState`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L30)

Initialize the current event state

#### Parameters

##### mask

`number`

defines the mask associated with this state

##### skipNextObservers?

`boolean` = `false`

defines a flag which will instruct the observable to skip following observers when set to true

##### target?

`any`

defines the original target of the state

##### currentTarget?

`any`

defines the current target of the state

#### Returns

`EventState`

the current event state
