[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITimerOptions

# Interface: ITimerOptions\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L8)

Construction options for a timer

## Type Parameters

### T

`T`

## Properties

### breakCondition?

> `optional` **breakCondition?**: (`data?`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L30)

An optional break condition that will stop the times prematurely. In this case onEnded will not be triggered!

#### Parameters

##### data?

[`ITimerData`](ITimerData.md)\<`T`\>

#### Returns

`boolean`

***

### contextObservable

> **contextObservable**: [`Observable`](../classes/Observable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L18)

The context observable is used to calculate time deltas and provides the context of the timer's callbacks. Will usually be OnBeforeRenderObservable.
Countdown calculation is done ONLY when the observable is notifying its observers, meaning that if
you choose an observable that doesn't trigger too often, the wait time might extend further than the requested max time

***

### observableParameters?

> `optional` **observableParameters?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L22)

Optional parameters when adding an observer to the observable

#### insertFirst?

> `optional` **insertFirst?**: `boolean`

#### mask?

> `optional` **mask?**: `number`

#### scope?

> `optional` **scope?**: `any`

***

### onAborted?

> `optional` **onAborted?**: (`data`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L38)

Will be triggered when the break condition has met (prematurely ended)

#### Parameters

##### data

[`ITimerData`](ITimerData.md)\<`any`\>

#### Returns

`void`

***

### onEnded?

> `optional` **onEnded?**: (`data`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L34)

Will be triggered when the time condition has met

#### Parameters

##### data

[`ITimerData`](ITimerData.md)\<`any`\>

#### Returns

`void`

***

### onTick?

> `optional` **onTick?**: (`data`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L42)

Optional function to execute on each tick (or count)

#### Parameters

##### data

[`ITimerData`](ITimerData.md)\<`any`\>

#### Returns

`void`

***

### timeout

> **timeout**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L12)

Time-to-end
