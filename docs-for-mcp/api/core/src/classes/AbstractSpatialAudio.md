[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractSpatialAudio

# Abstract Class: AbstractSpatialAudio

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L145)

Abstract class representing the `spatial` audio property on a sound or audio bus.

## See

[AudioEngineV2.listener](AudioEngineV2.md#listener)

## Constructors

### Constructor

> **new AbstractSpatialAudio**(): `AbstractSpatialAudio`

#### Returns

`AbstractSpatialAudio`

## Properties

### coneInnerAngle

> `abstract` **coneInnerAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L150)

The spatial cone inner angle, in radians. Defaults to 2π.
- When the listener is inside the cone inner angle, the volume is at its maximum.

***

### coneOuterAngle

> `abstract` **coneOuterAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L157)

The spatial cone outer angle, in radians. Defaults to 2π.
- When the listener is between the the cone inner and outer angles, the volume fades to its minimum as the listener approaches the outer angle.
- When the listener is outside the cone outer angle, the volume is at its minimum.

***

### coneOuterVolume

> `abstract` **coneOuterVolume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L162)

The amount of volume reduction outside the [coneOuterAngle](#coneouterangle). Defaults to 0.

***

### distanceModel

> `abstract` **distanceModel**: `"linear"` \| `"inverse"` \| `"exponential"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L176)

The algorithm to use to reduce the volume of the audio source as it moves away from the listener. Defaults to "inverse".

Possible values are:
- `"linear"`: The volume is reduced linearly as the source moves away from the listener.
- `"inverse"`: The volume is reduced inversely as the source moves away from the listener.
- `"exponential"`: The volume is reduced exponentially as the source moves away from the listener.

#### See

 - spatialMaxDistance
 - spatialMinDistance
 - spatialRolloffFactor

***

### isAttached

> `abstract` **isAttached**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L181)

Whether the audio source is attached to a mesh or transform node.

***

### maxDistance

> `abstract` **maxDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L188)

The maximum distance between the audio source and the listener, after which the volume is not reduced any further. Defaults to 10000.
- This value is used only when the [distanceModel](#distancemodel) is set to `"linear"`.

#### See

[distanceModel](#distancemodel)

***

### minDistance

> `abstract` **minDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L195)

The distance for reducing volume as the audio source moves away from the listener – i.e. the distance the volume reduction starts at. Defaults to 1.
- This value is used by all distance models.

#### See

[distanceModel](#distancemodel)

***

### minUpdateTime

> `abstract` **minUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L201)

The minimum update time in seconds of the spatialization if it is attached to a mesh or transform node. Defaults to `0`.
- The spatialization's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

***

### orientation

> `abstract` **orientation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L206)

The spatial orientation used to determine the direction of the audio source. Defaults to (0, 0, -1).

***

### panningModel

> `abstract` **panningModel**: `"equalpower"` \| `"HRTF"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L215)

The spatial panning model. Defaults to "equalpower".

Possible values are:
- `"equalpower"`: Represents the equal-power panning algorithm, generally regarded as simple and efficient.
- `"HRTF"`:Renders a stereo output of higher quality than `"equalpower"` — it uses a convolution with measured impulse responses from human subjects.

***

### position

> `abstract` **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L220)

The spatial position. Defaults to (0, 0, 0).

***

### rolloffFactor

> `abstract` **rolloffFactor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L227)

How quickly the volume is reduced as the source moves away from the listener. Defaults to 1.
- This value is used by all distance models.

#### See

[distanceModel](#distancemodel)

***

### rotation

> `abstract` **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L232)

The spatial rotation used to determine the direction of the audio source. Defaults to (0, 0, 0).

***

### rotationQuaternion

> `abstract` **rotationQuaternion**: [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L237)

The spatial rotation quaternion used to determine the direction of the audio source. Defaults to (0, 0, 0, 1).

## Methods

### attach()

> `abstract` **attach**(`sceneNode`, `useBoundingBox?`, `attachmentType?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L249)

Attaches to a scene node.

Detaches automatically before attaching to the given scene node.
If `sceneNode` is `null` it is the same as calling `detach()`.

#### Parameters

##### sceneNode

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

The scene node to attach to, or `null` to detach.

##### useBoundingBox?

`boolean`

Whether to use the bounding box of the node for positioning. Defaults to `false`.

##### attachmentType?

[`SpatialAudioAttachmentType`](../enumerations/SpatialAudioAttachmentType.md)

Whether to attach to the node's position and/or rotation. Defaults to `PositionAndRotation`.

#### Returns

`void`

***

### detach()

> `abstract` **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L254)

Detaches from the scene node if attached.

#### Returns

`void`

***

### dispose()

> `abstract` **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L263)

#### Returns

`void`

***

### update()

> `abstract` **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L261)

Updates the position and rotation of the associated audio engine object in the audio rendering graph.

This is called automatically by default and only needs to be called manually if automatic updates are disabled.

#### Returns

`void`
