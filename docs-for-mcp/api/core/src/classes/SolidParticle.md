[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SolidParticle

# Class: SolidParticle

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L14)

Represents one particle of a solid particle system.

## Constructors

### Constructor

> **new SolidParticle**(`particleIndex`, `particleId`, `positionIndex`, `indiceIndex`, `model`, `shapeId`, `idxInShape`, `sps`, `modelBoundingInfo?`, `materialIndex?`): `SolidParticle`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L175)

Creates a Solid Particle object.
Don't create particles manually, use instead the Solid Particle System internal tools like _addParticle()

#### Parameters

##### particleIndex

`number`

(integer) is the particle index in the Solid Particle System pool.

##### particleId

`number`

(integer) is the particle identifier. Unless some particles are removed from the SPS, it's the same value than the particle idx.

##### positionIndex

`number`

(integer) is the starting index of the particle vertices in the SPS "positions" array.

##### indiceIndex

`number`

(integer) is the starting index of the particle indices in the SPS "indices" array.

##### model

[`Nullable`](../type-aliases/Nullable.md)\<[`ModelShape`](ModelShape.md)\>

(ModelShape) is a reference to the model shape on what the particle is designed.

##### shapeId

`number`

(integer) is the model shape identifier in the SPS.

##### idxInShape

`number`

(integer) is the index of the particle in the current model (ex: the 10th box of addShape(box, 30))

##### sps

[`SolidParticleSystem`](SolidParticleSystem.md)

defines the sps it is associated to

##### modelBoundingInfo?

[`Nullable`](../type-aliases/Nullable.md)\<[`BoundingInfo`](BoundingInfo.md)\> = `null`

is the reference to the model BoundingInfo used for intersection computations.

##### materialIndex?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

is the particle material identifier (integer) when the MultiMaterials are enabled in the SPS.

#### Returns

`SolidParticle`

## Properties

### age

> **age**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L77)

The current age of the particle.

***

### alive

> **alive**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L64)

Is the particle active or not ?

***

### color

> **color**: [`Nullable`](../type-aliases/Nullable.md)\<[`Color4`](Color4.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L26)

The color of the particle

***

### cullingStrategy

> **cullingStrategy**: `number` = `AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L139)

The culling strategy to use to check whether the solid particle must be culled or not when using isInFrustum().
The possible values are :
- AbstractMesh.CULLINGSTRATEGY_STANDARD
- AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
- AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION
- AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY
The default value for solid particles is AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
Please read each static variable documentation in the class AbstractMesh to get details about the culling process.

***

### id

> **id**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L22)

particle identifier

***

### idx

> **idx**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L18)

particle global index

***

### idxInShape

> **idxInShape**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L98)

Index of the particle in its shape id

***

### isVisible

> **isVisible**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L68)

Is the particle visible or not ?

***

### lifeTime

> **lifeTime**: `number` = `Infinity`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L73)

Defines how long will the life of the particle be.
Set to Infinity for particles that should never die (default behavior for SolidParticleSystem).

***

### materialIndex

> **materialIndex**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L124)

The particle material identifier (integer) when MultiMaterials are enabled in the SPS.

***

### parentId

> **parentId**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L120)

Parent particle Id, if any.
Default null.

***

### pivot

> **pivot**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L54)

The pivot point in the particle local space.

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L30)

The world space position of the particle.

***

### props

> **props**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L128)

Custom object or properties.

***

### rotation

> **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L34)

The world space rotation of the particle. (Not use if rotationQuaternion is set)

***

### rotationQuaternion

> **rotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L38)

The world space rotation quaternion of the particle.

***

### scaling

> **scaling**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L42)

The scaling of the particle.

***

### shapeId

> **shapeId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L94)

ModelShape id of this particle

***

### translateFromPivot

> **translateFromPivot**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L60)

Must the particle be translated from its pivot point in its local space ?
In this case, the pivot point is set at the origin of the particle local space and the particle is translated.
Default : false

***

### uvs

> **uvs**: [`Vector4`](Vector4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L46)

The uvs of the particle.

***

### velocity

> **velocity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L50)

The current speed of the particle.

## Accessors

### hasBoundingInfo

#### Get Signature

> **get** **hasBoundingInfo**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L157)

Returns true if there is already a bounding info

##### Returns

`boolean`

***

### quaternion

#### Get Signature

> **get** **quaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L258)

Legacy support, changed quaternion to rotationQuaternion

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **quaternion**(`q`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L265)

Legacy support, changed quaternion to rotationQuaternion

##### Parameters

###### q

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

##### Returns

`void`

***

### scale

#### Get Signature

> **get** **scale**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L244)

Legacy support, changed scale to scaling

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **scale**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L251)

Legacy support, changed scale to scaling

##### Parameters

###### scale

[`Vector3`](Vector3.md)

##### Returns

`void`

## Methods

### copyToRef()

> **copyToRef**(`target`): `SolidParticle`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L208)

Copies the particle property values into the existing target : position, rotation, scaling, uvs, colors, pivot, parent, visibility, alive

#### Parameters

##### target

`SolidParticle`

the particle target

#### Returns

`SolidParticle`

the current particle

***

### getBoundingInfo()

> **getBoundingInfo**(): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L150)

Particle BoundingInfo object

#### Returns

[`BoundingInfo`](BoundingInfo.md)

a BoundingInfo

***

### intersectsMesh()

> **intersectsMesh**(`target`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L275)

Returns a boolean. True if the particle intersects another particle or another mesh, else false.
The intersection is computed on the particle bounding sphere and Axis Aligned Bounding Box (AABB)

#### Parameters

##### target

[`Mesh`](Mesh.md) \| `SolidParticle`

is the object (solid particle or mesh) what the intersection is computed against.

#### Returns

`boolean`

true if it intersects

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticle.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticle.ts#L291)

Returns `true` if the solid particle is within the frustum defined by the passed array of planes.
A particle is in the frustum if its bounding box intersects the frustum

#### Parameters

##### frustumPlanes

[`Plane`](Plane.md)[]

defines the frustum to test

#### Returns

`boolean`

true if the particle is in the frustum planes
