[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRMeshDetectorOptions

# Interface: IWebXRMeshDetectorOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L14)

Options used in the mesh detector module

## Properties

### convertCoordinateSystems?

> `optional` **convertCoordinateSystems?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L34)

If set to true, WebXRMeshDetector will convert coordinate systems for meshes.
If not defined, mesh conversions from right handed to left handed coordinate systems won't be conducted.
Right handed mesh data will be available through IWebXRVertexData.xrMesh.

***

### doNotRemoveMeshesOnSessionEnded?

> `optional` **doNotRemoveMeshesOnSessionEnded?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L23)

If set to true a reference of the created meshes will be kept until the next session starts
If not defined, meshes will be removed from the array when the feature is detached or the session ended.

***

### generateMeshes?

> `optional` **generateMeshes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L42)

If set to true, the feature will generate meshes for the detected data.
Note that this might be time consuming, as the mesh's vertex data will be updated on every change.
Setting this to true will also set convertCoordinateSystems to true.
Note - the meshes will NOT be disposed automatically when the feature is detached or the session ended.

***

### preferredDetectorOptions?

> `optional` **preferredDetectorOptions?**: `XRGeometryDetectorOptions`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L28)

Preferred detector configuration, not all preferred options will be supported by all platforms.
Babylon native only!

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L18)

The node to use to transform the local results to world coordinates
