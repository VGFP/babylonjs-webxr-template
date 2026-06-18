[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RequestFileError

# Class: RequestFileError

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/fileTools.pure.ts#L48)

## Ignore

## Extends

- [`RuntimeError`](RuntimeError.md)

## Constructors

### Constructor

> **new RequestFileError**(`message`, `request`): `RequestFileError`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/fileTools.pure.ts#L54)

Creates a new LoadFileError

#### Parameters

##### message

`string`

defines the message of the error

##### request

[`WebRequest`](WebRequest.md)

defines the optional web request

#### Returns

`RequestFileError`

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

### innerError?

> `optional` **innerError?**: `Error`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/error.ts#L68)

The error that caused this outer error

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`innerError`](RuntimeError.md#innererror)

***

### request

> **request**: [`WebRequest`](WebRequest.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/fileTools.pure.ts#L56)

defines the optional web request
