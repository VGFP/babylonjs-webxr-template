[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseFlowGraphCoordinatorFromSnippetAsync

# Function: ParseFlowGraphCoordinatorFromSnippetAsync()

> **ParseFlowGraphCoordinatorFromSnippetAsync**(`snippetId`, `options`): `Promise`\<[`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphParser.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L113)

Parses a flow graph coordinator from a snippet saved by the Flow Graph Editor.

## Parameters

### snippetId

`string`

the snippet id to load. Versioned ids such as "ABC123#4" are supported.

### options

[`IFlowGraphCoordinatorParseOptions`](../interfaces/IFlowGraphCoordinatorParseOptions.md)

options for parsing the coordinator.

## Returns

`Promise`\<[`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)\>

the parsed flow graph coordinator.
