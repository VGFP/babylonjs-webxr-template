[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreatePolygonVertexData

# Function: CreatePolygonVertexData()

> **CreatePolygonVertexData**(`polygon`, `sideOrientation`, `fUV?`, `fColors?`, `frontUVs?`, `backUVs?`, `wrp?`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/polygonBuilder.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/polygonBuilder.ts#L27)

Creates the VertexData for an irregular Polygon in the XoZ plane using a mesh built by polygonTriangulation.build()
All parameters are provided by CreatePolygon as needed

## Parameters

### polygon

[`Mesh`](../classes/Mesh.md)

a mesh built from polygonTriangulation.build()

### sideOrientation

`number`

takes the values Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE

### fUV?

[`Vector4`](../classes/Vector4.md)[]

an array of Vector4 elements used to set different images to the top, rings and bottom respectively

### fColors?

[`Color4`](../classes/Color4.md)[]

an array of Color3 elements used to set different colors to the top, rings and bottom respectively

### frontUVs?

[`Vector4`](../classes/Vector4.md)

only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)

### backUVs?

[`Vector4`](../classes/Vector4.md)

only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

### wrp?

`boolean`

a boolean, default false, when true and fUVs used texture is wrapped around all sides, when false texture is applied side

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the Polygon
