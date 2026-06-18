[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphGetPropertyBlock

# Class: FlowGraphGetPropertyBlock\<P, O\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L40)

This block will deliver a property of an asset, based on the property name and an input asset.
The property name can include dots ("."), which will be interpreted as a path to the property.

For example, with an input of a mesh asset, the property name "position.x" will deliver the x component of the position of the mesh.

Note that it is recommended to input the object on which you are working on (i.e. a material) rather than providing a mesh as object and then getting the material from it.

## Extends

- `FlowGraphCachedOperationBlock`\<`P`\>

## Type Parameters

### P

`P` *extends* `any`

### O

`O` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)

## Constructors

### Constructor

> **new FlowGraphGetPropertyBlock**\<`P`, `O`\>(`config`): `FlowGraphGetPropertyBlock`\<`P`, `O`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L61)

Constructs a new FlowGraphGetPropertyBlock.

#### Parameters

##### config

[`IFlowGraphGetPropertyBlockConfiguration`](../interfaces/IFlowGraphGetPropertyBlockConfiguration.md)\<`O`\>

the configuration of the block

#### Returns

`FlowGraphGetPropertyBlock`\<`P`, `O`\>

#### Overrides

`FlowGraphCachedOperationBlock<P>.constructor`

## Properties

### config

> **config**: [`IFlowGraphGetPropertyBlockConfiguration`](../interfaces/IFlowGraphGetPropertyBlockConfiguration.md)\<`O`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L65)

the configuration of the block

#### Inherited from

`FlowGraphCachedOperationBlock.config`

***

### customGetFunction

> `readonly` **customGetFunction**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<(`target`, `propertyName`, `context`) => `P` \| `undefined`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L55)

Input connection: A function that can be used to get the value of the property.
This will be used if defined, instead of the default get function.

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

### isValid

> `readonly` **isValid**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts#L22)

Output connection: Whether the value is valid.

#### Inherited from

[`FlowGraphAddBlock`](FlowGraphAddBlock.md).[`isValid`](FlowGraphAddBlock.md#isvalid)

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

> `readonly` **object**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`AssetType`](../type-aliases/AssetType.md)\<`O`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L44)

Input connection: The asset from which the property will be retrieved

***

### propertyName

> `readonly` **propertyName**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L49)

Input connection: The name of the property that will be set

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

### \_doOperation()

> **\_doOperation**(`context`): `P` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L78)

Retrieves the property value from the target object.

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the flow graph context

#### Returns

`P` \| `undefined`

the property value, or undefined if the target or property name is not set

#### Overrides

`FlowGraphCachedOperationBlock._doOperation`

***

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.pure.ts#L107)

Returns the class name of this block.

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
