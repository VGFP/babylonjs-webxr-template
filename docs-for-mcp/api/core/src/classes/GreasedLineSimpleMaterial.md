[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineSimpleMaterial

# Class: GreasedLineSimpleMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L19)

GreasedLineSimpleMaterial

## Extends

- [`ShaderMaterial`](ShaderMaterial.md)

## Implements

- [`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md)

## Constructors

### Constructor

> **new GreasedLineSimpleMaterial**(`name`, `scene`, `options`): `GreasedLineSimpleMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L49)

GreasedLineSimple material constructor

#### Parameters

##### name

`string`

material name

##### scene

[`Scene`](Scene.md)

the scene

##### options

[`GreasedLineMaterialOptions`](../interfaces/GreasedLineMaterialOptions.md)

material options

#### Returns

`GreasedLineSimpleMaterial`

#### Overrides

[`ShaderMaterial`](ShaderMaterial.md).[`constructor`](ShaderMaterial.md#constructor)

## Properties

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L256)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`allowShaderHotSwapping`](ShaderMaterial.md#allowshaderhotswapping)

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L563)

Stores the animations for the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`animations`](ShaderMaterial.md#animations)

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L337)

Specifies if the ready state should be checked on each call

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`checkReadyOnEveryCall`](ShaderMaterial.md#checkreadyoneverycall)

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L343)

Specifies if the ready state should be checked once

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`checkReadyOnlyOnce`](ShaderMaterial.md#checkreadyonlyonce)

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:875](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L875)

Gets or sets the active clipplane 1

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane`](ShaderMaterial.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L880)

Gets or sets the active clipplane 2

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane2`](ShaderMaterial.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:885](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L885)

Gets or sets the active clipplane 3

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane3`](ShaderMaterial.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L890)

Gets or sets the active clipplane 4

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane4`](ShaderMaterial.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:895](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L895)

Gets or sets the active clipplane 5

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane5`](ShaderMaterial.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:900](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L900)

Gets or sets the active clipplane 6

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`clipPlane6`](ShaderMaterial.md#clipplane6)

***

### customShaderNameResolve

> **customShaderNameResolve**: (`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`, `options?`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L236)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L762)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`depthFunction`](ShaderMaterial.md#depthfunction)

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:750](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L750)

Specifies if color writing should be disabled

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`disableColorWrite`](ShaderMaterial.md#disablecolorwrite)

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L744)

Specifies if depth writing should be disabled

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`disableDepthWrite`](ShaderMaterial.md#disabledepthwrite)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:553](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L553)

Specifies if the material should be serialized

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`doNotSerialize`](ShaderMaterial.md#donotserialize)

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:756](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L756)

Specifies if depth writing should be forced

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`forceDepthWrite`](ShaderMaterial.md#forcedepthwrite)

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:539](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L539)

Callback triggered to get the render target textures

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getRenderTargetTextures`](ShaderMaterial.md#getrendertargettextures)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L302)

The ID of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`id`](ShaderMaterial.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L370)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`inspectableCustomProperties`](ShaderMaterial.md#inspectablecustomproperties)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L323)

Gets or sets user defined metadata

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`metadata`](ShaderMaterial.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L317)

The name of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`name`](ShaderMaterial.md#name)

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L529)

Callback triggered when the material is compiled

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onCompiled`](ShaderMaterial.md#oncompiled)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L568)

An event triggered when the material is disposed

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onDisposeObservable`](ShaderMaterial.md#ondisposeobservable)

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L534)

Callback triggered when an error occurs

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onError`](ShaderMaterial.md#onerror)

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L36)

Plugin manager for this material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`pluginManager`](ShaderMaterial.md#pluginmanager)

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L798)

Stores the size of points

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`pointSize`](ShaderMaterial.md#pointsize)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L331)

For internal use only. Please do not use.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`reservedDataStore`](ShaderMaterial.md#reserveddatastore)

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:768](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L768)

Specifies if there should be a separate pass for culling

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`separateCullingPass`](ShaderMaterial.md#separatecullingpass)

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L249)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`shadowDepthWrapper`](ShaderMaterial.md#shadowdepthwrapper)

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L524)

Stores the value for side orientation

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`sideOrientation`](ShaderMaterial.md#sideorientation)

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L163)

Snippet ID if the material was created from the snippet server

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`snippetId`](ShaderMaterial.md#snippetid)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L349)

The state of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`state`](ShaderMaterial.md#state)

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:905](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L905)

Gives access to the stencil properties of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`stencil`](ShaderMaterial.md#stencil)

***

### textureRepetitionHexTilingParams

> **textureRepetitionHexTilingParams**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:457](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L457)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L308)

Gets or sets the unique id of the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`uniqueId`](ShaderMaterial.md#uniqueid)

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L804)

Stores the z offset Factor value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`zOffset`](ShaderMaterial.md#zoffset)

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:810](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L810)

Stores the z offset Units value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`zOffsetUnits`](ShaderMaterial.md#zoffsetunits)

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L171)

The all dirty flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`AllDirtyFlag`](ShaderMaterial.md#alldirtyflag)

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L156)

The dirty attribute flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`AttributesDirtyFlag`](ShaderMaterial.md#attributesdirtyflag)

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L126)

Stores the clock-wise side orientation

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ClockWiseSideOrientation`](ShaderMaterial.md#clockwisesideorientation)

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L131)

Stores the counter clock-wise side orientation

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`CounterClockWiseSideOrientation`](ShaderMaterial.md#counterclockwisesideorientation)

***

### ~~CreateFromSnippetAsync~~

> `static` **CreateFromSnippetAsync**: (`snippetId`, `scene`, `rootUrl`) => `Promise`\<[`ShaderMaterial`](ShaderMaterial.md)\> = `ShaderMaterial.ParseFromSnippetAsync`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1940](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1940)

Creates a ShaderMaterial from a snippet saved by the Inspector

Creates a ShaderMaterial from a snippet saved by the Inspector

#### Parameters

##### snippetId

`string`

defines the snippet to load

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

`Promise`\<[`ShaderMaterial`](ShaderMaterial.md)\>

a promise that will resolve to the new ShaderMaterial

#### Deprecated

Please use ParseFromSnippetAsync instead

#### Param

defines the snippet to load

#### Param

defines the hosting scene

#### Param

defines the root URL to use to load textures and relative dependencies

#### Returns

a promise that will resolve to the new ShaderMaterial

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`CreateFromSnippetAsync`](ShaderMaterial.md#createfromsnippetasync)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L23)

Force to use GLSL in WebGPU

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L231)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ForceVertexOutputInvariant`](ShaderMaterial.md#forcevertexoutputinvariant)

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L151)

The dirty fresnel flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`FresnelDirtyFlag`](ShaderMaterial.md#fresneldirtyflag)

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L136)

The dirty image processing flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ImageProcessingDirtyFlag`](ShaderMaterial.md#imageprocessingdirtyflag)

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L146)

The dirty light flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LightDirtyFlag`](ShaderMaterial.md#lightdirtyflag)

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L215)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LIGHTFALLOFF_GLTF`](ShaderMaterial.md#lightfalloff_gltf)

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L209)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LIGHTFALLOFF_PHYSICAL`](ShaderMaterial.md#lightfalloff_physical)

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L221)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LIGHTFALLOFF_STANDARD`](ShaderMaterial.md#lightfalloff_standard)

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L105)

Returns the line list draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LineListDrawMode`](ShaderMaterial.md#linelistdrawmode)

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L109)

Returns the line loop draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LineLoopDrawMode`](ShaderMaterial.md#lineloopdrawmode)

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L113)

Returns the line strip draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`LineStripDrawMode`](ShaderMaterial.md#linestripdrawmode)

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L186)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_ALPHABLEND`](ShaderMaterial.md#material_alphablend)

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L181)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_ALPHATEST`](ShaderMaterial.md#material_alphatest)

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L192)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_ALPHATESTANDBLEND`](ShaderMaterial.md#material_alphatestandblend)

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L204)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_RNM`](ShaderMaterial.md#material_normalblendmethod_rnm)

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L198)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_WHITEOUT`](ShaderMaterial.md#material_normalblendmethod_whiteout)

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L176)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MATERIAL_OPAQUE`](ShaderMaterial.md#material_opaque)

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L161)

The dirty misc flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`MiscDirtyFlag`](ShaderMaterial.md#miscdirtyflag)

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L226)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`OnEventObservable`](ShaderMaterial.md#oneventobservable)

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L97)

Returns the point fill mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`PointFillMode`](ShaderMaterial.md#pointfillmode)

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L101)

Returns the point list draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`PointListDrawMode`](ShaderMaterial.md#pointlistdrawmode)

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L166)

The dirty prepass flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`PrePassDirtyFlag`](ShaderMaterial.md#prepassdirtyflag)

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L160)

Define the Url to load snippets

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`SnippetUrl`](ShaderMaterial.md#snippeturl)

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L141)

The dirty texture flag value

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TextureDirtyFlag`](ShaderMaterial.md#texturedirtyflag)

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L121)

Returns the triangle fan draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TriangleFanDrawMode`](ShaderMaterial.md#trianglefandrawmode)

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L89)

Returns the triangle fill mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TriangleFillMode`](ShaderMaterial.md#trianglefillmode)

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L117)

Returns the triangle strip draw mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`TriangleStripDrawMode`](ShaderMaterial.md#trianglestripdrawmode)

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L93)

Returns the wireframe mode

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`WireFrameFillMode`](ShaderMaterial.md#wireframefillmode)

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:392](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L392)

Gets the alpha value of the material

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L375)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:683](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L683)

Gets the value of the alpha mode

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L672)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L690)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`alphaModes`](ShaderMaterial.md#alphamodes)

***

### backFaceCulling

#### Get Signature

> **get** **backFaceCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L416)

Gets the culling state

##### Returns

`boolean`

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L405)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:489](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L489)

Block the dirty-mechanism for this specific material
When set to false after being true the material will be marked as dirty.

##### Returns

`boolean`

#### Set Signature

> **set** **blockDirtyMechanism**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:493](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L493)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L354)

If the material can be rendered to several textures with MRT extension

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`canRenderToMRT`](ShaderMaterial.md#canrendertomrt)

***

### color

#### Get Signature

> **get** **color**(): [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L391)

Gets the color of the line

##### Returns

[`Color3`](Color3.md)

#### Set Signature

> **set** **color**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L399)

Sets the color of the line

##### Parameters

###### value

[`Color3`](Color3.md)

Color3

##### Returns

`void`

Color of the line. Applies to all line segments.
Defaults to White.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`color`](../interfaces/IGreasedLineMaterial.md#color)

***

### colorMode

#### Get Signature

> **get** **colorMode**(): [`GreasedLineMeshColorMode`](../enumerations/GreasedLineMeshColorMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:436](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L436)

Gets the mixing mode of the color and colors paramaters. Default value is GreasedLineMeshColorMode.SET.
MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.

##### See

GreasedLineMeshColorMode

##### Returns

[`GreasedLineMeshColorMode`](../enumerations/GreasedLineMeshColorMode.md)

#### Set Signature

> **set** **colorMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:445](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L445)

Sets the mixing mode of the color and colors paramaters. Default value is GreasedLineMeshColorMode.SET.
MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.

##### See

GreasedLineMeshColorMode

##### Parameters

###### value

[`GreasedLineMeshColorMode`](../enumerations/GreasedLineMeshColorMode.md)

##### Returns

`void`

The mixing mode of the color paramater. Default value is GreasedLineMeshColorMode.SET.
MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.
MATERIAL_TYPE_STANDARD and MATERIAL_TYPE_PBR mixes the color from the base material with the color and/or colors of the greased line material.

#### See

GreasedLineMeshColorMode

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`colorMode`](../interfaces/IGreasedLineMaterial.md#colormode)

***

### colors

#### Get Signature

> **get** **colors**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L192)

Returns the colors used to colorize the line

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)[]\>

#### Set Signature

> **set** **colors**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L199)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:417](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L417)

Gets the color distributiopn type

##### Returns

[`GreasedLineMeshColorDistributionType`](../enumerations/GreasedLineMeshColorDistributionType.md)

#### Set Signature

> **set** **colorsDistributionType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L426)

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

### colorsSampling

#### Get Signature

> **get** **colorsSampling**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L286)

The type of sampling of the colors texture. The values are the same when using with textures.

##### Returns

`number`

#### Set Signature

> **set** **colorsSampling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L293)

The type of sampling of the colors texture. The values are the same when using with textures.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### colorsTexture

#### Get Signature

> **get** **colorsTexture**(): [`RawTexture`](RawTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L243)

Gets the colors texture

##### Returns

[`RawTexture`](RawTexture.md)

#### Set Signature

> **set** **colorsTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L250)

Sets the colorsTexture

##### Parameters

###### value

[`RawTexture`](RawTexture.md)

##### Returns

`void`

You can provide a colorsTexture to use instead of one generated from the 'colors' option

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`colorsTexture`](../interfaces/IGreasedLineMaterial.md#colorstexture)

***

### cullBackFaces

#### Get Signature

> **get** **cullBackFaces**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L479)

Gets the type of faces that should be culled

##### Returns

`boolean`

#### Set Signature

> **set** **cullBackFaces**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L468)

Sets the type of faces that should be culled (true for back faces, false for front faces)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`cullBackFaces`](ShaderMaterial.md#cullbackfaces)

***

### dashCount

#### Get Signature

> **get** **dashCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L359)

Gets the number of dashes in the line

##### Returns

`number`

#### Set Signature

> **set** **dashCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L366)

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

### dashOffset

#### Get Signature

> **get** **dashOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L329)

Gets the dash offset

##### Returns

`number`

#### Set Signature

> **set** **dashOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L336)

Sets the dash offset

##### Parameters

###### value

`number`

##### Returns

`void`

Dash offset

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`dashOffset`](../interfaces/IGreasedLineMaterial.md#dashoffset)

***

### dashRatio

#### Get Signature

> **get** **dashRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L344)

Length of the dash. 0 to 1. 0.5 means half empty, half drawn.

##### Returns

`number`

#### Set Signature

> **set** **dashRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L351)

Length of the dash. 0 to 1. 0.5 means half empty, half drawn.

##### Parameters

###### value

`number`

##### Returns

`void`

Length of the dash. 0 to 1. 0.5 means half empty, half drawn.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`dashRatio`](../interfaces/IGreasedLineMaterial.md#dashratio)

***

### fillMode

#### Get Signature

> **get** **fillMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:856](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L856)

Gets the material fill mode

##### Returns

`number`

#### Set Signature

> **set** **fillMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:863](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L863)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:790](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L790)

Gets the value of the fog enabled state

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:779](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L779)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:544](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L544)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`hasRenderTargetTextures`](ShaderMaterial.md#hasrendertargettextures)

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1156)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isFrozen`](ShaderMaterial.md#isfrozen)

***

### isMultiview

#### Get Signature

> **get** **isMultiview**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L223)

is multiview set to true?

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isMultiview`](ShaderMaterial.md#ismultiview)

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:736](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L736)

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`isPrePassCapable`](ShaderMaterial.md#isprepasscapable)

***

### isVertexOutputInvariant

#### Get Signature

> **get** **isVertexOutputInvariant**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:940](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L940)

Gets or sets the vertex output invariant state
Setting this property to true will force the shader compiler to disable some optimization to make sure the vertex output is always calculated
the same way across different compilation units.
You may need to enable this option if you are seeing some depth artifacts when using a depth pre-pass, for e.g.
Note that this may have an impact on performance, so leave this option disabled if not needed.

##### Returns

`boolean`

#### Set Signature

> **set** **isVertexOutputInvariant**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:944](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L944)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:729](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L729)

Gets the depth pre-pass value

##### Returns

`boolean`

#### Set Signature

> **set** **needDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:716](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L716)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:607](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L607)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L591)

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onBindObservable`](ShaderMaterial.md#onbindobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:579](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L579)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L630)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onEffectCreatedObservable`](ShaderMaterial.md#oneffectcreatedobservable)

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L617)

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`onUnBindObservable`](ShaderMaterial.md#onunbindobservable)

***

### options

#### Get Signature

> **get** **options**(): [`IShaderMaterialOptions`](../interfaces/IShaderMaterialOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L216)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:835](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L835)

Gets the value specifying if point clouds are enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pointsCloud**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:848](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L848)

Sets the state of point cloud mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`pointsCloud`](ShaderMaterial.md#pointscloud)

***

### resolution

#### Get Signature

> **get** **resolution**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L453)

Gets the resolution

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **resolution**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:461](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L461)

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

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L294)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`shaderLanguage`](ShaderMaterial.md#shaderlanguage)

***

### shaderPath

#### Get Signature

> **get** **shaderPath**(): `string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L200)

Gets the shader path used to define the shader code
It can be modified to trigger a new compilation

##### Returns

`string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

#### Set Signature

> **set** **shaderPath**(`shaderPath`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L208)

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

### sizeAttenuation

#### Get Signature

> **get** **sizeAttenuation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L375)

False means 1 unit in width = 1 unit on scene, true means 1 unit in width is reduced on the screen to make better looking lines

##### Returns

`boolean`

#### Set Signature

> **set** **sizeAttenuation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:383](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L383)

Turn on/off attenuation of the width option and widths array.

##### Parameters

###### value

`boolean`

false means 1 unit in width = 1 unit on scene, true means 1 unit in width is reduced on the screen to make better looking lines

##### Returns

`void`

If false then width units = scene units. If true then line will width be reduced.
Defaults to false.

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`sizeAttenuation`](../interfaces/IGreasedLineMaterial.md#sizeattenuation)

***

### textureRepetitionMode

#### Get Signature

> **get** **textureRepetitionMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L444)

Gets the texture repetition breaking mode.

##### See

https://iquilezles.org/articles/texturerepetition/

##### Returns

`number`

#### Set Signature

> **set** **textureRepetitionMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L431)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1253)

Gets the current transparency mode.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1268)

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

### useColors

#### Get Signature

> **get** **useColors**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L274)

Whether to use the colors option to colorize the line

##### Returns

`boolean`

#### Set Signature

> **set** **useColors**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L278)

Whether to use the colors option to colorize the line

##### Parameters

###### value

`boolean`

##### Returns

`void`

Whether to use the colors option to colorize the line

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`useColors`](../interfaces/IGreasedLineMaterial.md#usecolors)

***

### useDash

#### Get Signature

> **get** **useDash**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L314)

Turns on/off dash mode

##### Returns

`boolean`

#### Set Signature

> **set** **useDash**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L321)

Turns on/off dash mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

Turns on/off dash mode

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`useDash`](../interfaces/IGreasedLineMaterial.md#usedash)

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:915](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L915)

In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
You can try switching to logarithmic depth.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:919](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L919)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L268)

Tells the engine to draw geometry using vertex pulling instead of index drawing. This will automatically
set the vertex buffers as storage buffers and make them accessible to the vertex shader (WebGPU only).

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexPulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L272)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`useVertexPulling`](ShaderMaterial.md#usevertexpulling)

***

### visibility

#### Get Signature

> **get** **visibility**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L302)

Normalized value of how much of the line will be visible
0 - 0% of the line will be visible
1 - 100% of the line will be visible

##### Returns

`number`

#### Set Signature

> **set** **visibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L306)

Normalized value of how much of the line will be visible
0 - 0% of the line will be visible
1 - 100% of the line will be visible

##### Parameters

###### value

`number`

##### Returns

`void`

Normalized value of how much of the line will be visible
0 - 0% of the line will be visible
1 - 100% of the line will be visible

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`visibility`](../interfaces/IGreasedLineMaterial.md#visibility)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L259)

Line base width. At each point the line width is calculated by widths[pointIndex] * width

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L266)

Line base width. At each point the line width is calculated by widths[pointIndex] * width

##### Parameters

###### value

`number`

##### Returns

`void`

Line base width. At each point the line width is calculated by widths[pointIndex] * width

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`width`](../interfaces/IGreasedLineMaterial.md#width)

***

### wireframe

#### Get Signature

> **get** **wireframe**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:812](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L812)

##### Returns

`boolean`

#### Set Signature

> **set** **wireframe**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:827](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L827)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:511](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L511)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1036](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1036)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1505)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1025](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1025)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L68)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:992](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L992)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1478)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1490)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1442](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1442)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`buildUniformLayout`](ShaderMaterial.md#builduniformlayout)

***

### clone()

> **clone**(`name`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1346)

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

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L169)

Disposes the plugin material.

#### Returns

`void`

#### Overrides

[`ShaderMaterial`](ShaderMaterial.md).[`dispose`](ShaderMaterial.md#dispose)

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`, `onError?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1671](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1671)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1751](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1751)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1178)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1289)

Gets the active textures from the material

#### Returns

[`BaseTexture`](BaseTexture.md)[]

an array of textures

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getActiveTextures`](ShaderMaterial.md#getactivetextures)

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1365)

Gets the texture used for the alpha test

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture to use for alpha testing

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getAlphaTestTexture`](ShaderMaterial.md#getalphatesttexture)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1587](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1587)

Returns the animatable textures.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getAnimatables`](ShaderMaterial.md#getanimatables)

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1648)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getBindedMeshes`](ShaderMaterial.md#getbindedmeshes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L232)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getEffect`](ShaderMaterial.md#geteffect)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1235)

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`getScene`](ShaderMaterial.md#getscene)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1311)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L693)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:682](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L682)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1797](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1797)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1373)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L240)

Specifies if the material will require alpha blending

#### Returns

`boolean`

a boolean specifying if alpha blending is needed

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`needAlphaBlending`](ShaderMaterial.md#needalphablending)

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1319)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L248)

Specifies if this material should be rendered in alpha test mode

#### Returns

`boolean`

a boolean specifying if an alpha test is needed.

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`needAlphaTesting`](ShaderMaterial.md#needalphatesting)

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1353)

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

### parse()

> **parse**(`source`, `scene`, `_rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:506](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L506)

Parses a serialized objects

#### Parameters

##### source

`any`

serialized object

##### scene

[`Scene`](Scene.md)

scene

##### \_rootUrl

`string`

root url for textures

#### Returns

`void`

***

### removeTexture()

> **removeTexture**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L292)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1842)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`resetDrawCache`](ShaderMaterial.md#resetdrawcache)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:471](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L471)

Serializes this plugin material

#### Returns

`any`

serializationObjec

#### Overrides

[`ShaderMaterial`](ShaderMaterial.md).[`serialize`](ShaderMaterial.md#serialize)

***

### setAlphaMode()

> **setAlphaMode**(`value`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:699](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L699)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:571](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L571)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:584](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L584)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L597)

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

### setColor()

> **setColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L408)

Sets the color of the line. If set the whole line will be mixed with this color according to the colorMode option.
The simple material always needs a color to be set. If you set it to null it will set the color to the default color (GreasedLineSimpleMaterial.DEFAULT_COLOR).

#### Parameters

##### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

color

#### Returns

`void`

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`setColor`](../interfaces/IGreasedLineMaterial.md#setcolor)

***

### setColor3()

> **setColor3**(`name`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L387)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L400)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L415)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L428)

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

### setColors()

> **setColors**(`colors`, `lazy?`, `forceNewTexture?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L209)

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

### setDefine()

> **setDefine**(`define`, `value`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:659](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L659)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L320)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L335)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:374](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L374)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L348)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L279)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:523](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L523)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L510)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L558)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:545](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L545)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1996](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1996)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:482](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L482)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:495](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L495)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L640)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L264)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L302)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:625](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L625)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L361)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:610](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L610)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L443)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:456](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L456)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:469](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L469)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1135)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1560](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1560)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`unbind`](ShaderMaterial.md#unbind)

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1186)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`unfreeze`](ShaderMaterial.md#unfreeze)

***

### updateLazy()

> **updateLazy**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GreasedLine/greasedLineSimpleMaterial.ts#L183)

Updates the material. Use when material created in lazy mode.

#### Returns

`void`

#### Implementation of

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md).[`updateLazy`](../interfaces/IGreasedLineMaterial.md#updatelazy)

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1707](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1707)

Creates a shader material from parsed shader material data

#### Parameters

##### source

`any`

defines the JSON representation of the material

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl

`string`

defines the root URL to use to load textures and relative dependencies

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

a new material

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`Parse`](ShaderMaterial.md#parse)

***

### ParseAlphaMode()

> `static` **ParseAlphaMode**(`parsedMaterial`, `material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:2141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L2141)

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

***

### ParseFromFileAsync()

> `static` **ParseFromFileAsync**(`name`, `url`, `scene`, `rootUrl?`): `Promise`\<[`ShaderMaterial`](ShaderMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1874](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1874)

Creates a new ShaderMaterial from a snippet saved in a remote file

#### Parameters

##### name

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the name of the ShaderMaterial to create (can be null or empty to use the one from the json data)

##### url

`string`

defines the url to load from

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

`Promise`\<[`ShaderMaterial`](ShaderMaterial.md)\>

a promise that will resolve to the new ShaderMaterial

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ParseFromFileAsync`](ShaderMaterial.md#parsefromfileasync)

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`, `scene`, `rootUrl?`): `Promise`\<[`ShaderMaterial`](ShaderMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:1907](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L1907)

Creates a ShaderMaterial from a snippet saved by the Inspector

#### Parameters

##### snippetId

`string`

defines the snippet to load

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

`Promise`\<[`ShaderMaterial`](ShaderMaterial.md)\>

a promise that will resolve to the new ShaderMaterial

#### Inherited from

[`ShaderMaterial`](ShaderMaterial.md).[`ParseFromSnippetAsync`](ShaderMaterial.md#parsefromsnippetasync)
