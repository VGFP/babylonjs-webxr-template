[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphJsonPointerParserBlock

# Class: FlowGraphJsonPointerParserBlock\<P, O\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L43)

This block will take a JSON pointer and parse it to get the value from the JSON object.
The output is an object and a property name.
Optionally, the block can also output the value of the property. This is configurable.

## Extends

- `FlowGraphCachedOperationBlock`\<`P`\>

## Type Parameters

### P

`P` *extends* `any`

### O

`O` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)

## Constructors

### Constructor

> **new FlowGraphJsonPointerParserBlock**\<`P`, `O`\>(`config`): `FlowGraphJsonPointerParserBlock`\<`P`, `O`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L74)

#### Parameters

##### config

[`IFlowGraphJsonPointerParserBlockConfiguration`](../interfaces/IFlowGraphJsonPointerParserBlockConfiguration.md)

the configuration of the block

#### Returns

`FlowGraphJsonPointerParserBlock`\<`P`, `O`\>

#### Overrides

`FlowGraphCachedOperationBlock<P>.constructor`

## Properties

### config

> **config**: [`IFlowGraphJsonPointerParserBlockConfiguration`](../interfaces/IFlowGraphJsonPointerParserBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L78)

the configuration of the block

#### Inherited from

`FlowGraphCachedOperationBlock.config`

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

`FlowGraphCachedOperationBlock.dataInputs`

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

`FlowGraphCachedOperationBlock.dataOutputs`

***

### generateAnimationsFunction

> `readonly` **generateAnimationsFunction**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<() => (`keys`, `fps`, `easingFunction?`) => [`Animation`](Animation.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L67)

Output connection: A function that can be used to get the interpolation animation property info.

***

### getterFunction

> `readonly` **getterFunction**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<(`target`, `propertyName`, `context`) => `P` \| `undefined`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L62)

Output connection: A function that can be used to get the value of the property.

***

### isValid

> `readonly` **isValid**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts#L22)

Output connection: Whether the value is valid.

#### Inherited from

`FlowGraphCachedOperationBlock.isValid`

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

`FlowGraphCachedOperationBlock.metadata`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

`FlowGraphCachedOperationBlock.name`

***

### object

> `readonly` **object**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`O`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L47)

Output connection: The object that contains the property.

***

### propertyName

> `readonly` **propertyName**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L52)

Output connection: The property name.

***

### setterFunction

> `readonly` **setterFunction**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<(`target`, `propertyName`, `value`, `context`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L57)

Output connection: A function that can be used to update the value of the property.

***

### templateComponent

> `readonly` **templateComponent**: [`FlowGraphPathConverterComponent`](FlowGraphPathConverterComponent.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L72)

The component with the templated inputs for the provided path.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

`FlowGraphCachedOperationBlock.uniqueId`

***

### value

> `readonly` **value**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`P`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts#L17)

The output of the operation

#### Inherited from

`FlowGraphCachedOperationBlock.value`

## Methods

### deserialize()

> **deserialize**(`_serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L181)

Deserializes this block

#### Parameters

##### \_serializationObject

[`ISerializedFlowGraphBlock`](../interfaces/ISerializedFlowGraphBlock.md)

the object to deserialize from

#### Returns

`void`

#### Inherited from

`FlowGraphCachedOperationBlock.deserialize`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L172)

Gets the class name of this block

#### Returns

`string`

the class name

#### Overrides

`FlowGraphCachedOperationBlock.getClassName`

***

### getDataInput()

> **getDataInput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L134)

Given the name of a data input, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the input

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

`FlowGraphCachedOperationBlock.getDataInput`

***

### getDataOutput()

> **getDataOutput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L143)

Given the name of a data output, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the output

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

`FlowGraphCachedOperationBlock.getDataOutput`

***

### registerDataInput()

> **registerDataInput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L110)

Registers a data input on the block.

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

the name of the input

##### richType

[`RichType`](RichType.md)\<`T`\>

the type of the input

##### defaultValue?

`T`

optional default value of the input. If not set, the rich type's default value will be used.

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

the created connection

#### Inherited from

`FlowGraphCachedOperationBlock.registerDataInput`

***

### registerDataOutput()

> **registerDataOutput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L123)

Registers a data output on the block.

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

the name of the input

##### richType

[`RichType`](RichType.md)\<`T`\>

the type of the input

##### defaultValue?

`T`

optional default value of the input. If not set, the rich type's default value will be used.

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

the created connection

#### Inherited from

`FlowGraphCachedOperationBlock.registerDataOutput`

***

### serialize()

> **serialize**(`serializationObject?`, `_valueSerializeFunction?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L152)

Serializes this block

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize to

##### \_valueSerializeFunction?

(`key`, `value`, `serializationObject`) => `any`

a function that serializes a specific value

#### Returns

`void`

#### Inherited from

`FlowGraphCachedOperationBlock.serialize`
