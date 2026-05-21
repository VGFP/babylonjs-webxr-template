[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphConnection

# Class: FlowGraphConnection\<BlockT, ConnectedToT\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L41)

The base connection class.

## Extended by

- [`FlowGraphSignalConnection`](FlowGraphSignalConnection.md)
- [`FlowGraphDataConnection`](FlowGraphDataConnection.md)

## Type Parameters

### BlockT

`BlockT`

### ConnectedToT

`ConnectedToT` *extends* [`IConnectable`](../interfaces/IConnectable.md)

## Implements

- [`IConnectable`](../interfaces/IConnectable.md)

## Constructors

### Constructor

> **new FlowGraphConnection**\<`BlockT`, `ConnectedToT`\>(`name`, `_connectionType`, `_ownerBlock`): `FlowGraphConnection`\<`BlockT`, `ConnectedToT`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L67)

#### Parameters

##### name

`string`

##### \_connectionType

[`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

##### \_ownerBlock

`BlockT`

#### Returns

`FlowGraphConnection`\<`BlockT`, `ConnectedToT`\>

## Properties

### \_ownerBlock

> **\_ownerBlock**: `BlockT`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L70)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L52)

The name of the connection.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L47)

A uniquely identifying string for the connection.

#### Implementation of

[`IConnectable`](../interfaces/IConnectable.md).[`uniqueId`](../interfaces/IConnectable.md#uniqueid)

## Accessors

### connectionType

#### Get Signature

> **get** **connectionType**(): [`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L79)

The type of the connection

##### Returns

[`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

## Methods

### connectTo()

> **connectTo**(`point`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L103)

Connects two connections together.

#### Parameters

##### point

`ConnectedToT`

the connection to connect to.

#### Returns

`void`

#### Implementation of

[`IConnectable`](../interfaces/IConnectable.md).[`connectTo`](../interfaces/IConnectable.md#connectto)

***

### deserialize()

> **deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L173)

Deserialize from a object into this

#### Parameters

##### serializationObject

`any`

the object to deserialize from.

#### Returns

`void`

***

### disconnectFrom()

> **disconnectFrom**(`point`, `removeFromLocal?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L119)

Disconnects two connections.

#### Parameters

##### point

`ConnectedToT`

the connection to disconnect from.

##### removeFromLocal?

`boolean` = `true`

if true, the connection will be removed from the local connection list.

#### Returns

`void`

***

### disconnectFromAll()

> **disconnectFromAll**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L134)

Disconnects all connected points.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L141)

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L165)

#### Returns

`string`

class name of the connection.

***

### isConnected()

> **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L95)

Returns if a point is connected to any other point.

#### Returns

`boolean`

boolean indicating if the point is connected.

***

### serialize()

> **serialize**(`serializationObject?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L151)

Saves the connection to a JSON object.

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize to.

#### Returns

`void`
