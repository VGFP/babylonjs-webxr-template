[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineMeshOptions

# Interface: GreasedLineMeshOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L107)

Options for creating a GreasedLineMesh

## Extended by

- [`GreasedLineMeshBuilderOptions`](GreasedLineMeshBuilderOptions.md)

## Properties

### colorPointers?

> `optional` **colorPointers?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L126)

You can manually set the color pointers so you can control which segment/part
will use which color from the colors material option

***

### instance?

> `optional` **instance?**: [`GreasedLineBaseMesh`](../classes/GreasedLineBaseMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L121)

If instance is specified, lines are added to the specified instance.
Defaults to undefined.

***

### lazy?

> `optional` **lazy?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L141)

Use when

#### See

 - instance is specified.
If true, the line will be rendered only after calling instance.updateLazy(). If false, line will be rerendered after every call to
 - CreateGreasedLine
Defaults to false.

***

### points

> **points**: [`GreasedLinePoints`](../type-aliases/GreasedLinePoints.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L111)

Points of the line.

***

### pointsOptions?

> `optional` **pointsOptions?**: [`GreasedLinePointsOptions`](GreasedLinePointsOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L150)

Options for converting the points.

***

### ribbonOptions?

> `optional` **ribbonOptions?**: [`GreasedLineRibbonOptions`](../type-aliases/GreasedLineRibbonOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L146)

The options for the ribbon which will be used as a line.
If this option is set the line switches automatically to a non camera facing mode.

***

### updatable?

> `optional` **updatable?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L135)

If true, offsets and widths are updatable.
Defaults to false.

***

### uvs?

> `optional` **uvs?**: [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L130)

UVs for the mesh

***

### widths?

> `optional` **widths?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L116)

Each line segment (from point to point) can have it's width multiplier. Final width = widths[segmentIdx] * width.
Defaults to empty array.
