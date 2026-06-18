[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLinePluginMaterial

# Class: GreasedLinePluginMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L61)

GreasedLinePluginMaterial for GreasedLineMesh/GreasedLineRibbonMesh.
Use the GreasedLineBuilder.CreateGreasedLineMaterial function to create and instance of this class.

## Extends

- [`MaterialPluginBase`](MaterialPluginBase.md)

## Implements

- [`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md)

## Constructors

### Constructor

> **new GreasedLinePluginMaterial**(`material`, `scene?`, `options?`): `GreasedLinePluginMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L152)

Creates a new instance of the GreasedLinePluginMaterial

#### Parameters

##### material

[`Material`](Material.md)

Base material for the plugin

##### scene?

[`Scene`](Scene.md)

The scene

##### options?

[`GreasedLineMaterialOptions`](../interfaces/GreasedLineMaterialOptions.md)

Plugin options

#### Returns

`GreasedLinePluginMaterial`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`constructor`](MaterialPluginBase.md#constructor)

## Properties

### colorMode

> **colorMode**: [`GreasedLineMeshColorMode`](../enumerations/GreasedLineMeshColorMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L114)

The mixing mode of the color paramater. Default value is GreasedLineMeshColorMode.SET

#### See

GreasedLineMeshColorMode

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`colorMode`](../interfaces/IGreasedLineMaterial.md#colormode)

***

### colorsSampling

> **colorsSampling**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L103)

The type of sampling of the colors texture. The values are the same when using with textures.

***

### colorsTexture

> **colorsTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](RawTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L119)

You can provide a colorsTexture to use instead of one generated from the 'colors' option

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`colorsTexture`](../interfaces/IGreasedLineMaterial.md#colorstexture)

***

### dashOffset

> **dashOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L88)

Dash offset

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`dashOffset`](../interfaces/IGreasedLineMaterial.md#dashoffset)

***

### dashRatio

> **dashRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L93)

Length of the dash. 0 to 1. 0.5 means half empty, half drawn.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`dashRatio`](../interfaces/IGreasedLineMaterial.md#dashratio)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L56)

Specifies if the material plugin should be serialized, `true` to skip serialization

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`doNotSerialize`](MaterialPluginBase.md#donotserialize)

***

### markAllDefinesAsDirty

> `readonly` **markAllDefinesAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L85)

Helper function to mark defines as being dirty.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`markAllDefinesAsDirty`](MaterialPluginBase.md#markalldefinesasdirty)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L33)

Defines the name of the plugin

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`name`](MaterialPluginBase.md#name)

***

### priority

> **priority**: `number` = `500`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L39)

Defines the priority of the plugin. Lower numbers run first.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`priority`](MaterialPluginBase.md#priority)

***

### registerForExtraEvents

> **registerForExtraEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L51)

Indicates that this plugin should be notified for the extra events (HasRenderTargetTextures / FillRenderTargetTextures / HardBindForSubMesh)

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`registerForExtraEvents`](MaterialPluginBase.md#registerforextraevents)

***

### resolveIncludes

> **resolveIncludes**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L45)

Indicates that any #include directive in the plugin code must be replaced by the corresponding code.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`resolveIncludes`](MaterialPluginBase.md#resolveincludes)

***

### useColors

> **useColors**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L76)

Whether to use the colors option to colorize the line

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`useColors`](../interfaces/IGreasedLineMaterial.md#usecolors)

***

### useDash

> **useDash**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L108)

Turns on/off dash mode

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`useDash`](../interfaces/IGreasedLineMaterial.md#usedash)

***

### visibility

> **visibility**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L83)

Normalized value of how much of the line will be visible
0 - 0% of the line will be visible
1 - 100% of the line will be visible

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`visibility`](../interfaces/IGreasedLineMaterial.md#visibility)

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L98)

Line base width. At each point the line width is calculated by widths[pointIndex] * width

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`width`](../interfaces/IGreasedLineMaterial.md#width)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L71)

Force all the greased lines to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### GREASED\_LINE\_MATERIAL\_NAME

> `readonly` `static` **GREASED\_LINE\_MATERIAL\_NAME**: `"GreasedLinePluginMaterial"` = `"GreasedLinePluginMaterial"`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L65)

Plugin name

## Accessors

### color

#### Get Signature

> **get** **color**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L462)

Gets the color of the line

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

#### Set Signature

> **set** **color**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L470)

Sets the color of the line

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

Color3 or null to clear the color. You need to clear the color if you use colors and useColors = true

##### Returns

`void`

Color of the line. Applies to all line segments.
Defaults to White.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`color`](../interfaces/IGreasedLineMaterial.md#color)

***

### colors

#### Get Signature

> **get** **colors**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L377)

Returns the colors used to colorize the line

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)[]\>

#### Set Signature

> **set** **colors**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L384)

Sets the colors used to colorize the line

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)[]\>

##### Returns

`void`

Colors of the line segments.
Defaults to empty.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`colors`](../interfaces/IGreasedLineMaterial.md#colors)

***

### colorsDistributionType

#### Get Signature

> **get** **colorsDistributionType**(): [`GreasedLineMeshColorDistributionType`](../enumerations/GreasedLineMeshColorDistributionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L493)

Gets the color distributiopn type

##### Returns

[`GreasedLineMeshColorDistributionType`](../enumerations/GreasedLineMeshColorDistributionType.md)

#### Set Signature

> **set** **colorsDistributionType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:502](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L502)

Sets the color distribution type

##### See

GreasedLineMeshColorDistributionType

##### Parameters

###### value

[`GreasedLineMeshColorDistributionType`](../enumerations/GreasedLineMeshColorDistributionType.md)

color distribution type

##### Returns

`void`

The method used to distribute the colors along the line.
You can use segment distribution when each segment will use on color from the color table.
Or you can use line distribution when the colors are distributed evenly along the line ignoring the segments.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`colorsDistributionType`](../interfaces/IGreasedLineMaterial.md#colorsdistributiontype)

***

### dashCount

#### Get Signature

> **get** **dashCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L429)

Gets the number of dashes in the line

##### Returns

`number`

#### Set Signature

> **set** **dashCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L436)

Sets the number of dashes in the line

##### Parameters

###### value

`number`

dash

##### Returns

`void`

#### See

GreasedLinePluginMaterial.setDashCount
Number of dashes in the line.
Defaults to 1.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`dashCount`](../interfaces/IGreasedLineMaterial.md#dashcount)

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L285)

##### Returns

`boolean`

***

### resolution

#### Get Signature

> **get** **resolution**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L510)

Gets the resolution

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **resolution**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:518](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L518)

Sets the resolution

##### Parameters

###### value

[`Vector2`](Vector2.md)

resolution of the screen for GreasedLine

##### Returns

`void`

Defaults to engine.getRenderWidth() and engine.getRenderHeight()
Rendering resolution

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`resolution`](../interfaces/IGreasedLineMaterial.md#resolution)

***

### sizeAttenuation

#### Get Signature

> **get** **sizeAttenuation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L445)

If set to true the line will be rendered always with the same width regardless how far it is located from the camera.
Not supported for non camera facing lines.

##### Returns

`boolean`

#### Set Signature

> **set** **sizeAttenuation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L454)

Turn on/off size attenuation of the width option and widths array.
Not supported for non camera facing lines.

##### Parameters

###### value

`boolean`

If set to true the line will be rendered always with the same width regardless how far it is located from the camera.

##### Returns

`void`

If false then width units = scene units. If true then line will width be reduced.
Defaults to false.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`sizeAttenuation`](../interfaces/IGreasedLineMaterial.md#sizeattenuation)

## Methods

### addFallbacks()

> **addFallbacks**(`defines`, `fallbacks`, `currentRank`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L260)

Add fallbacks to the effect fallbacks list.

#### Parameters

##### defines

[`MaterialDefines`](MaterialDefines.md)

defines the Base texture to use.

##### fallbacks

[`EffectFallbacks`](EffectFallbacks.md)

defines the current fallback list.

##### currentRank

`number`

defines the current fallback rank.

#### Returns

`number`

the new fallback rank.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`addFallbacks`](MaterialPluginBase.md#addfallbacks)

***

### bindForSubMesh()

> **bindForSubMesh**(`uniformBuffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L293)

Bind the uniform buffer

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`bindForSubMesh`](MaterialPluginBase.md#bindforsubmesh)

***

### collectDefines()

> **collectDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L185)

Collects all defines.

#### Parameters

##### defines

The object to append to.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`collectDefines`](MaterialPluginBase.md#collectdefines)

***

### copyTo()

> **copyTo**(`plugin`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:624](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L624)

Makes a duplicate of the current configuration into another one.

#### Parameters

##### plugin

[`MaterialPluginBase`](MaterialPluginBase.md)

define the config where to copy the info

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`copyTo`](MaterialPluginBase.md#copyto)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L369)

Disposes the plugin material.

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`dispose`](MaterialPluginBase.md#dispose)

***

### fillRenderTargetTextures()

> **fillRenderTargetTextures**(`_renderTargets`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L239)

Fills the list of render target textures.

#### Parameters

##### \_renderTargets

[`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the list of render targets to update

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`fillRenderTargetTextures`](MaterialPluginBase.md#fillrendertargettextures)

***

### getActiveTextures()

> **getActiveTextures**(`activeTextures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L233)

Get the shader textures

#### Parameters

##### activeTextures

[`BaseTexture`](BaseTexture.md)[]

array which will be filled with the textures

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getActiveTextures`](MaterialPluginBase.md#getactivetextures)

***

### getAnimatables()

> **getAnimatables**(`_animatables`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L251)

Returns the animatable textures.

#### Parameters

##### \_animatables

[`IAnimatable`](../interfaces/IAnimatable.md)[]

Array of animatable textures.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAnimatables`](MaterialPluginBase.md#getanimatables)

***

### getAttributes()

> **getAttributes**(`attributes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L208)

Get the shader attributes

#### Parameters

##### attributes

`string`[]

array which will be filled with the attributes

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAttributes`](MaterialPluginBase.md#getattributes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L349)

Get the class name

#### Returns

`string`

class name

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getClassName`](MaterialPluginBase.md#getclassname)

***

### getCustomCode()

> **getCustomCode**(`shaderType`, `shaderLanguage?`): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L359)

Get shader code

#### Parameters

##### shaderType

`string`

vertex/fragment

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

GLSL or WGSL

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

shader code

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getCustomCode`](MaterialPluginBase.md#getcustomcode)

***

### getSamplers()

> **getSamplers**(`samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L225)

Get the shader samplers

#### Parameters

##### samplers

`string`[]

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getSamplers`](MaterialPluginBase.md#getsamplers)

***

### getUniformBuffersNames()

> **getUniformBuffersNames**(`_ubos`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L282)

Gets the uniform buffers names added by the plugin.

#### Parameters

##### \_ubos

`string`[]

list that the ubo names should be added to.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getUniformBuffersNames`](MaterialPluginBase.md#getuniformbuffersnames)

***

### getUniforms()

> **getUniforms**(`shaderLanguage?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L244)

Get the shader uniforms

#### Parameters

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

The shader language to use

#### Returns

`object`

uniforms

##### fragment

> **fragment**: `string`

##### ubo

> **ubo**: `object`[]

##### vertex

> **vertex**: `string`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getUniforms`](MaterialPluginBase.md#getuniforms)

***

### hardBindForSubMesh()

> **hardBindForSubMesh**(`_uniformBuffer`, `_scene`, `_engine`, `_subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L151)

Binds the material data (this function is called even if mustRebind() returns false)

#### Parameters

##### \_uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

defines the Uniform buffer to fill in.

##### \_scene

[`Scene`](Scene.md)

defines the scene the material belongs to.

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

defines the engine the material belongs to.

##### \_subMesh

[`SubMesh`](SubMesh.md)

the submesh to bind data for

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`hardBindForSubMesh`](MaterialPluginBase.md#hardbindforsubmesh)

***

### hasRenderTargetTextures()

> **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L231)

Gets a boolean indicating that current material needs to register RTT

#### Returns

`boolean`

true if this uses a render target otherwise false.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasRenderTargetTextures`](MaterialPluginBase.md#hasrendertargettextures)

***

### hasTexture()

> **hasTexture**(`_texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L223)

Checks to see if a texture is used in the material.

#### Parameters

##### \_texture

[`BaseTexture`](BaseTexture.md)

Base texture to use.

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasTexture`](MaterialPluginBase.md#hastexture)

***

### isCompatible()

> **isCompatible**(`_shaderLanguage`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L142)

Gets a boolean indicating that the plugin is compatible with a given shader language

#### Parameters

##### \_shaderLanguage

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

The shader language to use

#### Returns

`boolean`

true if the plugin is compatible with the shader language. Return always true since both GLSL and WGSL are supported

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isCompatible`](MaterialPluginBase.md#iscompatible)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`_defines`, `_scene`, `_engine`, `_subMesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L140)

Specifies that the submesh is ready to be used.

#### Parameters

##### \_defines

[`MaterialDefines`](MaterialDefines.md)

the list of "defines" to update.

##### \_scene

[`Scene`](Scene.md)

defines the scene the material belongs to.

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

the engine this scene belongs to.

##### \_subMesh

[`SubMesh`](SubMesh.md)

the submesh to check for readiness

#### Returns

`boolean`

- boolean indicating that the submesh is ready or not.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`isReadyForSubMesh`](MaterialPluginBase.md#isreadyforsubmesh)

***

### parse()

> **parse**(`source`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L563)

Parses a serialized objects

#### Parameters

##### source

`any`

serialized object

##### scene

[`Scene`](Scene.md)

scene

##### rootUrl

`string`

root url for textures

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`parse`](MaterialPluginBase.md#parse)

***

### prepareDefines()

> **prepareDefines**(`defines`, `_scene`, `mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L336)

Prepare the defines

#### Parameters

##### defines

`MaterialGreasedLineDefines`

##### \_scene

[`Scene`](Scene.md)

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`prepareDefines`](MaterialPluginBase.md#preparedefines)

***

### prepareDefinesBeforeAttributes()

> **prepareDefinesBeforeAttributes**(`_defines`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L208)

Sets the defines for the next rendering. Called before PrepareDefinesForAttributes is called.

#### Parameters

##### \_defines

[`MaterialDefines`](MaterialDefines.md)

the list of "defines" to update.

##### \_scene

[`Scene`](Scene.md)

defines the scene to the material belongs to.

##### \_mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh being rendered

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`prepareDefinesBeforeAttributes`](MaterialPluginBase.md#preparedefinesbeforeattributes)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:527](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L527)

Serializes this plugin material

#### Returns

`any`

serializationObjec

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`serialize`](MaterialPluginBase.md#serialize)

***

### setColor()

> **setColor**(`value`, `doNotMarkDirty?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:479](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L479)

Sets the color of the line. If set the whole line will be mixed with this color according to the colorMode option.

#### Parameters

##### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

color

##### doNotMarkDirty?

`boolean` = `false`

if true, the material will not be marked as dirty

#### Returns

`void`

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`setColor`](../interfaces/IGreasedLineMaterial.md#setcolor)

***

### setColors()

> **setColors**(`colors`, `lazy?`, `forceNewTexture?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L394)

Creates or updates the colors texture

#### Parameters

##### colors

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)[]\>

color table RGBA

##### lazy?

`boolean` = `false`

if lazy, the colors are not updated

##### forceNewTexture?

`boolean` = `false`

force creation of a new texture

#### Returns

`void`

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`setColors`](../interfaces/IGreasedLineMaterial.md#setcolors)

***

### updateLazy()

> **updateLazy**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GreasedLine/greasedLinePluginMaterial.pure.ts#L420)

Updates the material. Use when material created in lazy mode.

#### Returns

`void`

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`updateLazy`](../interfaces/IGreasedLineMaterial.md#updatelazy)
