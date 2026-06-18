[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthRendererSceneComponent

# Class: DepthRendererSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts#L19)

Defines the Depth Renderer scene component responsible to manage a depth buffer useful
in several rendering techniques.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new DepthRendererSceneComponent**(`scene`): `DepthRendererSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts#L34)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`DepthRendererSceneComponent`

## Properties

### name

> `readonly` **name**: `"DepthRenderer"` = `SceneComponentConstants.NAME_DEPTHRENDERER`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts#L23)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts#L28)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts#L62)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts#L55)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthRendererSceneComponent.pure.ts#L41)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
