[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / extractMinAndMaxIndexed

# Function: extractMinAndMaxIndexed()

> **extractMinAndMaxIndexed**(`positions`, `indices`, `indexStart`, `indexCount`, `bias?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.functions.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.functions.ts#L43)

Extracts minimum and maximum values from a list of indexed positions

## Parameters

### positions

[`FloatArray`](../type-aliases/FloatArray.md)

defines the positions to use

### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the indices to the positions

### indexStart

`number`

defines the start index

### indexCount

`number`

defines the end index

### bias?

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector2`](../classes/Vector2.md)\> = `null`

defines bias value to add to the result

## Returns

`object`

minimum and maximum values

### maximum

> **maximum**: [`Vector3`](../classes/Vector3.md)

### minimum

> **minimum**: [`Vector3`](../classes/Vector3.md)
