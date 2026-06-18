[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetFloatData

# Function: GetFloatData()

> **GetFloatData**(`data`, `size`, `type`, `byteOffset`, `byteStride`, `normalized`, `totalVertices`, `forceCopy?`): [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/bufferUtils.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/bufferUtils.ts#L237)

Gets the given data array as a float array. Float data is constructed if the data array cannot be returned directly.

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

### normalized

`boolean`

whether the data is normalized

### totalVertices

`number`

number of vertices in the buffer to take into account

### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

## Returns

[`FloatArray`](../type-aliases/FloatArray.md)

a float array containing vertex data
