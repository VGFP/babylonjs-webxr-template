[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractSpatialAudioListener

# Abstract Class: AbstractSpatialAudioListener

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L62)

Abstract class representing the spatial audio `listener` property on an audio engine.

## See

[AudioEngineV2.listener](AudioEngineV2.md#listener)

## Constructors

### Constructor

> **new AbstractSpatialAudioListener**(): `AbstractSpatialAudioListener`

#### Returns

`AbstractSpatialAudioListener`

## Properties

### attachedNode

> `abstract` **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L71)

The scene node this listener is currently attached to, or `null` if not attached.

***

### isAttached

> `abstract` **isAttached**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L66)

Whether the listener is attached to a camera, mesh or transform node.

***

### minUpdateTime

> `abstract` **minUpdateTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L77)

The minimum update time in seconds of the listener if it is attached to a mesh, scene or transform node. Defaults to `0`.
- The listener's position and rotation will not update faster than this time, but they may update slower depending on the frame rate.

***

### position

> `abstract` **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L82)

The listener position. Defaults to (0, 0, 0).

***

### rotation

> `abstract` **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L87)

The listener rotation, as Euler angles. Defaults to (0, 0, 0).

***

### rotationQuaternion

> `abstract` **rotationQuaternion**: [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L92)

The listener rotation, as a quaternion. Defaults to (0, 0, 0, 1).

## Methods

### attach()

> `abstract` **attach**(`sceneNode`, `useBoundingBox?`, `attachmentType?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L104)

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

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L109)

Detaches from the scene node if attached.

#### Returns

`void`

***

### update()

> `abstract` **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.ts#L116)

Updates the position and rotation of the associated audio engine object in the audio rendering graph.

This is called automatically by default and only needs to be called manually if automatic updates are disabled.

#### Returns

`void`
