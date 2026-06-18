[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRMeshDetectorOptions

# Interface: IWebXRMeshDetectorOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L16)

Options used in the mesh detector module

## Properties

### convertCoordinateSystems?

> `optional` **convertCoordinateSystems?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L36)

If set to true, WebXRMeshDetector will convert coordinate systems for meshes.
If not defined, mesh conversions from right handed to left handed coordinate systems won't be conducted.
Right handed mesh data will be available through IWebXRVertexData.xrMesh.

***

### doNotRemoveMeshesOnSessionEnded?

> `optional` **doNotRemoveMeshesOnSessionEnded?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L25)

If set to true a reference of the created meshes will be kept until the next session starts
If not defined, meshes will be removed from the array when the feature is detached or the session ended.

***

### generateMeshes?

> `optional` **generateMeshes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L44)

If set to true, the feature will generate meshes for the detected data.
Note that this might be time consuming, as the mesh's vertex data will be updated on every change.
Setting this to true will also set convertCoordinateSystems to true.
Note - the meshes will NOT be disposed automatically when the feature is detached or the session ended.

***

### preferredDetectorOptions?

> `optional` **preferredDetectorOptions?**: `XRGeometryDetectorOptions`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L30)

Preferred detector configuration, not all preferred options will be supported by all platforms.
Babylon native only!

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L20)

The node to use to transform the local results to world coordinates
