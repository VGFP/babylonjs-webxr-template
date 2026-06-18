[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateScreenshotForFrameGraphAsync

# Function: CreateScreenshotForFrameGraphAsync()

> **CreateScreenshotForFrameGraphAsync**(`frameGraph`, `camera`, `size`, `mimeType?`, `samples?`, `antialiasing?`, `fileName?`, `quality?`, `customDumpData?`, `automaticDownload?`, `numberOfFramesToRender?`): `Promise`\<`string` \| `ArrayBuffer` \| `null`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/screenshotTools.pure.ts:601](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/screenshotTools.pure.ts#L601)

Generates an image screenshot from the specified frame graph and camera
Please note:
 - that the frame graph must write to the back buffer color for this to work! This is because the back buffer color is replaced by the texture of the screenshot during the operation.
 - the camera is set as the camera for the main object renderer of the frame graph during the operation, and restored afterwards.
   This will only work if the frame graph has a main object renderer (isMainObjectRenderer is true for one of its object renderers)
 - that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

## Parameters

### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

The frame graph to use for rendering

### camera

[`Camera`](../classes/Camera.md)

The camera to use for rendering

### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

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

### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

### customDumpData?

(`width`, `height`, `data`, `successCallback?`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`) => `void`

The function to use to dump the data. If not provided, the default DumpData function will be used.

### automaticDownload?

`boolean` = `false`

If true, the screenshot will be automatically downloaded as a file instead of being returned as a string: in this case, null is returned.

### numberOfFramesToRender?

`number`

If provided, the number of frames to render before taking the screenshot.
If not provided, the screenshot will be taken after the next frame, or after 32 frames if the frame graph has at least one history texture.

## Returns

`Promise`\<`string` \| `ArrayBuffer` \| `null`\>

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it. If automaticDownload is true, null is returned instead
