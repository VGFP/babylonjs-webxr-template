[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EcefFromLatLonAltToRef

# Function: EcefFromLatLonAltToRef()

> **EcefFromLatLonAltToRef**\<`T`\>(`latLonAlt`, `ellipsoid`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.geospatial.functions.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.geospatial.functions.ts#L58)

Converts latitude, longitude, and altitude to an ECEF (Earth-Centered, Earth-Fixed) position using the specified ellipsoid.
For the calculation, latitude is clamped to -PI/2 to PI/2.

## Type Parameters

### T

`T` *extends* `IVector3Like`

## Parameters

### latLonAlt

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`ILatLonAltLike`](../interfaces/ILatLonAltLike.md)\>

The latitude and longitude in radians, and the altitude relative to the reference ellipsoid's surface.

### ellipsoid

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Pick`\<[`IEllipsoidLike`](../interfaces/IEllipsoidLike.md), `"semiMajorAxis"` \| `"firstEccentricitySquared"`\>\>

Parameters for a reference ellipsoid (e.g., the [Wgs84Ellipsoid](../variables/Wgs84Ellipsoid.md)).

### result

`T`

The resulting ECEF position

## Returns

`T`

The resulting ECEF position
