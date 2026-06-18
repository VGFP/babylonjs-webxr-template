[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTiledGroundVertexData

# Function: CreateTiledGroundVertexData()

> **CreateTiledGroundVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts#L89)

Creates the VertexData for a TiledGround by subdividing the ground into tiles

## Parameters

### options

an object used to set the following optional parameters for the Ground
- `xmin` ground minimum X coordinate, default -1
- `zmin` ground minimum Z coordinate, default -1
- `xmax` ground maximum X coordinate, default 1
- `zmax` ground maximum Z coordinate, default 1
- `subdivisions` a javascript object `\{w: positive integer, h: positive integer\}`, `w` and `h` are the numbers of subdivisions on the ground width and height creating 'tiles', default `\{w: 6, h: 6\}`
- `precision` a javascript object `\{w: positive integer, h: positive integer\}`, `w` and `h` are the numbers of subdivisions on the tile width and height, default `\{w: 2, h: 2\}`

#### precision?

\{ `h`: `number`; `w`: `number`; \}

#### precision.h

`number`

#### precision.w

`number`

#### subdivisions?

\{ `h`: `number`; `w`: `number`; \}

#### subdivisions.h

`number`

#### subdivisions.w

`number`

#### xmax

`number`

#### xmin

`number`

#### zmax

`number`

#### zmin

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the TiledGround
