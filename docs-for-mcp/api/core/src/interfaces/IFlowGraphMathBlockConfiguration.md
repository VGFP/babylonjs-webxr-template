[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphMathBlockConfiguration

# Interface: IFlowGraphMathBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts#L28)

A configuration interface for math blocks

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

### preventIntegerFloatArithmetic?

> `optional` **preventIntegerFloatArithmetic?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts#L44)

If true, the block will not allow integer and float arithmetic.
This is the behavior in glTF interactivity.

***

### type?

> `optional` **type?**: [`FlowGraphTypes`](../enumerations/FlowGraphTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts#L38)

The type of the variable.

***

### useMatrixPerComponent?

> `optional` **useMatrixPerComponent?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.ts#L33)

If true, the multiplication is done per component.
This is the behavior in glTF interactivity.
