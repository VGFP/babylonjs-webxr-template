[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITextMetrics

# Interface: ITextMetrics

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L209)

Class used to abstract a text measurement

## Properties

### actualBoundingBoxAscent

> `readonly` **actualBoundingBoxAscent**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L228)

distance (in pixels) from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline
property to the top side of the bounding rectangle of the given text

***

### actualBoundingBoxDescent

> `readonly` **actualBoundingBoxDescent**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L233)

distance (in pixels) from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline
property to the bottom side of the bounding rectangle of the given text

***

### actualBoundingBoxLeft

> `readonly` **actualBoundingBoxLeft**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L218)

distance (in pixels) parallel to the baseline from the alignment point given by the CanvasRenderingContext2D.textAlign
property to the left side of the bounding rectangle of the given text

***

### actualBoundingBoxRight

> `readonly` **actualBoundingBoxRight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L223)

distance (in pixels) parallel to the baseline from the alignment point given by the CanvasRenderingContext2D.textAlign
property to the right side of the bounding rectangle of the given text

***

### width

> `readonly` **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L213)

Text width.
