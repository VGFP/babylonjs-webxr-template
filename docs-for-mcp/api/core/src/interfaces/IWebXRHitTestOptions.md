[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRHitTestOptions

# Interface: IWebXRHitTestOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L13)

Options used for hit testing (version 2)

## Extends

- [`IWebXRLegacyHitTestOptions`](IWebXRLegacyHitTestOptions.md)

## Properties

### disablePermanentHitTest?

> `optional` **disablePermanentHitTest?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L18)

Do not create a permanent hit test. Will usually be used when only
transient inputs are needed.

***

### enableTransientHitTest?

> `optional` **enableTransientHitTest?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L22)

Enable transient (for example touch-based) hit test inspections

***

### entityTypes?

> `optional` **entityTypes?**: `XRHitTestTrackableType`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L43)

Override the default entity type(s) of the hit-test result

***

### offsetRay?

> `optional` **offsetRay?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L30)

Offset ray for the permanent hit test

***

### testOnPointerDownOnly?

> `optional` **testOnPointerDownOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L28)

Only test when user interacted with the scene. Default - hit test every frame

#### Inherited from

[`IWebXRLegacyHitTestOptions`](IWebXRLegacyHitTestOptions.md).[`testOnPointerDownOnly`](IWebXRLegacyHitTestOptions.md#testonpointerdownonly)

***

### transientHitTestProfile?

> `optional` **transientHitTestProfile?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L26)

Override the default transient hit test profile (generic-touchscreen).

***

### transientOffsetRay?

> `optional` **transientOffsetRay?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L34)

Offset ray for the transient hit test

***

### useReferenceSpace?

> `optional` **useReferenceSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTest.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTest.ts#L38)

Instead of using viewer space for hit tests, use the reference space defined in the session manager

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L32)

The node to use to transform the local results to world coordinates

#### Inherited from

[`IWebXRLegacyHitTestOptions`](IWebXRLegacyHitTestOptions.md).[`worldParentNode`](IWebXRLegacyHitTestOptions.md#worldparentnode)
