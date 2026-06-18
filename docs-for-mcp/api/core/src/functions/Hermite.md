[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Hermite

# Function: Hermite()

> **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.scalar.functions.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.scalar.functions.ts#L100)

Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".

## Parameters

### value1

`number`

defines the first control point

### tangent1

`number`

defines the first tangent

### value2

`number`

defines the second control point

### tangent2

`number`

defines the second tangent

### amount

`number`

defines the amount on the interpolation spline (between 0 and 1)

## Returns

`number`

hermite result

## See

http://mathworld.wolfram.com/HermitePolynomial.html
