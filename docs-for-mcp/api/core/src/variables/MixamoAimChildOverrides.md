[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MixamoAimChildOverrides

# Variable: MixamoAimChildOverrides

> `const` **MixamoAimChildOverrides**: `Partial`\<`Record`\<[`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md), [`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L800)

Default aim-child overrides for Mixamo-rigged humanoids.

Redirects the short / noisy XR spine segments to longer, stable ones so that
[IWebXRBodyTrackingOptions.useBoneOrientationOffsets](../interfaces/IWebXRBodyTrackingOptions.md#useboneorientationoffsets) produces clean
torso rotations. In WebXR data, `hips`→`spine-lower` is typically only ~1 cm
apart — too short to give a stable aim direction — so we reroute Mixamo's
Hips/Spine/Spine1 bones to aim at `spine-upper` / `neck` instead.
