[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineMaterialBuilderOptions

# Interface: GreasedLineMaterialBuilderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L82)

Material options for GreasedLineBuilder

## Extends

- [`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md)

## Properties

### cameraFacing?

> `optional` **cameraFacing?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L266)

Whether to use camera facing for the line.
Defaults to true.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`cameraFacing`](GreasedLineMaterialOptions.md#camerafacing)

***

### color?

> `optional` **color?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L199)

Color of the line. Applies to all line segments.
Defaults to White.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`color`](GreasedLineMaterialOptions.md#color)

***

### colorDistribution?

> `optional` **colorDistribution?**: [`GreasedLineMeshColorDistribution`](../enumerations/GreasedLineMeshColorDistribution.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L93)

Distribution of the colors if the color table contains fewer entries than needed. Defaults to GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_START

#### See

CompleteGreasedLineColorTable

***

### colorDistributionType?

> `optional` **colorDistributionType?**: [`GreasedLineMeshColorDistributionType`](../enumerations/GreasedLineMeshColorDistributionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L226)

The method used to distribute the colors along the line.
You can use segment distribution when each segment will use on color from the color table.
Or you can use line distribution when the colors are distributed evenly along the line ignoring the segments.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`colorDistributionType`](GreasedLineMaterialOptions.md#colordistributiontype)

***

### colorMode?

> `optional` **colorMode?**: [`GreasedLineMeshColorMode`](../enumerations/GreasedLineMeshColorMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L205)

Color mode of the line. Applies to all line segments.
The pixel color from the material shader will be modified with the value of

#### See

 - color using the colorMode.
Defaults to
 - GreasedLineMeshColorMode.SET

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`colorMode`](GreasedLineMaterialOptions.md#colormode)

***

### colors?

> `optional` **colors?**: [`Color3`](../classes/Color3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L210)

Colors of the line segments.
Defaults to empty.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`colors`](GreasedLineMaterialOptions.md#colors)

***

### colorsSampling?

> `optional` **colorsSampling?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L220)

Sampling type of the colors texture
Defaults to NEAREST_NEAREST.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`colorsSampling`](GreasedLineMaterialOptions.md#colorssampling)

***

### colorsTexture?

> `optional` **colorsTexture?**: [`RawTexture`](../classes/RawTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L270)

You can provide a colorsTexture to use instead of one generated from the 'colors' option

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`colorsTexture`](GreasedLineMaterialOptions.md#colorstexture)

***

### createAndAssignMaterial?

> `optional` **createAndAssignMaterial?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/greasedLineBuilder.ts#L88)

If set to true a new material will be created and a new material plugin will be attached
to the material. The material will be set on the mesh. If the instance option is specified in the mesh options,
no material will be created/assigned. Defaults to true.

***

### dashCount?

> `optional` **dashCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L237)

#### See

GreasedLinePluginMaterial.setDashCount
Number of dashes in the line.
Defaults to 1.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`dashCount`](GreasedLineMaterialOptions.md#dashcount)

***

### dashOffset?

> `optional` **dashOffset?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L243)

Offset of the dashes along the line. 0 to 1.
Defaults to 0.

#### See

GreasedLinePluginMaterial.setDashOffset

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`dashOffset`](GreasedLineMaterialOptions.md#dashoffset)

***

### dashRatio?

> `optional` **dashRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L249)

Length of the dash. 0 to 1. 0.5 means half empty, half drawn.
Defaults to 0.5.

#### See

GreasedLinePluginMaterial.setDashRatio

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`dashRatio`](GreasedLineMaterialOptions.md#dashratio)

***

### forceGLSL?

> `optional` **forceGLSL?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L179)

Force the greased lines to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`forceGLSL`](GreasedLineMaterialOptions.md#forceglsl)

***

### materialType?

> `optional` **materialType?**: [`GreasedLineMeshMaterialType`](../enumerations/GreasedLineMeshMaterialType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L194)

Type of the material to use to render the line.
Defaults to StandardMaterial.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`materialType`](GreasedLineMaterialOptions.md#materialtype)

***

### resolution?

> `optional` **resolution?**: [`Vector2`](../classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L261)

Defaults to engine.getRenderWidth() and engine.getRenderHeight()
Rendering resolution

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`resolution`](GreasedLineMaterialOptions.md#resolution)

***

### sizeAttenuation?

> `optional` **sizeAttenuation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L189)

If false then width units = scene units. If true then line will width be reduced.
Defaults to false.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`sizeAttenuation`](GreasedLineMaterialOptions.md#sizeattenuation)

***

### useColors?

> `optional` **useColors?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L215)

If true,

#### See

colors are used, otherwise they're ignored.
Defaults to false.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`useColors`](GreasedLineMaterialOptions.md#usecolors)

***

### useDash?

> `optional` **useDash?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L231)

If true, dashing is used.
Defaults to false.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`useDash`](GreasedLineMaterialOptions.md#usedash)

***

### visibility?

> `optional` **visibility?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L256)

Sets the line length visibility.
0 - 0% of the line will be visible.
1 - 100% of the line will be visible.

#### See

GreasedLinePluginMaterial.setVisibility

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`visibility`](GreasedLineMaterialOptions.md#visibility)

***

### width?

> `optional` **width?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L184)

Line width. If sizeAttenuation os false scene units will be used for width.
Defaults to 0.1 if

#### See

sizeAttenuation is false, or to 1 if it's true.

#### Inherited from

[`GreasedLineMaterialOptions`](GreasedLineMaterialOptions.md).[`width`](GreasedLineMaterialOptions.md#width)
