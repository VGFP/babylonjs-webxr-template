[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateAlignedTypedArray

# Function: CreateAlignedTypedArray()

> **CreateAlignedTypedArray**\<`T`\>(`type`, `elementCount`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/bufferUtils.ts:458](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/bufferUtils.ts#L458)

Creates a typed array suitable for GPU buffer operations, as some engines require CPU buffer sizes to be aligned to specific boundaries (e.g., 4 bytes).
The use of non-aligned arrays still works but may result in a performance penalty.

## Type Parameters

### T

`T` *extends* [`TypedArray`](../type-aliases/TypedArray.md)

## Parameters

### type

[`TypedArrayConstructor`](../interfaces/TypedArrayConstructor.md)\<`T`\>

The type of the array. For instance, Float32Array or Uint8Array

### elementCount

`number`

The number of elements to store in the array

## Returns

`T`

The aligned typed array
