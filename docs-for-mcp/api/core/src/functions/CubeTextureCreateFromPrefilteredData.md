[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CubeTextureCreateFromPrefilteredData

# Function: CubeTextureCreateFromPrefilteredData()

> **CubeTextureCreateFromPrefilteredData**(`url`, `scene`, `forcedExtension?`, `createPolynomials?`): [`CubeTexture`](../classes/CubeTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:542](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L542)

Creates and return a texture created from prefilterd data by tools like IBL Baker or Lys.

## Parameters

### url

`string`

defines the url of the prefiltered texture

### scene

[`Scene`](../classes/Scene.md)

defines the scene the texture is attached to

### forcedExtension?

`any` = `null`

defines the extension of the file if different from the url

### createPolynomials?

`boolean` = `true`

defines whether or not to create polynomial harmonics from the texture data if necessary

## Returns

[`CubeTexture`](../classes/CubeTexture.md)

the prefiltered texture
