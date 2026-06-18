[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphForLoopBlockConfiguration

# Interface: IFlowGraphForLoopBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts#L17)

Configuration for the For Loop block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### incrementIndexWhenLoopDone?

> `optional` **incrementIndexWhenLoopDone?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts#L29)

If set to true, the index of the case will be incremented when the loop is done.
This will result that the index will equal endIndex when the loop finished its work.
This is the default behavior in glTF interactivity

***

### initialIndex?

> `optional` **initialIndex?**: `FlowGraphNumber`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts#L22)

The initial index of the loop.
if not set will default to 0

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
