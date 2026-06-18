[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetTypedArrayData

# Function: GetTypedArrayData()

> **GetTypedArrayData**(`data`, `size`, `type`, `byteOffset`, `byteStride`, `totalVertices`, `forceCopy?`): [`VertexDataTypedArray`](../type-aliases/VertexDataTypedArray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/bufferUtils.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/bufferUtils.ts#L300)

Gets the given data array as a typed array that matches the component type. If the data cannot be used directly, a copy is made to support the new typed array.
If the data is number[], byteOffset and byteStride must be a multiple of 4, as data will be treated like a list of floats.

## Parameters

### data

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

### totalVertices

`number`

number of vertices in the buffer to take into account

### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

## Returns

[`VertexDataTypedArray`](../type-aliases/VertexDataTypedArray.md)

a typed array containing vertex data
