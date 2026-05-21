[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PerfCounter

# Class: PerfCounter

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L11)

This class is used to track a performance counter which is number based.
The user has access to many properties which give statistics of different nature.

The implementer can track two kinds of Performance Counter: time and count.
For time you can optionally call fetchNewFrame() to notify the start of a new frame to monitor, then call beginMonitoring() to start and endMonitoring() to record the lapsed time. endMonitoring takes a newFrame parameter for you to specify if the monitored time should be set for a new frame or accumulated to the current frame being monitored.
For count you first have to call fetchNewFrame() to notify the start of a new frame to monitor, then call addCount() how many time required to increment the count value you monitor.

## Constructors

### Constructor

> **new PerfCounter**(): `PerfCounter`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L69)

Creates a new counter

#### Returns

`PerfCounter`

## Properties

### Enabled

> `static` **Enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L15)

Gets or sets a global boolean to turn on and off all the counters

## Accessors

### average

#### Get Signature

> **get** **average**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L34)

Returns the average value since the performance counter is running

##### Returns

`number`

***

### count

#### Get Signature

> **get** **count**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L62)

Gets the total value count

##### Returns

`number`

***

### current

#### Get Signature

> **get** **current**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L48)

Returns the current value

##### Returns

`number`

***

### lastSecAverage

#### Get Signature

> **get** **lastSecAverage**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L41)

Returns the average value of the last second the counter was monitored

##### Returns

`number`

***

### max

#### Get Signature

> **get** **max**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L27)

Returns the biggest value ever

##### Returns

`number`

***

### min

#### Get Signature

> **get** **min**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L20)

Returns the smallest value ever

##### Returns

`number`

***

### total

#### Get Signature

> **get** **total**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L55)

Gets the accumulated total

##### Returns

`number`

## Methods

### addCount()

> **addCount**(`newCount`, `fetchResult`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L98)

Call this method to monitor a count of something (e.g. mesh drawn in viewport count)

#### Parameters

##### newCount

`number`

the count value to add to the monitored count

##### fetchResult

`boolean`

true when it's the last time in the frame you add to the counter and you wish to update the statistics properties (min/max/average), false if you only want to update statistics.

#### Returns

`void`

***

### beginMonitoring()

> **beginMonitoring**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L111)

Start monitoring this performance counter

#### Returns

`void`

***

### endFrame()

> **endFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L143)

Call this method to end the monitoring of a frame.
This scenario is typically used when you accumulate monitoring time many times for a single frame, you call this method at the end of the frame, after beginMonitoring to start recording and endMonitoring(false) to accumulated the recorded time to the PerfCounter or addCount() to accumulate a monitored count.

#### Returns

`void`

***

### endMonitoring()

> **endMonitoring**(`newFrame?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L122)

Compute the time lapsed since the previous beginMonitoring() call.

#### Parameters

##### newFrame?

`boolean` = `true`

true by default to fetch the result and monitor a new frame, if false the time monitored will be added to the current frame counter

#### Returns

`void`

***

### fetchNewFrame()

> **fetchNewFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/perfCounter.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/perfCounter.ts#L87)

Call this method to start monitoring a new frame.
This scenario is typically used when you accumulate monitoring time many times for a single frame, you call this method at the start of the frame, then beginMonitoring to start recording and endMonitoring(false) to accumulated the recorded time to the PerfCounter or addCount() to accumulate a monitored count.

#### Returns

`void`
