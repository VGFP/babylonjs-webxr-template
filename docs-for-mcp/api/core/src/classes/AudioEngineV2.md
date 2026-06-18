[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AudioEngineV2

# Abstract Class: AudioEngineV2

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L61)

Abstract base class for v2 audio engines.

A v2 audio engine based on the WebAudio API can be created with the [CreateAudioEngineAsync](../functions/CreateAudioEngineAsync.md) function.

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Properties

### currentTime

> `abstract` `readonly` **currentTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L126)

The elapsed time since the audio engine was started, in seconds.

***

### listener

> `abstract` `readonly` **listener**: [`AbstractSpatialAudioListener`](AbstractSpatialAudioListener.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L149)

The spatial audio listener properties for the audio engine.
- Each audio engine has exactly one listener.

***

### mainOut

> `abstract` `readonly` **mainOut**: [`AbstractAudioNode`](AbstractAudioNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L155)

The main output node.
- This is the last node in the audio graph before the audio is sent to the speakers.

***

### state

> `abstract` `readonly` **state**: [`AudioEngineV2State`](../type-aliases/AudioEngineV2State.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L166)

The current state of the audio engine.

Possible values are:
- `"closed"`: The audio engine has been closed.
- `"interrupted"`: The audio engine has been interrupted and is not running.
- `"running"`: The audio engine is running normally.
- `"suspended"`: The audio engine is suspended and is not running.

***

### volume

> `abstract` **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L171)

The output volume of the audio engine.

## Accessors

### defaultMainBus

#### Get Signature

> **get** **defaultMainBus**(): [`Nullable`](../type-aliases/Nullable.md)\<[`MainAudioBus`](MainAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L133)

The default main bus that will be used for audio buses and sounds if their `outBus` option is not set.

##### See

 - [IAudioBusOptions.outBus](../interfaces/IAudioBusOptions.md#outbus)
 - [IAbstractSoundOptions.outBus](../interfaces/IAbstractSoundOptions.md#outbus)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MainAudioBus`](MainAudioBus.md)\>

***

### nodes

#### Get Signature

> **get** **nodes**(): `ReadonlySet`\<[`AbstractNamedAudioNode`](AbstractNamedAudioNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L197)

The list of top-level audio nodes (sounds, sound sources, buses, main buses) owned by the audio engine.

##### Returns

`ReadonlySet`\<[`AbstractNamedAudioNode`](AbstractNamedAudioNode.md)\>

***

### onDisposeObservable

#### Get Signature

> **get** **onDisposeObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<`AudioEngineV2`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L104)

Observable that notifies when this engine is disposed.
- Fires from [AudioEngineV2.dispose](#dispose) after the engine has been removed from [AudioEngineV2.Instances](#instances).

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<`AudioEngineV2`\>

***

### onNodeAddedObservable

#### Get Signature

> **get** **onNodeAddedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`AbstractNamedAudioNode`](AbstractNamedAudioNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L89)

Observable that notifies when a top-level audio node (sound, sound source, bus, or main bus) is added to this engine.

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`AbstractNamedAudioNode`](AbstractNamedAudioNode.md)\>

***

### onNodeRemovedObservable

#### Get Signature

> **get** **onNodeRemovedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`AbstractNamedAudioNode`](AbstractNamedAudioNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L96)

Observable that notifies when a top-level audio node (sound, sound source, bus, or main bus) is removed from this engine.

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`AbstractNamedAudioNode`](AbstractNamedAudioNode.md)\>

***

### parameterRampDuration

#### Get Signature

> **get** **parameterRampDuration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L176)

The smoothing duration to use when changing audio parameters, in seconds. Defaults to `0.01` (10 milliseconds).

##### Returns

`number`

#### Set Signature

> **set** **parameterRampDuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L180)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sounds

#### Get Signature

> **get** **sounds**(): readonly [`AbstractSound`](AbstractSound.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L187)

The list of static and streaming sounds created by the audio engine.

##### Returns

readonly [`AbstractSound`](AbstractSound.md)[]

***

### Instances

#### Get Signature

> **get** `static` **Instances**(): readonly `AudioEngineV2`[]

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L66)

The list of v2 audio engines that have been created and not yet disposed.
- Engines are added on construction and removed on [AudioEngineV2.dispose](#dispose).

##### Returns

readonly `AudioEngineV2`[]

## Methods

### createBusAsync()

> `abstract` **createBusAsync**(`name`, `options?`): `Promise`\<[`AudioBus`](AudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L207)

Creates a new audio bus.

#### Parameters

##### name

`string`

The name of the audio bus.

##### options?

`Partial`\<[`IAudioBusOptions`](../interfaces/IAudioBusOptions.md)\>

The options to use when creating the audio bus.

#### Returns

`Promise`\<[`AudioBus`](AudioBus.md)\>

A promise that resolves with the created audio bus.

***

### createMainBusAsync()

> `abstract` **createMainBusAsync**(`name`, `options?`): `Promise`\<[`MainAudioBus`](MainAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L215)

Creates a new main audio bus.

#### Parameters

##### name

`string`

The name of the main audio bus.

##### options?

`Partial`\<[`IMainAudioBusOptions`](../interfaces/IMainAudioBusOptions.md)\>

The options to use when creating the main audio bus.

#### Returns

`Promise`\<[`MainAudioBus`](MainAudioBus.md)\>

A promise that resolves with the created main audio bus.

***

### createMicrophoneSoundSourceAsync()

> `abstract` **createMicrophoneSoundSourceAsync**(`name`, `options?`): `Promise`\<[`AbstractSoundSource`](AbstractSoundSource.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L223)

Creates a new microphone sound source.

#### Parameters

##### name

`string`

The name of the sound.

##### options?

`Partial`\<[`ISoundSourceOptions`](../interfaces/ISoundSourceOptions.md)\>

The options for the sound source.

#### Returns

`Promise`\<[`AbstractSoundSource`](AbstractSoundSource.md)\>

A promise that resolves to the created sound source.

***

### createSoundAsync()

> `abstract` **createSoundAsync**(`name`, `source`, `options?`): `Promise`\<[`StaticSound`](StaticSound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L232)

Creates a new static sound.

#### Parameters

##### name

`string`

The name of the sound.

##### source

`string` \| `string`[] \| `ArrayBuffer` \| `AudioBuffer` \| [`StaticSoundBuffer`](StaticSoundBuffer.md)

The source of the sound.

##### options?

`Partial`\<[`IStaticSoundOptions`](../interfaces/IStaticSoundOptions.md)\>

The options for the static sound.

#### Returns

`Promise`\<[`StaticSound`](StaticSound.md)\>

A promise that resolves to the created static sound.

***

### createSoundBufferAsync()

> `abstract` **createSoundBufferAsync**(`source`, `options?`): `Promise`\<[`StaticSoundBuffer`](StaticSoundBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L244)

Creates a new static sound buffer.

#### Parameters

##### source

`string` \| `string`[] \| `ArrayBuffer` \| `AudioBuffer` \| [`StaticSoundBuffer`](StaticSoundBuffer.md)

The source of the sound buffer.

##### options?

`Partial`\<[`IStaticSoundBufferOptions`](../interfaces/IStaticSoundBufferOptions.md)\>

The options for the static sound buffer.

#### Returns

`Promise`\<[`StaticSoundBuffer`](StaticSoundBuffer.md)\>

A promise that resolves to the created static sound buffer.

***

### createSoundSourceAsync()

> `abstract` **createSoundSourceAsync**(`name`, `source`, `options?`): `Promise`\<[`AbstractSoundSource`](AbstractSoundSource.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L256)

Creates a new sound source.

#### Parameters

##### name

`string`

The name of the sound.

##### source

`AudioNode`

The source of the sound.

##### options?

`Partial`\<[`ISoundSourceOptions`](../interfaces/ISoundSourceOptions.md)\>

The options for the sound source.

#### Returns

`Promise`\<[`AbstractSoundSource`](AbstractSoundSource.md)\>

A promise that resolves to the created sound source.

***

### createStreamingSoundAsync()

> `abstract` **createStreamingSoundAsync**(`name`, `source`, `options?`): `Promise`\<[`StreamingSound`](StreamingSound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L265)

Creates a new streaming sound.

#### Parameters

##### name

`string`

The name of the sound.

##### source

`string` \| `string`[] \| `HTMLMediaElement`

The source of the sound.

##### options?

`Partial`\<[`IStreamingSoundOptions`](../interfaces/IStreamingSoundOptions.md)\>

The options for the streaming sound.

#### Returns

`Promise`\<[`StreamingSound`](StreamingSound.md)\>

A promise that resolves to the created streaming sound.

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L270)

Releases associated resources.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### isFormatValid()

> `abstract` **isFormatValid**(`format`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L299)

Checks if the specified format is valid.

#### Parameters

##### format

`string`

The format to check as an audio file extension like "mp3" or "wav".

#### Returns

`boolean`

`true` if the format is valid; otherwise `false`.

***

### pauseAsync()

> `abstract` **pauseAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L305)

Pauses the audio engine if it is running.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the audio engine is paused.

***

### resumeAsync()

> `abstract` **resumeAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L311)

Resumes the audio engine if it is not running.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the audio engine is running.

***

### setVolume()

> `abstract` **setVolume**(`value`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L320)

Sets the audio output volume with optional ramping.
If the duration is 0 then the volume is set immediately, otherwise it is ramped to the new value over the given duration using the given shape.
If a ramp is already in progress then the volume is not set and an error is thrown.

#### Parameters

##### value

`number`

The value to set the volume to.

##### options?

`Partial`\<[`IAudioParameterRampOptions`](../interfaces/IAudioParameterRampOptions.md)\>

The options to use for ramping the volume change.

#### Returns

`void`

***

### unlockAsync()

> **unlockAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L328)

Unlocks the audio engine if it is locked.
- Note that the returned promise may already be resolved if the audio engine is already unlocked.

#### Returns

`Promise`\<`void`\>

A promise that is resolved when the audio engine is unlocked.
