[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / extractMinAndMax

# Function: extractMinAndMax()

> **extractMinAndMax**(`positions`, `start`, `count`, `bias?`, `stride?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.functions.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.functions.ts#L80)

Extracts minimum and maximum values from a list of positions

## Parameters

### positions

[`FloatArray`](../type-aliases/FloatArray.md)

defines the positions to use

### start

`number`

defines the start index in the positions array

### count

`number`

defines the number of positions to handle

### bias?

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector2`](../classes/Vector2.md)\> = `null`

defines bias value to add to the result

### stride?

`number`

defines the stride size to use (distance between two positions in the positions array)

## Returns

`object`

minimum and maximum values

### maximum

> **maximum**: [`Vector3`](../classes/Vector3.md)

### minimum

> **minimum**: [`Vector3`](../classes/Vector3.md)
