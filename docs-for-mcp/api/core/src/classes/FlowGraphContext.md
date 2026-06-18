[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphContext

# Class: FlowGraphContext

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L83)

The context represents the current state and execution of the flow graph.
It contains both user-defined variables, which are derived from
a more general variable definition, and execution variables that
are set by the blocks.

## Constructors

### Constructor

> **new FlowGraphContext**(`params`): `FlowGraphContext`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L212)

#### Parameters

##### params

[`IFlowGraphContextConfiguration`](../interfaces/IFlowGraphContextConfiguration.md)

#### Returns

`FlowGraphContext`

## Properties

### assetsContext

> **assetsContext**: `IAssetContainer`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L176)

The assets context used by the flow graph context.
Note that it can be shared between flow graph contexts.

***

### breakpointPredicate

> **breakpointPredicate**: [`Nullable`](../type-aliases/Nullable.md)\<(`block`) => `boolean`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L151)

A predicate called before each execution block runs.
If it returns true, execution is paused before the block and a
pending activation is stored, which can be resumed via
[continueExecution](#continueexecution) or [stepExecution](#stepexecution).

Set to `null` to disable breakpoint checking.

***

### logger

> **logger**: [`Nullable`](../type-aliases/Nullable.md)\<[`FlowGraphLogger`](FlowGraphLogger.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L190)

The logger used by the context to log actions.

***

### name

> **name**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L94)

An optional user-facing name for the context.
Defaults to an empty string; the editor may assign a label like "Context 0".

***

### onBreakpointHitObservable

> **onBreakpointHitObservable**: [`Observable`](Observable.md)\<[`IFlowGraphPendingActivation`](../interfaces/IFlowGraphPendingActivation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L141)

Observable triggered when a breakpoint is hit.
Observers receive the pending activation (block, context, signal) that was paused.

***

### onNodeExecutedObservable

> **onNodeExecutedObservable**: [`Observable`](Observable.md)\<[`FlowGraphBlock`](FlowGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L135)

Observable that is triggered when a node is executed.

***

### treatDataAsRightHanded

> **treatDataAsRightHanded**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L183)

Whether to treat data as right-handed.
This is used when serializing data from a right-handed system, while running the context in a left-handed system, for example in glTF parsing.
Default is false.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L88)

A randomly generated GUID for each context.

## Accessors

### enableLogging

#### Get Signature

> **get** **enableLogging**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L195)

Enable logging on this context

##### Returns

`boolean`

#### Set Signature

> **set** **enableLogging**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L199)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### executionId

#### Get Signature

> **get** **executionId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L582)

A monotonically increasing ID for each execution.
Incremented for every block executed.

##### Returns

`number`

***

### hasPendingBlocks

#### Get Signature

> **get** **hasPendingBlocks**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:505](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L505)

Check if there are any pending blocks in this context

##### Returns

`boolean`

true if there are pending blocks

***

### pendingActivation

#### Get Signature

> **get** **pendingActivation**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IFlowGraphPendingActivation`](../interfaces/IFlowGraphPendingActivation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:626](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L626)

Returns the currently paused activation, or null if not paused.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IFlowGraphPendingActivation`](../interfaces/IFlowGraphPendingActivation.md)\>

***

### userVariables

#### Get Signature

> **get** **userVariables**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L277)

Gets all user variables map

##### Returns

`object`

***

### variableTypes

#### Get Signature

> **get** **variableTypes**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L302)

Gets all variable type annotations.

##### Returns

`object`

## Methods

### \_notifyOnTick()

> **\_notifyOnTick**(`framePayload`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L562)

#### Parameters

##### framePayload

[`IFlowGraphOnTickEventPayload`](../interfaces/IFlowGraphOnTickEventPayload.md)

#### Returns

`void`

***

### continueExecution()

> **continueExecution**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:635](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L635)

Resume execution from a breakpoint hit.
The paused block and all downstream blocks will execute normally until
the next breakpoint (if any) is hit.

#### Returns

`void`

***

### getAsset()

> **getAsset**\<`T`\>(`type`, `index`): [`Nullable`](../type-aliases/Nullable.md)\<[`AssetType`](../type-aliases/AssetType.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L251)

Get an assets from the assets context based on its type and index in the array

#### Type Parameters

##### T

`T` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)

#### Parameters

##### type

`T`

The type of the asset

##### index

`number`

The index of the asset

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AssetType`](../type-aliases/AssetType.md)\<`T`\>\>

The asset or null if not found

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:721](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L721)

#### Returns

`string`

the class name of the object.

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L310)

Get the scene that the context belongs to.

#### Returns

[`Scene`](Scene.md)

the scene

***

### getVariable()

> **getVariable**(`name`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L260)

Get a user-defined variable.

#### Parameters

##### name

`string`

the name of the variable

#### Returns

`any`

the value of the variable

***

### getVariableType()

> **getVariableType**(`name`): `string` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L295)

Get the declared type annotation for a user variable.

#### Parameters

##### name

`string`

the variable name

#### Returns

`string` \| `undefined`

the type name string, or undefined if no type was declared

***

### hasVariable()

> **hasVariable**(`name`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L222)

Check if a user-defined variable is defined.

#### Parameters

##### name

`string`

the name of the variable

#### Returns

`boolean`

true if the variable is defined

***

### serialize()

> **serialize**(`serializationObject?`, `valueSerializationFunction?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:684](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L684)

Serializes a context

#### Parameters

##### serializationObject?

`any` = `{}`

the object to write the values in

##### valueSerializationFunction?

(`key`, `value`, `serializationObject`) => `void`

a function to serialize complex values

#### Returns

`void`

***

### setVariable()

> **setVariable**(`name`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L231)

Set a user-defined variable.

#### Parameters

##### name

`string`

the name of the variable

##### value

`any`

the value of the variable

#### Returns

`void`

***

### setVariableType()

> **setVariableType**(`name`, `typeName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L286)

Set the declared type annotation for a user variable.

#### Parameters

##### name

`string`

the variable name

##### typeName

`string`

the type name string (e.g. "number", "Vector3", "Mesh")

#### Returns

`void`

***

### stepExecution()

> **stepExecution**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:652](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L652)

Execute exactly the paused block and then pause again before the next
execution block fires. If no activation is pending, this is a no-op.

#### Returns

`void`
