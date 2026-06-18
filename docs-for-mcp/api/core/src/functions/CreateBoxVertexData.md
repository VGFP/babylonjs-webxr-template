[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateBoxVertexData

# Function: CreateBoxVertexData()

> **CreateBoxVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/boxBuilder.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/boxBuilder.pure.ts#L26)

Creates the VertexData for a box

## Parameters

### options

an object used to set the following optional parameters for the box, required but can be empty
* size sets the width, height and depth of the box to the value of size, optional default 1
* width sets the width (x direction) of the box, overwrites the width set by size, optional, default size
* height sets the height (y direction) of the box, overwrites the height set by size, optional, default size
* depth sets the depth (z direction) of the box, overwrites the depth set by size, optional, default size
* faceUV an array of 6 Vector4 elements used to set different images to each box side
* faceColors an array of 6 Color3 elements used to set different colors to each box side
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### bottomBaseAt?

`number`

#### depth?

`number`

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### height?

`number`

#### sideOrientation?

`number`

#### size?

`number`

#### topBaseAt?

`number`

#### width?

`number`

#### wrap?

`boolean`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the box
