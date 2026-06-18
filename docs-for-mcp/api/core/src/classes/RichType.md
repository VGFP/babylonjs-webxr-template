[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RichType

# Class: RichType\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L34)

A rich type represents extra information about a type,
such as its name and a default value constructor.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new RichType**\<`T`\>(`typeName`, `defaultValue`, `animationType?`): `RichType`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L41)

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L54)

[-1] The ANIMATIONTYPE of the type, if available

***

### defaultValue

> **defaultValue**: `T`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L49)

The default value of the type.

***

### typeName

> **typeName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L45)

The name given to the type.

***

### typeTransformer

> **typeTransformer**: (`value`) => `T`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L39)

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L61)

Serializes this rich type into a serialization object.

#### Parameters

##### serializationObject

`any`

the object to serialize to

#### Returns

`void`
