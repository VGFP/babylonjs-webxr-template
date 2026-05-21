[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAudioBusOptions

# Interface: IAudioBusOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L14)

Options for creating an audio bus.

## Extends

- [`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`IStereoAudioOptions`](IStereoAudioOptions.md)

## Properties

### analyzerEnabled

> **analyzerEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L18)

Enable the audio analyzer. Defaults to false.

#### Inherited from

`IAbstractAudioBusOptions.analyzerEnabled`

***

### analyzerFFTSize

> **analyzerFFTSize**: [`AudioAnalyzerFFTSizeType`](../type-aliases/AudioAnalyzerFFTSizeType.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L22)

The size of the FFT (fast fourier transform) to use when converting time-domain data to frequency-domain data. Default is 2048.

#### Inherited from

`IAbstractAudioBusOptions.analyzerFFTSize`

***

### analyzerMaxDecibels

> **analyzerMaxDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L32)

The maximum decibel value for the range of the analyzer. Default is -30.

#### Inherited from

`IAbstractAudioBusOptions.analyzerMaxDecibels`

***

### analyzerMinDecibels

> **analyzerMinDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L27)

The minimum decibel value for the range of the analyzer. Default is -100.

#### Inherited from

`IAbstractAudioBusOptions.analyzerMinDecibels`

***

### analyzerSmoothing

> **analyzerSmoothing**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L37)

A number between 0 and 1 that determines how quickly the analyzer's value changes. Default is 0.8.

#### Inherited from

`IAbstractAudioBusOptions.analyzerSmoothing`

***

### outBus

> **outBus**: [`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/audioBus.ts#L19)

The output bus of the audio bus. Defaults to the audio engine's default main bus.

#### See

[AudioEngineV2.defaultMainBus](../classes/AudioEngineV2.md#defaultmainbus)

***

### spatialAutoUpdate

> **spatialAutoUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L28)

Whether to automatically update the spatial properties of the audio node. Defaults to `true`.

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialAutoUpdate`](ISpatialAudioOptions.md#spatialautoupdate)

***

### spatialConeInnerAngle

> **spatialConeInnerAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L33)

The spatial cone inner angle, in radians. Defaults to 2π.
- When the listener is inside the cone inner angle, the volume is at its maximum.

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialConeInnerAngle`](ISpatialAudioOptions.md#spatialconeinnerangle)

***

### spatialConeOuterAngle

> **spatialConeOuterAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L39)

The spatial cone outer angle, in radians. Defaults to 2π.
- When the listener is between the the cone inner and outer angles, the volume fades to its minimum as the listener approaches the outer angle.
- When the listener is outside the cone outer angle, the volume is at its minimum.

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialConeOuterAngle`](ISpatialAudioOptions.md#spatialconeouterangle)

***

### spatialConeOuterVolume

> **spatialConeOuterVolume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L43)

The amount of volume reduction outside the [spatialConeOuterAngle](ISpatialAudioOptions.md#spatialconeouterangle). Defaults to 0.

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialConeOuterVolume`](ISpatialAudioOptions.md#spatialconeoutervolume)

***

### spatialDistanceModel

> **spatialDistanceModel**: `"linear"` \| `"inverse"` \| `"exponential"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L56)

The algorithm to use to reduce the volume of the audio source as it moves away from the listener. Defaults to "inverse".

Possible values are:
- `"linear"`: The volume is reduced linearly as the source moves away from the listener.
- `"inverse"`: The volume is reduced inversely as the source moves away from the listener.
- `"exponential"`: The volume is reduced exponentially as the source moves away from the listener.

#### See

 - [spatialMaxDistance](ISpatialAudioOptions.md#spatialmaxdistance)
 - [spatialMinDistance](ISpatialAudioOptions.md#spatialmindistance)
 - [spatialRolloffFactor](ISpatialAudioOptions.md#spatialrollofffactor)

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialDistanceModel`](ISpatialAudioOptions.md#spatialdistancemodel)

***

### spatialEnabled

> **spatialEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L68)

Enable spatial audio. Defaults to false.

When set to `true`, the audio node's spatial properties will be initialized on creation and there will be no
delay when setting the first spatial value.

When not specified, or set to `false`, the audio node's spatial properties will not be initialized on creation
and there will be a small delay when setting the first spatial value.

- This option is ignored if any other spatial options are set.

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialEnabled`](ISpatialAudioOptions.md#spatialenabled)

***

### spatialMaxDistance

> **spatialMaxDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L74)

The maximum distance between the audio source and the listener, after which the volume is not reduced any further. Defaults to 10000.
- This value is used only when the [spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel) is set to `"linear"`.

#### See

[spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel)

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialMaxDistance`](ISpatialAudioOptions.md#spatialmaxdistance)

***

### spatialMinDistance

> **spatialMinDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L99)

The distance for reducing volume as the audio source moves away from the listener – i.e. the distance the volume reduction starts at. Defaults to 1.
- This value is used by all distance models.

#### See

[spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel)

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialMinDistance`](ISpatialAudioOptions.md#spatialmindistance)

***

### spatialMinUpdateTime

> **spatialMinUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L79)

The minimum update time in seconds of the spatialization if it is attached to a mesh or transform node. Defaults to `0`.
- The spatialization's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialMinUpdateTime`](ISpatialAudioOptions.md#spatialminupdatetime)

***

### spatialOrientation

> **spatialOrientation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L83)

The spatial orientation used to determine the direction of the audio source. Defaults to (0, 0, -1).

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialOrientation`](ISpatialAudioOptions.md#spatialorientation)

***

### spatialPanningModel

> **spatialPanningModel**: `"equalpower"` \| `"HRTF"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L89)

Possible values are:
- `"equalpower"`: Represents the equal-power panning algorithm, generally regarded as simple and efficient.
- `"HRTF"`: Renders a stereo output of higher quality than `"equalpower"` — it uses a convolution with measured impulse responses from human subjects.

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialPanningModel`](ISpatialAudioOptions.md#spatialpanningmodel)

***

### spatialPosition

> **spatialPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L93)

The spatial position. Defaults to (0, 0, 0).

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialPosition`](ISpatialAudioOptions.md#spatialposition)

***

### spatialRolloffFactor

> **spatialRolloffFactor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L105)

How quickly the volume is reduced as the source moves away from the listener. Defaults to 1.
- This value is used by all distance models.

#### See

[spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel)

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialRolloffFactor`](ISpatialAudioOptions.md#spatialrollofffactor)

***

### spatialRotation

> **spatialRotation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L109)

The spatial rotation, as Euler angles. Defaults to (0, 0, 0).

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialRotation`](ISpatialAudioOptions.md#spatialrotation)

***

### spatialRotationQuaternion

> **spatialRotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L113)

The spatial rotation, as a quaternion. Defaults to (0, 0, 0, 1).

#### Inherited from

[`ISpatialAudioOptions`](ISpatialAudioOptions.md).[`spatialRotationQuaternion`](ISpatialAudioOptions.md#spatialrotationquaternion)

***

### stereoEnabled

> **stereoEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts#L18)

Enable stereo. Defaults to false.

When set to `true`, the audio node's stereo properties will be initialized on creation and there will be no
delay when setting the first stereo value.

When not specified, or set to `false`, the audio node's stereo properties will not be initialized on creation
and there will be a small delay when setting the first stereo value.

- This option is ignored if any other stereo options are set.

#### Inherited from

[`IStereoAudioOptions`](IStereoAudioOptions.md).[`stereoEnabled`](IStereoAudioOptions.md#stereoenabled)

***

### stereoPan

> **stereoPan**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts#L22)

The stereo pan from -1 (left) to 1 (right). Defaults to 0.

#### Inherited from

[`IStereoAudioOptions`](IStereoAudioOptions.md).[`stereoPan`](IStereoAudioOptions.md#stereopan)

***

### volume

> **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts#L20)

The volume/gain. Defaults to 1.

#### Inherited from

`IAbstractAudioBusOptions.volume`
