[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateRibbonVertexData

# Function: CreateRibbonVertexData()

> **CreateRibbonVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/ribbonBuilder.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/ribbonBuilder.ts#L25)

Creates the VertexData for a Ribbon

## Parameters

### options

an object used to set the following optional parameters for the ribbon, required but can be empty
* pathArray array of paths, each of which an array of successive Vector3
* closeArray creates a seam between the first and the last paths of the pathArray, optional, default false
* closePath creates a seam between the first and the last points of each path of the path array, optional, default false
* offset a positive integer, only used when pathArray contains a single path (offset = 10 means the point 1 is joined to the point 11), default rounded half size of the pathArray length
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)
* invertUV swaps in the U and V coordinates when applying a texture, optional, default false
* uvs a linear array, of length 2 * number of vertices, of custom UV values, optional
* colors a linear array, of length 4 * number of vertices, of custom color values, optional

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### closeArray?

`boolean`

#### closePath?

`boolean`

#### colors?

[`Color4`](../classes/Color4.md)[]

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### invertUV?

`boolean`

#### offset?

`number`

#### pathArray

[`Vector3`](../classes/Vector3.md)[][]

#### sideOrientation?

`number`

#### uvs?

[`Vector2`](../classes/Vector2.md)[]

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the ribbon
