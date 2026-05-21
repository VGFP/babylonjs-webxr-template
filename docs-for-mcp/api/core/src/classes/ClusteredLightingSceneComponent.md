[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ClusteredLightingSceneComponent

# Class: ClusteredLightingSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts#L10)

A scene component required for running the clustering step in clustered lights

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new ClusteredLightingSceneComponent**(`scene`): `ClusteredLightingSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts#L25)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts#L14)

The name of the component. Each component must have a unique name.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts#L19)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts#L32)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts#L38)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Clustered/clusteredLightingSceneComponent.ts#L43)

Register the component to one instance of a scene.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
