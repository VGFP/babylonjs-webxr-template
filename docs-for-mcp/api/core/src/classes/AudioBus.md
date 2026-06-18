[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AudioBus

# Abstract Class: AudioBus

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L29)

Abstract class for an audio bus that has spatial audio and stereo output capabilities.

Instances of this class can be connected to other audio buses.

Audio buses are created by the [CreateAudioBusAsync](../functions/CreateAudioBusAsync.md) function.

## Extends

- [`AbstractAudioBus`](AbstractAudioBus.md)

## Properties

### engine

> `readonly` **engine**: [`AudioEngineV2`](AudioEngineV2.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L39)

The audio engine this node belongs to.

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`engine`](AbstractAudioBus.md#engine)

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<[`AbstractAudioNode`](AbstractAudioNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L44)

Observable for when the audio node is disposed.

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`onDisposeObservable`](AbstractAudioBus.md#ondisposeobservable)

***

### onNameChangedObservable

> `readonly` **onNameChangedObservable**: [`Observable`](Observable.md)\<\{ `newName`: `string`; `node`: [`AbstractNamedAudioNode`](AbstractNamedAudioNode.md); `oldName`: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L170)

Observable for when the audio node is renamed.

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`onNameChangedObservable`](AbstractAudioBus.md#onnamechangedobservable)

***

### stereo

> `abstract` `readonly` **stereo**: [`AbstractStereoAudio`](AbstractStereoAudio.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L91)

The stereo features of the audio bus.

## Accessors

### analyzer

#### Get Signature

> **get** **analyzer**(): [`AbstractAudioAnalyzer`](AbstractAudioAnalyzer.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L28)

The audio analyzer features.

##### Returns

[`AbstractAudioAnalyzer`](AbstractAudioAnalyzer.md)

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`analyzer`](AbstractAudioBus.md#analyzer)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L183)

The name of the audio node.
- Triggers `onNameChangedObservable` when changed.

##### See

[onNameChangedObservable](AbstractNamedAudioNode.md#onnamechangedobservable)

##### Returns

`string`

#### Set Signature

> **set** **name**(`newName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L187)

##### Parameters

###### newName

`string`

##### Returns

`void`

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`name`](AbstractAudioBus.md#name)

***

### outBus

#### Get Signature

> **get** **outBus**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L50)

The output bus of the audio bus. Defaults to the audio engine's default main bus.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

#### Set Signature

> **set** **outBus**(`outBus`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L54)

##### Parameters

###### outBus

[`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

##### Returns

`void`

***

### spatial

#### Get Signature

> **get** **spatial**(): [`AbstractSpatialAudio`](AbstractSpatialAudio.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L81)

The spatial audio features.

##### Returns

[`AbstractSpatialAudio`](AbstractSpatialAudio.md)

***

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L35)

The audio output volume.

##### Returns

`number`

#### Set Signature

> **set** **volume**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L39)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`volume`](AbstractAudioBus.md#volume)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L96)

Releases associated resources.

#### Returns

`void`

#### Overrides

[`AbstractAudioBus`](AbstractAudioBus.md).[`dispose`](AbstractAudioBus.md#dispose)

***

### getClassName()

> `abstract` **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L90)

Gets a string identifying the name of the class

#### Returns

`string`

the class's name as a string

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`getClassName`](AbstractAudioBus.md#getclassname)

***

### setVolume()

> **setVolume**(`value`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L68)

Sets the audio output volume with optional ramping.
If the duration is 0 then the volume is set immediately, otherwise it is ramped to the new value over the given duration using the given shape.
If a ramp is already in progress then the volume is not set and an error is thrown.

#### Parameters

##### value

`number`

The value to set the volume to.

##### options?

[`Nullable`](../type-aliases/Nullable.md)\<`Partial`\<[`IAudioParameterRampOptions`](../interfaces/IAudioParameterRampOptions.md)\>\> = `null`

The options to use for ramping the volume change.

#### Returns

`void`

#### Inherited from

[`AbstractAudioBus`](AbstractAudioBus.md).[`setVolume`](AbstractAudioBus.md#setvolume)
