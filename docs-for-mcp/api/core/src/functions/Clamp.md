[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Clamp

# Function: Clamp()

> **Clamp**(`value`, `min?`, `max?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.scalar.functions.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.scalar.functions.ts#L134)

Returns the value itself if it's between min and max.
Returns min if the value is lower than min.
Returns max if the value is greater than max.

## Parameters

### value

`number`

the value to clmap

### min?

`number` = `0`

the min value to clamp to (default: 0)

### max?

`number` = `1`

the max value to clamp to (default: 1)

## Returns

`number`

the clamped value
