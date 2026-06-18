[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IStreamingSoundOptions

# Interface: IStreamingSoundOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/streamingSound.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/streamingSound.ts#L17)

Options for creating a streaming sound.

## Extends

- [`IAbstractSoundOptions`](IAbstractSoundOptions.md)

## Properties

### analyzerEnabled

> **analyzerEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L21)

Enable the audio analyzer. Defaults to false.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`analyzerEnabled`](IAbstractSoundOptions.md#analyzerenabled)

***

### analyzerFFTSize

> **analyzerFFTSize**: [`AudioAnalyzerFFTSizeType`](../type-aliases/AudioAnalyzerFFTSizeType.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L25)

The size of the FFT (fast fourier transform) to use when converting time-domain data to frequency-domain data. Default is 2048.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`analyzerFFTSize`](IAbstractSoundOptions.md#analyzerfftsize)

***

### analyzerMaxDecibels

> **analyzerMaxDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L35)

The maximum decibel value for the range of the analyzer. Default is -30.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`analyzerMaxDecibels`](IAbstractSoundOptions.md#analyzermaxdecibels)

***

### analyzerMinDecibels

> **analyzerMinDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L30)

The minimum decibel value for the range of the analyzer. Default is -100.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`analyzerMinDecibels`](IAbstractSoundOptions.md#analyzermindecibels)

***

### analyzerSmoothing

> **analyzerSmoothing**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L40)

A number between 0 and 1 that determines how quickly the analyzer's value changes. Default is 0.8.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`analyzerSmoothing`](IAbstractSoundOptions.md#analyzersmoothing)

***

### autoplay

> **autoplay**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L15)

Whether the sound should start playing automatically. Defaults to `false`.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`autoplay`](IAbstractSoundOptions.md#autoplay)

***

### loop

> **loop**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L27)

Whether the sound should loop. Defaults to `false`.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`loop`](IAbstractSoundOptions.md#loop)

***

### maxInstances

> **maxInstances**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L19)

The maximum number of instances that can play at the same time. Defaults to `Infinity`.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`maxInstances`](IAbstractSoundOptions.md#maxinstances)

***

### outBus

> **outBus**: [`Nullable`](../type-aliases/Nullable.md)\<[`PrimaryAudioBus`](../type-aliases/PrimaryAudioBus.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L18)

The output bus for the sound source. Defaults to `null`.
- If not set or `null`, and `outBusAutoDefault` is `true`, then the sound source is automatically connected to the audio engine's default main bus.

#### See

[AudioEngineV2.defaultMainBus](../classes/AudioEngineV2.md#defaultmainbus)

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`outBus`](IAbstractSoundOptions.md#outbus)

***

### outBusAutoDefault

> **outBusAutoDefault**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSoundSource.ts#L23)

Whether the sound's `outBus` should default to the audio engine's main bus. Defaults to `true` for all sound sources except microphones.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`outBusAutoDefault`](IAbstractSoundOptions.md#outbusautodefault)

***

### preloadCount

> **preloadCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/streamingSound.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/streamingSound.ts#L11)

The number of instances to preload. Defaults to 1.

#### Inherited from

`IStreamingSoundOptionsBase.preloadCount`

***

### spatialAutoUpdate

> **spatialAutoUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L29)

Whether to automatically update the spatial properties of the audio node. Defaults to `true`.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialAutoUpdate`](IAbstractSoundOptions.md#spatialautoupdate)

***

### spatialConeInnerAngle

> **spatialConeInnerAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L34)

The spatial cone inner angle, in radians. Defaults to 2π.
- When the listener is inside the cone inner angle, the volume is at its maximum.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialConeInnerAngle`](IAbstractSoundOptions.md#spatialconeinnerangle)

***

### spatialConeOuterAngle

> **spatialConeOuterAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L40)

The spatial cone outer angle, in radians. Defaults to 2π.
- When the listener is between the the cone inner and outer angles, the volume fades to its minimum as the listener approaches the outer angle.
- When the listener is outside the cone outer angle, the volume is at its minimum.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialConeOuterAngle`](IAbstractSoundOptions.md#spatialconeouterangle)

***

### spatialConeOuterVolume

> **spatialConeOuterVolume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L44)

The amount of volume reduction outside the [spatialConeOuterAngle](ISpatialAudioOptions.md#spatialconeouterangle). Defaults to 0.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialConeOuterVolume`](IAbstractSoundOptions.md#spatialconeoutervolume)

***

### spatialDistanceModel

> **spatialDistanceModel**: `"linear"` \| `"inverse"` \| `"exponential"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L57)

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

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialDistanceModel`](IAbstractSoundOptions.md#spatialdistancemodel)

***

### spatialEnabled

> **spatialEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L69)

Enable spatial audio. Defaults to false.

When set to `true`, the audio node's spatial properties will be initialized on creation and there will be no
delay when setting the first spatial value.

When not specified, or set to `false`, the audio node's spatial properties will not be initialized on creation
and there will be a small delay when setting the first spatial value.

- This option is ignored if any other spatial options are set.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialEnabled`](IAbstractSoundOptions.md#spatialenabled)

***

### spatialMaxDistance

> **spatialMaxDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L75)

The maximum distance between the audio source and the listener, after which the volume is not reduced any further. Defaults to 10000.
- This value is used only when the [spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel) is set to `"linear"`.

#### See

[spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel)

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialMaxDistance`](IAbstractSoundOptions.md#spatialmaxdistance)

***

### spatialMinDistance

> **spatialMinDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L107)

The distance for reducing volume as the audio source moves away from the listener – i.e. the distance the volume reduction starts at. Defaults to 1.
- This value is used by all distance models.

#### See

[spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel)

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialMinDistance`](IAbstractSoundOptions.md#spatialmindistance)

***

### spatialMinUpdateTime

> **spatialMinUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L80)

The minimum update time in seconds of the spatialization if it is attached to a mesh or transform node. Defaults to `0`.
- The spatialization's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialMinUpdateTime`](IAbstractSoundOptions.md#spatialminupdatetime)

***

### spatialOrientation

> **spatialOrientation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L84)

The spatial orientation used to determine the direction of the audio source. Defaults to (0, 0, -1).

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialOrientation`](IAbstractSoundOptions.md#spatialorientation)

***

### spatialPanningEnabled

> **spatialPanningEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L91)

Whether to spatially pan the audio source. Defaults to `true`.

When set to `false`, the source keeps distance attenuation but does not pan between the left and right channels.
Sound cone attenuation is not applied while panning is disabled.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialPanningEnabled`](IAbstractSoundOptions.md#spatialpanningenabled)

***

### spatialPanningModel

> **spatialPanningModel**: `"equalpower"` \| `"HRTF"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L97)

Possible values are:
- `"equalpower"`: Represents the equal-power panning algorithm, generally regarded as simple and efficient.
- `"HRTF"`: Renders a stereo output of higher quality than `"equalpower"` — it uses a convolution with measured impulse responses from human subjects.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialPanningModel`](IAbstractSoundOptions.md#spatialpanningmodel)

***

### spatialPosition

> **spatialPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L101)

The spatial position. Defaults to (0, 0, 0).

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialPosition`](IAbstractSoundOptions.md#spatialposition)

***

### spatialRolloffFactor

> **spatialRolloffFactor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L113)

How quickly the volume is reduced as the source moves away from the listener. Defaults to 1.
- This value is used by all distance models.

#### See

[spatialDistanceModel](ISpatialAudioOptions.md#spatialdistancemodel)

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialRolloffFactor`](IAbstractSoundOptions.md#spatialrollofffactor)

***

### spatialRotation

> **spatialRotation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L117)

The spatial rotation, as Euler angles. Defaults to (0, 0, 0).

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialRotation`](IAbstractSoundOptions.md#spatialrotation)

***

### spatialRotationQuaternion

> **spatialRotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L121)

The spatial rotation, as a quaternion. Defaults to (0, 0, 0, 1).

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`spatialRotationQuaternion`](IAbstractSoundOptions.md#spatialrotationquaternion)

***

### startOffset

> **startOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractSound.ts#L31)

The time within the sound buffer to start playing at, in seconds. Defaults to `0`.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`startOffset`](IAbstractSoundOptions.md#startoffset)

***

### stereoEnabled

> **stereoEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts#L18)

Enable stereo. Defaults to false.

When set to `true`, the audio node's stereo properties will be initialized on creation and there will be no
delay when setting the first stereo value.

When not specified, or set to `false`, the audio node's stereo properties will not be initialized on creation
and there will be a small delay when setting the first stereo value.

- This option is ignored if any other stereo options are set.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`stereoEnabled`](IAbstractSoundOptions.md#stereoenabled)

***

### stereoPan

> **stereoPan**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts#L22)

The stereo pan from -1 (left) to 1 (right). Defaults to 0.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`stereoPan`](IAbstractSoundOptions.md#stereopan)

***

### volume

> **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts#L20)

The volume/gain. Defaults to 1.

#### Inherited from

[`IAbstractSoundOptions`](IAbstractSoundOptions.md).[`volume`](IAbstractSoundOptions.md#volume)
