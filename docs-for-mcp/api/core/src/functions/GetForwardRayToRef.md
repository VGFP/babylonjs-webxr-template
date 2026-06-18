[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetForwardRayToRef

# Function: GetForwardRayToRef()

> **GetForwardRayToRef**(`camera`, `refRay`, `length?`, `transform?`, `origin?`): [`Ray`](../classes/Ray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:1236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L1236)

Gets a ray in the forward direction from the camera.

## Parameters

### camera

[`Camera`](../classes/Camera.md)

Defines the camera to use to get the ray from

### refRay

[`Ray`](../classes/Ray.md)

the ray to (re)use when setting the values

### length?

`number` = `100`

Defines the length of the ray to create

### transform?

[`Matrix`](../classes/Matrix.md)

Defines the transform to apply to the ray, by default the world matrx is used to create a workd space ray

### origin?

[`Vector3`](../classes/Vector3.md)

Defines the start point of the ray which defaults to the camera position

## Returns

[`Ray`](../classes/Ray.md)

the forward ray
