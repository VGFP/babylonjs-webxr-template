[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GaussianSplattingDebugMaterialPlugin

# Class: GaussianSplattingDebugMaterialPlugin

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L82)

Debug plugin for GaussianSplattingMaterial.
Provides runtime controls for clipping, opacity/size culling, opacity scaling,
opacity saturation, and per-SH-order toggling. All features are gated behind
the GS_DBG_ENABLED shader define — when every option is at its default value
the define is absent and the shader compiles to identical code as without the plugin.

In compound mode (partCount \> 0), per-part overrides can be set via setPartOptions().
Global settings act as defaults; per-part settings override them for that part index.

## Extends

- [`MaterialPluginBase`](MaterialPluginBase.md)

## Constructors

### Constructor

> **new GaussianSplattingDebugMaterialPlugin**(`material`): `GaussianSplattingDebugMaterialPlugin`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L119)

Creates a new GaussianSplattingDebugMaterialPlugin.

#### Parameters

##### material

[`GaussianSplattingMaterial`](GaussianSplattingMaterial.md)

The GaussianSplattingMaterial to attach the plugin to.

#### Returns

`GaussianSplattingDebugMaterialPlugin`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`constructor`](MaterialPluginBase.md#constructor)

## Properties

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

## Accessors

### clippingBox

#### Get Signature

> **get** **clippingBox**(): [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L265)

World-space axis-aligned clipping box. Splats outside are not rendered.
Set to null to disable clipping.
Example: `{ min: new Vector3(-2,-2,-2), max: new Vector3(2,2,2) }`

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}\>

#### Set Signature

> **set** **clippingBox**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L268)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}\>

##### Returns

`void`

***

### opacityCulling

#### Get Signature

> **get** **opacityCulling**(): [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L277)

Opacity culling range [0..1]. Splats whose stored opacity falls outside this
range are not rendered. Set to null to disable.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

#### Set Signature

> **set** **opacityCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L280)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

##### Returns

`void`

***

### opacitySaturate

#### Get Signature

> **get** **opacitySaturate**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L314)

When true, replaces the Gaussian spatial falloff with a flat uniform opacity,
making each splat appear as a solid disk with its raw alpha value.

##### Returns

`boolean`

#### Set Signature

> **set** **opacitySaturate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L317)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### opacityScale

#### Get Signature

> **get** **opacityScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L302)

Scalar multiplier applied to every splat's opacity after all other modifiers.
1.0 (default) = no change.

##### Returns

`number`

#### Set Signature

> **set** **opacityScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L305)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### partCount

#### Get Signature

> **get** **partCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L172)

Number of parts in compound mode. Set automatically by GaussianSplattingDebugger.addMesh().
When 0 (non-compound), setPartOptions() logs an error.

##### Returns

`number`

the part count

#### Set Signature

> **set** **partCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L175)

##### Parameters

###### count

`number`

##### Returns

`void`

***

### shDc

#### Get Signature

> **get** **shDc**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L323)

Include the DC (base) color from colorsTexture. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shDc**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L326)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder1

#### Get Signature

> **get** **shOrder1**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L332)

Include SH band 1 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder1**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L335)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder2

#### Get Signature

> **get** **shOrder2**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L341)

Include SH band 2 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder2**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L344)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder3

#### Get Signature

> **get** **shOrder3**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L350)

Include SH band 3 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder3**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L353)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder4

#### Get Signature

> **get** **shOrder4**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L359)

Include SH band 4 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder4**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L362)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### sizeCulling

#### Get Signature

> **get** **sizeCulling**(): [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L290)

Size culling range. Size is pow(|det(Σ)|, 1/6) of the 3D covariance matrix,
equal to the geometric mean of the principal radii. Use GaussianSplattingMeshBase.splatSizeRange
to find the asset's range. Set to null to disable.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

#### Set Signature

> **set** **sizeCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L293)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

##### Returns

`void`

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

> **bindForSubMesh**(`_uniformBuffer`, `_scene`, `_engine`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L777)

Binds uniform values each frame. Scalar uniforms are uploaded for non-compound mode;
the per-part data texture is updated and bound for compound mode.

#### Parameters

##### \_uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

unused

##### \_scene

[`Scene`](Scene.md)

the current scene

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

unused

##### subMesh

[`SubMesh`](SubMesh.md)

the submesh being rendered

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`bindForSubMesh`](MaterialPluginBase.md#bindforsubmesh)

***

### clearPartOptions()

> **clearPartOptions**(`partIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L231)

Clears all per-part debug overrides for the given part index,
falling back to global settings.

#### Parameters

##### partIndex

`number`

The zero-based part index.

#### Returns

`void`

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L302)

Makes a duplicate of the current configuration into another one.

#### Parameters

##### plugin

[`MaterialPluginBase`](MaterialPluginBase.md)

define the config where to copy the info

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`copyTo`](MaterialPluginBase.md#copyto)

***

### dispose()

> **dispose**(`_forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:815](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L815)

Disposes the per-part data texture.

#### Parameters

##### \_forceDisposeTextures?

`boolean`

unused; the LUT texture is always disposed as it is owned by this plugin

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

> **getActiveTextures**(`_activeTextures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L245)

Returns an array of the actively used textures.

#### Parameters

##### \_activeTextures

[`BaseTexture`](BaseTexture.md)[]

Array of BaseTextures

#### Returns

`void`

#### Inherited from

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

> **getAttributes**(`_attributes`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L276)

Gets the attributes used by the plugin.

#### Parameters

##### \_attributes

`string`[]

list that the attribute names should be added to.

##### \_scene

[`Scene`](Scene.md)

the scene that the material belongs to.

##### \_mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh being rendered.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAttributes`](MaterialPluginBase.md#getattributes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L378)

#### Returns

`string`

the class name of this plugin

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getClassName`](MaterialPluginBase.md#getclassname)

***

### getCustomCode()

> **getCustomCode**(`shaderType`, `shaderLanguage?`): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L435)

Returns shader code injections for the debug features.

#### Parameters

##### shaderType

`string`

"vertex" or "fragment"

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

GLSL or WGSL

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

map of injection-point name to injected code, or null

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getCustomCode`](MaterialPluginBase.md#getcustomcode)

***

### getSamplers()

> **getSamplers**(`samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L373)

Adds the per-part debug data texture name to the sampler list so the effect can bind it.

#### Parameters

##### samplers

`string`[]

the sampler list to populate

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

> **getUniforms**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L685)

Declares the non-compound scalar debug uniform names as external so the Effect can
resolve their locations. WGSL uniforms are declared inline in getCustomCode() injections.

#### Returns

`object`

uniform descriptor with externalUniforms list

##### externalUniforms?

> `optional` **externalUniforms?**: `string`[]

##### fragment?

> `optional` **fragment?**: `string`

##### ubo?

> `optional` **ubo?**: `object`[]

##### vertex?

> `optional` **vertex?**: `string`

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

> **isCompatible**(`shaderLanguage`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L386)

#### Parameters

##### shaderLanguage

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

the shader language to check

#### Returns

`boolean`

true for GLSL and WGSL

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isCompatible`](MaterialPluginBase.md#iscompatible)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`_defines`, `_scene`, `_engine`, `_subMesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L404)

Always ready — no async resources.

#### Parameters

##### \_defines

[`MaterialDefines`](MaterialDefines.md)

unused

##### \_scene

[`Scene`](Scene.md)

unused

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

unused

##### \_subMesh

[`SubMesh`](SubMesh.md)

unused

#### Returns

`boolean`

true

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isReadyForSubMesh`](MaterialPluginBase.md#isreadyforsubmesh)

***

### parse()

> **parse**(`source`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L320)

Parses a plugin configuration from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](Scene.md)

Defines the scene we are parsing for

##### rootUrl

`string`

Defines the rootUrl to load from

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`parse`](MaterialPluginBase.md#parse)

***

### prepareDefines()

> **prepareDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L415)

Sets shader defines from current property state. GS_DBG_ENABLED is set to true
only when at least one feature is non-default, ensuring zero overhead otherwise.
Sub-flags also check per-part arrays so compound-only overrides activate the correct
code paths even when the global setting is at its default.

#### Parameters

##### defines

`GaussianSplattingDebugDefines`

the defines object

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L310)

Serializes this plugin configuration.

#### Returns

`any`

- An object with the serialized config.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`serialize`](MaterialPluginBase.md#serialize)

***

### setPartOptions()

> **setPartOptions**(`partIndex`, `options`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingDebugMaterialPlugin.pure.ts#L188)

Sets per-part debug overrides for the given part index.
Only valid on compound meshes (partCount \> 0); logs an error otherwise.

#### Parameters

##### partIndex

`number`

The zero-based part index.

##### options

`Partial`\<[`IGaussianSplattingDebugOptions`](../interfaces/IGaussianSplattingDebugOptions.md)\>

Partial set of debug options to override for this part.

#### Returns

`void`
