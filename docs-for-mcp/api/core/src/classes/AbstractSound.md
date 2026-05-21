[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractSound

# Abstract Class: AbstractSound

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L53)

Abstract class representing a sound in the audio engine.

## Extends

- `AbstractSoundSource`

## Extended by

- [`StaticSound`](StaticSound.md)
- [`StreamingSound`](StreamingSound.md)

## Properties

### engine

> `readonly` **engine**: [`AudioEngineV2`](AudioEngineV2.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L39)

The audio engine this node belongs to.

#### Inherited from

`AbstractSoundSource.engine`

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<[`AbstractAudioNode`](AbstractAudioNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L44)

Observable for when the audio node is disposed.

#### Inherited from

`AbstractSoundSource.onDisposeObservable`

***

### onEndedObservable

> `readonly` **onEndedObservable**: [`Observable`](Observable.md)\<`AbstractSound`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L64)

Observable for when the sound stops playing.

***

### onNameChangedObservable

> `readonly` **onNameChangedObservable**: [`Observable`](Observable.md)\<\{ `newName`: `string`; `node`: [`AbstractNamedAudioNode`](AbstractNamedAudioNode.md); `oldName`: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L170)

Observable for when the audio node is renamed.

#### Inherited from

`AbstractSoundSource.onNameChangedObservable`

***

### stereo

> `abstract` **stereo**: [`AbstractStereoAudio`](AbstractStereoAudio.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L96)

The stereo features of the sound.

#### Inherited from

`AbstractSoundSource.stereo`

## Accessors

### \_isSpatial

#### Set Signature

> **set** **\_isSpatial**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L127)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`AbstractSoundSource._isSpatial`

***

### activeInstancesCount

#### Get Signature

> **get** **activeInstancesCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L73)

The number of active instances of the sound that are currently playing.

##### Returns

`number`

***

### analyzer

#### Get Signature

> **get** **analyzer**(): [`AbstractAudioAnalyzer`](AbstractAudioAnalyzer.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L28)

The audio analyzer features.

##### Returns

[`AbstractAudioAnalyzer`](AbstractAudioAnalyzer.md)

#### Inherited from

`AbstractSoundSource.analyzer`

***

### autoplay

#### Get Signature

> **get** **autoplay**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L80)

Whether the sound should start playing automatically. Defaults to `false`.

##### Returns

`boolean`

***

### currentTime

#### Get Signature

> **get** **currentTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L87)

The current playback time of the sound, in seconds.

##### Returns

`number`

#### Set Signature

> **set** **currentTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L92)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### loop

#### Get Signature

> **get** **loop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L104)

Whether the sound should loop. Defaults to `false`.

##### Returns

`boolean`

#### Set Signature

> **set** **loop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L108)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### maxInstances

#### Get Signature

> **get** **maxInstances**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L115)

The maximum number of instances that can play at the same time. Defaults to `Infinity`.

##### Returns

`number`

#### Set Signature

> **set** **maxInstances**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L119)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L183)

The name of the audio node.
- Triggers `onNameChangedObservable` when changed.

##### See

[onNameChangedObservable](AbstractNamedAudioNode.md#onnamechangedobservable)

##### Returns

`string`

#### Set Signature

> **set** **name**(`newName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L187)

##### Parameters

###### newName

`string`

##### Returns

`void`

#### Inherited from

`AbstractSoundSource.name`

***

### outBus

#### Get Signature

> **get** **outBus**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L51)

The output bus for the sound.

##### See

[AudioEngineV2.defaultMainBus](AudioEngineV2.md#defaultmainbus)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

#### Set Signature

> **set** **outBus**(`outBus`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L55)

##### Parameters

###### outBus

[`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

##### Returns

`void`

#### Inherited from

`AbstractSoundSource.outBus`

***

### spatial

#### Get Signature

> **get** **spatial**(): [`AbstractSpatialAudio`](AbstractSpatialAudio.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L86)

The spatial audio features.

##### Returns

[`AbstractSpatialAudio`](AbstractSpatialAudio.md)

#### Inherited from

`AbstractSoundSource.spatial`

***

### startOffset

#### Get Signature

> **get** **startOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L126)

The time within the sound buffer to start playing at, in seconds. Defaults to `0`.

##### Returns

`number`

#### Set Signature

> **set** **startOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L130)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### state

#### Get Signature

> **get** **state**(): [`SoundState`](../enumerations/SoundState.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L137)

The state of the sound.

##### Returns

[`SoundState`](../enumerations/SoundState.md)

***

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L35)

The audio output volume.

##### Returns

`number`

#### Set Signature

> **set** **volume**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L39)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`AbstractSoundSource.volume`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L144)

Releases associated resources.

#### Returns

`void`

#### Overrides

`AbstractSoundSource.dispose`

***

### getClassName()

> `abstract` **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L90)

Gets a string identifying the name of the class

#### Returns

`string`

the class's name as a string

#### Inherited from

`AbstractSoundSource.getClassName`

***

### pause()

> **pause**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L165)

Pauses the sound.

#### Returns

`void`

***

### play()

> `abstract` **play**(`options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L160)

Plays the sound.
- Triggers `onEndedObservable` if played for the full duration and the `loop` option is not set.

#### Parameters

##### options?

`Partial`\<[`IAbstractSoundPlayOptions`](../interfaces/IAbstractSoundPlayOptions.md)\>

The options to use when playing the sound. Options set here override the sound's options.

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L178)

Resumes the sound.

#### Returns

`void`

***

### setVolume()

> **setVolume**(`value`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioOutNode.ts#L68)

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

`AbstractSoundSource.setVolume`

***

### stop()

> `abstract` **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L196)

Stops the sound.
- Triggers `onEndedObservable` if the sound is playing.

#### Returns

`void`
