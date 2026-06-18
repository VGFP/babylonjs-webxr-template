[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphMultiGateBlockConfiguration

# Interface: IFlowGraphMultiGateBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts#L15)

Configuration for the multi gate block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### isLoop?

> `optional` **isLoop?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts#L27)

If the block should loop back to the first output flow after executing the last one. Default to false.

***

### isRandom?

> `optional` **isRandom?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts#L23)

If the block should pick a random output flow from the ones that haven't been executed. Default to false.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### outputSignalCount

> **outputSignalCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.pure.ts#L19)

The number of output signals. Required.
