[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphPhysicsCollisionEventBlock

# Class: FlowGraphPhysicsCollisionEventBlock

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L25)

**`Experimental`**

An event block that fires when a physics collision occurs on the specified body.
Subscribes to the body's collision observable and exposes collision details
(the other body, contact point, normal, impulse, and distance) as data outputs.

## Extends

- [`FlowGraphEventBlock`](FlowGraphEventBlock.md)

## Constructors

### Constructor

> **new FlowGraphPhysicsCollisionEventBlock**(`config?`): `FlowGraphPhysicsCollisionEventBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L60)

**`Experimental`**

Constructs a new FlowGraphPhysicsCollisionEventBlock.

#### Parameters

##### config?

[`IFlowGraphPhysicsCollisionEventBlockConfiguration`](../interfaces/IFlowGraphPhysicsCollisionEventBlockConfiguration.md)

optional configuration for the block

#### Returns

`FlowGraphPhysicsCollisionEventBlock`

#### Overrides

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`constructor`](FlowGraphEventBlock.md#constructor)

## Properties

### body

> `readonly` **body**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L29)

**`Experimental`**

Input connection: The physics body to monitor for collisions.

***

### config?

> `optional` **config?**: [`IFlowGraphPhysicsCollisionEventBlockConfiguration`](../interfaces/IFlowGraphPhysicsCollisionEventBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L64)

**`Experimental`**

the configuration of the block

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`config`](FlowGraphEventBlock.md#config)

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

**`Experimental`**

The data inputs of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`dataInputs`](FlowGraphEventBlock.md#datainputs)

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

**`Experimental`**

The data outputs of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`dataOutputs`](FlowGraphEventBlock.md#dataoutputs)

***

### distance

> `readonly` **distance**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L54)

**`Experimental`**

Output connection: The penetration distance of the collision.

***

### done

> **done**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L14)

**`Experimental`**

Output connection: The signal that is triggered when the asynchronous execution of this block is done.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`done`](FlowGraphEventBlock.md#done)

***

### error

> `readonly` **error**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L19)

**`Experimental`**

An output connection that can be used to signal an error, if the block defines it.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`error`](FlowGraphEventBlock.md#error)

***

### impulse

> `readonly` **impulse**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L49)

**`Experimental`**

Output connection: The impulse magnitude computed by the physics solver.

***

### in

> `readonly` **in**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L14)

**`Experimental`**

Input connection: The input signal of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`in`](FlowGraphEventBlock.md#in)

***

### initPriority

> **initPriority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L15)

**`Experimental`**

the priority of initialization of this block.
For example, scene start should have a negative priority because it should be initialized last.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`initPriority`](FlowGraphEventBlock.md#initpriority)

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

**`Experimental`**

Metadata that can be used by the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`metadata`](FlowGraphEventBlock.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

**`Experimental`**

The name of the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`name`](FlowGraphEventBlock.md#name)

***

### normal

> `readonly` **normal**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L44)

**`Experimental`**

Output connection: The world-space collision normal direction.

***

### otherBody

> `readonly` **otherBody**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L34)

**`Experimental`**

Output connection: The other physics body involved in the collision.

***

### out

> `readonly` **out**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts#L15)

**`Experimental`**

Output connection: The signal that is synchronous triggered when the execution of this block is done.
Note that is case of events or async you might want to use the `done` signal instead.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`out`](FlowGraphEventBlock.md#out)

***

### point

> `readonly` **point**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L39)

**`Experimental`**

Output connection: The world-space contact point of the collision.

***

### priority

> `readonly` **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L33)

**`Experimental`**

The priority of the block. Higher priority blocks will be executed first.
Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`priority`](FlowGraphEventBlock.md#priority)

***

### signalInputs

> **signalInputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L23)

**`Experimental`**

Input connections that activate the block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`signalInputs`](FlowGraphEventBlock.md#signalinputs)

***

### signalOutputs

> **signalOutputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L27)

**`Experimental`**

Output connections that can activate downstream blocks.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`signalOutputs`](FlowGraphEventBlock.md#signaloutputs)

***

### type

> `readonly` **type**: `FlowGraphEventType` = `FlowGraphEventType.NoTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L44)

**`Experimental`**

The type of the event

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`type`](FlowGraphEventBlock.md#type)

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

**`Experimental`**

A randomly generated GUID for each block.

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`uniqueId`](FlowGraphEventBlock.md#uniqueid)

## Methods

### \_resetAfterCanceled()

> **\_resetAfterCanceled**(`context`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L61)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphEventBlock.ts#L35)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPhysicsCollisionEventBlock.ts#L141)

**`Experimental`**

#### Returns

`string`

class name of the block.

#### Overrides

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`getClassName`](FlowGraphEventBlock.md#getclassname)

***

### getDataInput()

> **getDataInput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L134)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L143)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L95)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L104)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L110)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L123)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L112)

**`Experimental`**

Serializes this block

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize in

#### Returns

`void`

#### Inherited from

[`FlowGraphEventBlock`](FlowGraphEventBlock.md).[`serialize`](FlowGraphEventBlock.md#serialize)
