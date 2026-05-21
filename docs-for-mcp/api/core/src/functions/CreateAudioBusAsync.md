[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateAudioBusAsync

# Function: CreateAudioBusAsync()

> **CreateAudioBusAsync**(`name`, `options?`, `engine?`): `Promise`\<[`AudioBus`](../classes/AudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L346)

Creates a new audio bus.

## Parameters

### name

`string`

The name of the audio bus.

### options?

`Partial`\<[`IAudioBusOptions`](../interfaces/IAudioBusOptions.md)\> = `{}`

The options to use when creating the audio bus.

### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\> = `null`

The audio engine.

## Returns

`Promise`\<[`AudioBus`](../classes/AudioBus.md)\>

A promise that resolves with the created audio bus.
