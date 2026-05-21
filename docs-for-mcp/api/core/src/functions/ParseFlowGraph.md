[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseFlowGraph

# Function: ParseFlowGraph()

> **ParseFlowGraph**(`serializationObject`, `options`, `resolvedClasses`): [`FlowGraph`](../classes/FlowGraph.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphParser.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L177)

Parses a graph from a given serialization object

## Parameters

### serializationObject

[`ISerializedFlowGraph`](../interfaces/ISerializedFlowGraph.md)

the object where the values are written

### options

[`IFlowGraphParseOptions`](../interfaces/IFlowGraphParseOptions.md)

options for parsing the graph

### resolvedClasses

*typeof* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)[]

the resolved classes for the blocks

## Returns

[`FlowGraph`](../classes/FlowGraph.md)

the parsed graph
