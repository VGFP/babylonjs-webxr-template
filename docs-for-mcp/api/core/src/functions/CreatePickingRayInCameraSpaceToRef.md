[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreatePickingRayInCameraSpaceToRef

# Function: CreatePickingRayInCameraSpaceToRef()

> **CreatePickingRayInCameraSpaceToRef**(`scene`, `x`, `y`, `result`, `camera?`): [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:796](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L796)

Creates a ray that can be used to pick in the scene

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the scene to use for the picking

### x

`number`

defines the x coordinate of the origin (on-screen)

### y

`number`

defines the y coordinate of the origin (on-screen)

### result

[`Ray`](../classes/Ray.md)

defines the ray where to store the picking ray

### camera?

[`Camera`](../classes/Camera.md)

defines the camera to use for the picking

## Returns

[`Scene`](../classes/Scene.md)

the current scene
