[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IScreenshotSize

# Interface: IScreenshotSize

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/screenshotSize.ts:5](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/interfaces/screenshotSize.ts#L5)

Interface for screenshot methods with describe argument called `size` as object with options

## Link

https://doc.babylonjs.com/api/classes/babylon.screenshottools

## Properties

### finalHeight?

> `optional` **finalHeight?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/screenshotSize.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/interfaces/screenshotSize.ts#L36)

Height of the final screenshot image.
If only one of the two values is provided, the other will be calculated based on the camera's aspect ratio.
If both finalWidth and finalHeight are not provided, width and height will be used instead
finalWidth and finalHeight are used only by CreateScreenshotUsingRenderTarget, not by CreateScreenshot!

***

### finalWidth?

> `optional` **finalWidth?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/screenshotSize.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/interfaces/screenshotSize.ts#L28)

Width of the final screenshot image.
If only one of the two values is provided, the other will be calculated based on the camera's aspect ratio.
If both finalWidth and finalHeight are not provided, width and height will be used instead.
finalWidth and finalHeight are used only by CreateScreenshotUsingRenderTarget, not by CreateScreenshot!

***

### height?

> `optional` **height?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/screenshotSize.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/interfaces/screenshotSize.ts#L9)

number in pixels for canvas height. It is the height of the texture used to render the scene

***

### precision?

> `optional` **precision?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/screenshotSize.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/interfaces/screenshotSize.ts#L15)

multiplier allowing render at a higher or lower resolution
If value is defined then width and height will be multiplied by this value

***

### width?

> `optional` **width?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/screenshotSize.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/interfaces/screenshotSize.ts#L20)

number in pixels for canvas width. It is the width of the texture used to render the scene
