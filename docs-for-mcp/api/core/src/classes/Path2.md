[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Path2

# Class: Path2

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L214)

Represents a 2D path made up of multiple 2D points

## Constructors

### Constructor

> **new Path2**(`x`, `y`): `Path2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L228)

Creates a Path2 object from the starting 2D coordinates x and y.

#### Parameters

##### x

`number`

the starting points x value

##### y

`number`

the starting points y value

#### Returns

`Path2`

## Properties

### closed

> **closed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L221)

If the path start and end point are the same

## Methods

### addArcTo()

> **addArcTo**(`midX`, `midY`, `endX`, `endY`, `numberOfSegments?`): `Path2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L258)

Adds _numberOfSegments_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current Path2 last point) to the current Path2.

#### Parameters

##### midX

`number`

middle point x value

##### midY

`number`

middle point y value

##### endX

`number`

end point x value

##### endY

`number`

end point y value

##### numberOfSegments?

`number` = `36`

(default: 36)

#### Returns

`Path2`

the updated Path2.

***

### addBezierCurveTo()

> **addBezierCurveTo**(`originTangentX`, `originTangentY`, `destinationTangentX`, `destinationTangentY`, `endX`, `endY`, `numberOfSegments?`): `Path2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L322)

Adds _numberOfSegments_ segments according to the bezier curve definition to the current Path2.

#### Parameters

##### originTangentX

`number`

tangent vector at the origin point x value

##### originTangentY

`number`

tangent vector at the origin point y value

##### destinationTangentX

`number`

tangent vector at the destination point x value

##### destinationTangentY

`number`

tangent vector at the destination point y value

##### endX

`number`

end point x value

##### endY

`number`

end point y value

##### numberOfSegments?

`number` = `36`

(default: 36)

#### Returns

`Path2`

the updated Path2.

***

### addLineTo()

> **addLineTo**(`x`, `y`): `Path2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L238)

Adds a new segment until the given coordinates (x, y) to the current Path2.

#### Parameters

##### x

`number`

the added points x value

##### y

`number`

the added points y value

#### Returns

`Path2`

the updated Path2.

***

### addQuadraticCurveTo()

> **addQuadraticCurveTo**(`controlX`, `controlY`, `endX`, `endY`, `numberOfSegments?`): `Path2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L292)

Adds _numberOfSegments_ segments according to the quadratic curve definition to the current Path2.

#### Parameters

##### controlX

`number`

control point x value

##### controlY

`number`

control point y value

##### endX

`number`

end point x value

##### endY

`number`

end point y value

##### numberOfSegments?

`number` = `36`

(default: 36)

#### Returns

`Path2`

the updated Path2.

***

### area()

> **area**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L431)

Gets the area of the polygon defined by the path

#### Returns

`number`

area value

***

### close()

> **close**(): `Path2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L408)

Closes the Path2.

#### Returns

`Path2`

the Path2.

***

### getPointAtLengthPosition()

> **getPointAtLengthPosition**(`normalizedLengthPosition`): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L455)

Retrieves the point at the distance aways from the starting point

#### Parameters

##### normalizedLengthPosition

`number`

the length along the path to retrieve the point from

#### Returns

[`Vector2`](Vector2.md)

a new Vector2 located at a percentage of the Path2 total length on this path.

***

### getPoints()

> **getPoints**(): [`Vector2`](Vector2.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L446)

Gets the points which construct the path

#### Returns

[`Vector2`](Vector2.md)[]

the Path2 internal array of points.

***

### isPointInside()

> **isPointInside**(`point`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L354)

Defines if a given point is inside the polygon defines by the path

#### Parameters

##### point

[`Vector2`](Vector2.md)

defines the point to test

#### Returns

`boolean`

true if the point is inside

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L416)

Gets the sum of the distance between each sequential point in the path

#### Returns

`number`

the Path2 total length (float).

***

### StartingAt()

> `static` **StartingAt**(`x`, `y`): `Path2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:489](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.path.ts#L489)

Creates a new path starting from an x and y position

#### Parameters

##### x

`number`

starting x value

##### y

`number`

starting y value

#### Returns

`Path2`

a new Path2 starting at the coordinates (x, y).
