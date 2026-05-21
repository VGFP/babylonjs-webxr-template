[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Vector3SignedDistanceToPlaneFromPositionAndNormal

# Function: Vector3SignedDistanceToPlaneFromPositionAndNormal()

> **Vector3SignedDistanceToPlaneFromPositionAndNormal**(`origin`, `normal`, `point`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.functions.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.functions.ts#L149)

Computes the signed distance between the specified point and plane.

## Parameters

### origin

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3Like`\>

defines a point on the plane

### normal

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3Like`\>

defines the plane normal (assumes normalized)

### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3Like`\>

defines the point to compute the signed distance to

## Returns

`number`

the signed distance
