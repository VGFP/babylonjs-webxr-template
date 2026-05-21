[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRWalkingLocomotionOptions

# Interface: IWebXRWalkingLocomotionOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.ts#L334)

Options for the walking locomotion feature.

## Properties

### locomotionTarget

> **locomotionTarget**: [`TransformNode`](../classes/TransformNode.md) \| [`WebXRCamera`](../classes/WebXRCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.ts#L341)

The target to be moved by walking locomotion. This should be the transform node
which is the root of the XR space (i.e., the WebXRCamera's parent node). However,
for simple cases and legacy purposes, articulating the WebXRCamera itself is also
supported as a deprecated feature.
