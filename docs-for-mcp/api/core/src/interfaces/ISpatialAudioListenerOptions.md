[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISpatialAudioListenerOptions

# Interface: ISpatialAudioListenerOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L15)

Options for spatial audio.

## Extended by

- [`IAudioEngineV2Options`](IAudioEngineV2Options.md)

## Properties

### listenerAutoUpdate

> **listenerAutoUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L19)

Whether to automatically update the position and rotation of the listener. Defaults to `true`.

***

### listenerEnabled

> **listenerEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L23)

Set to `true` to enable the listener. Defaults to `false`.

***

### listenerMinUpdateTime

> **listenerMinUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L28)

The minimum update time in seconds of the listener if it is attached to a mesh, scene or transform node. Defaults to `0`.
- The listener's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

***

### listenerPosition

> **listenerPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L32)

The listener position. Defaults to (0, 0, 0).

***

### listenerRotation

> **listenerRotation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L36)

The listener rotation, as Euler angles. Defaults to (0, 0, 0).

***

### listenerRotationQuaternion

> **listenerRotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L40)

The listener rotation, as a quaternion. Defaults to (0, 0, 0, 1).
