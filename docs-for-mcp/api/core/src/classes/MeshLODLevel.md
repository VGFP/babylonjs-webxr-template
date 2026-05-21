[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshLODLevel

# Class: MeshLODLevel

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshLODLevel.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshLODLevel.ts#L8)

Class used to represent a specific level of detail of a mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

## Constructors

### Constructor

> **new MeshLODLevel**(`distanceOrScreenCoverage`, `mesh`): `MeshLODLevel`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshLODLevel.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshLODLevel.ts#L14)

Creates a new LOD level

#### Parameters

##### distanceOrScreenCoverage

`number`

defines either the distance or the screen coverage where this level should start being displayed

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

defines the mesh to use to render this level

#### Returns

`MeshLODLevel`

## Properties

### distanceOrScreenCoverage

> **distanceOrScreenCoverage**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshLODLevel.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshLODLevel.ts#L16)

Either distance from the center of the object to show this level or the screen coverage if `useLODScreenCoverage` is set to `true` on the mesh

***

### mesh

> **mesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshLODLevel.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshLODLevel.ts#L18)

Defines the mesh to use to render this level
