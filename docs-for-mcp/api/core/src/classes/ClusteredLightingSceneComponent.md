[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ClusteredLightingSceneComponent

# Class: ClusteredLightingSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts#L11)

A scene component required for running the clustering step in clustered lights

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new ClusteredLightingSceneComponent**(`scene`): `ClusteredLightingSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts#L26)

Creates a new scene component.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the component belongs to

#### Returns

`ClusteredLightingSceneComponent`

## Properties

### name

> **name**: `string` = `SceneComponentConstants.NAME_CLUSTEREDLIGHTING`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts#L15)

The name of the component. Each component must have a unique name.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts#L20)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts#L33)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts#L39)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.pure.ts#L44)

Register the component to one instance of a scene.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
