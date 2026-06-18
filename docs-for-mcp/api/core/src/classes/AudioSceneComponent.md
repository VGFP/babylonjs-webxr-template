[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AudioSceneComponent

# ~~Class: AudioSceneComponent~~

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L22)

Defines the sound scene component responsible to manage any sounds
in a given scene.

## Deprecated

please use AudioEngineV2 instead

## Implements

- [`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md)

## Constructors

### Constructor

> **new AudioSceneComponent**(`scene?`): `AudioSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L74)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L62)

Gets or Sets a custom listener position for all sounds in the scene
By default, this is the position of the first active camera

***

### ~~audioListenerRotationProvider~~

> **audioListenerRotationProvider**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`Vector3`](Vector3.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L68)

Gets or Sets a custom listener rotation for all sounds in the scene
By default, this is the rotation of the first active camera

***

### ~~audioPositioningRefreshRate~~

> **audioPositioningRefreshRate**: `number` = `500`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L56)

Gets or sets a refresh rate when using 3D audio positioning

***

### ~~name~~

> `readonly` **name**: `"Audio"` = `SceneComponentConstants.NAME_AUDIO`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L28)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`name`](../interfaces/ISceneSerializableComponent.md#name)

***

### ~~scene~~

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L33)

The scene the component belongs to.

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`scene`](../interfaces/ISceneSerializableComponent.md#scene)

## Accessors

### ~~audioEnabled~~

#### Get Signature

> **get** **audioEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L40)

Gets whether audio is enabled or not.
Please use related enable/disable method to switch state.

##### Returns

`boolean`

***

### ~~headphone~~

#### Get Signature

> **get** **headphone**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L49)

Gets whether audio is outputting to headphone or not.
Please use the according Switch methods to change output.

##### Returns

`boolean`

## Methods

### ~~addFromContainer()~~

> **addFromContainer**(`container`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L122)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L171)

Disables audio in the associated scene.

#### Returns

`void`

***

### ~~dispose()~~

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L155)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`dispose`](../interfaces/ISceneSerializableComponent.md#dispose)

***

### ~~enableAudio()~~

> **enableAudio**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L196)

Enables audio in the associated scene.

#### Returns

`void`

***

### ~~rebuild()~~

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L96)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`rebuild`](../interfaces/ISceneSerializableComponent.md#rebuild)

***

### ~~register()~~

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L88)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneSerializableComponent`](../interfaces/ISceneSerializableComponent.md).[`register`](../interfaces/ISceneSerializableComponent.md#register)

***

### ~~removeFromContainer()~~

> **removeFromContainer**(`container`, `dispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L138)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L104)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L225)

Switch audio to headphone output.

#### Returns

`void`

***

### ~~switchAudioModeForNormalSpeakers()~~

> **switchAudioModeForNormalSpeakers**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.pure.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioSceneComponent.pure.ts#L240)

Switch audio to normal speakers.

#### Returns

`void`
