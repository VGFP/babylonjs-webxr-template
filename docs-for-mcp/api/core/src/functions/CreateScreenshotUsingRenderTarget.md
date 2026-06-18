[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateScreenshotUsingRenderTarget

# Function: CreateScreenshotUsingRenderTarget()

> **CreateScreenshotUsingRenderTarget**(`engine`, `camera`, `size`, `successCallback?`, `mimeType?`, `samples?`, `antialiasing?`, `fileName?`, `renderSprites?`, `enableStencilBuffer?`, `useLayerMask?`, `quality?`, `customizeTexture?`, `customDumpData?`, `timeoutInMilliseconds?`, `timeoutErrorCallback?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/screenshotTools.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/screenshotTools.pure.ts#L271)

Generates an image screenshot from the specified camera.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

## Parameters

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

The engine to use for rendering

### camera

[`Camera`](../classes/Camera.md)

The camera to use for rendering

### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height, finalWidth, finalHeight. If a single number is passed,
it will be used for both width and height, as well as finalWidth, finalHeight. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

### successCallback?

(`data`) => `void`

The callback receives a single parameter which contains the
screenshot as a string of base64-encoded characters. This string can be assigned to the
src parameter of an <img> to display it

### mimeType?

`string` = `"image/png"`

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

### samples?

`number` = `1`

Texture samples (default: 1)

### antialiasing?

`boolean` = `false`

Whether antialiasing should be turned on or not (default: false)

### fileName?

`string`

A name for for the downloaded file.

### renderSprites?

`boolean` = `false`

Whether the sprites should be rendered or not (default: false)

### enableStencilBuffer?

`boolean` = `false`

Whether the stencil buffer should be enabled or not (default: false)

### useLayerMask?

`boolean` = `true`

if the camera's layer mask should be used to filter what should be rendered (default: true)

### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

### customizeTexture?

(`texture`) => `void`

An optional callback that can be used to modify the render target texture before taking the screenshot. This can be used, for instance, to enable camera post-processes before taking the screenshot.

### customDumpData?

(`width`, `height`, `data`, `successCallback?`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`) => `void`

The function to use to dump the data. If not provided, the default DumpData function will be used.

### timeoutInMilliseconds?

`number` = `30000`

The maximum time to wait for the screenshot to be ready before calling the timeoutErrorCallback (default: 30000 ms)

### timeoutErrorCallback?

() => `void`

The callback that will be called if the screenshot could not be taken before the timeoutInMilliseconds

## Returns

`void`

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG
