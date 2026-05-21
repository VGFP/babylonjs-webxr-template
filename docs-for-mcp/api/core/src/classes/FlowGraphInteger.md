[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphInteger

# Class: FlowGraphInteger

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L6)

Class that represents an integer value.

## Constructors

### Constructor

> **new FlowGraphInteger**(`value`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L15)

#### Parameters

##### value

`number`

#### Returns

`FlowGraphInteger`

## Properties

### value

> `readonly` **value**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L13)

The value of the integer. Its type
is a javascript number. Shouldn't be
directly modified - it is populated by
the constructor.

***

### ClassName

> `static` **ClassName**: `string` = `"FlowGraphInteger"`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L81)

## Methods

### add()

> **add**(`other`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L33)

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L60)

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L77)

Compares two integers for equality.

#### Parameters

##### other

`FlowGraphInteger`

the other integer to compare

#### Returns

`boolean`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L68)

The class name of this type.

#### Returns

`string`

***

### multiply()

> **multiply**(`other`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L51)

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L42)

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L92)

#### Returns

`string`

***

### FromValue()

> `static` **FromValue**(`value`): `FlowGraphInteger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphInteger.ts#L88)

Parses a FlowGraphInteger from a serialization object.

#### Parameters

##### value

`number`

te number to parse

#### Returns

`FlowGraphInteger`
