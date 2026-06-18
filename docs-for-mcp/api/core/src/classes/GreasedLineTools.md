[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineTools

# Class: GreasedLineTools

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L17)

Tool functions for GreasedLine

## Constructors

### Constructor

> **new GreasedLineTools**(): `GreasedLineTools`

#### Returns

`GreasedLineTools`

## Methods

### BooleanToNumber()

> `static` **BooleanToNumber**(`bool?`): `0` \| `1`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:589](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L589)

Converts boolean to number.

#### Parameters

##### bool?

`boolean`

the bool value

#### Returns

`0` \| `1`

1 if true, 0 if false.

***

### Color3toRGBAUint8()

> `static` **Color3toRGBAUint8**(`colors`): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:522](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L522)

Converts an array of Color3 to Uint8Array

#### Parameters

##### colors

[`Color3`](Color3.md)[]

Arrray of Color3

#### Returns

`Uint8Array`

Uin8Array of colors [r, g, b, a, r, g, b, a, ...]

***

### ConvertPoints()

> `static` **ConvertPoints**(`points`, `options?`): `number`[][]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L24)

Converts GreasedLinePoints to number[][]

#### Parameters

##### points

[`GreasedLinePoints`](../type-aliases/GreasedLinePoints.md)

GreasedLinePoints

##### options?

[`GreasedLinePointsOptions`](../interfaces/GreasedLinePointsOptions.md)

GreasedLineToolsConvertPointsOptions

#### Returns

`number`[][]

number[][] with x, y, z coordinates of the points, like [[x, y, z, x, y, z, ...], [x, y, z, ...]]

***

### CreateColorsTexture()

> `static` **CreateColorsTexture**(`name`, `colors`, `colorsSampling`, `scene`): [`RawTexture`](RawTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:542](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L542)

Creates a RawTexture from an RGBA color array and sets it on the plugin material instance.

#### Parameters

##### name

`string`

name of the texture

##### colors

[`Color3`](Color3.md)[]

Uint8Array of colors

##### colorsSampling

`number`

sampling mode of the created texture

##### scene

[`Scene`](Scene.md)

Scene

#### Returns

[`RawTexture`](RawTexture.md)

the colors texture

***

### DisposeEmptyColorsTexture()

> `static` **DisposeEmptyColorsTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:579](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L579)

Diposes the shared empty colors texture

#### Returns

`void`

***

### GetArrowCap()

> `static` **GetArrowCap**(`position`, `direction`, `length`, `widthUp`, `widthDown`, `widthStartUp?`, `widthStartDown?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L468)

#### Parameters

##### position

[`Vector3`](Vector3.md)

position of the arrow cap (mainly you want to create a triangle, set widthUp and widthDown to the same value and omit widthStartUp and widthStartDown)

##### direction

[`Vector3`](Vector3.md)

direction which the arrow points to

##### length

`number`

length (size) of the arrow cap itself

##### widthUp

`number`

the arrow width above the line

##### widthDown

`number`

the arrow width belove the line

##### widthStartUp?

`number` = `0`

the arrow width at the start of the arrow above the line. In most scenarios this is 0.

##### widthStartDown?

`number` = `0`

the arrow width at the start of the arrow below the line. In most scenarios this is 0.

#### Returns

`object`

##### points

> **points**: [`Vector3`](Vector3.md)[]

##### widths

> **widths**: `number`[]

***

### GetBezierLinePoints()

> `static` **GetBezierLinePoints**(`p0`, `p1`, `p2`, `segments`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L451)

Gets line points in a shape of a bezier curve

#### Parameters

##### p0

[`Vector3`](Vector3.md)

bezier point0

##### p1

[`Vector3`](Vector3.md)

bezier point1

##### p2

[`Vector3`](Vector3.md)

bezier point2

##### segments

`number`

number of segments in the curve

#### Returns

`number`[]

***

### GetCircleLinePoints()

> `static` **GetCircleLinePoints**(`radiusX`, `segments`, `z?`, `radiusY?`, `segmentAngle?`): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L435)

Creates lines in a shape of circle/arc.
A segment is a part of the line between it's two points.

#### Parameters

##### radiusX

`number`

radiusX of the circle

##### segments

`number`

number of segments in the circle

##### z?

`number` = `0`

z coordinate of the points. Defaults to 0.

##### radiusY?

`number` = `radiusX`

radiusY of the circle - you can draw an oval if using different values

##### segmentAngle?

`number` = `...`

angle offset of the segments. Defaults to Math.PI * 2 / segments. Change this value to draw a part of the circle.

#### Returns

[`Vector3`](Vector3.md)[]

line points

***

### GetLineLength()

> `static` **GetLineLength**(`data`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L247)

Gets the length of the line counting all it's segments length

#### Parameters

##### data

`number`[] \| [`Vector3`](Vector3.md)[]

array of line points

#### Returns

`number`

length of the line

***

### GetLineLengthArray()

> `static` **GetLineLengthArray**(`data`, `buf?`): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L275)

Gets the length from the beginning to each point of the line as array.

#### Parameters

##### data

`number`[]

array of line points

##### buf?

`ArrayBuffer`

optional pre-allocated buffer to reduce memory pressure, should be at least `data.length * 4 / 3` bytes

#### Returns

`Float32Array`

length array of the line

***

### GetLineSegments()

> `static` **GetLineSegments**(`points`): `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L365)

Gets line segments.
A segment is a part of the line between it's two points.

#### Parameters

##### points

[`Vector3`](Vector3.md)[]

line points

#### Returns

`object`[]

segments information of the line segment including starting point, ending point and the distance between them

***

### GetMinMaxSegmentLength()

> `static` **GetMinMaxSegmentLength**(`points`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:383](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L383)

Gets the minimum and the maximum length of a line segment in the line.
A segment is a part of the line between it's two points.

#### Parameters

##### points

[`Vector3`](Vector3.md)[]

line points

#### Returns

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

***

### GetPointsCountInfo()

> `static` **GetPointsCountInfo**(`points`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L232)

Calculates the sum of points of every line and the number of points in each line.
This function is useful when you are drawing multiple lines in one mesh and you want
to know the counts. For example for creating an offsets table.

#### Parameters

##### points

`number`[][]

point array

#### Returns

`object`

points count info

##### counts

> **counts**: `number`[]

##### total

> **total**: `number`

***

### GetPointsFromText()

> `static` **GetPointsFromText**(`text`, `size`, `resolution`, `fontData`, `z?`, `includeInner?`): `number`[][]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:488](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L488)

Gets 3D positions of points from a text and font

#### Parameters

##### text

`string`

Text

##### size

`number`

Size of the font

##### resolution

`number`

Resolution of the font

##### fontData

[`IFontData`](../interfaces/IFontData.md)

defines the font data (can be generated with http://gero3.github.io/facetype.js/)

##### z?

`number` = `0`

z coordinate

##### includeInner?

`boolean` = `true`

include the inner parts of the font in the result. Default true. If false, only the outlines will be returned.

#### Returns

`number`[][]

number[][] of 3D positions

***

### GetPositionOnLineByVisibility()

> `static` **GetPositionOnLineByVisibility**(`lineSegments`, `lineLength`, `visbility`, `localSpace?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L400)

Finds the last visible position in world space of the line according to the visibility parameter

#### Parameters

##### lineSegments

`object`[]

segments of the line

##### lineLength

`number`

total length of the line

##### visbility

`number`

normalized value of visibility

##### localSpace?

`boolean` = `false`

if true the result will be in local space (default is false)

#### Returns

[`Vector3`](Vector3.md)

world space coordinate of the last visible piece of the line

***

### MeshesToLines()

> `static` **MeshesToLines**(`meshes`, `predicate?`): [`Vector3`](Vector3.md)[][]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L140)

Gets mesh triangles as line positions

#### Parameters

##### meshes

[`AbstractMesh`](AbstractMesh.md)[]

array of meshes

##### predicate?

(`p1`, `p2`, `p3`, `points`, `indiceIndex`, `vertexIndex`, `mesh`, `meshIndex`, `vertices`, `indices`) => [`Vector3`](Vector3.md)[][]

predicate function which decides whether to include the mesh triangle/face in the ouput

#### Returns

[`Vector3`](Vector3.md)[][]

array of arrays of points

***

### OmitDuplicatesPredicate()

> `static` **OmitDuplicatesPredicate**(`p1`, `p2`, `p3`, `points`): [`Vector3`](Vector3.md)[][] \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L102)

Omit duplicate lines predicate for the MeshesToLines function

#### Parameters

##### p1

[`Vector3`](Vector3.md)

point1 position of the face

##### p2

[`Vector3`](Vector3.md)

point2 position of the face

##### p3

[`Vector3`](Vector3.md)

point3 position of the face

##### points

[`Vector3`](Vector3.md)[][]

array of points to search in

#### Returns

[`Vector3`](Vector3.md)[][] \| `null`

original points or null if any edge length is zero

***

### OmitZeroLengthPredicate()

> `static` **OmitZeroLengthPredicate**(`p1`, `p2`, `p3`): [`Vector3`](Vector3.md)[][] \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L77)

Omit zero length lines predicate for the MeshesToLines function

#### Parameters

##### p1

[`Vector3`](Vector3.md)

point1 position of the face

##### p2

[`Vector3`](Vector3.md)

point2 position of the face

##### p3

[`Vector3`](Vector3.md)

point3 position of the face

#### Returns

[`Vector3`](Vector3.md)[][] \| `null`

original points or null if any edge length is zero

***

### PrepareEmptyColorsTexture()

> `static` **PrepareEmptyColorsTexture**(`scene`): [`RawTexture`](RawTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L561)

A minimum size texture for the colors sampler2D when there is no colors texture defined yet.
For fast switching using the useColors property without the need to use defines.

#### Parameters

##### scene

[`Scene`](Scene.md)

Scene

#### Returns

[`RawTexture`](RawTexture.md)

empty colors texture

***

### SegmentizeLineBySegmentCount()

> `static` **SegmentizeLineBySegmentCount**(`what`, `segmentCount`): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L354)

Divides a line into segments.
A segment is a part of the line between it's two points.

#### Parameters

##### what

`number`[] \| [`Vector3`](Vector3.md)[]

line points

##### segmentCount

`number`

number of segments

#### Returns

[`Vector3`](Vector3.md)[]

line point

***

### SegmentizeLineBySegmentLength()

> `static` **SegmentizeLineBySegmentLength**(`what`, `segmentLength`): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L325)

Divides a line into segments.
A segment is a part of the line between it's two points.

#### Parameters

##### what

`number`[] \| [`Vector3`](Vector3.md)[] \| `object`[]

line points

##### segmentLength

`number`

length of each segment of the resulting line (distance between two line points)

#### Returns

[`Vector3`](Vector3.md)[]

line point

***

### SegmentizeSegmentByCount()

> `static` **SegmentizeSegmentByCount**(`point1`, `point2`, `segmentCount`): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L300)

Divides a segment into smaller segments.
A segment is a part of the line between it's two points.

#### Parameters

##### point1

[`Vector3`](Vector3.md)

first point of the line

##### point2

[`Vector3`](Vector3.md)

second point of the line

##### segmentCount

`number`

number of segments we want to have in the divided line

#### Returns

[`Vector3`](Vector3.md)[]

***

### ToNumberArray()

> `static` **ToNumberArray**(`points`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L221)

Gets a number array from a Vector3 array.
You can you for example to convert your Vector3[] offsets to the required number[] for the offsets option.

#### Parameters

##### points

[`Vector3`](Vector3.md)[]

Vector3 array

#### Returns

`number`[]

an array of x, y, z coordinates as numbers [x, y, z, x, y, z, x, y, z, ....]

***

### ToVector3Array()

> `static` **ToVector3Array**(`points`): [`Vector3`](Vector3.md)[] \| [`Vector3`](Vector3.md)[][]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/greasedLineTools.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/greasedLineTools.ts#L193)

Converts number coordinates to Vector3s

#### Parameters

##### points

`number`[] \| `number`[][]

number array of x, y, z, x, y z, ... coordinates

#### Returns

[`Vector3`](Vector3.md)[] \| [`Vector3`](Vector3.md)[][]

Vector3 array
