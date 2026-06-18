[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphLogger

# Class: FlowGraphLogger

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L52)

This class will be responsible of logging the flow graph activity.
Note that using this class might reduce performance, as it will log every action, according to the configuration.
It attaches to a flow graph and uses meta-programming to replace the methods of the flow graph to add logging abilities.

## Constructors

### Constructor

> **new FlowGraphLogger**(): `FlowGraphLogger`

#### Returns

`FlowGraphLogger`

## Properties

### log

> **log**: [`IFlowGraphLogItem`](../interfaces/IFlowGraphLogItem.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L62)

The log cache of the flow graph.
Each item is a logged item, in order of execution.

***

### logToConsole

> **logToConsole**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L56)

Whether to log to the console.

## Methods

### addLogItem()

> **addLogItem**(`item`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L64)

#### Parameters

##### item

[`IFlowGraphLogItem`](../interfaces/IFlowGraphLogItem.md)

#### Returns

`void`

***

### getItemsOfType()

> **getItemsOfType**(`action`): [`IFlowGraphLogItem`](../interfaces/IFlowGraphLogItem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphLogger.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphLogger.ts#L79)

#### Parameters

##### action

[`FlowGraphAction`](../enumerations/FlowGraphAction.md)

#### Returns

[`IFlowGraphLogItem`](../interfaces/IFlowGraphLogItem.md)[]
