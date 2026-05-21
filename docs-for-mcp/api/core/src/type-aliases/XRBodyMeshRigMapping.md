[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / XRBodyMeshRigMapping

# Type Alias: XRBodyMeshRigMapping

> **XRBodyMeshRigMapping** = `{ [jointName in WebXRBodyJoint]?: string }`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L568)

A dictionary mapping each [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md) to a bone name in a rigged body mesh.

When you supply a rigged mesh to [WebXRTrackedBody.setBodyMesh](../classes/WebXRTrackedBody.md#setbodymesh), provide
a mapping so the feature knows which skeleton bone to drive for each joint.

## Example

```typescript
const rigMapping: XRBodyMeshRigMapping = {
  "hips": "Bip01_Pelvis",
  "spine-lower": "Bip01_Spine",
  "head": "Bip01_Head",
  // …remaining joints…
};
```
