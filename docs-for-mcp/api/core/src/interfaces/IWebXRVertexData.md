[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRVertexData

# Interface: IWebXRVertexData

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L48)

A babylon interface for a XR mesh's vertex data.

## Properties

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L52)

A babylon-assigned ID for this mesh

***

### indices?

> `optional` **indices?**: `Uint32Array`\<`ArrayBufferLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L71)

An array of indices in babylon space. Indices have a counterclockwise winding order.
Indices will only be populated if convertCoordinateSystems is set to true in the IWebXRMeshDetectorOptions.

***

### mesh?

> `optional` **mesh?**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L89)

If generateMeshes is set to true in the IWebXRMeshDetectorOptions, this will be the generated mesh.
This mesh will be updated with the vertex data provided and not regenerated every time.

***

### normals?

> `optional` **normals?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L77)

An array of vertex normals in babylon space. right/left hand system is taken into account.
Normals will not be calculated if convertCoordinateSystems is undefined in the IWebXRMeshDetectorOptions.
Different platforms may or may not support mesh normals when convertCoordinateSystems is set to true.

***

### positions?

> `optional` **positions?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L66)

An array of vertex positions in babylon space. right/left hand system is taken into account.
Positions will only be calculated if convertCoordinateSystems is set to true in the IWebXRMeshDetectorOptions.

***

### transformationMatrix?

> `optional` **transformationMatrix?**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L83)

A transformation matrix to apply on the mesh that will be built using the meshDefinition.
Local vs. World are decided if worldParentNode was provided or not in the options when constructing the module.
TransformationMatrix will only be calculated if convertCoordinateSystems is set to true in the IWebXRMeshDetectorOptions.

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L61)

The node to use to transform the local results to world coordinates.
WorldParentNode will only exist if it was declared in the IWebXRMeshDetectorOptions.

***

### xrMesh

> **xrMesh**: `XRMesh`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRMeshDetector.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRMeshDetector.ts#L56)

Data required for constructing a mesh in Babylon.js.
