[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRFeaturePoint

# Interface: IWebXRFeaturePoint

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.ts#L11)

A babylon interface for a "WebXR" feature point.
Represents the position and confidence value of a given feature point.

## Properties

### confidenceValue

> **confidenceValue**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.ts#L19)

Represents the confidence value of the feature point in world space. 0 being least confident, and 1 being most confident.

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.ts#L15)

Represents the position of the feature point in world space.
