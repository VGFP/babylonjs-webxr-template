[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphKeyboardEventBlock

# Abstract Class: FlowGraphKeyboardEventBlock

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L26)

Shared base class for keyboard event blocks (KeyDown / KeyUp).

Provides a `key` input filter, output data connections for the key code,
key string, modifier states, and a platform-aware `commandOrCtrl` flag.
Subclasses only need to set their event type and class name.

## Extends

- [`FlowGraphEventBlock`](FlowGraphEventBlock.md)

## Extended by

- [`FlowGraphKeyDownEventBlock`](FlowGraphKeyDownEventBlock.md)
- [`FlowGraphKeyUpEventBlock`](FlowGraphKeyUpEventBlock.md)

## Properties

### altKey

> `readonly` **altKey**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L56)

Output connection: whether the Alt key (Option on macOS) was held.

***

### commandOrCtrl

> `readonly` **commandOrCtrl**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L67)

Output connection: platform-aware "command or control" modifier.
True when Meta (Cmd) is held on macOS, or Ctrl is held on Windows/Linux.

***

### config?

> `optional` **config?**: [`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L87)

the configuration of the block

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`config`](FlowGraphEventBlock.md#config)

***

### ctrlKey

> `readonly` **ctrlKey**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L51)

Output connection: whether the Ctrl key was held.

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

### key

> `readonly` **key**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L31)

Input connection: optional key code to filter on (e.g. "KeyA", "Space", "ShiftLeft").
Uses `KeyboardEvent.code` values. Leave empty / disconnected to fire on any key event.

***

### keyCode

> `readonly` **keyCode**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L36)

Output connection: the `KeyboardEvent.code` of the key.

***

### keyValue

> `readonly` **keyValue**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L41)

Output connection: the `KeyboardEvent.key` string (printable character or key name).

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`metadata`](FlowGraphEventBlock.md#metadata)

***

### metaKey

> `readonly` **metaKey**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L61)

Output connection: whether the Meta key (Windows / Cmd) was held.

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

### priority

> `readonly` **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L33)

The priority of the block. Higher priority blocks will be executed first.
Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`priority`](FlowGraphEventBlock.md#priority)

***

### shiftKey

> `readonly` **shiftKey**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L46)

Output connection: whether the Shift key was held.

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

> `readonly` **type**: `FlowGraphEventType` = `FlowGraphEventType.NoTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L44)

The type of the event

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`type`](FlowGraphEventBlock.md#type)

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`uniqueId`](FlowGraphEventBlock.md#uniqueid)

## Methods

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L154)

#### Returns

`string`

the class name

#### Inherited from

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
