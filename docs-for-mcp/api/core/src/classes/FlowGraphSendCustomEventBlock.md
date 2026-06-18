[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphSendCustomEventBlock

# Class: FlowGraphSendCustomEventBlock

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L30)

A block that sends a custom event.
To receive this event you need to use the ReceiveCustomEvent block.
This block has no output, but does have inputs based on the eventData from the configuration.

## See

FlowGraphReceiveCustomEventBlock

## Extends

- `FlowGraphExecutionBlockWithOutSignal`

## Constructors

### Constructor

> **new FlowGraphSendCustomEventBlock**(`config`): `FlowGraphSendCustomEventBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L31)

#### Parameters

##### config

[`IFlowGraphSendCustomEventBlockConfiguration`](../interfaces/IFlowGraphSendCustomEventBlockConfiguration.md)

the configuration of the block

#### Returns

`FlowGraphSendCustomEventBlock`

#### Overrides

`FlowGraphExecutionBlockWithOutSignal.constructor`

## Properties

### config

> **config**: [`IFlowGraphSendCustomEventBlockConfiguration`](../interfaces/IFlowGraphSendCustomEventBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L35)

the configuration of the block

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.config`

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.dataInputs`

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.dataOutputs`

***

### error

> `readonly` **error**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L19)

An output connection that can be used to signal an error, if the block defines it.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.error`

***

### in

> `readonly` **in**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L14)

Input connection: The input signal of the block.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.in`

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.metadata`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.name`

***

### out

> `readonly` **out**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts#L15)

Output connection: The signal that is synchronous triggered when the execution of this block is done.
Note that is case of events or async you might want to use the `done` signal instead.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.out`

***

### priority

> `readonly` **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L33)

The priority of the block. Higher priority blocks will be executed first.
Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.priority`

***

### signalInputs

> **signalInputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L23)

Input connections that activate the block.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.signalInputs`

***

### signalOutputs

> **signalOutputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L27)

Output connections that can activate downstream blocks.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.signalOutputs`

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.uniqueId`

## Methods

### deserialize()

> **deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L132)

Deserializes from an object

#### Parameters

##### serializationObject

`any`

the object to deserialize from

#### Returns

`void`

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.deserialize`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L79)

#### Returns

`string`

class name of the block.

#### Overrides

`FlowGraphExecutionBlockWithOutSignal.getClassName`

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

`FlowGraphExecutionBlockWithOutSignal.getDataInput`

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

`FlowGraphExecutionBlockWithOutSignal.getDataOutput`

***

### getSignalInput()

> **getSignalInput**(`name`): [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L95)

Given a name of a signal input, return that input if it exists

#### Parameters

##### name

`string`

the name of the input

#### Returns

[`FlowGraphSignalConnection`](FlowGraphSignalConnection.md) \| `undefined`

if the input exists, the input. Otherwise, undefined.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.getSignalInput`

***

### getSignalOutput()

> **getSignalOutput**(`name`): [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L104)

Given a name of a signal output, return that input if it exists

#### Parameters

##### name

`string`

the name of the input

#### Returns

[`FlowGraphSignalConnection`](FlowGraphSignalConnection.md) \| `undefined`

if the input exists, the input. Otherwise, undefined.

#### Inherited from

`FlowGraphExecutionBlockWithOutSignal.getSignalOutput`

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

`FlowGraphExecutionBlockWithOutSignal.registerDataInput`

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

`FlowGraphExecutionBlockWithOutSignal.registerDataOutput`

***

### serialize()

> **serialize**(`serializationObject?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L62)

Serializes this block

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize in

#### Returns

`void`

#### Overrides

`FlowGraphExecutionBlockWithOutSignal.serialize`
