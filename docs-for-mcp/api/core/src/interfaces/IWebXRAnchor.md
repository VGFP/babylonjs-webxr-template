[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRAnchor

# Interface: IWebXRAnchor

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L33)

A babylon container for an XR Anchor

## Properties

### attachedNode?

> `optional` **attachedNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L50)

if defined, this object will be constantly updated by the anchor's position and rotation

***

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L37)

A babylon-assigned ID for this anchor

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L41)

Transformation matrix to apply to an object attached to this anchor

***

### xrAnchor

> **xrAnchor**: `XRAnchor`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L45)

The native anchor object

## Methods

### remove()

> **remove**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAnchorSystem.ts#L55)

Remove this anchor from the scene

#### Returns

`void`
