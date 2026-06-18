[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ValidateFlowGraph

# Function: ValidateFlowGraph()

> **ValidateFlowGraph**(`flowGraph`): [`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L96)

Validates a flow graph and returns all issues found.

The following checks are performed:
1. **No event blocks** — the graph has no entry points.
2. **Unconnected required data inputs** — a non-optional data input with no connection.
3. **Unconnected signal inputs** — an execution block whose `in` signal has no connection and
   that is not an event block (entry point).
4. **Data type mismatches** — a data connection whose source richType is incompatible with the
   target richType.
5. **Unreachable blocks** — blocks not reachable from any event block via signal/data traversal.
6. **Data dependency cycles** — circular data-only connections that would cause infinite recursion.

## Parameters

### flowGraph

[`FlowGraph`](../classes/FlowGraph.md)

The flow graph to validate.

## Returns

[`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

The validation result.
