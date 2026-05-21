[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateSoundAsync

# Function: CreateSoundAsync()

> **CreateSoundAsync**(`name`, `source`, `options?`, `engine?`): `Promise`\<[`StaticSound`](../classes/StaticSound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:386](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L386)

Creates a new static sound.

## Parameters

### name

`string`

The name of the sound.

### source

`string` \| `string`[] \| `ArrayBuffer` \| `AudioBuffer` \| [`StaticSoundBuffer`](../classes/StaticSoundBuffer.md)

The source of the sound.

### options?

`Partial`\<[`IStaticSoundOptions`](../interfaces/IStaticSoundOptions.md)\> = `{}`

The options for the static sound.

### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\> = `null`

The audio engine.

## Returns

`Promise`\<[`StaticSound`](../classes/StaticSound.md)\>

A promise that resolves to the created static sound.
