[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CloudPoint

# Class: CloudPoint

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L9)

Represents one particle of a points cloud system.

## Constructors

### Constructor

> **new CloudPoint**(`particleIndex`, `group`, `groupId`, `idxInGroup`, `pcs`): `CloudPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L104)

Creates a Point Cloud object.
Don't create particles manually, use instead the PCS internal tools like _addParticle()

#### Parameters

##### particleIndex

`number`

(integer) is the particle index in the PCS pool. It's also the particle identifier.

##### group

[`PointsGroup`](PointsGroup.md)

(PointsGroup) is the group the particle belongs to

##### groupId

`number`

(integer) is the group identifier in the PCS.

##### idxInGroup

`number`

(integer) is the index of the particle in the current point group (ex: the 10th point of addPoints(30))

##### pcs

[`PointsCloudSystem`](PointsCloudSystem.md)

defines the PCS it is associated to

#### Returns

`CloudPoint`

## Properties

### \_group

> **\_group**: [`PointsGroup`](PointsGroup.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L60)

Group this particle belongs to

***

### color

> **color**: [`Nullable`](../type-aliases/Nullable.md)\<[`Color4`](Color4.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L17)

The color of the particle

***

### groupId

> **groupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L64)

Group id of this particle

***

### idx

> **idx**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L13)

particle global index

***

### idxInGroup

> **idxInGroup**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L68)

Index of the particle in its group id (Internal use)

***

### parentId

> **parentId**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L89)

Parent particle Id, if any.
Default null.

***

### pivot

> **pivot**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L41)

The pivot point in the particle local space.

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L21)

The world space position of the particle.

***

### rotation

> **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L25)

The world space rotation of the particle. (Not use if rotationQuaternion is set)

***

### rotationQuaternion

> **rotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L29)

The world space rotation quaternion of the particle.

***

### translateFromPivot

> **translateFromPivot**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L47)

Must the particle be translated from its pivot point in its local space ?
In this case, the pivot point is set at the origin of the particle local space and the particle is translated.
Default : false

***

### uv

> **uv**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector2`](Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L33)

The uv of the particle.

***

### velocity

> **velocity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L37)

The current speed of the particle.

## Accessors

### quaternion

#### Get Signature

> **get** **quaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L129)

Legacy support, changed quaternion to rotationQuaternion

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **quaternion**(`q`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L136)

Legacy support, changed quaternion to rotationQuaternion

##### Parameters

###### q

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

##### Returns

`void`

***

### size

#### Get Signature

> **get** **size**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L115)

get point size

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **size**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L122)

Set point size

##### Parameters

###### scale

[`Vector3`](Vector3.md)

##### Returns

`void`

## Methods

### intersectsMesh()

> **intersectsMesh**(`target`, `isSphere`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/cloudPoint.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/cloudPoint.ts#L147)

Returns a boolean. True if the particle intersects a mesh, else false
The intersection is computed on the particle position and Axis Aligned Bounding Box (AABB) or Sphere

#### Parameters

##### target

[`Mesh`](Mesh.md)

is the object (point or mesh) what the intersection is computed against

##### isSphere

`boolean`

is boolean flag when false (default) bounding box of mesh is used, when true the bounding sphere is used

#### Returns

`boolean`

true if it intersects
