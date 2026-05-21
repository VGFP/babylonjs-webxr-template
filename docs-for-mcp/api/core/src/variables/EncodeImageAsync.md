[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EncodeImageAsync

# Variable: EncodeImageAsync

> `const` **EncodeImageAsync**: `object` = `EncodingHelper.EncodeImageAsync`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dumpTools.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/dumpTools.ts#L137)

Encodes pixel data to an image

## Param

8-bit RGBA pixel data

## Param

the width of the image

## Param

the height of the image

## Param

the requested MIME type

## Param

true to invert the image in the Y direction

## Param

the quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

## Returns

a promise that resolves to the encoded image data. Note that the `blob.type` may differ from `mimeType` if it was not supported.
