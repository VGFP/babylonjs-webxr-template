[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ValidateFlowGraphWithBlockList

# Function: ValidateFlowGraphWithBlockList()

> **ValidateFlowGraphWithBlockList**(`flowGraph`, `allKnownBlocks`): [`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L224)

Extended validation that also checks for unreachable blocks.
Requires a full list of all blocks in the graph (including those not reachable
from event blocks via the normal traversal).

## Parameters

### flowGraph

[`FlowGraph`](../classes/FlowGraph.md)

The flow graph to validate.

### allKnownBlocks

[`FlowGraphBlock`](../classes/FlowGraphBlock.md)[]

Complete list of all blocks (e.g., from the editor's node set).

## Returns

[`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

The validation result.
