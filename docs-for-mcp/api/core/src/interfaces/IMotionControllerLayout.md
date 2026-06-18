[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerLayout

# Interface: IMotionControllerLayout

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L31)

The schema of motion controller layout.
No object will be initialized using this interface
This is used just to define the profile.

## Properties

### assetPath

> **assetPath**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L35)

Path to load the assets. Usually relative to the base path

***

### components

> **components**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L39)

Available components (unsorted)

#### Index Signature

\[`componentId`: `string`\]: `object`

A map of component Ids

***

### gamepadMapping

> **gamepadMapping**: `""` \| `"xr-standard"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L109)

Is it xr standard mapping or not

***

### rootNodeName

> **rootNodeName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L113)

Base root node of this entire model

***

### selectComponentId

> **selectComponentId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L117)

Defines the main button component id
