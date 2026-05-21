[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphJsonPointerParserBlockConfiguration

# Interface: IFlowGraphJsonPointerParserBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts#L20)

Configuration for the JSON pointer parser block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### jsonPointer

> **jsonPointer**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts#L24)

The JSON pointer to parse.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### outputValue?

> `optional` **outputValue?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts#L33)

Whether to output the value of the property.

***

### pathConverter

> **pathConverter**: [`IPathToObjectConverter`](IPathToObjectConverter.md)\<[`IObjectAccessor`](IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.ts#L28)

The path converter to use to convert the path to an object accessor.
