[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SolidParticleSystem

# Class: SolidParticleSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L32)

The SPS is a single updatable mesh. The solid particles are simply separate parts or faces of this big mesh.
As it is just a mesh, the SPS has all the same properties than any other BJS mesh : not more, not less. It can be scaled, rotated, translated, enlighted, textured, moved, etc.

The SPS is also a particle system. It provides some methods to manage the particles.
However it is behavior agnostic. This means it has no emitter, no particle physics, no particle recycler. You have to implement your own behavior.

Full documentation here : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_intro

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new SolidParticleSystem**(`name`, `scene`, `options?`): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L198)

Creates a SPS (Solid Particle System) object.

#### Parameters

##### name

`string`

(String) is the SPS name, this will be the underlying mesh name.

##### scene

[`Scene`](Scene.md)

(Scene) is the scene in which the SPS is added.

##### options?

defines the options of the sps e.g.
* updatable (optional boolean, default true) : if the SPS must be updatable or immutable.
* isPickable (optional boolean, default false) : if the solid particles must be pickable.
* enableDepthSort (optional boolean, default false) : if the solid particles must be sorted in the geometry according to their distance to the camera.
* useModelMaterial (optional boolean, default false) : if the model materials must be used to create the SPS multimaterial. This enables the multimaterial supports of the SPS.
* enableMultiMaterial (optional boolean, default false) : if the solid particles can be given different materials.
* expandable (optional boolean, default false) : if particles can still be added after the initial SPS mesh creation.
* particleIntersection (optional boolean, default false) : if the solid particle intersections must be computed.
* boundingSphereOnly (optional boolean, default false) : if the particle intersection must be computed only with the bounding sphere (no bounding box computation, so faster).
* bSphereRadiusFactor (optional float, default 1.0) : a number to multiply the bounding sphere radius by in order to reduce it for instance.
* computeBoundingBox (optional boolean, default false): if the bounding box of the entire SPS will be computed (for occlusion detection, for example). If it is false, the bounding box will be the bounding box of the first particle.
* autoFixFaceOrientation (optional boolean, default false): if the particle face orientations will be flipped for transformations that change orientation (scale (-1, 1, 1), for example)
* camera (optional Camera) : the camera to use with the particule system. If not provided, use the scene active camera.

###### autoFixFaceOrientation?

`boolean`

###### boundingSphereOnly?

`boolean`

###### bSphereRadiusFactor?

`number`

###### camera?

[`TargetCamera`](TargetCamera.md)

###### computeBoundingBox?

`boolean`

###### enableDepthSort?

`boolean`

###### enableMultiMaterial?

`boolean`

###### expandable?

`boolean`

###### isPickable?

`boolean`

###### particleIntersection?

`boolean`

###### updatable?

`boolean`

###### useModelMaterial?

`boolean`

#### Returns

`SolidParticleSystem`

#### Example

```ts
bSphereRadiusFactor = 1.0 / Math.sqrt(3.0) => the bounding sphere exactly matches a spherical mesh.
```

## Properties

### billboard

> **billboard**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L45)

If the particles must ever face the camera (default false). Useful for planar particles.

***

### counter

> **counter**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L53)

This a counter ofr your own usage. It's not set by any SPS functions.

***

### depthSortedParticles

> **depthSortedParticles**: `DepthSortedParticle`[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L95)

This array is populated when `enableDepthSort` is set to true.
Each element of this array is an instance of the class DepthSortedParticle.

***

### mesh

> **mesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L61)

The SPS mesh. It's a standard BJS Mesh, so all the methods from the Mesh class are available.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L57)

The SPS name. This name is also given to the underlying mesh.

***

### nbParticles

> **nbParticles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L41)

The SPS total number of particles. Read only. Use SPS.counter instead if you need to set your own value.

***

### particles

> **particles**: [`SolidParticle`](SolidParticle.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L37)

The SPS array of Solid Particle objects. Just access each particle as with any classic array.
 Example : var p = SPS.particles[i];

***

### pickedBySubMesh

> **pickedBySubMesh**: `object`[][]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L90)

This array is populated when the SPS is set as 'pickable'
Each key of this array is a submesh index.
Each element of this array is a second array defined like this :
Each key of this second array is a `faceId` value that you can get from a pickResult object.
Each element of this second array is an object `{idx: int, faceId: int}`.
`idx` is the picked particle index in the `SPS.particles` array
`faceId` is the picked face index counted within this particle.
It's better to use the method SPS.pickedParticle(pickingInfo) rather than using directly this array.
Please read : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/picking_sps

***

### pickedParticles

> **pickedParticles**: `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L78)

This array is populated when the SPS is set as 'pickable'.
Each key of this array is a `faceId` value that you can get from a pickResult object.
Each element of this array is an object `{idx: int, faceId: int}`.
`idx` is the picked particle index in the `SPS.particles` array
`faceId` is the picked face index counted within this particle.
This array is the first element of the pickedBySubMesh array : sps.pickBySubMesh[0].
It's not pertinent to use it when using a SPS with the support for MultiMaterial enabled.
Use the method SPS.pickedParticle(pickingInfo) instead.
Please read : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/picking_sps

#### faceId

> **faceId**: `number`

#### idx

> **idx**: `number`

***

### recomputeNormals

> **recomputeNormals**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L49)

Recompute normals when adding a shape

***

### updateSpeed

> **updateSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L163)

The overall motion speed (0.01 is default update speed, faster updates = faster animation)

***

### vars

> **vars**: `any` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L66)

This empty object is intended to store some SPS specific or temporary values in order to lower the Garbage Collector activity.
Please read : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/optimize_sps#limit-garbage-collection

## Accessors

### autoUpdateSubMeshes

#### Get Signature

> **get** **autoUpdateSubMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2044](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2044)

If the subMeshes must be updated on the next call to setParticles()

##### Returns

`boolean`

#### Set Signature

> **set** **autoUpdateSubMeshes**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2047](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2047)

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### computeBoundingBox

#### Get Signature

> **get** **computeBoundingBox**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1976](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1976)

Gets if `setParticles()` computes or not the mesh bounding box when computing the particle positions.

##### Returns

`boolean`

#### Set Signature

> **set** **computeBoundingBox**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1925](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1925)

Tells to `setParticles()` to compute or not the mesh bounding box when computing the particle positions.

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### computeParticleColor

#### Get Signature

> **get** **computeParticleColor**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1951](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1951)

Gets if `setParticles()` computes the particle colors or not.
Default value : true. The SPS is faster when it's set to false.
Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.

##### Returns

`boolean`

#### Set Signature

> **set** **computeParticleColor**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1907](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1907)

Tells to `setParticles()` to compute the particle colors or not.
Default value : true. The SPS is faster when it's set to false.
Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### computeParticleRotation

#### Get Signature

> **get** **computeParticleRotation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1942](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1942)

Gets if `setParticles()` computes the particle rotations or not.
Default value : true. The SPS is faster when it's set to false.
Note : the particle rotations aren't stored values, so setting `computeParticleRotation` to false will prevents the particle to rotate.

##### Returns

`boolean`

#### Set Signature

> **set** **computeParticleRotation**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1898](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1898)

Tells to `setParticles()` to compute the particle rotations or not.
Default value : true. The SPS is faster when it's set to false.
Note : the particle rotations aren't stored values, so setting `computeParticleRotation` to false will prevents the particle to rotate.

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### computeParticleTexture

#### Get Signature

> **get** **computeParticleTexture**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1960](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1960)

Gets if `setParticles()` computes the particle textures or not.
Default value : true. The SPS is faster when it's set to false.
Note : the particle textures are stored values, so setting `computeParticleTexture` to false will keep yet the last colors set.

##### Returns

`boolean`

#### Set Signature

> **set** **computeParticleTexture**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1911](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1911)

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### computeParticleVertex

#### Get Signature

> **get** **computeParticleVertex**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1969](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1969)

Gets if `setParticles()` calls the vertex function for each vertex of each particle, or not.
Default value : false. The SPS is faster when it's set to false.
Note : the particle custom vertex positions aren't stored values.

##### Returns

`boolean`

#### Set Signature

> **set** **computeParticleVertex**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1919](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1919)

Tells to `setParticles()` to call the vertex function for each vertex of each particle, or not.
Default value : false. The SPS is faster when it's set to false.
Note : the particle custom vertex positions aren't stored values.

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### depthSortParticles

#### Get Signature

> **get** **depthSortParticles**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1985](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1985)

Gets if `setParticles()` sorts or not the distance between each particle and the camera.
Skipped when `enableDepthSort` is set to `false` (default) at construction time.
Default : `true`

##### Returns

`boolean`

#### Set Signature

> **set** **depthSortParticles**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1933](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1933)

Tells to `setParticles()` to sort or not the distance between each particle and the camera.
Skipped when `enableDepthSort` is set to `false` (default) at construction time.
Default : `true`

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### expandable

#### Get Signature

> **get** **expandable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1993](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1993)

Gets if the SPS is created as expandable at construction time.
Default : `false`

##### Returns

`boolean`

***

### isAlwaysVisible

#### Get Signature

> **get** **isAlwaysVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1860](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1860)

Gets whether the SPS as always visible or not
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_visibility

##### Returns

`boolean`

#### Set Signature

> **set** **isAlwaysVisible**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1868](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1868)

Sets the SPS as always visible or not
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_visibility

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### isVisibilityBoxLocked

#### Get Signature

> **get** **isVisibilityBoxLocked**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1889](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1889)

Gets if the SPS visibility box as locked or not. This enables/disables the underlying mesh bounding box updates.
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_visibility

##### Returns

`boolean`

#### Set Signature

> **set** **isVisibilityBoxLocked**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1877](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1877)

Sets the SPS visibility box as locked or not. This enables/disables the underlying mesh bounding box updates.
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_visibility

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### materials

#### Get Signature

> **get** **materials**(): [`Material`](Material.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2011](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2011)

The SPS used material array.

##### Returns

[`Material`](Material.md)[]

***

### multimaterial

#### Get Signature

> **get** **multimaterial**(): [`MultiMaterial`](MultiMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2035](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2035)

The SPS computed multimaterial object

##### Returns

[`MultiMaterial`](MultiMaterial.md)

#### Set Signature

> **set** **multimaterial**(`mm`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2038](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2038)

##### Parameters

###### mm

[`MultiMaterial`](MultiMaterial.md)

##### Returns

`void`

***

### multimaterialEnabled

#### Get Signature

> **get** **multimaterialEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1999](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1999)

Gets if the SPS supports the Multi Materials

##### Returns

`boolean`

***

### started

#### Get Signature

> **get** **started**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2173)

Gets if the particle system is started

##### Returns

`boolean`

***

### stopped

#### Get Signature

> **get** **stopped**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2180)

Gets if the particle system is stopped

##### Returns

`boolean`

***

### useModelMaterial

#### Get Signature

> **get** **useModelMaterial**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2005](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2005)

Gets if the SPS uses the model materials for its own multimaterial.

##### Returns

`boolean`

## Methods

### addShape()

> **addShape**(`mesh`, `nb`, `options?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:813](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L813)

Adds some particles to the SPS from the model shape. Returns the shape id.
Please read the doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/immutable_sps

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

is any Mesh object that will be used as a model for the solid particles. If the mesh does not have vertex normals, it will turn on the recomputeNormals attribute.

##### nb

`number`

(positive integer) the number of particles to be created from this model

##### options?

{positionFunction} is an optional javascript function to called for each particle on SPS creation.
{vertexFunction} is an optional javascript function to called for each vertex of each particle on SPS creation
{storage} (optional existing array) is an array where the particles will be stored for a further use instead of being inserted in the SPS.

###### positionFunction?

`any`

###### storage?

\[\]

###### vertexFunction?

`any`

#### Returns

`number`

the number of shapes in the system

***

### afterUpdateParticles()

> **afterUpdateParticles**(`start?`, `stop?`, `update?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2117)

This will be called  by `setParticles()` after all the other treatments and just before the actual mesh update.
This will be passed three parameters.
This does nothing and may be overwritten by the user.

#### Parameters

##### start?

`number`

the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()

##### stop?

`number`

the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()

##### update?

`boolean`

the boolean update value actually passed to setParticles()

#### Returns

`void`

***

### beforeUpdateParticles()

> **beforeUpdateParticles**(`start?`, `stop?`, `update?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2107)

This will be called before any other treatment by `setParticles()` and will be passed three parameters.
This does nothing and may be overwritten by the user.

#### Parameters

##### start?

`number`

the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()

##### stop?

`number`

the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()

##### update?

`boolean`

the boolean update value actually passed to setParticles()

#### Returns

`void`

***

### buildMesh()

> **buildMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L255)

Builds the SPS underlying mesh. Returns a standard Mesh.
If no model shape was added to the SPS, the returned mesh is just a single triangular plane.

#### Returns

[`Mesh`](Mesh.md)

the created mesh

***

### computeSubMeshes()

> **computeSubMeshes**(): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1700](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1700)

Computes the required SubMeshes according the materials assigned to the particles.

#### Returns

`SolidParticleSystem`

the solid particle system.
Does nothing if called before the SPS mesh is built.

***

### digest()

> **digest**(`mesh`, `options?`): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L371)

Digests the mesh and generates as many solid particles in the system as wanted. Returns the SPS.
These particles will have the same geometry than the mesh parts and will be positioned at the same localisation than the mesh original places.
Thus the particles generated from `digest()` have their property `position` set yet.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

( Mesh ) is the mesh to be digested

##### options?

{facetNb} (optional integer, default 1) is the number of mesh facets per particle, this parameter is overridden by the parameter `number` if any
{delta} (optional integer, default 0) is the random extra number of facets per particle , each particle will have between `facetNb` and `facetNb + delta` facets
{number} (optional positive integer) is the wanted number of particles : each particle is built with `mesh_total_facets / number` facets
{storage} (optional existing array) is an array where the particles will be stored for a further use instead of being inserted in the SPS.
{uvKind} (optional positive integer, default 0) is the kind of UV to read from. Use -1 to deduce it from the diffuse/albedo texture (if any) of the mesh material

###### delta?

`number`

###### facetNb?

`number`

###### number?

`number`

###### storage?

\[\]

###### uvKind?

`number`

#### Returns

`SolidParticleSystem`

the current SPS

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1599](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1599)

Disposes the SPS.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getParticleById()

> **getParticleById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`SolidParticle`](SolidParticle.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1646](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1646)

Returns a SolidParticle object from its identifier : particle.id

#### Parameters

##### id

`number`

(integer) the particle Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`SolidParticle`](SolidParticle.md)\>

the searched particle or null if not found in the SPS.

***

### getParticlesByShapeId()

> **getParticlesByShapeId**(`shapeId`): [`SolidParticle`](SolidParticle.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1673](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1673)

Returns a new array populated with the particles having the passed shapeId.

#### Parameters

##### shapeId

`number`

(integer) the shape identifier

#### Returns

[`SolidParticle`](SolidParticle.md)[]

a new solid particle array

***

### getParticlesByShapeIdToRef()

> **getParticlesByShapeIdToRef**(`shapeId`, `ref`): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1685](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1685)

Populates the passed array "ref" with the particles having the passed shapeId.

#### Parameters

##### shapeId

`number`

the shape identifier

##### ref

[`SolidParticle`](SolidParticle.md)[]

array to populate

#### Returns

`SolidParticleSystem`

the SPS

***

### initParticles()

> **initParticles**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2059](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2059)

This function does nothing. It may be overwritten to set all the particle first values.
The SPS doesn't call this function, you may have to call it by your own.
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/manage_sps_particles

#### Returns

`void`

***

### insertParticlesFromArray()

> **insertParticlesFromArray**(`solidParticleArray`): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1001](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1001)

Inserts some pre-created particles in the solid particle system so that they can be managed by setParticles().

#### Parameters

##### solidParticleArray

[`SolidParticle`](SolidParticle.md)[]

an array populated with Solid Particles objects

#### Returns

`SolidParticleSystem`

the SPS

***

### pickedParticle()

> **pickedParticle**(`pickingInfo`): [`Nullable`](../type-aliases/Nullable.md)\<\{ `faceId`: `number`; `idx`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1629](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1629)

Returns an object {idx: number faceId: number} for the picked particle from the passed pickingInfo object.
idx is the particle index in the SPS
faceId is the picked face index counted within this particle.
Returns null if the pickInfo can't identify a picked particle.

#### Parameters

##### pickingInfo

[`PickingInfo`](PickingInfo.md)

(PickingInfo object)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `faceId`: `number`; `idx`: `number`; \}\>

or null

***

### rebuildMesh()

> **rebuildMesh**(`reset?`): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:912](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L912)

Rebuilds the whole mesh and updates the VBO : custom positions and vertices are recomputed if needed.

#### Parameters

##### reset?

`boolean` = `false`

boolean, default false : if the particles must be reset at position and rotation zero, scaling 1, color white, initial UVs and not parented.

#### Returns

`SolidParticleSystem`

the SPS.

***

### recycleParticle()

> **recycleParticle**(`particle`): [`SolidParticle`](SolidParticle.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2068](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2068)

This function does nothing. It may be overwritten to recycle a particle.
The SPS doesn't call this function, you may have to call it by your own.
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/manage_sps_particles

#### Parameters

##### particle

[`SolidParticle`](SolidParticle.md)

The particle to recycle

#### Returns

[`SolidParticle`](SolidParticle.md)

the recycled particle

***

### refreshVisibleSize()

> **refreshVisibleSize**(): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1838](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1838)

Visibility helper : Recomputes the visible size according to the mesh bounding box
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_visibility

#### Returns

`SolidParticleSystem`

the SPS.

***

### removeParticles()

> **removeParticles**(`start`, `end`): [`SolidParticle`](SolidParticle.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:929](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L929)

Removes the particles from the start-th to the end-th included from an expandable SPS (required).
 Returns an array with the removed particles.
 If the number of particles to remove is lower than zero or greater than the global remaining particle number, then an empty array is returned.
 The SPS can't be empty so at least one particle needs to remain in place.
 Under the hood, the VertexData array, so the VBO buffer, is recreated each call.

#### Parameters

##### start

`number`

index of the first particle to remove

##### end

`number`

index of the last particle to remove (included)

#### Returns

[`SolidParticle`](SolidParticle.md)[]

an array populated with the removed particles

***

### setMultiMaterial()

> **setMultiMaterial**(`materials`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2019](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2019)

Sets the SPS MultiMaterial from the passed materials.
Note : the passed array is internally copied and not used then by reference.

#### Parameters

##### materials

[`Material`](Material.md)[]

an array of material objects. This array indexes are the materialIndex values of the particles.

#### Returns

`void`

***

### setParticles()

> **setParticles**(`start?`, `end?`, `update?`): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1129)

Sets all the particles : this method actually really updates the mesh according to the particle positions, rotations, colors, textures, etc.
 This method calls `updateParticle()` for each particle of the SPS.
 For an animated SPS, it is usually called within the render loop.
This methods does nothing if called on a non updatable or not yet built SPS. Example : buildMesh() not called after having added or removed particles from an expandable SPS.

#### Parameters

##### start?

`number` = `0`

The particle index in the particle array where to start to compute the particle property values _(default 0)_

##### end?

`number` = `...`

The particle index in the particle array where to stop to compute the particle property values _(default nbParticle - 1)_

##### update?

`boolean` = `true`

If the mesh must be finally updated on this call after all the particle computations _(default true)_

#### Returns

`SolidParticleSystem`

the SPS.

***

### setVisibilityBox()

> **setVisibilityBox**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:1851](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L1851)

Visibility helper : Sets the size of a visibility box, this sets the underlying mesh bounding box.

#### Parameters

##### size

`number`

the size (float) of the visibility box
note : this doesn't lock the SPS mesh bounding box.
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_visibility

#### Returns

`void`

***

### start()

> **start**(`delay?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2124)

Starts the particle system and begins to emit.
This will call buildMesh(), initParticles(), setParticles() and register the update loop.

#### Parameters

##### delay?

`number` = `0`

defines the delay in milliseconds before starting the system (0 by default)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2156)

Stops the particle system.

#### Returns

`void`

***

### updateParticle()

> **updateParticle**(`particle`): [`SolidParticle`](SolidParticle.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2080](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2080)

Updates a particle : this function should  be overwritten by the user.
It is called on each particle by `setParticles()`. This is the place to code each particle behavior.
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/manage_sps_particles

#### Parameters

##### particle

[`SolidParticle`](SolidParticle.md)

The particle to update

#### Returns

[`SolidParticle`](SolidParticle.md)

the updated particle

#### Example

```ts
: just set a particle position or velocity and recycle conditions
```

***

### updateParticleVertex()

> **updateParticleVertex**(`particle`, `vertex`, `pt`): `SolidParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/solidParticleSystem.ts:2095](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/solidParticleSystem.ts#L2095)

Updates a vertex of a particle : it can be overwritten by the user.
This will be called on each vertex particle by `setParticles()` if `computeParticleVertex` is set to true only.

#### Parameters

##### particle

[`SolidParticle`](SolidParticle.md)

the current particle

##### vertex

[`SolidParticleVertex`](SolidParticleVertex.md)

the current vertex of the current particle : a SolidParticleVertex object

##### pt

`number`

the index of the current vertex in the particle shape
doc : https://doc.babylonjs.com/features/featuresDeepDive/particles/solid_particle_system/sps_vertices

#### Returns

`SolidParticleSystem`

the sps

#### Example

```ts
: just set a vertex particle position or color
```
