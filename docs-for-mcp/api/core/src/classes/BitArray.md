[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BitArray

# Class: BitArray

Defined in: [babylonjs-source/packages/dev/core/src/Misc/bitArray.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/bitArray.ts#L14)

An fixed size array that effectively stores boolean values where each value is a single bit of backing data.

## Remarks

All bits are initialized to false.

## Constructors

### Constructor

> **new BitArray**(`size`): `BitArray`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/bitArray.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/bitArray.ts#L21)

Creates a new bit array with a fixed size.

#### Parameters

##### size

`number`

The number of bits to store.

#### Returns

`BitArray`

## Properties

### size

> `readonly` **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/bitArray.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/bitArray.ts#L21)

The number of bits to store.

## Methods

### get()

> **get**(`bitIndex`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/bitArray.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/bitArray.ts#L30)

Gets the current value at the specified index.

#### Parameters

##### bitIndex

`number`

The index to get the value from.

#### Returns

`boolean`

The value at the specified index.

***

### set()

> **set**(`bitIndex`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/bitArray.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/bitArray.ts#L44)

Sets the value at the specified index.

#### Parameters

##### bitIndex

`number`

The index to set the value at.

##### value

`boolean`

The value to set.

#### Returns

`void`
