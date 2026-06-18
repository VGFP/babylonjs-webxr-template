[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / addToBlockFactory

# Function: addToBlockFactory()

> **addToBlockFactory**(`module`, `blockName`, `factory`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/flowGraphBlockFactory.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/flowGraphBlockFactory.ts#L21)

If you want to add a new block to the block factory, you should use this function.
Please be sure to choose a unique name and define the responsible module.

## Parameters

### module

`string`

the name of the module that is responsible for the block

### blockName

`string`

the name of the block. This should be unique.

### factory

() => `Promise`\<*typeof* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)\>

an async factory function to generate the block

## Returns

`void`
