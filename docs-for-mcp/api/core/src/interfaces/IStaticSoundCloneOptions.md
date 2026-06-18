[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IStaticSoundCloneOptions

# Interface: IStaticSoundCloneOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L77)

Options for cloning a static sound.
-

## See

StaticSound.clone.

## Properties

### cloneBuffer

> **cloneBuffer**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L83)

Whether to clone the sound buffer when cloning the sound. Defaults to `false`.
- If `true`, the original sound's buffer is cloned, and the cloned sound will use its own copy.
- If `false`, the sound buffer is shared with the original sound.

***

### outBus

> **outBus**: [`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/staticSound.ts#L90)

The output bus for the cloned sound. Defaults to `null`.
- If not set or `null`, the cloned sound uses the original sound's `outBus`.

#### See

[AudioEngineV2.defaultMainBus](../classes/AudioEngineV2.md#defaultmainbus)
