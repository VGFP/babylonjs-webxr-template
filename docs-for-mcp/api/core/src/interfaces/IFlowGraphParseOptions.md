[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphParseOptions

# Interface: IFlowGraphParseOptions

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L62)

Options for parsing a flow graph.

## Properties

### coordinator

> **coordinator**: [`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L74)

The flow graph coordinator.

***

### pathConverter?

> `optional` **pathConverter?**: [`IPathToObjectConverter`](IPathToObjectConverter.md)\<[`IObjectAccessor`](IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L78)

A function that converts a path to an object accessor.

***

### valueParseFunction?

> `optional` **valueParseFunction?**: (`key`, `serializationObject`, `assetsContainer`, `scene`) => `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraph.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraph.ts#L70)

A function that parses complex values in a scene.

#### Parameters

##### key

`string`

the key of the value

##### serializationObject

`any`

the object to read the value from

##### assetsContainer

`IAssetContainer`

the assets container to read assets from

##### scene

[`Scene`](../classes/Scene.md)

the scene to read the value from

#### Returns

`any`
