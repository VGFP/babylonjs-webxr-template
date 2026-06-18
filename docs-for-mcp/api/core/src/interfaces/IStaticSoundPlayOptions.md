[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IStaticSoundPlayOptions

# Interface: IStaticSoundPlayOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L56)

Options for playing a static sound.

## Extends

- [`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md)

## Properties

### duration

> **duration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L15)

The amount of time to play the sound for, in seconds. Defaults to `0`.
- If less than or equal to `0`, the sound plays for its full duration.

#### Inherited from

`IStaticSoundOptionsBase.duration`

***

### loop

> **loop**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L27)

Whether the sound should loop. Defaults to `false`.

#### Inherited from

[`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md).[`loop`](IAbstractSoundPlayOptions.md#loop)

***

### loopEnd

> **loopEnd**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L21)

The end of the loop range in seconds. Defaults to `0`.
- If less than or equal to `0`, the loop plays for the sound's full duration.
- Has no effect if [loop](#loop) is `false`.

#### Inherited from

`IStaticSoundOptionsBase.loopEnd`

***

### loopStart

> **loopStart**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L28)

The start of the loop range in seconds. Defaults to `0`.
- If less than or equal to `0`, the loop starts at the beginning of the sound.
- Has no effect if [loop](#loop) is `false`.

#### Inherited from

`IStaticSoundOptionsBase.loopStart`

***

### startOffset

> **startOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L31)

The time within the sound buffer to start playing at, in seconds. Defaults to `0`.

#### Inherited from

[`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md).[`startOffset`](IAbstractSoundPlayOptions.md#startoffset)

***

### volume

> **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts#L20)

The volume/gain. Defaults to 1.

#### Inherited from

[`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md).[`volume`](IAbstractSoundPlayOptions.md#volume)

***

### waitTime

> **waitTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L60)

The time to wait before playing the sound, in seconds. Defaults to `0`.
