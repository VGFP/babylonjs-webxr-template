[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineMeshBuilderOptions

# Interface: GreasedLineMeshBuilderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L100)

Line mesh options for GreasedLineBuilder

## Extends

- [`GreasedLineMeshOptions`](GreasedLineMeshOptions.md)

## Properties

### colorPointers?

> `optional` **colorPointers?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L126)

You can manually set the color pointers so you can control which segment/part
will use which color from the colors material option

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`colorPointers`](GreasedLineMeshOptions.md#colorpointers)

***

### instance?

> `optional` **instance?**: [`GreasedLineBaseMesh`](../classes/GreasedLineBaseMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L121)

If instance is specified, lines are added to the specified instance.
Defaults to undefined.

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`instance`](GreasedLineMeshOptions.md#instance)

***

### lazy?

> `optional` **lazy?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L141)

Use when

#### See

 - instance is specified.
If true, the line will be rendered only after calling instance.updateLazy(). If false, line will be rerendered after every call to
 - CreateGreasedLine
Defaults to false.

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`lazy`](GreasedLineMeshOptions.md#lazy)

***

### points

> **points**: [`GreasedLinePoints`](../type-aliases/GreasedLinePoints.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L111)

Points of the line.

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`points`](GreasedLineMeshOptions.md#points)

***

### pointsOptions?

> `optional` **pointsOptions?**: [`GreasedLinePointsOptions`](GreasedLinePointsOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L150)

Options for converting the points.

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`pointsOptions`](GreasedLineMeshOptions.md#pointsoptions)

***

### ribbonOptions?

> `optional` **ribbonOptions?**: [`GreasedLineRibbonOptions`](../type-aliases/GreasedLineRibbonOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L146)

The options for the ribbon which will be used as a line.
If this option is set the line switches automatically to a non camera facing mode.

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`ribbonOptions`](GreasedLineMeshOptions.md#ribbonoptions)

***

### updatable?

> `optional` **updatable?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L135)

If true, offsets and widths are updatable.
Defaults to false.

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`updatable`](GreasedLineMeshOptions.md#updatable)

***

### uvs?

> `optional` **uvs?**: [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L130)

UVs for the mesh

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`uvs`](GreasedLineMeshOptions.md#uvs)

***

### widthDistribution?

> `optional` **widthDistribution?**: [`GreasedLineMeshWidthDistribution`](../enumerations/GreasedLineMeshWidthDistribution.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L105)

Distribution of the widths if the width table contains fewer entries than needed. Defaults to GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START

#### See

CompleteGreasedLineWidthTable

***

### widths?

> `optional` **widths?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L116)

Each line segment (from point to point) can have it's width multiplier. Final width = widths[segmentIdx] * width.
Defaults to empty array.

#### Inherited from

[`GreasedLineMeshOptions`](GreasedLineMeshOptions.md).[`widths`](GreasedLineMeshOptions.md#widths)
