[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseGraphConnectionWithClassType

# Function: ParseGraphConnectionWithClassType()

> **ParseGraphConnectionWithClassType**\<`BlockT`\>(`serializationObject?`, `ownerBlock`, `classType`): [`FlowGraphConnection`](../classes/FlowGraphConnection.md)\<`BlockT`, [`IConnectable`](../interfaces/IConnectable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphParser.ts:424](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L424)

Parses a connection from an object

## Type Parameters

### BlockT

`BlockT` *extends* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)

## Parameters

### serializationObject?

`any` = `{}`

the object to parse from.

### ownerBlock

`BlockT`

the block that owns the connection.

### classType

*typeof* [`FlowGraphConnection`](../classes/FlowGraphConnection.md)

the class type of the connection.

## Returns

[`FlowGraphConnection`](../classes/FlowGraphConnection.md)\<`BlockT`, [`IConnectable`](../interfaces/IConnectable.md)\>

the parsed connection.
