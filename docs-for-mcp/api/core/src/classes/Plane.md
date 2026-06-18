[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Plane

# Class: Plane

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L8)

Represents a plane by the equation ax + by + cz + d = 0

## Constructors

### Constructor

> **new Plane**(`a`, `b`, `c`, `d`): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L26)

Creates a Plane object according to the given floats a, b, c, d and the plane equation : ax + by + cz + d = 0

#### Parameters

##### a

`number`

a component of the plane

##### b

`number`

b component of the plane

##### c

`number`

c component of the plane

##### d

`number`

d component of the plane

#### Returns

`Plane`

## Properties

### d

> **d**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L18)

d component of the plane

#### Implementation of

`IPlaneLike.d`

***

### normal

> **normal**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L14)

Normal of the plane (a,b,c)

#### Implementation of

`IPlaneLike.normal`

## Methods

### asArray()

> **asArray**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L34)

#### Returns

`number`[]

the plane coordinates as a new array of 4 elements [a, b, c, d].

***

### clone()

> **clone**(): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L42)

#### Returns

`Plane`

a new plane copied from the current Plane.

***

### copyFromPoints()

> **copyFromPoints**(`point1`, `point2`, `point3`): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L114)

Updates the current Plane from the plane defined by the three given points.

#### Parameters

##### point1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

one of the points used to construct the plane

##### point2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

one of the points used to construct the plane

##### point3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

one of the points used to construct the plane

#### Returns

`Plane`

the updated Plane.

***

### dotCoordinate()

> **dotCoordinate**(`point`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L103)

Compute the dot product between the point and the plane normal

#### Parameters

##### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

point to calculate the dot product with

#### Returns

`number`

the dot product (float) of the point coordinates and the plane normal.

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L48)

#### Returns

`string`

the string "Plane".

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L54)

#### Returns

`number`

the Plane hash code.

***

### isFrontFacingTo()

> **isFrontFacingTo**(`direction`, `epsilon`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L150)

Checks if the plane is facing a given direction (meaning if the plane's normal is pointing in the opposite direction of the given vector).
Note that for this function to work as expected you should make sure that:
  - direction and the plane normal are normalized
  - epsilon is a number just bigger than -1, something like -0.99 for eg

#### Parameters

##### direction

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the direction to check if the plane is facing

##### epsilon

`number`

value the dot product is compared against (returns true if dot <= epsilon)

#### Returns

`boolean`

True if the plane is facing the given direction

***

### normalize()

> **normalize**(): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L63)

Normalize the current Plane in place.

#### Returns

`Plane`

the updated Plane.

#### Implementation of

`IPlaneLike.normalize`

***

### signedDistanceTo()

> **signedDistanceTo**(`point`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L160)

Calculates the distance to a point

#### Parameters

##### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

point to calculate distance to

#### Returns

`number`

the signed distance (float) from the given point to the Plane.

***

### transform()

> **transform**(`transformation`): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L81)

Applies a transformation the plane and returns the result

#### Parameters

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

the transformation matrix to be applied to the plane

#### Returns

`Plane`

a new Plane as the result of the transformation of the current Plane by the given matrix.

***

### FromArray()

> `static` **FromArray**(`array`): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L170)

Creates a plane from an  array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

the array to create a plane from

#### Returns

`Plane`

a new Plane from the given array.

***

### FromPoints()

> `static` **FromPoints**(`point1`, `point2`, `point3`): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L180)

Creates a plane from three points

#### Parameters

##### point1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

point used to create the plane

##### point2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

point used to create the plane

##### point3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

point used to create the plane

#### Returns

`Plane`

a new Plane defined by the three given points.

***

### FromPositionAndNormal()

> `static` **FromPositionAndNormal**(`origin`, `normal`): `Plane`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L191)

Creates a plane from an origin point and a normal

#### Parameters

##### origin

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

origin of the plane to be constructed

##### normal

[`Vector3`](Vector3.md)

normal of the plane to be constructed

#### Returns

`Plane`

a new Plane the normal vector to this plane at the given origin point.

***

### FromPositionAndNormalToRef()

> `static` **FromPositionAndNormalToRef**\<`T`\>(`origin`, `normal`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L203)

Updates the given Plane "result" from an origin point and a normal.

#### Type Parameters

##### T

`T` *extends* `Plane`

#### Parameters

##### origin

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

origin of the plane to be constructed

##### normal

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the normalized normals of the plane to be constructed

##### result

`T`

defines the Plane where to store the result

#### Returns

`T`

result input

***

### SignedDistanceToPlaneFromPositionAndNormal()

> `static` **SignedDistanceToPlaneFromPositionAndNormal**(`origin`, `normal`, `point`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.plane.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.plane.ts#L217)

Calculates the distance from a plane and a point

#### Parameters

##### origin

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

origin of the plane to be constructed

##### normal

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

normal of the plane to be constructed

##### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

point to calculate distance to

#### Returns

`number`

the signed distance between the plane defined by the normal vector at the "origin"" point and the given other point.
