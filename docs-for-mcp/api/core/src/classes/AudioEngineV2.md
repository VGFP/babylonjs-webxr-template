[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AudioEngineV2

# Abstract Class: AudioEngineV2

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L52)

Abstract base class for v2 audio engines.

A v2 audio engine based on the WebAudio API can be created with the [CreateAudioEngineAsync](../functions/CreateAudioEngineAsync.md) function.

## Properties

### currentTime

> `abstract` `readonly` **currentTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L76)

The elapsed time since the audio engine was started, in seconds.

***

### listener

> `abstract` `readonly` **listener**: [`AbstractSpatialAudioListener`](AbstractSpatialAudioListener.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L99)

The spatial audio listener properties for the audio engine.
- Each audio engine has exactly one listener.

***

### mainOut

> `abstract` `readonly` **mainOut**: [`AbstractAudioNode`](AbstractAudioNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L105)

The main output node.
- This is the last node in the audio graph before the audio is sent to the speakers.

***

### state

> `abstract` `readonly` **state**: [`AudioEngineV2State`](../type-aliases/AudioEngineV2State.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L116)

The current state of the audio engine.

Possible values are:
- `"closed"`: The audio engine has been closed.
- `"interrupted"`: The audio engine has been interrupted and is not running.
- `"running"`: The audio engine is running normally.
- `"suspended"`: The audio engine is suspended and is not running.

***

### volume

> `abstract` **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L121)

The output volume of the audio engine.

## Accessors

### defaultMainBus

#### Get Signature

> **get** **defaultMainBus**(): [`Nullable`](../type-aliases/Nullable.md)\<[`MainAudioBus`](MainAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L83)

The default main bus that will be used for audio buses and sounds if their `outBus` option is not set.

##### See

 - [IAudioBusOptions.outBus](../interfaces/IAudioBusOptions.md#outbus)
 - [IAbstractSoundOptions.outBus](../interfaces/IAbstractSoundOptions.md#outbus)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MainAudioBus`](MainAudioBus.md)\>

***

### parameterRampDuration

#### Get Signature

> **get** **parameterRampDuration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L126)

The smoothing duration to use when changing audio parameters, in seconds. Defaults to `0.01` (10 milliseconds).

##### Returns

`number`

#### Set Signature

> **set** **parameterRampDuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L130)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sounds

#### Get Signature

> **get** **sounds**(): readonly [`AbstractSound`](AbstractSound.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L137)

The list of static and streaming sounds created by the audio engine.

##### Returns

readonly [`AbstractSound`](AbstractSound.md)[]

## Methods

### createBusAsync()

> `abstract` **createBusAsync**(`name`, `options?`): `Promise`\<[`AudioBus`](AudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L150)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L158)

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

> `abstract` **createMicrophoneSoundSourceAsync**(`name`, `options?`): `Promise`\<`AbstractSoundSource`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L166)

Creates a new microphone sound source.

#### Parameters

##### name

`string`

The name of the sound.

##### options?

`Partial`\<`ISoundSourceOptions`\>

The options for the sound source.

#### Returns

`Promise`\<`AbstractSoundSource`\>

A promise that resolves to the created sound source.

***

### createSoundAsync()

> `abstract` **createSoundAsync**(`name`, `source`, `options?`): `Promise`\<[`StaticSound`](StaticSound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L175)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L187)

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

> `abstract` **createSoundSourceAsync**(`name`, `source`, `options?`): `Promise`\<`AbstractSoundSource`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L199)

Creates a new sound source.

#### Parameters

##### name

`string`

The name of the sound.

##### source

`AudioNode`

The source of the sound.

##### options?

`Partial`\<`ISoundSourceOptions`\>

The options for the sound source.

#### Returns

`Promise`\<`AbstractSoundSource`\>

A promise that resolves to the created sound source.

***

### createStreamingSoundAsync()

> `abstract` **createStreamingSoundAsync**(`name`, `source`, `options?`): `Promise`\<[`StreamingSound`](StreamingSound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L208)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L213)

Releases associated resources.

#### Returns

`void`

***

### isFormatValid()

> `abstract` **isFormatValid**(`format`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L237)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L243)

Pauses the audio engine if it is running.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the audio engine is paused.

***

### resumeAsync()

> `abstract` **resumeAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L249)

Resumes the audio engine if it is not running.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the audio engine is running.

***

### setVolume()

> `abstract` **setVolume**(`value`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L258)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L266)

Unlocks the audio engine if it is locked.
- Note that the returned promise may already be resolved if the audio engine is already unlocked.

#### Returns

`Promise`\<`void`\>

A promise that is resolved when the audio engine is unlocked.
