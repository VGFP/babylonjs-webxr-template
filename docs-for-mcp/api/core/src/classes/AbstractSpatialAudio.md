[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractSpatialAudio

# Abstract Class: AbstractSpatialAudio

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L154)

Abstract class representing the `spatial` audio property on a sound or audio bus.

## See

[AudioEngineV2.listener](AudioEngineV2.md#listener)

## Constructors

### Constructor

> **new AbstractSpatialAudio**(): `AbstractSpatialAudio`

#### Returns

`AbstractSpatialAudio`

## Properties

### attachedNode

> `abstract` **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L195)

The scene node this spatial audio is currently attached to, or `null` if not attached.

***

### attachmentType

> `abstract` **attachmentType**: [`SpatialAudioAttachmentType`](../enumerations/SpatialAudioAttachmentType.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L207)

Which components (position, rotation, or both) of the attached scene node's world transform drive the spatial audio.
- Only meaningful while [isAttached](#isattached) is `true`.

***

### coneInnerAngle

> `abstract` **coneInnerAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L159)

The spatial cone inner angle, in radians. Defaults to 2π.
- When the listener is inside the cone inner angle, the volume is at its maximum.

***

### coneOuterAngle

> `abstract` **coneOuterAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L166)

The spatial cone outer angle, in radians. Defaults to 2π.
- When the listener is between the the cone inner and outer angles, the volume fades to its minimum as the listener approaches the outer angle.
- When the listener is outside the cone outer angle, the volume is at its minimum.

***

### coneOuterVolume

> `abstract` **coneOuterVolume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L171)

The amount of volume reduction outside the [coneOuterAngle](#coneouterangle). Defaults to 0.

***

### distanceModel

> `abstract` **distanceModel**: `"linear"` \| `"inverse"` \| `"exponential"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L185)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L190)

Whether the audio source is attached to a mesh or transform node.

***

### maxDistance

> `abstract` **maxDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L214)

The maximum distance between the audio source and the listener, after which the volume is not reduced any further. Defaults to 10000.
- This value is used only when the [distanceModel](#distancemodel) is set to `"linear"`.

#### See

[distanceModel](#distancemodel)

***

### minDistance

> `abstract` **minDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L221)

The distance for reducing volume as the audio source moves away from the listener – i.e. the distance the volume reduction starts at. Defaults to 1.
- This value is used by all distance models.

#### See

[distanceModel](#distancemodel)

***

### minUpdateTime

> `abstract` **minUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L227)

The minimum update time in seconds of the spatialization if it is attached to a mesh or transform node. Defaults to `0`.
- The spatialization's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

***

### orientation

> `abstract` **orientation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L232)

The spatial orientation used to determine the direction of the audio source. Defaults to (0, 0, -1).

***

### panningEnabled

> `abstract` **panningEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L240)

Whether to spatially pan the audio source. Defaults to `true`.

When set to `false`, the source keeps distance attenuation but does not pan between the left and right channels.
Sound cone attenuation is not applied while panning is disabled.

***

### panningModel

> `abstract` **panningModel**: `"equalpower"` \| `"HRTF"`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L249)

The spatial panning model. Defaults to "equalpower".

Possible values are:
- `"equalpower"`: Represents the equal-power panning algorithm, generally regarded as simple and efficient.
- `"HRTF"`:Renders a stereo output of higher quality than `"equalpower"` — it uses a convolution with measured impulse responses from human subjects.

***

### position

> `abstract` **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L254)

The spatial position. Defaults to (0, 0, 0).

***

### rolloffFactor

> `abstract` **rolloffFactor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L261)

How quickly the volume is reduced as the source moves away from the listener. Defaults to 1.
- This value is used by all distance models.

#### See

[distanceModel](#distancemodel)

***

### rotation

> `abstract` **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L266)

The spatial rotation used to determine the direction of the audio source. Defaults to (0, 0, 0).

***

### rotationQuaternion

> `abstract` **rotationQuaternion**: [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L271)

The spatial rotation quaternion used to determine the direction of the audio source. Defaults to (0, 0, 0, 1).

***

### useBoundingBox

> `abstract` **useBoundingBox**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L201)

Whether the spatial audio is positioned using the attached scene node's bounding box (when the node is a mesh) instead of its world transform.
- Only meaningful while [isAttached](#isattached) is `true`.

## Methods

### attach()

> `abstract` **attach**(`sceneNode`, `useBoundingBox?`, `attachmentType?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L283)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L288)

Detaches from the scene node if attached.

#### Returns

`void`

***

### dispose()

> `abstract` **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L300)

Releases associated resources.

#### Returns

`void`

***

### update()

> `abstract` **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.ts#L295)

Updates the position and rotation of the associated audio engine object in the audio rendering graph.

This is called automatically by default and only needs to be called manually if automatic updates are disabled.

#### Returns

`void`
