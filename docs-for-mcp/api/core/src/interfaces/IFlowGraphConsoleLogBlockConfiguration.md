[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphConsoleLogBlockConfiguration

# Interface: IFlowGraphConsoleLogBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.pure.ts#L15)

Configuration for the console log block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### messageTemplate?

> `optional` **messageTemplate?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.pure.ts#L22)

An optional message template to use for the log message.
If provided, the template can hold placeholders for the message value.
For example, if the template is "The message is: {data}", a new data input called "data" will be created.
The value of the message input will be used to replace the placeholder in the template.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
