[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphGetPropertyBlockConfiguration

# Interface: IFlowGraphGetPropertyBlockConfiguration\<O\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts#L13)

Configuration for the FlowGraphGetPropertyBlock.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Type Parameters

### O

`O` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)

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

### object?

> `optional` **object?**: [`AssetType`](../type-aliases/AssetType.md)\<`O`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts#L22)

The target asset from which the property will be retrieved

***

### propertyName?

> `optional` **propertyName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts#L17)

The name of the property that will be set

***

### resetToDefaultWhenUndefined?

> `optional` **resetToDefaultWhenUndefined?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.ts#L27)

If true, the block will reset the output to the default value when the target asset is undefined.
