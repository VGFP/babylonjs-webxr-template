[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoundingSphere

# Class: BoundingSphere

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L9)

Class used to store bounding sphere information

## Constructors

### Constructor

> **new BoundingSphere**(`min`, `max`, `worldMatrix?`): `BoundingSphere`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L44)

Creates a new bounding sphere

#### Parameters

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the minimum vector (in local space)

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the maximum vector (in local space)

##### worldMatrix?

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\>

defines the new world matrix

#### Returns

`BoundingSphere`

## Properties

### center

> `readonly` **center**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L13)

Gets the center of the bounding sphere in local space

***

### centerWorld

> `readonly` **centerWorld**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L21)

Gets the center of the bounding sphere in world space

***

### maximum

> `readonly` **maximum**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L33)

Gets the maximum vector in local space

***

### minimum

> `readonly` **minimum**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L29)

Gets the minimum vector in local space

***

### radius

> **radius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L17)

Radius of the bounding sphere in local space

***

### radiusWorld

> **radiusWorld**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L25)

Radius of the bounding sphere in world space

## Methods

### getWorldMatrix()

> **getWorldMatrix**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L87)

Gets the world matrix of the bounding box

#### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

a matrix

***

### intersectsPoint()

> **intersectsPoint**(`point`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L144)

Tests if a point is inside the bounding sphere

#### Parameters

##### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the point to test

#### Returns

`boolean`

true if the point is inside the bounding sphere

***

### isCenterInFrustum()

> **isCenterInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L129)

Tests if the bounding sphere center is in between the frustum planes.
Used for optimistic fast inclusion.

#### Parameters

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum planes to test

#### Returns

`boolean`

true if the sphere center is in between the frustum planes

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L112)

Tests if the bounding sphere is intersecting the frustum planes

#### Parameters

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum planes to test

#### Returns

`boolean`

true if there is an intersection

***

### reConstruct()

> **reConstruct**(`min`, `max`, `worldMatrix?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L54)

Recreates the entire bounding sphere from scratch as if we call the constructor in place

#### Parameters

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the new minimum vector (in local space)

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the new maximum vector (in local space)

##### worldMatrix?

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\>

defines the new world matrix

#### Returns

`void`

***

### scale()

> **scale**(`factor`): `BoundingSphere`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L71)

Scale the current bounding sphere by applying a scale factor

#### Parameters

##### factor

`number`

defines the scale factor to apply

#### Returns

`BoundingSphere`

the current bounding box

***

### CreateFromCenterAndRadius()

> `static` **CreateFromCenterAndRadius**(`center`, `radius`, `matrix?`): `BoundingSphere`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L178)

Creates a sphere from a center and a radius

#### Parameters

##### center

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

The center

##### radius

`number`

radius

##### matrix?

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\>

Optional worldMatrix

#### Returns

`BoundingSphere`

The sphere

***

### Intersects()

> `static` **Intersects**(`sphere0`, `sphere1`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingSphere.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingSphere.ts#L160)

Checks if two sphere intersect

#### Parameters

##### sphere0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`BoundingSphere`\>

sphere 0

##### sphere1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`BoundingSphere`\>

sphere 1

#### Returns

`boolean`

true if the spheres intersect
