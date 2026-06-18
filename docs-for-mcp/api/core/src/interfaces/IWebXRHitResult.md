[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRHitResult

# Interface: IWebXRHitResult

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L51)

Interface defining the babylon result of hit-test

## Extends

- [`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md)

## Properties

### inputSource?

> `optional` **inputSource?**: `XRInputSource`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L55)

The input source that generated this hit test (if transient)

***

### isTransient?

> `optional` **isTransient?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L59)

Is this a transient hit test

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L63)

Position of the hit test result

***

### rotationQuaternion

> **rotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L67)

Rotation of the hit test result

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L42)

Transformation matrix that can be applied to a node that will put it in the hit point location

#### Inherited from

[`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md).[`transformationMatrix`](IWebXRLegacyHitResult.md#transformationmatrix)

***

### xrHitResult

> **xrHitResult**: `XRHitTestResult`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L72)

The native hit test result

#### Overrides

[`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md).[`xrHitResult`](IWebXRLegacyHitResult.md#xrhitresult)
