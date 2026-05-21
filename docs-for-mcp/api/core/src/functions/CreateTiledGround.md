[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTiledGround

# Function: CreateTiledGround()

> **CreateTiledGround**(`name`, `options`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/groundBuilder.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/groundBuilder.ts#L360)

Creates a tiled ground mesh

## Parameters

### name

`string`

defines the name of the mesh

### options

defines the options used to create the mesh
- `xmin` ground minimum X coordinate (float, default -1)
- `zmin` ground minimum Z coordinate (float, default -1)
- `xmax` ground maximum X coordinate (float, default 1)
- `zmax` ground maximum Z coordinate (float, default 1)
- `subdivisions` a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
- `subdivisions.w` positive integer, default 6
- `subdivisions.h` positive integer, default 6
- `precision` a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
- `precision.w` positive integer, default 2
- `precision.h` positive integer, default 2
- `updatable` boolean, default false, true if the mesh must be flagged as updatable

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

#### updatable?

`boolean`

#### xmax

`number`

#### xmin

`number`

#### zmax

`number`

#### zmin

`number`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`Mesh`](../classes/Mesh.md)

the tiled ground mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#tiled-ground
