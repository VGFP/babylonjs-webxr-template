[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AudioSceneComponent

# ~~Class: AudioSceneComponent~~

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L278)

Defines the sound scene component responsible to manage any sounds
in a given scene.

## Deprecated

please use AudioEngineV2 instead

## Implements

- [`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md)

## Constructors

### Constructor

> **new AudioSceneComponent**(`scene?`): `AudioSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L330)

Creates a new instance of the component for the given scene

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defines the scene to register the component in

#### Returns

`AudioSceneComponent`

## Properties

### ~~audioListenerPositionProvider~~

> **audioListenerPositionProvider**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`Vector3`](Vector3.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L318)

Gets or Sets a custom listener position for all sounds in the scene
By default, this is the position of the first active camera

***

### ~~audioListenerRotationProvider~~

> **audioListenerRotationProvider**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`Vector3`](Vector3.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L324)

Gets or Sets a custom listener rotation for all sounds in the scene
By default, this is the rotation of the first active camera

***

### ~~audioPositioningRefreshRate~~

> **audioPositioningRefreshRate**: `number` = `500`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L312)

Gets or sets a refresh rate when using 3D audio positioning

***

### ~~name~~

> `readonly` **name**: `"Audio"` = `SceneComponentConstants.NAME_AUDIO`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L284)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`name`](../interfaces/ISceneSerializableComponent.md#name)

***

### ~~scene~~

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L289)

The scene the component belongs to.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`scene`](../interfaces/ISceneSerializableComponent.md#scene)

## Accessors

### ~~audioEnabled~~

#### Get Signature

> **get** **audioEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L296)

Gets whether audio is enabled or not.
Please use related enable/disable method to switch state.

##### Returns

`boolean`

***

### ~~headphone~~

#### Get Signature

> **get** **headphone**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L305)

Gets whether audio is outputting to headphone or not.
Please use the according Switch methods to change output.

##### Returns

`boolean`

## Methods

### ~~addFromContainer()~~

> **addFromContainer**(`container`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L378)

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

### ~~disableAudio()~~

> **disableAudio**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L427)

Disables audio in the associated scene.

#### Returns

`void`

***

### ~~dispose()~~

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:411](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L411)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`dispose`](../interfaces/ISceneSerializableComponent.md#dispose)

***

### ~~enableAudio()~~

> **enableAudio**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:452](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L452)

Enables audio in the associated scene.

#### Returns

`void`

***

### ~~rebuild()~~

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L352)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`rebuild`](../interfaces/ISceneSerializableComponent.md#rebuild)

***

### ~~register()~~

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L344)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`register`](../interfaces/ISceneSerializableComponent.md#register)

***

### ~~removeFromContainer()~~

> **removeFromContainer**(`container`, `dispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L394)

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

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`removeFromContainer`](../interfaces/ISceneSerializableComponent.md#removefromcontainer)

***

### ~~serialize()~~

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L360)

Serializes the component data to the specified json object

#### Parameters

##### serializationObject

`any`

The object to serialize to

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`serialize`](../interfaces/ISceneSerializableComponent.md#serialize)

***

### ~~switchAudioModeForHeadphones()~~

> **switchAudioModeForHeadphones**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:481](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L481)

Switch audio to headphone output.

#### Returns

`void`

***

### ~~switchAudioModeForNormalSpeakers()~~

> **switchAudioModeForNormalSpeakers**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L496)

Switch audio to normal speakers.

#### Returns

`void`
