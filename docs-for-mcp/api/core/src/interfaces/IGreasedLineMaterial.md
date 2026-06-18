[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGreasedLineMaterial

# Interface: IGreasedLineMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L8)

Interface which defines the available methods for a GreasedLineMaterial

## Properties

### color

> **color**: [`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](../classes/Color3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L72)

Color of the line. Applies to all line segments.
Defaults to White.

***

### colorMode

> **colorMode**: [`GreasedLineMeshColorMode`](../enumerations/GreasedLineMeshColorMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L54)

The mixing mode of the color paramater. Default value is GreasedLineMeshColorMode.SET.
MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.
MATERIAL_TYPE_STANDARD and MATERIAL_TYPE_PBR mixes the color from the base material with the color and/or colors of the greased line material.

#### See

GreasedLineMeshColorMode

***

### colors

> **colors**: [`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](../classes/Color3.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L60)

Colors of the line segments.
Defaults to empty.

***

### colorsDistributionType

> **colorsDistributionType**: [`GreasedLineMeshColorDistributionType`](../enumerations/GreasedLineMeshColorDistributionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L79)

The method used to distribute the colors along the line.
You can use segment distribution when each segment will use on color from the color table.
Or you can use line distribution when the colors are distributed evenly along the line ignoring the segments.

***

### colorsTexture

> **colorsTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](../classes/RawTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L90)

You can provide a colorsTexture to use instead of one generated from the 'colors' option

***

### dashCount

> **dashCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L31)

#### See

GreasedLinePluginMaterial.setDashCount
Number of dashes in the line.
Defaults to 1.

***

### dashOffset

> **dashOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L36)

Dash offset

***

### dashRatio

> **dashRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L41)

Length of the dash. 0 to 1. 0.5 means half empty, half drawn.

***

### resolution

> **resolution**: [`Vector2`](../classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L85)

Defaults to engine.getRenderWidth() and engine.getRenderHeight()
Rendering resolution

***

### sizeAttenuation

> **sizeAttenuation**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L66)

If false then width units = scene units. If true then line will width be reduced.
Defaults to false.

***

### useColors

> **useColors**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L46)

Whether to use the colors option to colorize the line

***

### useDash

> **useDash**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L24)

Turns on/off dash mode

***

### visibility

> **visibility**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L14)

Normalized value of how much of the line will be visible
0 - 0% of the line will be visible
1 - 100% of the line will be visible

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L19)

Line base width. At each point the line width is calculated by widths[pointIndex] * width

## Methods

### setColor()

> **setColor**(`value`, `doNotMarkDirty?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L98)

Allows to change the color without marking the material dirty.
MATERIAL_TYPE_STANDARD and MATERIAL_TYPE_PBR material's shaders will get recompiled if there was no color set and you set a color or when there was a color set and you set it to null.

#### Parameters

##### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](../classes/Color3.md)\>

the color

##### doNotMarkDirty?

`boolean`

the flag

#### Returns

`void`

***

### setColors()

> **setColors**(`colors`, `lazy`, `forceNewTexture?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L106)

Set the colors

#### Parameters

##### colors

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](../classes/Color3.md)[]\>

colors array

##### lazy

`boolean`

if true the colors texture will not be updated

##### forceNewTexture?

`boolean`

forces to create a new colors texture

#### Returns

`void`

***

### updateLazy()

> **updateLazy**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLineMaterialInterfaces.ts#L111)

Creates and sets the colors texture from the colors array which was created in lazy mode

#### Returns

`void`
