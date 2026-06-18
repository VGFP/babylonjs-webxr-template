[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRPlane

# Interface: IWebXRPlane

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L37)

A babylon interface for a WebXR plane.
A Plane is actually a polygon, built from N points in space

Supported in chrome 79, not supported in canary 81 ATM

## Properties

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L41)

a babylon-assigned ID for this polygon

***

### polygonDefinition

> **polygonDefinition**: [`Vector3`](../classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L45)

an array of vector3 points in babylon space. right/left hand system is taken into account.

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L50)

A transformation matrix to apply on the mesh that will be built using the polygonDefinition
Local vs. World are decided if worldParentNode was provided or not in the options when constructing the module

***

### xrPlane

> **xrPlane**: `XRPlane`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L54)

the native xr-plane object
