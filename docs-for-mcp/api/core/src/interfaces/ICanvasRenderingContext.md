[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICanvasRenderingContext

# Interface: ICanvasRenderingContext

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L342)

Class used to abstract canvas rendering

## Properties

### canvas

> `readonly` **canvas**: [`ICanvas`](ICanvas.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L406)

canvas is a read-only reference to ICanvas.

***

### fillStyle

> **fillStyle**: `string` \| [`ICanvasGradient`](ICanvasGradient.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L366)

Color or style to use inside shapes. Default #000 (black).

***

### filter

> **filter**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L371)

Provides filter effects such as blurring and grayscaling. It is similar to the CSS filter property and accepts the same values.

***

### font

> **font**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L356)

Font setting. Default value 10px sans-serif.

***

### globalAlpha

> **globalAlpha**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:376](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L376)

Alpha value that is applied to shapes and images before they are composited onto the canvas. Default 1.0 (opaque).

***

### lineJoin

> **lineJoin**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L346)

Defines the type of corners where two lines meet. Possible values: round, bevel, miter (default).

***

### lineWidth

> **lineWidth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L401)

Width of lines. Default 1.0.

***

### miterLimit

> **miterLimit**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L351)

Miter limit ratio. Default 10.

***

### shadowBlur

> **shadowBlur**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:386](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L386)

Specifies the blurring effect. Default: 0.

***

### shadowColor

> **shadowColor**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L381)

Color of the shadow. Default: fully-transparent black.

***

### shadowOffsetX

> **shadowOffsetX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L391)

Horizontal distance the shadow will be offset. Default: 0.

***

### shadowOffsetY

> **shadowOffsetY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L396)

Vertical distance the shadow will be offset. Default: 0.

***

### strokeStyle

> **strokeStyle**: `string` \| [`ICanvasGradient`](ICanvasGradient.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L361)

Color or style to use for the lines around shapes. Default #000 (black).

## Methods

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L496)

Adds a circular arc to the current path.

#### Parameters

##### x

`number`

The horizontal coordinate of the arc's center.

##### y

`number`

The vertical coordinate of the arc's center.

##### radius

`number`

The arc's radius. Must be positive.

##### startAngle

`number`

The angle at which the arc starts in radians, measured from the positive x-axis.

##### endAngle

`number`

The angle at which the arc ends in radians, measured from the positive x-axis.

##### anticlockwise?

`boolean`

An optional Boolean. If true, draws the arc counter-clockwise between the start and end angles. The default is false (clockwise).

#### Returns

`void`

***

### beginPath()

> **beginPath**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:501](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L501)

Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.

#### Returns

`void`

***

### clearRect()

> **clearRect**(`x`, `y`, `width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L415)

Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.

#### Parameters

##### x

`number`

The x-axis coordinate of the rectangle's starting point.

##### y

`number`

The y-axis coordinate of the rectangle's starting point.

##### width

`number`

The rectangle's width. Positive values are to the right, and negative to the left.

##### height

`number`

The rectangle's height. Positive values are down, and negative are up.

#### Returns

`void`

***

### clip()

> **clip**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L477)

Creates a clipping path from the current sub-paths. Everything drawn after clip() is called appears inside the clipping path only.

#### Returns

`void`

***

### closePath()

> **closePath**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:507](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L507)

Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start.
If the shape has already been closed or has only one point, this function does nothing.

#### Returns

`void`

***

### createLinearGradient()

> **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): [`ICanvasGradient`](ICanvasGradient.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:624](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L624)

Creates a linear gradient along the line given by the coordinates represented by the parameters.

#### Parameters

##### x0

`number`

The x-axis coordinate of the start point.

##### y0

`number`

The y-axis coordinate of the start point.

##### x1

`number`

The x-axis coordinate of the end point.

##### y1

`number`

The y-axis coordinate of the end point.

#### Returns

[`ICanvasGradient`](ICanvasGradient.md)

ICanvasGradient A linear ICanvasGradient initialized with the specified line.

***

### createRadialGradient()

> **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): [`ICanvasGradient`](ICanvasGradient.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L636)

Creates a linear gradient along the line given by the coordinates represented by the parameters.

#### Parameters

##### x0

`number`

The x-axis coordinate of the start circle.

##### y0

`number`

The y-axis coordinate of the start circle.

##### r0

`number`

The radius of the start circle. Must be non-negative and finite.

##### x1

`number`

The x-axis coordinate of the end point.

##### y1

`number`

The y-axis coordinate of the end point.

##### r1

`number`

The radius of the end circle. Must be non-negative and finite.

#### Returns

[`ICanvasGradient`](ICanvasGradient.md)

ICanvasGradient A linear ICanvasGradient initialized with the two specified circles.

***

### drawImage()

#### Call Signature

> **drawImage**(`image`, `sx`, `sy`, `sWidth`, `sHeight`, `dx`, `dy`, `dWidth`, `dHeight`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L563)

Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

##### Parameters

###### image

`any`

An element to draw into the context.

###### sx

`number`

The x-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.

###### sy

`number`

The y-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.

###### sWidth

`number`

The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.

###### sHeight

`number`

The height of the sub-rectangle of the source image to draw into the destination context.

###### dx

`number`

The x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

###### dy

`number`

The y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

###### dWidth

`number`

The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.

###### dHeight

`number`

The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.

##### Returns

`void`

#### Call Signature

> **drawImage**(`image`, `dx`, `dy`, `dWidth`, `dHeight`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:572](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L572)

Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

##### Parameters

###### image

`any`

An element to draw into the context.

###### dx

`number`

The x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

###### dy

`number`

The y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

###### dWidth

`number`

The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.

###### dHeight

`number`

The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.

##### Returns

`void`

#### Call Signature

> **drawImage**(`image`, `dx`, `dy`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:580](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L580)

Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

##### Parameters

###### image

`any`

An element to draw into the context.

###### dx

`number`

The x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

###### dy

`number`

The y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.

##### Returns

`void`

***

### fill()

> **fill**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:548](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L548)

Fills the current sub-paths with the current fill style.

#### Returns

`void`

***

### fillRect()

> **fillRect**(`x`, `y`, `width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L434)

Draws a filled rectangle at (x, y) position whose size is determined by width and height.

#### Parameters

##### x

`number`

The x-axis coordinate of the rectangle's starting point.

##### y

`number`

The y-axis coordinate of the rectangle's starting point.

##### width

`number`

The rectangle's width. Positive values are to the right, and negative to the left.

##### height

`number`

The rectangle's height. Positive values are down, and negative are up.

#### Returns

`void`

***

### fillText()

> **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L605)

Draws (fills) a given text at the given (x, y) position.

#### Parameters

##### text

`string`

A String specifying the text string to render into the context. The text is rendered using the settings specified by font, textAlign, textBaseline, and direction.

##### x

`number`

The x-axis coordinate of the point at which to begin drawing the text, in pixels.

##### y

`number`

The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.

##### maxWidth?

`number`

The maximum number of pixels wide the text may be once rendered. If not specified, there is no limit to the width of the text.

#### Returns

`void`

***

### getImageData()

> **getImageData**(`sx`, `sy`, `sw`, `sh`): `ImageData`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:590](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L590)

Returns an ImageData object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at (sx, sy) and has an sw width and sh height.

#### Parameters

##### sx

`number`

The x-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.

##### sy

`number`

The y-axis coordinate of the top-left corner of the rectangle from which the ImageData will be extracted.

##### sw

`number`

The width of the rectangle from which the ImageData will be extracted. Positive values are to the right, and negative to the left.

##### sh

`number`

The height of the rectangle from which the ImageData will be extracted. Positive values are down, and negative are up.

#### Returns

`ImageData`

ImageData An ImageData object containing the image data for the rectangle of the canvas specified.

***

### getTransform()

> **getTransform**(): [`DOMMatrix`](DOMMatrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L652)

Retrieves the current transformation matrix being applied to the context.

#### Returns

[`DOMMatrix`](DOMMatrix.md)

***

### lineTo()

> **lineTo**(`x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:521](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L521)

Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.

#### Parameters

##### x

`number`

The x-axis coordinate of the line's end point.

##### y

`number`

The y-axis coordinate of the line's end point.

#### Returns

`void`

***

### measureText()

> **measureText**(`text`): [`ITextMetrics`](ITextMetrics.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L537)

Returns a TextMetrics object.

#### Parameters

##### text

`string`

The text String to measure.

#### Returns

[`ITextMetrics`](ITextMetrics.md)

ITextMetrics A ITextMetrics object.

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:514](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L514)

Moves the starting point of a new sub-path to the (x, y) coordinates.

#### Parameters

##### x

`number`

The x-axis (horizontal) coordinate of the point.

##### y

`number`

The y-axis (vertical) coordinate of the point.

#### Returns

`void`

***

### putImageData()

> **putImageData**(`imageData`, `dx`, `dy`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L485)

Paints data from the given ImageData object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.

#### Parameters

##### imageData

`ImageData`

An ImageData object containing the array of pixel values.

##### dx

`number`

Horizontal position (x coordinate) at which to place the image data in the destination canvas.

##### dy

`number`

Vertical position (y coordinate) at which to place the image data in the destination canvas.

#### Returns

`void`

***

### quadraticCurveTo()

> **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:530](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L530)

Adds a quadratic Bézier curve to the current path.

#### Parameters

##### cpx

`number`

The x-axis coordinate of the control point.

##### cpy

`number`

The y-axis coordinate of the control point.

##### x

`number`

The x-axis coordinate of the end point.

##### y

`number`

The y-axis coordinate of the end point.

#### Returns

`void`

***

### rect()

> **rect**(`x`, `y`, `width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:472](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L472)

Creates a path for a rectangle at position (x, y) with a size that is determined by width and height.

#### Parameters

##### x

`number`

The x-axis coordinate of the rectangle's starting point.

##### y

`number`

The y-axis coordinate of the rectangle's starting point.

##### width

`number`

The rectangle's width. Positive values are to the right, and negative to the left.

##### height

`number`

The rectangle's height. Positive values are down, and negative are up.

#### Returns

`void`

***

### restore()

> **restore**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L425)

Restores the drawing style state to the last element on the 'state stack' saved by save().

#### Returns

`void`

***

### rotate()

> **rotate**(`angle`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L447)

Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.

#### Parameters

##### angle

`number`

The rotation angle, clockwise in radians. You can use degree * Math.PI / 180 to calculate a radian from a degree.

#### Returns

`void`

***

### save()

> **save**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L420)

Saves the current drawing style state using a stack so you can revert any change you make to it using restore().

#### Returns

`void`

***

### scale()

> **scale**(`x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L441)

Adds a scaling transformation to the canvas units by x horizontally and by y vertically.

#### Parameters

##### x

`number`

Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis. A value of 1 results in no horizontal scaling.

##### y

`number`

Scaling factor in the vertical direction. A negative value flips pixels across the horizontal axis. A value of 1 results in no vertical scaling.

#### Returns

`void`

***

### setLineDash()

> **setLineDash**(`segments`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:596](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L596)

Sets the current line dash pattern.

#### Parameters

##### segments

`number`[]

An Array of numbers that specify distances to alternately draw a line and a gap (in coordinate space units).

#### Returns

`void`

***

### setTransform()

> **setTransform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:647](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L647)

Resets the current transform to matrix composed with a, b, c, d, e, f.

#### Parameters

##### a

`number`

Horizontal scaling. A value of 1 results in no scaling.

##### b

`number`

Vertical skewing.

##### c

`number`

Horizontal skewing.

##### d

`number`

Vertical scaling. A value of 1 results in no scaling.

##### e

`number`

Horizontal translation (moving).

##### f

`number`

Vertical translation (moving).

#### Returns

`void`

***

### stroke()

> **stroke**(`path?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L543)

Strokes the current sub-paths with the current stroke style.

#### Parameters

##### path?

[`IPath2D`](IPath2D.md)

Optional Path2D.

#### Returns

`void`

***

### strokeRect()

> **strokeRect**(`x`, `y`, `width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:463](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L463)

Paints a rectangle which has a starting point at (x, y) and has a w width and an h height onto the canvas, using the current stroke style.

#### Parameters

##### x

`number`

The x-axis coordinate of the rectangle's starting point.

##### y

`number`

The y-axis coordinate of the rectangle's starting point.

##### width

`number`

The rectangle's width. Positive values are to the right, and negative to the left.

##### height

`number`

The rectangle's height. Positive values are down, and negative are up.

#### Returns

`void`

***

### strokeText()

> **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:614](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L614)

Draws (strokes) a given text at the given (x, y) position.

#### Parameters

##### text

`string`

A String specifying the text string to render into the context. The text is rendered using the settings specified by font, textAlign, textBaseline, and direction.

##### x

`number`

The x-axis coordinate of the point at which to begin drawing the text, in pixels.

##### y

`number`

The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.

##### maxWidth?

`number`

The maximum number of pixels wide the text may be once rendered. If not specified, there is no limit to the width of the text.

#### Returns

`void`

***

### translate()

> **translate**(`x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:454](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L454)

Adds a translation transformation by moving the canvas and its origin x horizontally and y vertically on the grid.

#### Parameters

##### x

`number`

Distance to move in the horizontal direction. Positive values are to the right, and negative to the left.

##### y

`number`

Distance to move in the vertical direction. Positive values are down, and negative are up.

#### Returns

`void`
