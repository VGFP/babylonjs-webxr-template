[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphFloatToIntConfiguration

# Interface: IFlowGraphFloatToIntConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.ts#L66)

Configuration for the float to int block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### roundingMode?

> `optional` **roundingMode?**: `"floor"` \| `"ceil"` \| `"round"`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.ts#L71)

The rounding mode to use.
if not defined, it will use the FlowGraphInteger default rounding ( a | 0 )
