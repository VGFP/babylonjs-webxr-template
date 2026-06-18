[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetDataOutConnectionByUniqueId

# Function: GetDataOutConnectionByUniqueId()

> **GetDataOutConnectionByUniqueId**(`blocks`, `uniqueId`): [`FlowGraphDataConnection`](../classes/FlowGraphDataConnection.md)\<`any`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphParser.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L55)

Given a list of blocks, find an output data connection that has a specific unique id

## Parameters

### blocks

[`FlowGraphBlock`](../classes/FlowGraphBlock.md)[]

a list of flow graph blocks

### uniqueId

`string`

the unique id of a connection

## Returns

[`FlowGraphDataConnection`](../classes/FlowGraphDataConnection.md)\<`any`\>

the connection that has this unique id. throws an error if none was found
