[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmartArrayNoDuplicate

# Class: SmartArrayNoDuplicate\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L138)

Defines an GC Friendly array where the backfield array do not shrink to prevent over allocations.
The data in this array can only be present once

## Extends

- [`SmartArray`](SmartArray.md)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new SmartArrayNoDuplicate**\<`T`\>(`capacity`): `SmartArrayNoDuplicate`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L36)

Instantiates a Smart Array.

#### Parameters

##### capacity

`number`

defines the default capacity of the array.

#### Returns

`SmartArrayNoDuplicate`\<`T`\>

#### Inherited from

[`SmartArray`](SmartArray.md).[`constructor`](SmartArray.md#constructor)

## Properties

### data

> **data**: `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L23)

The full set of data from the array.

#### Inherited from

[`SmartArray`](SmartArray.md).[`data`](SmartArray.md#data)

***

### length

> **length**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L28)

The active length of the array.

#### Inherited from

[`SmartArray`](SmartArray.md).[`length`](SmartArray.md#length)

## Methods

### concat()

> **concat**(`array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L93)

Concats the active data with a given array.

#### Parameters

##### array

`any`

defines the data to concatenate with.

#### Returns

`void`

#### Inherited from

[`SmartArray`](SmartArray.md).[`concat`](SmartArray.md#concat)

***

### concatWithNoDuplicate()

> **concatWithNoDuplicate**(`array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L183)

Concats the active data with a given array.
This ensures no duplicate will be present in the result.

#### Parameters

##### array

`any`

defines the data to concatenate with.

#### Returns

`void`

***

### contains()

> **contains**(`value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L126)

Returns whether an element is part of the active data.

#### Parameters

##### value

`T`

defines the value to look for

#### Returns

`boolean`

true if found in the active data otherwise false

#### Inherited from

[`SmartArray`](SmartArray.md).[`contains`](SmartArray.md#contains)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L81)

Releases all the data from the array as well as the array.

#### Returns

`void`

#### Inherited from

[`SmartArray`](SmartArray.md).[`dispose`](SmartArray.md#dispose)

***

### forEach()

> **forEach**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L57)

Iterates over the active data and apply the lambda to them.

#### Parameters

##### func

(`content`) => `void`

defines the action to apply on each value.

#### Returns

`void`

#### Inherited from

[`SmartArray`](SmartArray.md).[`forEach`](SmartArray.md#foreach)

***

### indexOf()

> **indexOf**(`value`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L111)

Returns the position of a value in the active data.

#### Parameters

##### value

`T`

defines the value to find the index for

#### Returns

`number`

the index if found in the active data otherwise -1

#### Inherited from

[`SmartArray`](SmartArray.md).[`indexOf`](SmartArray.md#indexof)

***

### push()

> **push**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L146)

Pushes a value at the end of the active data.
THIS DOES NOT PREVENT DUPPLICATE DATA

#### Parameters

##### value

`T`

defines the object to push in the array.

#### Returns

`void`

#### Overrides

[`SmartArray`](SmartArray.md).[`push`](SmartArray.md#push)

***

### pushNoDuplicate()

> **pushNoDuplicate**(`value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L162)

Pushes a value at the end of the active data.
If the data is already present, it won t be added again

#### Parameters

##### value

`T`

defines the object to push in the array.

#### Returns

`boolean`

true if added false if it was already present

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L173)

Resets the active data to an empty array.

#### Returns

`void`

#### Overrides

[`SmartArray`](SmartArray.md).[`reset`](SmartArray.md#reset)

***

### sort()

> **sort**(`compareFn`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/smartArray.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/smartArray.ts#L67)

Sorts the full sets of data.

#### Parameters

##### compareFn

(`a`, `b`) => `number`

defines the comparison function to apply.

#### Returns

`void`

#### Inherited from

[`SmartArray`](SmartArray.md).[`sort`](SmartArray.md#sort)
