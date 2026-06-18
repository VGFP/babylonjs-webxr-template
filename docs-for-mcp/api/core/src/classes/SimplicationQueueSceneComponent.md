[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SimplicationQueueSceneComponent

# Class: SimplicationQueueSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts#L15)

Defines the simplification queue scene component responsible to help scheduling the various simplification task
created in a scene

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new SimplicationQueueSceneComponent**(`scene`): `SimplicationQueueSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts#L30)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`SimplicationQueueSceneComponent`

## Properties

### name

> `readonly` **name**: `"SimplificationQueue"` = `SceneComponentConstants.NAME_SIMPLIFICATIONQUEUE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts#L19)

The component name helpfull to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts#L24)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts#L52)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts#L45)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.pure.ts#L37)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
