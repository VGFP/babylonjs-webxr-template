[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadFileError

# Class: LoadFileError

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/fileTools.ts#L24)

## Ignore

## Extends

- [`RuntimeError`](RuntimeError.md)

## Constructors

### Constructor

> **new LoadFileError**(`message`, `object?`): `LoadFileError`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/fileTools.ts#L33)

Creates a new LoadFileError

#### Parameters

##### message

`string`

defines the message of the error

##### object?

[`WebRequest`](WebRequest.md) \| `File`

defines the optional web request

#### Returns

`LoadFileError`

#### Overrides

[`RuntimeError`](RuntimeError.md).[`constructor`](RuntimeError.md#constructor)

## Properties

### errorCode

> **errorCode**: [`ErrorCodesType`](../type-aliases/ErrorCodesType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/error.ts#L63)

The error code

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`errorCode`](RuntimeError.md#errorcode)

***

### file?

> `optional` **file?**: `File`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/fileTools.ts#L26)

***

### innerError?

> `optional` **innerError?**: `Error`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/error.ts#L68)

The error that caused this outer error

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`innerError`](RuntimeError.md#innererror)

***

### request?

> `optional` **request?**: [`WebRequest`](WebRequest.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/fileTools.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/fileTools.ts#L25)
