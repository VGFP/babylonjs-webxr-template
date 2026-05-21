[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IObserver

# Interface: IObserver

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L73)

Represent an observer registered to a given IObservable object.

## Methods

### remove()

> **remove**(`defer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/observable.ts#L78)

Remove the observer from its observable

#### Parameters

##### defer?

`boolean`

if true, the removal will be deferred to avoid callback skipping (default: false)

#### Returns

`void`
