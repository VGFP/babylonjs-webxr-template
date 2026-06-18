[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateSphereVertexData

# Function: CreateSphereVertexData()

> **CreateSphereVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/sphereBuilder.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/sphereBuilder.pure.ts#L26)

Creates the VertexData for an ellipsoid, defaults to a sphere

## Parameters

### options

an object used to set the following optional parameters for the box, required but can be empty
* segments sets the number of horizontal strips optional, default 32
* diameter sets the axes dimensions, diameterX, diameterY and diameterZ to the value of diameter, optional default 1
* diameterX sets the diameterX (x direction) of the ellipsoid, overwrites the diameterX set by diameter, optional, default diameter
* diameterY sets the diameterY (y direction) of the ellipsoid, overwrites the diameterY set by diameter, optional, default diameter
* diameterZ sets the diameterZ (z direction) of the ellipsoid, overwrites the diameterZ set by diameter, optional, default diameter
* arc a number from 0 to 1, to create an unclosed ellipsoid based on the fraction of the circumference (latitude) given by the arc value, optional, default 1
* slice a number from 0 to 1, to create an unclosed ellipsoid based on the fraction of the height (latitude) given by the arc value, optional, default 1
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### arc?

`number`

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### dedupTopBottomIndices?

`boolean`

#### diameter?

`number`

#### diameterX?

`number`

#### diameterY?

`number`

#### diameterZ?

`number`

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### segments?

`number`

#### sideOrientation?

`number`

#### slice?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the ellipsoid
