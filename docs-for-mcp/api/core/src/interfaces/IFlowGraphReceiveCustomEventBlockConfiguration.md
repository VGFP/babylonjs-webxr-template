[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphReceiveCustomEventBlockConfiguration

# Interface: IFlowGraphReceiveCustomEventBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts#L16)

Parameters used to create a FlowGraphReceiveCustomEventBlock.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### eventData

> **eventData**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts#L26)

The names of the data outputs for that event. Should be in the same order as the event data in
SendCustomEvent

#### Index Signature

\[`key`: `string`\]: `object`

***

### eventId

> **eventId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts#L21)

The id of the event to receive.
This event id is unique to the environment (not the context).

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
