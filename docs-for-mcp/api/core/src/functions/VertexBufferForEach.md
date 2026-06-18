[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VertexBufferForEach

# ~~Function: VertexBufferForEach()~~

> **VertexBufferForEach**(`data`, `byteOffset`, `byteStride`, `componentCount`, `componentType`, `count`, `normalized`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:942](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L942)

Enumerates each value of the given parameters as numbers.

## Parameters

### data

[`DataArray`](../type-aliases/DataArray.md)

the data to enumerate

### byteOffset

`number`

the byte offset of the data

### byteStride

`number`

the byte stride of the data

### componentCount

`number`

the number of components per element

### componentType

`number`

the type of the component

### count

`number`

the number of values to enumerate

### normalized

`boolean`

whether the data is normalized

### callback

(`value`, `index`) => `void`

the callback function called for each value

## Returns

`void`

## Deprecated

Use `EnumerateFloatValues` from `bufferUtils` instead
