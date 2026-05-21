[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MultiplyMatricesToArray

# Function: MultiplyMatricesToArray()

> **MultiplyMatricesToArray**(`a`, `b`, `output`, `offset?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.functions.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.functions.ts#L96)

Multiplies two matrices and stores the result in the target array.

## Parameters

### a

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IMatrixLike`\>

defines the first matrix

### b

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IMatrixLike`\>

defines the second matrix

### output

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

defines the target array

### offset?

`number` = `0`

defines the offset in the target array where to store the result (0 by default)

## Returns

`void`
