[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateDashedLinesVertexData

# Function: CreateDashedLinesVertexData()

> **CreateDashedLinesVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/linesBuilder.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/linesBuilder.ts#L64)

Create the VertexData for a DashedLines

## Parameters

### options

an object used to set the following optional parameters for the DashedLines, required but can be empty
 - points an array successive Vector3
 - dashSize the size of the dashes relative to the dash number, optional, default 3
 - gapSize the size of the gap between two successive dashes relative to the dash number, optional, default 1
 - dashNb the intended total number of dashes, optional, default 200

#### dashNb?

`number`

#### dashSize?

`number`

#### gapSize?

`number`

#### points

[`Vector3`](../classes/Vector3.md)[]

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData for the DashedLines
