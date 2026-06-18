[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreatePolyhedronVertexData

# Function: CreatePolyhedronVertexData()

> **CreatePolyhedronVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/polyhedronBuilder.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/polyhedronBuilder.pure.ts#L32)

Creates the VertexData for a Polyhedron

## Parameters

### options

an object used to set the following optional parameters for the polyhedron, required but can be empty
* type provided types are:
 * 0 : Tetrahedron, 1 : Octahedron, 2 : Dodecahedron, 3 : Icosahedron, 4 : Rhombicuboctahedron, 5 : Triangular Prism, 6 : Pentagonal Prism, 7 : Hexagonal Prism, 8 : Square Pyramid (J1)
 * 9 : Pentagonal Pyramid (J2), 10 : Triangular Dipyramid (J12), 11 : Pentagonal Dipyramid (J13), 12 : Elongated Square Dipyramid (J15), 13 : Elongated Pentagonal Dipyramid (J16), 14 : Elongated Pentagonal Cupola (J20)
* size the size of the IcoSphere, optional default 1
* sizeX allows stretching in the x direction, optional, default size
* sizeY allows stretching in the y direction, optional, default size
* sizeZ allows stretching in the z direction, optional, default size
* custom a number that overwrites the type to create from an extended set of polyhedron from https://www.babylonjs-playground.com/#21QRSK#15 with minimised editor
* faceUV an array of Vector4 elements used to set different images to the top, rings and bottom respectively
* faceColors an array of Color3 elements used to set different colors to the top, rings and bottom respectively
* flat when true creates a flat shaded mesh, optional, default true
* subdivisions increasing the subdivisions increases the number of faces, optional, default 4
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### custom?

`any`

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

#### flat?

`boolean`

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

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

#### type?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the Polyhedron
