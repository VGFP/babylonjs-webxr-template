[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MoveTowardsAngle

# Function: MoveTowardsAngle()

> **MoveTowardsAngle**(`current`, `target`, `maxDelta`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.scalar.functions.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.scalar.functions.ts#L314)

Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.

Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta
 are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.

## Parameters

### current

`number`

current value

### target

`number`

target value

### maxDelta

`number`

max distance to move

## Returns

`number`

resulting angle
