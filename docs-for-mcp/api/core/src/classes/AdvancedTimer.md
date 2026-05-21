[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AdvancedTimer

# Class: AdvancedTimer\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L134)

An advanced implementation of a timer class

## Type Parameters

### T

`T` = `any`

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new AdvancedTimer**\<`T`\>(`options`): `AdvancedTimer`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L170)

Will construct a new advanced timer based on the options provided. Timer will not start until start() is called.

#### Parameters

##### options

[`ITimerOptions`](../interfaces/ITimerOptions.md)\<`T`\>

construction options for this advanced timer

#### Returns

`AdvancedTimer`\<`T`\>

## Properties

### onEachCountObservable

> **onEachCountObservable**: [`Observable`](Observable.md)\<[`ITimerData`](../interfaces/ITimerData.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L138)

Will notify each time the timer calculates the remaining time

***

### onStateChangedObservable

> **onStateChangedObservable**: [`Observable`](Observable.md)\<[`TimerState`](../enumerations/TimerState.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L150)

Will trigger when the timer state has changed

***

### onTimerAbortedObservable

> **onTimerAbortedObservable**: [`Observable`](Observable.md)\<[`ITimerData`](../interfaces/ITimerData.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L142)

Will trigger when the timer was aborted due to the break condition

***

### onTimerEndedObservable

> **onTimerEndedObservable**: [`Observable`](Observable.md)\<[`ITimerData`](../interfaces/ITimerData.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L146)

Will trigger when the timer ended successfully

## Accessors

### breakCondition

#### Set Signature

> **set** **breakCondition**(`predicate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L191)

set a breaking condition for this timer. Default is to never break during count

##### Parameters

###### predicate

(`data`) => `boolean`

the new break condition. Returns true to break, false otherwise

##### Returns

`void`

## Methods

### clearObservables()

> **clearObservables**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L198)

Reset ALL associated observables in this advanced timer

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L234)

Dispose this timer, clearing all resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### start()

> **start**(`timeToEnd?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L210)

Will start a new iteration of this timer. Only one instance of this timer can run at a time.

#### Parameters

##### timeToEnd?

`number` = `...`

how much time to measure until timer ended

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L224)

Will force a stop on the next tick.

#### Returns

`void`
