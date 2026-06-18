[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPath2D

# Interface: IPath2D

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L92)

Class used to abstract a 2D path to use with the canvas and its context

## Methods

### addPath()

> **addPath**(`path`, `transform?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L98)

Adds a path to the current path.

#### Parameters

##### path

`IPath2D`

A Path2D path to add.

##### transform?

[`DOMMatrix`](DOMMatrix.md)

A DOMMatrix to be used as the transformation matrix for the path that is added.

#### Returns

`void`

***

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L149)

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

##### counterclockwise?

`boolean`

An optional Boolean. If true, draws the arc counter-clockwise between the start and end angles. The default is false (clockwise).

#### Returns

`void`

***

### arcTo()

> **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L159)

Adds a circular arc to the current sub-path, using the given control points and radius.

#### Parameters

##### x1

`number`

The x-axis coordinate of the first control point.

##### y1

`number`

The y-axis coordinate of the first control point.

##### x2

`number`

The x-axis coordinate of the second control point.

##### y2

`number`

The y-axis coordinate of the second control point.

##### radius

`number`

The arc's radius. Must be non-negative.

#### Returns

`void`

***

### bezierCurveTo()

> **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L129)

Adds a cubic Bézier curve to the current path.

#### Parameters

##### cp1x

`number`

The x-axis coordinate of the first control point.

##### cp1y

`number`

The y-axis coordinate of the first control point.

##### cp2x

`number`

The x-axis coordinate of the second control point.

##### cp2y

`number`

The y-axis coordinate of the second control point.

##### x

`number`

The x-axis coordinate of the end point.

##### y

`number`

The y-axis coordinate of the end point.

#### Returns

`void`

***

### closePath()

> **closePath**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L104)

Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start.
If the shape has already been closed or has only one point, this function does nothing.

#### Returns

`void`

***

### ellipse()

> **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L172)

Creates an elliptical arc centered at (x, y) with the radii radiusX and radiusY. The path starts at startAngle and ends at endAngle, and travels in the direction given by counterclockwise.

#### Parameters

##### x

`number`

The x-axis (horizontal) coordinate of the ellipse's center.

##### y

`number`

The y-axis (vertical) coordinate of the ellipse's center.

##### radiusX

`number`

The ellipse's major-axis radius. Must be non-negative.

##### radiusY

`number`

The ellipse's minor-axis radius. Must be non-negative.

##### rotation

`number`

The rotation of the ellipse, expressed in radians.

##### startAngle

`number`

The eccentric angle at which the ellipse starts, measured clockwise from the positive x-axis and expressed in radians.

##### endAngle

`number`

The eccentric angle at which the ellipse ends, measured clockwise from the positive x-axis and expressed in radians.

##### counterclockwise?

`boolean`

An optional boolean value which, if true, draws the ellipse counterclockwise (anticlockwise). The default value is false (clockwise).

#### Returns

`void`

***

### lineTo()

> **lineTo**(`x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L118)

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

### moveTo()

> **moveTo**(`x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L111)

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

### quadraticCurveTo()

> **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L138)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L181)

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

### roundRect()

> **roundRect**(`x`, `y`, `width`, `height`, `radii`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L191)

Adds a rounded rectangle to the current path.

#### Parameters

##### x

`number`

The x-axis coordinate of the rectangle's starting point, in pixels.

##### y

`number`

The y-axis coordinate of the rectangle's starting point, in pixels.

##### width

`number`

The rectangle's width. Positive values are to the right, and negative to the left.

##### height

`number`

The rectangle's height. Positive values are down, and negative are up.

##### radii

`number`

A number specifying the radii of the circular arc to be used for the corners of the rectangle. The number and order of the radii function in the same way as the border-radius CSS property when width and height are positive:

#### Returns

`void`
