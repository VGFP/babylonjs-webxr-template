[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / blockFactory

# Function: blockFactory()

> **blockFactory**(`blockName`): () => `Promise`\<*typeof* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/flowGraphBlockFactory.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/flowGraphBlockFactory.ts#L33)

a function to get a factory function for a block.

## Parameters

### blockName

`string`

the block name to initialize. If the block comes from an external module, the name should be in the format "module/blockName"

## Returns

an async factory function that will return the block class when called.

() => `Promise`\<*typeof* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)\>
