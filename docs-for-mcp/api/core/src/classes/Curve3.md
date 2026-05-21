[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Curve3

# Class: Curve3

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:979](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L979)

A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
A Curve3 is designed from a series of successive Vector3.

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves

## Constructors

### Constructor

> **new Curve3**(`points`): `Curve3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1154)

A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
A Curve3 is designed from a series of successive Vector3.
Tuto : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#curve3-object

#### Parameters

##### points

[`Vector3`](Vector3.md)[]

points which make up the curve

#### Returns

`Curve3`

## Methods

### continue()

> **continue**(`curve`): `Curve3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1180)

Returns a new instance of Curve3 object : var curve = curveA.continue(curveB);
This new Curve3 is built by translating and sticking the curveB at the end of the curveA.
curveA and curveB keep unchanged.

#### Parameters

##### curve

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Curve3`\>

the curve to continue from this curve

#### Returns

`Curve3`

the newly constructed curve

***

### getPoints()

> **getPoints**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1162)

#### Returns

[`Vector3`](Vector3.md)[]

the Curve3 stored array of successive Vector3

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1169)

#### Returns

`number`

the computed length (float) of the curve.

***

### ArcThru3Points()

> `static` **ArcThru3Points**(`first`, `second`, `third`, `steps?`, `closed?`, `fullCircle?`): `Curve3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1097](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1097)

Returns a Curve3 object along an arc through three vector3 points:
The three points should not be colinear. When they are the Curve3 is empty.

#### Parameters

##### first

[`Vector3`](Vector3.md)

(Vector3) the first point the arc must pass through.

##### second

[`Vector3`](Vector3.md)

(Vector3) the second point the arc must pass through.

##### third

[`Vector3`](Vector3.md)

(Vector3) the third point the arc must pass through.

##### steps?

`number` = `32`

(number) the larger the number of steps the more detailed the arc.

##### closed?

`boolean` = `false`

(boolean) optional with default false, when true forms the chord from the first and third point

##### fullCircle?

`boolean` = `false`

Circle (boolean) optional with default false, when true forms the complete circle through the three points

#### Returns

`Curve3`

the created Curve3

***

### CreateCatmullRomSpline()

> `static` **CreateCatmullRomSpline**(`points`, `nbPoints`, `closed?`): `Curve3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1051](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1051)

Returns a Curve3 object along a CatmullRom Spline curve :

#### Parameters

##### points

`DeepImmutableArray`\<[`Vector3`](Vector3.md)\>

(array of Vector3) the points the spline must pass through. At least, four points required

##### nbPoints

`number`

(integer) the wanted number of points between each curve control points

##### closed?

`boolean`

(boolean) optional with default false, when true forms a closed loop from the points

#### Returns

`Curve3`

the created Curve3

***

### CreateCubicBezier()

> `static` **CreateCubicBezier**(`v0`, `v1`, `v2`, `v3`, `nbPoints`): `Curve3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1013](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1013)

Returns a Curve3 object along a Cubic Bezier curve : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#cubic-bezier-curve

#### Parameters

##### v0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the origin point of the Cubic Bezier

##### v1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the first control point

##### v2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the second control point

##### v3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the end point of the Cubic Bezier

##### nbPoints

`number`

(integer) the wanted number of points in the curve

#### Returns

`Curve3`

the created Curve3

***

### CreateHermiteSpline()

> `static` **CreateHermiteSpline**(`p1`, `t1`, `p2`, `t2`, `nSeg`): `Curve3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:1035](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L1035)

Returns a Curve3 object along a Hermite Spline curve : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#hermite-spline

#### Parameters

##### p1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the origin point of the Hermite Spline

##### t1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the tangent vector at the origin point

##### p2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the end point of the Hermite Spline

##### t2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the tangent vector at the end point

##### nSeg

`number`

(integer) the number of curve segments or nSeg + 1 points in the array

#### Returns

`Curve3`

the created Curve3

***

### CreateQuadraticBezier()

> `static` **CreateQuadraticBezier**(`v0`, `v1`, `v2`, `nbPoints`): `Curve3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:991](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L991)

Returns a Curve3 object along a Quadratic Bezier curve : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#quadratic-bezier-curve

#### Parameters

##### v0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the origin point of the Quadratic Bezier

##### v1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the control point

##### v2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

(Vector3) the end point of the Quadratic Bezier

##### nbPoints

`number`

(integer) the wanted number of points in the curve

#### Returns

`Curve3`

the created Curve3
