[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Path3D

# Class: Path3D

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L498)

Represents a 3D path made up of multiple 3D points

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/path3D

## Constructors

### Constructor

> **new Path3D**(`path`, `firstNormal?`, `raw?`, `alignTangentsWithPath?`): `Path3D`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L529)

new Path3D(path, normal, raw)
Creates a Path3D. A Path3D is a logical math object, so not a mesh.
please read the description in the tutorial : https://doc.babylonjs.com/features/featuresDeepDive/mesh/path3D

#### Parameters

##### path

[`Vector3`](Vector3.md)[]

an array of Vector3, the curve axis of the Path3D

##### firstNormal?

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\> = `null`

(options) Vector3, the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.

##### raw?

`boolean`

(optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed.

##### alignTangentsWithPath?

`boolean` = `false`

(optional, default false) : boolean, if true the tangents will be aligned with the path.

#### Returns

`Path3D`

## Properties

### path

> **path**: [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L533)

an array of Vector3, the curve axis of the Path3D

## Methods

### getBinormalAt()

> **getBinormalAt**(`position`, `interpolated?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L638)

Returns the binormal vector of an interpolated Path3D curve point at the specified position along this path.

#### Parameters

##### position

`number`

the position of the point along this path, from 0.0 to 1.0

##### interpolated?

`boolean` = `false`

(optional, default false) : boolean, if true returns an interpolated binormal instead of the binormal of the previous path point.

#### Returns

[`Vector3`](Vector3.md)

a binormal vector corresponding to the interpolated Path3D curve point, if not interpolated, the binormal is taken from the precomputed binormals array.

***

### getBinormals()

> **getBinormals**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L589)

Returns an array populated with binormal vectors on each Path3D curve point.

#### Returns

[`Vector3`](Vector3.md)[]

an array populated with binormal vectors on each Path3D curve point.

***

### getClosestPositionTo()

> **getClosestPositionTo**(`target`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:677](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L677)

Returns the position of the closest virtual point on this path to an arbitrary Vector3, from 0.0 to 1.0

#### Parameters

##### target

[`Vector3`](Vector3.md)

the vector of which to get the closest position to

#### Returns

`number`

the position of the closest virtual point on this path to the target vector

***

### getCurve()

> **getCurve**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L550)

Returns the Path3D array of successive Vector3 designing its curve.

#### Returns

[`Vector3`](Vector3.md)[]

the Path3D array of successive Vector3 designing its curve.

***

### getDistanceAt()

> **getDistanceAt**(`position`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L648)

Returns the distance (float) of an interpolated Path3D curve point at the specified position along this path.

#### Parameters

##### position

`number`

the position of the point along this path, from 0.0 to 1.0

#### Returns

`number`

the distance of the interpolated Path3D curve point at the specified position along this path.

***

### getDistances()

> **getDistances**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L597)

Returns an array populated with distances (float) of the i-th point from the first curve point.

#### Returns

`number`[]

an array populated with distances (float) of the i-th point from the first curve point.

***

### getNormalAt()

> **getNormalAt**(`position`, `interpolated?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L627)

Returns the tangent vector of an interpolated Path3D curve point at the specified position along this path.

#### Parameters

##### position

`number`

the position of the point along this path, from 0.0 to 1.0

##### interpolated?

`boolean` = `false`

(optional, default false) : boolean, if true returns an interpolated normal instead of the normal of the previous path point.

#### Returns

[`Vector3`](Vector3.md)

a normal vector corresponding to the interpolated Path3D curve point, if not interpolated, the normal is taken from the precomputed normals array.

***

### getNormals()

> **getNormals**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:581](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L581)

Returns an array populated with normal vectors on each Path3D curve point.

#### Returns

[`Vector3`](Vector3.md)[]

an array populated with normal vectors on each Path3D curve point.

***

### getPointAt()

> **getPointAt**(`position`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:606](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L606)

Returns an interpolated point along this path

#### Parameters

##### position

`number`

the position of the point along this path, from 0.0 to 1.0

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 as the point

***

### getPoints()

> **getPoints**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L558)

Returns the Path3D array of successive Vector3 designing its curve.

#### Returns

[`Vector3`](Vector3.md)[]

the Path3D array of successive Vector3 designing its curve.

***

### getPreviousPointIndexAt()

> **getPreviousPointIndexAt**(`position`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:657](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L657)

Returns the array index of the previous point of an interpolated point along this path

#### Parameters

##### position

`number`

the position of the point to interpolate along this path, from 0.0 to 1.0

#### Returns

`number`

the array index

***

### getSubPositionAt()

> **getSubPositionAt**(`position`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:667](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L667)

Returns the position of an interpolated point relative to the two path points it lies between, from 0.0 (point A) to 1.0 (point B)

#### Parameters

##### position

`number`

the position of the point to interpolate along this path, from 0.0 to 1.0

#### Returns

`number`

the sub position

***

### getTangentAt()

> **getTangentAt**(`position`, `interpolated?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L616)

Returns the tangent vector of an interpolated Path3D curve point at the specified position along this path.

#### Parameters

##### position

`number`

the position of the point along this path, from 0.0 to 1.0

##### interpolated?

`boolean` = `false`

(optional, default false) : boolean, if true returns an interpolated tangent instead of the tangent of the previous path point.

#### Returns

[`Vector3`](Vector3.md)

a tangent vector corresponding to the interpolated Path3D curve point, if not interpolated, the tangent is taken from the precomputed tangents array.

***

### getTangents()

> **getTangents**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:573](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L573)

Returns an array populated with tangent vectors on each Path3D curve point.

#### Returns

[`Vector3`](Vector3.md)[]

an array populated with tangent vectors on each Path3D curve point.

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L565)

#### Returns

`number`

the computed length (float) of the path.

***

### slice()

> **slice**(`start?`, `end?`): `Path3D`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L701)

Returns a sub path (slice) of this path

#### Parameters

##### start?

`number` = `0.0`

the position of the fist path point, from 0.0 to 1.0, or a negative value, which will get wrapped around from the end of the path to 0.0 to 1.0 values

##### end?

`number` = `1.0`

the position of the last path point, from 0.0 to 1.0, or a negative value, which will get wrapped around from the end of the path to 0.0 to 1.0 values

#### Returns

`Path3D`

a sub path (slice) of this path

***

### update()

> **update**(`path`, `firstNormal?`, `alignTangentsWithPath?`): `Path3D`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:741](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L741)

Forces the Path3D tangent, normal, binormal and distance recomputation.

#### Parameters

##### path

[`Vector3`](Vector3.md)[]

path which all values are copied into the curves points

##### firstNormal?

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\> = `null`

which should be projected onto the curve

##### alignTangentsWithPath?

`boolean` = `false`

(optional, default false) : boolean, if true the tangents will be aligned with the path

#### Returns

`Path3D`

the same object updated.
