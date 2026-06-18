[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ComputeYawPitchFromLookAtToRef

# Function: ComputeYawPitchFromLookAtToRef()

> **ComputeYawPitchFromLookAtToRef**(`lookAt`, `center`, `useRightHandedSystem`, `currentYaw`, `result`, `calculateUpVectorFromPointToRef?`): [`Vector2`](../classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCamera.pure.ts:693](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCamera.pure.ts#L693)

Given a lookAt direction and center, compute the yaw and pitch angles that would produce that lookAt.
This is the inverse of ComputeLookAtFromYawPitchToRef.

## Parameters

### lookAt

[`Vector3`](../classes/Vector3.md)

The normalized lookAt direction vector

### center

[`Vector3`](../classes/Vector3.md)

The center point on the globe

### useRightHandedSystem

`boolean`

Whether the scene uses a right-handed coordinate system

### currentYaw

`number`

The current yaw value to use as fallback when pitch is near 0 (looking straight down/up)

### result

[`Vector2`](../classes/Vector2.md)

The Vector2 to store the result in (x = yaw, y = pitch)

### calculateUpVectorFromPointToRef?

(`point`, `result`) => [`Vector3`](../classes/Vector3.md)

Optional function to calculate the up vector from a point. If supplied, this function will be used instead of assuming a spherical geocentric normal, allowing support for non-spherical planets or custom up vector logic.

## Returns

[`Vector2`](../classes/Vector2.md)

The result Vector2
