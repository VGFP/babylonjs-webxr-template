[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTorusKnotVertexData

# Function: CreateTorusKnotVertexData()

> **CreateTorusKnotVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/torusKnotBuilder.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/torusKnotBuilder.ts#L22)

Creates the VertexData for a TorusKnot

## Parameters

### options

an object used to set the following optional parameters for the TorusKnot, required but can be empty
* radius the radius of the torus knot, optional, default 2
* tube the thickness of the tube, optional, default 0.5
* radialSegments the number of sides on each tube segments, optional, default 32
* tubularSegments the number of tubes to decompose the knot into, optional, default 32
* p the number of windings around the z axis, optional,  default 2
* q the number of windings around the x axis, optional,  default 3
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### p?

`number`

#### q?

`number`

#### radialSegments?

`number`

#### radius?

`number`

#### sideOrientation?

`number`

#### tube?

`number`

#### tubularSegments?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the Torus Knot
