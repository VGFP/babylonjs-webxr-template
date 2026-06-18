[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateCylinderVertexData

# Function: CreateCylinderVertexData()

> **CreateCylinderVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/cylinderBuilder.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/cylinderBuilder.pure.ts#L31)

Creates the VertexData for a cylinder, cone or prism

## Parameters

### options

an object used to set the following optional parameters for the box, required but can be empty
* height sets the height (y direction) of the cylinder, optional, default 2
* diameterTop sets the diameter of the top of the cone, overwrites diameter,  optional, default diameter
* diameterBottom sets the diameter of the bottom of the cone, overwrites diameter,  optional, default diameter
* diameter sets the diameter of the top and bottom of the cone, optional default 1
* tessellation the number of prism sides, 3 for a triangular prism, optional, default 24
* `subdivisions` the number of rings along the cylinder height, optional, default 1
* arc a number from 0 to 1, to create an unclosed cylinder based on the fraction of the circumference given by the arc value, optional, default 1
* faceColors an array of Color3 elements used to set different colors to the top, rings and bottom respectively
* faceUV an array of Vector4 elements used to set different images to the top, rings and bottom respectively
* hasRings when true makes each subdivision independently treated as a face for faceUV and faceColors, optional, default false
* enclose when true closes an open cylinder by adding extra flat faces between the height axis and vertical edges, think cut cake
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### arc?

`number`

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### cap?

`number`

#### diameter?

`number`

#### diameterBottom?

`number`

#### diameterTop?

`number`

#### enclose?

`boolean`

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### hasRings?

`boolean`

#### height?

`number`

#### sideOrientation?

`number`

#### subdivisions?

`number`

#### tessellation?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the cylinder, cone or prism
