[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateLineSystemVertexData

# Function: CreateLineSystemVertexData()

> **CreateLineSystemVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/linesBuilder.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/linesBuilder.ts#L21)

Creates the VertexData of the LineSystem

## Parameters

### options

an object used to set the following optional parameters for the LineSystem, required but can be empty
 - lines an array of lines, each line being an array of successive Vector3
 - colors an array of line colors, each of the line colors being an array of successive Color4, one per line point

#### colors?

[`Nullable`](../type-aliases/Nullable.md)\<[`Color4`](../classes/Color4.md)[][]\>

#### lines

[`Vector3`](../classes/Vector3.md)[][]

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the LineSystem
