[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphMeshPickEventBlock

# Class: FlowGraphMeshPickEventBlock

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L33)

A block that activates when a mesh is picked.

## Extends

- [`FlowGraphEventBlock`](FlowGraphEventBlock.md)

## Constructors

### Constructor

> **new FlowGraphMeshPickEventBlock**(`config?`): `FlowGraphMeshPickEventBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L69)

#### Parameters

##### config?

[`IFlowGraphMeshPickEventBlockConfiguration`](../interfaces/IFlowGraphMeshPickEventBlockConfiguration.md)

the configuration of the block

#### Returns

`FlowGraphMeshPickEventBlock`

#### Overrides

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`constructor`](FlowGraphEventBlock.md#constructor)

## Properties

### asset

> `readonly` **asset**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L37)

Input connection: The mesh to listen to.

***

### config?

> `optional` **config?**: [`IFlowGraphMeshPickEventBlockConfiguration`](../interfaces/IFlowGraphMeshPickEventBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L73)

the configuration of the block

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`config`](FlowGraphEventBlock.md#config)

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`dataInputs`](FlowGraphEventBlock.md#datainputs)

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`dataOutputs`](FlowGraphEventBlock.md#dataoutputs)

***

### done

> **done**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L14)

Output connection: The signal that is triggered when the asynchronous execution of this block is done.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`done`](FlowGraphEventBlock.md#done)

***

### error

> `readonly` **error**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L19)

An output connection that can be used to signal an error, if the block defines it.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`error`](FlowGraphEventBlock.md#error)

***

### in

> `readonly` **in**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L14)

Input connection: The input signal of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`in`](FlowGraphEventBlock.md#in)

***

### initPriority

> **initPriority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L15)

the priority of initialization of this block.
For example, scene start should have a negative priority because it should be initialized last.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`initPriority`](FlowGraphEventBlock.md#initpriority)

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`metadata`](FlowGraphEventBlock.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`name`](FlowGraphEventBlock.md#name)

***

### out

> `readonly` **out**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts#L15)

Output connection: The signal that is synchronous triggered when the execution of this block is done.
Note that is case of events or async you might want to use the `done` signal instead.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`out`](FlowGraphEventBlock.md#out)

***

### pickedMesh

> `readonly` **pickedMesh**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L57)

Output connection: The picked mesh. Possibly NOT the same as the asset (could be a descendant).

***

### pickedPoint

> `readonly` **pickedPoint**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L42)

Output connection: The picked point.

***

### pickOrigin

> `readonly` **pickOrigin**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L47)

Output connection: The picked origin.

***

### pointerId

> `readonly` **pointerId**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L52)

Output connection: The pointer id.

***

### pointerType

> `readonly` **pointerType**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`PointerEventTypes`](PointerEventTypes.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L62)

Input connection: The type of the pointer event.

***

### priority

> `readonly` **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L33)

The priority of the block. Higher priority blocks will be executed first.
Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`priority`](FlowGraphEventBlock.md#priority)

***

### signalInputs

> **signalInputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L23)

Input connections that activate the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`signalInputs`](FlowGraphEventBlock.md#signalinputs)

***

### signalOutputs

> **signalOutputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L27)

Output connections that can activate downstream blocks.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`signalOutputs`](FlowGraphEventBlock.md#signaloutputs)

***

### type

> `readonly` **type**: `FlowGraphEventType` = `FlowGraphEventType.MeshPick`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L67)

the type of the event this block reacts to

#### Overrides

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`type`](FlowGraphEventBlock.md#type)

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`uniqueId`](FlowGraphEventBlock.md#uniqueid)

## Methods

### \_executeEvent()

> **\_executeEvent**(`context`, `pickedInfo`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L88)

Execute the event. This function should be called by the flow graph when the event is triggered.

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the context in which the event is executed

##### pickedInfo

[`PointerInfo`](PointerInfo.md)

#### Returns

`boolean`

a boolean indicating if the event should stop propagation. if false, the event will stop propagating.

#### Overrides

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`_executeEvent`](FlowGraphEventBlock.md#_executeevent)

***

### \_getReferencedMesh()

> **\_getReferencedMesh**(`context`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L84)

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

#### Returns

[`AbstractMesh`](AbstractMesh.md)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`_resetAfterCanceled`](FlowGraphEventBlock.md#_resetaftercanceled)

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

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`deserialize`](FlowGraphEventBlock.md#deserialize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L139)

#### Returns

`string`

class name of the block.

#### Overrides

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`getClassName`](FlowGraphEventBlock.md#getclassname)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`getDataInput`](FlowGraphEventBlock.md#getdatainput)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`getDataOutput`](FlowGraphEventBlock.md#getdataoutput)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`getSignalInput`](FlowGraphEventBlock.md#getsignalinput)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`getSignalOutput`](FlowGraphEventBlock.md#getsignaloutput)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`registerDataInput`](FlowGraphEventBlock.md#registerdatainput)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`registerDataOutput`](FlowGraphEventBlock.md#registerdataoutput)

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

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`serialize`](FlowGraphEventBlock.md#serialize)
