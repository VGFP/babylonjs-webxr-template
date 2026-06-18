[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAudioEngineV2Options

# Interface: IAudioEngineV2Options

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L39)

Options for creating a v2 audio engine.

## Extends

- [`ISpatialAudioListenerOptions`](ISpatialAudioListenerOptions.md)

## Extended by

- [`IWebAudioEngineOptions`](IWebAudioEngineOptions.md)

## Properties

### listenerAutoUpdate

> **listenerAutoUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L19)

Whether to automatically update the position and rotation of the listener. Defaults to `true`.

#### Inherited from

[`ISpatialAudioListenerOptions`](ISpatialAudioListenerOptions.md).[`listenerAutoUpdate`](ISpatialAudioListenerOptions.md#listenerautoupdate)

***

### listenerEnabled

> **listenerEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L23)

Set to `true` to enable the listener. Defaults to `false`.

#### Inherited from

[`ISpatialAudioListenerOptions`](ISpatialAudioListenerOptions.md).[`listenerEnabled`](ISpatialAudioListenerOptions.md#listenerenabled)

***

### listenerMinUpdateTime

> **listenerMinUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L28)

The minimum update time in seconds of the listener if it is attached to a mesh, scene or transform node. Defaults to `0`.
- The listener's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

#### Inherited from

[`ISpatialAudioListenerOptions`](ISpatialAudioListenerOptions.md).[`listenerMinUpdateTime`](ISpatialAudioListenerOptions.md#listenerminupdatetime)

***

### listenerPosition

> **listenerPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L32)

The listener position. Defaults to (0, 0, 0).

#### Inherited from

[`ISpatialAudioListenerOptions`](ISpatialAudioListenerOptions.md).[`listenerPosition`](ISpatialAudioListenerOptions.md#listenerposition)

***

### listenerRotation

> **listenerRotation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L36)

The listener rotation, as Euler angles. Defaults to (0, 0, 0).

#### Inherited from

[`ISpatialAudioListenerOptions`](ISpatialAudioListenerOptions.md).[`listenerRotation`](ISpatialAudioListenerOptions.md#listenerrotation)

***

### listenerRotationQuaternion

> **listenerRotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L40)

The listener rotation, as a quaternion. Defaults to (0, 0, 0, 1).

#### Inherited from

[`ISpatialAudioListenerOptions`](ISpatialAudioListenerOptions.md).[`listenerRotationQuaternion`](ISpatialAudioListenerOptions.md#listenerrotationquaternion)

***

### parameterRampDuration

> **parameterRampDuration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L43)

The smoothing duration to use when changing audio parameters, in seconds. Defaults to `0.01` (10 milliseconds).

***

### volume

> **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L47)

The initial output volume of the audio engine. Defaults to `1`.
