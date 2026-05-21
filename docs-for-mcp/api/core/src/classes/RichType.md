[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RichType

# Class: RichType\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L32)

A rich type represents extra information about a type,
such as its name and a default value constructor.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new RichType**\<`T`\>(`typeName`, `defaultValue`, `animationType?`): `RichType`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L39)

#### Parameters

##### typeName

`string`

The name given to the type.

##### defaultValue

`T`

The default value of the type.

##### animationType?

`number` = `-1`

[-1] The ANIMATIONTYPE of the type, if available

#### Returns

`RichType`\<`T`\>

## Properties

### animationType

> **animationType**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L52)

[-1] The ANIMATIONTYPE of the type, if available

***

### defaultValue

> **defaultValue**: `T`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L47)

The default value of the type.

***

### typeName

> **typeName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L43)

The name given to the type.

***

### typeTransformer

> **typeTransformer**: (`value`) => `T`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L37)

A function that can be used to transform a value of any type into a value of this rich type.
This can be used, for example, between vector4 and quaternion.

#### Parameters

##### value

`any`

#### Returns

`T`

## Methods

### serialize()

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L59)

Serializes this rich type into a serialization object.

#### Parameters

##### serializationObject

`any`

the object to serialize to

#### Returns

`void`
