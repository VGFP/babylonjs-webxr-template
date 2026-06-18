[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StaticSoundBuffer

# Abstract Class: StaticSoundBuffer

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L39)

Abstract class representing a static sound buffer.

A static sound buffer is a fully downloaded and decoded array of audio data that is ready to be played.

Static sound buffers can be reused multiple times by different [StaticSound](StaticSound.md) instances.

Static sound buffers are created by the [CreateSoundBufferAsync](../functions/CreateSoundBufferAsync.md) function.

## See

[StaticSound.buffer](StaticSound.md#buffer)

## Properties

### channelCount

> `abstract` `readonly` **channelCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L72)

The number of channels in the sound buffer.

***

### duration

> `abstract` `readonly` **duration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L67)

The duration of the sound buffer, in seconds.

***

### engine

> `readonly` **engine**: [`AudioEngineV2`](AudioEngineV2.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L43)

The engine that the sound buffer belongs to.

***

### length

> `abstract` `readonly` **length**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L62)

The length of the sound buffer, in sample frames.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L48)

The name of the sound buffer.

***

### sampleRate

> `abstract` `readonly` **sampleRate**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L57)

The sample rate of the sound buffer.

## Methods

### clone()

> `abstract` **clone**(`options?`): `StaticSoundBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L78)

Clones the sound buffer.

#### Parameters

##### options?

`Partial`\<[`IStaticSoundBufferCloneOptions`](../interfaces/IStaticSoundBufferCloneOptions.md)\>

Options for cloning the sound buffer.

#### Returns

`StaticSoundBuffer`
