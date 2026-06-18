[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRPlaneDetectorOptions

# Interface: IWebXRPlaneDetectorOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L15)

Options used in the plane detector module

## Properties

### doNotRemovePlanesOnSessionEnded?

> `optional` **doNotRemovePlanesOnSessionEnded?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L24)

If set to true a reference of the created planes will be kept until the next session starts
If not defined, planes will be removed from the array when the feature is detached or the session ended.

***

### preferredDetectorOptions?

> `optional` **preferredDetectorOptions?**: `XRGeometryDetectorOptions`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L28)

Preferred detector configuration, not all preferred options will be supported by all platforms.

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L19)

The node to use to transform the local results to world coordinates
