[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MixamoRigMapping

# Variable: MixamoRigMapping

> `const` **MixamoRigMapping**: [`XRBodyMeshRigMapping`](../type-aliases/XRBodyMeshRigMapping.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.ts:759](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBodyTracking.ts#L759)

Default rig mapping for Mixamo-rigged humanoid characters.

Maps each supported [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md) to the corresponding Mixamo bone
name, **without** the `mixamorig:` prefix. When the feature applies this
mapping, it auto-detects whether the skeleton uses the `mixamorig:` prefix
and prepends it as needed, so the same table works for both prefixed and
unprefixed exports.

## Example

```ts
xr.featuresManager.enableFeature(WebXRFeatureName.BODY_TRACKING, "latest", {
    bodyMesh: myMixamoMesh,
    isMixamoModel: true,
});
```

Or, if you want to extend or customize it:
```ts
import { MixamoRigMapping } from "@babylonjs/core";
const rigMapping: XRBodyMeshRigMapping = { ...MixamoRigMapping, [WebXRBodyJoint.NECK]: "MyNeckBone" };
```
