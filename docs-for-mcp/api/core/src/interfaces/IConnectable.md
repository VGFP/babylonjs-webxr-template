[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IConnectable

# Interface: IConnectable

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L14)

An interface for a connectable point in the flow graph.

## Properties

### \_connectedPoint

> **\_connectedPoint**: `IConnectable`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L22)

An array of the points that this point is connected to.

***

### \_connectionType

> **\_connectionType**: [`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L30)

The type of the connection

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L18)

A uniquely identifying string for the connection.

## Methods

### \_isSingularConnection()

> **\_isSingularConnection**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L26)

Returns if the connection can only be connected to one other point.

#### Returns

`boolean`

***

### connectTo()

> **connectTo**(`point`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphConnection.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphConnection.ts#L35)

Connect this point to another point.

#### Parameters

##### point

`IConnectable`

the point to connect to.

#### Returns

`void`
