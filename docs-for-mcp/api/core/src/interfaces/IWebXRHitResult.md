[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRHitResult

# Interface: IWebXRHitResult

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L49)

Interface defining the babylon result of hit-test

## Extends

- [`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md)

## Properties

### inputSource?

> `optional` **inputSource?**: `XRInputSource`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L53)

The input source that generated this hit test (if transient)

***

### isTransient?

> `optional` **isTransient?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L57)

Is this a transient hit test

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L61)

Position of the hit test result

***

### rotationQuaternion

> **rotationQuaternion**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L65)

Rotation of the hit test result

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L42)

Transformation matrix that can be applied to a node that will put it in the hit point location

#### Inherited from

[`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md).[`transformationMatrix`](IWebXRLegacyHitResult.md#transformationmatrix)

***

### xrHitResult

> **xrHitResult**: `XRHitTestResult`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L70)

The native hit test result

#### Overrides

[`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md).[`xrHitResult`](IWebXRLegacyHitResult.md#xrhitresult)
