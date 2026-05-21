[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphConsoleLogBlockConfiguration

# Interface: IFlowGraphConsoleLogBlockConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.ts#L13)

Configuration for the console log block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### messageTemplate?

> `optional` **messageTemplate?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.ts#L20)

An optional message template to use for the log message.
If provided, the template can hold placeholders for the message value.
For example, if the template is "The message is: {data}", a new data input called "data" will be created.
The value of the message input will be used to replace the placeholder in the template.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
