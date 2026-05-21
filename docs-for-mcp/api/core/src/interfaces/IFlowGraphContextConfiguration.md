[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphContextConfiguration

# Interface: IFlowGraphContextConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L34)

Construction parameters for the context.

## Properties

### assetsContext?

> `readonly` `optional` **assetsContext?**: `IAssetContainer`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L56)

The assets context used by the flow graph context.
If none is provided, a default one will be created.

***

### coordinator

> `readonly` **coordinator**: [`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L42)

The event coordinator used by the flow graph context.

***

### scene

> `readonly` **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L38)

The scene that the flow graph context belongs to.

***

### sceneEventCoordinator?

> `readonly` `optional` **sceneEventCoordinator?**: `FlowGraphSceneEventCoordinator`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L50)

The scene event coordinator that tracks runtime event state
(e.g. currently pressed keyboard keys).
When not provided, keyboard polling blocks (e.g. IsKeyPressed) will
report no keys pressed.
