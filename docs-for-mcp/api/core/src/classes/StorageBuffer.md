[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StorageBuffer

# Class: StorageBuffer

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/storageBuffer.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/storageBuffer.ts#L9)

This class is a small wrapper around a native buffer that can be read and/or written

## Constructors

### Constructor

> **new StorageBuffer**(`engine`, `size`, `creationFlags?`, `label?`): `StorageBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/storageBuffer.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/storageBuffer.ts#L23)

Creates a new storage buffer instance

#### Parameters

##### engine

[`WebGPUEngine`](WebGPUEngine.md)

The engine the buffer will be created inside

##### size

`number`

The size of the buffer in bytes

##### creationFlags?

`number` = `Constants.BUFFER_CREATIONFLAG_READWRITE`

flags to use when creating the buffer (see Constants.BUFFER_CREATIONFLAG_XXX). The BUFFER_CREATIONFLAG_STORAGE flag will be automatically added.

##### label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

`StorageBuffer`

## Methods

### clear()

> **clear**(`byteOffset?`, `byteLength?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/storageBuffer.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/storageBuffer.ts#L54)

Clears the storage buffer to zeros

#### Parameters

##### byteOffset?

`number`

the byte offset to start clearing (optional)

##### byteLength?

`number`

the byte length to clear (optional)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/storageBuffer.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/storageBuffer.ts#L88)

Disposes the storage buffer

#### Returns

`void`

***

### getBuffer()

> **getBuffer**(): [`DataBuffer`](DataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/storageBuffer.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/storageBuffer.ts#L45)

Gets underlying native buffer

#### Returns

[`DataBuffer`](DataBuffer.md)

underlying native buffer

***

### read()

> **read**(`offset?`, `size?`, `buffer?`, `noDelay?`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/storageBuffer.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/storageBuffer.ts#L81)

Reads data from the storage buffer

#### Parameters

##### offset?

`number`

The offset in the storage buffer to start reading from (default: 0)

##### size?

`number`

The number of bytes to read from the storage buffer (default: capacity of the buffer)

##### buffer?

`ArrayBufferView`\<`ArrayBufferLike`\>

The buffer to write the data we have read from the storage buffer to (optional)

##### noDelay?

`boolean`

If true, a call to flushFramebuffer will be issued so that the data can be read back immediately. This can speed up data retrieval, at the cost of a small perf penalty (default: false).

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

If not undefined, returns the (promise) buffer (as provided by the 4th parameter) filled with the data, else it returns a (promise) Uint8Array with the data read from the storage buffer

***

### update()

> **update**(`data`, `byteOffset?`, `byteLength?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/storageBuffer.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/storageBuffer.ts#L64)

Updates the storage buffer

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

the data used to update the storage buffer

##### byteOffset?

`number`

the byte offset of the data (optional)

##### byteLength?

`number`

the byte length of the data (optional)

#### Returns

`void`
