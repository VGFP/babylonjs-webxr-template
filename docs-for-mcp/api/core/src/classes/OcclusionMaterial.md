[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OcclusionMaterial

# Class: OcclusionMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Occlusion/occlusionMaterial.pure.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Occlusion/occlusionMaterial.pure.ts#L11)

**`Since`**

A material to use for fast depth-only rendering.
 5.0.0

## Extends

- [`ShaderMaterial`](ShaderMaterial.md)

## Constructors

### Constructor

> **new OcclusionMaterial**(`name`, `scene`): `OcclusionMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Occlusion/occlusionMaterial.pure.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Occlusion/occlusionMaterial.pure.ts#L12)

#### Parameters

##### name

`string`

##### scene

[`Scene`](Scene.md)

#### Returns

`OcclusionMaterial`

#### Overrides

[`ShaderMaterial`](ShaderMaterial.md).[`constructor`](ShaderMaterial.md#constructor)

## Properties

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L258)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`allowShaderHotSwapping`](ShaderMaterial.md#allowshaderhotswapping)

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L565)

Stores the animations for the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`animations`](ShaderMaterial.md#animations)

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L339)

Specifies if the ready state should be checked on each call

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`checkReadyOnEveryCall`](ShaderMaterial.md#checkreadyoneverycall)

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L345)

Specifies if the ready state should be checked once

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`checkReadyOnlyOnce`](ShaderMaterial.md#checkreadyonlyonce)

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:877](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L877)

Gets or sets the active clipplane 1

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane`](ShaderMaterial.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:882](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L882)

Gets or sets the active clipplane 2

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane2`](ShaderMaterial.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:887](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L887)

Gets or sets the active clipplane 3

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane3`](ShaderMaterial.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:892](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L892)

Gets or sets the active clipplane 4

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane4`](ShaderMaterial.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L897)

Gets or sets the active clipplane 5

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane5`](ShaderMaterial.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L902)

Gets or sets the active clipplane 6

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane6`](ShaderMaterial.md#clipplane6)

***

### customShaderNameResolve

> **customShaderNameResolve**: (`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`, `options?`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L238)

Custom callback helping to override the default shader used in the material.

#### Parameters

##### shaderName

`string`

##### uniforms

`string`[]

##### uniformBuffers

`string`[]

##### samplers

`string`[]

##### defines

`string`[] \| [`MaterialDefines`](MaterialDefines.md)

##### attributes?

`string`[]

##### options?

[`ICustomShaderNameResolveOptions`](../interfaces/ICustomShaderNameResolveOptions.md)

#### Returns

`string`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`customShaderNameResolve`](ShaderMaterial.md#customshadernameresolve)

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L764)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`depthFunction`](ShaderMaterial.md#depthfunction)

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L752)

Specifies if color writing should be disabled

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`disableColorWrite`](ShaderMaterial.md#disablecolorwrite)

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L746)

Specifies if depth writing should be disabled

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`disableDepthWrite`](ShaderMaterial.md#disabledepthwrite)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L555)

Specifies if the material should be serialized

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`doNotSerialize`](ShaderMaterial.md#donotserialize)

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L758)

Specifies if depth writing should be forced

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`forceDepthWrite`](ShaderMaterial.md#forcedepthwrite)

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L541)

Callback triggered to get the render target textures

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getRenderTargetTextures`](ShaderMaterial.md#getrendertargettextures)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L304)

The ID of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`id`](ShaderMaterial.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L372)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`inspectableCustomProperties`](ShaderMaterial.md#inspectablecustomproperties)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L325)

Gets or sets user defined metadata

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`metadata`](ShaderMaterial.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L319)

The name of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`name`](ShaderMaterial.md#name)

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L531)

Callback triggered when the material is compiled

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onCompiled`](ShaderMaterial.md#oncompiled)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L570)

An event triggered when the material is disposed

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onDisposeObservable`](ShaderMaterial.md#ondisposeobservable)

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L536)

Callback triggered when an error occurs

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onError`](ShaderMaterial.md#onerror)

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

Plugin manager for this material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`pluginManager`](ShaderMaterial.md#pluginmanager)

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L800)

Stores the size of points

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`pointSize`](ShaderMaterial.md#pointsize)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L333)

For internal use only. Please do not use.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`reservedDataStore`](ShaderMaterial.md#reserveddatastore)

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L770)

Specifies if there should be a separate pass for culling

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`separateCullingPass`](ShaderMaterial.md#separatecullingpass)

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L251)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`shadowDepthWrapper`](ShaderMaterial.md#shadowdepthwrapper)

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L526)

Stores the value for side orientation

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`sideOrientation`](ShaderMaterial.md#sideorientation)

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L169)

Snippet ID if the material was created from the snippet server

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`snippetId`](ShaderMaterial.md#snippetid)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L351)

The state of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`state`](ShaderMaterial.md#state)

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L907)

Gives access to the stencil properties of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`stencil`](ShaderMaterial.md#stencil)

***

### textureRepetitionHexTilingParams

> **textureRepetitionHexTilingParams**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L459)

Parameters for the hex tiling texture repetition mode (TEXTURE_REPETITION_HEX_TILING).
x = rotation strength (0..1, default 1.0) — how much each hex tile is rotated.
y = fall-off contrast (0..1, default 0.6) — how much luminance affects blending weight at tile borders.
z = exponent (1..20, default 7.0) — controls the sharpness of weight falloff between tiles.
w = contrast (0..1, default 0.5) — boost blending contrast via Gain3 (0.5 = neutral, &gt;0.5 = higher contrast).

#### See

https://jcgt.org/published/0011/03/05/

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`textureRepetitionHexTilingParams`](ShaderMaterial.md#texturerepetitionhextilingparams)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L310)

Gets or sets the unique id of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`uniqueId`](ShaderMaterial.md#uniqueid)

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:806](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L806)

Stores the z offset Factor value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`zOffset`](ShaderMaterial.md#zoffset)

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L812)

Stores the z offset Units value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`zOffsetUnits`](ShaderMaterial.md#zoffsetunits)

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L173)

The all dirty flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`AllDirtyFlag`](ShaderMaterial.md#alldirtyflag)

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L158)

The dirty attribute flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`AttributesDirtyFlag`](ShaderMaterial.md#attributesdirtyflag)

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L128)

Stores the clock-wise side orientation

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ClockWiseSideOrientation`](ShaderMaterial.md#clockwisesideorientation)

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L133)

Stores the counter clock-wise side orientation

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`CounterClockWiseSideOrientation`](ShaderMaterial.md#counterclockwisesideorientation)

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L233)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ForceVertexOutputInvariant`](ShaderMaterial.md#forcevertexoutputinvariant)

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L153)

The dirty fresnel flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`FresnelDirtyFlag`](ShaderMaterial.md#fresneldirtyflag)

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L138)

The dirty image processing flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ImageProcessingDirtyFlag`](ShaderMaterial.md#imageprocessingdirtyflag)

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L148)

The dirty light flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LightDirtyFlag`](ShaderMaterial.md#lightdirtyflag)

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L217)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LIGHTFALLOFF_GLTF`](ShaderMaterial.md#lightfalloff_gltf)

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L211)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LIGHTFALLOFF_PHYSICAL`](ShaderMaterial.md#lightfalloff_physical)

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L223)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LIGHTFALLOFF_STANDARD`](ShaderMaterial.md#lightfalloff_standard)

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L107)

Returns the line list draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LineListDrawMode`](ShaderMaterial.md#linelistdrawmode)

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L111)

Returns the line loop draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LineLoopDrawMode`](ShaderMaterial.md#lineloopdrawmode)

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L115)

Returns the line strip draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LineStripDrawMode`](ShaderMaterial.md#linestripdrawmode)

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L188)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_ALPHABLEND`](ShaderMaterial.md#material_alphablend)

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L183)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_ALPHATEST`](ShaderMaterial.md#material_alphatest)

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L194)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_ALPHATESTANDBLEND`](ShaderMaterial.md#material_alphatestandblend)

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L206)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_RNM`](ShaderMaterial.md#material_normalblendmethod_rnm)

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L200)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_WHITEOUT`](ShaderMaterial.md#material_normalblendmethod_whiteout)

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L178)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_OPAQUE`](ShaderMaterial.md#material_opaque)

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L163)

The dirty misc flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MiscDirtyFlag`](ShaderMaterial.md#miscdirtyflag)

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L228)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`OnEventObservable`](ShaderMaterial.md#oneventobservable)

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L99)

Returns the point fill mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`PointFillMode`](ShaderMaterial.md#pointfillmode)

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L103)

Returns the point list draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`PointListDrawMode`](ShaderMaterial.md#pointlistdrawmode)

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L168)

The dirty prepass flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`PrePassDirtyFlag`](ShaderMaterial.md#prepassdirtyflag)

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L166)

Define the Url to load snippets

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`SnippetUrl`](ShaderMaterial.md#snippeturl)

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L143)

The dirty texture flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TextureDirtyFlag`](ShaderMaterial.md#texturedirtyflag)

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L123)

Returns the triangle fan draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TriangleFanDrawMode`](ShaderMaterial.md#trianglefandrawmode)

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L91)

Returns the triangle fill mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TriangleFillMode`](ShaderMaterial.md#trianglefillmode)

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L119)

Returns the triangle strip draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TriangleStripDrawMode`](ShaderMaterial.md#trianglestripdrawmode)

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L95)

Returns the wireframe mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`WireFrameFillMode`](ShaderMaterial.md#wireframefillmode)

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L394)

Gets the alpha value of the material

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L377)

Sets the alpha value of the material

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`alpha`](ShaderMaterial.md#alpha)

***

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L685)

Gets the value of the alpha mode

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:674](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L674)

Sets the value of the alpha mode.

| Value | Type | Description |
| --- | --- | --- |
| 0 | ALPHA_DISABLE |  |
| 1 | ALPHA_ADD | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + DEST, ALPHA=DEST_ALPHA |
| 2 | ALPHA_COMBINE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 3 | ALPHA_SUBTRACT | Defines that alpha blending is COLOR=(1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 4 | ALPHA_MULTIPLY | Defines that alpha blending is COLOR=DEST * SRC, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 5 | ALPHA_MAXIMIZED | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 6 | ALPHA_ONEONE | Defines that alpha blending is COLOR=SRC + DEST, ALPHA=DEST_ALPHA |
| 7 | ALPHA_PREMULTIPLIED | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 8 | ALPHA_PREMULTIPLIED_PORTERDUFF | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 9 | ALPHA_INTERPOLATE | Defines that alpha blending is COLOR=CST * SRC + (1 - CST) * DEST, ALPHA=CST_ALPHA * SRC + (1 - CST_ALPHA) * DEST_ALPHA |
| 10 | ALPHA_SCREENMODE | Defines that alpha blending is COLOR=SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 11 | ALPHA_ONEONE_ONEONE | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 12 | ALPHA_ALPHATOCOLOR | Defines that alpha blending is COLOR=DEST_ALPHA * SRC + DST, ALPHA=0 |
| 13 | ALPHA_REVERSEONEMINUS | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=(1 - DEST_ALPHA) * SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 14 | ALPHA_SRC_DSTONEMINUSSRCALPHA | Defines that alpha blending is ALPHA=SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC ALPHA) * DEST_ALPHA |
| 15 | ALPHA_ONEONE_ONEZERO | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA |
| 16 | ALPHA_EXCLUSION | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=DEST_ALPHA |
| 17 | ALPHA_LAYER_ACCUMULATE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 18 | ALPHA_MIN | Defines that alpha blending is COLOR=MIN(SRC, DEST), ALPHA=MIN(SRC_ALPHA, DEST_ALPHA) |
| 19 | ALPHA_MAX | Defines that alpha blending is COLOR=MAX(SRC, DEST), ALPHA=MAX(SRC_ALPHA, DEST_ALPHA) |
| 20 | ALPHA_DUAL_SRC0_ADD_SRC1xDST | Defines that alpha blending uses dual source blending and is COLOR=SRC + SRC1 * DEST, ALPHA=DST_ALPHA |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`alphaMode`](ShaderMaterial.md#alphamode)

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L692)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`alphaModes`](ShaderMaterial.md#alphamodes)

***

### backFaceCulling

#### Get Signature

> **get** **backFaceCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L418)

Gets the culling state

##### Returns

`boolean`

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L407)

Sets the culling state (true to enable culling, false to disable)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`backFaceCulling`](ShaderMaterial.md#backfaceculling)

***

### blockDirtyMechanism

#### Get Signature

> **get** **blockDirtyMechanism**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L491)

Block the dirty-mechanism for this specific material
When set to false after being true the material will be marked as dirty.

##### Returns

`boolean`

#### Set Signature

> **set** **blockDirtyMechanism**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L495)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`blockDirtyMechanism`](ShaderMaterial.md#blockdirtymechanism)

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L356)

If the material can be rendered to several textures with MRT extension

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`canRenderToMRT`](ShaderMaterial.md#canrendertomrt)

***

### cullBackFaces

#### Get Signature

> **get** **cullBackFaces**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L481)

Gets the type of faces that should be culled

##### Returns

`boolean`

#### Set Signature

> **set** **cullBackFaces**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L470)

Sets the type of faces that should be culled (true for back faces, false for front faces)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`cullBackFaces`](ShaderMaterial.md#cullbackfaces)

***

### fillMode

#### Get Signature

> **get** **fillMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:858](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L858)

Gets the material fill mode

##### Returns

`number`

#### Set Signature

> **set** **fillMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:865](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L865)

Sets the material fill mode

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`fillMode`](ShaderMaterial.md#fillmode)

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:792](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L792)

Gets the value of the fog enabled state

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:781](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L781)

Sets the state for enabling fog

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`fogEnabled`](ShaderMaterial.md#fogenabled)

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L546)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`hasRenderTargetTextures`](ShaderMaterial.md#hasrendertargettextures)

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1158)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isFrozen`](ShaderMaterial.md#isfrozen)

***

### isMultiview

#### Get Signature

> **get** **isMultiview**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L229)

is multiview set to true?

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isMultiview`](ShaderMaterial.md#ismultiview)

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L738)

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isPrePassCapable`](ShaderMaterial.md#isprepasscapable)

***

### isVertexOutputInvariant

#### Get Signature

> **get** **isVertexOutputInvariant**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:942](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L942)

Gets or sets the vertex output invariant state
Setting this property to true will force the shader compiler to disable some optimization to make sure the vertex output is always calculated
the same way across different compilation units.
You may need to enable this option if you are seeing some depth artifacts when using a depth pre-pass, for e.g.
Note that this may have an impact on performance, so leave this option disabled if not needed.

##### Returns

`boolean`

#### Set Signature

> **set** **isVertexOutputInvariant**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:946](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L946)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isVertexOutputInvariant`](ShaderMaterial.md#isvertexoutputinvariant)

***

### needDepthPrePass

#### Get Signature

> **get** **needDepthPrePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:731](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L731)

Gets the depth pre-pass value

##### Returns

`boolean`

#### Set Signature

> **set** **needDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:718](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L718)

Sets the need depth pre-pass value

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`needDepthPrePass`](ShaderMaterial.md#needdepthprepass)

***

### onBind

#### Set Signature

> **set** **onBind**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L609)

Called during a bind event

##### Parameters

###### callback

(`Mesh`) => `void`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onBind`](ShaderMaterial.md#onbind)

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L593)

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onBindObservable`](ShaderMaterial.md#onbindobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L581)

Called during a dispose event

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onDispose`](ShaderMaterial.md#ondispose)

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L632)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onEffectCreatedObservable`](ShaderMaterial.md#oneffectcreatedobservable)

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L619)

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onUnBindObservable`](ShaderMaterial.md#onunbindobservable)

***

### options

#### Get Signature

> **get** **options**(): [`IShaderMaterialOptions`](../interfaces/IShaderMaterialOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L222)

Gets the options used to compile the shader.
They can be modified to trigger a new compilation

##### Returns

[`IShaderMaterialOptions`](../interfaces/IShaderMaterialOptions.md)

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`options`](ShaderMaterial.md#options)

***

### pointsCloud

#### Get Signature

> **get** **pointsCloud**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:837](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L837)

Gets the value specifying if point clouds are enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pointsCloud**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L850)

Sets the state of point cloud mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`pointsCloud`](ShaderMaterial.md#pointscloud)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L296)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`shaderLanguage`](ShaderMaterial.md#shaderlanguage)

***

### shaderPath

#### Get Signature

> **get** **shaderPath**(): `string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L206)

Gets the shader path used to define the shader code
It can be modified to trigger a new compilation

##### Returns

`string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

#### Set Signature

> **set** **shaderPath**(`shaderPath`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L214)

Sets the shader path used to define the shader code
It can be modified to trigger a new compilation

##### Parameters

###### shaderPath

`string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`shaderPath`](ShaderMaterial.md#shaderpath)

***

### textureRepetitionMode

#### Get Signature

> **get** **textureRepetitionMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L446)

Gets the texture repetition breaking mode.

##### See

https://iquilezles.org/articles/texturerepetition/

##### Returns

`number`

#### Set Signature

> **set** **textureRepetitionMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L433)

Sets the texture repetition breaking mode.
Use one of the Constants.TEXTURE_REPETITION_* values to break visible texture tiling patterns.
Ordered by cost: NONE (1 fetch), NOISE_BLEND (3), HEX_TILING (3), TILE_RANDOMIZATION (4), VORONOI_BOMBING (9).
Not supported on WebGL1 — the mode will be forced to NONE.

##### See

 - https://iquilezles.org/articles/texturerepetition/
 - https://jcgt.org/published/0011/03/05/

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`textureRepetitionMode`](ShaderMaterial.md#texturerepetitionmode)

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1255)

Gets the current transparency mode.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1270)

Sets the transparency mode of the material.

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | OPAQUE                              |             |
| 1     | ALPHATEST                           |             |
| 2     | ALPHABLEND                          |             |
| 3     | ALPHATESTANDBLEND                   |             |

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`transparencyMode`](ShaderMaterial.md#transparencymode)

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L917)

In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
You can try switching to logarithmic depth.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:921](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L921)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`useLogarithmicDepth`](ShaderMaterial.md#uselogarithmicdepth)

***

### useVertexPulling

#### Get Signature

> **get** **useVertexPulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L270)

Tells the engine to draw geometry using vertex pulling instead of index drawing. This will automatically
set the vertex buffers as storage buffers and make them accessible to the vertex shader (WebGPU only).

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexPulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L274)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`useVertexPulling`](ShaderMaterial.md#usevertexpulling)

***

### wireframe

#### Get Signature

> **get** **wireframe**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L814)

##### Returns

`boolean`

#### Set Signature

> **set** **wireframe**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:829](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L829)

Sets the state of wireframe mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`wireframe`](ShaderMaterial.md#wireframe)

## Methods

### atomicMaterialsUpdate()

> **atomicMaterialsUpdate**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L513)

This allows you to modify the material without marking it as dirty after every change.
This function should be used if you need to make more than one dirty-enabling change to the material - adding a texture, setting a new fill mode and so on.
The callback will pass the material as an argument, so you can make your changes to it.

#### Parameters

##### callback

(`material`) => `void`

the callback to be executed that will update the material

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`atomicMaterialsUpdate`](ShaderMaterial.md#atomicmaterialsupdate)

***

### bind()

> **bind**(`world`, `mesh?`, `effectOverride?`, `subMesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1042](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1042)

Binds the material to the mesh

#### Parameters

##### world

[`Matrix`](Matrix.md)

defines the world transformation matrix

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to bind the material to

##### effectOverride?

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

If provided, use this effect instead of internal effect

##### subMesh?

[`SubMesh`](SubMesh.md)

defines the submesh to bind the material to

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`bind`](ShaderMaterial.md#bind)

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1507)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view matrix to

##### variableName?

`string`

name of the shader variable that will hold the eye position

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`bindEyePosition`](ShaderMaterial.md#bindeyeposition)

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1031](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1031)

Binds the submesh to this material by preparing the effect and shader to draw

#### Parameters

##### world

[`Matrix`](Matrix.md)

defines the world transformation matrix

##### mesh

[`Mesh`](Mesh.md)

defines the mesh containing the submesh

##### subMesh

[`SubMesh`](SubMesh.md)

defines the submesh to bind the material to

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`bindForSubMesh`](ShaderMaterial.md#bindforsubmesh)

***

### bindOnlyNormalMatrix()

> **bindOnlyNormalMatrix**(`normalMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L68)

Binds the given normal matrix to the active effect

#### Parameters

##### normalMatrix

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`bindOnlyNormalMatrix`](ShaderMaterial.md#bindonlynormalmatrix)

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`, `effectOverride?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:998](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L998)

Binds the world matrix to the material

#### Parameters

##### world

[`Matrix`](Matrix.md)

defines the world transformation matrix

##### effectOverride?

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

If provided, use this effect instead of internal effect

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`bindOnlyWorldMatrix`](ShaderMaterial.md#bindonlyworldmatrix)

***

### bindView()

> **bindView**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1480)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view matrix to

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`bindView`](ShaderMaterial.md#bindview)

***

### bindViewProjection()

> **bindViewProjection**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1492)

Binds the view projection and projection matrices to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view projection and projection matrices to

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`bindViewProjection`](ShaderMaterial.md#bindviewprojection)

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1444)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`buildUniformLayout`](ShaderMaterial.md#builduniformlayout)

***

### clone()

> **clone**(`name`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1352)

Makes a duplicate of the material, and gives it a new name

#### Parameters

##### name

`string`

defines the new name for the duplicated material

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the cloned material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clone`](ShaderMaterial.md#clone)

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`, `notBoundToMesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1521](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1521)

Disposes the material

#### Parameters

##### forceDisposeEffect?

`boolean`

specifies if effects should be forcefully disposed

##### forceDisposeTextures?

`boolean`

specifies if textures should be forcefully disposed

##### notBoundToMesh?

`boolean`

specifies if the material that is being disposed is known to be not bound to any mesh

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`dispose`](ShaderMaterial.md#dispose)

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`, `onError?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1673)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh associated with this material

##### onCompiled?

(`material`) => `void`

defines a function to execute once the material is compiled

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../interfaces/IMaterialCompilationOptions.md)\>

defines the options to configure the compilation

##### onError?

(`reason`) => `void`

defines a function to execute if the material fails compiling

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`forceCompilation`](ShaderMaterial.md#forcecompilation)

***

### forceCompilationAsync()

> **forceCompilationAsync**(`mesh`, `options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1753](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1753)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh that will use this material

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../interfaces/IMaterialCompilationOptions.md)\>

defines additional options for compiling the shaders

#### Returns

`Promise`\<`void`\>

a promise that resolves when the compilation completes

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`forceCompilationAsync`](ShaderMaterial.md#forcecompilationasync)

***

### freeze()

> **freeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1180)

Locks updates for the material.

Note: while a material is frozen, the scene can still rebind it at least
once per camera render (and again whenever another material was bound in
between). What can be skipped while the frozen material stays cached are
per-mesh updates performed during a rebind.

This includes per-mesh morph target influences. If the same frozen
material is shared across several meshes that each have different
per-mesh morph influences, only the mesh that triggers the rebind updates
those values. Other meshes rendered afterward with the same cached frozen
material may reuse stale influences and render with the wrong values.

For that scenario either keep the material unfrozen, clone the material
per mesh and freeze each clone, or `unfreeze()` before changing
influences and `freeze()` again afterwards.

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`freeze`](ShaderMaterial.md#freeze)

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1295)

Gets the active textures from the material

#### Returns

[`BaseTexture`](BaseTexture.md)[]

an array of textures

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getActiveTextures`](ShaderMaterial.md#getactivetextures)

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1367)

Gets the texture used for the alpha test

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture to use for alpha testing

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getAlphaTestTexture`](ShaderMaterial.md#getalphatesttexture)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1589](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1589)

Returns the animatable textures.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getAnimatables`](ShaderMaterial.md#getanimatables)

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1650)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getBindedMeshes`](ShaderMaterial.md#getbindedmeshes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L238)

Gets the current class name of the material e.g. "ShaderMaterial"
Mainly use in serialization.

#### Returns

`string`

the class name

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getClassName`](ShaderMaterial.md#getclassname)

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getEffect`](ShaderMaterial.md#geteffect)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1237)

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getScene`](ShaderMaterial.md#getscene)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1317)

Specifies if the material uses a texture

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

defines the texture to check against the material

#### Returns

`boolean`

a boolean specifying if the material uses the texture

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`hasTexture`](ShaderMaterial.md#hastexture)

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`, `subMesh?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:699](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L699)

Checks if the material is ready to render the requested mesh

#### Parameters

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

Define the mesh to render

##### useInstances?

`boolean`

Define whether or not the material is used with instances

##### subMesh?

[`SubMesh`](SubMesh.md)

defines which submesh to render

#### Returns

`boolean`

true if ready, otherwise false

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isReady`](ShaderMaterial.md#isready)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L688)

Specifies that the submesh is ready to be used

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

##### subMesh

[`SubMesh`](SubMesh.md)

defines which submesh to check

##### useInstances?

`boolean`

specifies that instances should be used

#### Returns

`boolean`

a boolean indicating that the submesh is ready or not

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isReadyForSubMesh`](ShaderMaterial.md#isreadyforsubmesh)

***

### markAsDirty()

> **markAsDirty**(`flag`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1799)

Marks a define in the material to indicate that it needs to be re-computed

#### Parameters

##### flag

`number`

defines a flag used to determine which parts of the material have to be marked as dirty

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`markAsDirty`](ShaderMaterial.md#markasdirty)

***

### markDirty()

> **markDirty**(`forceMaterialDirty?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1375)

Marks the material to indicate that it needs to be re-calculated

#### Parameters

##### forceMaterialDirty?

`boolean` = `false`

Forces the material to be marked as dirty for all components (same as this.markAsDirty(Material.AllDirtyFlag)). You should use this flag if the material is frozen and you want to force a recompilation.

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`markDirty`](ShaderMaterial.md#markdirty)

***

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L246)

Specifies if the material will require alpha blending

#### Returns

`boolean`

a boolean specifying if alpha blending is needed

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`needAlphaBlending`](ShaderMaterial.md#needalphablending)

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1321)

Specifies if the mesh will require alpha blending

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha blending is needed for the mesh

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`needAlphaBlendingForMesh`](ShaderMaterial.md#needalphablendingformesh)

***

### needAlphaTesting()

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L254)

Specifies if this material should be rendered in alpha test mode

#### Returns

`boolean`

a boolean specifying if an alpha test is needed.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`needAlphaTesting`](ShaderMaterial.md#needalphatesting)

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1355)

Specifies if material alpha testing should be turned on for the mesh

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha testing should be turned on for the mesh

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`needAlphaTestingForMesh`](ShaderMaterial.md#needalphatestingformesh)

***

### removeTexture()

> **removeTexture**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L298)

Remove a texture from the material.

#### Parameters

##### name

`string`

Define the name of the texture to remove

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`removeTexture`](ShaderMaterial.md#removetexture)

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1844)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`resetDrawCache`](ShaderMaterial.md#resetdrawcache)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1548)

Serializes this material in a JSON representation

#### Returns

`any`

the serialized material object

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`serialize`](ShaderMaterial.md#serialize)

***

### setAlphaMode()

> **setAlphaMode**(`value`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L701)

Sets the value of the alpha mode for a specific target index.

#### Parameters

##### value

`number`

The alpha mode value to set.

##### targetIndex?

`number` = `0`

The index of the target to set the alpha mode for. Defaults to 0.

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setAlphaMode`](ShaderMaterial.md#setalphamode)

***

### setArray2()

> **setArray2**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:577](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L577)

Set a vec2 array in the shader from a number array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setArray2`](ShaderMaterial.md#setarray2)

***

### setArray3()

> **setArray3**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:590](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L590)

Set a vec3 array in the shader from a number array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setArray3`](ShaderMaterial.md#setarray3)

***

### setArray4()

> **setArray4**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L603)

Set a vec4 array in the shader from a number array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setArray4`](ShaderMaterial.md#setarray4)

***

### setColor3()

> **setColor3**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:393](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L393)

Set a vec3 in the shader from a Color3.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`IColor3Like`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setColor3`](ShaderMaterial.md#setcolor3)

***

### setColor3Array()

> **setColor3Array**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L406)

Set a vec3 array in the shader from a IColor3Like array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`IColor3Like`[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setColor3Array`](ShaderMaterial.md#setcolor3array)

***

### setColor4()

> **setColor4**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L421)

Set a vec4 in the shader from a Color4.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`IColor4Like`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setColor4`](ShaderMaterial.md#setcolor4)

***

### setColor4Array()

> **setColor4Array**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L434)

Set a vec4 array in the shader from a IColor4Like array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`IColor4Like`[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setColor4Array`](ShaderMaterial.md#setcolor4array)

***

### setDefine()

> **setDefine**(`define`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:665](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L665)

Adds, removes, or replaces the specified shader define and value.
* setDefine("MY_DEFINE", true); // enables a boolean define
* setDefine("MY_DEFINE", "0.5"); // adds "#define MY_DEFINE 0.5" to the shader (or sets and replaces the value of any existing define with that name)
* setDefine("MY_DEFINE", false); // disables and removes the define
Note if the active defines do change, the shader will be recompiled and this can be expensive.

#### Parameters

##### define

`string`

the define name e.g., "OUTPUT_TO_SRGB" or "#define OUTPUT_TO_SRGB". If the define was passed into the constructor already, the version used should match that, and in either case, it should not include any appended value.

##### value

`string` \| `boolean`

either the value of the define (e.g. a numerical value) or for booleans, true if the define should be enabled or false if it should be disabled

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setDefine`](ShaderMaterial.md#setdefine)

***

### setExternalTexture()

> **setExternalTexture**(`name`, `texture`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L326)

Set an internal texture in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform samplers as defined in the shader

##### texture

[`ExternalTexture`](ExternalTexture.md)

Define the texture to bind to this sampler

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setExternalTexture`](ShaderMaterial.md#setexternaltexture)

***

### setFloat()

> **setFloat**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L341)

Set a float in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setFloat`](ShaderMaterial.md#setfloat)

***

### setFloats()

> **setFloats**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L380)

Set an array of floats in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setFloats`](ShaderMaterial.md#setfloats)

***

### setInt()

> **setInt**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L354)

Set a int in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setInt`](ShaderMaterial.md#setint)

***

### setInternalTexture()

> **setInternalTexture**(`name`, `texture`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L285)

Set an internal texture in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform samplers as defined in the shader

##### texture

[`InternalTexture`](InternalTexture.md)

Define the texture to bind to this sampler

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setInternalTexture`](ShaderMaterial.md#setinternaltexture)

***

### setMatrices()

> **setMatrices**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L529)

Set a float32Array in the shader from a matrix array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

[`Matrix`](Matrix.md)[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setMatrices`](ShaderMaterial.md#setmatrices)

***

### setMatrix()

> **setMatrix**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L516)

Set a mat4 in the shader from a Matrix.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

[`Matrix`](Matrix.md)

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setMatrix`](ShaderMaterial.md#setmatrix)

***

### setMatrix2x2()

> **setMatrix2x2**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L564)

Set a mat2 in the shader from a Float32Array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setMatrix2x2`](ShaderMaterial.md#setmatrix2x2)

***

### setMatrix3x3()

> **setMatrix3x3**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L551)

Set a mat3 in the shader from a Float32Array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setMatrix3x3`](ShaderMaterial.md#setmatrix3x3)

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1998](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1998)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setPrePassRenderer`](ShaderMaterial.md#setprepassrenderer)

***

### setQuaternion()

> **setQuaternion**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:488](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L488)

Set a vec4 in the shader from a Quaternion.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

[`Quaternion`](Quaternion.md)

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setQuaternion`](ShaderMaterial.md#setquaternion)

***

### setQuaternionArray()

> **setQuaternionArray**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:501](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L501)

Set a vec4 array in the shader from a Quaternion array.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

[`Quaternion`](Quaternion.md)[]

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setQuaternionArray`](ShaderMaterial.md#setquaternionarray)

***

### setStorageBuffer()

> **setStorageBuffer**(`name`, `buffer`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:646](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L646)

Set a storage buffer in the shader

#### Parameters

##### name

`string`

Define the name of the storage buffer as defined in the shader

##### buffer

[`StorageBuffer`](StorageBuffer.md)

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setStorageBuffer`](ShaderMaterial.md#setstoragebuffer)

***

### setTexture()

> **setTexture**(`name`, `texture`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L270)

Set a texture in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform samplers as defined in the shader

##### texture

[`BaseTexture`](BaseTexture.md)

Define the texture to bind to this sampler

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setTexture`](ShaderMaterial.md#settexture)

***

### setTextureArray()

> **setTextureArray**(`name`, `textures`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L308)

Set a texture array in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform sampler array as defined in the shader

##### textures

[`BaseTexture`](BaseTexture.md)[]

Define the list of textures to bind to this sampler

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setTextureArray`](ShaderMaterial.md#settexturearray)

***

### setTextureSampler()

> **setTextureSampler**(`name`, `sampler`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L631)

Set a texture sampler in the shader

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### sampler

[`TextureSampler`](TextureSampler.md)

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setTextureSampler`](ShaderMaterial.md#settexturesampler)

***

### setUInt()

> **setUInt**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L367)

Set a unsigned int in the shader.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`number`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setUInt`](ShaderMaterial.md#setuint)

***

### setUniformBuffer()

> **setUniformBuffer**(`name`, `buffer`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:616](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L616)

Set a uniform buffer in the shader

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### buffer

[`UniformBuffer`](UniformBuffer.md)

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setUniformBuffer`](ShaderMaterial.md#setuniformbuffer)

***

### setVector2()

> **setVector2**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:449](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L449)

Set a vec2 in the shader from a Vector2.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`IVector2Like`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setVector2`](ShaderMaterial.md#setvector2)

***

### setVector3()

> **setVector3**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L462)

Set a vec3 in the shader from a Vector3.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`IVector3Like`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setVector3`](ShaderMaterial.md#setvector3)

***

### setVector4()

> **setVector4**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L475)

Set a vec4 in the shader from a Vector4.

#### Parameters

##### name

`string`

Define the name of the uniform as defined in the shader

##### value

`IVector4Like`

Define the value to give to the uniform

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

the material itself allowing "fluent" like uniform updates

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`setVector4`](ShaderMaterial.md#setvector4)

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1137)

Returns a string representation of the current material

#### Parameters

##### fullDetails?

`boolean`

defines a boolean indicating which levels of logging is desired

#### Returns

`string`

a string with material information

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`toString`](ShaderMaterial.md#tostring)

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1562)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`unbind`](ShaderMaterial.md#unbind)

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1188)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`unfreeze`](ShaderMaterial.md#unfreeze)

***

### ParseAlphaMode()

> `static` **ParseAlphaMode**(`parsedMaterial`, `material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:2143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L2143)

Parses the alpha mode from the material data to parse

#### Parameters

##### parsedMaterial

`any`

defines the material data to parse

##### material

[`Material`](Material.md)

defines the material to update

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ParseAlphaMode`](ShaderMaterial.md#parsealphamode)
