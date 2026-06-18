[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EncodeImageAsync

# Variable: EncodeImageAsync

> `const` **EncodeImageAsync**: `object` = `EncodingHelper.EncodeImageAsync`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dumpTools.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dumpTools.pure.ts#L139)

Encodes pixel data to an image

## Param

**pixelData**

8-bit RGBA pixel data

## Param

**width**

the width of the image

## Param

**height**

the height of the image

## Param

**mimeType**

the requested MIME type

## Param

**invertY**

true to invert the image in the Y direction

## Param

**quality**

the quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

## Returns

a promise that resolves to the encoded image data. Note that the `blob.type` may differ from `mimeType` if it was not supported.
