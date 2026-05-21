[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GroundBuilder

# ~~Variable: GroundBuilder~~

> `const` **GroundBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/groundBuilder.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/groundBuilder.ts#L510)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreateGround~~

> **CreateGround**: (`name`, `options`, `scene?`) => [`GroundMesh`](../classes/GroundMesh.md)

Creates a ground mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh
- `width` set the width size (float, default 1)
- `height` set the height size (float, default 1)
- `subdivisions` sets the number of subdivision per side (default 1)
- `subdivisionsX` sets the number of subdivision on the X axis (overrides subdivisions)
- `subdivisionsY` sets the number of subdivision on the Y axis (overrides subdivisions)
- `updatable` defines if the mesh must be flagged as updatable (default false)

###### height?

`number`

###### subdivisions?

`number`

###### subdivisionsX?

`number`

###### subdivisionsY?

`number`

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`GroundMesh`](../classes/GroundMesh.md)

the ground mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground

### ~~CreateGroundFromHeightMap~~

> **CreateGroundFromHeightMap**: (`name`, `url`, `options`, `scene`) => [`GroundMesh`](../classes/GroundMesh.md)

Creates a ground mesh from a height map. The height map download can take some frames,
so the mesh is not immediately ready. To wait for the mesh to be completely built,
you should use the `onReady` callback option.

#### Parameters

##### name

`string`

defines the name of the mesh

##### url

`string` \| \{ `data`: `Uint8Array`; `height`: `number`; `width`: `number`; \}

sets the URL of the height map image resource.

##### options?

defines the options used to create the mesh
- `width` sets the ground width size (positive float, default 10)
- `height` sets the ground height size (positive float, default 10)
- `subdivisions` sets the number of subdivision per side (positive integer, default 1)
- `minHeight` is the minimum altitude on the ground (float, default 0)
- `maxHeight` is the maximum altitude on the ground (float, default 1)
- `colorFilter` is the filter to apply to the image pixel colors to compute the height (optional Color3, default (0.3, 0.59, 0.11) )
- `alphaFilter` will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
- `updatable` defines if the mesh must be flagged as updatable
- `onReady` is a javascript callback function that will be called once the mesh is just built (the height map download can last some time)
- `onError` is a javascript callback function that will be called if there is an error
- `passHeightBufferInCallback` a boolean that indicates if the calculated height data will be passed in the onReady callback. Useful if you need the height data for physics, for example.

###### alphaFilter?

`number`

###### colorFilter?

[`Color3`](../classes/Color3.md)

###### height?

`number`

###### maxHeight?

`number`

###### minHeight?

`number`

###### onError?

(`message?`, `exception?`) => `void`

###### onReady?

(`mesh`, `heightBuffer?`) => `void`

###### passHeightBufferInCallback?

`boolean`

###### subdivisions?

`number`

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`GroundMesh`](../classes/GroundMesh.md)

the ground mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/height_map
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground-from-a-height-map

### ~~CreateTiledGround~~

> **CreateTiledGround**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a tiled ground mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

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

###### precision?

\{ `h`: `number`; `w`: `number`; \}

###### precision.h

`number`

###### precision.w

`number`

###### subdivisions?

\{ `h`: `number`; `w`: `number`; \}

###### subdivisions.h

`number`

###### subdivisions.w

`number`

###### updatable?

`boolean`

###### xmax

`number`

###### xmin

`number`

###### zmax

`number`

###### zmin

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the tiled ground mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#tiled-ground

## Deprecated

use the functions directly from the module
