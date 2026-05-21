[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RuntimeError

# Class: RuntimeError

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/error.ts#L59)

Application runtime error

## Extends

- [`BaseError`](BaseError.md)

## Extended by

- [`LoadFileError`](LoadFileError.md)
- [`RequestFileError`](RequestFileError.md)
- [`ReadFileError`](ReadFileError.md)

## Constructors

### Constructor

> **new RuntimeError**(`message`, `errorCode`, `innerError?`): `RuntimeError`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/error.ts#L76)

Creates a new RuntimeError

#### Parameters

##### message

`string`

defines the message of the error

##### errorCode

[`ErrorCodesType`](../type-aliases/ErrorCodesType.md)

the error code

##### innerError?

`Error`

the error that caused the outer error

#### Returns

`RuntimeError`

#### Overrides

[`BaseError`](BaseError.md).[`constructor`](BaseError.md#constructor)

## Properties

### errorCode

> **errorCode**: [`ErrorCodesType`](../type-aliases/ErrorCodesType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/error.ts#L63)

The error code

***

### innerError?

> `optional` **innerError?**: `Error`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/error.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/error.ts#L68)

The error that caused this outer error
