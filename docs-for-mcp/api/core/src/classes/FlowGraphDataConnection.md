[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphDataConnection

# Class: FlowGraphDataConnection\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L17)

Represents a connection point for data.
An unconnected input point can have a default value.
An output point will only have a value if it is connected to an input point. Furthermore,
if the point belongs to a "function" node, the node will run its function to update the value.

## Extends

- [`FlowGraphConnection`](FlowGraphConnection.md)\<[`FlowGraphBlock`](FlowGraphBlock.md), `FlowGraphDataConnection`\<`T`\>\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new FlowGraphDataConnection**\<`T`\>(`name`, `connectionType`, `ownerBlock`, `richType`, `_defaultValue?`, `_optional?`): `FlowGraphDataConnection`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L44)

Create a new data connection point.

#### Parameters

##### name

`string`

the name of the connection

##### connectionType

[`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

the type of the connection

##### ownerBlock

[`FlowGraphBlock`](FlowGraphBlock.md)

the block that owns this connection

##### richType

[`RichType`](RichType.md)\<`T`\>

the type of the data in this block

##### \_defaultValue?

`T` = `richType.defaultValue`

the default value of the connection

##### \_optional?

`boolean` = `false`

if the connection is optional

#### Returns

`FlowGraphDataConnection`\<`T`\>

#### Overrides

[`FlowGraphConnection`](FlowGraphConnection.md).[`constructor`](FlowGraphConnection.md#constructor)

## Properties

### \_ownerBlock

> **\_ownerBlock**: [`FlowGraphBlock`](FlowGraphBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L70)

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`_ownerBlock`](FlowGraphConnection.md#_ownerblock)

***

### dataTransformer

> **dataTransformer**: [`Nullable`](../type-aliases/Nullable.md)\<(`value`) => `T`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L29)

a data transformer function, if needed.
This can be used, for example, to force seconds into milliseconds output, if it makes sense in your case.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L52)

The name of the connection.

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`name`](FlowGraphConnection.md#name)

***

### onValueChangedObservable

> **onValueChangedObservable**: [`Observable`](Observable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L34)

An observable that is triggered when the value of the connection changes.

***

### richType

> **richType**: [`RichType`](RichType.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L51)

the type of the data in this block

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L47)

A uniquely identifying string for the connection.

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`uniqueId`](FlowGraphConnection.md#uniqueid)

## Accessors

### connectionType

#### Get Signature

> **get** **connectionType**(): [`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L79)

The type of the connection

##### Returns

[`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`connectionType`](FlowGraphConnection.md#connectiontype)

***

### isDisabled

#### Get Signature

> **get** **isDisabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L76)

is this connection disabled
If the connection is disabled you will not be able to connect anything to it.

##### Returns

`boolean`

#### Set Signature

> **set** **isDisabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L80)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### optional

#### Get Signature

> **get** **optional**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L68)

Whether or not the connection is optional.
Currently only used for UI control.

##### Returns

`boolean`

## Methods

### \_isSingularConnection()

> **\_isSingularConnection**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L95)

An output data block can connect to multiple input data blocks,
but an input data block can only connect to one output data block.

#### Returns

`boolean`

true if the connection is singular

#### Overrides

`FlowGraphConnection._isSingularConnection`

***

### connectTo()

> **connectTo**(`point`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L125)

Connect this point to another point.

#### Parameters

##### point

`FlowGraphDataConnection`\<`T`\>

the point to connect to.

#### Returns

`void`

#### Overrides

[`FlowGraphConnection`](FlowGraphConnection.md).[`connectTo`](FlowGraphConnection.md#connectto)

***

### deserialize()

> **deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L173)

Deserialize from a object into this

#### Parameters

##### serializationObject

`any`

the object to deserialize from.

#### Returns

`void`

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`deserialize`](FlowGraphConnection.md#deserialize)

***

### disconnectFrom()

> **disconnectFrom**(`point`, `removeFromLocal?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L119)

Disconnects two connections.

#### Parameters

##### point

`FlowGraphDataConnection`

the connection to disconnect from.

##### removeFromLocal?

`boolean` = `true`

if true, the connection will be removed from the local connection list.

#### Returns

`void`

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`disconnectFrom`](FlowGraphConnection.md#disconnectfrom)

***

### disconnectFromAll()

> **disconnectFromAll**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L134)

Disconnects all connected points.

#### Returns

`void`

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`disconnectFromAll`](FlowGraphConnection.md#disconnectfromall)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L141)

#### Returns

`void`

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`dispose`](FlowGraphConnection.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L165)

#### Returns

`string`

class name of the object.

#### Overrides

[`FlowGraphConnection`](FlowGraphConnection.md).[`getClassName`](FlowGraphConnection.md#getclassname)

***

### getValue()

> **getValue**(`context`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L142)

Gets the value of the connection in a specific context.

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the context from which the value is retrieved

#### Returns

`T`

the value of the connection

***

### isConnected()

> **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L95)

Returns if a point is connected to any other point.

#### Returns

`boolean`

boolean indicating if the point is connected.

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`isConnected`](FlowGraphConnection.md#isconnected)

***

### resetToDefaultValue()

> **resetToDefaultValue**(`context`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L117)

Reset the value of the connection to the default value.

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the context in which the value is reset

#### Returns

`void`

***

### serialize()

> **serialize**(`serializationObject?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L173)

Serializes this object.

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize to

#### Returns

`void`

#### Overrides

[`FlowGraphConnection`](FlowGraphConnection.md).[`serialize`](FlowGraphConnection.md#serialize)

***

### setValue()

> **setValue**(`value`, `context`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphDataConnection.pure.ts#L104)

Set the value of the connection in a specific context.

#### Parameters

##### value

`T`

the value to set

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the context to which the value is set

#### Returns

`void`
