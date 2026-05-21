[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphCoordinator

# Class: FlowGraphCoordinator

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L46)

**`Experimental`**

This class holds all of the existing flow graphs and is responsible for creating new ones.
It also handles starting/stopping multiple graphs and communication between them through an Event Coordinator
This is the entry point for the flow graph system.
 This class is still in development and is subject to change.

## Constructors

### Constructor

> **new FlowGraphCoordinator**(`config`): `FlowGraphCoordinator`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L81)

**`Experimental`**

#### Parameters

##### config

[`IFlowGraphCoordinatorConfiguration`](../interfaces/IFlowGraphCoordinatorConfiguration.md)

the configuration of the block

#### Returns

`FlowGraphCoordinator`

## Properties

### config

> **config**: [`IFlowGraphCoordinatorConfiguration`](../interfaces/IFlowGraphCoordinatorConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L85)

**`Experimental`**

the configuration of the block

***

### dispatchEventsSynchronously

> **dispatchEventsSynchronously**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L68)

**`Experimental`**

When set to true (default) custom events will be dispatched synchronously.
This means that the events will be dispatched immediately when they are triggered.

***

### MaxEventsPerType

> `static` **MaxEventsPerType**: `number` = `30`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L52)

**`Experimental`**

The maximum number of events per type.
This is used to limit the number of events that can be created in a single scene.
This is to prevent infinite loops.

***

### MaxEventTypeExecutionPerFrame

> `static` **MaxEventTypeExecutionPerFrame**: `number` = `30`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L57)

**`Experimental`**

The maximum number of execution of a specific event in a single frame.

## Accessors

### flowGraphs

#### Get Signature

> **get** **flowGraphs**(): [`FlowGraph`](FlowGraph.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L189)

**`Experimental`**

Gets the list of flow graphs

##### Returns

[`FlowGraph`](FlowGraph.md)[]

## Methods

### createGraph()

> **createGraph**(`name?`): [`FlowGraph`](FlowGraph.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L124)

**`Experimental`**

Creates a new flow graph and adds it to the list of existing flow graphs

#### Parameters

##### name?

`string`

optional name for the new graph. If not provided, an auto-generated name is used.

#### Returns

[`FlowGraph`](FlowGraph.md)

a new flow graph

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L155)

**`Experimental`**

Disposes all graphs

#### Returns

`void`

***

### getCustomEventObservable()

> **getCustomEventObservable**(`id`): [`Observable`](Observable.md)\<`any`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L198)

**`Experimental`**

Get an observable that will be notified when the event with the given id is fired.

#### Parameters

##### id

`string`

the id of the event

#### Returns

[`Observable`](Observable.md)\<`any`\>

the observable for the event

***

### notifyCustomEvent()

> **notifyCustomEvent**(`id`, `data`, `async?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L214)

**`Experimental`**

Notifies the observable for the given event id with the given data.

#### Parameters

##### id

`string`

the id of the event

##### data

`any`

the data to send with the event

##### async?

`boolean` = `...`

if true, the event will be dispatched asynchronously

#### Returns

`void`

***

### removeGraph()

> **removeGraph**(`graph`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L135)

**`Experimental`**

Removes a flow graph from the list of existing flow graphs and disposes it

#### Parameters

##### graph

[`FlowGraph`](FlowGraph.md)

the graph to remove

#### Returns

`void`

***

### serialize()

> **serialize**(`serializationObject`, `valueSerializeFunction?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L176)

**`Experimental`**

Serializes this coordinator to a JSON object.

#### Parameters

##### serializationObject

`any`

the object to serialize to

##### valueSerializeFunction?

(`key`, `value`, `serializationObject`) => `void`

the function to use to serialize the value

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L146)

**`Experimental`**

Starts all graphs

#### Returns

`void`
