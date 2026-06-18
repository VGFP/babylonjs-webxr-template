[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateGeodesic

# Function: CreateGeodesic()

> **CreateGeodesic**(`name`, `options`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/geodesicBuilder.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/geodesicBuilder.ts#L32)

Creates the Mesh for a Geodesic Polyhedron

## Parameters

### name

`string`

defines the name of the mesh

### options

an object used to set the following optional parameters for the polyhedron, required but can be empty
* m number of horizontal steps along an isogrid
* n number of angled steps along an isogrid
* size the size of the Geodesic, optional default 1
* sizeX allows stretching in the x direction, optional, default size
* sizeY allows stretching in the y direction, optional, default size
* sizeZ allows stretching in the z direction, optional, default size
* faceUV an array of Vector4 elements used to set different images to the top, rings and bottom respectively
* faceColors an array of Color3 elements used to set different colors to the top, rings and bottom respectively
* flat when true creates a flat shaded mesh, optional, default true
* subdivisions increasing the subdivisions increases the number of faces, optional, default 4
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

#### flat?

`boolean`

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### m?

`number`

#### n?

`number`

#### sideOrientation?

`number`

#### size?

`number`

#### sizeX?

`number`

#### sizeY?

`number`

#### sizeZ?

`number`

#### updatable?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`Mesh`](../classes/Mesh.md)

Geodesic mesh

## See

 - https://en.wikipedia.org/wiki/Geodesic_polyhedron
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/geodesic_poly
