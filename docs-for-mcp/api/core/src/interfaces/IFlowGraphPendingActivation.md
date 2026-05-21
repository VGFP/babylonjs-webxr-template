[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphPendingActivation

# Interface: IFlowGraphPendingActivation

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L23)

Represents a pending signal activation that was paused by a breakpoint.

## Properties

### block

> `readonly` **block**: [`FlowGraphExecutionBlock`](../classes/FlowGraphExecutionBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L25)

The block that was about to execute

***

### context

> `readonly` **context**: [`FlowGraphContext`](../classes/FlowGraphContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L27)

The context in which execution was paused

***

### signal

> `readonly` **signal**: [`FlowGraphSignalConnection`](../classes/FlowGraphSignalConnection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L29)

The signal connection that triggered the execution
