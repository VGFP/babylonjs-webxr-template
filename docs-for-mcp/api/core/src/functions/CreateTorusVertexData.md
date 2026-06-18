[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTorusVertexData

# Function: CreateTorusVertexData()

> **CreateTorusVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/torusBuilder.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/torusBuilder.pure.ts#L21)

Creates the VertexData for a torus

## Parameters

### options

an object used to set the following optional parameters for the box, required but can be empty
* diameter the diameter of the torus, optional default 1
* thickness the diameter of the tube forming the torus, optional default 0.5
* tessellation the number of prism sides, 3 for a triangular prism, optional, default 24
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### diameter?

`number`

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### sideOrientation?

`number`

#### tessellation?

`number`

#### thickness?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the torus
