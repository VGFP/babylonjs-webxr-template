[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PressureObserverWrapper

# Class: PressureObserverWrapper

Defined in: [babylonjs-source/packages/dev/core/src/Misc/pressureObserverWrapper.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/pressureObserverWrapper.ts#L7)

A wrapper for the experimental pressure api which allows a callback to be called whenever certain thresholds are met.

## Constructors

### Constructor

> **new PressureObserverWrapper**(`options?`): `PressureObserverWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/pressureObserverWrapper.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/pressureObserverWrapper.ts#L21)

A pressure observer will call this callback, whenever these thresholds are met.

#### Parameters

##### options?

`PressureObserverOptions`

An object containing the thresholds used to decide what value to to return for each update property (average of start and end of a threshold boundary).

#### Returns

`PressureObserverWrapper`

## Properties

### onPressureChanged

> **onPressureChanged**: [`Observable`](Observable.md)\<`PressureRecord`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/pressureObserverWrapper.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/pressureObserverWrapper.ts#L15)

An event triggered when the cpu usage/speed meets certain thresholds.
Note: pressure is an experimental API.

## Accessors

### IsAvailable

#### Get Signature

> **get** `static` **IsAvailable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/pressureObserverWrapper.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/pressureObserverWrapper.ts#L33)

Returns true if PressureObserver is available for use, false otherwise.

##### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/pressureObserverWrapper.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/pressureObserverWrapper.ts#L68)

Release the associated resources.

#### Returns

`void`

***

### observe()

> **observe**(`source`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/pressureObserverWrapper.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/pressureObserverWrapper.ts#L41)

Method that must be called to begin observing changes, and triggering callbacks.

#### Parameters

##### source

`"cpu"`

defines the source to observe

#### Returns

`void`

***

### unobserve()

> **unobserve**(`source`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/pressureObserverWrapper.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/pressureObserverWrapper.ts#L57)

Method that must be called to stop observing changes and triggering callbacks (cleanup function).

#### Parameters

##### source

`"cpu"`

defines the source to unobserve

#### Returns

`void`
