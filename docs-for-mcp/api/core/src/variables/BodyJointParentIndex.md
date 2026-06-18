[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BodyJointParentIndex

# Variable: BodyJointParentIndex

> `const` **BodyJointParentIndex**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L327)

Parent index for each joint in BodyJointReferenceArray order.
-1 means "root" (no parent).  Used to convert world-space XR poses to
local-space transforms suitable for skeleton bones.

Hierarchy follows the WebXR Body Tracking specification and standard
humanoid anatomy.
