[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRPlaneDetectorOptions

# Interface: IWebXRPlaneDetectorOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L13)

Options used in the plane detector module

## Properties

### doNotRemovePlanesOnSessionEnded?

> `optional` **doNotRemovePlanesOnSessionEnded?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L22)

If set to true a reference of the created planes will be kept until the next session starts
If not defined, planes will be removed from the array when the feature is detached or the session ended.

***

### preferredDetectorOptions?

> `optional` **preferredDetectorOptions?**: `XRGeometryDetectorOptions`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L26)

Preferred detector configuration, not all preferred options will be supported by all platforms.

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L17)

The node to use to transform the local results to world coordinates
