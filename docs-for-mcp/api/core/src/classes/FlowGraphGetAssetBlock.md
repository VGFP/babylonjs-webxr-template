[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphGetAssetBlock

# Class: FlowGraphGetAssetBlock\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L41)

A block that will deliver an asset as an output, based on its type and place in the assets index.

The assets are loaded from the assetsContext defined in the context running this block. The assetsContext is a class extending AbstractClass,
meaning it can be a Scene, an AssetsContainers, and any other class that extends AbstractClass.

## Extends

- [`FlowGraphBlock`](FlowGraphBlock.md)

## Type Parameters

### T

`T` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)

## Constructors

### Constructor

> **new FlowGraphGetAssetBlock**\<`T`\>(`config`): `FlowGraphGetAssetBlock`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L57)

#### Parameters

##### config

[`IFlowGraphGetAssetBlockConfiguration`](../interfaces/IFlowGraphGetAssetBlockConfiguration.md)\<`T`\>

the configuration of the block

#### Returns

`FlowGraphGetAssetBlock`\<`T`\>

#### Overrides

`FlowGraphBlock.constructor`

## Properties

### config

> **config**: [`IFlowGraphGetAssetBlockConfiguration`](../interfaces/IFlowGraphGetAssetBlockConfiguration.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L61)

the configuration of the block

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`config`](FlowGraphBlock.md#config)

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`dataInputs`](FlowGraphBlock.md#datainputs)

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`dataOutputs`](FlowGraphBlock.md#dataoutputs)

***

### index

> `readonly` **index**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`FlowGraphNumber`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L55)

Input connection: The index of the asset in the corresponding array in the assets context.

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`metadata`](FlowGraphBlock.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`name`](FlowGraphBlock.md#name)

***

### type

> `readonly` **type**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L50)

Input connection: The type of the asset.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`uniqueId`](FlowGraphBlock.md#uniqueid)

***

### value

> `readonly` **value**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`AssetType`](../type-aliases/AssetType.md)\<`T`\>\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L45)

Output connection: The value of the property.

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`deserialize`](FlowGraphBlock.md#deserialize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L81)

Gets the class name of this block

#### Returns

`string`

the class name

#### Overrides

[`FlowGraphBlock`](FlowGraphBlock.md).[`getClassName`](FlowGraphBlock.md#getclassname)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`getDataInput`](FlowGraphBlock.md#getdatainput)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`getDataOutput`](FlowGraphBlock.md#getdataoutput)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`registerDataInput`](FlowGraphBlock.md#registerdatainput)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`registerDataOutput`](FlowGraphBlock.md#registerdataoutput)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`serialize`](FlowGraphBlock.md#serialize)
