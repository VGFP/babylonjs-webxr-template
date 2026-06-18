[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRNearInteractionPickMeshWithSphere

# Function: WebXRNearInteractionPickMeshWithSphere()

> **WebXRNearInteractionPickMeshWithSphere**(`mesh`, `sphere`, `skipBoundingInfo?`): [`PickingInfo`](../classes/PickingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L997)

Picks a mesh with a sphere

## Parameters

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

the mesh to pick

### sphere

[`BoundingSphere`](../classes/BoundingSphere.md)

picking sphere in world coordinates

### skipBoundingInfo?

`boolean` = `false`

a boolean indicating if we should skip the bounding info check

## Returns

[`PickingInfo`](../classes/PickingInfo.md)

the picking info
