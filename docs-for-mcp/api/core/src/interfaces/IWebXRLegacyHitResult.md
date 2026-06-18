[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLegacyHitResult

# Interface: IWebXRLegacyHitResult

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L38)

Interface defining the babylon result of raycasting/hit-test

## Extended by

- [`IWebXRHitResult`](IWebXRHitResult.md)

## Properties

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L42)

Transformation matrix that can be applied to a node that will put it in the hit point location

***

### xrHitResult

> **xrHitResult**: `XRHitResult` \| `XRHitTestResult`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L46)

The native hit test result
