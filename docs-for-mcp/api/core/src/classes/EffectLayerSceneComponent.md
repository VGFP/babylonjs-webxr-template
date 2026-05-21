[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectLayerSceneComponent

# Class: EffectLayerSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L31)

Defines the layer scene component responsible to manage any effect layers
in a given scene.

## Implements

- [`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md)

## Constructors

### Constructor

> **new EffectLayerSceneComponent**(`scene?`): `EffectLayerSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L51)

Creates a new instance of the component for the given scene

#### Parameters

##### scene?

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`EffectLayerSceneComponent`

## Properties

### name

> `readonly` **name**: `"EffectLayer"` = `SceneComponentConstants.NAME_EFFECTLAYER`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L35)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`name`](../interfaces/ISceneSerializableComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L40)

The scene the component belongs to.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`scene`](../interfaces/ISceneSerializableComponent.md#scene)

## Methods

### addFromContainer()

> **addFromContainer**(`container`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L106)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L135)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`dispose`](../interfaces/ISceneSerializableComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L79)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`rebuild`](../interfaces/ISceneSerializableComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L62)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`register`](../interfaces/ISceneSerializableComponent.md#register)

***

### removeFromContainer()

> **removeFromContainer**(`container`, `dispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L120)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayerSceneComponent.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayerSceneComponent.ts#L90)

Serializes the component data to the specified json object

#### Parameters

##### serializationObject

`any`

The object to serialize to

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`serialize`](../interfaces/ISceneSerializableComponent.md#serialize)
