[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateIcoSphereVertexData

# Function: CreateIcoSphereVertexData()

> **CreateIcoSphereVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/icoSphereBuilder.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/icoSphereBuilder.ts#L22)

Creates the VertexData of the IcoSphere

## Parameters

### options

an object used to set the following optional parameters for the IcoSphere, required but can be empty
* radius the radius of the IcoSphere, optional default 1
* radiusX allows stretching in the x direction, optional, default radius
* radiusY allows stretching in the y direction, optional, default radius
* radiusZ allows stretching in the z direction, optional, default radius
* flat when true creates a flat shaded mesh, optional, default true
* subdivisions increasing the subdivisions increases the number of faces, optional, default 4
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### flat?

`boolean`

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### radius?

`number`

#### radiusX?

`number`

#### radiusY?

`number`

#### radiusZ?

`number`

#### sideOrientation?

`number`

#### subdivisions?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the IcoSphere
