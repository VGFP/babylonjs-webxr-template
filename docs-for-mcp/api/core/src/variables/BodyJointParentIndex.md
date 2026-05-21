[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BodyJointParentIndex

# Variable: BodyJointParentIndex

> `const` **BodyJointParentIndex**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L324)

Parent index for each joint in BodyJointReferenceArray order.
-1 means "root" (no parent).  Used to convert world-space XR poses to
local-space transforms suitable for skeleton bones.

Hierarchy follows the WebXR Body Tracking specification and standard
humanoid anatomy.
