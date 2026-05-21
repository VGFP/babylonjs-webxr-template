[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateDiscVertexData

# Function: CreateDiscVertexData()

> **CreateDiscVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/discBuilder.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/discBuilder.ts#L19)

Creates the VertexData of the Disc or regular Polygon

## Parameters

### options

an object used to set the following optional parameters for the disc, required but can be empty
* radius the radius of the disc, optional default 0.5
* tessellation the number of polygon sides, optional, default 64
* arc a number from 0 to 1, to create an unclosed polygon based on the fraction of the circumference given by the arc value, optional, default 1
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### arc?

`number`

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### radius?

`number`

#### sideOrientation?

`number`

#### tessellation?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the box
