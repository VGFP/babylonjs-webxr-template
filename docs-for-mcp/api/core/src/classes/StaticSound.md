[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StaticSound

# Abstract Class: StaticSound

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L105)

Abstract class representing a static sound.

A static sound has a sound buffer that is loaded into memory all at once. This allows it to have more capabilities
than a streaming sound, such as loop points and playback rate changes, but it also means that the sound must be
fully downloaded and decoded before it can be played, which may take a long time for sounds with long durations.

To prevent downloading and decoding a sound multiple times, a sound's buffer can be shared with other sounds.
See [CreateSoundBufferAsync](../functions/CreateSoundBufferAsync.md), [StaticSoundBuffer](StaticSoundBuffer.md) and [StaticSound.buffer](#buffer) for more information.

Static sounds are created by the [CreateSoundAsync](../functions/CreateSoundAsync.md) function.

## Extends

- [`AbstractSound`](AbstractSound.md)

## Properties

### buffer

> `abstract` `readonly` **buffer**: [`StaticSoundBuffer`](StaticSoundBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L114)

The sound buffer that the sound uses.

This buffer can be shared with other static sounds.

***

### engine

> `readonly` **engine**: [`AudioEngineV2`](AudioEngineV2.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L39)

The audio engine this node belongs to.

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`engine`](AbstractSound.md#engine)

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<[`AbstractAudioNode`](AbstractAudioNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L44)

Observable for when the audio node is disposed.

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`onDisposeObservable`](AbstractSound.md#ondisposeobservable)

***

### onEndedObservable

> `readonly` **onEndedObservable**: [`Observable`](Observable.md)\<[`AbstractSound`](AbstractSound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L64)

Observable for when the sound stops playing.

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`onEndedObservable`](AbstractSound.md#onendedobservable)

***

### onNameChangedObservable

> `readonly` **onNameChangedObservable**: [`Observable`](Observable.md)\<\{ `newName`: `string`; `node`: [`AbstractNamedAudioNode`](AbstractNamedAudioNode.md); `oldName`: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L170)

Observable for when the audio node is renamed.

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`onNameChangedObservable`](AbstractSound.md#onnamechangedobservable)

***

### stereo

> `abstract` **stereo**: [`AbstractStereoAudio`](AbstractStereoAudio.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L96)

The stereo features of the sound.

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`stereo`](AbstractSound.md#stereo)

## Accessors

### \_isSpatial

#### Set Signature

> **set** **\_isSpatial**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L127)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`_isSpatial`](AbstractSound.md#_isspatial)

***

### activeInstancesCount

#### Get Signature

> **get** **activeInstancesCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L73)

The number of active instances of the sound that are currently playing.

##### Returns

`number`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`activeInstancesCount`](AbstractSound.md#activeinstancescount)

***

### analyzer

#### Get Signature

> **get** **analyzer**(): [`AbstractAudioAnalyzer`](AbstractAudioAnalyzer.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L28)

The audio analyzer features.

##### Returns

[`AbstractAudioAnalyzer`](AbstractAudioAnalyzer.md)

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`analyzer`](AbstractSound.md#analyzer)

***

### autoplay

#### Get Signature

> **get** **autoplay**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L80)

Whether the sound should start playing automatically. Defaults to `false`.

##### Returns

`boolean`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`autoplay`](AbstractSound.md#autoplay)

***

### currentTime

#### Get Signature

> **get** **currentTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L87)

The current playback time of the sound, in seconds.

##### Returns

`number`

#### Set Signature

> **set** **currentTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L92)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`currentTime`](AbstractSound.md#currenttime)

***

### duration

#### Get Signature

> **get** **duration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L124)

The amount of time to play the sound for, in seconds. Defaults to `0`.
- If less than or equal to `0`, the sound plays for its full duration.

##### Returns

`number`

#### Set Signature

> **set** **duration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L128)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### loop

#### Get Signature

> **get** **loop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L104)

Whether the sound should loop. Defaults to `false`.

##### Returns

`boolean`

#### Set Signature

> **set** **loop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L108)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`loop`](AbstractSound.md#loop)

***

### loopEnd

#### Get Signature

> **get** **loopEnd**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L148)

The end of the loop range, in seconds. Defaults to `0`.
- If less than or equal to `0`, the loop plays for the sound's full duration.

##### Returns

`number`

#### Set Signature

> **set** **loopEnd**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L152)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### loopStart

#### Get Signature

> **get** **loopStart**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L136)

The start of the loop range, in seconds. Defaults to `0`.
- If less than or equal to `0`, the loop starts at the beginning of the sound.

##### Returns

`number`

#### Set Signature

> **set** **loopStart**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L140)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### maxInstances

#### Get Signature

> **get** **maxInstances**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L115)

The maximum number of instances that can play at the same time. Defaults to `Infinity`.

##### Returns

`number`

#### Set Signature

> **set** **maxInstances**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L119)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`maxInstances`](AbstractSound.md#maxinstances)

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

[`AbstractSound`](AbstractSound.md).[`name`](AbstractSound.md#name)

***

### outBus

#### Get Signature

> **get** **outBus**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L51)

The output bus for the sound.

##### See

[AudioEngineV2.defaultMainBus](AudioEngineV2.md#defaultmainbus)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

#### Set Signature

> **set** **outBus**(`outBus`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L55)

##### Parameters

###### outBus

[`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

##### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`outBus`](AbstractSound.md#outbus)

***

### pitch

#### Get Signature

> **get** **pitch**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L160)

The pitch of the sound, in cents. Defaults to `0`.
- Gets combined with [playbackRate](#playbackrate) to determine the final pitch.

##### Returns

`number`

#### Set Signature

> **set** **pitch**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L164)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### playbackRate

#### Get Signature

> **get** **playbackRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L177)

The playback rate of the sound. Defaults to `1`.
- Gets combined with [pitch](#pitch) to determine the final playback rate.

##### Returns

`number`

#### Set Signature

> **set** **playbackRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L181)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### spatial

#### Get Signature

> **get** **spatial**(): [`AbstractSpatialAudio`](AbstractSpatialAudio.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L86)

The spatial audio features.

##### Returns

[`AbstractSpatialAudio`](AbstractSpatialAudio.md)

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`spatial`](AbstractSound.md#spatial)

***

### startOffset

#### Get Signature

> **get** **startOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L126)

The time within the sound buffer to start playing at, in seconds. Defaults to `0`.

##### Returns

`number`

#### Set Signature

> **set** **startOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L130)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`startOffset`](AbstractSound.md#startoffset)

***

### state

#### Get Signature

> **get** **state**(): [`SoundState`](../enumerations/SoundState.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L137)

The state of the sound.

##### Returns

[`SoundState`](../enumerations/SoundState.md)

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`state`](AbstractSound.md#state)

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

[`AbstractSound`](AbstractSound.md).[`volume`](AbstractSound.md#volume)

## Methods

### cloneAsync()

> `abstract` **cloneAsync**(`options?`): `Promise`\<`StaticSound`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L194)

Clones the sound.

#### Parameters

##### options?

`Partial`\<[`IStaticSoundCloneOptions`](../interfaces/IStaticSoundCloneOptions.md)\>

Options for cloning the sound.

#### Returns

`Promise`\<`StaticSound`\>

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L144)

Releases associated resources.

#### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`dispose`](AbstractSound.md#dispose)

***

### getClassName()

> `abstract` **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L90)

Gets a string identifying the name of the class

#### Returns

`string`

the class's name as a string

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`getClassName`](AbstractSound.md#getclassname)

***

### pause()

> **pause**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L165)

Pauses the sound.

#### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`pause`](AbstractSound.md#pause)

***

### play()

> **play**(`options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L201)

Plays the sound.
- Triggers `onEndedObservable` if played for the full duration and the `loop` option is not set.

#### Parameters

##### options?

`Partial`\<[`IStaticSoundPlayOptions`](../interfaces/IStaticSoundPlayOptions.md)\> = `{}`

The options to use when playing the sound. Options set here override the sound's options.

#### Returns

`void`

#### Overrides

[`AbstractSound`](AbstractSound.md).[`play`](AbstractSound.md#play)

***

### resume()

> **resume**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L178)

Resumes the sound.

#### Returns

`void`

#### Inherited from

[`AbstractSound`](AbstractSound.md).[`resume`](AbstractSound.md#resume)

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

[`AbstractSound`](AbstractSound.md).[`setVolume`](AbstractSound.md#setvolume)

***

### stop()

> **stop**(`options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L228)

Stops the sound.
- Triggers `onEndedObservable` if the sound is playing.

#### Parameters

##### options?

`Partial`\<[`IStaticSoundStopOptions`](../interfaces/IStaticSoundStopOptions.md)\> = `{}`

The options to use when stopping the sound.

#### Returns

`void`

#### Overrides

[`AbstractSound`](AbstractSound.md).[`stop`](AbstractSound.md#stop)
