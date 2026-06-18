[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SubSurfaceSceneComponent

# Class: SubSurfaceSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L15)

Defines the Geometry Buffer scene component responsible to manage a G-Buffer useful
in several rendering techniques.

## Implements

- [`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md)

## Constructors

### Constructor

> **new SubSurfaceSceneComponent**(`scene`): `SubSurfaceSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L30)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`SubSurfaceSceneComponent`

## Properties

### name

> `readonly` **name**: `"PrePassRenderer"` = `SceneComponentConstants.NAME_PREPASSRENDERER`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L19)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`name`](../interfaces/ISceneSerializableComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L24)

The scene the component belongs to.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`scene`](../interfaces/ISceneSerializableComponent.md#scene)

## Methods

### addFromContainer()

> **addFromContainer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L63)

Adds all the elements from the container to the scene

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`addFromContainer`](../interfaces/ISceneSerializableComponent.md#addfromcontainer)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L92)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`dispose`](../interfaces/ISceneSerializableComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L85)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`rebuild`](../interfaces/ISceneSerializableComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L37)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`register`](../interfaces/ISceneSerializableComponent.md#register)

***

### removeFromContainer()

> **removeFromContainer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L70)

Removes all the elements in the container from the scene

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`removeFromContainer`](../interfaces/ISceneSerializableComponent.md#removefromcontainer)

***

### serialize()

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/subSurfaceSceneComponent.pure.ts#L43)

Serializes the component data to the specified json object

#### Parameters

##### serializationObject

`any`

The object to serialize to

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`serialize`](../interfaces/ISceneSerializableComponent.md#serialize)
