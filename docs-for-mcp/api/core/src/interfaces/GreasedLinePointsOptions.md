[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLinePointsOptions

# Interface: GreasedLinePointsOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L93)

Options for converting the points to the internal number[][] format used by GreasedLine

## Properties

### floatArrayStride?

> `optional` **floatArrayStride?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L100)

If defined and a Float32Array is used for the points parameter,
it will create multiple disconnected lines.
This parameter defines how many entries from the array to use for one line.
One entry = 3 float values.
