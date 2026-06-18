[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphEventBlock

# Abstract Class: FlowGraphEventBlock

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L10)

A type of block that listens to an event observable and activates
its output signal when the event is triggered.

## Extends

- `FlowGraphAsyncExecutionBlock`

## Extended by

- [`FlowGraphMeshPickEventBlock`](FlowGraphMeshPickEventBlock.md)
- [`FlowGraphSceneReadyEventBlock`](FlowGraphSceneReadyEventBlock.md)
- [`FlowGraphReceiveCustomEventBlock`](FlowGraphReceiveCustomEventBlock.md)
- [`FlowGraphSceneTickEventBlock`](FlowGraphSceneTickEventBlock.md)
- [`FlowGraphPointerOutEventBlock`](FlowGraphPointerOutEventBlock.md)
- [`FlowGraphPointerOverEventBlock`](FlowGraphPointerOverEventBlock.md)
- [`FlowGraphPhysicsCollisionEventBlock`](FlowGraphPhysicsCollisionEventBlock.md)
- [`FlowGraphSoundEndedEventBlock`](FlowGraphSoundEndedEventBlock.md)
- [`FlowGraphKeyboardEventBlock`](FlowGraphKeyboardEventBlock.md)

## Constructors

### Constructor

> **new FlowGraphEventBlock**(`config?`): `FlowGraphEventBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L21)

Creates a new event block.

#### Parameters

##### config?

[`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

optional configuration

#### Returns

`FlowGraphEventBlock`

#### Overrides

`FlowGraphAsyncExecutionBlock.constructor`

## Properties

### config?

> `optional` **config?**: [`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L87)

the configuration of the block

#### Inherited from

`FlowGraphAsyncExecutionBlock.config`

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.dataInputs`

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.dataOutputs`

***

### done

> **done**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L14)

Output connection: The signal that is triggered when the asynchronous execution of this block is done.

#### Inherited from

`FlowGraphAsyncExecutionBlock.done`

***

### error

> `readonly` **error**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L19)

An output connection that can be used to signal an error, if the block defines it.

#### Inherited from

`FlowGraphAsyncExecutionBlock.error`

***

### in

> `readonly` **in**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L14)

Input connection: The input signal of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.in`

***

### initPriority

> **initPriority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L15)

the priority of initialization of this block.
For example, scene start should have a negative priority because it should be initialized last.

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.metadata`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.name`

***

### out

> `readonly` **out**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts#L15)

Output connection: The signal that is synchronous triggered when the execution of this block is done.
Note that is case of events or async you might want to use the `done` signal instead.

#### Inherited from

`FlowGraphAsyncExecutionBlock.out`

***

### priority

> `readonly` **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L33)

The priority of the block. Higher priority blocks will be executed first.
Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.

#### Inherited from

`FlowGraphAsyncExecutionBlock.priority`

***

### signalInputs

> **signalInputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L23)

Input connections that activate the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.signalInputs`

***

### signalOutputs

> **signalOutputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L27)

Output connections that can activate downstream blocks.

#### Inherited from

`FlowGraphAsyncExecutionBlock.signalOutputs`

***

### type

> `readonly` **type**: `FlowGraphEventType` = `FlowGraphEventType.NoTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L44)

The type of the event

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.uniqueId`

## Methods

### \_cancelPendingTasks()

> `abstract` **\_cancelPendingTasks**(`context`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L66)

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

#### Returns

`void`

#### Inherited from

`FlowGraphAsyncExecutionBlock._cancelPendingTasks`

***

### \_executeEvent()

> `abstract` **\_executeEvent**(`context`, `payload`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L84)

Execute the event. This function should be called by the flow graph when the event is triggered.

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the context in which the event is executed

##### payload

`any`

the payload of the event

#### Returns

`boolean`

a boolean indicating if the event should stop propagation. if false, the event will stop propagating.

***

### \_resetAfterCanceled()

> **\_resetAfterCanceled**(`context`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L61)

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

#### Returns

`void`

#### Inherited from

`FlowGraphAsyncExecutionBlock._resetAfterCanceled`

***

### deserialize()

> **deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L35)

Deserializes from an object.
Filters out the legacy "in" signal input that existed before event blocks
stopped exposing it, so old serialized graphs load without error.

#### Parameters

##### serializationObject

`any`

the object to deserialize from

#### Returns

`void`

#### Overrides

`FlowGraphAsyncExecutionBlock.deserialize`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L154)

#### Returns

`string`

the class name

#### Inherited from

`FlowGraphAsyncExecutionBlock.getClassName`

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

`FlowGraphAsyncExecutionBlock.getDataInput`

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

`FlowGraphAsyncExecutionBlock.getDataOutput`

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

`FlowGraphAsyncExecutionBlock.getSignalInput`

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

`FlowGraphAsyncExecutionBlock.getSignalOutput`

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

`FlowGraphAsyncExecutionBlock.registerDataInput`

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

`FlowGraphAsyncExecutionBlock.registerDataOutput`

***

### serialize()

> **serialize**(`serializationObject?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L112)

Serializes this block

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize in

#### Returns

`void`

#### Inherited from

`FlowGraphAsyncExecutionBlock.serialize`
