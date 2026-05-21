[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / QuadraticErrorSimplification

# Class: QuadraticErrorSimplification

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L336)

An implementation of the Quadratic Error simplification algorithm.
Original paper : http://www1.cs.columbia.edu/~cs4162/html05s/garland97.pdf
Ported mostly from QSlim and http://voxels.blogspot.de/2014/05/quadric-mesh-simplification-with-source.html to babylon JS

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

## Implements

- [`ISimplifier`](../interfaces/ISimplifier.md)

## Constructors

### Constructor

> **new QuadraticErrorSimplification**(`_mesh`): `QuadraticErrorSimplification`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L359)

Creates a new QuadraticErrorSimplification

#### Parameters

##### \_mesh

[`Mesh`](Mesh.md)

defines the target mesh

#### Returns

`QuadraticErrorSimplification`

## Properties

### aggressiveness

> **aggressiveness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:347](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L347)

Gets or sets the aggressiveness of the simplifier

***

### boundingBoxEpsilon

> **boundingBoxEpsilon**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L353)

Gets or sets the espilon to use for bounding box computation

***

### decimationIterations

> **decimationIterations**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L350)

Gets or sets the number of allowed iterations for decimation

***

### syncIterations

> **syncIterations**: `number` = `5000`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L344)

Gets or sets the number pf sync iterations

## Methods

### simplify()

> **simplify**(`settings`, `successCallback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L371)

Simplification of a given mesh according to the given settings.
Since this requires computation, it is assumed that the function runs async.

#### Parameters

##### settings

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md)

The settings of the simplification, including quality and distance

##### successCallback

(`simplifiedMesh`) => `void`

A callback that will be called after the mesh was simplified.

#### Returns

`void`

#### Implementation of

[`ISimplifier`](../interfaces/ISimplifier.md).[`simplify`](../interfaces/ISimplifier.md#simplify)
