[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / FlowGraphGLTFDataProvider

# Class: FlowGraphGLTFDataProvider

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/flowGraphGLTFDataProvider.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.ts#L22)

a glTF-based FlowGraph block that provides arrays with babylon object, based on the glTF tree
Can be used, for example, to get animation index from a glTF animation

## Extends

- [`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md)

## Constructors

### Constructor

> **new FlowGraphGLTFDataProvider**(`config`): `FlowGraphGLTFDataProvider`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/flowGraphGLTFDataProvider.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.ts#L35)

#### Parameters

##### config

[`IFlowGraphGLTFDataProviderBlockConfiguration`](../interfaces/IFlowGraphGLTFDataProviderBlockConfiguration.md)

#### Returns

`FlowGraphGLTFDataProvider`

#### Overrides

`FlowGraphBlock.constructor`

## Properties

### animationGroups

> `readonly` **animationGroups**: [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<[`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)[]\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/flowGraphGLTFDataProvider.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.ts#L27)

Output: an array of animation groups
Corresponds directly to the glTF animations array

***

### config?

> `optional` **config?**: [`IFlowGraphBlockConfiguration`](../../../../../core/src/interfaces/IFlowGraphBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L87)

the configuration of the block

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`config`](../../../../../core/src/classes/FlowGraphBlock.md#config)

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`dataInputs`](../../../../../core/src/classes/FlowGraphBlock.md#datainputs)

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`dataOutputs`](../../../../../core/src/classes/FlowGraphBlock.md#dataoutputs)

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`metadata`](../../../../../core/src/classes/FlowGraphBlock.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`name`](../../../../../core/src/classes/FlowGraphBlock.md#name)

***

### nodes

> `readonly` **nodes**: [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)[]\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/flowGraphGLTFDataProvider.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.ts#L33)

Output an array of (Transform) nodes
Corresponds directly to the glTF nodes array

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`uniqueId`](../../../../../core/src/classes/FlowGraphBlock.md#uniqueid)

## Methods

### deserialize()

> **deserialize**(`_serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L181)

Deserializes this block

#### Parameters

##### \_serializationObject

[`ISerializedFlowGraphBlock`](../../../../../core/src/interfaces/ISerializedFlowGraphBlock.md)

the object to deserialize from

#### Returns

`void`

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`deserialize`](../../../../../core/src/classes/FlowGraphBlock.md#deserialize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/flowGraphGLTFDataProvider.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.ts#L46)

Gets the class name of this block

#### Returns

`string`

the class name

#### Overrides

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`getClassName`](../../../../../core/src/classes/FlowGraphBlock.md#getclassname)

***

### getDataInput()

> **getDataInput**(`name`): [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L134)

Given the name of a data input, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the input

#### Returns

[`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`getDataInput`](../../../../../core/src/classes/FlowGraphBlock.md#getdatainput)

***

### getDataOutput()

> **getDataOutput**(`name`): [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L143)

Given the name of a data output, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the output

#### Returns

[`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`getDataOutput`](../../../../../core/src/classes/FlowGraphBlock.md#getdataoutput)

***

### registerDataInput()

> **registerDataInput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`T`\>

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

[`RichType`](../../../../../core/src/classes/RichType.md)\<`T`\>

the type of the input

##### defaultValue?

`T`

optional default value of the input. If not set, the rich type's default value will be used.

#### Returns

[`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`T`\>

the created connection

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`registerDataInput`](../../../../../core/src/classes/FlowGraphBlock.md#registerdatainput)

***

### registerDataOutput()

> **registerDataOutput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`T`\>

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

[`RichType`](../../../../../core/src/classes/RichType.md)\<`T`\>

the type of the input

##### defaultValue?

`T`

optional default value of the input. If not set, the rich type's default value will be used.

#### Returns

[`FlowGraphDataConnection`](../../../../../core/src/classes/FlowGraphDataConnection.md)\<`T`\>

the created connection

#### Inherited from

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`registerDataOutput`](../../../../../core/src/classes/FlowGraphBlock.md#registerdataoutput)

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

[`FlowGraphBlock`](../../../../../core/src/classes/FlowGraphBlock.md).[`serialize`](../../../../../core/src/classes/FlowGraphBlock.md#serialize)
