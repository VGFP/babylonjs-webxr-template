[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISerializedFlowGraphConnection

# Interface: ISerializedFlowGraphConnection

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L111)

A Serialized Flow Graph Connection

## Properties

### \_connectionType

> **\_connectionType**: [`FlowGraphConnectionType`](../enumerations/FlowGraphConnectionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L123)

The type of the connection

***

### connectedPointIds

> **connectedPointIds**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L127)

The id of the connection that this is connected to

***

### defaultValue?

> `optional` **defaultValue?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L132)

The serialized default value of a data connection (set by the user for
unconnected inputs).  Only present on data connections.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L119)

The name of the connection

***

### uniqueId

> **uniqueId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L115)

The unique id of the connection
