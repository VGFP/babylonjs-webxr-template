[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateSegmentedBoxVertexData

# Function: CreateSegmentedBoxVertexData()

> **CreateSegmentedBoxVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/boxBuilder.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/boxBuilder.pure.ts#L162)

Creates the VertexData for a segmented box

## Parameters

### options

an object used to set the following optional parameters for the box, required but can be empty
* size sets the width, height and depth of the box to the value of size, optional default 1
* width sets the width (x direction) of the box, overwrites the width set by size, optional, default size
* height sets the height (y direction) of the box, overwrites the height set by size, optional, default size
* depth sets the depth (z direction) of the box, overwrites the depth set by size, optional, default size
* segments sets the number of segments on the all axis (1 by default)
* widthSegments sets the number of segments on the x axis (1 by default)
* heightSegments sets the number of segments on the y axis (1 by default)
* depthSegments sets the number of segments on the z axis (1 by default)

#### depth?

`number`

#### depthSegments?

`number`

#### height?

`number`

#### heightSegments?

`number`

#### segments?

`number`

#### size?

`number`

#### width?

`number`

#### widthSegments?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the box
