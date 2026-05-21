[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoundingInfo

# Class: BoundingInfo

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L54)

Info for a bounding data of a mesh

## Implements

- [`ICullable`](../interfaces/ICullable.md)

## Constructors

### Constructor

> **new BoundingInfo**(`minimum`, `maximum`, `worldMatrix?`): `BoundingInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L74)

Constructs bounding info

#### Parameters

##### minimum

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

min vector of the bounding box/sphere

##### maximum

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

max vector of the bounding box/sphere

##### worldMatrix?

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\>

defines the new world matrix

#### Returns

`BoundingInfo`

## Properties

### boundingBox

> `readonly` **boundingBox**: [`BoundingBox`](BoundingBox.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L58)

Bounding box for the mesh

***

### boundingSphere

> `readonly` **boundingSphere**: [`BoundingSphere`](BoundingSphere.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L62)

Bounding sphere for the mesh

## Accessors

### diagonalLength

#### Get Signature

> **get** **diagonalLength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L225)

Gets the world distance between the min and max points of the bounding box

##### Returns

`number`

***

### isLocked

#### Get Signature

> **get** **isLocked**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L107)

If the info is locked and won't be updated to avoid perf overhead

##### Returns

`boolean`

#### Set Signature

> **set** **isLocked**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L111)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### maximum

#### Get Signature

> **get** **maximum**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L100)

max vector of the bounding box/sphere

##### Returns

[`Vector3`](Vector3.md)

***

### minimum

#### Get Signature

> **get** **minimum**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L93)

min vector of the bounding box/sphere

##### Returns

[`Vector3`](Vector3.md)

## Methods

### centerOn()

> **centerOn**(`center`, `extend`): `BoundingInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L134)

Recreate the bounding info to be centered around a specific point given a specific extend.

#### Parameters

##### center

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

New center of the bounding info

##### extend

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

New extend of the bounding info

#### Returns

`BoundingInfo`

the current bounding info

***

### encapsulate()

> **encapsulate**(`point`): `BoundingInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L149)

Grows the bounding info to include the given point.

#### Parameters

##### point

[`Vector3`](Vector3.md)

The point that will be included in the current bounding info (in local space)

#### Returns

`BoundingInfo`

the current bounding info

***

### encapsulateBoundingInfo()

> **encapsulateBoundingInfo**(`toEncapsulate`): `BoundingInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L162)

Grows the bounding info to encapsulate the given bounding info.

#### Parameters

##### toEncapsulate

`BoundingInfo`

The bounding info that will be encapsulated in the current bounding info

#### Returns

`BoundingInfo`

the current bounding info

***

### intersects()

> **intersects**(`boundingInfo`, `precise`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L276)

Checks if another bounding info intersects the bounding box and bounding sphere or the mesh

#### Parameters

##### boundingInfo

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`BoundingInfo`\>

the bounding info to check intersection with

##### precise

`boolean`

if the intersection should be done using OBB

#### Returns

`boolean`

if the bounding info intersects

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/mesh_intersect

***

### intersectsPoint()

> **intersectsPoint**(`point`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L253)

Checks if a point is inside the bounding box and bounding sphere or the mesh

#### Parameters

##### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the point to check intersection with

#### Returns

`boolean`

if the point intersects

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/mesh_intersect

***

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L237)

Checks if a cullable object (mesh...) is in the camera frustum
Unlike isInFrustum this checks the full bounding box

#### Parameters

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

Camera near/planes

#### Returns

`boolean`

true if the object is in frustum otherwise false

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isCompletelyInFrustum`](../interfaces/ICullable.md#iscompletelyinfrustum)

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`, `strategy?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L200)

Returns `true` if the bounding info is within the frustum defined by the passed array of planes.

#### Parameters

##### frustumPlanes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Plane`](Plane.md)\>[]

defines the frustum to test

##### strategy?

`number` = `Constants.MESHES_CULLINGSTRATEGY_STANDARD`

defines the strategy to use for the culling (default is BABYLON.AbstractMesh.CULLINGSTRATEGY_STANDARD)
The different strategies available are:
* BABYLON.AbstractMesh.CULLINGSTRATEGY_STANDARD most accurate but slower

#### Returns

`boolean`

true if the bounding info is in the frustum planes

#### See

 - https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_STANDARD
* BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY faster but less accurate
 - https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
* BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION can be faster if always visible
 - https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_OPTIMISTIC_INCLUSION
* BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY can be faster if always visible
 - https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isInFrustum`](../interfaces/ICullable.md#isinfrustum)

***

### reConstruct()

> **reConstruct**(`min`, `max`, `worldMatrix?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L85)

Recreates the entire bounding info from scratch as if we call the constructor in place

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

> **scale**(`factor`): `BoundingInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L182)

Scale the current bounding info by applying a scale factor

#### Parameters

##### factor

`number`

defines the scale factor to apply

#### Returns

`BoundingInfo`

the current bounding info

***

### update()

> **update**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/boundingInfo.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/boundingInfo.ts#L120)

Updates the bounding sphere and box

#### Parameters

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

world matrix to be used to update

#### Returns

`void`
