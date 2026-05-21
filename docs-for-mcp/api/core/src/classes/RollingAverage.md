[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RollingAverage

# Class: RollingAverage

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L125)

RollingAverage

Utility to efficiently compute the rolling average and variance over a sliding window of samples

## Constructors

### Constructor

> **new RollingAverage**(`length`): `RollingAverage`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L144)

constructor

#### Parameters

##### length

`number`

The number of samples required to saturate the sliding window

#### Returns

`RollingAverage`

## Properties

### average

> **average**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L129)

Current average

***

### variance

> **variance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L133)

Current variance

## Methods

### add()

> **add**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L153)

Adds a sample to the sample set

#### Parameters

##### v

`number`

The sample value

#### Returns

`void`

***

### history()

> **history**(`i`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L187)

Returns previously added values or null if outside of history or outside the sliding window domain

#### Parameters

##### i

`number`

Index in history. For example, pass 0 for the most recent value and 1 for the value before that

#### Returns

`number`

Value previously recorded with add() or null if outside of range

***

### isSaturated()

> **isSaturated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L200)

Returns true if enough samples have been taken to completely fill the sliding window

#### Returns

`boolean`

true if sample-set saturated

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L207)

Resets the rolling average (equivalent to 0 samples taken so far)

#### Returns

`void`
