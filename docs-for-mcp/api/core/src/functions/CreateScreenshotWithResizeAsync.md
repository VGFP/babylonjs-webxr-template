[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateScreenshotWithResizeAsync

# Function: CreateScreenshotWithResizeAsync()

> **CreateScreenshotWithResizeAsync**(`engine`, `camera`, `width`, `height`, `mimeType?`, `quality?`, `useFill?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/screenshotTools.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/screenshotTools.ts#L216)

Captures and automatically downloads a screenshot of the current rendering for a specific size. This will render the entire canvas but will generate a blink (due to canvas resize)
If screenshot image data is needed, use [CreateScreenshotAsync](CreateScreenshotAsync.md) instead.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

## Parameters

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the rendering engine

### camera

[`Camera`](../classes/Camera.md)

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

### width

`number`

defines the expected width

### height

`number`

defines the expected height

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

## Returns

`Promise`\<`void`\>

promise that resolves once the screenshot is taken

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG
