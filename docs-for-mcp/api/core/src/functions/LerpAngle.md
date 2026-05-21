[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LerpAngle

# Function: LerpAngle()

> **LerpAngle**(`start`, `end`, `amount`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.scalar.functions.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.scalar.functions.ts#L65)

Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
The parameter t is clamped to the range [0, 1]. Variables a and b are assumed to be in degrees.

## Parameters

### start

`number`

start value

### end

`number`

target value

### amount

`number`

amount to lerp between

## Returns

`number`

the lerped value
