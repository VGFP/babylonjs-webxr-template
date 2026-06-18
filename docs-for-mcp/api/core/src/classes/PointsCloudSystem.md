[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointsCloudSystem

# Class: PointsCloudSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L39)

The PointCloudSystem (PCS) is a single updatable mesh. The points corresponding to the vertices of this big mesh.
As it is just a mesh, the PointCloudSystem has all the same properties as any other BJS mesh : not more, not less. It can be scaled, rotated, translated, enlighted, textured, moved, etc.

The PointCloudSystem is also a particle system, with each point being a particle. It provides some methods to manage the particles.
However it is behavior agnostic. This means it has no emitter, no particle physics, no particle recycler. You have to implement your own behavior.

Full documentation here : TO BE ENTERED

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new PointsCloudSystem**(`name`, `pointSize`, `scene`, `options?`): `PointsCloudSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L122)

Creates a PCS (Points Cloud System) object

#### Parameters

##### name

`string`

(String) is the PCS name, this will be the underlying mesh name

##### pointSize

`number`

(number) is the size for each point. Has no effect on a WebGPU engine.

##### scene

[`Scene`](Scene.md)

(Scene) is the scene in which the PCS is added

##### options?

defines the options of the PCS e.g.
* updatable (optional boolean, default true) : if the PCS must be updatable or immutable

###### updatable?

`boolean`

#### Returns

`PointsCloudSystem`

## Properties

### counter

> **counter**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L52)

This a counter for your own usage. It's not set by any SPS functions.

***

### mesh?

> `optional` **mesh?**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L60)

The PCS mesh. It's a standard BJS Mesh, so all the methods from the Mesh class are available.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L56)

The PCS name. This name is also given to the underlying mesh.

***

### nbParticles

> **nbParticles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L48)

The PCS total number of particles. Read only. Use PCS.counter instead if you need to set your own value.

***

### particles

> **particles**: [`CloudPoint`](CloudPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L44)

The PCS array of cloud point objects. Just access each particle as with any classic array.
 Example : var p = SPS.particles[i];

***

### vars

> **vars**: `any` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L65)

This empty object is intended to store some PCS specific or temporary values in order to lower the Garbage Collector activity.
Please read :

## Accessors

### colors

#### Get Signature

> **get** **colors**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L103)

Gets the particle colors computed by the Point Cloud System

##### Returns

`Float32Array`

***

### computeBoundingBox

#### Get Signature

> **get** **computeBoundingBox**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1045](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1045)

Gets if `setParticles()` computes or not the mesh bounding box when computing the particle positions.

##### Returns

`boolean`

#### Set Signature

> **set** **computeBoundingBox**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1039](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1039)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1025)

Gets if `setParticles()` computes the particle colors or not.
Default value : false. The PCS is faster when it's set to false.
Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.

##### Returns

`boolean`

#### Set Signature

> **set** **computeParticleColor**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1013](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1013)

Tells to `setParticles()` to compute the particle colors or not.
Default value : true. The PCS is faster when it's set to false.
Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### computeParticleRotation

#### Set Signature

> **set** **computeParticleRotation**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1004](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1004)

Tells to `setParticles()` to compute the particle rotations or not
Default value : false. The PCS is faster when it's set to false
Note : particle rotations are only applied to parent particles
Note : the particle rotations aren't stored values, so setting `computeParticleRotation` to false will prevents the particle to rotate

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### computeParticleTexture

#### Get Signature

> **get** **computeParticleTexture**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1033)

Gets if `setParticles()` computes the particle textures or not.
Default value : false. The PCS is faster when it's set to false.
Note : the particle textures are stored values, so setting `computeParticleTexture` to false will keep yet the last colors set.

##### Returns

`boolean`

#### Set Signature

> **set** **computeParticleTexture**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1017](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1017)

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### isAlwaysVisible

#### Get Signature

> **get** **isAlwaysVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:981](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L981)

Gets whether the PCS is always visible or not
doc :

##### Returns

`boolean`

#### Set Signature

> **set** **isAlwaysVisible**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:989](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L989)

Sets the PCS as always visible or not
doc :

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### positions

#### Get Signature

> **get** **positions**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L96)

Gets the particle positions computed by the Point Cloud System

##### Returns

`Float32Array`

***

### uvs

#### Get Signature

> **get** **uvs**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L110)

Gets the particle uvs computed by the Point Cloud System

##### Returns

`Float32Array`

## Methods

### addPoints()

> **addPoints**(`nb`, `pointFunction?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:618](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L618)

Adds points to the PCS in random positions within a unit sphere

#### Parameters

##### nb

`number`

(positive integer) the number of particles to be created from this model

##### pointFunction?

`any` = `...`

is an optional javascript function to be called for each particle on PCS creation

#### Returns

`number`

the number of groups in the system

***

### addSurfacePoints()

> **addSurfacePoints**(`mesh`, `nb`, `colorWith?`, `color?`, `range?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:652](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L652)

Adds points to the PCS from the surface of the model shape

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

is any Mesh object that will be used as a surface model for the points

##### nb

`number`

(positive integer) the number of particles to be created from this model

##### colorWith?

`number`

determines whether a point is colored using color (default), uv, random, stated or none (invisible)

##### color?

`number` \| [`Color4`](Color4.md)

(color4) to be used when colorWith is stated or color (number) when used to specify texture position

##### range?

`number`

(number from 0 to 1) to determine the variation in shape and tone for a stated color

#### Returns

`number`

the number of groups in the system

***

### addVolumePoints()

> **addVolumePoints**(`mesh`, `nb`, `colorWith?`, `color?`, `range?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:698](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L698)

Adds points to the PCS inside the model shape

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

is any Mesh object that will be used as a surface model for the points

##### nb

`number`

(positive integer) the number of particles to be created from this model

##### colorWith?

`number`

determines whether a point is colored using color (default), uv, random, stated or none (invisible)

##### color?

`number` \| [`Color4`](Color4.md)

(color4) to be used when colorWith is stated or color (number) when used to specify texture position

##### range?

`number`

(number from 0 to 1) to determine the variation in shape and tone for a stated color

#### Returns

`number`

the number of groups in the system

***

### afterUpdateParticles()

> **afterUpdateParticles**(`start?`, `stop?`, `update?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1101)

This will be called  by `setParticles()` after all the other treatments and just before the actual mesh update.
This will be passed three parameters.
This does nothing and may be overwritten by the user.

#### Parameters

##### start?

`number`

the particle index in the particle array where to start to iterate, same than the value passed to setParticle()

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1091](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1091)

This will be called before any other treatment by `setParticles()` and will be passed three parameters.
This does nothing and may be overwritten by the user.

#### Parameters

##### start?

`number`

the particle index in the particle array where to start to iterate, same than the value passed to setParticle()

##### stop?

`number`

the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()

##### update?

`boolean`

the boolean update value actually passed to setParticles()

#### Returns

`void`

***

### buildMeshAsync()

> **buildMeshAsync**(`material?`): `Promise`\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L139)

Builds the PCS underlying mesh. Returns a standard Mesh.
If no points were added to the PCS, the returned mesh is just a single point.

#### Parameters

##### material?

[`Material`](Material.md)

The material to use to render the mesh. If not provided, will create a default one

#### Returns

`Promise`\<[`Mesh`](Mesh.md)\>

a promise for the created mesh

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:935](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L935)

Disposes the PCS.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### initParticles()

> **initParticles**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1058](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1058)

This function does nothing. It may be overwritten to set all the particle first values.
The PCS doesn't call this function, you may have to call it by your own.
doc :

#### Returns

`void`

***

### recycleParticle()

> **recycleParticle**(`particle`): [`CloudPoint`](CloudPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1067](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1067)

This function does nothing. It may be overwritten to recycle a particle
The PCS doesn't call this function, you can to call it
doc :

#### Parameters

##### particle

[`CloudPoint`](CloudPoint.md)

The particle to recycle

#### Returns

[`CloudPoint`](CloudPoint.md)

the recycled particle

***

### refreshVisibleSize()

> **refreshVisibleSize**(): `PointsCloudSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L955)

Visibility helper : Recomputes the visible size according to the mesh bounding box
doc :

#### Returns

`PointsCloudSystem`

the PCS.

***

### setParticles()

> **setParticles**(`start?`, `end?`, `update?`): `PointsCloudSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:744](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L744)

Sets all the particles : this method actually really updates the mesh according to the particle positions, rotations, colors, textures, etc.
 This method calls `updateParticle()` for each particle of the SPS.
 For an animated SPS, it is usually called within the render loop.

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

`PointsCloudSystem`

the PCS.

***

### setVisibilityBox()

> **setVisibilityBox**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:968](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L968)

Visibility helper : Sets the size of a visibility box, this sets the underlying mesh bounding box.

#### Parameters

##### size

`number`

the size (float) of the visibility box
note : this doesn't lock the PCS mesh bounding box.
doc :

#### Returns

`void`

***

### updateParticle()

> **updateParticle**(`particle`): [`CloudPoint`](CloudPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/pointsCloudSystem.ts:1079](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/pointsCloudSystem.ts#L1079)

Updates a particle : this function should  be overwritten by the user.
It is called on each particle by `setParticles()`. This is the place to code each particle behavior.
doc :

#### Parameters

##### particle

[`CloudPoint`](CloudPoint.md)

The particle to update

#### Returns

[`CloudPoint`](CloudPoint.md)

the updated particle

#### Example

```ts
: just set a particle position or velocity and recycle conditions
```
