[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphInteger

# Class: FlowGraphInteger

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:7](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L7)

Class that represents an integer value.

## Constructors

### Constructor

> **new FlowGraphInteger**(`value`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L16)

#### Parameters

##### value

`number`

#### Returns

`FlowGraphInteger`

## Properties

### value

> `readonly` **value**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L14)

The value of the integer. Its type
is a javascript number. Shouldn't be
directly modified - it is populated by
the constructor.

***

### ClassName

> `static` **ClassName**: `string` = `"FlowGraphInteger"`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L83)

The class name of this type

## Methods

### add()

> **add**(`other`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L34)

Adds two integers together.

#### Parameters

##### other

`FlowGraphInteger`

the other integer to add

#### Returns

`FlowGraphInteger`

a FlowGraphInteger with the result of the addition

***

### divide()

> **divide**(`other`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L61)

Divides two integers.

#### Parameters

##### other

`FlowGraphInteger`

the other integer to divide

#### Returns

`FlowGraphInteger`

a FlowGraphInteger with the result of the division

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L78)

Compares two integers for equality.

#### Parameters

##### other

`FlowGraphInteger`

the other integer to compare

#### Returns

`boolean`

true if the integers are equal

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L69)

The class name of this type.

#### Returns

`string`

***

### multiply()

> **multiply**(`other`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L52)

Multiplies two integers.

#### Parameters

##### other

`FlowGraphInteger`

the other integer to multiply

#### Returns

`FlowGraphInteger`

a FlowGraphInteger with the result of the multiplication

***

### subtract()

> **subtract**(`other`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L43)

Subtracts two integers.

#### Parameters

##### other

`FlowGraphInteger`

the other integer to subtract

#### Returns

`FlowGraphInteger`

a FlowGraphInteger with the result of the subtraction

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L98)

Returns a string representation of this integer

#### Returns

`string`

the string representation

***

### FromValue()

> `static` **FromValue**(`value`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.pure.ts#L90)

Parses a FlowGraphInteger from a serialization object.

#### Parameters

##### value

`number`

te number to parse

#### Returns

`FlowGraphInteger`

a new FlowGraphInteger
