[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ScreenshotTools

# Variable: ScreenshotTools

> `const` **ScreenshotTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/screenshotTools.ts:872](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/screenshotTools.ts#L872)

Class containing a set of static utilities functions for screenshots

## Type Declaration

### CreateScreenshot

> **CreateScreenshot**: (`engine`, `camera`, `size`, `successCallback?`, `mimeType`, `forceDownload`, `quality?`, `useFill`, `clearWithSceneColor`) => `void`

Captures a screenshot of the current rendering
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

Captures a screenshot of the current rendering
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

#### Parameters

##### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the rendering engine

##### camera

[`Camera`](../classes/Camera.md)

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](../functions/CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### successCallback?

(`data`) => `void`

defines the callback receives a single parameter which contains the
screenshot as a string of base64-encoded characters. This string can be assigned to the
src parameter of an <img> to display it

##### mimeType?

`string` = `"image/png"`

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### forceDownload?

`boolean` = `false`

force the system to download the image even if a successCallback is provided

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### useFill?

`boolean` = `false`

fill the screenshot dimensions with the render canvas and clip any overflow. If false, fit the canvas within the screenshot, as in letterboxing.

##### clearWithSceneColor?

`boolean` = `false`

If true, the screenshot canvas will be cleared with the scene clear color before copying the render.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### Param

defines the rendering engine

#### Param

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](../functions/CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

#### Param

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

#### Param

defines the callback receives a single parameter which contains the
screenshot as a string of base64-encoded characters. This string can be assigned to the
src parameter of an <img> to display it

#### Param

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

#### Param

force the system to download the image even if a successCallback is provided

#### Param

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Param

fill the screenshot dimensions with the render canvas and clip any overflow. If false, fit the canvas within the screenshot, as in letterboxing.

### CreateScreenshotAsync

> **CreateScreenshotAsync**: (`engine`, `camera`, `size`, `mimeType`, `quality?`, `useFill`, `clearWithSceneColor`, `forceDownload`) => `Promise`\<`string`\>

Captures a screenshot of the current rendering
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

Captures a screenshot of the current rendering
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

#### Parameters

##### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the rendering engine

##### camera

[`Camera`](../classes/Camera.md)

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](../functions/CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### mimeType?

`string` = `"image/png"`

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### useFill?

`boolean` = `false`

fill the screenshot dimensions with the render canvas and clip any overflow. If false, fit the canvas within the screenshot, as in letterboxing.

##### clearWithSceneColor?

`boolean` = `false`

If true, the screenshot canvas will be cleared with the scene clear color before copying the render.

##### forceDownload?

`boolean` = `false`

force the system to download the image

#### Returns

`Promise`\<`string`\>

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### Param

defines the rendering engine

#### Param

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](../functions/CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

#### Param

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

#### Param

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

#### Param

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Param

fill the screenshot dimensions with the render canvas and clip any overflow. If false, fit the canvas within the screenshot, as in letterboxing.

#### Param

force the system to download the image

#### Returns

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it

### CreateScreenshotForFrameGraphAsync

> **CreateScreenshotForFrameGraphAsync**: (`frameGraph`, `camera`, `size`, `mimeType`, `samples`, `antialiasing`, `fileName?`, `quality?`, `customDumpData?`, `automaticDownload`, `numberOfFramesToRender?`) => `Promise`\<`string` \| `ArrayBuffer` \| `null`\>

Generates an image screenshot from the specified frame graph and camera
Please note:
 - that the frame graph must write to the back buffer color for this to work! This is because the back buffer color is replaced by the texture of the screenshot during the operation.
 - the camera is set as the camera for the main object renderer of the frame graph during the operation, and restored afterwards.
   This will only work if the frame graph has a main object renderer (isMainObjectRenderer is true for one of its object renderers)
 - that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

Generates an image screenshot from the specified frame graph and camera
Please note:
 - that the frame graph must write to the back buffer color for this to work! This is because the back buffer color is replaced by the texture of the screenshot during the operation.
 - the camera is set as the camera for the main object renderer of the frame graph during the operation, and restored afterwards.
   This will only work if the frame graph has a main object renderer (isMainObjectRenderer is true for one of its object renderers)
 - that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

#### Parameters

##### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

The frame graph to use for rendering

##### camera

[`Camera`](../classes/Camera.md)

The camera to use for rendering

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### mimeType?

`string` = `"image/png"`

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### samples?

`number` = `1`

Texture samples (default: 1)

##### antialiasing?

`boolean` = `false`

Whether antialiasing should be turned on or not (default: false)

##### fileName?

`string`

A name for for the downloaded file.

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### customDumpData?

(`width`, `height`, `data`, `successCallback?`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`) => `void`

The function to use to dump the data. If not provided, the default DumpData function will be used.

##### automaticDownload?

`boolean` = `false`

If true, the screenshot will be automatically downloaded as a file instead of being returned as a string: in this case, null is returned.

##### numberOfFramesToRender?

`number`

If provided, the number of frames to render before taking the screenshot.
If not provided, the screenshot will be taken after the next frame, or after 32 frames if the frame graph has at least one history texture.

#### Returns

`Promise`\<`string` \| `ArrayBuffer` \| `null`\>

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it. If automaticDownload is true, null is returned instead

#### Param

The frame graph to use for rendering

#### Param

The camera to use for rendering

#### Param

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

#### Param

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

#### Param

Texture samples (default: 1)

#### Param

Whether antialiasing should be turned on or not (default: false)

#### Param

A name for for the downloaded file.

#### Param

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Param

The function to use to dump the data. If not provided, the default DumpData function will be used.

#### Param

If true, the screenshot will be automatically downloaded as a file instead of being returned as a string: in this case, null is returned.

#### Returns

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it. If automaticDownload is true, null is returned instead

### CreateScreenshotUsingRenderTarget

> **CreateScreenshotUsingRenderTarget**: (`engine`, `camera`, `size`, `successCallback?`, `mimeType`, `samples`, `antialiasing`, `fileName?`, `renderSprites`, `enableStencilBuffer`, `useLayerMask`, `quality?`, `customizeTexture?`, `customDumpData?`, `timeoutInMilliseconds`, `timeoutErrorCallback?`) => `void`

Generates an image screenshot from the specified camera.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

Generates an image screenshot from the specified camera.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

#### Parameters

##### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

The engine to use for rendering

##### camera

[`Camera`](../classes/Camera.md)

The camera to use for rendering

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height, finalWidth, finalHeight. If a single number is passed,
it will be used for both width and height, as well as finalWidth, finalHeight. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### successCallback?

(`data`) => `void`

The callback receives a single parameter which contains the
screenshot as a string of base64-encoded characters. This string can be assigned to the
src parameter of an <img> to display it

##### mimeType?

`string` = `"image/png"`

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### samples?

`number` = `1`

Texture samples (default: 1)

##### antialiasing?

`boolean` = `false`

Whether antialiasing should be turned on or not (default: false)

##### fileName?

`string`

A name for for the downloaded file.

##### renderSprites?

`boolean` = `false`

Whether the sprites should be rendered or not (default: false)

##### enableStencilBuffer?

`boolean` = `false`

Whether the stencil buffer should be enabled or not (default: false)

##### useLayerMask?

`boolean` = `true`

if the camera's layer mask should be used to filter what should be rendered (default: true)

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### customizeTexture?

(`texture`) => `void`

An optional callback that can be used to modify the render target texture before taking the screenshot. This can be used, for instance, to enable camera post-processes before taking the screenshot.

##### customDumpData?

(`width`, `height`, `data`, `successCallback?`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`) => `void`

The function to use to dump the data. If not provided, the default DumpData function will be used.

##### timeoutInMilliseconds?

`number` = `30000`

The maximum time to wait for the screenshot to be ready before calling the timeoutErrorCallback (default: 30000 ms)

##### timeoutErrorCallback?

() => `void`

The callback that will be called if the screenshot could not be taken before the timeoutInMilliseconds

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### Param

The engine to use for rendering

#### Param

The camera to use for rendering

#### Param

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

#### Param

The callback receives a single parameter which contains the
screenshot as a string of base64-encoded characters. This string can be assigned to the
src parameter of an <img> to display it

#### Param

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

#### Param

Texture samples (default: 1)

#### Param

Whether antialiasing should be turned on or not (default: false)

#### Param

A name for for the downloaded file.

#### Param

Whether the sprites should be rendered or not (default: false)

#### Param

Whether the stencil buffer should be enabled or not (default: false)

#### Param

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

### CreateScreenshotUsingRenderTargetAsync

> **CreateScreenshotUsingRenderTargetAsync**: (`engine`, `camera`, `size`, `mimeType`, `samples`, `antialiasing`, `fileName?`, `renderSprites`, `enableStencilBuffer`, `useLayerMask`, `quality?`, `customizeTexture?`, `customDumpData?`) => `Promise`\<`string`\>

Generates an image screenshot from the specified camera.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

Generates an image screenshot from the specified camera.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

#### Parameters

##### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

The engine to use for rendering

##### camera

[`Camera`](../classes/Camera.md)

The camera to use for rendering

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### mimeType?

`string` = `"image/png"`

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### samples?

`number` = `1`

Texture samples (default: 1)

##### antialiasing?

`boolean` = `false`

Whether antialiasing should be turned on or not (default: false)

##### fileName?

`string`

A name for for the downloaded file.

##### renderSprites?

`boolean` = `false`

Whether the sprites should be rendered or not (default: false)

##### enableStencilBuffer?

`boolean` = `false`

Whether the stencil buffer should be enabled or not (default: false)

##### useLayerMask?

`boolean` = `true`

if the camera's layer mask should be used to filter what should be rendered (default: true)

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### customizeTexture?

(`texture`) => `void`

An optional callback that can be used to modify the render target texture before taking the screenshot. This can be used, for instance, to enable camera post-processes before taking the screenshot.

##### customDumpData?

(`width`, `height`, `data`, `successCallback?`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`) => `void`

The function to use to dump the data. If not provided, the default DumpData function will be used.

#### Returns

`Promise`\<`string`\>

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### Param

The engine to use for rendering

#### Param

The camera to use for rendering

#### Param

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

#### Param

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

#### Param

Texture samples (default: 1)

#### Param

Whether antialiasing should be turned on or not (default: false)

#### Param

A name for for the downloaded file.

#### Param

Whether the sprites should be rendered or not (default: false)

#### Param

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it

### CreateScreenshotWithResizeAsync

> **CreateScreenshotWithResizeAsync**: (`engine`, `camera`, `width`, `height`, `mimeType`, `quality?`, `useFill`) => `Promise`\<`void`\>

Captures and automatically downloads a screenshot of the current rendering for a specific size. This will render the entire canvas but will generate a blink (due to canvas resize)
If screenshot image data is needed, use [CreateScreenshotAsync](../functions/CreateScreenshotAsync.md) instead.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

Captures and automatically downloads a screenshot of the current rendering for a specific size. This will render the entire canvas but will generate a blink (due to canvas resize)
If screenshot image data is needed, use [CreateScreenshotAsync](../functions/CreateScreenshotAsync.md) instead.
Please note that simultaneous screenshots are not supported: you must wait until one screenshot is complete before taking another.

#### Parameters

##### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the rendering engine

##### camera

[`Camera`](../classes/Camera.md)

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](../functions/CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

##### width

`number`

defines the expected width

##### height

`number`

defines the expected height

##### mimeType?

`string` = `"image/png"`

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### useFill?

`boolean` = `false`

fill the screenshot dimensions with the render canvas and clip any overflow. If false, fit the canvas within the screenshot, as in letterboxing.

#### Returns

`Promise`\<`void`\>

promise that resolves once the screenshot is taken

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

#### Param

defines the rendering engine

#### Param

defines the source camera. If the camera is not the scene's active camera, [CreateScreenshotUsingRenderTarget](../functions/CreateScreenshotUsingRenderTarget.md) will be used instead, and `useFill` will be ignored

#### Param

defines the expected width

#### Param

defines the expected height

#### Param

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

#### Param

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Param

fill the screenshot dimensions with the render canvas and clip any overflow. If false, fit the canvas within the screenshot, as in letterboxing.

#### Returns

promise that resolves once the screenshot is taken
