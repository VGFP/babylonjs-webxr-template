[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IStreamingSoundPlayOptions

# Interface: IStreamingSoundPlayOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/streamingSound.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/streamingSound.ts#L22)

Options for playing a streaming sound.

## Extends

- [`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md)

## Properties

### loop

> **loop**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L27)

Whether the sound should loop. Defaults to `false`.

#### Inherited from

[`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md).[`loop`](IAbstractSoundPlayOptions.md#loop)

***

### startOffset

> **startOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L31)

The time within the sound buffer to start playing at, in seconds. Defaults to `0`.

#### Inherited from

[`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md).[`startOffset`](IAbstractSoundPlayOptions.md#startoffset)

***

### volume

> **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts#L20)

The volume/gain. Defaults to 1.

#### Inherited from

[`IAbstractSoundPlayOptions`](IAbstractSoundPlayOptions.md).[`volume`](IAbstractSoundPlayOptions.md#volume)
