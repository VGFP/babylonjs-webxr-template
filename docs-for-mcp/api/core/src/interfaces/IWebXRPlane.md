[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRPlane

# Interface: IWebXRPlane

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L35)

A babylon interface for a WebXR plane.
A Plane is actually a polygon, built from N points in space

Supported in chrome 79, not supported in canary 81 ATM

## Properties

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L39)

a babylon-assigned ID for this polygon

***

### polygonDefinition

> **polygonDefinition**: [`Vector3`](../classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L43)

an array of vector3 points in babylon space. right/left hand system is taken into account.

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L48)

A transformation matrix to apply on the mesh that will be built using the polygonDefinition
Local vs. World are decided if worldParentNode was provided or not in the options when constructing the module

***

### xrPlane

> **xrPlane**: `XRPlane`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRPlaneDetector.ts#L52)

the native xr-plane object
