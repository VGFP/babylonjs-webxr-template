[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IblCdfGeneratorSceneComponent

# Class: IblCdfGeneratorSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L14)

Defines the IBL CDF Generator scene component responsible for generating CDF maps for a given IBL.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new IblCdfGeneratorSceneComponent**(`scene`): `IblCdfGeneratorSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L29)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`IblCdfGeneratorSceneComponent`

## Properties

### name

> `readonly` **name**: `"iblCDFGenerator"` = `SceneComponentConstants.NAME_IBLCDFGENERATOR`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L18)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L23)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L53)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L63)

#### Returns

`boolean`

true once the CDF generator's procedural textures and effects are ready.
Used by `Scene.isReady` so that `executeWhenReady` waits for the CDF maps to be
generated before declaring the scene ready to render.

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L46)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.pure.ts#L36)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
