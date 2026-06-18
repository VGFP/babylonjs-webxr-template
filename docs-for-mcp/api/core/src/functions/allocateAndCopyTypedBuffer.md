[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / allocateAndCopyTypedBuffer

# Function: allocateAndCopyTypedBuffer()

> **allocateAndCopyTypedBuffer**(`type`, `sizeOrDstBuffer`, `sizeInBytes?`, `copyBuffer?`): `ArrayBufferView`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.functions.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.functions.ts#L127)

Allocate a typed array depending on a texture type. Optionally can copy existing data in the buffer.

## Parameters

### type

`number`

type of the texture

### sizeOrDstBuffer

`number` \| `ArrayBufferLike`

size of the array OR an existing buffer that will be used as the destination of the copy (if copyBuffer is provided)

### sizeInBytes?

`boolean` = `false`

true if the size of the array is given in bytes, false if it is the number of elements of the array

### copyBuffer?

`ArrayBuffer`

if provided, buffer to copy into the destination buffer (either a newly allocated buffer if sizeOrDstBuffer is a number or use sizeOrDstBuffer as the destination buffer otherwise)

## Returns

`ArrayBufferView`

the allocated buffer or sizeOrDstBuffer if the latter is an ArrayBuffer
