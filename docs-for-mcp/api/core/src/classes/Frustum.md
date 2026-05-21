[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Frustum

# Class: Frustum

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L8)

Represents a camera frustum

## Constructors

### Constructor

> **new Frustum**(): `Frustum`

#### Returns

`Frustum`

## Methods

### GetBottomPlaneToRef()

> `static` **GetBottomPlaneToRef**(`transform`, `frustumPlane`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L98)

Gets the bottom frustum plane transformed by the transform matrix

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

transformation matrix to be applied to the resulting frustum plane

##### frustumPlane

[`Plane`](Plane.md)

the resulting frustum plane

#### Returns

`void`

***

### GetFarPlaneToRef()

> `static` **GetFarPlaneToRef**(`transform`, `frustumPlane`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L42)

Gets the far frustum plane transformed by the transform matrix

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

transformation matrix to be applied to the resulting frustum plane

##### frustumPlane

[`Plane`](Plane.md)

the resulting frustum plane

#### Returns

`void`

***

### GetLeftPlaneToRef()

> `static` **GetLeftPlaneToRef**(`transform`, `frustumPlane`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L56)

Gets the left frustum plane transformed by the transform matrix

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

transformation matrix to be applied to the resulting frustum plane

##### frustumPlane

[`Plane`](Plane.md)

the resulting frustum plane

#### Returns

`void`

***

### GetNearPlaneToRef()

> `static` **GetNearPlaneToRef**(`transform`, `frustumPlane`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L28)

Gets the near frustum plane transformed by the transform matrix

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

transformation matrix to be applied to the resulting frustum plane

##### frustumPlane

[`Plane`](Plane.md)

the resulting frustum plane

#### Returns

`void`

***

### GetPlanes()

> `static` **GetPlanes**(`transform`): [`Plane`](Plane.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L14)

Gets the planes representing the frustum

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

matrix to be applied to the returned planes

#### Returns

[`Plane`](Plane.md)[]

a new array of 6 Frustum planes computed by the given transformation matrix.

***

### GetPlanesToRef()

> `static` **GetPlanesToRef**(`transform`, `frustumPlanes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L112)

Sets the given array "frustumPlanes" with the 6 Frustum planes computed by the given transformation matrix.

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

transformation matrix to be applied to the resulting frustum planes

##### frustumPlanes

[`Plane`](Plane.md)[]

the resulting frustum planes

#### Returns

`void`

***

### GetRightPlaneToRef()

> `static` **GetRightPlaneToRef**(`transform`, `frustumPlane`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L70)

Gets the right frustum plane transformed by the transform matrix

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

transformation matrix to be applied to the resulting frustum plane

##### frustumPlane

[`Plane`](Plane.md)

the resulting frustum plane

#### Returns

`void`

***

### GetTopPlaneToRef()

> `static` **GetTopPlaneToRef**(`transform`, `frustumPlane`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L84)

Gets the top frustum plane transformed by the transform matrix

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

transformation matrix to be applied to the resulting frustum plane

##### frustumPlane

[`Plane`](Plane.md)

the resulting frustum plane

#### Returns

`void`

***

### IsPointInFrustum()

> `static` **IsPointInFrustum**(`point`, `frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.frustum.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.frustum.ts#L138)

Tests if a point is located between the frustum planes.

#### Parameters

##### point

[`Vector3`](Vector3.md)

defines the point to test

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum planes to test

#### Returns

`boolean`

true if the point is located between the frustum planes
