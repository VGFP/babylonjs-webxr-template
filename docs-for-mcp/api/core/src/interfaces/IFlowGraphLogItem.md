[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphLogItem

# Interface: IFlowGraphLogItem

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L21)

An item in the flow graph log.

## Properties

### action

> **action**: [`FlowGraphAction`](../enumerations/FlowGraphAction.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L37)

The action that was logged.

***

### className

> **className**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L29)

The class that triggered the log.

***

### payload?

> `optional` **payload?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L44)

The payload of the log
This can be any data that is relevant to the action.
For example, the value of a connection, the value of a variable, etc.
This is optional.

***

### time?

> `optional` **time?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L25)

The time of the log item.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L33)

The unique id of the block/module that triggered the log.
