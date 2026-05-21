[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LensFlareSystemSceneComponent

# Class: LensFlareSystemSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L108)

Defines the lens flare scene component responsible to manage any lens flares
in a given scene.

## Implements

- [`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md)

## Constructors

### Constructor

> **new LensFlareSystemSceneComponent**(`scene`): `LensFlareSystemSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L123)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`LensFlareSystemSceneComponent`

## Properties

### name

> `readonly` **name**: `"LensFlareSystem"` = `SceneComponentConstants.NAME_LENSFLARESYSTEM`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L112)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`name`](../interfaces/ISceneSerializableComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L117)

The scene the component belongs to.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`scene`](../interfaces/ISceneSerializableComponent.md#scene)

## Methods

### addFromContainer()

> **addFromContainer**(`container`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L148)

Adds all the elements from the container to the scene

#### Parameters

##### container

`IAssetContainer`

the container holding the elements

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`addFromContainer`](../interfaces/ISceneSerializableComponent.md#addfromcontainer)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L190)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`dispose`](../interfaces/ISceneSerializableComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L138)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`rebuild`](../interfaces/ISceneSerializableComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L130)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`register`](../interfaces/ISceneSerializableComponent.md#register)

***

### removeFromContainer()

> **removeFromContainer**(`container`, `dispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L162)

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

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`removeFromContainer`](../interfaces/ISceneSerializableComponent.md#removefromcontainer)

***

### serialize()

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L178)

Serializes the component data to the specified json object

#### Parameters

##### serializationObject

`any`

The object to serialize to

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`serialize`](../interfaces/ISceneSerializableComponent.md#serialize)
