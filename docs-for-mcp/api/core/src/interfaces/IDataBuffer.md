[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IDataBuffer

# Interface: IDataBuffer

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L6)

Interface for a data buffer

## Properties

### byteLength

> `readonly` **byteLength**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L18)

The byte length of the buffer.

## Methods

### readAsync()

> **readAsync**(`byteOffset`, `byteLength`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L13)

Reads bytes from the data buffer.

#### Parameters

##### byteOffset

`number`

The byte offset to read

##### byteLength

`number`

The byte length to read

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves when the bytes are read
