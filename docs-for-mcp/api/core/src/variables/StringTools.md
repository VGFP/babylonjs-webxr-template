[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StringTools

# Variable: StringTools

> `const` **StringTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringTools.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/stringTools.ts#L130)

Helper to manipulate strings

## Type Declaration

### Decode

> **Decode**: (`buffer`) => `string`

Decodes a buffer into a string

#### Parameters

##### buffer

`Uint8Array`\<`ArrayBufferLike`\> \| `Uint16Array`\<`ArrayBufferLike`\>

The buffer to decode

#### Returns

`string`

The decoded string

### DecodeBase64ToBinary

> **DecodeBase64ToBinary**: (`base64Data`) => `ArrayBuffer`

Converts a given base64 string into an ArrayBuffer of raw byte data

#### Parameters

##### base64Data

`string`

The base64 encoded string to decode

#### Returns

`ArrayBuffer`

ArrayBuffer of byte data

### DecodeBase64ToString

> **DecodeBase64ToString**: (`base64Data`) => `string`

Converts a given base64 string as an ASCII encoded stream of data

#### Parameters

##### base64Data

`string`

The base64 encoded string to decode

#### Returns

`string`

Decoded ASCII string

### EncodeArrayBufferToBase64

> **EncodeArrayBufferToBase64**: (`buffer`) => `string`

Encode a buffer to a base64 string

#### Parameters

##### buffer

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

defines the buffer to encode

#### Returns

`string`

the encoded string

### ~~EndsWith~~

> **EndsWith**: (`str`, `suffix`) => `boolean`

Checks for a matching suffix at the end of a string (for ES5 and lower)

#### Parameters

##### str

`string`

Source string

##### suffix

`string`

Suffix to search for in the source string

#### Returns

`boolean`

Boolean indicating whether the suffix was found (true) or not (false)

#### Deprecated

Please use native string function instead

### PadNumber

> **PadNumber**: (`num`, `length`) => `string`

Converts a number to string and pads with preceding zeroes until it is of specified length.

#### Parameters

##### num

`number`

the number to convert and pad

##### length

`number`

the expected length of the string

#### Returns

`string`

the padded string

### ~~StartsWith~~

> **StartsWith**: (`str`, `suffix`) => `boolean`

Checks for a matching suffix at the beginning of a string (for ES5 and lower)

#### Parameters

##### str

`string`

Source string

##### suffix

`string`

Suffix to search for in the source string

#### Returns

`boolean`

Boolean indicating whether the suffix was found (true) or not (false)

#### Deprecated

Please use native string function instead
