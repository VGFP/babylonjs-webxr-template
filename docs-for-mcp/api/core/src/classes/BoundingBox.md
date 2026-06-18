[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoundingBox

# Class: BoundingBox

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L15)

Class used to store bounding box information

## Implements

- [`ICullable`](../interfaces/ICullable.md)

## Constructors

### Constructor

> **new BoundingBox**(`min`, `max`, `worldMatrix?`): `BoundingBox`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L80)

Creates a new bounding box

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

`BoundingBox`

## Properties

### center

> `readonly` **center**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L23)

Gets the center of the bounding box in local space

***

### centerWorld

> `readonly` **centerWorld**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L27)

Gets the center of the bounding box in world space

***

### directions

> `readonly` **directions**: [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L39)

Gets the OBB (object bounding box) directions

***

### extendSize

> `readonly` **extendSize**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L31)

Gets half the size of the extent in local space. Multiply by 2 to obtain the full size of the box!

***

### extendSizeWorld

> `readonly` **extendSizeWorld**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L35)

Gets half the size of the extent in world space. Multiply by 2 to obtain the full size of the box!

***

### maximum

> `readonly` **maximum**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L59)

Gets the maximum vector in local space

***

### maximumWorld

> `readonly` **maximumWorld**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L51)

Gets the maximum vector in world space

***

### minimum

> `readonly` **minimum**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L55)

Gets the minimum vector in local space

***

### minimumWorld

> `readonly` **minimumWorld**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L47)

Gets the minimum vector in world space

***

### vectors

> `readonly` **vectors**: [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L19)

Gets the 8 vectors representing the bounding box in local space

***

### vectorsWorld

> `readonly` **vectorsWorld**: [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L43)

Gets the 8 vectors representing the bounding box in world space

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L293)

Disposes the resources of the class

#### Returns

`void`

***

### getWorldMatrix()

> **getWorldMatrix**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L146)

Gets the world matrix of the bounding box

#### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

a matrix

***

### intersectsMinMax()

> **intersectsMinMax**(`min`, `max`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L260)

Tests if the bounding box intersects with a box defined by a min and max vectors

#### Parameters

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the min vector to use

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the max vector to use

#### Returns

`boolean`

true if there is an intersection

***

### intersectsPoint()

> **intersectsPoint**(`point`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L216)

Tests if a point is inside the bounding box

#### Parameters

##### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the point to test

#### Returns

`boolean`

true if the point is inside the bounding box

***

### intersectsSphere()

> **intersectsSphere**(`sphere`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L250)

Tests if the bounding box intersects with a bounding sphere

#### Parameters

##### sphere

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`BoundingSphere`](BoundingSphere.md)\>

defines the sphere to test

#### Returns

`boolean`

true if there is an intersection

***

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L207)

Tests if the bounding box is entirely inside the frustum planes

#### Parameters

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum planes to test

#### Returns

`boolean`

true if there is an inclusion

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isCompletelyInFrustum`](../interfaces/ICullable.md#iscompletelyinfrustum)

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L198)

Tests if the bounding box is intersecting the frustum planes

#### Parameters

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum planes to test

#### Returns

`boolean`

true if there is an intersection

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isInFrustum`](../interfaces/ICullable.md#isinfrustum)

***

### reConstruct()

> **reConstruct**(`min`, `max`, `worldMatrix?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L92)

Recreates the entire bounding box from scratch as if we call the constructor in place

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

> **scale**(`factor`): `BoundingBox`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L126)

Scale the current bounding box by applying a scale factor

#### Parameters

##### factor

`number`

defines the scale factor to apply

#### Returns

`BoundingBox`

the current bounding box

***

### Intersects()

> `static` **Intersects**(`box0`, `box1`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L306)

Tests if two bounding boxes are intersections

#### Parameters

##### box0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`BoundingBox`\>

defines the first box to test

##### box1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`BoundingBox`\>

defines the second box to test

#### Returns

`boolean`

true if there is an intersection

***

### IntersectsSphere()

> `static` **IntersectsSphere**(`minPoint`, `maxPoint`, `sphereCenter`, `sphereRadius`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:318](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L318)

Tests if a bounding box defines by a min/max vectors intersects a sphere

#### Parameters

##### minPoint

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the minimum vector of the bounding box

##### maxPoint

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the maximum vector of the bounding box

##### sphereCenter

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the sphere center

##### sphereRadius

`number`

defines the sphere radius

#### Returns

`boolean`

true if there is an intersection

***

### IsCompletelyInFrustum()

> `static` **IsCompletelyInFrustum**(`boundingVectors`, `frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L331)

Tests if a bounding box defined with 8 vectors is entirely inside frustum planes

#### Parameters

##### boundingVectors

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Vector3`](Vector3.md)\>[]

defines an array of 8 vectors representing a bounding box

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum planes to test

#### Returns

`boolean`

true if there is an inclusion

***

### IsInFrustum()

> `static` **IsInFrustum**(`boundingVectors`, `frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingBox.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/boundingBox.ts#L349)

Tests if a bounding box defined with 8 vectors intersects frustum planes

#### Parameters

##### boundingVectors

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Vector3`](Vector3.md)\>[]

defines an array of 8 vectors representing a bounding box

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum planes to test

#### Returns

`boolean`

true if there is an intersection
