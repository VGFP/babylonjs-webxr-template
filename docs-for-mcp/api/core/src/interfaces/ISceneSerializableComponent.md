[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISceneSerializableComponent

# Interface: ISceneSerializableComponent

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L147)

This represents a SERIALIZABLE scene component.

This extends Scene Component to add Serialization methods on top.

## Extends

- [`ISceneComponent`](ISceneComponent.md)

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L118)

The name of the component. Each component must have a unique name.

#### Inherited from

[`ISceneComponent`](ISceneComponent.md).[`name`](ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L123)

The scene the component belongs to.

#### Inherited from

[`ISceneComponent`](ISceneComponent.md).[`scene`](ISceneComponent.md#scene)

## Methods

### addFromContainer()

> **addFromContainer**(`container`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L152)

Adds all the elements from the container to the scene

#### Parameters

##### container

`IAssetContainer`

the container holding the elements

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L139)

Disposes the component and the associated resources.

#### Returns

`void`

#### Inherited from

[`ISceneComponent`](ISceneComponent.md).[`dispose`](ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L134)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Inherited from

[`ISceneComponent`](ISceneComponent.md).[`rebuild`](ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L128)

Register the component to one instance of a scene.

#### Returns

`void`

#### Inherited from

[`ISceneComponent`](ISceneComponent.md).[`register`](ISceneComponent.md#register)

***

### removeFromContainer()

> **removeFromContainer**(`container`, `dispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L159)

Removes all the elements in the container from the scene

#### Parameters

##### container

`IAssetContainer`

contains the elements to remove

##### dispose?

`boolean`

if the removed element should be disposed (default: false)

#### Returns

`void`

***

### serialize()

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L165)

Serializes the component data to the specified json object

#### Parameters

##### serializationObject

`any`

The object to serialize to

#### Returns

`void`
