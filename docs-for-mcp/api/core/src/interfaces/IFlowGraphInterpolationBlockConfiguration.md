[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphInterpolationBlockConfiguration

# Interface: IFlowGraphInterpolationBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts#L14)

Configuration for the interpolation block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### animationType?

> `optional` **animationType?**: `number` \| [`FlowGraphTypes`](../enumerations/FlowGraphTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts#L36)

The type of the animation to create.
Default is ANIMATIONTYPE_FLOAT
This cannot be changed after construction, so make sure to pass the right value.

***

### duration?

> `optional` **duration?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts#L24)

The duration of the interpolation.

***

### keyFramesCount?

> `optional` **keyFramesCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts#L19)

The number of keyframes to interpolate between.
Will default to 1 if not provided (i.e. from currentValue to a provided value in the time provided)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### propertyName?

> `optional` **propertyName?**: `string` \| `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.ts#L29)

The name of the property that will be interpolated.
