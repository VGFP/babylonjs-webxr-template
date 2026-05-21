[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Repeat

# Function: Repeat()

> **Repeat**(`value`, `length`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.scalar.functions.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.scalar.functions.ts#L217)

Loops the value, so that it is never larger than length and never smaller than 0.

This is similar to the modulo operator but it works with floating point numbers.
For example, using 3.0 for t and 2.5 for length, the result would be 0.5.
With t = 5 and length = 2.5, the result would be 0.0.
Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator

## Parameters

### value

`number`

the value

### length

`number`

the length

## Returns

`number`

the looped value
