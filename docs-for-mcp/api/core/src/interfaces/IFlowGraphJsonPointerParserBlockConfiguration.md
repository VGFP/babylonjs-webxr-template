[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphJsonPointerParserBlockConfiguration

# Interface: IFlowGraphJsonPointerParserBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L22)

Configuration for the JSON pointer parser block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### jsonPointer

> **jsonPointer**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L26)

The JSON pointer to parse.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### outputValue?

> `optional` **outputValue?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L35)

Whether to output the value of the property.

***

### pathConverter

> **pathConverter**: [`IPathToObjectConverter`](IPathToObjectConverter.md)\<[`IObjectAccessor`](IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.pure.ts#L30)

The path converter to use to convert the path to an object accessor.
