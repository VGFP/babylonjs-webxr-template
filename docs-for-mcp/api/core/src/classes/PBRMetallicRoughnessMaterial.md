[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PBRMetallicRoughnessMaterial

# Class: PBRMetallicRoughnessMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L16)

The PBR material of BJS following the metal roughness convention.

This fits to the PBR convention in the GLTF definition:
https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/README.md

## Extends

- [`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md)

## Constructors

### Constructor

> **new PBRMetallicRoughnessMaterial**(`name`, `scene?`): `PBRMetallicRoughnessMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L65)

Instantiates a new PBRMetalRoughnessMaterial instance.

#### Parameters

##### name

`string`

The material name

##### scene?

[`Scene`](Scene.md)

The scene the material will be use in.

#### Returns

`PBRMetallicRoughnessMaterial`

#### Overrides

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`constructor`](PBRBaseSimpleMaterial.md#constructor)

## Properties

### \_imageProcessingConfiguration

> **\_imageProcessingConfiguration**: [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L30)

Default configuration related to image processing available in the standard Material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`_imageProcessingConfiguration`](PBRBaseSimpleMaterial.md#_imageprocessingconfiguration)

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L56)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`_imageProcessingObserver`](PBRBaseSimpleMaterial.md#_imageprocessingobserver)

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L256)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`allowShaderHotSwapping`](PBRBaseSimpleMaterial.md#allowshaderhotswapping)

***

### alphaCutOff

> **alphaCutOff**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L90)

Defines the alpha limits in alpha test mode.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`alphaCutOff`](PBRBaseSimpleMaterial.md#alphacutoff)

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L563)

Stores the animations for the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`animations`](PBRBaseSimpleMaterial.md#animations)

***

### anisotropy

> `readonly` **anisotropy**: [`PBRAnisotropicConfiguration`](PBRAnisotropicConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:870](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L870)

Defines the anisotropic parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`anisotropy`](PBRBaseSimpleMaterial.md#anisotropy)

***

### baseColor

> **baseColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L25)

The base color has two different interpretations depending on the value of metalness.
When the material is a metal, the base color is the specific measured reflectance value
at normal incidence (F0). For a non-metal the base color represents the reflected diffuse color
of the material.

***

### baseTexture

> **baseTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L33)

Base texture of the metallic workflow. It contains both the baseColor information in RGB as
well as opacity information in the alpha channel.

***

### brdf

> `readonly` **brdf**: [`PBRBRDFConfiguration`](PBRBRDFConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:875](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L875)

Defines the BRDF parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`brdf`](PBRBaseSimpleMaterial.md#brdf)

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L337)

Specifies if the ready state should be checked on each call

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`checkReadyOnEveryCall`](PBRBaseSimpleMaterial.md#checkreadyoneverycall)

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L343)

Specifies if the ready state should be checked once

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`checkReadyOnlyOnce`](PBRBaseSimpleMaterial.md#checkreadyonlyonce)

***

### clearCoat

> `readonly` **clearCoat**: [`PBRClearCoatConfiguration`](PBRClearCoatConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:860](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L860)

Defines the clear coat layer parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clearCoat`](PBRBaseSimpleMaterial.md#clearcoat)

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:875](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L875)

Gets or sets the active clipplane 1

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clipPlane`](PBRBaseSimpleMaterial.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L880)

Gets or sets the active clipplane 2

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clipPlane2`](PBRBaseSimpleMaterial.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:885](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L885)

Gets or sets the active clipplane 3

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clipPlane3`](PBRBaseSimpleMaterial.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L890)

Gets or sets the active clipplane 4

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clipPlane4`](PBRBaseSimpleMaterial.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:895](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L895)

Gets or sets the active clipplane 5

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clipPlane5`](PBRBaseSimpleMaterial.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:900](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L900)

Gets or sets the active clipplane 6

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clipPlane6`](PBRBaseSimpleMaterial.md#clipplane6)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`customShaderNameResolve`](PBRBaseSimpleMaterial.md#customshadernameresolve)

***

### decalMap

> **decalMap**: [`Nullable`](../type-aliases/Nullable.md)\<[`DecalMapConfiguration`](DecalMapConfiguration.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.decalMap.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMaterial.decalMap.ts#L14)

Defines the decal map parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`decalMap`](PBRBaseSimpleMaterial.md#decalmap)

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L762)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`depthFunction`](PBRBaseSimpleMaterial.md#depthfunction)

***

### detailMap

> `readonly` **detailMap**: [`DetailMapConfiguration`](DetailMapConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:895](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L895)

Defines the detail map parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`detailMap`](PBRBaseSimpleMaterial.md#detailmap)

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:750](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L750)

Specifies if color writing should be disabled

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`disableColorWrite`](PBRBaseSimpleMaterial.md#disablecolorwrite)

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L744)

Specifies if depth writing should be disabled

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`disableDepthWrite`](PBRBaseSimpleMaterial.md#disabledepthwrite)

***

### disableLighting

> **disableLighting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L27)

If sets to true, disables all the lights affecting the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`disableLighting`](PBRBaseSimpleMaterial.md#disablelighting)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:553](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L553)

Specifies if the material should be serialized

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`doNotSerialize`](PBRBaseSimpleMaterial.md#donotserialize)

***

### emissiveColor

> **emissiveColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L62)

Emissivie color used to self-illuminate the model.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`emissiveColor`](PBRBaseSimpleMaterial.md#emissivecolor)

***

### emissiveTexture

> **emissiveTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L69)

Emissivie texture used to self-illuminate the model.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`emissiveTexture`](PBRBaseSimpleMaterial.md#emissivetexture)

***

### environmentTexture

> **environmentTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L34)

Environment Texture used in the material (this is use for both reflection and environment lighting).

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`environmentTexture`](PBRBaseSimpleMaterial.md#environmenttexture)

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:756](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L756)

Specifies if depth writing should be forced

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`forceDepthWrite`](PBRBaseSimpleMaterial.md#forcedepthwrite)

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:539](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L539)

Callback triggered to get the render target textures

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getRenderTargetTextures`](PBRBaseSimpleMaterial.md#getrendertargettextures)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L302)

The ID of the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`id`](PBRBaseSimpleMaterial.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L370)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`inspectableCustomProperties`](PBRBaseSimpleMaterial.md#inspectablecustomproperties)

***

### invertNormalMapX

> **invertNormalMapX**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L41)

If sets to true, x component of normal map value will invert (x = 1.0 - x).

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`invertNormalMapX`](PBRBaseSimpleMaterial.md#invertnormalmapx)

***

### invertNormalMapY

> **invertNormalMapY**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L48)

If sets to true, y component of normal map value will invert (y = 1.0 - y).

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`invertNormalMapY`](PBRBaseSimpleMaterial.md#invertnormalmapy)

***

### iridescence

> `readonly` **iridescence**: [`PBRIridescenceConfiguration`](PBRIridescenceConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:865](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L865)

Defines the iridescence layer parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`iridescence`](PBRBaseSimpleMaterial.md#iridescence)

***

### lightmapTexture

> **lightmapTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L116)

Stores the pre-calculated light information of a mesh in a texture.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`lightmapTexture`](PBRBaseSimpleMaterial.md#lightmaptexture)

***

### maxSimultaneousLights

> **maxSimultaneousLights**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L20)

Number of Simultaneous lights allowed on the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`maxSimultaneousLights`](PBRBaseSimpleMaterial.md#maxsimultaneouslights)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L323)

Gets or sets user defined metadata

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`metadata`](PBRBaseSimpleMaterial.md#metadata)

***

### metallic

> **metallic**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L41)

Specifies the metallic scalar value of the material.
Can also be used to scale the metalness values of the metallic texture.

***

### metallicRoughnessTexture

> **metallicRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L57)

Texture containing both the metallic value in the B channel and the
roughness value in the G channel to keep better precision.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L317)

The name of the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`name`](PBRBaseSimpleMaterial.md#name)

***

### normalTexture

> **normalTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L55)

Normal map used in the model.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`normalTexture`](PBRBaseSimpleMaterial.md#normaltexture)

***

### occlusionStrength

> **occlusionStrength**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L76)

Occlusion Channel Strength.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`occlusionStrength`](PBRBaseSimpleMaterial.md#occlusionstrength)

***

### occlusionTexture

> **occlusionTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L83)

Occlusion Texture of the material (adding extra occlusion effects).

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`occlusionTexture`](PBRBaseSimpleMaterial.md#occlusiontexture)

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L529)

Callback triggered when the material is compiled

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onCompiled`](PBRBaseSimpleMaterial.md#oncompiled)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L568)

An event triggered when the material is disposed

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onDisposeObservable`](PBRBaseSimpleMaterial.md#ondisposeobservable)

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L534)

Callback triggered when an error occurs

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onError`](PBRBaseSimpleMaterial.md#onerror)

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L36)

Plugin manager for this material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`pluginManager`](PBRBaseSimpleMaterial.md#pluginmanager)

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L798)

Stores the size of points

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`pointSize`](PBRBaseSimpleMaterial.md#pointsize)

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L890)

Defines additional PrePass parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`prePassConfiguration`](PBRBaseSimpleMaterial.md#prepassconfiguration)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L331)

For internal use only. Please do not use.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`reservedDataStore`](PBRBaseSimpleMaterial.md#reserveddatastore)

***

### roughness

> **roughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L49)

Specifies the roughness scalar value of the material.
Can also be used to scale the roughness values of the metallic texture.

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:768](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L768)

Specifies if there should be a separate pass for culling

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`separateCullingPass`](PBRBaseSimpleMaterial.md#separatecullingpass)

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L249)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`shadowDepthWrapper`](PBRBaseSimpleMaterial.md#shadowdepthwrapper)

***

### sheen

> `readonly` **sheen**: [`PBRSheenConfiguration`](PBRSheenConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L880)

Defines the Sheen parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`sheen`](PBRBaseSimpleMaterial.md#sheen)

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L524)

Stores the value for side orientation

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`sideOrientation`](PBRBaseSimpleMaterial.md#sideorientation)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L349)

The state of the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`state`](PBRBaseSimpleMaterial.md#state)

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:905](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L905)

Gives access to the stencil properties of the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`stencil`](PBRBaseSimpleMaterial.md#stencil)

***

### subSurface

> `readonly` **subSurface**: [`PBRSubSurfaceConfiguration`](PBRSubSurfaceConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:885](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L885)

Defines the SubSurface parameters for the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`subSurface`](PBRBaseSimpleMaterial.md#subsurface)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`textureRepetitionHexTilingParams`](PBRBaseSimpleMaterial.md#texturerepetitionhextilingparams)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L308)

Gets or sets the unique id of the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`uniqueId`](PBRBaseSimpleMaterial.md#uniqueid)

***

### useLightmapAsShadowmap

> **useLightmapAsShadowmap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L123)

If true, the light map contains occlusion information instead of lighting info.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`useLightmapAsShadowmap`](PBRBaseSimpleMaterial.md#uselightmapasshadowmap)

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L804)

Stores the z offset Factor value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`zOffset`](PBRBaseSimpleMaterial.md#zoffset)

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:810](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L810)

Stores the z offset Units value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`zOffsetUnits`](PBRBaseSimpleMaterial.md#zoffsetunits)

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L171)

The all dirty flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`AllDirtyFlag`](PBRBaseSimpleMaterial.md#alldirtyflag)

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L156)

The dirty attribute flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`AttributesDirtyFlag`](PBRBaseSimpleMaterial.md#attributesdirtyflag)

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L126)

Stores the clock-wise side orientation

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`ClockWiseSideOrientation`](PBRBaseSimpleMaterial.md#clockwisesideorientation)

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L131)

Stores the counter clock-wise side orientation

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`CounterClockWiseSideOrientation`](PBRBaseSimpleMaterial.md#counterclockwisesideorientation)

***

### DEFAULT\_AO\_ON\_ANALYTICAL\_LIGHTS

> `static` **DEFAULT\_AO\_ON\_ANALYTICAL\_LIGHTS**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L319)

Defines the default value of how much AO map is occluding the analytical lights
(point spot...).

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`DEFAULT_AO_ON_ANALYTICAL_LIGHTS`](PBRBaseSimpleMaterial.md#default_ao_on_analytical_lights)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L342)

Force all the PBR materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`ForceGLSL`](PBRBaseSimpleMaterial.md#forceglsl)

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L231)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`ForceVertexOutputInvariant`](PBRBaseSimpleMaterial.md#forcevertexoutputinvariant)

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L151)

The dirty fresnel flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`FresnelDirtyFlag`](PBRBaseSimpleMaterial.md#fresneldirtyflag)

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L136)

The dirty image processing flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`ImageProcessingDirtyFlag`](PBRBaseSimpleMaterial.md#imageprocessingdirtyflag)

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L146)

The dirty light flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`LightDirtyFlag`](PBRBaseSimpleMaterial.md#lightdirtyflag)

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L330)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`LIGHTFALLOFF_GLTF`](PBRBaseSimpleMaterial.md#lightfalloff_gltf)

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L324)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`LIGHTFALLOFF_PHYSICAL`](PBRBaseSimpleMaterial.md#lightfalloff_physical)

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L336)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`LIGHTFALLOFF_STANDARD`](PBRBaseSimpleMaterial.md#lightfalloff_standard)

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L105)

Returns the line list draw mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`LineListDrawMode`](PBRBaseSimpleMaterial.md#linelistdrawmode)

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L109)

Returns the line loop draw mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`LineLoopDrawMode`](PBRBaseSimpleMaterial.md#lineloopdrawmode)

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L113)

Returns the line strip draw mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`LineStripDrawMode`](PBRBaseSimpleMaterial.md#linestripdrawmode)

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L186)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`MATERIAL_ALPHABLEND`](PBRBaseSimpleMaterial.md#material_alphablend)

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L181)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`MATERIAL_ALPHATEST`](PBRBaseSimpleMaterial.md#material_alphatest)

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L192)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`MATERIAL_ALPHATESTANDBLEND`](PBRBaseSimpleMaterial.md#material_alphatestandblend)

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L204)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_RNM`](PBRBaseSimpleMaterial.md#material_normalblendmethod_rnm)

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L198)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_WHITEOUT`](PBRBaseSimpleMaterial.md#material_normalblendmethod_whiteout)

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L176)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`MATERIAL_OPAQUE`](PBRBaseSimpleMaterial.md#material_opaque)

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L161)

The dirty misc flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`MiscDirtyFlag`](PBRBaseSimpleMaterial.md#miscdirtyflag)

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L226)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`OnEventObservable`](PBRBaseSimpleMaterial.md#oneventobservable)

***

### PBRMATERIAL\_ALPHABLEND

> `readonly` `static` **PBRMATERIAL\_ALPHABLEND**: `2` = `Material.MATERIAL_ALPHABLEND`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L307)

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`PBRMATERIAL_ALPHABLEND`](PBRBaseSimpleMaterial.md#pbrmaterial_alphablend)

***

### PBRMATERIAL\_ALPHATEST

> `readonly` `static` **PBRMATERIAL\_ALPHATEST**: `1` = `Material.MATERIAL_ALPHATEST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L302)

PBRMaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`PBRMATERIAL_ALPHATEST`](PBRBaseSimpleMaterial.md#pbrmaterial_alphatest)

***

### PBRMATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **PBRMATERIAL\_ALPHATESTANDBLEND**: `3` = `Material.MATERIAL_ALPHATESTANDBLEND`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L313)

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`PBRMATERIAL_ALPHATESTANDBLEND`](PBRBaseSimpleMaterial.md#pbrmaterial_alphatestandblend)

***

### PBRMATERIAL\_OPAQUE

> `readonly` `static` **PBRMATERIAL\_OPAQUE**: `0` = `Material.MATERIAL_OPAQUE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L297)

PBRMaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`PBRMATERIAL_OPAQUE`](PBRBaseSimpleMaterial.md#pbrmaterial_opaque)

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L97)

Returns the point fill mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`PointFillMode`](PBRBaseSimpleMaterial.md#pointfillmode)

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L101)

Returns the point list draw mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`PointListDrawMode`](PBRBaseSimpleMaterial.md#pointlistdrawmode)

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L166)

The dirty prepass flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`PrePassDirtyFlag`](PBRBaseSimpleMaterial.md#prepassdirtyflag)

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L141)

The dirty texture flag value

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`TextureDirtyFlag`](PBRBaseSimpleMaterial.md#texturedirtyflag)

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L121)

Returns the triangle fan draw mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`TriangleFanDrawMode`](PBRBaseSimpleMaterial.md#trianglefandrawmode)

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L89)

Returns the triangle fill mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`TriangleFillMode`](PBRBaseSimpleMaterial.md#trianglefillmode)

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L117)

Returns the triangle strip draw mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`TriangleStripDrawMode`](PBRBaseSimpleMaterial.md#trianglestripdrawmode)

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L93)

Returns the wireframe mode

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`WireFrameFillMode`](PBRBaseSimpleMaterial.md#wireframefillmode)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`alpha`](PBRBaseSimpleMaterial.md#alpha)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`alphaMode`](PBRBaseSimpleMaterial.md#alphamode)

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L690)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`alphaModes`](PBRBaseSimpleMaterial.md#alphamodes)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`backFaceCulling`](PBRBaseSimpleMaterial.md#backfaceculling)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`blockDirtyMechanism`](PBRBaseSimpleMaterial.md#blockdirtymechanism)

***

### cameraColorCurves

#### Get Signature

> **get** **cameraColorCurves**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L179)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

#### Set Signature

> **set** **cameraColorCurves**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L188)

The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cameraColorCurves`](PBRBaseSimpleMaterial.md#cameracolorcurves)

***

### cameraColorCurvesEnabled

#### Get Signature

> **get** **cameraColorCurvesEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L93)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorCurvesEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L99)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cameraColorCurvesEnabled`](PBRBaseSimpleMaterial.md#cameracolorcurvesenabled)

***

### cameraColorGradingEnabled

#### Get Signature

> **get** **cameraColorGradingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L106)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorGradingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L112)

Gets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cameraColorGradingEnabled`](PBRBaseSimpleMaterial.md#cameracolorgradingenabled)

***

### cameraColorGradingTexture

#### Get Signature

> **get** **cameraColorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L163)

Gets the Color Grading 2D Lookup Texture.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **cameraColorGradingTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L169)

Sets the Color Grading 2D Lookup Texture.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cameraColorGradingTexture`](PBRBaseSimpleMaterial.md#cameracolorgradingtexture)

***

### cameraContrast

#### Get Signature

> **get** **cameraContrast**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L149)

Gets The camera contrast used on this material.

##### Returns

`number`

#### Set Signature

> **set** **cameraContrast**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L156)

Sets The camera contrast used on this material.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cameraContrast`](PBRBaseSimpleMaterial.md#cameracontrast)

***

### cameraExposure

#### Get Signature

> **get** **cameraExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L134)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Returns

`number`

#### Set Signature

> **set** **cameraExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L142)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cameraExposure`](PBRBaseSimpleMaterial.md#cameraexposure)

***

### cameraToneMappingEnabled

#### Get Signature

> **get** **cameraToneMappingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L119)

Gets whether tonemapping is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraToneMappingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L125)

Sets whether tonemapping is enabled or not

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cameraToneMappingEnabled`](PBRBaseSimpleMaterial.md#cameratonemappingenabled)

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:785](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L785)

Can this material render to several textures at once

##### Returns

`boolean`

#### Inherited from

[`PBRCustomMaterial`](../../../materials/src/classes/PBRCustomMaterial.md).[`canRenderToMRT`](../../../materials/src/classes/PBRCustomMaterial.md#canrendertomrt)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`cullBackFaces`](PBRBaseSimpleMaterial.md#cullbackfaces)

***

### doubleSided

#### Get Signature

> **get** **doubleSided**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L96)

Gets the current double sided mode.

##### Returns

`boolean`

#### Set Signature

> **set** **doubleSided**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseSimpleMaterial.ts#L102)

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`doubleSided`](PBRBaseSimpleMaterial.md#doublesided)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`fillMode`](PBRBaseSimpleMaterial.md#fillmode)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`fogEnabled`](PBRBaseSimpleMaterial.md#fogenabled)

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:940](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L940)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`hasRenderTargetTextures`](PBRBaseSimpleMaterial.md#hasrendertargettextures)

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L35)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L44)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`imageProcessingConfiguration`](PBRBaseSimpleMaterial.md#imageprocessingconfiguration)

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1156)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`isFrozen`](PBRBaseSimpleMaterial.md#isfrozen)

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:951](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L951)

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`isPrePassCapable`](PBRBaseSimpleMaterial.md#isprepasscapable)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`isVertexOutputInvariant`](PBRBaseSimpleMaterial.md#isvertexoutputinvariant)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`needDepthPrePass`](PBRBaseSimpleMaterial.md#needdepthprepass)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onBind`](PBRBaseSimpleMaterial.md#onbind)

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L591)

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onBindObservable`](PBRBaseSimpleMaterial.md#onbindobservable)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onDispose`](PBRBaseSimpleMaterial.md#ondispose)

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L630)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onEffectCreatedObservable`](PBRBaseSimpleMaterial.md#oneffectcreatedobservable)

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L617)

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`onUnBindObservable`](PBRBaseSimpleMaterial.md#onunbindobservable)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`pointsCloud`](PBRBaseSimpleMaterial.md#pointscloud)

***

### realTimeFiltering

#### Get Signature

> **get** **realTimeFiltering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L762)

Enables realtime filtering on the texture.

##### Returns

`boolean`

#### Set Signature

> **set** **realTimeFiltering**(`b`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:765](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L765)

##### Parameters

###### b

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`realTimeFiltering`](PBRBaseSimpleMaterial.md#realtimefiltering)

***

### realTimeFilteringQuality

#### Get Signature

> **get** **realTimeFilteringQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:774](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L774)

Quality switch for realtime filtering

##### Returns

`number`

#### Set Signature

> **set** **realTimeFilteringQuality**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:777](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L777)

##### Parameters

###### n

`number`

##### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`realTimeFilteringQuality`](PBRBaseSimpleMaterial.md#realtimefilteringquality)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L294)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`shaderLanguage`](PBRBaseSimpleMaterial.md#shaderlanguage)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`textureRepetitionMode`](PBRBaseSimpleMaterial.md#texturerepetitionmode)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`transparencyMode`](PBRBaseSimpleMaterial.md#transparencymode)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`useLogarithmicDepth`](PBRBaseSimpleMaterial.md#uselogarithmicdepth)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`useVertexPulling`](PBRBaseSimpleMaterial.md#usevertexpulling)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`wireframe`](PBRBaseSimpleMaterial.md#wireframe)

## Methods

### \_attachImageProcessingConfiguration()

> **\_attachImageProcessingConfiguration**(`configuration`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L62)

Attaches a new image processing configuration to the Standard Material.

#### Parameters

##### configuration

[`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`_attachImageProcessingConfiguration`](PBRBaseSimpleMaterial.md#_attachimageprocessingconfiguration)

***

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`atomicMaterialsUpdate`](PBRBaseSimpleMaterial.md#atomicmaterialsupdate)

***

### bind()

> **bind**(`world`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L72)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`bind`](PBRBaseSimpleMaterial.md#bind)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`bindEyePosition`](PBRBaseSimpleMaterial.md#bindeyeposition)

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:1937](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L1937)

Binds the submesh data.

#### Parameters

##### world

[`Matrix`](Matrix.md)

The world matrix.

##### mesh

[`Mesh`](Mesh.md)

The BJS mesh.

##### subMesh

[`SubMesh`](SubMesh.md)

A submesh of the BJS mesh.

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`bindForSubMesh`](PBRBaseSimpleMaterial.md#bindforsubmesh)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`bindOnlyNormalMatrix`](PBRBaseSimpleMaterial.md#bindonlynormalmatrix)

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L59)

Binds the given world matrix to the active effect

#### Parameters

##### world

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`bindOnlyWorldMatrix`](PBRBaseSimpleMaterial.md#bindonlyworldmatrix)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`bindView`](PBRBaseSimpleMaterial.md#bindview)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`bindViewProjection`](PBRBaseSimpleMaterial.md#bindviewprojection)

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:1883](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L1883)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`buildUniformLayout`](PBRBaseSimpleMaterial.md#builduniformlayout)

***

### clone()

> **clone**(`name`): `PBRMetallicRoughnessMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L86)

Makes a duplicate of the current material.

#### Parameters

##### name

`string`

name to use for the new material.

#### Returns

`PBRMetallicRoughnessMaterial`

cloned material instance

#### Overrides

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`clone`](PBRBaseSimpleMaterial.md#clone)

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:2489](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L2489)

Disposes the resources of the material.

#### Parameters

##### forceDisposeEffect?

`boolean`

Forces the disposal of effects.

##### forceDisposeTextures?

`boolean`

Forces the disposal of all textures.

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`dispose`](PBRBaseSimpleMaterial.md#dispose)

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L1842)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Define the mesh we want to force the compilation for

##### onCompiled?

(`material`) => `void`

Define a callback triggered when the compilation completes

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../interfaces/IMaterialCompilationOptions.md)\>

Define the options used to create the compilation

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`forceCompilation`](PBRBaseSimpleMaterial.md#forcecompilation)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`forceCompilationAsync`](PBRBaseSimpleMaterial.md#forcecompilationasync)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`freeze`](PBRBaseSimpleMaterial.md#freeze)

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:2334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L2334)

Returns an array of the actively used textures.

#### Returns

[`BaseTexture`](BaseTexture.md)[]

- Array of BaseTextures

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getActiveTextures`](PBRBaseSimpleMaterial.md#getactivetextures)

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:1020](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L1020)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture used for the alpha test.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getAlphaTestTexture`](PBRBaseSimpleMaterial.md#getalphatesttexture)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:2258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L2258)

Returns the animatable textures.
If material have animatable metallic texture, then reflectivity texture will not be returned, even if it has animations.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getAnimatables`](PBRBaseSimpleMaterial.md#getanimatables)

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1648)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getBindedMeshes`](PBRBaseSimpleMaterial.md#getbindedmeshes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L77)

#### Returns

`string`

the current class name of the material.

#### Overrides

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getClassName`](PBRBaseSimpleMaterial.md#getclassname)

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getEffect`](PBRBaseSimpleMaterial.md#geteffect)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1235)

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`getScene`](PBRBaseSimpleMaterial.md#getscene)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:2401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L2401)

Checks to see if a texture is used in the material.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

Base texture to use.

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`hasTexture`](PBRBaseSimpleMaterial.md#hastexture)

***

### isMetallicWorkflow()

> **isMetallicWorkflow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:1247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L1247)

Specifies if the material uses metallic roughness workflow.

#### Returns

`boolean`

boolean specifying if the material uses metallic roughness workflow.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`isMetallicWorkflow`](PBRBaseSimpleMaterial.md#ismetallicworkflow)

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L27)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`isReady`](PBRBaseSimpleMaterial.md#isready)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:1031](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L1031)

Specifies that the submesh is ready to be used.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

BJS mesh.

##### subMesh

[`SubMesh`](SubMesh.md)

A submesh of the BJS mesh.  Used to check if it is ready.

##### useInstances?

`boolean`

Specifies that instances should be used.

#### Returns

`boolean`

- boolean indicating that the submesh is ready or not.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`isReadyForSubMesh`](PBRBaseSimpleMaterial.md#isreadyforsubmesh)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`markAsDirty`](PBRBaseSimpleMaterial.md#markasdirty)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`markDirty`](PBRBaseSimpleMaterial.md#markdirty)

***

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:976](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L976)

#### Returns

`boolean`

whether or not this material should be rendered in alpha blend mode.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`needAlphaBlending`](PBRBaseSimpleMaterial.md#needalphablending)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`needAlphaBlendingForMesh`](PBRBaseSimpleMaterial.md#needalphablendingformesh)

***

### needAlphaTesting()

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:991](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L991)

#### Returns

`boolean`

whether or not this material should be rendered in alpha test mode.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`needAlphaTesting`](PBRBaseSimpleMaterial.md#needalphatesting)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`needAlphaTestingForMesh`](PBRBaseSimpleMaterial.md#needalphatestingformesh)

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1842)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`resetDrawCache`](PBRBaseSimpleMaterial.md#resetdrawcache)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L105)

Serialize the material to a parsable JSON object.

#### Returns

`any`

the JSON object

#### Overrides

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`serialize`](PBRBaseSimpleMaterial.md#serialize)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`setAlphaMode`](PBRBaseSimpleMaterial.md#setalphamode)

***

### setPrePassRenderer()

> **setPrePassRenderer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts:2471](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.ts#L2471)

Sets the required values to the prepass renderer.
It can't be sets when subsurface scattering of this material is disabled.
When scene have ability to enable subsurface prepass effect, it will enable.

#### Returns

`boolean`

- If prepass is enabled or not.

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`setPrePassRenderer`](PBRBaseSimpleMaterial.md#setprepassrenderer)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`toString`](PBRBaseSimpleMaterial.md#tostring)

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1560](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1560)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`unbind`](PBRBaseSimpleMaterial.md#unbind)

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1186)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`unfreeze`](PBRBaseSimpleMaterial.md#unfreeze)

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): `PBRMetallicRoughnessMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrMetallicRoughnessMaterial.ts#L138)

Parses a JSON object corresponding to the serialize function.

#### Parameters

##### source

`any`

JSON source object.

##### scene

[`Scene`](Scene.md)

Defines the scene we are parsing for

##### rootUrl

`string`

Defines the rootUrl of this parsed object

#### Returns

`PBRMetallicRoughnessMaterial`

a new PBRMetalRoughnessMaterial

#### Overrides

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`Parse`](PBRBaseSimpleMaterial.md#parse)

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

[`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md).[`ParseAlphaMode`](PBRBaseSimpleMaterial.md#parsealphamode)
