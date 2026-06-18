[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISpatialAudioOptions

# Interface: ISpatialAudioOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L25)

Options for spatial audio.

## Extended by

- [`ISoundSourceOptions`](ISoundSourceOptions.md)
- [`IAudioBusOptions`](IAudioBusOptions.md)

## Properties

### spatialAutoUpdate

> **spatialAutoUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L29)

Whether to automatically update the spatial properties of the audio node. Defaults to `true`.

***

### spatialConeInnerAngle

> **spatialConeInnerAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L34)

The spatial cone inner angle, in radians. Defaults to 2π.
- When the listener is inside the cone inner angle, the volume is at its maximum.

***

### spatialConeOuterAngle

> **spatialConeOuterAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L40)

The spatial cone outer angle, in radians. Defaults to 2π.
- When the listener is between the the cone inner and outer angles, the volume fades to its minimum as the listener approaches the outer angle.
- When the listener is outside the cone outer angle, the volume is at its minimum.

***

### spatialConeOuterVolume

> **spatialConeOuterVolume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L44)

The amount of volume reduction outside the [spatialConeOuterAngle](#spatialconeouterangle). Defaults to 0.

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

 - [spatialMaxDistance](#spatialmaxdistance)
 - [spatialMinDistance](#spatialmindistance)
 - [spatialRolloffFactor](#spatialrollofffactor)

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

***

### spatialMaxDistance

> **spatialMaxDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L75)

The maximum distance between the audio source and the listener, after which the volume is not reduced any further. Defaults to 10000.
- This value is used only when the [spatialDistanceModel](#spatialdistancemodel) is set to `"linear"`.

#### See

[spatialDistanceModel](#spatialdistancemodel)

***

### spatialMinDistance

> **spatialMinDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L107)

The distance for reducing volume as the audio source moves away from the listener – i.e. the distance the volume reduction starts at. Defaults to 1.
- This value is used by all distance models.

#### See

[spatialDistanceModel](#spatialdistancemodel)

***

### spatialMinUpdateTime

> **spatialMinUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L80)

The minimum update time in seconds of the spatialization if it is attached to a mesh or transform node. Defaults to `0`.
- The spatialization's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

***

### spatialOrientation

> **spatialOrientation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L84)

The spatial orientation used to determine the direction of the audio source. Defaults to (0, 0, -1).

***

### spatialPanningEnabled

> **spatialPanningEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L91)

Whether to spatially pan the audio source. Defaults to `true`.

When set to `false`, the source keeps distance attenuation but does not pan between the left and right channels.
Sound cone attenuation is not applied while panning is disabled.

***

### spatialPanningModel

> **spatialPanningModel**: `"equalpower"` \| `"HRTF"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L97)

Possible values are:
- `"equalpower"`: Represents the equal-power panning algorithm, generally regarded as simple and efficient.
- `"HRTF"`: Renders a stereo output of higher quality than `"equalpower"` — it uses a convolution with measured impulse responses from human subjects.

***

### spatialPosition

> **spatialPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L101)

The spatial position. Defaults to (0, 0, 0).

***

### spatialRolloffFactor

> **spatialRolloffFactor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L113)

How quickly the volume is reduced as the source moves away from the listener. Defaults to 1.
- This value is used by all distance models.

#### See

[spatialDistanceModel](#spatialdistancemodel)

***

### spatialRotation

> **spatialRotation**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L117)

The spatial rotation, as Euler angles. Defaults to (0, 0, 0).

***

### spatialRotationQuaternion

> **spatialRotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L121)

The spatial rotation, as a quaternion. Defaults to (0, 0, 0, 1).
