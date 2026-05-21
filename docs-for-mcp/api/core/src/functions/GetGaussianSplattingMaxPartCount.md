[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetGaussianSplattingMaxPartCount

# Function: GetGaussianSplattingMaxPartCount()

> **GetGaussianSplattingMaxPartCount**(`engine`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.ts#L50)

Computes the maximum number of Gaussian Splatting compound parts supported by the given engine.
The limit is derived from the engine's maximum vertex uniform vectors capability.

## Parameters

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

The engine to compute the limit for

## Returns

`number`

The maximum number of parts supported
