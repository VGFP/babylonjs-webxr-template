[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReadFileError

# Class: ReadFileError

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/fileTools.pure.ts#L65)

## Ignore

## Extends

- [`RuntimeError`](RuntimeError.md)

## Constructors

### Constructor

> **new ReadFileError**(`message`, `file`): `ReadFileError`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/fileTools.pure.ts#L71)

Creates a new ReadFileError

#### Parameters

##### message

`string`

defines the message of the error

##### file

`File`

defines the optional file

#### Returns

`ReadFileError`

#### Overrides

[`RuntimeError`](RuntimeError.md).[`constructor`](RuntimeError.md#constructor)

## Properties

### errorCode

> **errorCode**: [`ErrorCodesType`](../type-aliases/ErrorCodesType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/error.ts#L63)

The error code

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`errorCode`](RuntimeError.md#errorcode)

***

### file

> **file**: `File`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/fileTools.pure.ts#L73)

defines the optional file

***

### innerError?

> `optional` **innerError?**: `Error`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/error.ts#L68)

The error that caused this outer error

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`innerError`](RuntimeError.md#innererror)
