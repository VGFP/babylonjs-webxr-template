[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateStreamingSoundAsync

# Function: CreateStreamingSoundAsync()

> **CreateStreamingSoundAsync**(`name`, `source`, `options?`, `engine?`): `Promise`\<[`StreamingSound`](../classes/StreamingSound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L504)

Creates a new streaming sound.

## Parameters

### name

`string`

The name of the sound.

### source

`string` \| `string`[] \| `HTMLMediaElement`

The source of the sound.

### options?

`Partial`\<[`IStreamingSoundOptions`](../interfaces/IStreamingSoundOptions.md)\> = `{}`

The options for the streaming sound.

### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\> = `null`

The audio engine.

## Returns

`Promise`\<[`StreamingSound`](../classes/StreamingSound.md)\>

A promise that resolves to the created streaming sound.
