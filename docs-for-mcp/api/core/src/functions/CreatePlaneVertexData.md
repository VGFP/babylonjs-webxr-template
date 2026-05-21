[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreatePlaneVertexData

# Function: CreatePlaneVertexData()

> **CreatePlaneVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/planeBuilder.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/planeBuilder.ts#L20)

Creates the VertexData for a Plane

## Parameters

### options

an object used to set the following optional parameters for the plane, required but can be empty
* size sets the width and height of the plane to the value of size, optional default 1
* width sets the width (x direction) of the plane, overwrites the width set by size, optional, default size
* height sets the height (y direction) of the plane, overwrites the height set by size, optional, default size
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### height?

`number`

#### sideOrientation?

`number`

#### size?

`number`

#### width?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the box
