[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphPlayAnimationBlock

# Class: FlowGraphPlayAnimationBlock

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L17)

**`Experimental`**

A block that plays an animation on an animatable object.

## Extends

- `FlowGraphAsyncExecutionBlock`

## Constructors

### Constructor

> **new FlowGraphPlayAnimationBlock**(`config?`): `FlowGraphPlayAnimationBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L66)

**`Experimental`**

#### Parameters

##### config?

[`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

the configuration of the block

#### Returns

`FlowGraphPlayAnimationBlock`

#### Overrides

`FlowGraphAsyncExecutionBlock.constructor`

## Properties

### animation

> `readonly` **animation**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Animation`](Animation.md) \| [`Animation`](Animation.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L59)

**`Experimental`**

Input: If provided this animation will be used. Priority will be given to the animation group input.

***

### animationGroup

> `readonly` **animationGroup**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`AnimationGroup`](AnimationGroup.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L54)

**`Experimental`**

Input: Will be initialized if no animation group was provided in the configuration.

***

### config?

> `optional` **config?**: [`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L70)

**`Experimental`**

the configuration of the block

#### Inherited from

`FlowGraphAsyncExecutionBlock.config`

***

### currentAnimationGroup

> `readonly` **currentAnimationGroup**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`AnimationGroup`](AnimationGroup.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L49)

**`Experimental`**

Output connection: The animatable that is currently running.

***

### currentFrame

> `readonly` **currentFrame**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L39)

**`Experimental`**

Output connection: The current frame of the animation.

***

### currentTime

> `readonly` **currentTime**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L44)

**`Experimental`**

Output connection: The current time of the animation.

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

**`Experimental`**

The data inputs of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.dataInputs`

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

**`Experimental`**

The data outputs of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.dataOutputs`

***

### done

> **done**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L14)

**`Experimental`**

Output connection: The signal that is triggered when the asynchronous execution of this block is done.

#### Inherited from

`FlowGraphAsyncExecutionBlock.done`

***

### error

> `readonly` **error**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L19)

**`Experimental`**

An output connection that can be used to signal an error, if the block defines it.

#### Inherited from

`FlowGraphAsyncExecutionBlock.error`

***

### from

> `readonly` **from**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L30)

**`Experimental`**

Input connection: The starting frame of the animation.

***

### in

> `readonly` **in**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L14)

**`Experimental`**

Input connection: The input signal of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.in`

***

### loop

> `readonly` **loop**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L26)

**`Experimental`**

Input connection: Should the animation loop?
Not in glTF specs, but useful for the engine.

***

### metadata

> **metadata**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

**`Experimental`**

Metadata that can be used by the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.metadata`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

**`Experimental`**

The name of the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.name`

***

### object

> `readonly` **object**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L64)

**`Experimental`**

Input connection: The target object that will be animated. If animation group is provided this input will be ignored.

***

### out

> `readonly` **out**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlockWithOutSignal.ts#L15)

**`Experimental`**

Output connection: The signal that is synchronous triggered when the execution of this block is done.
Note that is case of events or async you might want to use the `done` signal instead.

#### Inherited from

`FlowGraphAsyncExecutionBlock.out`

***

### priority

> `readonly` **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L33)

**`Experimental`**

The priority of the block. Higher priority blocks will be executed first.
Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.

#### Inherited from

`FlowGraphAsyncExecutionBlock.priority`

***

### signalInputs

> **signalInputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L23)

**`Experimental`**

Input connections that activate the block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.signalInputs`

***

### signalOutputs

> **signalOutputs**: [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L27)

**`Experimental`**

Output connections that can activate downstream blocks.

#### Inherited from

`FlowGraphAsyncExecutionBlock.signalOutputs`

***

### speed

> `readonly` **speed**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L21)

**`Experimental`**

Input connection: The speed of the animation.

***

### to

> `readonly` **to**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L34)

**`Experimental`**

Input connection: The ending frame of the animation.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

**`Experimental`**

A randomly generated GUID for each block.

#### Inherited from

`FlowGraphAsyncExecutionBlock.uniqueId`

## Methods

### \_resetAfterCanceled()

> **\_resetAfterCanceled**(`context`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphAsyncExecutionBlock.ts#L61)

**`Experimental`**

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L132)

**`Experimental`**

Deserializes from an object

#### Parameters

##### serializationObject

`any`

the object to deserialize from

#### Returns

`void`

#### Inherited from

`FlowGraphAsyncExecutionBlock.deserialize`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.pure.ts#L238)

**`Experimental`**

#### Returns

`string`

class name of the block.

#### Overrides

`FlowGraphAsyncExecutionBlock.getClassName`

***

### getDataInput()

> **getDataInput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L134)

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

`FlowGraphAsyncExecutionBlock.getDataInput`

***

### getDataOutput()

> **getDataOutput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L143)

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

`FlowGraphAsyncExecutionBlock.getDataOutput`

***

### getSignalInput()

> **getSignalInput**(`name`): [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L95)

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

`FlowGraphAsyncExecutionBlock.getSignalInput`

***

### getSignalOutput()

> **getSignalOutput**(`name`): [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L104)

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

`FlowGraphAsyncExecutionBlock.getSignalOutput`

***

### registerDataInput()

> **registerDataInput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L110)

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

`FlowGraphAsyncExecutionBlock.registerDataInput`

***

### registerDataOutput()

> **registerDataOutput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L123)

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

`FlowGraphAsyncExecutionBlock.registerDataOutput`

***

### serialize()

> **serialize**(`serializationObject?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphExecutionBlock.ts#L112)

**`Experimental`**

Serializes this block

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize in

#### Returns

`void`

#### Inherited from

`FlowGraphAsyncExecutionBlock.serialize`
