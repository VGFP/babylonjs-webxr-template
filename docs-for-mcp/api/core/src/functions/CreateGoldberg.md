[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateGoldberg

# Function: CreateGoldberg()

> **CreateGoldberg**(`name`, `options`, `scene?`): [`GoldbergMesh`](../classes/GoldbergMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/goldbergBuilder.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/goldbergBuilder.ts#L127)

Creates the Mesh for a Goldberg Polyhedron which is made from 12 pentagonal and the rest hexagonal faces

## Parameters

### name

`string`

defines the name of the mesh

### options

[`GoldbergCreationOption`](../type-aliases/GoldbergCreationOption.md)

an object used to set the following optional parameters for the polyhedron, required but can be empty

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`GoldbergMesh`](../classes/GoldbergMesh.md)

Goldberg mesh

## See

 - https://en.wikipedia.org/wiki/Goldberg_polyhedron
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/goldberg_poly
