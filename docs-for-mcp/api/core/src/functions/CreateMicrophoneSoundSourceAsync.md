[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateMicrophoneSoundSourceAsync

# Function: CreateMicrophoneSoundSourceAsync()

> **CreateMicrophoneSoundSourceAsync**(`name`, `options?`, `engine?`): `Promise`\<`AbstractSoundSource`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L372)

Creates a new microphone sound source.

## Parameters

### name

`string`

The name of the sound.

### options?

`Partial`\<`ISoundSourceOptions`\> = `{}`

The options for the sound source.

### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\> = `null`

The audio engine.

## Returns

`Promise`\<`AbstractSoundSource`\>

A promise that resolves to the created sound source.
