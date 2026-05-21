[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmartArray

# Class: SmartArray\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L19)

Defines an GC Friendly array where the backfield array do not shrink to prevent over allocations.

## Extended by

- [`SmartArrayNoDuplicate`](SmartArrayNoDuplicate.md)

## Type Parameters

### T

`T`

## Implements

- [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<`T`\>

## Constructors

### Constructor

> **new SmartArray**\<`T`\>(`capacity`): `SmartArray`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L36)

Instantiates a Smart Array.

#### Parameters

##### capacity

`number`

defines the default capacity of the array.

#### Returns

`SmartArray`\<`T`\>

## Properties

### data

> **data**: `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L23)

The full set of data from the array.

#### Implementation of

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md).[`data`](../interfaces/ISmartArrayLike.md#data)

***

### length

> **length**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L28)

The active length of the array.

#### Implementation of

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md).[`length`](../interfaces/ISmartArrayLike.md#length)

## Methods

### concat()

> **concat**(`array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L93)

Concats the active data with a given array.

#### Parameters

##### array

`any`

defines the data to concatenate with.

#### Returns

`void`

***

### contains()

> **contains**(`value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L126)

Returns whether an element is part of the active data.

#### Parameters

##### value

`T`

defines the value to look for

#### Returns

`boolean`

true if found in the active data otherwise false

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L81)

Releases all the data from the array as well as the array.

#### Returns

`void`

***

### forEach()

> **forEach**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L57)

Iterates over the active data and apply the lambda to them.

#### Parameters

##### func

(`content`) => `void`

defines the action to apply on each value.

#### Returns

`void`

***

### indexOf()

> **indexOf**(`value`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L111)

Returns the position of a value in the active data.

#### Parameters

##### value

`T`

defines the value to find the index for

#### Returns

`number`

the index if found in the active data otherwise -1

***

### push()

> **push**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L45)

Pushes a value at the end of the active data.

#### Parameters

##### value

`T`

defines the object to push in the array.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L74)

Resets the active data to an empty array.

#### Returns

`void`

***

### sort()

> **sort**(`compareFn`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/smartArray.ts#L67)

Sorts the full sets of data.

#### Parameters

##### compareFn

(`a`, `b`) => `number`

defines the comparison function to apply.

#### Returns

`void`
