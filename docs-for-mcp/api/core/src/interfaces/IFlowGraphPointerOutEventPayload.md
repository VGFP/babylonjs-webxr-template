[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphPointerOutEventPayload

# Interface: IFlowGraphPointerOutEventPayload

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L32)

Payload for the pointer out event.

## Properties

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L40)

The mesh that was picked.

***

### over?

> `optional` **over?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L45)

If populated, the hover event moved to this mesh from the `mesh` variable

***

### pointerId

> **pointerId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L36)

The pointer id.
