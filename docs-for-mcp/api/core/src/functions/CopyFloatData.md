[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CopyFloatData

# Function: CopyFloatData()

> **CopyFloatData**(`input`, `size`, `type`, `byteOffset`, `byteStride`, `normalized`, `totalVertices`, `output`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/bufferUtils.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/bufferUtils.ts#L385)

Copies the given data array to the given float array.

## Parameters

### input

[`DataArray`](../type-aliases/DataArray.md)

the input data array

### size

`number`

the number of components

### type

`number`

the component type

### byteOffset

`number`

the byte offset of the data

### byteStride

`number`

the byte stride of the data

### normalized

`boolean`

whether the data is normalized

### totalVertices

`number`

number of vertices in the buffer to take into account

### output

`Float32Array`

the output float array

## Returns

`void`
