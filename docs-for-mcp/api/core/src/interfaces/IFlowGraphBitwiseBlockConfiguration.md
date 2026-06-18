[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphBitwiseBlockConfiguration

# Interface: IFlowGraphBitwiseBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1106)

Configuration for bitwise operators

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### valueType

> **valueType**: [`FlowGraphTypes`](../enumerations/FlowGraphTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1111)

The type of the values that will be operated on
Defaults to FlowGraphInteger, but can be a number or boolean as well.
