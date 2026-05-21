[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTiledBoxVertexData

# Function: CreateTiledBoxVertexData()

> **CreateTiledBoxVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/tiledBoxBuilder.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/tiledBoxBuilder.ts#L32)

Creates the VertexData for a tiled box

## Parameters

### options

an object used to set the following optional parameters for the tiled box, required but can be empty
* pattern sets the rotation or reflection pattern for the tiles,
* size of the box
* width of the box, overwrites size
* height of the box, overwrites size
* depth of the box, overwrites size
* tileSize sets the size of a tile
* tileWidth sets the tile width and overwrites tileSize
* tileHeight sets the tile width and overwrites tileSize
* faceUV an array of 6 Vector4 elements used to set different images to each box side
* faceColors an array of 6 Color4 elements used to set different colors to each box side
* alignHorizontal places whole tiles aligned to the center, left or right of a row
* alignVertical places whole tiles aligned to the center, left or right of a column
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE

#### alignHorizontal?

`number`

#### alignVertical?

`number`

#### depth?

`number`

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

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

the VertexData of the TiledBox

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/tiled_box
