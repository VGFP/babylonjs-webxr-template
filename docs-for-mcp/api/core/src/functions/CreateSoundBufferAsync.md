[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateSoundBufferAsync

# Function: CreateSoundBufferAsync()

> **CreateSoundBufferAsync**(`source`, `options?`, `engine?`): `Promise`\<[`StaticSoundBuffer`](../classes/StaticSoundBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L403)

Creates a new static sound buffer.

## Parameters

### source

`string` \| `string`[] \| `ArrayBuffer` \| `AudioBuffer` \| [`StaticSoundBuffer`](../classes/StaticSoundBuffer.md)

The source of the sound buffer.

### options?

`Partial`\<[`IStaticSoundBufferOptions`](../interfaces/IStaticSoundBufferOptions.md)\> = `{}`

The options for the static sound buffer.

### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\> = `null`

The audio engine.

## Returns

`Promise`\<[`StaticSoundBuffer`](../classes/StaticSoundBuffer.md)\>

A promise that resolves to the created static sound buffer.
