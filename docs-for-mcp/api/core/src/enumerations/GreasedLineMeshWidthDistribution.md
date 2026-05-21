[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineMeshWidthDistribution

# Enumeration: GreasedLineMeshWidthDistribution

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L51)

How are the widths distributed along the width table
[https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param/greased\_line#widths-and-widthdistribution](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param/greased_line#widths-and-widthdistribution)

## Enumeration Members

### WIDTH\_DISTRIBUTION\_END

> **WIDTH\_DISTRIBUTION\_END**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L71)

Put the widths to the end of the width table and fill the rest with the default width

***

### WIDTH\_DISTRIBUTION\_EVEN

> **WIDTH\_DISTRIBUTION\_EVEN**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L63)

Distribute the widths evenly through the width table

***

### WIDTH\_DISTRIBUTION\_NONE

> **WIDTH\_DISTRIBUTION\_NONE**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L55)

Do no modify the width table

***

### WIDTH\_DISTRIBUTION\_REPEAT

> **WIDTH\_DISTRIBUTION\_REPEAT**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L59)

Repeat the widths until the width table is full

***

### WIDTH\_DISTRIBUTION\_START

> **WIDTH\_DISTRIBUTION\_START**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L67)

Put the widths to start of the width table a fill the rest with the default width

***

### WIDTH\_DISTRIBUTION\_START\_END

> **WIDTH\_DISTRIBUTION\_START\_END**: `5`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L75)

Put the widths to start and to the end of the width table and fill the gap between with the default width
