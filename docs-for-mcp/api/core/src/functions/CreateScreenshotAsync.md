[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateScreenshotAsync

# Function: CreateScreenshotAsync()

> **CreateScreenshotAsync**(`engine`, `camera`, `size`, `mimeType?`, `quality?`, `useFill?`, `clearWithSceneColor?`, `forceDownload?`): `Promise`\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/screenshotTools.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/screenshotTools.ts#L170)

Captures a screenshot of the current rendering
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

## Parameters

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the rendering engine

### camera

[`Camera`](../classes/Camera.md)

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

### mimeType?

`string` = `"image/png"`

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

### useFill?

`boolean` = `false`

fill the screenshot dimensions with the render canvas and clip any overflow. If false, fit the canvas within the screenshot, as in letterboxing.

### clearWithSceneColor?

`boolean` = `false`

If true, the screenshot canvas will be cleared with the scene clear color before copying the render.

### forceDownload?

`boolean` = `false`

force the system to download the image

## Returns

`Promise`\<`string`\>

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG
