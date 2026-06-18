[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphSignalConnection

# Class: FlowGraphSignalConnection

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts#L14)

Represents a connection point for a signal.
When an output point is activated, it will activate the connected input point.
When an input point is activated, it will execute the block it belongs to.

## Extends

- [`FlowGraphConnection`](FlowGraphConnection.md)\<[`FlowGraphExecutionBlock`](FlowGraphExecutionBlock.md), `FlowGraphSignalConnection`\>

## Constructors

### Constructor

> **new FlowGraphSignalConnection**(`name`, `_connectionType`, `_ownerBlock`): `FlowGraphSignalConnection`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L67)

#### Parameters

##### name

`string`

##### \_connectionType

[`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

##### \_ownerBlock

[`FlowGraphExecutionBlock`](FlowGraphExecutionBlock.md)

#### Returns

`FlowGraphSignalConnection`

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`constructor`](FlowGraphConnection.md#constructor)

## Properties

### \_ownerBlock

> **\_ownerBlock**: [`FlowGraphExecutionBlock`](FlowGraphExecutionBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L70)

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`_ownerBlock`](FlowGraphConnection.md#_ownerblock)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L52)

The name of the connection.

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`name`](FlowGraphConnection.md#name)

***

### payload

> **payload**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts#L18)

Optional payload. Can be used, for example, when an error is thrown to pass additional information.

***

### priority

> **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts#L24)

The priority of the signal. Signals with higher priority will be executed first.
Set priority before adding the connection as sorting happens only when the connection is added.

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

## Methods

### connectTo()

> **connectTo**(`point`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphSignalConnection.pure.ts#L30)

Connects two connections together.

#### Parameters

##### point

`FlowGraphSignalConnection`

the connection to connect to.

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

`FlowGraphSignalConnection`

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

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L165)

#### Returns

`string`

class name of the connection.

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`getClassName`](FlowGraphConnection.md#getclassname)

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

### serialize()

> **serialize**(`serializationObject?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L151)

Saves the connection to a JSON object.

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize to.

#### Returns

`void`

#### Inherited from

[`FlowGraphConnection`](FlowGraphConnection.md).[`serialize`](FlowGraphConnection.md#serialize)
