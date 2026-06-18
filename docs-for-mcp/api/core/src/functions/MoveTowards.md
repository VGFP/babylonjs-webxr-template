[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MoveTowards

# Function: MoveTowards()

> **MoveTowards**(`current`, `target`, `maxDelta`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.scalar.functions.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.scalar.functions.ts#L294)

Moves a value current towards target.

This is essentially the same as Mathf.Lerp but instead the function will ensure that the speed never exceeds maxDelta.
Negative values of maxDelta pushes the value away from target.

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

resulting value
