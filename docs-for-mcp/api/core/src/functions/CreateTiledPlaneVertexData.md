[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTiledPlaneVertexData

# Function: CreateTiledPlaneVertexData()

> **CreateTiledPlaneVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/tiledPlaneBuilder.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/tiledPlaneBuilder.ts#L25)

Creates the VertexData for a tiled plane

## Parameters

### options

an object used to set the following optional parameters for the tiled plane, required but can be empty
* pattern a limited pattern arrangement depending on the number
* size of the box
* width of the box, overwrites size
* height of the box, overwrites size
* tileSize sets the width, height and depth of the tile to the value of size, optional default 1
* tileWidth sets the width (x direction) of the tile, overwrites the width set by size, optional, default size
* tileHeight sets the height (y direction) of the tile, overwrites the height set by size, optional, default size
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* alignHorizontal places whole tiles aligned to the center, left or right of a row
* alignVertical places whole tiles aligned to the center, left or right of a column
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### alignHorizontal?

`number`

#### alignVertical?

`number`

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### height?

`number`

#### pattern?

`number`

#### sideOrientation?

`number`

#### size?

`number`

#### tileHeight?

`number`

#### tileSize?

`number`

#### tileWidth?

`number`

#### width?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the tiled plane

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/tiled_plane
