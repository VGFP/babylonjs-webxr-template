[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HDRTools

# ~~Variable: HDRTools~~

> `const` **HDRTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/hdr.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/hdr.ts#L294)

## Type Declaration

### ~~GetCubeMapTextureData~~

> **GetCubeMapTextureData**: (`buffer`, `size`, `supersample`) => [`CubeMapInfo`](../interfaces/CubeMapInfo.md)

Returns the cubemap information (each faces texture data) extracted from an RGBE texture.
This RGBE texture needs to store the information as a panorama.

More information on this format are available here:
https://en.wikipedia.org/wiki/RGBE_image_format

#### Parameters

##### buffer

`ArrayBuffer`

The binary file stored in an array buffer.

##### size

`number`

The expected size of the extracted cubemap.

##### supersample?

`boolean` = `false`

enable supersampling the cubemap (default: false)

#### Returns

[`CubeMapInfo`](../interfaces/CubeMapInfo.md)

The Cube Map information.

### ~~RGBE\_ReadHeader~~

> **RGBE\_ReadHeader**: (`uint8array`) => `HDRInfo`

Reads header information from an RGBE texture stored in a native array.
More information on this format are available here:
https://en.wikipedia.org/wiki/RGBE_image_format

#### Parameters

##### uint8array

`Uint8Array`

The binary file stored in  native array.

#### Returns

`HDRInfo`

The header information.

### ~~RGBE\_ReadPixels~~

> **RGBE\_ReadPixels**: (`uint8array`, `hdrInfo`) => `Float32Array`

Returns the pixels data extracted from an RGBE texture.
This pixels will be stored left to right up to down in the R G B order in one array.

More information on this format are available here:
https://en.wikipedia.org/wiki/RGBE_image_format

#### Parameters

##### uint8array

`Uint8Array`

The binary file stored in an array buffer.

##### hdrInfo

`HDRInfo`

The header information of the file.

#### Returns

`Float32Array`

The pixels data in RGB right to left up to down order.

## Deprecated

Use functions separately
