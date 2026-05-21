[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebAudioEngineOptions

# Interface: IWebAudioEngineOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L23)

Options for creating a v2 audio engine that uses the WebAudio API.

## Extends

- [`IAudioEngineV2Options`](IAudioEngineV2Options.md)

## Properties

### audioContext

> **audioContext**: `AudioContext`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L27)

The audio context to be used by the engine.

***

### defaultUIParentElement?

> `optional` **defaultUIParentElement?**: `HTMLElement`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L31)

The default UI's parent element. Defaults to the last created graphics engine's canvas if it exists; otherwise the HTML document's body.

***

### disableDefaultUI?

> `optional` **disableDefaultUI?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L35)

Set to `true` to disable the default UI. Defaults to `false`.

***

### listenerAutoUpdate

> **listenerAutoUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L19)

Whether to automatically update the position and rotation of the listener. Defaults to `true`.

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`listenerAutoUpdate`](IAudioEngineV2Options.md#listenerautoupdate)

***

### listenerEnabled

> **listenerEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L23)

Set to `true` to enable the listener. Defaults to `false`.

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`listenerEnabled`](IAudioEngineV2Options.md#listenerenabled)

***

### listenerMinUpdateTime

> **listenerMinUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L28)

The minimum update time in seconds of the listener if it is attached to a mesh, scene or transform node. Defaults to `0`.
- The listener's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`listenerMinUpdateTime`](IAudioEngineV2Options.md#listenerminupdatetime)

***

### listenerPosition

> **listenerPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L32)

The listener position. Defaults to (0, 0, 0).

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`listenerPosition`](IAudioEngineV2Options.md#listenerposition)

***

### listenerRotation

> **listenerRotation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L36)

The listener rotation, as Euler angles. Defaults to (0, 0, 0).

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`listenerRotation`](IAudioEngineV2Options.md#listenerrotation)

***

### listenerRotationQuaternion

> **listenerRotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L40)

The listener rotation, as a quaternion. Defaults to (0, 0, 0, 1).

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`listenerRotationQuaternion`](IAudioEngineV2Options.md#listenerrotationquaternion)

***

### parameterRampDuration

> **parameterRampDuration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L34)

The smoothing duration to use when changing audio parameters, in seconds. Defaults to `0.01` (10 milliseconds).

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`parameterRampDuration`](IAudioEngineV2Options.md#parameterrampduration)

***

### resumeOnInteraction

> **resumeOnInteraction**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L39)

Set to `true` to automatically resume the audio context when the user interacts with the page. Defaults to `true`.

***

### resumeOnPause

> **resumeOnPause**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L43)

Set to `true` to automatically resume the audio context when the browser pauses audio playback. Defaults to `true`.

***

### resumeOnPauseRetryInterval

> **resumeOnPauseRetryInterval**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L47)

The interval in milliseconds to try resuming audio playback when `resumeOnPause` is `true`. Defaults to `1000`.

***

### volume

> **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L38)

The initial output volume of the audio engine. Defaults to `1`.

#### Inherited from

[`IAudioEngineV2Options`](IAudioEngineV2Options.md).[`volume`](IAudioEngineV2Options.md#volume)
