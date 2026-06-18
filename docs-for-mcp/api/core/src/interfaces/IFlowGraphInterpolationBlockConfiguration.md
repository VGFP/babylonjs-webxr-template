[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphInterpolationBlockConfiguration

# Interface: IFlowGraphInterpolationBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts#L16)

Configuration for the interpolation block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### animationType?

> `optional` **animationType?**: `number` \| [`FlowGraphTypes`](../enumerations/FlowGraphTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts#L38)

The type of the animation to create.
Default is ANIMATIONTYPE_FLOAT
This cannot be changed after construction, so make sure to pass the right value.

***

### duration?

> `optional` **duration?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts#L26)

The duration of the interpolation.

***

### keyFramesCount?

> `optional` **keyFramesCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts#L21)

The number of keyframes to interpolate between.
Will default to 1 if not provided (i.e. from currentValue to a provided value in the time provided)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### propertyName?

> `optional` **propertyName?**: `string` \| `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.pure.ts#L31)

The name of the property that will be interpolated.
