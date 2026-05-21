[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LatLonToNormalToRef

# Function: LatLonToNormalToRef()

> **LatLonToNormalToRef**\<`T`\>(`latLon`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.geospatial.functions.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.geospatial.functions.ts#L44)

Computes the normal (up direction) in ECEF (Earth-Centered, Earth-Fixed) coordinates from the specified latitude and longitude in radians.
For the calculation, latitude is clamped to -PI/2 to PI/2.

## Type Parameters

### T

`T` *extends* `IVector3Like`

## Parameters

### latLon

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`ILatLonLike`](../interfaces/ILatLonLike.md)\>

The latitude and longitude in radians

### result

`T`

The resulting normal

## Returns

`T`

The resulting normal
