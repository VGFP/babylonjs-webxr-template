[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeNodesObject

# Interface: IGLTFObjectModelTreeNodesObject\<GLTFTargetType, BabylonTargetType\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L44)

## Type Parameters

### GLTFTargetType

`GLTFTargetType` = [`INode`](INode.md)

### BabylonTargetType

`BabylonTargetType` = [`TransformNode`](../../../../../core/src/classes/TransformNode.md)

## Properties

### \_\_array\_\_

> **\_\_array\_\_**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L46)

#### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

#### extensions

> **extensions**: `object`

##### extensions.EXT\_lights\_ies?

> `optional` **EXT\_lights\_ies?**: `object`

##### extensions.EXT\_lights\_ies.color

> **color**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`INode`](INode.md), [`Light`](../../../../../core/src/classes/Light.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### extensions.EXT\_lights\_ies.multiplier

> **multiplier**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`INode`](INode.md), [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### extensions.KHR\_node\_visibility?

> `optional` **KHR\_node\_visibility?**: `object`

##### extensions.KHR\_node\_visibility.visible

> **visible**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`INode`](INode.md), [`Mesh`](../../../../../core/src/classes/Mesh.md), `boolean`\>

#### globalMatrix

> **globalMatrix**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Matrix`](../../../../../core/src/classes/Matrix.md)\>

#### matrix

> **matrix**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Matrix`](../../../../../core/src/classes/Matrix.md)\>

#### rotation

> **rotation**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Quaternion`](../../../../../core/src/classes/Quaternion.md)\>

#### scale

> **scale**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Vector3`](../../../../../core/src/classes/Vector3.md)\>

#### translation

> **translation**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Vector3`](../../../../../core/src/classes/Vector3.md)\>

#### weights

> **weights**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, `number`[]\>

##### Type Declaration

###### \_\_array\_\_

> **\_\_array\_\_**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, `number`\>

###### Type Declaration

###### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

###### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, `number`\>

***

### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`[], `BabylonTargetType`[], `number`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L45)
