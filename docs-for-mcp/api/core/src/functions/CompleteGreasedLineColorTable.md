[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CompleteGreasedLineColorTable

# Function: CompleteGreasedLineColorTable()

> **CompleteGreasedLineColorTable**(`pointCount`, `colors`, `colorDistribution`, `defaultColor`): [`Color3`](../classes/Color3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L422)

Completes the color table/fill the missing color entries. It means it creates a color entry for every point of the line mesh.
You can provide more points the colors when creating the mesh. This function will fill the empty entries.
The algorithm used to fill the empty entries can be
GreasedLineMesColorhDistribution.REPEAT - the color table will be repeatedly copied to the empty values [c1, c2] = [c1, c2, c1, c2, c1, c2, c1, c2]
GreasedLineMesColorhDistribution.EVEN - the color table will be evenly copied to the empty values [c1, c2] = [c1, c1, c1, c1, c2, c2, c2, c2]
GreasedLineMesColorhDistribution.START - the color table will be copied at the start of the empty values
and rest will be filled color the default color value [c1, c2] = [c1, c2, dc, dc, dc, dc, dc, dc]
GreasedLineMesColorhDistribution.START_END - the color table will be copied at the start and the end of the empty values
and rest will be filled color the default color value [c1, c2] = [c1, c2, dc, dc, dc, dc, c1, c2]

## Parameters

### pointCount

`number`

number of points of the line mesh

### colors

[`Color3`](../classes/Color3.md)[]

array of Color3 for the color table

### colorDistribution

[`GreasedLineMeshColorDistribution`](../enumerations/GreasedLineMeshColorDistribution.md)

how to distribute colors if the colors array has fewer entries than pointCount

### defaultColor

[`Color3`](../classes/Color3.md)

default color to be used to fill empty entries in the color table

## Returns

[`Color3`](../classes/Color3.md)[]

completed array of Color3s
