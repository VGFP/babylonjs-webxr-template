[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphGetAssetBlockConfiguration

# Interface: IFlowGraphGetAssetBlockConfiguration\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L17)

Configuration for the get asset block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Type Parameters

### T

`T`

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### index?

> `optional` **index?**: `number` \| [`FlowGraphInteger`](../classes/FlowGraphInteger.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L26)

The index of the asset in the corresponding array in the assets context.
If not provided you can still change it using the input connection.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### type

> **type**: `T`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L21)

The type of the asset that will be retrieved.

***

### useIndexAsUniqueId?

> `optional` **useIndexAsUniqueId?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.pure.ts#L32)

If set to true, instead of the index in the array it will search for the unique id of the asset.
The value of index will be used as the unique id.
