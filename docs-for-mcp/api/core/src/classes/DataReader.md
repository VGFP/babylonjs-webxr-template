[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DataReader

# Class: DataReader

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L24)

Utility class for reading from a data buffer

## Constructors

### Constructor

> **new DataReader**(`buffer`): `DataReader`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L42)

Constructor

#### Parameters

##### buffer

[`IDataBuffer`](../interfaces/IDataBuffer.md)

The buffer to read

#### Returns

`DataReader`

## Properties

### buffer

> `readonly` **buffer**: [`IDataBuffer`](../interfaces/IDataBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L28)

The data buffer associated with this data reader.

***

### byteOffset

> **byteOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L33)

The current byte offset from the beginning of the data buffer.

## Methods

### loadAsync()

> **loadAsync**(`byteLength`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L51)

Loads the given byte length.

#### Parameters

##### byteLength

`number`

The byte length to load

#### Returns

`Promise`\<`void`\>

A promise that resolves when the load is complete

***

### readString()

> **readString**(`byteLength`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L85)

Read a string from the currently loaded data range.

#### Parameters

##### byteLength

`number`

The byte length to read

#### Returns

`string`

The string read

***

### readUint32()

> **readUint32**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L61)

Read a unsigned 32-bit integer from the currently loaded data range.

#### Returns

`number`

The 32-bit integer read

***

### readUint8Array()

> **readUint8Array**(`byteLength`): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L73)

Read a byte array from the currently loaded data range.

#### Parameters

##### byteLength

`number`

The byte length to read

#### Returns

`Uint8Array`

The byte array read

***

### skipBytes()

> **skipBytes**(`byteLength`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dataReader.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dataReader.ts#L93)

Skips the given byte length the currently loaded data range.

#### Parameters

##### byteLength

`number`

The byte length to skip

#### Returns

`void`
