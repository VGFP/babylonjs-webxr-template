[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CompleteGreasedLineWidthTable

# Function: CompleteGreasedLineWidthTable()

> **CompleteGreasedLineWidthTable**(`pointCount`, `widths`, `widthsDistribution`, `defaultWidthUpper?`, `defaultWidthLower?`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L309)

Completes the width table/fills the missing entries. It means it creates a width entry for every point of the line mesh.
You can provide more points the widths when creating the mesh. This function will fill the empty entries.
The algorithm used to fill the empty entries can be
GreasedLineMeshWidthDistribution.REPEAT - the width table will be repeatedly copied to the empty values [wL, wU] = [wL, wU, wL, wU, wL, wU, wL, wU, ...]
GreasedLineMeshWidthDistribution.EVEN - the width table will be evenly copied to the empty values [wL, wU] = [wL, wL, wL, wL, wU, wU, wU, wU]
GreasedLineMeshWidthDistribution.START - the width table will be copied at the start of the empty values
and rest will be filled width the default width upper and default width lower values [wU, wL] = [wL, wU, dwL, dwU, dwL, dwU, dwL, dwU]
GreasedLineMeshWidthDistribution.END - the width table will be copied at the end of the empty values
and rest will be filled width the default values [wL, wU] = [wL, wU, dwL, dwU, dwL, dwU, wL, wU]

## Parameters

### pointCount

`number`

number of points of the line mesh

### widths

`number`[]

array of widths [widhtLower, widthUpper, widthLower, widthUpper ...]. Two widths (lower/upper) per point.

### widthsDistribution

[`GreasedLineMeshWidthDistribution`](../enumerations/GreasedLineMeshWidthDistribution.md)

how to distribute widths if the widths array has fewer entries than pointCount

### defaultWidthUpper?

`number` = `1`

the default value which will be used to fill empty width entries - upper width

### defaultWidthLower?

`number` = `1`

the default value which will be used to fill empty width entries - lower width

## Returns

`number`[]

completed width table.
