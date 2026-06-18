[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphCoordinatorParseOptions

# Interface: IFlowGraphCoordinatorParseOptions

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L22)

Parameters used to parse a flow graph coordinator.

## Properties

### pathConverter?

> `optional` **pathConverter?**: [`IPathToObjectConverter`](IPathToObjectConverter.md)\<[`IObjectAccessor`](IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L34)

The path converter to use to convert the path to an object accessor.

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L38)

The scene that the flow graph coordinator belongs to.

***

### valueParseFunction?

> `optional` **valueParseFunction?**: (`key`, `serializationObject`, `assetsContainer`, `scene`) => `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L30)

A function that will be called to parse the value of a property.

#### Parameters

##### key

`string`

the key of the property

##### serializationObject

`any`

the serialization object where the property is located

##### assetsContainer

`IAssetContainer`

the assets container

##### scene

[`Scene`](../classes/Scene.md)

the scene that the block is being parsed in

#### Returns

`any`
