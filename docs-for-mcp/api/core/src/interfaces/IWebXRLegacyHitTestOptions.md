[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLegacyHitTestOptions

# Interface: IWebXRLegacyHitTestOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L24)

Options used for hit testing

## Extended by

- [`IWebXRHitTestOptions`](IWebXRHitTestOptions.md)

## Properties

### testOnPointerDownOnly?

> `optional` **testOnPointerDownOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L28)

Only test when user interacted with the scene. Default - hit test every frame

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L32)

The node to use to transform the local results to world coordinates
