[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / setAndStartTimer

# Function: setAndStartTimer()

> **setAndStartTimer**\<`T`\>(`options`): [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](../classes/Observer.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/timer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/timer.ts#L97)

A simple version of the timer. Will take options and start the timer immediately after calling it

## Type Parameters

### T

`T` = `any`

## Parameters

### options

[`ITimerOptions`](../interfaces/ITimerOptions.md)\<`T`\>

options with which to initialize this timer

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](../classes/Observer.md)\<`T`\>\>

an observer that can be used to stop the timer
