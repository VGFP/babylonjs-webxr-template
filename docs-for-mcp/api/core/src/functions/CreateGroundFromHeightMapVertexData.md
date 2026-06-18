[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateGroundFromHeightMapVertexData

# Function: CreateGroundFromHeightMapVertexData()

> **CreateGroundFromHeightMapVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts#L186)

Creates the VertexData of the Ground designed from a heightmap

## Parameters

### options

an object used to set the following parameters for the Ground, required and provided by CreateGroundFromHeightMap
- `width` the width (x direction) of the ground
- `height` the height (z direction) of the ground
- `subdivisions` the number of subdivisions per side
- `minHeight` the minimum altitude on the ground, optional, default 0
- `maxHeight` the maximum altitude on the ground, optional default 1
- `colorFilter` the filter to apply to the image pixel colors to compute the height, optional Color3, default (0.3, 0.59, 0.11)
- `buffer` the array holding the image color data
- `bufferWidth` the width of image
- `bufferHeight` the height of image
- `alphaFilter` Remove any data where the alpha channel is below this value, defaults 0 (all data visible)
- `heightBuffer` a array of floats where the height data can be saved, if its length is greater than zero.

#### alphaFilter

`number`

#### buffer

`Uint8Array`

#### bufferHeight

`number`

#### bufferWidth

`number`

#### colorFilter

[`Color3`](../classes/Color3.md)

#### height

`number`

#### heightBuffer?

`Float32Array`\<`ArrayBufferLike`\>

#### maxHeight

`number`

#### minHeight

`number`

#### subdivisions

`number`

#### width

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the Ground designed from a heightmap
