[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRTrackedBody

# Class: WebXRTrackedBody

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:876](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L876)

Represents a tracked body during a WebXR session.

This class manages the bridge between the WebXR body pose data and the
Babylon.js scene graph.  It creates a set of [TransformNode](TransformNode.md)s — one per
body joint — whose transforms are updated every frame from the XR runtime.
When a rigged body mesh is attached, its skeleton bones are linked to these
transform nodes, causing the mesh to follow the user's body automatically.

Coordinate-system handling:
- WebXR delivers poses in a right-handed system.
- By default, Babylon.js uses a left-handed system.
- The class converts the data in-place (negating the Z components of every
  4 × 4 joint matrix) before decomposing into Babylon transforms.
- If the mesh was authored in a right-handed tool (the common case for glTF),
  the bone transforms are un-flipped so the skeleton interprets them correctly.

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WebXRTrackedBody**(`scene`, `bodyMesh?`, `rigMapping?`, `jointScaleFactor?`, `preserveBindPoseBonePositions?`, `useBoneOrientationOffsets?`, `aimChildOverrides?`, `jointLocalRotationOffset?`): `WebXRTrackedBody`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1174)

Construct a new tracked body instance.

#### Parameters

##### scene

[`Scene`](Scene.md)

The Babylon.js scene.

##### bodyMesh?

[`AbstractMesh`](AbstractMesh.md)

Optional rigged body mesh to attach immediately.

##### rigMapping?

[`XRBodyMeshRigMapping`](../type-aliases/XRBodyMeshRigMapping.md)

Optional mapping from WebXR joint names to skeleton bone names.

##### jointScaleFactor?

`number` = `1.0`

Scale factor for local joint offsets (default 1.0).

##### preserveBindPoseBonePositions?

`boolean` = `false`

Whether mapped bones should keep bind-pose local translations.

##### useBoneOrientationOffsets?

`boolean` = `false`

Whether mapped bones should correct XR joint rotations using bind-space offsets.

##### aimChildOverrides?

`Partial`\<`Record`\<[`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md), [`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md)\>\>

Per–XR-joint override for the aim child used with `useBoneOrientationOffsets`.

##### jointLocalRotationOffset?

[`Quaternion`](Quaternion.md)

Optional rotation re-basing each XR joint's local frame (e.g. Z-along-bone → Y-along-bone).

#### Returns

`WebXRTrackedBody`

## Properties

### autoCaptureBindOnFirstFrame

> **autoCaptureBindOnFirstFrame**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:996](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L996)

When `true` (default), the first tracked frame after the feature
attaches is used as the "rest" pose for delta-from-bind retargeting.
Set to `false` to require an explicit [captureTrackedBind](#capturetrackedbind) call.

***

### jointLocalRotationOffset

> **jointLocalRotationOffset**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1072](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1072)

Runtime-mutable rotation applied in each tracked joint's local frame to
re-base XR joint axes (e.g., "+Z-along-bone" → "+Y-along-bone").
`null` = identity / disabled.

***

### onBodyMeshSetObservable

> `readonly` **onBodyMeshSetObservable**: [`Observable`](Observable.md)\<`WebXRTrackedBody`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L880)

Fired when the body mesh is changed via [setBodyMesh](#setbodymesh).

## Accessors

### bodyMesh

#### Get Signature

> **get** **bodyMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1100)

Get the current body mesh (if any).

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

***

### jointScaleFactor

#### Get Signature

> **get** **jointScaleFactor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1108)

Get or set the scale factor for local joint offsets.

##### See

[IWebXRBodyTrackingOptions.jointScaleFactor](../interfaces/IWebXRBodyTrackingOptions.md#jointscalefactor)

##### Returns

`number`

#### Set Signature

> **set** **jointScaleFactor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1112)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### jointTransforms

#### Get Signature

> **get** **jointTransforms**(): readonly [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1129)

Returns the array of transform nodes representing each body joint.
The order matches [WebXRBodyTracking.AllBodyJoints](WebXRBodyTracking.md#allbodyjoints); use
[getJointTransform](#getjointtransform) or [getBodyPartTransforms](#getbodyparttransforms) for
name-based lookup.

Note: when a body mesh is attached, these transform nodes are also
used as the skeleton's link targets for mapped joints. In that case
the values held by mapped-joint nodes are skeleton-local (parent bone's
frame), not XR world-space. Unmapped-joint nodes always hold world-space
pose. If you need world-space poses for every joint regardless of
mapping, sample the bone matrices directly via the attached skeleton.

##### Returns

readonly [`TransformNode`](TransformNode.md)[]

## Methods

### captureTrackedBind()

> **captureTrackedBind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1838](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1838)

Capture the current tracked-joint desired-final rotations and positions
as the "rest pose" for delta-from-bind retargeting.

Delta-from-bind is the production retarget path: every subsequent
frame is interpreted as a rotation delta from this snapshot, which
makes retargeting invariant to the XR-joint axis convention and to
any skeletal-proportion differences between the tracked user and the
avatar.

Call this after the user assumes a known rest pose (e.g. T-pose,
A-pose, arms-at-sides). By default the feature auto-captures on the
first tracked frame — disable via [autoCaptureBindOnFirstFrame](#autocapturebindonfirstframe).

#### Returns

`void`

***

### clearTrackedBind()

> **clearTrackedBind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1846)

Clear any captured bind, reverting subsequent frames to the fallback
direct-retarget path (or re-triggering auto-capture on the next frame).

#### Returns

`void`

***

### dispose()

> **dispose**(`disposeMesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:2235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L2235)

Dispose of this tracked body and its resources.

#### Parameters

##### disposeMesh?

`boolean` = `false`

If `true`, the body mesh and its skeleton are disposed as well.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getBodyPartTransforms()

> **getBodyPartTransforms**(`part`, `result?`): [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1150)

Get all joint transform nodes that belong to a given body part.

#### Parameters

##### part

[`BodyPart`](../enumerations/BodyPart.md)

The body part to query.

##### result?

[`TransformNode`](TransformNode.md)[]

Optional pre-allocated array to fill (avoids per-call allocation).
  The array is cleared and populated with the results.

#### Returns

[`TransformNode`](TransformNode.md)[]

An array of TransformNodes for that body part.

***

### getJointTransform()

> **getJointTransform**(`jointName`): [`TransformNode`](TransformNode.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1138)

Get the transform node for a specific body joint.

#### Parameters

##### jointName

[`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md)

The name of the body joint (from [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md)).

#### Returns

[`TransformNode`](TransformNode.md) \| `undefined`

The transform node corresponding to that joint, or `undefined` if not found.

***

### replayRawJointMatrices()

> **replayRawJointMatrices**(`rawMatrices`, `isAlreadyLhs?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1642](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1642)

Replay a pre-captured joint matrix set through the retargeting
pipeline as if it had just been delivered by an XR frame.

Useful for headset-less testing: call with a snapshot captured via
[snapshotFrame](#snapshotframe) (the `jointMatricesRHS` array, or `jointMatricesLHS`
already flipped). The matrices are assumed to be RHS unless
`isAlreadyLhs=true`, in which case the RHS→LHS flip step is skipped.

#### Parameters

##### rawMatrices

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Float32Array of BODY_JOINT_COUNT × 16 (= 1328) floats.

##### isAlreadyLhs?

`boolean` = `false`

Set to `true` if matrices are already LHS-converted.

#### Returns

`void`

***

### setBodyMesh()

> **setBodyMesh**(`bodyMesh`, `rigMapping?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1215)

Attach (or replace) a rigged body mesh.

The mesh's skeleton bones are linked to the internal transform nodes
that receive WebXR tracking data each frame.  If the mesh has a skeleton,
the `rigMapping` (or a direct name match) is used to bind each bone.

#### Parameters

##### bodyMesh

[`AbstractMesh`](AbstractMesh.md)

The rigged mesh to drive.

##### rigMapping?

[`XRBodyMeshRigMapping`](../type-aliases/XRBodyMeshRigMapping.md)

An optional mapping from [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md) to bone name.
  If omitted, bones are expected to be named after the WebXR joint names.

#### Returns

`void`

***

### snapshotFrame()

> **snapshotFrame**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:2198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L2198)

Capture a snapshot of the current frame's raw XR joint matrices and
skeleton metadata.  Returns a JSON string that can be used offline to
replay / debug bone-local computation without a headset.

The snapshot includes:
- `jointMatricesRHS` – 83 × 16 raw RHS matrices (before LHS conversion)
- `jointMatricesLHS` – 83 × 16 LHS-converted matrices (after step 3)
- `meshWorldMatrix` – 16 floats, the skeleton mesh's world matrix (if any)
- `jointHasBone` – boolean[83], which joints are mapped to bones
- `jointParentJointIdx` – number[83], mapped ancestor for each joint
- `useRightHandedSystem` – scene handedness setting
- `jointNames` – the 83 joint names in order

#### Returns

`string`

A JSON string with the snapshot data.

***

### snapshotFrameToClipboardAsync()

> **snapshotFrameToClipboardAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:2216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L2216)

Capture a snapshot and copy it to the system clipboard.
Logs to the console on success or failure.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the copy completes.

***

### updateFromXRFrame()

> **updateFromXRFrame**(`xrFrame`, `referenceSpace`, `xrCameraParent`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:1544](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L1544)

Update joint transforms from the current XR frame.

This method is called once per frame by the feature class.  Internally it:
1. Extracts all XRBodySpaces from the XRBody.
2. Fills the transform-matrix buffer via `fillPoses()` (or per-joint fallback).
3. Converts from WebXR right-handed to Babylon left-handed coordinates.
4. Decomposes each matrix into the corresponding TransformNode.
5. Parents the body mesh root to the XR camera so it tracks correctly.

#### Parameters

##### xrFrame

`XRFrame`

The current XRFrame.

##### referenceSpace

`XRReferenceSpace`

The XRReferenceSpace to resolve poses against.

##### xrCameraParent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

The parent node of the XR camera (used for parenting).

#### Returns

`boolean`

`true` if valid tracking data was processed, `false` otherwise.
