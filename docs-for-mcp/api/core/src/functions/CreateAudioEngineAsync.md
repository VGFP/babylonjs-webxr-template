[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateAudioEngineAsync

# Function: CreateAudioEngineAsync()

> **CreateAudioEngineAsync**(`options?`): `Promise`\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L55)

Creates a new v2 audio engine that uses the WebAudio API.

## Parameters

### options?

`Partial`\<[`IWebAudioEngineOptions`](../interfaces/IWebAudioEngineOptions.md)\> = `{}`

The options for creating the audio engine.

## Returns

`Promise`\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\>

A promise that resolves with the created audio engine.
