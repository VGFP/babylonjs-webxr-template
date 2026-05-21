[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [materials/src](../README.md) / CustomMaterial

# Class: CustomMaterial

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L112)

Customized material

## Extends

- [`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

## Constructors

### Constructor

> **new CustomMaterial**(`name`, `scene?`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L286)

#### Parameters

##### name

`string`

##### scene?

[`Scene`](../../../core/src/classes/Scene.md)

#### Returns

`CustomMaterial`

#### Overrides

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`constructor`](../../../core/src/classes/StandardMaterial.md#constructor)

## Properties

### \_createdShaderName

> **\_createdShaderName**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L124)

Name of the shader

***

### \_customAttributes

> **\_customAttributes**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L144)

List of the custom attributes

***

### \_customUniform

> **\_customUniform**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L128)

List of custom uniforms

***

### \_imageProcessingConfiguration

> **\_imageProcessingConfiguration**: [`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L30)

Default configuration related to image processing available in the standard Material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`_imageProcessingConfiguration`](../../../core/src/classes/StandardMaterial.md#_imageprocessingconfiguration)

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Observer`](../../../core/src/classes/Observer.md)\<[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L56)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`_imageProcessingObserver`](../../../core/src/classes/StandardMaterial.md#_imageprocessingobserver)

***

### \_newSamplerInstances

> **\_newSamplerInstances**: `object`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L140)

Instances of the new sampler objects

#### Index Signature

\[`name`: `string`\]: [`Texture`](../../../core/src/classes/Texture.md)

***

### \_newUniformInstances

> **\_newUniformInstances**: `object`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L136)

Instances of the new uniform objects

#### Index Signature

\[`name`: `string`\]: `any`

***

### \_newUniforms

> **\_newUniforms**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L132)

Names of the new uniforms

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L256)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`allowShaderHotSwapping`](../../../core/src/classes/StandardMaterial.md#allowshaderhotswapping)

***

### alphaCutOff

> **alphaCutOff**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L455)

Defines the alpha limits in alpha test mode.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alphaCutOff`](../../../core/src/classes/StandardMaterial.md#alphacutoff)

***

### ambientColor

> **ambientColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L314)

The color of the material lit by the environmental background lighting.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction#ambient-color-example

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ambientColor`](../../../core/src/classes/StandardMaterial.md#ambientcolor)

***

### ambientTexture

> **ambientTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L242)

AKA Occlusion Texture in other nomenclature, it helps adding baked shadows into your material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ambientTexture`](../../../core/src/classes/StandardMaterial.md#ambienttexture)

***

### animations

> **animations**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L563)

Stores the animations for the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`animations`](../../../core/src/classes/StandardMaterial.md#animations)

***

### applyDecalMapAfterDetailMap

> **applyDecalMapAfterDetailMap**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:566](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L566)

If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`applyDecalMapAfterDetailMap`](../../../core/src/classes/StandardMaterial.md#applydecalmapafterdetailmap)

***

### bumpTexture

> **bumpTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L288)

Bump mapping is a technique to simulate bump and dents on a rendered surface.
These are made by creating a normal map from an image. The means to do this can be found on the web, a search for 'normal map generator' will bring up free and paid for methods of doing this.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#bump-map

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bumpTexture`](../../../core/src/classes/StandardMaterial.md#bumptexture)

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L337)

Specifies if the ready state should be checked on each call

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`checkReadyOnEveryCall`](../../../core/src/classes/StandardMaterial.md#checkreadyoneverycall)

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L343)

Specifies if the ready state should be checked once

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`checkReadyOnlyOnce`](../../../core/src/classes/StandardMaterial.md#checkreadyonlyonce)

***

### clipPlane

> **clipPlane**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:875](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L875)

Gets or sets the active clipplane 1

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane`](../../../core/src/classes/StandardMaterial.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L880)

Gets or sets the active clipplane 2

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane2`](../../../core/src/classes/StandardMaterial.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:885](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L885)

Gets or sets the active clipplane 3

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane3`](../../../core/src/classes/StandardMaterial.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L890)

Gets or sets the active clipplane 4

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane4`](../../../core/src/classes/StandardMaterial.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:895](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L895)

Gets or sets the active clipplane 5

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane5`](../../../core/src/classes/StandardMaterial.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:900](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L900)

Gets or sets the active clipplane 6

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane6`](../../../core/src/classes/StandardMaterial.md#clipplane6)

***

### CustomParts

> **CustomParts**: [`ShaderSpecialParts`](ShaderSpecialParts.md)

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L120)

Custom shader structure

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

`string`[] \| [`MaterialDefines`](../../../core/src/classes/MaterialDefines.md)

##### attributes?

`string`[]

##### options?

[`ICustomShaderNameResolveOptions`](../../../core/src/interfaces/ICustomShaderNameResolveOptions.md)

#### Returns

`string`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`customShaderNameResolve`](../../../core/src/classes/StandardMaterial.md#customshadernameresolve)

***

### decalMap

> **decalMap**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`DecalMapConfiguration`](../../../core/src/classes/DecalMapConfiguration.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.decalMap.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.decalMap.ts#L14)

Defines the decal map parameters for the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`decalMap`](../../../core/src/classes/StandardMaterial.md#decalmap)

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L762)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`depthFunction`](../../../core/src/classes/StandardMaterial.md#depthfunction)

***

### detailMap

> `readonly` **detailMap**: [`DetailMapConfiguration`](../../../core/src/classes/DetailMapConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:593](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L593)

Defines the detail map parameters for the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`detailMap`](../../../core/src/classes/StandardMaterial.md#detailmap)

***

### diffuseColor

> **diffuseColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L320)

The basic color of the material as viewed under a light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`diffuseColor`](../../../core/src/classes/StandardMaterial.md#diffusecolor)

***

### diffuseFresnelParameters

> **diffuseFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L473)

Define the diffuse fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`diffuseFresnelParameters`](../../../core/src/classes/StandardMaterial.md#diffusefresnelparameters)

***

### diffuseTexture

> **diffuseTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L234)

The basic texture of the material as viewed under a light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`diffuseTexture`](../../../core/src/classes/StandardMaterial.md#diffusetexture)

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:750](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L750)

Specifies if color writing should be disabled

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`disableColorWrite`](../../../core/src/classes/StandardMaterial.md#disablecolorwrite)

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L744)

Specifies if depth writing should be disabled

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`disableDepthWrite`](../../../core/src/classes/StandardMaterial.md#disabledepthwrite)

***

### disableLighting

> **disableLighting**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L393)

Does lights from the scene impacts this material.
It can be a nice trick for performance to disable lighting on a fully emissive material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`disableLighting`](../../../core/src/classes/StandardMaterial.md#disablelighting)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:553](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L553)

Specifies if the material should be serialized

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`doNotSerialize`](../../../core/src/classes/StandardMaterial.md#donotserialize)

***

### emissiveColor

> **emissiveColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L333)

Define the color of the material as if self lit.
This will be mixed in the final result even in the absence of light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`emissiveColor`](../../../core/src/classes/StandardMaterial.md#emissivecolor)

***

### emissiveFresnelParameters

> **emissiveFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:509](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L509)

Define the emissive fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`emissiveFresnelParameters`](../../../core/src/classes/StandardMaterial.md#emissivefresnelparameters)

***

### emissiveTexture

> **emissiveTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L270)

Define texture of the material as if self lit.
This will be mixed in the final result even in the absence of light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`emissiveTexture`](../../../core/src/classes/StandardMaterial.md#emissivetexture)

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:756](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L756)

Specifies if depth writing should be forced

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`forceDepthWrite`](../../../core/src/classes/StandardMaterial.md#forcedepthwrite)

***

### FragmentShader

> **FragmentShader**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L149)

Fragment shader string

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => [`SmartArray`](../../../core/src/classes/SmartArray.md)\<[`RenderTargetTexture`](../../../core/src/classes/RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:539](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L539)

Callback triggered to get the render target textures

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getRenderTargetTextures`](../../../core/src/classes/StandardMaterial.md#getrendertargettextures)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L302)

The ID of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`id`](../../../core/src/classes/StandardMaterial.md#id)

***

### indexOfRefraction

> **indexOfRefraction**: `number` = `0.98`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L441)

In case of refraction, define the value of the index of refraction.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`indexOfRefraction`](../../../core/src/classes/StandardMaterial.md#indexofrefraction)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../../../core/src/interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L370)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`inspectableCustomProperties`](../../../core/src/classes/StandardMaterial.md#inspectablecustomproperties)

***

### invertNormalMapX

> **invertNormalMapX**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:542](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L542)

If sets to true, x component of normal map value will invert (x = 1.0 - x).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`invertNormalMapX`](../../../core/src/classes/StandardMaterial.md#invertnormalmapx)

***

### invertNormalMapY

> **invertNormalMapY**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L550)

If sets to true, y component of normal map value will invert (y = 1.0 - y).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`invertNormalMapY`](../../../core/src/classes/StandardMaterial.md#invertnormalmapy)

***

### invertRefractionY

> **invertRefractionY**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:449](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L449)

Invert the refraction texture alongside the y axis.
It can be useful with procedural textures or probe for instance.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`invertRefractionY`](../../../core/src/classes/StandardMaterial.md#invertrefractiony)

***

### lightmapTexture

> **lightmapTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L298)

Complex lighting can be computationally expensive to compute at runtime.
To save on computation, lightmaps may be used to store calculated lighting in a texture which will be applied to a given mesh.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#lightmaps

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`lightmapTexture`](../../../core/src/classes/StandardMaterial.md#lightmaptexture)

***

### linkEmissiveWithDiffuse

> **linkEmissiveWithDiffuse**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L366)

If true, some kind of energy conservation will prevent the end result to be more than 1 by reducing
the emissive level when the final color is close to one.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`linkEmissiveWithDiffuse`](../../../core/src/classes/StandardMaterial.md#linkemissivewithdiffuse)

***

### maxSimultaneousLights

> **maxSimultaneousLights**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L534)

Defines the maximum number of lights that can be used in the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`maxSimultaneousLights`](../../../core/src/classes/StandardMaterial.md#maxsimultaneouslights)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L323)

Gets or sets user defined metadata

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`metadata`](../../../core/src/classes/StandardMaterial.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L317)

The name of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`name`](../../../core/src/classes/StandardMaterial.md#name)

***

### onCompiled

> **onCompiled**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L529)

Callback triggered when the material is compiled

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onCompiled`](../../../core/src/classes/StandardMaterial.md#oncompiled)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L568)

An event triggered when the material is disposed

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onDisposeObservable`](../../../core/src/classes/StandardMaterial.md#ondisposeobservable)

***

### onError

> **onError**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L534)

Callback triggered when an error occurs

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onError`](../../../core/src/classes/StandardMaterial.md#onerror)

***

### opacityFresnelParameters

> **opacityFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:482](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L482)

Define the opacity fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`opacityFresnelParameters`](../../../core/src/classes/StandardMaterial.md#opacityfresnelparameters)

***

### opacityTexture

> **opacityTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L252)

Define the transparency of the material from a texture.
The final alpha value can be read either from the red channel (if texture.getAlphaFromRGB is false)
or from the luminance or the current texel (if texture.getAlphaFromRGB is true)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`opacityTexture`](../../../core/src/classes/StandardMaterial.md#opacitytexture)

***

### parallaxScaleBias

> **parallaxScaleBias**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L426)

Apply a scaling factor that determine which "depth" the height map should reprensent. A value between 0.05 and 0.1 is reasonnable in Parallax, you can reach 0.2 using Parallax Occlusion.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`parallaxScaleBias`](../../../core/src/classes/StandardMaterial.md#parallaxscalebias)

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](../../../core/src/classes/MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L36)

Plugin manager for this material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`pluginManager`](../../../core/src/classes/StandardMaterial.md#pluginmanager)

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L798)

Stores the size of points

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`pointSize`](../../../core/src/classes/StandardMaterial.md#pointsize)

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:574](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L574)

Defines additional PrePass parameters for the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`prePassConfiguration`](../../../core/src/classes/StandardMaterial.md#prepassconfiguration)

***

### reflectionFresnelParameters

> **reflectionFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L491)

Define the reflection fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`reflectionFresnelParameters`](../../../core/src/classes/StandardMaterial.md#reflectionfresnelparameters)

***

### reflectionTexture

> **reflectionTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L261)

Define the texture used to display the reflection.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`reflectionTexture`](../../../core/src/classes/StandardMaterial.md#reflectiontexture)

***

### refractionFresnelParameters

> **refractionFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:500](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L500)

Define the refraction fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`refractionFresnelParameters`](../../../core/src/classes/StandardMaterial.md#refractionfresnelparameters)

***

### refractionTexture

> **refractionTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L307)

Define the texture used to display the refraction.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`refractionTexture`](../../../core/src/classes/StandardMaterial.md#refractiontexture)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L331)

For internal use only. Please do not use.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`reservedDataStore`](../../../core/src/classes/StandardMaterial.md#reserveddatastore)

***

### roughness

> **roughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L434)

Helps to define how blurry the reflections should appears in the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`roughness`](../../../core/src/classes/StandardMaterial.md#roughness)

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:768](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L768)

Specifies if there should be a separate pass for culling

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`separateCullingPass`](../../../core/src/classes/StandardMaterial.md#separatecullingpass)

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](../../../core/src/classes/ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L249)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`shadowDepthWrapper`](../../../core/src/classes/StandardMaterial.md#shadowdepthwrapper)

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L524)

Stores the value for side orientation

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`sideOrientation`](../../../core/src/classes/StandardMaterial.md#sideorientation)

***

### specularColor

> **specularColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L326)

Define how the color and intensity of the highlight given by the light in the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`specularColor`](../../../core/src/classes/StandardMaterial.md#specularcolor)

***

### specularPower

> **specularPower**: `number` = `64`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L341)

Defines how sharp are the highlights in the material.
The bigger the value the sharper giving a more glossy feeling to the result.
Reversely, the smaller the value the blurrier giving a more rough feeling to the result.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`specularPower`](../../../core/src/classes/StandardMaterial.md#specularpower)

***

### specularTexture

> **specularTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L278)

Define how the color and intensity of the highlight given by the light in the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`specularTexture`](../../../core/src/classes/StandardMaterial.md#speculartexture)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L349)

The state of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`state`](../../../core/src/classes/StandardMaterial.md#state)

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](../../../core/src/classes/MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:905](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L905)

Gives access to the stencil properties of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`stencil`](../../../core/src/classes/StandardMaterial.md#stencil)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`textureRepetitionHexTilingParams`](../../../core/src/classes/StandardMaterial.md#texturerepetitionhextilingparams)

***

### twoSidedLighting

> **twoSidedLighting**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L558)

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`twoSidedLighting`](../../../core/src/classes/StandardMaterial.md#twosidedlighting)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L308)

Gets or sets the unique id of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`uniqueId`](../../../core/src/classes/StandardMaterial.md#uniqueid)

***

### useAlphaFromDiffuseTexture

> **useAlphaFromDiffuseTexture**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L349)

Does the transparency come from the diffuse texture alpha channel.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useAlphaFromDiffuseTexture`](../../../core/src/classes/StandardMaterial.md#usealphafromdiffusetexture)

***

### useEmissiveAsIllumination

> **useEmissiveAsIllumination**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:357](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L357)

If true, the emissive value is added into the end result, otherwise it is multiplied in.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useEmissiveAsIllumination`](../../../core/src/classes/StandardMaterial.md#useemissiveasillumination)

***

### useGlossinessFromSpecularMapAlpha

> **useGlossinessFromSpecularMapAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:526](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L526)

Defines if the glossiness/roughness of the material should be read from the specular map alpha channel

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useGlossinessFromSpecularMapAlpha`](../../../core/src/classes/StandardMaterial.md#useglossinessfromspecularmapalpha)

***

### useLightmapAsShadowmap

> **useLightmapAsShadowmap**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:463](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L463)

In case of light mapping, define whether the map contains light or shadow informations.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useLightmapAsShadowmap`](../../../core/src/classes/StandardMaterial.md#uselightmapasshadowmap)

***

### useObjectSpaceNormalMap

> **useObjectSpaceNormalMap**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L401)

Allows using an object space normal map (instead of tangent space).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useObjectSpaceNormalMap`](../../../core/src/classes/StandardMaterial.md#useobjectspacenormalmap)

***

### useParallax

> **useParallax**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L410)

Is parallax enabled or not.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/parallaxMapping

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useParallax`](../../../core/src/classes/StandardMaterial.md#useparallax)

***

### useParallaxOcclusion

> **useParallaxOcclusion**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L420)

Is parallax occlusion enabled or not.
If true, the outcome is way more realistic than traditional Parallax but you can expect a performance hit that worthes consideration.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/parallaxMapping

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useParallaxOcclusion`](../../../core/src/classes/StandardMaterial.md#useparallaxocclusion)

***

### useReflectionFresnelFromSpecular

> **useReflectionFresnelFromSpecular**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:518](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L518)

If true automatically deducts the fresnels values from the material specularity.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useReflectionFresnelFromSpecular`](../../../core/src/classes/StandardMaterial.md#usereflectionfresnelfromspecular)

***

### useReflectionOverAlpha

> **useReflectionOverAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L384)

Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useReflectionOverAlpha`](../../../core/src/classes/StandardMaterial.md#usereflectionoveralpha)

***

### useSpecularOverAlpha

> **useSpecularOverAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L375)

Specifies that the material will keep the specular highlights over a transparent surface (only the most luminous ones).
A car glass is a good exemple of that. When sun reflects on it you can not see what is behind.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useSpecularOverAlpha`](../../../core/src/classes/StandardMaterial.md#usespecularoveralpha)

***

### VertexShader

> **VertexShader**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L153)

Vertex shader string

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L804)

Stores the z offset Factor value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`zOffset`](../../../core/src/classes/StandardMaterial.md#zoffset)

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:810](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L810)

Stores the z offset Units value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`zOffsetUnits`](../../../core/src/classes/StandardMaterial.md#zoffsetunits)

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L171)

The all dirty flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`AllDirtyFlag`](../../../core/src/classes/StandardMaterial.md#alldirtyflag)

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L156)

The dirty attribute flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`AttributesDirtyFlag`](../../../core/src/classes/StandardMaterial.md#attributesdirtyflag)

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L126)

Stores the clock-wise side orientation

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ClockWiseSideOrientation`](../../../core/src/classes/StandardMaterial.md#clockwisesideorientation)

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L131)

Stores the counter clock-wise side orientation

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`CounterClockWiseSideOrientation`](../../../core/src/classes/StandardMaterial.md#counterclockwisesideorientation)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L226)

Force all the standard materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ForceGLSL`](../../../core/src/classes/StandardMaterial.md#forceglsl)

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L231)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ForceVertexOutputInvariant`](../../../core/src/classes/StandardMaterial.md#forcevertexoutputinvariant)

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L151)

The dirty fresnel flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`FresnelDirtyFlag`](../../../core/src/classes/StandardMaterial.md#fresneldirtyflag)

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L136)

The dirty image processing flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ImageProcessingDirtyFlag`](../../../core/src/classes/StandardMaterial.md#imageprocessingdirtyflag)

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L146)

The dirty light flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LightDirtyFlag`](../../../core/src/classes/StandardMaterial.md#lightdirtyflag)

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L215)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LIGHTFALLOFF_GLTF`](../../../core/src/classes/StandardMaterial.md#lightfalloff_gltf)

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L209)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LIGHTFALLOFF_PHYSICAL`](../../../core/src/classes/StandardMaterial.md#lightfalloff_physical)

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L221)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LIGHTFALLOFF_STANDARD`](../../../core/src/classes/StandardMaterial.md#lightfalloff_standard)

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L105)

Returns the line list draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LineListDrawMode`](../../../core/src/classes/StandardMaterial.md#linelistdrawmode)

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L109)

Returns the line loop draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LineLoopDrawMode`](../../../core/src/classes/StandardMaterial.md#lineloopdrawmode)

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L113)

Returns the line strip draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LineStripDrawMode`](../../../core/src/classes/StandardMaterial.md#linestripdrawmode)

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L186)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_ALPHABLEND`](../../../core/src/classes/StandardMaterial.md#material_alphablend)

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L181)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_ALPHATEST`](../../../core/src/classes/StandardMaterial.md#material_alphatest)

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L192)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_ALPHATESTANDBLEND`](../../../core/src/classes/StandardMaterial.md#material_alphatestandblend)

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L204)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_RNM`](../../../core/src/classes/StandardMaterial.md#material_normalblendmethod_rnm)

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L198)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_WHITEOUT`](../../../core/src/classes/StandardMaterial.md#material_normalblendmethod_whiteout)

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L176)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_OPAQUE`](../../../core/src/classes/StandardMaterial.md#material_opaque)

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L161)

The dirty misc flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MiscDirtyFlag`](../../../core/src/classes/StandardMaterial.md#miscdirtyflag)

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L226)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`OnEventObservable`](../../../core/src/classes/StandardMaterial.md#oneventobservable)

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L97)

Returns the point fill mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`PointFillMode`](../../../core/src/classes/StandardMaterial.md#pointfillmode)

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L101)

Returns the point list draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`PointListDrawMode`](../../../core/src/classes/StandardMaterial.md#pointlistdrawmode)

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L166)

The dirty prepass flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`PrePassDirtyFlag`](../../../core/src/classes/StandardMaterial.md#prepassdirtyflag)

***

### ShaderIndexer

> `static` **ShaderIndexer**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L116)

Index for each created shader

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L141)

The dirty texture flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TextureDirtyFlag`](../../../core/src/classes/StandardMaterial.md#texturedirtyflag)

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L121)

Returns the triangle fan draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TriangleFanDrawMode`](../../../core/src/classes/StandardMaterial.md#trianglefandrawmode)

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L89)

Returns the triangle fill mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TriangleFillMode`](../../../core/src/classes/StandardMaterial.md#trianglefillmode)

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L117)

Returns the triangle strip draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TriangleStripDrawMode`](../../../core/src/classes/StandardMaterial.md#trianglestripdrawmode)

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L93)

Returns the wireframe mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`WireFrameFillMode`](../../../core/src/classes/StandardMaterial.md#wireframefillmode)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alpha`](../../../core/src/classes/StandardMaterial.md#alpha)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alphaMode`](../../../core/src/classes/StandardMaterial.md#alphamode)

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L690)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alphaModes`](../../../core/src/classes/StandardMaterial.md#alphamodes)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`backFaceCulling`](../../../core/src/classes/StandardMaterial.md#backfaceculling)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`blockDirtyMechanism`](../../../core/src/classes/StandardMaterial.md#blockdirtymechanism)

***

### cameraColorCurves

#### Get Signature

> **get** **cameraColorCurves**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ColorCurves`](../../../core/src/classes/ColorCurves.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L179)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ColorCurves`](../../../core/src/classes/ColorCurves.md)\>

#### Set Signature

> **set** **cameraColorCurves**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L188)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorCurves`](../../../core/src/classes/StandardMaterial.md#cameracolorcurves)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorCurvesEnabled`](../../../core/src/classes/StandardMaterial.md#cameracolorcurvesenabled)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorGradingEnabled`](../../../core/src/classes/StandardMaterial.md#cameracolorgradingenabled)

***

### cameraColorGradingTexture

#### Get Signature

> **get** **cameraColorGradingTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L163)

Gets the Color Grading 2D Lookup Texture.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **cameraColorGradingTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L169)

Sets the Color Grading 2D Lookup Texture.

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorGradingTexture`](../../../core/src/classes/StandardMaterial.md#cameracolorgradingtexture)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraContrast`](../../../core/src/classes/StandardMaterial.md#cameracontrast)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraExposure`](../../../core/src/classes/StandardMaterial.md#cameraexposure)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraToneMappingEnabled`](../../../core/src/classes/StandardMaterial.md#cameratonemappingenabled)

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:586](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L586)

Can this material render to several textures at once

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`canRenderToMRT`](../../../core/src/classes/StandardMaterial.md#canrendertomrt)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cullBackFaces`](../../../core/src/classes/StandardMaterial.md#cullbackfaces)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`fillMode`](../../../core/src/classes/StandardMaterial.md#fillmode)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`fogEnabled`](../../../core/src/classes/StandardMaterial.md#fogenabled)

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L638)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`hasRenderTargetTextures`](../../../core/src/classes/StandardMaterial.md#hasrendertargettextures)

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L35)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L44)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`imageProcessingConfiguration`](../../../core/src/classes/StandardMaterial.md#imageprocessingconfiguration)

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1156)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isFrozen`](../../../core/src/classes/StandardMaterial.md#isfrozen)

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:579](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L579)

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isPrePassCapable`](../../../core/src/classes/StandardMaterial.md#isprepasscapable)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isVertexOutputInvariant`](../../../core/src/classes/StandardMaterial.md#isvertexoutputinvariant)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needDepthPrePass`](../../../core/src/classes/StandardMaterial.md#needdepthprepass)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onBind`](../../../core/src/classes/StandardMaterial.md#onbind)

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L591)

An event triggered when the material is bound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onBindObservable`](../../../core/src/classes/StandardMaterial.md#onbindobservable)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onDispose`](../../../core/src/classes/StandardMaterial.md#ondispose)

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L630)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onEffectCreatedObservable`](../../../core/src/classes/StandardMaterial.md#oneffectcreatedobservable)

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L617)

An event triggered when the material is unbound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onUnBindObservable`](../../../core/src/classes/StandardMaterial.md#onunbindobservable)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`pointsCloud`](../../../core/src/classes/StandardMaterial.md#pointscloud)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L294)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`shaderLanguage`](../../../core/src/classes/StandardMaterial.md#shaderlanguage)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`textureRepetitionMode`](../../../core/src/classes/StandardMaterial.md#texturerepetitionmode)

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1253)

Gets the current transparency mode.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`transparencyMode`](../../../core/src/classes/StandardMaterial.md#transparencymode)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useLogarithmicDepth`](../../../core/src/classes/StandardMaterial.md#uselogarithmicdepth)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useVertexPulling`](../../../core/src/classes/StandardMaterial.md#usevertexpulling)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`wireframe`](../../../core/src/classes/StandardMaterial.md#wireframe)

***

### AmbientTextureEnabled

#### Get Signature

> **get** `static` **AmbientTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1896](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1896)

Are ambient textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **AmbientTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1899](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1899)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`AmbientTextureEnabled`](../../../core/src/classes/StandardMaterial.md#ambienttextureenabled)

***

### BumpTextureEnabled

#### Get Signature

> **get** `static` **BumpTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1946](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1946)

Are bump textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **BumpTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1949](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1949)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`BumpTextureEnabled`](../../../core/src/classes/StandardMaterial.md#bumptextureenabled)

***

### ColorGradingTextureEnabled

#### Get Signature

> **get** `static` **ColorGradingTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1976](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1976)

Are color grading textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ColorGradingTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1979](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1979)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ColorGradingTextureEnabled`](../../../core/src/classes/StandardMaterial.md#colorgradingtextureenabled)

***

### DetailTextureEnabled

#### Get Signature

> **get** `static` **DetailTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1886](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1886)

Are detail textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **DetailTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1889](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1889)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`DetailTextureEnabled`](../../../core/src/classes/StandardMaterial.md#detailtextureenabled)

***

### DiffuseTextureEnabled

#### Get Signature

> **get** `static` **DiffuseTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1876](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1876)

Are diffuse textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **DiffuseTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1879](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1879)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`DiffuseTextureEnabled`](../../../core/src/classes/StandardMaterial.md#diffusetextureenabled)

***

### EmissiveTextureEnabled

#### Get Signature

> **get** `static` **EmissiveTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1926](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1926)

Are emissive textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **EmissiveTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1929](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1929)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`EmissiveTextureEnabled`](../../../core/src/classes/StandardMaterial.md#emissivetextureenabled)

***

### FresnelEnabled

#### Get Signature

> **get** `static` **FresnelEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1986](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1986)

Are fresnels enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **FresnelEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1989](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1989)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`FresnelEnabled`](../../../core/src/classes/StandardMaterial.md#fresnelenabled)

***

### LightmapTextureEnabled

#### Get Signature

> **get** `static` **LightmapTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1956](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1956)

Are lightmap textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **LightmapTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1959](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1959)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LightmapTextureEnabled`](../../../core/src/classes/StandardMaterial.md#lightmaptextureenabled)

***

### OpacityTextureEnabled

#### Get Signature

> **get** `static` **OpacityTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1906](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1906)

Are opacity textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **OpacityTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1909](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1909)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`OpacityTextureEnabled`](../../../core/src/classes/StandardMaterial.md#opacitytextureenabled)

***

### ReflectionTextureEnabled

#### Get Signature

> **get** `static` **ReflectionTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1916](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1916)

Are reflection textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ReflectionTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1919](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1919)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ReflectionTextureEnabled`](../../../core/src/classes/StandardMaterial.md#reflectiontextureenabled)

***

### RefractionTextureEnabled

#### Get Signature

> **get** `static` **RefractionTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1966](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1966)

Are refraction textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **RefractionTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1969](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1969)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`RefractionTextureEnabled`](../../../core/src/classes/StandardMaterial.md#refractiontextureenabled)

***

### SpecularTextureEnabled

#### Get Signature

> **get** `static` **SpecularTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1936](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1936)

Are specular textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **SpecularTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1939](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1939)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`SpecularTextureEnabled`](../../../core/src/classes/StandardMaterial.md#speculartextureenabled)

## Methods

### \_attachImageProcessingConfiguration()

> **\_attachImageProcessingConfiguration**(`configuration`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L62)

Attaches a new image processing configuration to the Standard Material.

#### Parameters

##### configuration

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)\>

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`_attachImageProcessingConfiguration`](../../../core/src/classes/StandardMaterial.md#_attachimageprocessingconfiguration)

***

### AddAttribute()

> **AddAttribute**(`name`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L340)

Adds a custom attribute

#### Parameters

##### name

`string`

the name of the attribute

#### Returns

`CustomMaterial`

the current material

***

### AddUniform()

> **AddUniform**(`name`, `kind`, `param`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:315](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L315)

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

`CustomMaterial`

the current material

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`atomicMaterialsUpdate`](../../../core/src/classes/StandardMaterial.md#atomicmaterialsupdate)

***

### AttachAfterBind()

> **AttachAfterBind**(`mesh`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L160)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L72)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bind`](../../../core/src/classes/StandardMaterial.md#bind)

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1505)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bindEyePosition`](../../../core/src/classes/StandardMaterial.md#bindeyeposition)

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1381)

Binds the submesh to this material by preparing the effect and shader to draw

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the world transformation matrix

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

defines the mesh containing the submesh

##### subMesh

[`SubMesh`](../../../core/src/classes/SubMesh.md)

defines the submesh to bind the material to

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bindForSubMesh`](../../../core/src/classes/StandardMaterial.md#bindforsubmesh)

***

### bindOnlyNormalMatrix()

> **bindOnlyNormalMatrix**(`normalMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L68)

Binds the given normal matrix to the active effect

#### Parameters

##### normalMatrix

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bindOnlyNormalMatrix`](../../../core/src/classes/StandardMaterial.md#bindonlynormalmatrix)

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L59)

Binds the given world matrix to the active effect

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bindOnlyWorldMatrix`](../../../core/src/classes/StandardMaterial.md#bindonlyworldmatrix)

***

### bindView()

> **bindView**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1478)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view matrix to

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bindView`](../../../core/src/classes/StandardMaterial.md#bindview)

***

### bindViewProjection()

> **bindViewProjection**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1490)

Binds the view projection and projection matrices to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view projection and projection matrices to

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bindViewProjection`](../../../core/src/classes/StandardMaterial.md#bindviewprojection)

***

### Builder()

> **Builder**(`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`): `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L227)

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

#### Returns

`string`

the shader name

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1328)

Builds the material UBO layouts.
Used internally during the effect preparation.

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`buildUniformLayout`](../../../core/src/classes/StandardMaterial.md#builduniformlayout)

***

### clone()

> **clone**(`name`, `cloneTexturesOnlyOnce?`, `rootUrl?`): [`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1840](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1840)

Makes a duplicate of the material, and gives it a new name

#### Parameters

##### name

`string`

defines the new name for the duplicated material

##### cloneTexturesOnlyOnce?

`boolean` = `true`

if a texture is used in more than one channel (e.g diffuse and opacity), only clone it once and reuse it on the other channels. Default false.

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures

#### Returns

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

the cloned material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clone`](../../../core/src/classes/StandardMaterial.md#clone)

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1813](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1813)

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

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`dispose`](../../../core/src/classes/StandardMaterial.md#dispose)

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`, `onError?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1671](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1671)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh associated with this material

##### onCompiled?

(`material`) => `void`

defines a function to execute once the material is compiled

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../../../core/src/interfaces/IMaterialCompilationOptions.md)\>

defines the options to configure the compilation

##### onError?

(`reason`) => `void`

defines a function to execute if the material fails compiling

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`forceCompilation`](../../../core/src/classes/StandardMaterial.md#forcecompilation)

***

### forceCompilationAsync()

> **forceCompilationAsync**(`mesh`, `options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1751](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1751)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`forceCompilationAsync`](../../../core/src/classes/StandardMaterial.md#forcecompilationasync)

***

### Fragment\_Before\_Fog()

> **Fragment\_Before\_Fog**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L425)

Sets the code on Fragment_Before_Fog portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_Before\_FragColor()

> **Fragment\_Before\_FragColor**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L435)

Sets the code on Fragment_Before_FragColor portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_Before\_Lights()

> **Fragment\_Before\_Lights**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L415)

Sets the code on Fragment_Before_Lights portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_Begin()

> **Fragment\_Begin**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L355)

Sets the code on Fragment_Begin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_Custom\_Alpha()

> **Fragment\_Custom\_Alpha**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L405)

Sets the code on Fragment_Custom_Alpha portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_Custom\_Diffuse()

> **Fragment\_Custom\_Diffuse**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L395)

Sets the code on Fragment_Custom_Diffuse portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_Definitions()

> **Fragment\_Definitions**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L365)

Sets the code on Fragment_Definitions portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_MainBegin()

> **Fragment\_MainBegin**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L375)

Sets the code on Fragment_MainBegin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Fragment\_MainEnd()

> **Fragment\_MainEnd**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L385)

Sets the code on Fragment_MainEnd portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`freeze`](../../../core/src/classes/StandardMaterial.md#freeze)

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1717](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1717)

Gets the active textures from the material

#### Returns

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

an array of textures

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getActiveTextures`](../../../core/src/classes/StandardMaterial.md#getactivetextures)

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:710](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L710)

Get the texture used for alpha test purpose.

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

the diffuse texture in case of the standard material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getAlphaTestTexture`](../../../core/src/classes/StandardMaterial.md#getalphatesttexture)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1671](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1671)

Get the list of animatables in the material.

#### Returns

[`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

the list of animatables object used in the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getAnimatables`](../../../core/src/classes/StandardMaterial.md#getanimatables)

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1648)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getBindedMeshes`](../../../core/src/classes/StandardMaterial.md#getbindedmeshes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:655](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L655)

Gets the current class name of the material e.g. "StandardMaterial"
Mainly use in serialization.

#### Returns

`string`

the class name

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getClassName`](../../../core/src/classes/StandardMaterial.md#getclassname)

***

### getEffect()

> **getEffect**(): [`Effect`](../../../core/src/classes/Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](../../../core/src/classes/Effect.md)

the effect associated with the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getEffect`](../../../core/src/classes/StandardMaterial.md#geteffect)

***

### getScene()

> **getScene**(): [`Scene`](../../../core/src/classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1235)

Returns the current scene

#### Returns

[`Scene`](../../../core/src/classes/Scene.md)

a Scene

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getScene`](../../../core/src/classes/StandardMaterial.md#getscene)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1764](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1764)

Specifies if the material uses a texture

#### Parameters

##### texture

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)

defines the texture to check against the material

#### Returns

`boolean`

a boolean specifying if the material uses the texture

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`hasTexture`](../../../core/src/classes/StandardMaterial.md#hastexture)

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L27)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isReady`](../../../core/src/classes/StandardMaterial.md#isready)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:722](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L722)

Get if the submesh is ready to be used and all its information available.
Child classes can use it to update shaders

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

##### subMesh

[`SubMesh`](../../../core/src/classes/SubMesh.md)

defines which submesh to check

##### useInstances?

`boolean` = `false`

specifies that instances should be used

#### Returns

`boolean`

a boolean indicating that the submesh is ready or not

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isReadyForSubMesh`](../../../core/src/classes/StandardMaterial.md#isreadyforsubmesh)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`markAsDirty`](../../../core/src/classes/StandardMaterial.md#markasdirty)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`markDirty`](../../../core/src/classes/StandardMaterial.md#markdirty)

***

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:663](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L663)

Specifies if the material will require alpha blending

#### Returns

`boolean`

a boolean specifying if alpha blending is needed

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaBlending`](../../../core/src/classes/StandardMaterial.md#needalphablending)

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1319)

Specifies if the mesh will require alpha blending

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha blending is needed for the mesh

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaBlendingForMesh`](../../../core/src/classes/StandardMaterial.md#needalphablendingformesh)

***

### needAlphaTesting()

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:684](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L684)

Specifies if this material should be rendered in alpha test mode

#### Returns

`boolean`

a boolean specifying if an alpha test is needed.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaTesting`](../../../core/src/classes/StandardMaterial.md#needalphatesting)

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1353)

Specifies if material alpha testing should be turned on for the mesh

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha testing should be turned on for the mesh

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaTestingForMesh`](../../../core/src/classes/StandardMaterial.md#needalphatestingformesh)

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1842)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`resetDrawCache`](../../../core/src/classes/StandardMaterial.md#resetdrawcache)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:2113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L2113)

Serializes this material

#### Returns

`any`

the serialized material object

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`serialize`](../../../core/src/classes/StandardMaterial.md#serialize)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`setAlphaMode`](../../../core/src/classes/StandardMaterial.md#setalphamode)

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1996](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1996)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](../../../core/src/classes/PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`setPrePassRenderer`](../../../core/src/classes/StandardMaterial.md#setprepassrenderer)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`toString`](../../../core/src/classes/StandardMaterial.md#tostring)

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1560](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1560)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`unbind`](../../../core/src/classes/StandardMaterial.md#unbind)

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1186)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`unfreeze`](../../../core/src/classes/StandardMaterial.md#unfreeze)

***

### Vertex\_After\_WorldPosComputed()

> **Vertex\_After\_WorldPosComputed**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:495](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L495)

Sets the code on Vertex_After_WorldPosComputed portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Vertex\_Before\_NormalUpdated()

> **Vertex\_Before\_NormalUpdated**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L485)

Sets the code on Vertex_Before_NormalUpdated portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Vertex\_Before\_PositionUpdated()

> **Vertex\_Before\_PositionUpdated**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:475](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L475)

Sets the code on Vertex_Before_PositionUpdated portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Vertex\_Begin()

> **Vertex\_Begin**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:445](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L445)

Sets the code on Vertex_Begin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Vertex\_Definitions()

> **Vertex\_Definitions**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L455)

Sets the code on Vertex_Definitions portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Vertex\_MainBegin()

> **Vertex\_MainBegin**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L465)

Sets the code on Vertex_MainBegin portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Vertex\_MainEnd()

> **Vertex\_MainEnd**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/materials/src/custom/customMaterial.ts#L505)

Sets the code on Vertex_MainEnd portion

#### Parameters

##### shaderPart

`string`

the code string

#### Returns

`CustomMaterial`

the current material

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): [`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.ts:1860](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/standardMaterial.ts#L1860)

Creates a standard material from parsed material data

#### Parameters

##### source

`any`

defines the JSON representation of the material

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### rootUrl

`string`

defines the root URL to use to load textures and relative dependencies

#### Returns

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

a new standard material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`Parse`](../../../core/src/classes/StandardMaterial.md#parse)

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

[`Material`](../../../core/src/classes/Material.md)

defines the material to update

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ParseAlphaMode`](../../../core/src/classes/StandardMaterial.md#parsealphamode)
