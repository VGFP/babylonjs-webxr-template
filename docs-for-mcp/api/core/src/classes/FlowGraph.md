[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraph

# Class: FlowGraph

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L88)

**`Experimental`**

Class used to represent a flow graph.
A flow graph is a graph of blocks that can be used to create complex logic.
Blocks can be added to the graph and connected to each other.
The graph can then be started, which will init and start all of its event blocks.

 FlowGraph is still in development and is subject to change.

## Constructors

### Constructor

> **new FlowGraph**(`params`): `FlowGraph`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L181)

**`Experimental`**

Construct a Flow Graph

#### Parameters

##### params

[`IFlowGraphParams`](../interfaces/IFlowGraphParams.md)

construction parameters. currently only the scene

#### Returns

`FlowGraph`

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L92)

**`Experimental`**

A human-readable name for this graph.

***

### onStateChangedObservable

> **onStateChangedObservable**: [`Observable`](Observable.md)\<[`FlowGraphState`](../enumerations/FlowGraphState.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L102)

**`Experimental`**

An observable that is triggered when the state of the graph changes.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L97)

**`Experimental`**

A unique identifier for this graph. Auto-generated if not provided.

## Accessors

### contextCount

#### Get Signature

> **get** **contextCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L289)

**`Experimental`**

Returns the number of execution contexts currently attached to this graph.

##### Returns

`number`

***

### coordinator

#### Get Signature

> **get** **coordinator**(): [`FlowGraphCoordinator`](FlowGraphCoordinator.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L141)

**`Experimental`**

The coordinator that owns this flow graph.

##### Returns

[`FlowGraphCoordinator`](FlowGraphCoordinator.md)

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L133)

**`Experimental`**

The scene associated with this flow graph.

##### Returns

[`Scene`](Scene.md)

***

### sceneEventCoordinator

#### Get Signature

> **get** **sceneEventCoordinator**(): `FlowGraphSceneEventCoordinator`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L151)

**`Experimental`**

The scene event coordinator for this graph.
Provides access to runtime event state such as currently pressed keys.

##### Returns

`FlowGraphSceneEventCoordinator`

***

### state

#### Get Signature

> **get** **state**(): [`FlowGraphState`](../enumerations/FlowGraphState.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L165)

**`Experimental`**

The state of the graph

##### Returns

[`FlowGraphState`](../enumerations/FlowGraphState.md)

#### Set Signature

> **set** **state**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L172)

**`Experimental`**

The state of the graph

##### Parameters

###### value

[`FlowGraphState`](../enumerations/FlowGraphState.md)

##### Returns

`void`

## Methods

### addBlock()

> **addBlock**(`block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L323)

**`Experimental`**

Register a block with the graph. This does not wire any connections;
it simply ensures the block is tracked so that serialization, editor
display, and validation see it even when it is not reachable from an
event block.

#### Parameters

##### block

[`FlowGraphBlock`](FlowGraphBlock.md)

the block to register

#### Returns

`void`

***

### addEventBlock()

> **addEventBlock**(`block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L381)

**`Experimental`**

Add an event block. When the graph is started, it will start listening to events
from the block and execute the graph when they are triggered.

#### Parameters

##### block

[`FlowGraphEventBlock`](FlowGraphEventBlock.md)

the event block to be added

#### Returns

`void`

***

### createContext()

> **createContext**(): [`FlowGraphContext`](FlowGraphContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L271)

**`Experimental`**

Create a context. A context represents one self contained execution for the graph, with its own variables.

#### Returns

[`FlowGraphContext`](FlowGraphContext.md)

the context, where you can get and set variables

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:513](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L513)

**`Experimental`**

Disposes of the flow graph. Cancels any pending tasks and removes all event listeners.

#### Returns

`void`

***

### getAllBlocks()

> **getAllBlocks**(): readonly [`FlowGraphBlock`](FlowGraphBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L312)

**`Experimental`**

Returns all blocks registered in this graph, including disconnected ones.

#### Returns

readonly [`FlowGraphBlock`](FlowGraphBlock.md)[]

a read-only array of all blocks

***

### getContext()

> **getContext**(`index`): [`FlowGraphContext`](FlowGraphContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L282)

**`Experimental`**

Returns the execution context at a given index

#### Parameters

##### index

`number`

the index of the context

#### Returns

[`FlowGraphContext`](FlowGraphContext.md)

the execution context at that index

***

### pause()

> **pause**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L426)

**`Experimental`**

Pauses the flow graph. Cancels pending tasks but keeps execution contexts and event blocks.
Call start() to resume.

#### Returns

`void`

***

### removeBlock()

> **removeBlock**(`block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L334)

**`Experimental`**

Remove a block from the graph. Disconnects all of its ports and, if it
is an event block, unregisters it from the event-block lists.

#### Parameters

##### block

[`FlowGraphBlock`](FlowGraphBlock.md)

the block to remove

#### Returns

`void`

***

### removeContext()

> **removeContext**(`index`): [`FlowGraphContext`](FlowGraphContext.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L299)

**`Experimental`**

Remove an execution context by index. Any pending async blocks on
the context are cleared before removal.

#### Parameters

##### index

`number`

the index of the context to remove

#### Returns

[`FlowGraphContext`](FlowGraphContext.md) \| `undefined`

the removed context, or undefined if the index was out of range

***

### serialize()

> **serialize**(`serializationObject?`, `valueSerializeFunction?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:584](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L584)

**`Experimental`**

Serializes a graph

#### Parameters

##### serializationObject?

`any` = `{}`

the object to write the values in

##### valueSerializeFunction?

(`key`, `value`, `serializationObject`) => `void`

a function to serialize complex values

#### Returns

`void`

***

### setScene()

> **setScene**(`scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L239)

**`Experimental`**

Sets a new scene for this flow graph, re-wiring all event listeners.
This is useful when the scene the flow graph should listen to changes
(e.g. when a new scene is loaded in an editor preview).
If the graph is currently running, it will be stopped first and must be
restarted manually after calling this method.

#### Parameters

##### scene

[`Scene`](Scene.md)

the new scene to attach to

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L441)

**`Experimental`**

Starts the flow graph. Initializes the event blocks and starts listening to events.
Can also be called to resume from a paused state.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L409)

**`Experimental`**

Stops the flow graph. Cancels all pending tasks and clears execution contexts,
but keeps event blocks so the graph can be restarted.

#### Returns

`void`

***

### validate()

> **validate**(): [`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:575](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L575)

**`Experimental`**

Validates the flow graph and returns all issues found.
Uses the tracked block list for complete validation including unreachable block detection.

#### Returns

[`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

The validation result containing errors and warnings.

***

### visitAllBlocks()

> **visitAllBlocks**(`visitor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraph.ts#L535)

**`Experimental`**

Executes a function in all blocks of a flow graph, starting with the event blocks.

#### Parameters

##### visitor

(`block`) => `void`

the function to execute.

#### Returns

`void`
