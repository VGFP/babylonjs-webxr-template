[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRBodyTrackingOptions

# Interface: IWebXRBodyTrackingOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L617)

Configuration options for the WebXR body tracking feature.

## Properties

### aimChildOverrides?

> `optional` **aimChildOverrides?**: `Partial`\<`Record`\<[`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md), [`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:712](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L712)

Per–XR-joint override for the "aim child" joint used when
[useBoneOrientationOffsets](#useboneorientationoffsets) is enabled.

By default the aim direction for a mapped bone is computed against its
nearest mapped descendant in the skeleton. For rigs whose XR-mapped
spine chain has very short segments (e.g. WebXR's `hips`→`spine-lower`
is typically only ~1 cm), the aim direction becomes noise-dominated and
can produce a large incorrect rotation for the parent bone.

Use this map to redirect a specific XR joint's aim target to a farther
XR joint whose relative position is stable. Both the source and target
joint must be present in [rigMapping](#rigmapping) (i.e. mapped to a bone on the
skeleton).

Example for a Mixamo-style rig where hips, spine, spine1, spine2 and
neck are all mapped:
```ts
aimChildOverrides: {
  [WebXRBodyJoint.HIPS]: WebXRBodyJoint.SPINE_UPPER,   // skip spine-lower/middle
  [WebXRBodyJoint.SPINE_LOWER]: WebXRBodyJoint.NECK,   // long stable segment
  [WebXRBodyJoint.SPINE_MIDDLE]: WebXRBodyJoint.NECK,
}
```

***

### bodyMesh?

> `optional` **bodyMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:623](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L623)

A pre-existing rigged body mesh to drive with tracked joint poses.
If provided, skeleton bones will be linked to tracked joints automatically.
The mesh should contain a skeleton whose bones can be mapped via `rigMapping`.

***

### isMixamoModel?

> `optional` **isMixamoModel?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:729](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L729)

Convenience flag for Mixamo-rigged characters.

When set to `true`, the feature automatically applies:
- [MixamoRigMapping](../variables/MixamoRigMapping.md) as the `rigMapping` (skipping any explicit
  `rigMapping` you provide).
- [MixamoAimChildOverrides](../variables/MixamoAimChildOverrides.md) as `aimChildOverrides` (skipping any
  explicit `aimChildOverrides` you provide).
- Turns on [useBoneOrientationOffsets](#useboneorientationoffsets) by default (you can still
  override to `false`).

The Mixamo `mixamorig:` bone-name prefix is detected automatically by
inspecting the skeleton, so the same mapping works regardless of whether
the bones have been renamed to strip the prefix (common when re-exporting).

***

### jointLocalRotationOffset?

> `optional` **jointLocalRotationOffset?**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:685](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L685)

Rotation applied in each tracked joint's local frame to re-base the
XR joint axes. Some runtimes (e.g., some Meta Quest builds) emit body
joint poses whose +Z axis points along the bone (parent → child), while
most avatar rigs expect +Y along the bone. Setting this to
`Quaternion.RotationAxis(Vector3.Right(), -Math.PI / 2)` converts
"+Z-along-bone" joint data to "+Y-along-bone" before retargeting.

Applied as a pre-multiply on each joint's world matrix:
`M' = R × M`, which, under Babylon's row-vector convention
(`v_world = v_local × M`), effectively re-bases the joint-local axes.

Default `undefined` = identity (no re-basing).

***

### jointScaleFactor?

> `optional` **jointScaleFactor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:646](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L646)

Scale factor applied to the local-space position of every joint.

This uniformly scales the distances between parent and child joints,
allowing you to fit XR body tracking data to meshes that are larger or
smaller than the tracked user.

- `1.0` (default): no scaling — real-world proportions.
- `> 1.0`: stretches the skeleton (makes it taller / wider).
- `< 1.0`: compresses the skeleton.

Only affects local joint offsets, not the root (hips) position.

***

### preserveBindPoseBonePositions?

> `optional` **preserveBindPoseBonePositions?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:660](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L660)

Preserve bind-pose local translations for mapped bones and only retarget rotations.

When `false` (default), mapped bones are translated directly to the tracked joint
positions. This reproduces the tracked skeleton exactly, but can distort avatars whose
proportions differ from the tracked user.

When `true`, mapped child bones keep their bind-pose local translation offsets while
still using the tracked joint rotations. This is the typical retargeting mode for
driving arbitrary skinned characters without forcing them to the tracked skeleton's
segment lengths.

***

### rigMapping?

> `optional` **rigMapping?**: [`XRBodyMeshRigMapping`](../type-aliases/XRBodyMeshRigMapping.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L631)

A mapping from [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md) names to skeleton bone names.
Required when the skeleton's bone names do not match the WebXR joint names.
If omitted and a body mesh is provided, the feature assumes bones are
named identically to the WebXR joint names (e.g. `"hips"`, `"left-arm-upper"`, etc.).

***

### useBoneOrientationOffsets?

> `optional` **useBoneOrientationOffsets?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:669](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L669)

Apply a per-bone orientation offset so the avatar bone basis matches the XR joint basis.

When enabled, WebXR joint rotations are corrected using the bone's bind-space child axis.
This is useful for rigs whose bone local axes do not match the anatomical axes used by
the WebXR body-tracking joint orientations.
