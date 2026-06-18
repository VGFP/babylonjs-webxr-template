[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRendererSceneComponent

# Class: FluidRendererSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L35)

Defines the fluid renderer scene component responsible to render objects as fluids

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new FluidRendererSceneComponent**(`scene`): `FluidRendererSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L50)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`FluidRendererSceneComponent`

## Properties

### name

> `readonly` **name**: `"FluidRenderer"` = `SceneComponentConstants.NAME_FLUIDRENDERER`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L39)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L44)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L103)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L78)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L57)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
