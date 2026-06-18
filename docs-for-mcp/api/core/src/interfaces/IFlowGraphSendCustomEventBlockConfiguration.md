[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphSendCustomEventBlockConfiguration

# Interface: IFlowGraphSendCustomEventBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L13)

Parameters used to create a FlowGraphSendCustomEventBlock.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### eventData

> **eventData**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L22)

The names of the data inputs for that event.

#### Index Signature

\[`key`: `string`\]: `object`

***

### eventId

> **eventId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.pure.ts#L18)

The id of the event to send.
Note - in the glTF specs this is an index to the event array (i.e. - a number)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
