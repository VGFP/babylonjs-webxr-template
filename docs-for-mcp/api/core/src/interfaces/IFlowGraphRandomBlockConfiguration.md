[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphRandomBlockConfiguration

# Interface: IFlowGraphRandomBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L252)

Configuration interface for the random block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### max?

> `optional` **max?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L260)

The maximum value. defaults to 1.

***

### min?

> `optional` **min?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L256)

The minimum value. defaults to 0.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### seed?

> `optional` **seed?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L266)

The seed for the random number generator for deterministic random values.
If not set, Math.random() is used.
