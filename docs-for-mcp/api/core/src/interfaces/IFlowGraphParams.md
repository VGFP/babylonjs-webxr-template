[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphParams

# Interface: IFlowGraphParams

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L38)

Parameters used to create a flow graph.

## Properties

### coordinator

> **coordinator**: [`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L46)

The event coordinator used by the flow graph.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L51)

Optional human-readable name for the graph.
Defaults to "Graph" if not provided.

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L42)

The scene that the flow graph belongs to.

***

### uniqueId?

> `optional` **uniqueId?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L56)

Optional unique identifier for the graph.
If not provided, a random UUID is generated.
