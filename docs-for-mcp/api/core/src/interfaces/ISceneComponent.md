[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISceneComponent

# Interface: ISceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L114)

This represents a scene component.

This is used to decouple the dependency the scene is having on the different workloads like
layers, post processes...

## Extended by

- [`ISceneSerializableComponent`](ISceneSerializableComponent.md)

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L118)

The name of the component. Each component must have a unique name.

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L123)

The scene the component belongs to.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L139)

Disposes the component and the associated resources.

#### Returns

`void`

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L134)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/sceneComponent.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/sceneComponent.ts#L128)

Register the component to one instance of a scene.

#### Returns

`void`
