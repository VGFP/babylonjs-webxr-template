[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRAnchorSystemOptions

# Interface: IWebXRAnchorSystemOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L12)

Configuration options of the anchor system

## Properties

### clearAnchorsOnSessionInit?

> `optional` **clearAnchorsOnSessionInit?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L27)

If set to true, all anchor arrays will be cleared when the session initializes

***

### doNotRemoveAnchorsOnSessionEnded?

> `optional` **doNotRemoveAnchorsOnSessionEnded?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L22)

If set to true a reference of the created anchors will be kept until the next session starts
If not defined, anchors will be removed from the array when the feature is detached or the session ended.

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L16)

a node that will be used to convert local to world coordinates
