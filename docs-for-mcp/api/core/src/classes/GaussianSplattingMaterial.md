[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GaussianSplattingMaterial

# Class: GaussianSplattingMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L118)

**`Experimental`**

GaussianSplattingMaterial material used to render Gaussian Splatting

## Constructors

### Constructor

> **new GaussianSplattingMaterial**(`name`, `scene?`): `GaussianSplattingMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L124)

**`Experimental`**

Instantiates a Gaussian Splatting Material in the given scene

#### Parameters

##### name

`string`

The friendly name of the material

##### scene?

[`Scene`](Scene.md)

The scene to add the material to

#### Returns

`GaussianSplattingMaterial`

#### Overrides

`PushMaterial.constructor`

## Properties

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L258)

**`Experimental`**

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

`PushMaterial.allowShaderHotSwapping`

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L565)

**`Experimental`**

Stores the animations for the material

#### Inherited from

`PushMaterial.animations`

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L339)

**`Experimental`**

Specifies if the ready state should be checked on each call

#### Inherited from

`PushMaterial.checkReadyOnEveryCall`

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L345)

**`Experimental`**

Specifies if the ready state should be checked once

#### Inherited from

`PushMaterial.checkReadyOnlyOnce`

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:877](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L877)

**`Experimental`**

Gets or sets the active clipplane 1

#### Inherited from

`PushMaterial.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:882](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L882)

**`Experimental`**

Gets or sets the active clipplane 2

#### Inherited from

`PushMaterial.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:887](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L887)

**`Experimental`**

Gets or sets the active clipplane 3

#### Inherited from

`PushMaterial.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:892](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L892)

**`Experimental`**

Gets or sets the active clipplane 4

#### Inherited from

`PushMaterial.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L897)

**`Experimental`**

Gets or sets the active clipplane 5

#### Inherited from

`PushMaterial.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L902)

**`Experimental`**

Gets or sets the active clipplane 6

#### Inherited from

`PushMaterial.clipPlane6`

***

### customShaderNameResolve

> **customShaderNameResolve**: (`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`, `options?`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L238)

**`Experimental`**

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

`PushMaterial.customShaderNameResolve`

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L764)

**`Experimental`**

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

`PushMaterial.depthFunction`

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L752)

**`Experimental`**

Specifies if color writing should be disabled

#### Inherited from

`PushMaterial.disableColorWrite`

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L746)

**`Experimental`**

Specifies if depth writing should be disabled

#### Inherited from

`PushMaterial.disableDepthWrite`

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L555)

**`Experimental`**

Specifies if the material should be serialized

#### Inherited from

`PushMaterial.doNotSerialize`

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L758)

**`Experimental`**

Specifies if depth writing should be forced

#### Inherited from

`PushMaterial.forceDepthWrite`

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L541)

**`Experimental`**

Callback triggered to get the render target textures

#### Inherited from

`PushMaterial.getRenderTargetTextures`

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L304)

**`Experimental`**

The ID of the material

#### Inherited from

`PushMaterial.id`

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L372)

**`Experimental`**

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

`PushMaterial.inspectableCustomProperties`

***

### kernelSize

> **kernelSize**: `number` = `GaussianSplattingMaterial.KernelSize`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L150)

**`Experimental`**

Point spread function (default 0.3). Can be overriden per GS material, otherwise, using default static `KernelSize` value

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L325)

**`Experimental`**

Gets or sets user defined metadata

#### Inherited from

`PushMaterial.metadata`

***

### minPixelSize

> **minPixelSize**: `number` = `GaussianSplattingMaterial.MinPixelSize`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L155)

**`Experimental`**

Minimum projected splat size, in pixels, below which a splat is discarded (default 0 = disabled).

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L319)

**`Experimental`**

The name of the material

#### Inherited from

`PushMaterial.name`

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L531)

**`Experimental`**

Callback triggered when the material is compiled

#### Inherited from

`PushMaterial.onCompiled`

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L570)

**`Experimental`**

An event triggered when the material is disposed

#### Inherited from

`PushMaterial.onDisposeObservable`

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L536)

**`Experimental`**

Callback triggered when an error occurs

#### Inherited from

`PushMaterial.onError`

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

**`Experimental`**

Plugin manager for this material

#### Inherited from

`PushMaterial.pluginManager`

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L800)

**`Experimental`**

Stores the size of points

#### Inherited from

`PushMaterial.pointSize`

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L333)

**`Experimental`**

For internal use only. Please do not use.

#### Inherited from

`PushMaterial.reservedDataStore`

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L770)

**`Experimental`**

Specifies if there should be a separate pass for culling

#### Inherited from

`PushMaterial.separateCullingPass`

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L251)

**`Experimental`**

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

`PushMaterial.shadowDepthWrapper`

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L526)

**`Experimental`**

Stores the value for side orientation

#### Inherited from

`PushMaterial.sideOrientation`

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L351)

**`Experimental`**

The state of the material

#### Inherited from

`PushMaterial.state`

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L907)

**`Experimental`**

Gives access to the stencil properties of the material

#### Inherited from

`PushMaterial.stencil`

***

### textureRepetitionHexTilingParams

> **textureRepetitionHexTilingParams**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L459)

**`Experimental`**

Parameters for the hex tiling texture repetition mode (TEXTURE_REPETITION_HEX_TILING).
x = rotation strength (0..1, default 1.0) — how much each hex tile is rotated.
y = fall-off contrast (0..1, default 0.6) — how much luminance affects blending weight at tile borders.
z = exponent (1..20, default 7.0) — controls the sharpness of weight falloff between tiles.
w = contrast (0..1, default 0.5) — boost blending contrast via Gain3 (0.5 = neutral, &gt;0.5 = higher contrast).

#### See

https://jcgt.org/published/0011/03/05/

#### Inherited from

`PushMaterial.textureRepetitionHexTilingParams`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L310)

**`Experimental`**

Gets or sets the unique id of the material

#### Inherited from

`PushMaterial.uniqueId`

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:806](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L806)

**`Experimental`**

Stores the z offset Factor value

#### Inherited from

`PushMaterial.zOffset`

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L812)

**`Experimental`**

Stores the z offset Units value

#### Inherited from

`PushMaterial.zOffsetUnits`

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L173)

**`Experimental`**

The all dirty flag value

#### Inherited from

`PushMaterial.AllDirtyFlag`

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L158)

**`Experimental`**

The dirty attribute flag value

#### Inherited from

`PushMaterial.AttributesDirtyFlag`

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L128)

**`Experimental`**

Stores the clock-wise side orientation

#### Inherited from

`PushMaterial.ClockWiseSideOrientation`

***

### Compensation

> `static` **Compensation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L139)

**`Experimental`**

Compensation

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L133)

**`Experimental`**

Stores the counter clock-wise side orientation

#### Inherited from

`PushMaterial.CounterClockWiseSideOrientation`

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L233)

**`Experimental`**

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

`PushMaterial.ForceVertexOutputInvariant`

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L153)

**`Experimental`**

The dirty fresnel flag value

#### Inherited from

`PushMaterial.FresnelDirtyFlag`

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L138)

**`Experimental`**

The dirty image processing flag value

#### Inherited from

`PushMaterial.ImageProcessingDirtyFlag`

***

### KernelSize

> `static` **KernelSize**: `number` = `0.3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L134)

**`Experimental`**

Point spread function (default 0.3). Can be overriden per GS material

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L148)

**`Experimental`**

The dirty light flag value

#### Inherited from

`PushMaterial.LightDirtyFlag`

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L217)

**`Experimental`**

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

`PushMaterial.LIGHTFALLOFF_GLTF`

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L211)

**`Experimental`**

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

`PushMaterial.LIGHTFALLOFF_PHYSICAL`

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L223)

**`Experimental`**

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

`PushMaterial.LIGHTFALLOFF_STANDARD`

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L107)

**`Experimental`**

Returns the line list draw mode

#### Inherited from

`PushMaterial.LineListDrawMode`

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L111)

**`Experimental`**

Returns the line loop draw mode

#### Inherited from

`PushMaterial.LineLoopDrawMode`

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L115)

**`Experimental`**

Returns the line strip draw mode

#### Inherited from

`PushMaterial.LineStripDrawMode`

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L188)

**`Experimental`**

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

`PushMaterial.MATERIAL_ALPHABLEND`

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L183)

**`Experimental`**

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

`PushMaterial.MATERIAL_ALPHATEST`

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L194)

**`Experimental`**

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

`PushMaterial.MATERIAL_ALPHATESTANDBLEND`

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L206)

**`Experimental`**

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`PushMaterial.MATERIAL_NORMALBLENDMETHOD_RNM`

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L200)

**`Experimental`**

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`PushMaterial.MATERIAL_NORMALBLENDMETHOD_WHITEOUT`

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L178)

**`Experimental`**

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

`PushMaterial.MATERIAL_OPAQUE`

***

### MinPixelSize

> `static` **MinPixelSize**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L145)

**`Experimental`**

Minimum projected splat size, in pixels, below which a splat is discarded (default 0 = disabled).
Matches PlayCanvas `minPixelSize`. Applies to all Gaussian Splatting meshes using this material.

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L163)

**`Experimental`**

The dirty misc flag value

#### Inherited from

`PushMaterial.MiscDirtyFlag`

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L228)

**`Experimental`**

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

`PushMaterial.OnEventObservable`

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L99)

**`Experimental`**

Returns the point fill mode

#### Inherited from

`PushMaterial.PointFillMode`

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L103)

**`Experimental`**

Returns the point list draw mode

#### Inherited from

`PushMaterial.PointListDrawMode`

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L168)

**`Experimental`**

The dirty prepass flag value

#### Inherited from

`PushMaterial.PrePassDirtyFlag`

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L143)

**`Experimental`**

The dirty texture flag value

#### Inherited from

`PushMaterial.TextureDirtyFlag`

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L123)

**`Experimental`**

Returns the triangle fan draw mode

#### Inherited from

`PushMaterial.TriangleFanDrawMode`

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L91)

**`Experimental`**

Returns the triangle fill mode

#### Inherited from

`PushMaterial.TriangleFillMode`

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L119)

**`Experimental`**

Returns the triangle strip draw mode

#### Inherited from

`PushMaterial.TriangleStripDrawMode`

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L95)

**`Experimental`**

Returns the wireframe mode

#### Inherited from

`PushMaterial.WireFrameFillMode`

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L394)

**`Experimental`**

Gets the alpha value of the material

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L377)

**`Experimental`**

Sets the alpha value of the material

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PushMaterial.alpha`

***

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L685)

**`Experimental`**

Gets the value of the alpha mode

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:674](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L674)

**`Experimental`**

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

`PushMaterial.alphaMode`

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L692)

**`Experimental`**

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

`PushMaterial.alphaModes`

***

### backFaceCulling

#### Get Signature

> **get** **backFaceCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L418)

**`Experimental`**

Gets the culling state

##### Returns

`boolean`

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L407)

**`Experimental`**

Sets the culling state (true to enable culling, false to disable)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.backFaceCulling`

***

### blockDirtyMechanism

#### Get Signature

> **get** **blockDirtyMechanism**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L491)

**`Experimental`**

Block the dirty-mechanism for this specific material
When set to false after being true the material will be marked as dirty.

##### Returns

`boolean`

#### Set Signature

> **set** **blockDirtyMechanism**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L495)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.blockDirtyMechanism`

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L356)

**`Experimental`**

If the material can be rendered to several textures with MRT extension

##### Returns

`boolean`

#### Inherited from

`PushMaterial.canRenderToMRT`

***

### compensation

#### Get Signature

> **get** **compensation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L172)

**`Experimental`**

Get compensation

##### Returns

`boolean`

#### Set Signature

> **set** **compensation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L164)

**`Experimental`**

Set compensation default value is `GaussianSplattingMaterial.Compensation`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cullBackFaces

#### Get Signature

> **get** **cullBackFaces**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L481)

**`Experimental`**

Gets the type of faces that should be culled

##### Returns

`boolean`

#### Set Signature

> **set** **cullBackFaces**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L470)

**`Experimental`**

Sets the type of faces that should be culled (true for back faces, false for front faces)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.cullBackFaces`

***

### fillMode

#### Get Signature

> **get** **fillMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:858](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L858)

**`Experimental`**

Gets the material fill mode

##### Returns

`number`

#### Set Signature

> **set** **fillMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:865](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L865)

**`Experimental`**

Sets the material fill mode

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PushMaterial.fillMode`

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:792](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L792)

**`Experimental`**

Gets the value of the fog enabled state

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:781](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L781)

**`Experimental`**

Sets the state for enabling fog

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.fogEnabled`

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L179)

**`Experimental`**

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Overrides

`PushMaterial.hasRenderTargetTextures`

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1158)

**`Experimental`**

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

`PushMaterial.isFrozen`

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L738)

**`Experimental`**

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

`PushMaterial.isPrePassCapable`

***

### isVertexOutputInvariant

#### Get Signature

> **get** **isVertexOutputInvariant**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:942](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L942)

**`Experimental`**

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

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.isVertexOutputInvariant`

***

### needDepthPrePass

#### Get Signature

> **get** **needDepthPrePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:731](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L731)

**`Experimental`**

Gets the depth pre-pass value

##### Returns

`boolean`

#### Set Signature

> **set** **needDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:718](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L718)

**`Experimental`**

Sets the need depth pre-pass value

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.needDepthPrePass`

***

### onBind

#### Set Signature

> **set** **onBind**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L609)

**`Experimental`**

Called during a bind event

##### Parameters

###### callback

(`Mesh`) => `void`

##### Returns

`void`

#### Inherited from

`PushMaterial.onBind`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L593)

**`Experimental`**

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

`PushMaterial.onBindObservable`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L581)

**`Experimental`**

Called during a dispose event

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

`PushMaterial.onDispose`

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L632)

**`Experimental`**

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

`PushMaterial.onEffectCreatedObservable`

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L619)

**`Experimental`**

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

`PushMaterial.onUnBindObservable`

***

### pointsCloud

#### Get Signature

> **get** **pointsCloud**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:837](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L837)

**`Experimental`**

Gets the value specifying if point clouds are enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pointsCloud**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L850)

**`Experimental`**

Sets the state of point cloud mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.pointsCloud`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L296)

**`Experimental`**

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`PushMaterial.shaderLanguage`

***

### textureRepetitionMode

#### Get Signature

> **get** **textureRepetitionMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L446)

**`Experimental`**

Gets the texture repetition breaking mode.

##### See

https://iquilezles.org/articles/texturerepetition/

##### Returns

`number`

#### Set Signature

> **set** **textureRepetitionMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L433)

**`Experimental`**

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

`PushMaterial.textureRepetitionMode`

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1255)

**`Experimental`**

Gets the current transparency mode.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1270)

**`Experimental`**

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

`PushMaterial.transparencyMode`

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L917)

**`Experimental`**

In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
You can try switching to logarithmic depth.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:921](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L921)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.useLogarithmicDepth`

***

### useVertexPulling

#### Get Signature

> **get** **useVertexPulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L270)

**`Experimental`**

Tells the engine to draw geometry using vertex pulling instead of index drawing. This will automatically
set the vertex buffers as storage buffers and make them accessible to the vertex shader (WebGPU only).

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexPulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L274)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.useVertexPulling`

***

### wireframe

#### Get Signature

> **get** **wireframe**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L814)

**`Experimental`**

##### Returns

`boolean`

#### Set Signature

> **set** **wireframe**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:829](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L829)

**`Experimental`**

Sets the state of wireframe mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.wireframe`

## Methods

### atomicMaterialsUpdate()

> **atomicMaterialsUpdate**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L513)

**`Experimental`**

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

`PushMaterial.atomicMaterialsUpdate`

***

### bind()

> **bind**(`world`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L72)

**`Experimental`**

Binds the material to the mesh

#### Parameters

##### world

[`Matrix`](Matrix.md)

defines the world transformation matrix

##### mesh?

[`Mesh`](Mesh.md)

defines the mesh to bind the material to

#### Returns

`void`

#### Inherited from

`PushMaterial.bind`

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1507)

**`Experimental`**

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

`PushMaterial.bindEyePosition`

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L560)

**`Experimental`**

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

#### Overrides

`PushMaterial.bindForSubMesh`

***

### bindOnlyNormalMatrix()

> **bindOnlyNormalMatrix**(`normalMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L68)

**`Experimental`**

Binds the given normal matrix to the active effect

#### Parameters

##### normalMatrix

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`PushMaterial.bindOnlyNormalMatrix`

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L59)

**`Experimental`**

Binds the given world matrix to the active effect

#### Parameters

##### world

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`PushMaterial.bindOnlyWorldMatrix`

***

### bindView()

> **bindView**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1480)

**`Experimental`**

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view matrix to

#### Returns

`void`

#### Inherited from

`PushMaterial.bindView`

***

### bindViewProjection()

> **bindViewProjection**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1492)

**`Experimental`**

Binds the view projection and projection matrices to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view projection and projection matrices to

#### Returns

`void`

#### Inherited from

`PushMaterial.bindViewProjection`

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1444)

**`Experimental`**

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Inherited from

`PushMaterial.buildUniformLayout`

***

### clone()

> **clone**(`name`): `GaussianSplattingMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:874](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L874)

**`Experimental`**

Clones the material.

#### Parameters

##### name

`string`

The cloned name.

#### Returns

`GaussianSplattingMaterial`

The cloned material.

#### Overrides

`PushMaterial.clone`

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`, `notBoundToMesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L100)

**`Experimental`**

Disposes the push material resources.

#### Parameters

##### forceDisposeEffect?

`boolean`

defines whether to dispose the effect

##### forceDisposeTextures?

`boolean`

defines whether to dispose the textures

##### notBoundToMesh?

`boolean`

defines whether the material is not bound to a mesh

#### Returns

`void`

#### Inherited from

`PushMaterial.dispose`

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`, `onError?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1673)

**`Experimental`**

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

`PushMaterial.forceCompilation`

***

### forceCompilationAsync()

> **forceCompilationAsync**(`mesh`, `options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1753](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1753)

**`Experimental`**

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

`PushMaterial.forceCompilationAsync`

***

### freeze()

> **freeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1180)

**`Experimental`**

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

`PushMaterial.freeze`

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1599](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1599)

**`Experimental`**

Gets the active textures from the material

#### Returns

[`BaseTexture`](BaseTexture.md)[]

an array of textures

#### Inherited from

`PushMaterial.getActiveTextures`

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1367)

**`Experimental`**

Gets the texture used for the alpha test

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture to use for alpha testing

#### Inherited from

`PushMaterial.getAlphaTestTexture`

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1589](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1589)

**`Experimental`**

Returns the animatable textures.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Inherited from

`PushMaterial.getAnimatables`

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1650)

**`Experimental`**

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

`PushMaterial.getBindedMeshes`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:899](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L899)

**`Experimental`**

Gets the class name of the material

#### Returns

`string`

"GaussianSplattingMaterial"

#### Overrides

`PushMaterial.getClassName`

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L23)

**`Experimental`**

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

`PushMaterial.getEffect`

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1237)

**`Experimental`**

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

`PushMaterial.getScene`

***

### getSourceMesh()

> **getSourceMesh**(): [`GaussianSplattingMesh`](GaussianSplattingMesh.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L446)

**`Experimental`**

Gets the source mesh of this material, which is the Gaussian Splatting mesh that provides the data for rendering

#### Returns

[`GaussianSplattingMesh`](GaussianSplattingMesh.md) \| `null`

The Gaussian Splatting mesh that provides the data for rendering, or null if not set

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1610](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1610)

**`Experimental`**

Specifies if the material uses a texture

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

defines the texture to check against the material

#### Returns

`boolean`

a boolean specifying if the material uses the texture

#### Inherited from

`PushMaterial.hasTexture`

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L27)

**`Experimental`**

Specifies if the material is ready to be used

#### Parameters

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

##### useInstances?

`boolean`

specifies if instances should be used

#### Returns

`boolean`

a boolean indicating if the material is ready to be used

#### Inherited from

`PushMaterial.isReady`

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L265)

**`Experimental`**

Checks whether the material is ready to be rendered for a given mesh.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to render

##### subMesh

[`SubMesh`](SubMesh.md)

The submesh to check against

#### Returns

`boolean`

true if all the dependencies are ready (Textures, Effects...)

#### Overrides

`PushMaterial.isReadyForSubMesh`

***

### makeDepthRenderingMaterial()

> **makeDepthRenderingMaterial**(`scene`, `shaderLanguage`, `alphaBlendedDepth?`, `compoundMesh?`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:793](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L793)

**`Experimental`**

Create a depth rendering material for a Gaussian Splatting mesh

#### Parameters

##### scene

[`Scene`](Scene.md)

scene it belongs to

##### shaderLanguage

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

GLSL or WGSL

##### alphaBlendedDepth?

`boolean` = `false`

whether to enable alpha blended depth rendering

##### compoundMesh?

`boolean` = `false`

whether the mesh is a compound mesh

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

depth rendering shader material

***

### makeVoxelRenderingMaterial()

> **makeVoxelRenderingMaterial**(`scene`, `shaderLanguage`, `maxDrawBuffers`, `compoundMesh?`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:740](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L740)

**`Experimental`**

Create a voxel rendering material for a Gaussian Splatting mesh, for use with IBL shadow voxelization.
The returned ShaderMaterial's onBindObservable binds the GS mesh-side uniforms (textures, alpha, dataTextureSize, part data).
The caller (e.g. iblShadowsVoxelRenderer) is responsible for setting the per-slab uniforms on the returned material:
viewMatrix, invWorldScale, nearPlane, farPlane, stepSize.

#### Parameters

##### scene

[`Scene`](Scene.md)

scene it belongs to

##### shaderLanguage

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

GLSL or WGSL

##### maxDrawBuffers

`number`

number of draw buffers (MRT outputs) per voxelization slab

##### compoundMesh?

`boolean` = `false`

whether the mesh is a compound mesh

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

voxel rendering shader material

***

### markAsDirty()

> **markAsDirty**(`flag`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1799)

**`Experimental`**

Marks a define in the material to indicate that it needs to be re-computed

#### Parameters

##### flag

`number`

defines a flag used to determine which parts of the material have to be marked as dirty

#### Returns

`void`

#### Inherited from

`PushMaterial.markAsDirty`

***

### markDirty()

> **markDirty**(`forceMaterialDirty?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1375)

**`Experimental`**

Marks the material to indicate that it needs to be re-calculated

#### Parameters

##### forceMaterialDirty?

`boolean` = `false`

Forces the material to be marked as dirty for all components (same as this.markAsDirty(Material.AllDirtyFlag)). You should use this flag if the material is frozen and you want to force a recompilation.

#### Returns

`void`

#### Inherited from

`PushMaterial.markDirty`

***

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L195)

**`Experimental`**

Specifies whether or not this material should be rendered in alpha blend mode.

#### Returns

`boolean`

true

#### Overrides

`PushMaterial.needAlphaBlending`

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1321)

**`Experimental`**

Specifies if the mesh will require alpha blending

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha blending is needed for the mesh

#### Inherited from

`PushMaterial.needAlphaBlendingForMesh`

***

### needAlphaTesting()

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L187)

**`Experimental`**

Specifies whether or not this material should be rendered in alpha test mode.

#### Returns

`boolean`

false

#### Overrides

`PushMaterial.needAlphaTesting`

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1355)

**`Experimental`**

Specifies if material alpha testing should be turned on for the mesh

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha testing should be turned on for the mesh

#### Inherited from

`PushMaterial.needAlphaTestingForMesh`

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1844)

**`Experimental`**

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

`PushMaterial.resetDrawCache`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:889](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L889)

**`Experimental`**

Serializes the current material to its JSON representation.

#### Returns

`any`

The JSON representation.

#### Overrides

`PushMaterial.serialize`

***

### setAlphaMode()

> **setAlphaMode**(`value`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L701)

**`Experimental`**

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

`PushMaterial.setAlphaMode`

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1998](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1998)

**`Experimental`**

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

`PushMaterial.setPrePassRenderer`

***

### setSourceMesh()

> **setSourceMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L438)

**`Experimental`**

GaussianSplattingMaterial belongs to a single mesh

#### Parameters

##### mesh

[`GaussianSplattingMesh`](GaussianSplattingMesh.md)

mesh this material belongs to

#### Returns

`void`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1137)

**`Experimental`**

Returns a string representation of the current material

#### Parameters

##### fullDetails?

`boolean`

defines a boolean indicating which levels of logging is desired

#### Returns

`string`

a string with material information

#### Inherited from

`PushMaterial.toString`

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1562)

**`Experimental`**

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

`PushMaterial.unbind`

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1188)

**`Experimental`**

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

`PushMaterial.unfreeze`

***

### BindEffect()

> `static` **BindEffect**(`mesh`, `effect`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L456)

**`Experimental`**

Bind material effect for a specific Gaussian Splatting mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

Gaussian splatting mesh

##### effect

[`Effect`](Effect.md)

Splatting material or node material

##### scene

[`Scene`](Scene.md)

scene that contains mesh and camera used for rendering

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): `GaussianSplattingMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:910](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L910)

**`Experimental`**

Parse a JSON input to create back a Gaussian Splatting material.

#### Parameters

##### source

`any`

The JSON data to parse

##### scene

[`Scene`](Scene.md)

The scene to create the parsed material in

##### rootUrl

`string`

The root url of the assets the material depends upon

#### Returns

`GaussianSplattingMaterial`

the instantiated GaussianSplattingMaterial.

#### Overrides

`PushMaterial.Parse`

***

### ParseAlphaMode()

> `static` **ParseAlphaMode**(`parsedMaterial`, `material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:2143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L2143)

**`Experimental`**

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

`PushMaterial.ParseAlphaMode`
