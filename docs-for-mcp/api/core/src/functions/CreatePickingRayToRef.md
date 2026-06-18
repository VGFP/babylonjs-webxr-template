[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreatePickingRayToRef

# Function: CreatePickingRayToRef()

> **CreatePickingRayToRef**(`scene`, `x`, `y`, `world`, `result`, `camera`, `cameraViewSpace?`, `enableDistantPicking?`): [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:733](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L733)

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

### world

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](../classes/Matrix.md)\>

defines the world matrix to use if you want to pick in object space (instead of world space)

### result

[`Ray`](../classes/Ray.md)

defines the ray where to store the picking ray

### camera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

defines the camera to use for the picking

### cameraViewSpace?

`boolean` = `false`

defines if picking will be done in view space (false by default)

### enableDistantPicking?

`boolean` = `false`

defines if picking should handle large values for mesh position/scaling (false by default)

## Returns

[`Scene`](../classes/Scene.md)

the current scene
