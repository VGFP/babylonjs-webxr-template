[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Ray

# Class: Ray

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L57)

Class representing a ray with position and direction

## Constructors

### Constructor

> **new Ray**(`origin`, `direction`, `length?`, `epsilon?`): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L69)

Creates a new ray

#### Parameters

##### origin

[`Vector3`](Vector3.md)

origin point

##### direction

[`Vector3`](Vector3.md)

direction

##### length?

`number` = `Number.MAX_VALUE`

length of the ray

##### epsilon?

`number` = `Epsilon`

The epsilon value to use when calculating the ray/triangle intersection (default: Epsilon from math constants)

#### Returns

`Ray`

## Properties

### direction

> **direction**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L73)

direction

***

### epsilon

> **epsilon**: `number` = `Epsilon`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L77)

[Epsilon] The epsilon value to use when calculating the ray/triangle intersection (default: Epsilon from math constants)

***

### length

> **length**: `number` = `Number.MAX_VALUE`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L75)

[Number.MAX_VALUE] length of the ray

***

### origin

> **origin**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L71)

origin point

## Methods

### clone()

> **clone**(): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L86)

Clone the current ray

#### Returns

`Ray`

a new ray

***

### intersectionSegment()

> **intersectionSegment**(`sega`, `segb`, `threshold`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L415)

Intersection test between the ray and a given segment within a given tolerance (threshold)

#### Parameters

##### sega

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the first point of the segment to test the intersection against

##### segb

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the second point of the segment to test the intersection against

##### threshold

`number`

the tolerance margin, if the ray doesn't intersect the segment but is close to the given threshold, the intersection is successful

#### Returns

`number`

the distance from the ray origin to the intersection point if there's intersection, or -1 if there's no intersection

***

### intersectsAxis()

> **intersectsAxis**(`axis`, `offset?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L308)

Calculate the intercept of a ray on a given axis

#### Parameters

##### axis

`string`

to check 'x' | 'y' | 'z'

##### offset?

`number` = `0`

from axis interception (i.e. an offset of 1y is intercepted above ground)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

a vector containing the coordinates where 'axis' is equal to zero (else offset), or null if there is no intercept.

***

### intersectsBox()

> **intersectsBox**(`box`, `intersectionTreshold?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L196)

Checks if the ray intersects a box
This does not account for the ray length by design to improve perfs.

#### Parameters

##### box

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`BoundingBox`](BoundingBox.md)\>

the bounding box to check

##### intersectionTreshold?

`number` = `0`

extra extend to be added to the BoundingBox in all direction

#### Returns

`boolean`

if the box was hit

***

### intersectsBoxMinMax()

> **intersectsBoxMinMax**(`minimum`, `maximum`, `intersectionTreshold?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L98)

Checks if the ray intersects a box
This does not account for the ray length by design to improve perfs.

#### Parameters

##### minimum

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

bound of the box

##### maximum

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

bound of the box

##### intersectionTreshold?

`number` = `0`

extra extend to be added to the box in all direction

#### Returns

`boolean`

if the box was hit

***

### intersectsMesh()

> **intersectsMesh**(`mesh`, `fastCheck?`, `trianglePredicate?`, `onlyBoundingInfo?`, `worldToUse?`, `skipBoundingInfo?`): [`PickingInfo`](PickingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L347)

Checks if ray intersects a mesh. The ray is defined in WORLD space. A mesh triangle can be picked both from its front and back sides,
irrespective of orientation.

#### Parameters

##### mesh

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the mesh to check

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

##### onlyBoundingInfo?

`boolean` = `false`

defines a boolean indicating if picking should only happen using bounding info (false by default)

##### worldToUse?

[`Matrix`](Matrix.md)

defines the world matrix to use to get the world coordinate of the intersection point

##### skipBoundingInfo?

`boolean` = `false`

a boolean indicating if we should skip the bounding info check

#### Returns

[`PickingInfo`](PickingInfo.md)

picking info of the intersection

***

### intersectsMeshes()

> **intersectsMeshes**(`meshes`, `fastCheck?`, `results?`): [`PickingInfo`](PickingInfo.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L375)

Checks if ray intersects a mesh

#### Parameters

##### meshes

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`AbstractMesh`](AbstractMesh.md)\>[]

the meshes to check

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### results?

[`PickingInfo`](PickingInfo.md)[]

array to store result in

#### Returns

[`PickingInfo`](PickingInfo.md)[]

Array of picking infos

***

### intersectsPlane()

> **intersectsPlane**(`plane`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L283)

Checks if ray intersects a plane

#### Parameters

##### plane

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Plane`](Plane.md)\>

the plane to check

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

the distance away it was hit

***

### intersectsSphere()

> **intersectsSphere**(`sphere`, `intersectionTreshold?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L206)

If the ray hits a sphere

#### Parameters

##### sphere

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`BoundingSphere`](BoundingSphere.md)\>

the bounding sphere to check

##### intersectionTreshold?

`number` = `0`

extra extend to be added to the BoundingSphere in all direction

#### Returns

`boolean`

true if it hits the sphere

***

### intersectsTriangle()

> **intersectsTriangle**(`vertex0`, `vertex1`, `vertex2`): [`Nullable`](../type-aliases/Nullable.md)\<`IntersectionInfo`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L235)

If the ray hits a triange

#### Parameters

##### vertex0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

triangle vertex

##### vertex1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

triangle vertex

##### vertex2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

triangle vertex

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IntersectionInfo`\>

intersection information if hit

***

### unprojectRayToRef()

> **unprojectRayToRef**(`sourceX`, `sourceY`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:670](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L670)

Unproject a ray from screen space to object space

#### Parameters

##### sourceX

`number`

defines the screen space x coordinate to use

##### sourceY

`number`

defines the screen space y coordinate to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### view

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the view matrix to use

##### projection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the projection matrix to use

#### Returns

`void`

***

### update()

> **update**(`x`, `y`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`, `enableDistantPicking?`): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:522](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L522)

Update the ray from viewport position

#### Parameters

##### x

`number`

position

##### y

`number`

y position

##### viewportWidth

`number`

viewport width

##### viewportHeight

`number`

viewport height

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

world matrix

##### view

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

view matrix

##### projection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

projection matrix

##### enableDistantPicking?

`boolean` = `false`

defines if picking should handle large values for mesh position/scaling (false by default)

#### Returns

`Ray`

this ray updated

***

### CreateFromToToRef()

> `static` **CreateFromToToRef**(`origin`, `end`, `result`, `world?`): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:610](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L610)

Function will update a transformed ray starting from origin and ending at the end point. Ray's length will be set, and ray will be
transformed to the given world matrix.

#### Parameters

##### origin

[`Vector3`](Vector3.md)

The origin point

##### end

[`Vector3`](Vector3.md)

The end point

##### result

`Ray`

the object to store the result

##### world?

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\> = `Matrix.IdentityReadOnly`

a matrix to transform the ray to. Default is the identity matrix.

#### Returns

`Ray`

the ref ray

***

### CreateNew()

> `static` **CreateNew**(`x`, `y`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L574)

Creates a new ray from screen space and viewport

#### Parameters

##### x

`number`

position

##### y

`number`

y position

##### viewportWidth

`number`

viewport width

##### viewportHeight

`number`

viewport height

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

world matrix

##### view

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

view matrix

##### projection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

projection matrix

#### Returns

`Ray`

new ray

***

### CreateNewFromTo()

> `static` **CreateNewFromTo**(`origin`, `end`, `world?`): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L596)

Function will create a new transformed ray starting from origin and ending at the end point. Ray's length will be set, and ray will be
transformed to the given world matrix.

#### Parameters

##### origin

[`Vector3`](Vector3.md)

The origin point

##### end

[`Vector3`](Vector3.md)

The end point

##### world?

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\> = `Matrix.IdentityReadOnly`

a matrix to transform the ray to. Default is the identity matrix.

#### Returns

`Ray`

the new ray

***

### Transform()

> `static` **Transform**(`ray`, `matrix`): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:626](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L626)

Transforms a ray by a matrix

#### Parameters

##### ray

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Ray`\>

ray to transform

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

matrix to apply

#### Returns

`Ray`

the resulting new ray

***

### TransformToRef()

> `static` **TransformToRef**(`ray`, `matrix`, `result`): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:640](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L640)

Transforms a ray by a matrix

#### Parameters

##### ray

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Ray`\>

ray to transform

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

matrix to apply

##### result

`Ray`

ray to store result in

#### Returns

`Ray`

the updated result ray

***

### Zero()

> `static` **Zero**(): `Ray`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:559](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L559)

Creates a ray with origin and direction of 0,0,0

#### Returns

`Ray`

the new ray
