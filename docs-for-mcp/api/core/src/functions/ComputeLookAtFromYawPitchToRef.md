[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ComputeLookAtFromYawPitchToRef

# Function: ComputeLookAtFromYawPitchToRef()

> **ComputeLookAtFromYawPitchToRef**(`yaw`, `pitch`, `center`, `useRightHandedSystem`, `result`, `calculateUpVectorFromPointToRef?`): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCamera.pure.ts:652](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCamera.pure.ts#L652)

Compute the lookAt direction vector from yaw and pitch angles at a given center point.
This is the forward formula used by GeospatialCamera._setOrientation.

## Parameters

### yaw

`number`

The yaw angle in radians (0 = north, π/2 = east)

### pitch

`number`

The pitch angle in radians (0 = looking at planet center, π/2 = looking at horizon)

### center

[`Vector3`](../classes/Vector3.md)

The center point on the globe

### useRightHandedSystem

`boolean`

Whether the scene uses a right-handed coordinate system

### result

[`Vector3`](../classes/Vector3.md)

The vector to store the result in

### calculateUpVectorFromPointToRef?

(`point`, `result`) => [`Vector3`](../classes/Vector3.md)

Optional function to calculate the up vector from a point, allowing for non-spherical planets. If not supplied, a perfect sphere is assumed and the up vector is just the normalized center point.

## Returns

[`Vector3`](../classes/Vector3.md)

The normalized lookAt direction vector (same as result)
