[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PerformanceMonitor

# Class: PerformanceMonitor

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L7)

Performance monitor tracks rolling average frame-time and frame-time variance over a user defined sliding-window

## Constructors

### Constructor

> **new PerformanceMonitor**(`frameSampleSize?`): `PerformanceMonitor`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L16)

constructor

#### Parameters

##### frameSampleSize?

`number` = `30`

The number of samples required to saturate the sliding window

#### Returns

`PerformanceMonitor`

## Accessors

### averageFPS

#### Get Signature

> **get** **averageFPS**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L61)

Returns the average framerate in frames per second over the sliding window (or the subset of frames sampled so far)

##### Returns

`number`

***

### averageFrameTime

#### Get Signature

> **get** **averageFrameTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L40)

Returns the average frame time in milliseconds over the sliding window (or the subset of frames sampled so far)

##### Returns

`number`

***

### averageFrameTimeVariance

#### Get Signature

> **get** **averageFrameTimeVariance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L47)

Returns the variance frame time in milliseconds over the sliding window (or the subset of frames sampled so far)

##### Returns

`number`

***

### instantaneousFPS

#### Get Signature

> **get** **instantaneousFPS**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L68)

Returns the average framerate in frames per second using the most recent frame time

##### Returns

`number`

***

### instantaneousFrameTime

#### Get Signature

> **get** **instantaneousFrameTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L54)

Returns the frame time of the most recent frame

##### Returns

`number`

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L105)

Returns true if sampling is enabled

##### Returns

`boolean`

***

### isSaturated

#### Get Signature

> **get** **isSaturated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L81)

Returns true if enough samples have been taken to completely fill the sliding window

##### Returns

`boolean`

## Methods

### disable()

> **disable**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L96)

Disables contributions to the sliding window sample set
Samples will not be interpolated over the disabled period

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L88)

Enables contributions to the sliding window sample set

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L112)

Resets performance monitor

#### Returns

`void`

***

### sampleFrame()

> **sampleFrame**(`timeMs?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/performanceMonitor.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/performanceMonitor.ts#L24)

Samples current frame

#### Parameters

##### timeMs?

`number` = `PrecisionDate.Now`

A timestamp in milliseconds of the current frame to compare with other frames

#### Returns

`void`
