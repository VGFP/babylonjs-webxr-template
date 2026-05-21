[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphMultiGateBlockConfiguration

# Interface: IFlowGraphMultiGateBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts#L13)

Configuration for the multi gate block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### isLoop?

> `optional` **isLoop?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts#L25)

If the block should loop back to the first output flow after executing the last one. Default to false.

***

### isRandom?

> `optional` **isRandom?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts#L21)

If the block should pick a random output flow from the ones that haven't been executed. Default to false.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### outputSignalCount

> **outputSignalCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.ts#L17)

The number of output signals. Required.
