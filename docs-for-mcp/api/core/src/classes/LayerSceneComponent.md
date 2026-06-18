[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LayerSceneComponent

# Class: LayerSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L14)

Defines the layer scene component responsible to manage any layers
in a given scene.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new LayerSceneComponent**(`scene?`): `LayerSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L31)

Creates a new instance of the component for the given scene

#### Parameters

##### scene?

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`LayerSceneComponent`

## Properties

### name

> `readonly` **name**: `"Layer"` = `SceneComponentConstants.NAME_LAYER`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L18)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L23)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### addFromContainer()

> **addFromContainer**(`container`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L152)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L71)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L60)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L42)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)

***

### removeFromContainer()

> **removeFromContainer**(`container`, `dispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layerSceneComponent.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/layerSceneComponent.ts#L166)

Removes all the elements in the container from the scene

#### Parameters

##### container

`IAssetContainer`

contains the elements to remove

##### dispose?

`boolean` = `false`

if the removed element should be disposed (default: false)

#### Returns

`void`
