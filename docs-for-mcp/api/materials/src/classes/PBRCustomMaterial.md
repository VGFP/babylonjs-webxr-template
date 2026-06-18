[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [materials/src](../README.md) / PBRCustomMaterial

# Class: PBRCustomMaterial

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L113)

The Physically based material of BJS.

This offers the main features of a standard PBR material.
For more information, please refer to the documentation :
https://doc.babylonjs.com/features/featuresDeepDive/materials/using/introToPBR

## Extends

- [`PBRMaterial`](../../../core/src/classes/PBRMaterial.md)

## Constructors

### Constructor

> **new PBRCustomMaterial**(`name`, `scene?`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L314)

#### Parameters

##### name

`string`

##### scene?

[`Scene`](../../../core/src/classes/Scene.md)

#### Returns

`PBRCustomMaterial`

#### Overrides

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`constructor`](../../../core/src/classes/PBRMaterial.md#constructor)

## Properties

### \_createdShaderName

> **\_createdShaderName**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L125)

Name of the shader

***

### \_customAttributes

> **\_customAttributes**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L145)

List of the custom attributes

***

### \_customUniform

> **\_customUniform**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L129)

List of custom uniforms

***

### \_imageProcessingConfiguration

> **\_imageProcessingConfiguration**: [`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L30)

Default configuration related to image processing available in the standard Material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`_imageProcessingConfiguration`](../../../core/src/classes/PBRMaterial.md#_imageprocessingconfiguration)

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Observer`](../../../core/src/classes/Observer.md)\<[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L56)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`_imageProcessingObserver`](../../../core/src/classes/PBRMaterial.md#_imageprocessingobserver)

***

### \_newSamplerInstances

> **\_newSamplerInstances**: `object`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L141)

Instances of the new sampler objects

#### Index Signature

\[`name`: `string`\]: [`Texture`](../../../core/src/classes/Texture.md)

***

### \_newUniformInstances

> **\_newUniformInstances**: `object`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L137)

Instances of the new uniform objects

#### Index Signature

\[`name`: `string`\]: `any`

***

### \_newUniforms

> **\_newUniforms**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L133)

Names of the new uniforms

***

### albedoColor

> **albedoColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L285)

AKA Diffuse Color in other nomenclature.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`albedoColor`](../../../core/src/classes/PBRMaterial.md#albedocolor)

***

### albedoTexture

> **albedoTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L93)

AKA Diffuse Texture in standard nomenclature.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`albedoTexture`](../../../core/src/classes/PBRMaterial.md#albedotexture)

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L258)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`allowShaderHotSwapping`](../../../core/src/classes/PBRMaterial.md#allowshaderhotswapping)

***

### alphaCutOff

> **alphaCutOff**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L394)

Defines the alpha limits in alpha test mode.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`alphaCutOff`](../../../core/src/classes/PBRMaterial.md#alphacutoff)

***

### ambientColor

> **ambientColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L278)

The color of a material in ambient lighting.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ambientColor`](../../../core/src/classes/PBRMaterial.md#ambientcolor)

***

### ambientTexture

> **ambientTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L114)

AKA Occlusion Texture in other nomenclature.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ambientTexture`](../../../core/src/classes/PBRMaterial.md#ambienttexture)

***

### ambientTextureImpactOnAnalyticalLights

> **ambientTextureImpactOnAnalyticalLights**: `number` = `PBRMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L130)

Defines how much the AO map is occluding the analytical lights (point spot...).
1 means it completely occludes it
0 mean it has no impact

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ambientTextureImpactOnAnalyticalLights`](../../../core/src/classes/PBRMaterial.md#ambienttextureimpactonanalyticallights)

***

### ambientTextureStrength

> **ambientTextureStrength**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L121)

AKA Occlusion Texture Intensity in other nomenclature.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ambientTextureStrength`](../../../core/src/classes/PBRMaterial.md#ambienttexturestrength)

***

### animations

> **animations**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L565)

Stores the animations for the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`animations`](../../../core/src/classes/PBRMaterial.md#animations)

***

### anisotropy

> `readonly` **anisotropy**: [`PBRAnisotropicConfiguration`](../../../core/src/classes/PBRAnisotropicConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:870](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L870)

Defines the anisotropic parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`anisotropy`](../../../core/src/classes/PBRMaterial.md#anisotropy)

***

### applyDecalMapAfterDetailMap

> **applyDecalMapAfterDetailMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:658](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L658)

If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`applyDecalMapAfterDetailMap`](../../../core/src/classes/PBRMaterial.md#applydecalmapafterdetailmap)

***

### baseDiffuseRoughness

> **baseDiffuseRoughness**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L299)

OpenPBR Base Diffuse Roughness (roughness of the diffuse lobe).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`baseDiffuseRoughness`](../../../core/src/classes/PBRMaterial.md#basediffuseroughness)

***

### baseDiffuseRoughnessTexture

> **baseDiffuseRoughnessTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L107)

OpenPBR Base Diffuse Roughness texture (roughness of the diffuse lobe).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`baseDiffuseRoughnessTexture`](../../../core/src/classes/PBRMaterial.md#basediffuseroughnesstexture)

***

### baseWeight

> **baseWeight**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L292)

OpenPBR Base Weight (multiplier to the diffuse and metal lobes).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`baseWeight`](../../../core/src/classes/PBRMaterial.md#baseweight)

***

### baseWeightTexture

> **baseWeightTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L100)

OpenPBR Base Weight texture (multiplier to the diffuse and metal lobes).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`baseWeightTexture`](../../../core/src/classes/PBRMaterial.md#baseweighttexture)

***

### brdf

> `readonly` **brdf**: [`PBRBRDFConfiguration`](../../../core/src/classes/PBRBRDFConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:875](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L875)

Defines the BRDF parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`brdf`](../../../core/src/classes/PBRMaterial.md#brdf)

***

### bumpTexture

> **bumpTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L249)

Stores surface normal data used to displace a mesh in a texture.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bumpTexture`](../../../core/src/classes/PBRMaterial.md#bumptexture)

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L339)

Specifies if the ready state should be checked on each call

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`checkReadyOnEveryCall`](../../../core/src/classes/PBRMaterial.md#checkreadyoneverycall)

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L345)

Specifies if the ready state should be checked once

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`checkReadyOnlyOnce`](../../../core/src/classes/PBRMaterial.md#checkreadyonlyonce)

***

### clearCoat

> `readonly` **clearCoat**: [`PBRClearCoatConfiguration`](../../../core/src/classes/PBRClearCoatConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:860](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L860)

Defines the clear coat layer parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clearCoat`](../../../core/src/classes/PBRMaterial.md#clearcoat)

***

### clipPlane

> **clipPlane**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:877](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L877)

Gets or sets the active clipplane 1

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clipPlane`](../../../core/src/classes/PBRMaterial.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:882](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L882)

Gets or sets the active clipplane 2

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clipPlane2`](../../../core/src/classes/PBRMaterial.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:887](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L887)

Gets or sets the active clipplane 3

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clipPlane3`](../../../core/src/classes/PBRMaterial.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:892](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L892)

Gets or sets the active clipplane 4

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clipPlane4`](../../../core/src/classes/PBRMaterial.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L897)

Gets or sets the active clipplane 5

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clipPlane5`](../../../core/src/classes/PBRMaterial.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L902)

Gets or sets the active clipplane 6

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clipPlane6`](../../../core/src/classes/PBRMaterial.md#clipplane6)

***

### CustomParts

> **CustomParts**: [`ShaderAlbedoParts`](ShaderAlbedoParts.md)

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L121)

Custom shader structure

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

`string`[] \| [`MaterialDefines`](../../../core/src/classes/MaterialDefines.md)

##### attributes?

`string`[]

##### options?

[`ICustomShaderNameResolveOptions`](../../../core/src/interfaces/ICustomShaderNameResolveOptions.md)

#### Returns

`string`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`customShaderNameResolve`](../../../core/src/classes/PBRMaterial.md#customshadernameresolve)

***

### decalMap

> **decalMap**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`DecalMapConfiguration`](../../../core/src/classes/DecalMapConfiguration.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.decalMap.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.decalMap.types.ts#L12)

Defines the decal map parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`decalMap`](../../../core/src/classes/PBRMaterial.md#decalmap)

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L764)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`depthFunction`](../../../core/src/classes/PBRMaterial.md#depthfunction)

***

### detailMap

> `readonly` **detailMap**: [`DetailMapConfiguration`](../../../core/src/classes/DetailMapConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:895](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L895)

Defines the detail map parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`detailMap`](../../../core/src/classes/PBRMaterial.md#detailmap)

***

### directIntensity

> **directIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L55)

Intensity of the direct lights e.g. the four lights available in your scene.
This impacts both the direct diffuse and specular highlights.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`directIntensity`](../../../core/src/classes/PBRMaterial.md#directintensity)

***

### disableBumpMap

> **disableBumpMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L86)

Debug Control allowing disabling the bump map on this material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`disableBumpMap`](../../../core/src/classes/PBRMaterial.md#disablebumpmap)

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L752)

Specifies if color writing should be disabled

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`disableColorWrite`](../../../core/src/classes/PBRMaterial.md#disablecolorwrite)

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L746)

Specifies if depth writing should be disabled

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`disableDepthWrite`](../../../core/src/classes/PBRMaterial.md#disabledepthwrite)

***

### disableLighting

> **disableLighting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:550](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L550)

If sets to true, disables all the lights affecting the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`disableLighting`](../../../core/src/classes/PBRMaterial.md#disablelighting)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L555)

Specifies if the material should be serialized

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`doNotSerialize`](../../../core/src/classes/PBRMaterial.md#donotserialize)

***

### emissiveColor

> **emissiveColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L320)

The color emitted from the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`emissiveColor`](../../../core/src/classes/PBRMaterial.md#emissivecolor)

***

### emissiveIntensity

> **emissiveIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L63)

Intensity of the emissive part of the material.
This helps controlling the emissive effect without modifying the emissive color.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`emissiveIntensity`](../../../core/src/classes/PBRMaterial.md#emissiveintensity)

***

### emissiveTexture

> **emissiveTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L151)

Stores the emissive values in a texture.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`emissiveTexture`](../../../core/src/classes/PBRMaterial.md#emissivetexture)

***

### enableSpecularAntiAliasing

> **enableSpecularAntiAliasing**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:628](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L628)

Enables specular anti aliasing in the PBR shader.
It will both interacts on the Geometry for analytical and IBL lighting.
It also prefilter the roughness map based on the bump values.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`enableSpecularAntiAliasing`](../../../core/src/classes/PBRMaterial.md#enablespecularantialiasing)

***

### environmentBRDFTexture

> **environmentBRDFTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:612](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L612)

Let user defines the brdf lookup texture used for IBL.
A default 8bit version is embedded but you could point at :
* Default texture: https://assets.babylonjs.com/environments/correlatedMSBRDF_RGBD.png
* Default 16bit pixel depth texture: https://assets.babylonjs.com/environments/correlatedMSBRDF.dds
* LEGACY Default None correlated https://assets.babylonjs.com/environments/uncorrelatedBRDF_RGBD.png
* LEGACY Default None correlated 16bit pixel depth https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`environmentBRDFTexture`](../../../core/src/classes/PBRMaterial.md#environmentbrdftexture)

***

### environmentIntensity

> **environmentIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L71)

Intensity of the environment e.g. how much the environment will light the object
either through harmonics for rough material or through the reflection for shiny ones.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`environmentIntensity`](../../../core/src/classes/PBRMaterial.md#environmentintensity)

***

### forceAlphaTest

> **forceAlphaTest**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L387)

Enforces alpha test in opaque or blend mode in order to improve the performances of some situations.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`forceAlphaTest`](../../../core/src/classes/PBRMaterial.md#forcealphatest)

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L758)

Specifies if depth writing should be forced

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`forceDepthWrite`](../../../core/src/classes/PBRMaterial.md#forcedepthwrite)

***

### forceIrradianceInFragment

> **forceIrradianceInFragment**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:557](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L557)

Force the shader to compute irradiance in the fragment shader in order to take bump in account.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`forceIrradianceInFragment`](../../../core/src/classes/PBRMaterial.md#forceirradianceinfragment)

***

### forceNormalForward

> **forceNormalForward**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L619)

Force normal to face away from face.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`forceNormalForward`](../../../core/src/classes/PBRMaterial.md#forcenormalforward)

***

### FragmentShader

> **FragmentShader**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L152)

Fragment shader string

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => [`SmartArray`](../../../core/src/classes/SmartArray.md)\<[`RenderTargetTexture`](../../../core/src/classes/RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L541)

Callback triggered to get the render target textures

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getRenderTargetTextures`](../../../core/src/classes/PBRMaterial.md#getrendertargettextures)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L304)

The ID of the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`id`](../../../core/src/classes/PBRMaterial.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../../../core/src/interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L372)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`inspectableCustomProperties`](../../../core/src/classes/PBRMaterial.md#inspectablecustomproperties)

***

### invertNormalMapX

> **invertNormalMapX**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:571](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L571)

If sets to true, x component of normal map value will invert (x = 1.0 - x).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`invertNormalMapX`](../../../core/src/classes/PBRMaterial.md#invertnormalmapx)

***

### invertNormalMapY

> **invertNormalMapY**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:578](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L578)

If sets to true, y component of normal map value will invert (y = 1.0 - y).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`invertNormalMapY`](../../../core/src/classes/PBRMaterial.md#invertnormalmapy)

***

### iridescence

> `readonly` **iridescence**: [`PBRIridescenceConfiguration`](../../../core/src/classes/PBRIridescenceConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:865](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L865)

Defines the iridescence layer parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`iridescence`](../../../core/src/classes/PBRMaterial.md#iridescence)

***

### lightmapTexture

> **lightmapTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L256)

Stores the pre-calculated light information of a mesh in a texture.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`lightmapTexture`](../../../core/src/classes/PBRMaterial.md#lightmaptexture)

***

### maxSimultaneousLights

> **maxSimultaneousLights**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L564)

Number of Simultaneous lights allowed on the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`maxSimultaneousLights`](../../../core/src/classes/PBRMaterial.md#maxsimultaneouslights)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L325)

Gets or sets user defined metadata

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`metadata`](../../../core/src/classes/PBRMaterial.md#metadata)

***

### metallic

> **metallic**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L173)

Specifies the metallic scalar of the metallic/roughness workflow.
Can also be used to scale the metalness values of the metallic texture.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`metallic`](../../../core/src/classes/PBRMaterial.md#metallic)

***

### metallicF0Factor

> **metallicF0Factor**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L194)

In metallic workflow, specifies an F0 factor to help configuring the material F0.
By default the indexOfrefraction is used to compute F0;

This is used as a factor against the default reflectance at normal incidence to tweak it.

F0 = defaultF0 * metallicF0Factor * metallicReflectanceColor;
F90 = metallicReflectanceColor;

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`metallicF0Factor`](../../../core/src/classes/PBRMaterial.md#metallicf0factor)

***

### metallicReflectanceColor

> **metallicReflectanceColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L207)

In metallic workflow, specifies an F0 color.
By default the F90 is always 1;

Please note that this factor is also used as a factor against the default reflectance at normal incidence.

F0 = defaultF0_from_IOR * metallicF0Factor * metallicReflectanceColor
F90 = metallicF0Factor;

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`metallicReflectanceColor`](../../../core/src/classes/PBRMaterial.md#metallicreflectancecolor)

***

### metallicReflectanceTexture

> **metallicReflectanceTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L224)

Defines to store metallicReflectanceColor in RGB and metallicF0Factor in A
This is multiplied against the scalar values defined in the material.
If useOnlyMetallicFromMetallicReflectanceTexture is true, don't use the RGB channels, only A

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`metallicReflectanceTexture`](../../../core/src/classes/PBRMaterial.md#metallicreflectancetexture)

***

### metallicTexture

> **metallicTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L165)

Used to switch from specular/glossiness to metallic/roughness workflow.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`metallicTexture`](../../../core/src/classes/PBRMaterial.md#metallictexture)

***

### microSurface

> **microSurface**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L327)

AKA Glossiness in other nomenclature.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`microSurface`](../../../core/src/classes/PBRMaterial.md#microsurface)

***

### microSurfaceTexture

> **microSurfaceTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L242)

Used to enable roughness/glossiness fetch from a separate channel depending on the current mode.
Gray Scale represents roughness in metallic mode and glossiness in specular mode.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`microSurfaceTexture`](../../../core/src/classes/PBRMaterial.md#microsurfacetexture)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L319)

The name of the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`name`](../../../core/src/classes/PBRMaterial.md#name)

***

### onCompiled

> **onCompiled**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L531)

Callback triggered when the material is compiled

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onCompiled`](../../../core/src/classes/PBRMaterial.md#oncompiled)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L570)

An event triggered when the material is disposed

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onDisposeObservable`](../../../core/src/classes/PBRMaterial.md#ondisposeobservable)

***

### onError

> **onError**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L536)

Callback triggered when an error occurs

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onError`](../../../core/src/classes/PBRMaterial.md#onerror)

***

### opacityTexture

> **opacityTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L137)

Stores the alpha values in a texture. Use luminance if texture.getAlphaFromRGB is true.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`opacityTexture`](../../../core/src/classes/PBRMaterial.md#opacitytexture)

***

### parallaxScaleBias

> **parallaxScaleBias**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:543](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L543)

Controls the scale bias of the parallax mode.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`parallaxScaleBias`](../../../core/src/classes/PBRMaterial.md#parallaxscalebias)

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](../../../core/src/classes/MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

Plugin manager for this material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`pluginManager`](../../../core/src/classes/PBRMaterial.md#pluginmanager)

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L800)

Stores the size of points

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`pointSize`](../../../core/src/classes/PBRMaterial.md#pointsize)

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:890](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L890)

Defines additional PrePass parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`prePassConfiguration`](../../../core/src/classes/PBRMaterial.md#prepassconfiguration)

***

### reflectanceTexture

> **reflectanceTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L234)

Defines to store reflectanceColor in RGB
This is multiplied against the scalar values defined in the material.
If both reflectanceTexture and metallicReflectanceTexture textures are provided and useOnlyMetallicFromMetallicReflectanceTexture
is false, metallicReflectanceTexture takes priority and reflectanceTexture is not used

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`reflectanceTexture`](../../../core/src/classes/PBRMaterial.md#reflectancetexture)

***

### reflectionColor

> **reflectionColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L313)

The color reflected from the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`reflectionColor`](../../../core/src/classes/PBRMaterial.md#reflectioncolor)

***

### reflectionTexture

> **reflectionTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L144)

Stores the reflection values in a texture.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`reflectionTexture`](../../../core/src/classes/PBRMaterial.md#reflectiontexture)

***

### reflectivityColor

> **reflectivityColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L306)

AKA Specular Color in other nomenclature.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`reflectivityColor`](../../../core/src/classes/PBRMaterial.md#reflectivitycolor)

***

### reflectivityTexture

> **reflectivityTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L158)

AKA Specular texture in other nomenclature.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`reflectivityTexture`](../../../core/src/classes/PBRMaterial.md#reflectivitytexture)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L333)

For internal use only. Please do not use.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`reservedDataStore`](../../../core/src/classes/PBRMaterial.md#reserveddatastore)

***

### roughness

> **roughness**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L181)

Specifies the roughness scalar of the metallic/roughness workflow.
Can also be used to scale the roughness values of the metallic texture.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`roughness`](../../../core/src/classes/PBRMaterial.md#roughness)

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L770)

Specifies if there should be a separate pass for culling

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`separateCullingPass`](../../../core/src/classes/PBRMaterial.md#separatecullingpass)

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](../../../core/src/classes/ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L251)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`shadowDepthWrapper`](../../../core/src/classes/PBRMaterial.md#shadowdepthwrapper)

***

### sheen

> `readonly` **sheen**: [`PBRSheenConfiguration`](../../../core/src/classes/PBRSheenConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:880](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L880)

Defines the Sheen parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`sheen`](../../../core/src/classes/PBRMaterial.md#sheen)

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L526)

Stores the value for side orientation

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`sideOrientation`](../../../core/src/classes/PBRMaterial.md#sideorientation)

***

### specularIntensity

> **specularIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L79)

This is a special control allowing the reduction of the specular highlights coming from the
four lights of the scene. Those highlights may not be needed in full environment lighting.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`specularIntensity`](../../../core/src/classes/PBRMaterial.md#specularintensity)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L351)

The state of the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`state`](../../../core/src/classes/PBRMaterial.md#state)

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](../../../core/src/classes/MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L907)

Gives access to the stencil properties of the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`stencil`](../../../core/src/classes/PBRMaterial.md#stencil)

***

### subSurface

> `readonly` **subSurface**: [`PBRSubSurfaceConfiguration`](../../../core/src/classes/PBRSubSurfaceConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L885)

Defines the SubSurface parameters for the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`subSurface`](../../../core/src/classes/PBRMaterial.md#subsurface)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`textureRepetitionHexTilingParams`](../../../core/src/classes/PBRMaterial.md#texturerepetitionhextilingparams)

***

### twoSidedLighting

> **twoSidedLighting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:585](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L585)

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`twoSidedLighting`](../../../core/src/classes/PBRMaterial.md#twosidedlighting)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L310)

Gets or sets the unique id of the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`uniqueId`](../../../core/src/classes/PBRMaterial.md#uniqueid)

***

### unlit

> **unlit**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:651](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L651)

If set to true, no lighting calculations will be applied.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`unlit`](../../../core/src/classes/PBRMaterial.md#unlit)

***

### useAlphaFresnel

> **useAlphaFresnel**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L593)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useAlphaFresnel`](../../../core/src/classes/PBRMaterial.md#usealphafresnel)

***

### useAlphaFromAlbedoTexture

> **useAlphaFromAlbedoTexture**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L380)

Specifies that the alpha is coming form the albedo channel alpha channel for alpha blending.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useAlphaFromAlbedoTexture`](../../../core/src/classes/PBRMaterial.md#usealphafromalbedotexture)

***

### useAmbientInGrayScale

> **useAmbientInGrayScale**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L445)

Specifies if the ambient texture contains the ambient occlusion information in its red channel only.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useAmbientInGrayScale`](../../../core/src/classes/PBRMaterial.md#useambientingrayscale)

***

### useAmbientOcclusionFromMetallicTextureRed

> **useAmbientOcclusionFromMetallicTextureRed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L438)

Specifies if the metallic texture contains the ambient occlusion information in its red channel.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useAmbientOcclusionFromMetallicTextureRed`](../../../core/src/classes/PBRMaterial.md#useambientocclusionfrommetallictexturered)

***

### useAutoMicroSurfaceFromReflectivityMap

> **useAutoMicroSurfaceFromReflectivityMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L453)

In case the reflectivity map does not contain the microsurface information in its alpha channel,
The material will try to infer what glossiness each pixel should be.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useAutoMicroSurfaceFromReflectivityMap`](../../../core/src/classes/PBRMaterial.md#useautomicrosurfacefromreflectivitymap)

***

### useHorizonOcclusion

> **useHorizonOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:636](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L636)

This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
makes the reflect vector face the model (under horizon).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useHorizonOcclusion`](../../../core/src/classes/PBRMaterial.md#usehorizonocclusion)

***

### useLightmapAsShadowmap

> **useLightmapAsShadowmap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L373)

If true, the light map contains occlusion information instead of lighting info.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useLightmapAsShadowmap`](../../../core/src/classes/PBRMaterial.md#uselightmapasshadowmap)

***

### useLinearAlphaFresnel

> **useLinearAlphaFresnel**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:601](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L601)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha stays linear to compute the fresnel)

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useLinearAlphaFresnel`](../../../core/src/classes/PBRMaterial.md#uselinearalphafresnel)

***

### useMetallnessFromMetallicTextureBlue

> **useMetallnessFromMetallicTextureBlue**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L431)

Specifies if the metallic texture contains the metallness information in its blue channel.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useMetallnessFromMetallicTextureBlue`](../../../core/src/classes/PBRMaterial.md#usemetallnessfrommetallictextureblue)

***

### useMicroSurfaceFromReflectivityMapAlpha

> **useMicroSurfaceFromReflectivityMapAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L409)

Specifies if the reflectivity texture contains the glossiness information in its alpha channel.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useMicroSurfaceFromReflectivityMapAlpha`](../../../core/src/classes/PBRMaterial.md#usemicrosurfacefromreflectivitymapalpha)

***

### useObjectSpaceNormalMap

> **useObjectSpaceNormalMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:522](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L522)

Allows using an object space normal map (instead of tangent space).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useObjectSpaceNormalMap`](../../../core/src/classes/PBRMaterial.md#useobjectspacenormalmap)

***

### useOnlyMetallicFromMetallicReflectanceTexture

> **useOnlyMetallicFromMetallicReflectanceTexture**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L215)

Specifies that only the A channel from metallicReflectanceTexture should be used.
If false, both RGB and A channels will be used

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useOnlyMetallicFromMetallicReflectanceTexture`](../../../core/src/classes/PBRMaterial.md#useonlymetallicfrommetallicreflectancetexture)

***

### useParallax

> **useParallax**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L529)

Allows using the bump map in parallax mode.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useParallax`](../../../core/src/classes/PBRMaterial.md#useparallax)

***

### useParallaxOcclusion

> **useParallaxOcclusion**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L536)

Allows using the bump map in parallax occlusion mode.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useParallaxOcclusion`](../../../core/src/classes/PBRMaterial.md#useparallaxocclusion)

***

### useRadianceOcclusion

> **useRadianceOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L644)

This parameters will enable/disable radiance occlusion by preventing the radiance to lit
too much the area relying on ambient texture to define their ambient occlusion.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useRadianceOcclusion`](../../../core/src/classes/PBRMaterial.md#useradianceocclusion)

***

### useRadianceOverAlpha

> **useRadianceOverAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L515)

Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
A car glass is a good example of that. When the street lights reflects on it you can not see what is behind.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useRadianceOverAlpha`](../../../core/src/classes/PBRMaterial.md#useradianceoveralpha)

***

### useRoughnessFromMetallicTextureAlpha

> **useRoughnessFromMetallicTextureAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L416)

Specifies if the metallic texture contains the roughness information in its alpha channel.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useRoughnessFromMetallicTextureAlpha`](../../../core/src/classes/PBRMaterial.md#useroughnessfrommetallictexturealpha)

***

### useRoughnessFromMetallicTextureGreen

> **useRoughnessFromMetallicTextureGreen**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:424](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L424)

Specifies if the metallic texture contains the roughness information in its green channel.
Needs useRoughnessFromMetallicTextureAlpha to be false.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useRoughnessFromMetallicTextureGreen`](../../../core/src/classes/PBRMaterial.md#useroughnessfrommetallictexturegreen)

***

### useSpecularOverAlpha

> **useSpecularOverAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L402)

Specifies that the material will keep the specular highlights over a transparent surface (only the most luminous ones).
A car glass is a good example of that. When sun reflects on it you can not see what is behind.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useSpecularOverAlpha`](../../../core/src/classes/PBRMaterial.md#usespecularoveralpha)

***

### VertexShader

> **VertexShader**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L156)

Vertex shader string

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:806](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L806)

Stores the z offset Factor value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`zOffset`](../../../core/src/classes/PBRMaterial.md#zoffset)

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L812)

Stores the z offset Units value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`zOffsetUnits`](../../../core/src/classes/PBRMaterial.md#zoffsetunits)

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L173)

The all dirty flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`AllDirtyFlag`](../../../core/src/classes/PBRMaterial.md#alldirtyflag)

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L158)

The dirty attribute flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`AttributesDirtyFlag`](../../../core/src/classes/PBRMaterial.md#attributesdirtyflag)

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L128)

Stores the clock-wise side orientation

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ClockWiseSideOrientation`](../../../core/src/classes/PBRMaterial.md#clockwisesideorientation)

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L133)

Stores the counter clock-wise side orientation

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`CounterClockWiseSideOrientation`](../../../core/src/classes/PBRMaterial.md#counterclockwisesideorientation)

***

### DEFAULT\_AO\_ON\_ANALYTICAL\_LIGHTS

> `static` **DEFAULT\_AO\_ON\_ANALYTICAL\_LIGHTS**: `number` = `PBRBaseMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L47)

Defines the default value of how much AO map is occluding the analytical lights
(point spot...).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`DEFAULT_AO_ON_ANALYTICAL_LIGHTS`](../../../core/src/classes/PBRMaterial.md#default_ao_on_analytical_lights)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L342)

Force all the PBR materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ForceGLSL`](../../../core/src/classes/PBRMaterial.md#forceglsl)

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L233)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ForceVertexOutputInvariant`](../../../core/src/classes/PBRMaterial.md#forcevertexoutputinvariant)

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L153)

The dirty fresnel flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`FresnelDirtyFlag`](../../../core/src/classes/PBRMaterial.md#fresneldirtyflag)

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L138)

The dirty image processing flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ImageProcessingDirtyFlag`](../../../core/src/classes/PBRMaterial.md#imageprocessingdirtyflag)

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L148)

The dirty light flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`LightDirtyFlag`](../../../core/src/classes/PBRMaterial.md#lightdirtyflag)

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L330)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`LIGHTFALLOFF_GLTF`](../../../core/src/classes/PBRMaterial.md#lightfalloff_gltf)

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L324)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`LIGHTFALLOFF_PHYSICAL`](../../../core/src/classes/PBRMaterial.md#lightfalloff_physical)

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L336)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`LIGHTFALLOFF_STANDARD`](../../../core/src/classes/PBRMaterial.md#lightfalloff_standard)

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L107)

Returns the line list draw mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`LineListDrawMode`](../../../core/src/classes/PBRMaterial.md#linelistdrawmode)

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L111)

Returns the line loop draw mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`LineLoopDrawMode`](../../../core/src/classes/PBRMaterial.md#lineloopdrawmode)

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L115)

Returns the line strip draw mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`LineStripDrawMode`](../../../core/src/classes/PBRMaterial.md#linestripdrawmode)

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L188)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`MATERIAL_ALPHABLEND`](../../../core/src/classes/PBRMaterial.md#material_alphablend)

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L183)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`MATERIAL_ALPHATEST`](../../../core/src/classes/PBRMaterial.md#material_alphatest)

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L194)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`MATERIAL_ALPHATESTANDBLEND`](../../../core/src/classes/PBRMaterial.md#material_alphatestandblend)

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L206)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_RNM`](../../../core/src/classes/PBRMaterial.md#material_normalblendmethod_rnm)

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L200)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_WHITEOUT`](../../../core/src/classes/PBRMaterial.md#material_normalblendmethod_whiteout)

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L178)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`MATERIAL_OPAQUE`](../../../core/src/classes/PBRMaterial.md#material_opaque)

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L163)

The dirty misc flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`MiscDirtyFlag`](../../../core/src/classes/PBRMaterial.md#miscdirtyflag)

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L228)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`OnEventObservable`](../../../core/src/classes/PBRMaterial.md#oneventobservable)

***

### PBRMATERIAL\_ALPHABLEND

> `readonly` `static` **PBRMATERIAL\_ALPHABLEND**: `2` = `PBRBaseMaterial.PBRMATERIAL_ALPHABLEND`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L35)

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`PBRMATERIAL_ALPHABLEND`](../../../core/src/classes/PBRMaterial.md#pbrmaterial_alphablend)

***

### PBRMATERIAL\_ALPHATEST

> `readonly` `static` **PBRMATERIAL\_ALPHATEST**: `1` = `PBRBaseMaterial.PBRMATERIAL_ALPHATEST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L30)

PBRMaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`PBRMATERIAL_ALPHATEST`](../../../core/src/classes/PBRMaterial.md#pbrmaterial_alphatest)

***

### PBRMATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **PBRMATERIAL\_ALPHATESTANDBLEND**: `3` = `PBRBaseMaterial.PBRMATERIAL_ALPHATESTANDBLEND`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L41)

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`PBRMATERIAL_ALPHATESTANDBLEND`](../../../core/src/classes/PBRMaterial.md#pbrmaterial_alphatestandblend)

***

### PBRMATERIAL\_OPAQUE

> `readonly` `static` **PBRMATERIAL\_OPAQUE**: `0` = `PBRBaseMaterial.PBRMATERIAL_OPAQUE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L25)

PBRMaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`PBRMATERIAL_OPAQUE`](../../../core/src/classes/PBRMaterial.md#pbrmaterial_opaque)

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L99)

Returns the point fill mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`PointFillMode`](../../../core/src/classes/PBRMaterial.md#pointfillmode)

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L103)

Returns the point list draw mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`PointListDrawMode`](../../../core/src/classes/PBRMaterial.md#pointlistdrawmode)

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L168)

The dirty prepass flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`PrePassDirtyFlag`](../../../core/src/classes/PBRMaterial.md#prepassdirtyflag)

***

### ShaderIndexer

> `static` **ShaderIndexer**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L117)

Index for each created shader

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L143)

The dirty texture flag value

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`TextureDirtyFlag`](../../../core/src/classes/PBRMaterial.md#texturedirtyflag)

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L123)

Returns the triangle fan draw mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`TriangleFanDrawMode`](../../../core/src/classes/PBRMaterial.md#trianglefandrawmode)

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L91)

Returns the triangle fill mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`TriangleFillMode`](../../../core/src/classes/PBRMaterial.md#trianglefillmode)

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L119)

Returns the triangle strip draw mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`TriangleStripDrawMode`](../../../core/src/classes/PBRMaterial.md#trianglestripdrawmode)

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L95)

Returns the wireframe mode

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`WireFrameFillMode`](../../../core/src/classes/PBRMaterial.md#wireframefillmode)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`alpha`](../../../core/src/classes/PBRMaterial.md#alpha)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`alphaMode`](../../../core/src/classes/PBRMaterial.md#alphamode)

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L692)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`alphaModes`](../../../core/src/classes/PBRMaterial.md#alphamodes)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`backFaceCulling`](../../../core/src/classes/PBRMaterial.md#backfaceculling)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`blockDirtyMechanism`](../../../core/src/classes/PBRMaterial.md#blockdirtymechanism)

***

### cameraColorCurves

#### Get Signature

> **get** **cameraColorCurves**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ColorCurves`](../../../core/src/classes/ColorCurves.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L179)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ColorCurves`](../../../core/src/classes/ColorCurves.md)\>

#### Set Signature

> **set** **cameraColorCurves**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L188)

The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ColorCurves`](../../../core/src/classes/ColorCurves.md)\>

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cameraColorCurves`](../../../core/src/classes/PBRMaterial.md#cameracolorcurves)

***

### cameraColorCurvesEnabled

#### Get Signature

> **get** **cameraColorCurvesEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L93)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorCurvesEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L99)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cameraColorCurvesEnabled`](../../../core/src/classes/PBRMaterial.md#cameracolorcurvesenabled)

***

### cameraColorGradingEnabled

#### Get Signature

> **get** **cameraColorGradingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L106)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorGradingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L112)

Gets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cameraColorGradingEnabled`](../../../core/src/classes/PBRMaterial.md#cameracolorgradingenabled)

***

### cameraColorGradingTexture

#### Get Signature

> **get** **cameraColorGradingTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L163)

Gets the Color Grading 2D Lookup Texture.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **cameraColorGradingTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L169)

Sets the Color Grading 2D Lookup Texture.

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cameraColorGradingTexture`](../../../core/src/classes/PBRMaterial.md#cameracolorgradingtexture)

***

### cameraContrast

#### Get Signature

> **get** **cameraContrast**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L149)

Gets The camera contrast used on this material.

##### Returns

`number`

#### Set Signature

> **set** **cameraContrast**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L156)

Sets The camera contrast used on this material.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cameraContrast`](../../../core/src/classes/PBRMaterial.md#cameracontrast)

***

### cameraExposure

#### Get Signature

> **get** **cameraExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L134)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Returns

`number`

#### Set Signature

> **set** **cameraExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L142)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cameraExposure`](../../../core/src/classes/PBRMaterial.md#cameraexposure)

***

### cameraToneMappingEnabled

#### Get Signature

> **get** **cameraToneMappingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L119)

Gets whether tonemapping is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraToneMappingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L125)

Sets whether tonemapping is enabled or not

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cameraToneMappingEnabled`](../../../core/src/classes/PBRMaterial.md#cameratonemappingenabled)

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L785)

Can this material render to several textures at once

##### Returns

`boolean`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`canRenderToMRT`](../../../core/src/classes/PBRMaterial.md#canrendertomrt)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`cullBackFaces`](../../../core/src/classes/PBRMaterial.md#cullbackfaces)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`fillMode`](../../../core/src/classes/PBRMaterial.md#fillmode)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`fogEnabled`](../../../core/src/classes/PBRMaterial.md#fogenabled)

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:940](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L940)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`hasRenderTargetTextures`](../../../core/src/classes/PBRMaterial.md#hasrendertargettextures)

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L35)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L44)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`imageProcessingConfiguration`](../../../core/src/classes/PBRMaterial.md#imageprocessingconfiguration)

***

### indexOfRefraction

#### Get Signature

> **get** **indexOfRefraction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L337)

Index of refraction of the material base layer.
https://en.wikipedia.org/wiki/List_of_refractive_indices

This does not only impact refraction but also the Base F0 of Dielectric Materials.

From dielectric fresnel rules: F0 = square((iorT - iorI) / (iorT + iorI))

##### Returns

`number`

#### Set Signature

> **set** **indexOfRefraction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L340)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`indexOfRefraction`](../../../core/src/classes/PBRMaterial.md#indexofrefraction)

***

### invertRefractionY

#### Get Signature

> **get** **invertRefractionY**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L347)

Controls if refraction needs to be inverted on Y. This could be useful for procedural texture.

##### Returns

`boolean`

#### Set Signature

> **set** **invertRefractionY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L350)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`invertRefractionY`](../../../core/src/classes/PBRMaterial.md#invertrefractiony)

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1158)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`isFrozen`](../../../core/src/classes/PBRMaterial.md#isfrozen)

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:951](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L951)

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`isPrePassCapable`](../../../core/src/classes/PBRMaterial.md#isprepasscapable)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`isVertexOutputInvariant`](../../../core/src/classes/PBRMaterial.md#isvertexoutputinvariant)

***

### linkRefractionWithTransparency

#### Get Signature

> **get** **linkRefractionWithTransparency**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L358)

This parameters will make the material used its opacity to control how much it is refracting against not.
Materials half opaque for instance using refraction could benefit from this control.

##### Returns

`boolean`

#### Set Signature

> **set** **linkRefractionWithTransparency**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L361)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`linkRefractionWithTransparency`](../../../core/src/classes/PBRMaterial.md#linkrefractionwithtransparency)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`needDepthPrePass`](../../../core/src/classes/PBRMaterial.md#needdepthprepass)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onBind`](../../../core/src/classes/PBRMaterial.md#onbind)

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L593)

An event triggered when the material is bound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onBindObservable`](../../../core/src/classes/PBRMaterial.md#onbindobservable)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onDispose`](../../../core/src/classes/PBRMaterial.md#ondispose)

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L632)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onEffectCreatedObservable`](../../../core/src/classes/PBRMaterial.md#oneffectcreatedobservable)

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L619)

An event triggered when the material is unbound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`onUnBindObservable`](../../../core/src/classes/PBRMaterial.md#onunbindobservable)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`pointsCloud`](../../../core/src/classes/PBRMaterial.md#pointscloud)

***

### realTimeFiltering

#### Get Signature

> **get** **realTimeFiltering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:762](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L762)

Enables realtime filtering on the texture.

##### Returns

`boolean`

#### Set Signature

> **set** **realTimeFiltering**(`b`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L765)

##### Parameters

###### b

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`realTimeFiltering`](../../../core/src/classes/PBRMaterial.md#realtimefiltering)

***

### realTimeFilteringQuality

#### Get Signature

> **get** **realTimeFilteringQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:774](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L774)

Quality switch for realtime filtering

##### Returns

`number`

#### Set Signature

> **set** **realTimeFilteringQuality**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L777)

##### Parameters

###### n

`number`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`realTimeFilteringQuality`](../../../core/src/classes/PBRMaterial.md#realtimefilteringquality)

***

### refractionTexture

#### Get Signature

> **get** **refractionTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L261)

Stores the refracted light information in a texture.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **refractionTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L264)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`refractionTexture`](../../../core/src/classes/PBRMaterial.md#refractiontexture)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L296)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`shaderLanguage`](../../../core/src/classes/PBRMaterial.md#shaderlanguage)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`textureRepetitionMode`](../../../core/src/classes/PBRMaterial.md#texturerepetitionmode)

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1255)

Gets the current transparency mode.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`transparencyMode`](../../../core/src/classes/PBRMaterial.md#transparencymode)

***

### useGLTFLightFalloff

#### Get Signature

> **get** **useGLTFLightFalloff**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:488](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L488)

In order to support the falloff compatibility with gltf, a special mode has been added
to reproduce the gltf light falloff.

##### Returns

`boolean`

#### Set Signature

> **set** **useGLTFLightFalloff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L496)

In order to support the falloff compatibility with gltf, a special mode has been added
to reproduce the gltf light falloff.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useGLTFLightFalloff`](../../../core/src/classes/PBRMaterial.md#usegltflightfalloff)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useLogarithmicDepth`](../../../core/src/classes/PBRMaterial.md#uselogarithmicdepth)

***

### usePhysicalLightFalloff

#### Get Signature

> **get** **usePhysicalLightFalloff**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L461)

BJS is using an hardcoded light falloff based on a manually sets up range.
In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
This parameter can help you switch back to the BJS mode in order to create scenes using both materials.

##### Returns

`boolean`

#### Set Signature

> **set** **usePhysicalLightFalloff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L470)

BJS is using an hardcoded light falloff based on a manually sets up range.
In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
This parameter can help you switch back to the BJS mode in order to create scenes using both materials.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`usePhysicalLightFalloff`](../../../core/src/classes/PBRMaterial.md#usephysicallightfalloff)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`useVertexPulling`](../../../core/src/classes/PBRMaterial.md#usevertexpulling)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`wireframe`](../../../core/src/classes/PBRMaterial.md#wireframe)

## Methods

### \_attachImageProcessingConfiguration()

> **\_attachImageProcessingConfiguration**(`configuration`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L62)

Attaches a new image processing configuration to the Standard Material.

#### Parameters

##### configuration

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)\>

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`_attachImageProcessingConfiguration`](../../../core/src/classes/PBRMaterial.md#_attachimageprocessingconfiguration)

***

### AddAttribute()

> **AddAttribute**(`name`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L406)

Adds a custom attribute

#### Parameters

##### name

`string`

the name of the attribute

#### Returns

`PBRCustomMaterial`

the current material

***

### AddUniform()

> **AddUniform**(`name`, `kind`, `param`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L381)

Adds a new uniform to the shader

#### Parameters

##### name

`string`

the name of the uniform to add

##### kind

`string`

the type of the uniform to add

##### param

`any`

the value of the uniform to add

#### Returns

`PBRCustomMaterial`

the current material

***

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`atomicMaterialsUpdate`](../../../core/src/classes/PBRMaterial.md#atomicmaterialsupdate)

***

### AttachAfterBind()

> **AttachAfterBind**(`mesh`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L163)

Runs after the material is bound to a mesh

#### Parameters

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md) \| `undefined`

mesh bound

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

bound effect used to render

#### Returns

`void`

***

### bind()

> **bind**(`world`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L72)

Binds the material to the mesh

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the world transformation matrix

##### mesh?

[`Mesh`](../../../core/src/classes/Mesh.md)

defines the mesh to bind the material to

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bind`](../../../core/src/classes/PBRMaterial.md#bind)

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1507)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view matrix to

##### variableName?

`string`

name of the shader variable that will hold the eye position

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bindEyePosition`](../../../core/src/classes/PBRMaterial.md#bindeyeposition)

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1937](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1937)

Binds the submesh data.

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

The world matrix.

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

The BJS mesh.

##### subMesh

[`SubMesh`](../../../core/src/classes/SubMesh.md)

A submesh of the BJS mesh.

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bindForSubMesh`](../../../core/src/classes/PBRMaterial.md#bindforsubmesh)

***

### bindOnlyNormalMatrix()

> **bindOnlyNormalMatrix**(`normalMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L68)

Binds the given normal matrix to the active effect

#### Parameters

##### normalMatrix

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bindOnlyNormalMatrix`](../../../core/src/classes/PBRMaterial.md#bindonlynormalmatrix)

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L59)

Binds the given world matrix to the active effect

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bindOnlyWorldMatrix`](../../../core/src/classes/PBRMaterial.md#bindonlyworldmatrix)

***

### bindView()

> **bindView**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1480)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view matrix to

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bindView`](../../../core/src/classes/PBRMaterial.md#bindview)

***

### bindViewProjection()

> **bindViewProjection**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1492)

Binds the view projection and projection matrices to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view projection and projection matrices to

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`bindViewProjection`](../../../core/src/classes/PBRMaterial.md#bindviewprojection)

***

### Builder()

> **Builder**(`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`, `options?`): `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L231)

Builds the material

#### Parameters

##### shaderName

`string`

name of the shader

##### uniforms

`string`[]

list of uniforms

##### uniformBuffers

`string`[]

list of uniform buffers

##### samplers

`string`[]

list of samplers

##### defines

`string`[] \| [`MaterialDefines`](../../../core/src/classes/MaterialDefines.md)

list of defines

##### attributes?

`string`[]

list of attributes

##### options?

[`ICustomShaderNameResolveOptions`](../../../core/src/interfaces/ICustomShaderNameResolveOptions.md)

options to compile the shader

#### Returns

`string`

the shader name

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1883](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1883)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`buildUniformLayout`](../../../core/src/classes/PBRMaterial.md#builduniformlayout)

***

### clone()

> **clone**(`name`, `cloneTexturesOnlyOnce?`, `rootUrl?`): [`PBRMaterial`](../../../core/src/classes/PBRMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:687](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L687)

Makes a duplicate of the current material.

#### Parameters

##### name

`string`

name to use for the new material.

##### cloneTexturesOnlyOnce?

`boolean` = `true`

if a texture is used in more than one channel (e.g diffuse and opacity), only clone it once and reuse it on the other channels. Default false.

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures

#### Returns

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md)

cloned material instance

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`clone`](../../../core/src/classes/PBRMaterial.md#clone)

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L352)

Disposes the material

#### Parameters

##### forceDisposeEffect?

`boolean`

specifies if effects should be forcefully disposed

##### forceDisposeTextures?

`boolean`

specifies if textures should be forcefully disposed

#### Returns

`void`

#### Overrides

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`dispose`](../../../core/src/classes/PBRMaterial.md#dispose)

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1842)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Define the mesh we want to force the compilation for

##### onCompiled?

(`material`) => `void`

Define a callback triggered when the compilation completes

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../../../core/src/interfaces/IMaterialCompilationOptions.md)\>

Define the options used to create the compilation

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`forceCompilation`](../../../core/src/classes/PBRMaterial.md#forcecompilation)

***

### forceCompilationAsync()

> **forceCompilationAsync**(`mesh`, `options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1753](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1753)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh that will use this material

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../../../core/src/interfaces/IMaterialCompilationOptions.md)\>

defines additional options for compiling the shaders

#### Returns

`Promise`\<`void`\>

a promise that resolves when the compilation completes

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`forceCompilationAsync`](../../../core/src/classes/PBRMaterial.md#forcecompilationasync)

***

### Fragment\_Before\_FinalColorComposition()

> **Fragment\_Before\_FinalColorComposition**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:511](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L511)

Sets the code on Fragment_Before_FinalColorComposition portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Before\_Fog()

> **Fragment\_Before\_Fog**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:501](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L501)

Sets the code on Fragment_Before_Fog portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Before\_FragColor()

> **Fragment\_Before\_FragColor**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:521](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L521)

Sets the code on Fragment_Before_FragColor portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Before\_Lights()

> **Fragment\_Before\_Lights**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L471)

Sets the code on Fragment_Before_Lights portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Begin()

> **Fragment\_Begin**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L421)

Sets the code on Fragment_Begin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Custom\_Albedo()

> **Fragment\_Custom\_Albedo**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L451)

Sets the code on Fragment_Custom_Albedo portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Custom\_Alpha()

> **Fragment\_Custom\_Alpha**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L461)

Sets the code on Fragment_Custom_Alpha portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Custom\_MetallicRoughness()

> **Fragment\_Custom\_MetallicRoughness**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L481)

Sets the code on Fragment_Custom_MetallicRoughness portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Custom\_MicroSurface()

> **Fragment\_Custom\_MicroSurface**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L491)

Sets the code on Fragment_Custom_MicroSurface portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_Definitions()

> **Fragment\_Definitions**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L431)

Sets the code on Fragment_Definitions portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_MainBegin()

> **Fragment\_MainBegin**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:441](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L441)

Sets the code on Fragment_MainBegin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Fragment\_MainEnd()

> **Fragment\_MainEnd**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L531)

Sets the code on Fragment_MainEnd portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`freeze`](../../../core/src/classes/PBRMaterial.md#freeze)

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2335)

Returns an array of the actively used textures.

#### Returns

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

- Array of BaseTextures

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getActiveTextures`](../../../core/src/classes/PBRMaterial.md#getactivetextures)

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1020](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1020)

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

the texture used for the alpha test.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getAlphaTestTexture`](../../../core/src/classes/PBRMaterial.md#getalphatesttexture)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2259)

Returns the animatable textures.
If material have animatable metallic texture, then reflectivity texture will not be returned, even if it has animations.

#### Returns

[`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getAnimatables`](../../../core/src/classes/PBRMaterial.md#getanimatables)

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1650)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getBindedMeshes`](../../../core/src/classes/PBRMaterial.md#getbindedmeshes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L676)

#### Returns

`string`

the name of this material class.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getClassName`](../../../core/src/classes/PBRMaterial.md#getclassname)

***

### getEffect()

> **getEffect**(): [`Effect`](../../../core/src/classes/Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](../../../core/src/classes/Effect.md)

the effect associated with the material

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getEffect`](../../../core/src/classes/PBRMaterial.md#geteffect)

***

### getScene()

> **getScene**(): [`Scene`](../../../core/src/classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1237)

Returns the current scene

#### Returns

[`Scene`](../../../core/src/classes/Scene.md)

a Scene

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`getScene`](../../../core/src/classes/PBRMaterial.md#getscene)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2402)

Checks to see if a texture is used in the material.

#### Parameters

##### texture

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)

Base texture to use.

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`hasTexture`](../../../core/src/classes/PBRMaterial.md#hastexture)

***

### isMetallicWorkflow()

> **isMetallicWorkflow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1247)

Specifies if the material uses metallic roughness workflow.

#### Returns

`boolean`

boolean specifying if the material uses metallic roughness workflow.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`isMetallicWorkflow`](../../../core/src/classes/PBRMaterial.md#ismetallicworkflow)

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L27)

Specifies if the material is ready to be used

#### Parameters

##### mesh?

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

##### useInstances?

`boolean`

specifies if instances should be used

#### Returns

`boolean`

a boolean indicating if the material is ready to be used

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`isReady`](../../../core/src/classes/PBRMaterial.md#isready)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1031](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1031)

Specifies that the submesh is ready to be used.

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

BJS mesh.

##### subMesh

[`SubMesh`](../../../core/src/classes/SubMesh.md)

A submesh of the BJS mesh.  Used to check if it is ready.

##### useInstances?

`boolean`

Specifies that instances should be used.

#### Returns

`boolean`

- boolean indicating that the submesh is ready or not.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`isReadyForSubMesh`](../../../core/src/classes/PBRMaterial.md#isreadyforsubmesh)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`markAsDirty`](../../../core/src/classes/PBRMaterial.md#markasdirty)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`markDirty`](../../../core/src/classes/PBRMaterial.md#markdirty)

***

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:976](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L976)

#### Returns

`boolean`

whether or not this material should be rendered in alpha blend mode.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`needAlphaBlending`](../../../core/src/classes/PBRMaterial.md#needalphablending)

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1321)

Specifies if the mesh will require alpha blending

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha blending is needed for the mesh

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`needAlphaBlendingForMesh`](../../../core/src/classes/PBRMaterial.md#needalphablendingformesh)

***

### needAlphaTesting()

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:991](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L991)

#### Returns

`boolean`

whether or not this material should be rendered in alpha test mode.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`needAlphaTesting`](../../../core/src/classes/PBRMaterial.md#needalphatesting)

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1355)

Specifies if material alpha testing should be turned on for the mesh

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha testing should be turned on for the mesh

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`needAlphaTestingForMesh`](../../../core/src/classes/PBRMaterial.md#needalphatestingformesh)

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1844)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`resetDrawCache`](../../../core/src/classes/PBRMaterial.md#resetdrawcache)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:704](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L704)

Serializes this PBR Material.

#### Returns

`any`

- An object with the serialized material.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`serialize`](../../../core/src/classes/PBRMaterial.md#serialize)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`setAlphaMode`](../../../core/src/classes/PBRMaterial.md#setalphamode)

***

### setPrePassRenderer()

> **setPrePassRenderer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2472)

Sets the required values to the prepass renderer.
It can't be sets when subsurface scattering of this material is disabled.
When scene have ability to enable subsurface prepass effect, it will enable.

#### Returns

`boolean`

- If prepass is enabled or not.

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`setPrePassRenderer`](../../../core/src/classes/PBRMaterial.md#setprepassrenderer)

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

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`toString`](../../../core/src/classes/PBRMaterial.md#tostring)

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1562)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`unbind`](../../../core/src/classes/PBRMaterial.md#unbind)

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1188)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`unfreeze`](../../../core/src/classes/PBRMaterial.md#unfreeze)

***

### Vertex\_After\_WorldPosComputed()

> **Vertex\_After\_WorldPosComputed**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L591)

Sets the code on Vertex_After_WorldPosComputed portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Vertex\_Before\_NormalUpdated()

> **Vertex\_Before\_NormalUpdated**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L581)

Sets the code on Vertex_Before_NormalUpdated portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Vertex\_Before\_PositionUpdated()

> **Vertex\_Before\_PositionUpdated**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:571](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L571)

Sets the code on Vertex_Before_PositionUpdated portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Vertex\_Begin()

> **Vertex\_Begin**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L541)

Sets the code on Vertex_Begin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Vertex\_Definitions()

> **Vertex\_Definitions**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L551)

Sets the code on Vertex_Definitions portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Vertex\_MainBegin()

> **Vertex\_MainBegin**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L561)

Sets the code on Vertex_MainBegin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Vertex\_MainEnd()

> **Vertex\_MainEnd**(`shaderPart`): `PBRCustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/pbrCustomMaterial.ts:601](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/pbrCustomMaterial.ts#L601)

Sets the code on Vertex_MainEnd portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`PBRCustomMaterial`

the current material

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): [`PBRMaterial`](../../../core/src/classes/PBRMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts:719](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrMaterial.pure.ts#L719)

Parses a PBR Material from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

BJS scene instance.

##### rootUrl

`string`

url for the scene object

#### Returns

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md)

- PBRMaterial

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`Parse`](../../../core/src/classes/PBRMaterial.md#parse)

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

[`Material`](../../../core/src/classes/Material.md)

defines the material to update

#### Returns

`void`

#### Inherited from

[`PBRMaterial`](../../../core/src/classes/PBRMaterial.md).[`ParseAlphaMode`](../../../core/src/classes/PBRMaterial.md#parsealphamode)
