[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITimerData

# Interface: ITimerData\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L48)

An interface defining the data sent by the timer

## Type Parameters

### T

`T`

## Properties

### completeRate

> **completeRate**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L65)

How much is completed, in [0.0...1.0].
Note that this CAN be higher than 1 due to the fact that we don't actually measure time but delta between observable calls

***

### currentTime

> **currentTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L56)

Time now

***

### deltaTime

> **deltaTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L60)

Time passed since started

***

### payload

> **payload**: `T`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L69)

What the registered observable sent in the last count

***

### startTime

> **startTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L52)

When did it start
