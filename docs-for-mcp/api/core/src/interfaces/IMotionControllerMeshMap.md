[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerMeshMap

# Interface: IMotionControllerMeshMap

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L177)

A helper-interface for the 3 meshes needed for controller axis animation.
This will be expanded when touchpad animations are fully supported
The meshes are provided to the _lerpAxisTransform function to calculate the current position of the value mesh

## Properties

### maxMesh?

> `optional` **maxMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L181)

the mesh that defines the maximum value mesh position.

***

### minMesh?

> `optional` **minMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L185)

the mesh that defines the minimum value mesh position.

***

### valueMesh?

> `optional` **valueMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L189)

The mesh that will be changed when axis value changes
