[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [materials/src](../README.md) / CustomMaterial

# Class: CustomMaterial

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L112)

Customized material

## Extends

- [`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

## Constructors

### Constructor

> **new CustomMaterial**(`name`, `scene?`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L286)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L124)

Name of the shader

***

### \_customAttributes

> **\_customAttributes**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L144)

List of the custom attributes

***

### \_customUniform

> **\_customUniform**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L128)

List of custom uniforms

***

### \_imageProcessingConfiguration

> **\_imageProcessingConfiguration**: [`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L30)

Default configuration related to image processing available in the standard Material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`_imageProcessingConfiguration`](../../../core/src/classes/StandardMaterial.md#_imageprocessingconfiguration)

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Observer`](../../../core/src/classes/Observer.md)\<[`ImageProcessingConfiguration`](../../../core/src/classes/ImageProcessingConfiguration.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L56)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`_imageProcessingObserver`](../../../core/src/classes/StandardMaterial.md#_imageprocessingobserver)

***

### \_newSamplerInstances

> **\_newSamplerInstances**: `object`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L140)

Instances of the new sampler objects

#### Index Signature

\[`name`: `string`\]: [`Texture`](../../../core/src/classes/Texture.md)

***

### \_newUniformInstances

> **\_newUniformInstances**: `object`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L136)

Instances of the new uniform objects

#### Index Signature

\[`name`: `string`\]: `any`

***

### \_newUniforms

> **\_newUniforms**: `string`[]

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L132)

Names of the new uniforms

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L258)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`allowShaderHotSwapping`](../../../core/src/classes/StandardMaterial.md#allowshaderhotswapping)

***

### alphaCutOff

> **alphaCutOff**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L456)

Defines the alpha limits in alpha test mode.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alphaCutOff`](../../../core/src/classes/StandardMaterial.md#alphacutoff)

***

### ambientColor

> **ambientColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:315](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L315)

The color of the material lit by the environmental background lighting.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction#ambient-color-example

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ambientColor`](../../../core/src/classes/StandardMaterial.md#ambientcolor)

***

### ambientTexture

> **ambientTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L243)

AKA Occlusion Texture in other nomenclature, it helps adding baked shadows into your material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ambientTexture`](../../../core/src/classes/StandardMaterial.md#ambienttexture)

***

### animations

> **animations**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L565)

Stores the animations for the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`animations`](../../../core/src/classes/StandardMaterial.md#animations)

***

### applyDecalMapAfterDetailMap

> **applyDecalMapAfterDetailMap**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:567](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L567)

If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`applyDecalMapAfterDetailMap`](../../../core/src/classes/StandardMaterial.md#applydecalmapafterdetailmap)

***

### bumpTexture

> **bumpTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L289)

Bump mapping is a technique to simulate bump and dents on a rendered surface.
These are made by creating a normal map from an image. The means to do this can be found on the web, a search for 'normal map generator' will bring up free and paid for methods of doing this.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#bump-map

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bumpTexture`](../../../core/src/classes/StandardMaterial.md#bumptexture)

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L339)

Specifies if the ready state should be checked on each call

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`checkReadyOnEveryCall`](../../../core/src/classes/StandardMaterial.md#checkreadyoneverycall)

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L345)

Specifies if the ready state should be checked once

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`checkReadyOnlyOnce`](../../../core/src/classes/StandardMaterial.md#checkreadyonlyonce)

***

### clipPlane

> **clipPlane**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:877](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L877)

Gets or sets the active clipplane 1

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane`](../../../core/src/classes/StandardMaterial.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:882](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L882)

Gets or sets the active clipplane 2

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane2`](../../../core/src/classes/StandardMaterial.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:887](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L887)

Gets or sets the active clipplane 3

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane3`](../../../core/src/classes/StandardMaterial.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:892](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L892)

Gets or sets the active clipplane 4

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane4`](../../../core/src/classes/StandardMaterial.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L897)

Gets or sets the active clipplane 5

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane5`](../../../core/src/classes/StandardMaterial.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L902)

Gets or sets the active clipplane 6

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`clipPlane6`](../../../core/src/classes/StandardMaterial.md#clipplane6)

***

### CustomParts

> **CustomParts**: [`ShaderSpecialParts`](ShaderSpecialParts.md)

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L120)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`customShaderNameResolve`](../../../core/src/classes/StandardMaterial.md#customshadernameresolve)

***

### decalMap

> **decalMap**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`DecalMapConfiguration`](../../../core/src/classes/DecalMapConfiguration.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.decalMap.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.decalMap.types.ts#L12)

Defines the decal map parameters for the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`decalMap`](../../../core/src/classes/StandardMaterial.md#decalmap)

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L764)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`depthFunction`](../../../core/src/classes/StandardMaterial.md#depthfunction)

***

### detailMap

> `readonly` **detailMap**: [`DetailMapConfiguration`](../../../core/src/classes/DetailMapConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:594](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L594)

Defines the detail map parameters for the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`detailMap`](../../../core/src/classes/StandardMaterial.md#detailmap)

***

### diffuseColor

> **diffuseColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L321)

The basic color of the material as viewed under a light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`diffuseColor`](../../../core/src/classes/StandardMaterial.md#diffusecolor)

***

### diffuseFresnelParameters

> **diffuseFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:474](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L474)

Define the diffuse fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`diffuseFresnelParameters`](../../../core/src/classes/StandardMaterial.md#diffusefresnelparameters)

***

### diffuseTexture

> **diffuseTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L235)

The basic texture of the material as viewed under a light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`diffuseTexture`](../../../core/src/classes/StandardMaterial.md#diffusetexture)

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L752)

Specifies if color writing should be disabled

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`disableColorWrite`](../../../core/src/classes/StandardMaterial.md#disablecolorwrite)

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L746)

Specifies if depth writing should be disabled

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`disableDepthWrite`](../../../core/src/classes/StandardMaterial.md#disabledepthwrite)

***

### disableLighting

> **disableLighting**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L394)

Does lights from the scene impacts this material.
It can be a nice trick for performance to disable lighting on a fully emissive material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`disableLighting`](../../../core/src/classes/StandardMaterial.md#disablelighting)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L555)

Specifies if the material should be serialized

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`doNotSerialize`](../../../core/src/classes/StandardMaterial.md#donotserialize)

***

### emissiveColor

> **emissiveColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L334)

Define the color of the material as if self lit.
This will be mixed in the final result even in the absence of light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`emissiveColor`](../../../core/src/classes/StandardMaterial.md#emissivecolor)

***

### emissiveFresnelParameters

> **emissiveFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L510)

Define the emissive fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`emissiveFresnelParameters`](../../../core/src/classes/StandardMaterial.md#emissivefresnelparameters)

***

### emissiveTexture

> **emissiveTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L271)

Define texture of the material as if self lit.
This will be mixed in the final result even in the absence of light.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`emissiveTexture`](../../../core/src/classes/StandardMaterial.md#emissivetexture)

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L758)

Specifies if depth writing should be forced

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`forceDepthWrite`](../../../core/src/classes/StandardMaterial.md#forcedepthwrite)

***

### FragmentShader

> **FragmentShader**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L149)

Fragment shader string

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => [`SmartArray`](../../../core/src/classes/SmartArray.md)\<[`RenderTargetTexture`](../../../core/src/classes/RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L541)

Callback triggered to get the render target textures

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getRenderTargetTextures`](../../../core/src/classes/StandardMaterial.md#getrendertargettextures)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L304)

The ID of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`id`](../../../core/src/classes/StandardMaterial.md#id)

***

### indexOfRefraction

> **indexOfRefraction**: `number` = `0.98`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:442](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L442)

In case of refraction, define the value of the index of refraction.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`indexOfRefraction`](../../../core/src/classes/StandardMaterial.md#indexofrefraction)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../../../core/src/interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L372)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`inspectableCustomProperties`](../../../core/src/classes/StandardMaterial.md#inspectablecustomproperties)

***

### invertNormalMapX

> **invertNormalMapX**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:543](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L543)

If sets to true, x component of normal map value will invert (x = 1.0 - x).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`invertNormalMapX`](../../../core/src/classes/StandardMaterial.md#invertnormalmapx)

***

### invertNormalMapY

> **invertNormalMapY**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L551)

If sets to true, y component of normal map value will invert (y = 1.0 - y).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`invertNormalMapY`](../../../core/src/classes/StandardMaterial.md#invertnormalmapy)

***

### invertRefractionY

> **invertRefractionY**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L450)

Invert the refraction texture alongside the y axis.
It can be useful with procedural textures or probe for instance.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`invertRefractionY`](../../../core/src/classes/StandardMaterial.md#invertrefractiony)

***

### lightmapTexture

> **lightmapTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L299)

Complex lighting can be computationally expensive to compute at runtime.
To save on computation, lightmaps may be used to store calculated lighting in a texture which will be applied to a given mesh.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#lightmaps

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`lightmapTexture`](../../../core/src/classes/StandardMaterial.md#lightmaptexture)

***

### linkEmissiveWithDiffuse

> **linkEmissiveWithDiffuse**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L367)

If true, some kind of energy conservation will prevent the end result to be more than 1 by reducing
the emissive level when the final color is close to one.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`linkEmissiveWithDiffuse`](../../../core/src/classes/StandardMaterial.md#linkemissivewithdiffuse)

***

### maxSimultaneousLights

> **maxSimultaneousLights**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L535)

Defines the maximum number of lights that can be used in the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`maxSimultaneousLights`](../../../core/src/classes/StandardMaterial.md#maxsimultaneouslights)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L325)

Gets or sets user defined metadata

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`metadata`](../../../core/src/classes/StandardMaterial.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L319)

The name of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`name`](../../../core/src/classes/StandardMaterial.md#name)

***

### onCompiled

> **onCompiled**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L531)

Callback triggered when the material is compiled

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onCompiled`](../../../core/src/classes/StandardMaterial.md#oncompiled)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L570)

An event triggered when the material is disposed

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onDisposeObservable`](../../../core/src/classes/StandardMaterial.md#ondisposeobservable)

***

### onError

> **onError**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L536)

Callback triggered when an error occurs

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onError`](../../../core/src/classes/StandardMaterial.md#onerror)

***

### opacityFresnelParameters

> **opacityFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L483)

Define the opacity fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`opacityFresnelParameters`](../../../core/src/classes/StandardMaterial.md#opacityfresnelparameters)

***

### opacityTexture

> **opacityTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L253)

Define the transparency of the material from a texture.
The final alpha value can be read either from the red channel (if texture.getAlphaFromRGB is false)
or from the luminance or the current texel (if texture.getAlphaFromRGB is true)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`opacityTexture`](../../../core/src/classes/StandardMaterial.md#opacitytexture)

***

### parallaxScaleBias

> **parallaxScaleBias**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:427](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L427)

Apply a scaling factor that determine which "depth" the height map should reprensent. A value between 0.05 and 0.1 is reasonnable in Parallax, you can reach 0.2 using Parallax Occlusion.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`parallaxScaleBias`](../../../core/src/classes/StandardMaterial.md#parallaxscalebias)

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](../../../core/src/classes/MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

Plugin manager for this material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`pluginManager`](../../../core/src/classes/StandardMaterial.md#pluginmanager)

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L800)

Stores the size of points

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`pointSize`](../../../core/src/classes/StandardMaterial.md#pointsize)

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L575)

Defines additional PrePass parameters for the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`prePassConfiguration`](../../../core/src/classes/StandardMaterial.md#prepassconfiguration)

***

### reflectionFresnelParameters

> **reflectionFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L492)

Define the reflection fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`reflectionFresnelParameters`](../../../core/src/classes/StandardMaterial.md#reflectionfresnelparameters)

***

### reflectionTexture

> **reflectionTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L262)

Define the texture used to display the reflection.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`reflectionTexture`](../../../core/src/classes/StandardMaterial.md#reflectiontexture)

***

### refractionFresnelParameters

> **refractionFresnelParameters**: [`FresnelParameters`](../../../core/src/classes/FresnelParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:501](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L501)

Define the refraction fresnel parameters of the material.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`refractionFresnelParameters`](../../../core/src/classes/StandardMaterial.md#refractionfresnelparameters)

***

### refractionTexture

> **refractionTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L308)

Define the texture used to display the refraction.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#how-to-obtain-reflections-and-refractions

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`refractionTexture`](../../../core/src/classes/StandardMaterial.md#refractiontexture)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L333)

For internal use only. Please do not use.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`reservedDataStore`](../../../core/src/classes/StandardMaterial.md#reserveddatastore)

***

### roughness

> **roughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L435)

Helps to define how blurry the reflections should appears in the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`roughness`](../../../core/src/classes/StandardMaterial.md#roughness)

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L770)

Specifies if there should be a separate pass for culling

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`separateCullingPass`](../../../core/src/classes/StandardMaterial.md#separatecullingpass)

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](../../../core/src/classes/ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L251)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`shadowDepthWrapper`](../../../core/src/classes/StandardMaterial.md#shadowdepthwrapper)

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L526)

Stores the value for side orientation

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`sideOrientation`](../../../core/src/classes/StandardMaterial.md#sideorientation)

***

### specularColor

> **specularColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L327)

Define how the color and intensity of the highlight given by the light in the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`specularColor`](../../../core/src/classes/StandardMaterial.md#specularcolor)

***

### specularPower

> **specularPower**: `number` = `64`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L342)

Defines how sharp are the highlights in the material.
The bigger the value the sharper giving a more glossy feeling to the result.
Reversely, the smaller the value the blurrier giving a more rough feeling to the result.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`specularPower`](../../../core/src/classes/StandardMaterial.md#specularpower)

***

### specularTexture

> **specularTexture**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L279)

Define how the color and intensity of the highlight given by the light in the material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`specularTexture`](../../../core/src/classes/StandardMaterial.md#speculartexture)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L351)

The state of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`state`](../../../core/src/classes/StandardMaterial.md#state)

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](../../../core/src/classes/MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L907)

Gives access to the stencil properties of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`stencil`](../../../core/src/classes/StandardMaterial.md#stencil)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`textureRepetitionHexTilingParams`](../../../core/src/classes/StandardMaterial.md#texturerepetitionhextilingparams)

***

### twoSidedLighting

> **twoSidedLighting**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:559](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L559)

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`twoSidedLighting`](../../../core/src/classes/StandardMaterial.md#twosidedlighting)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L310)

Gets or sets the unique id of the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`uniqueId`](../../../core/src/classes/StandardMaterial.md#uniqueid)

***

### useAlphaFromDiffuseTexture

> **useAlphaFromDiffuseTexture**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L350)

Does the transparency come from the diffuse texture alpha channel.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useAlphaFromDiffuseTexture`](../../../core/src/classes/StandardMaterial.md#usealphafromdiffusetexture)

***

### useEmissiveAsIllumination

> **useEmissiveAsIllumination**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L358)

If true, the emissive value is added into the end result, otherwise it is multiplied in.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useEmissiveAsIllumination`](../../../core/src/classes/StandardMaterial.md#useemissiveasillumination)

***

### useGlossinessFromSpecularMapAlpha

> **useGlossinessFromSpecularMapAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:527](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L527)

Defines if the glossiness/roughness of the material should be read from the specular map alpha channel

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useGlossinessFromSpecularMapAlpha`](../../../core/src/classes/StandardMaterial.md#useglossinessfromspecularmapalpha)

***

### useLightmapAsShadowmap

> **useLightmapAsShadowmap**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:464](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L464)

In case of light mapping, define whether the map contains light or shadow informations.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useLightmapAsShadowmap`](../../../core/src/classes/StandardMaterial.md#uselightmapasshadowmap)

***

### useObjectSpaceNormalMap

> **useObjectSpaceNormalMap**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L402)

Allows using an object space normal map (instead of tangent space).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useObjectSpaceNormalMap`](../../../core/src/classes/StandardMaterial.md#useobjectspacenormalmap)

***

### useParallax

> **useParallax**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:411](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L411)

Is parallax enabled or not.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/parallaxMapping

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useParallax`](../../../core/src/classes/StandardMaterial.md#useparallax)

***

### useParallaxOcclusion

> **useParallaxOcclusion**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L421)

Is parallax occlusion enabled or not.
If true, the outcome is way more realistic than traditional Parallax but you can expect a performance hit that worthes consideration.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/parallaxMapping

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useParallaxOcclusion`](../../../core/src/classes/StandardMaterial.md#useparallaxocclusion)

***

### useReflectionFresnelFromSpecular

> **useReflectionFresnelFromSpecular**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:519](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L519)

If true automatically deducts the fresnels values from the material specularity.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useReflectionFresnelFromSpecular`](../../../core/src/classes/StandardMaterial.md#usereflectionfresnelfromspecular)

***

### useReflectionOverAlpha

> **useReflectionOverAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L385)

Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useReflectionOverAlpha`](../../../core/src/classes/StandardMaterial.md#usereflectionoveralpha)

***

### useSpecularOverAlpha

> **useSpecularOverAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:376](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L376)

Specifies that the material will keep the specular highlights over a transparent surface (only the most luminous ones).
A car glass is a good exemple of that. When sun reflects on it you can not see what is behind.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useSpecularOverAlpha`](../../../core/src/classes/StandardMaterial.md#usespecularoveralpha)

***

### VertexShader

> **VertexShader**: `string`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L153)

Vertex shader string

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:806](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L806)

Stores the z offset Factor value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`zOffset`](../../../core/src/classes/StandardMaterial.md#zoffset)

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L812)

Stores the z offset Units value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`zOffsetUnits`](../../../core/src/classes/StandardMaterial.md#zoffsetunits)

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L173)

The all dirty flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`AllDirtyFlag`](../../../core/src/classes/StandardMaterial.md#alldirtyflag)

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L158)

The dirty attribute flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`AttributesDirtyFlag`](../../../core/src/classes/StandardMaterial.md#attributesdirtyflag)

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L128)

Stores the clock-wise side orientation

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ClockWiseSideOrientation`](../../../core/src/classes/StandardMaterial.md#clockwisesideorientation)

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L133)

Stores the counter clock-wise side orientation

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`CounterClockWiseSideOrientation`](../../../core/src/classes/StandardMaterial.md#counterclockwisesideorientation)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L227)

Force all the standard materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ForceGLSL`](../../../core/src/classes/StandardMaterial.md#forceglsl)

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L233)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ForceVertexOutputInvariant`](../../../core/src/classes/StandardMaterial.md#forcevertexoutputinvariant)

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L153)

The dirty fresnel flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`FresnelDirtyFlag`](../../../core/src/classes/StandardMaterial.md#fresneldirtyflag)

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L138)

The dirty image processing flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ImageProcessingDirtyFlag`](../../../core/src/classes/StandardMaterial.md#imageprocessingdirtyflag)

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L148)

The dirty light flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LightDirtyFlag`](../../../core/src/classes/StandardMaterial.md#lightdirtyflag)

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L217)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LIGHTFALLOFF_GLTF`](../../../core/src/classes/StandardMaterial.md#lightfalloff_gltf)

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L211)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LIGHTFALLOFF_PHYSICAL`](../../../core/src/classes/StandardMaterial.md#lightfalloff_physical)

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L223)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LIGHTFALLOFF_STANDARD`](../../../core/src/classes/StandardMaterial.md#lightfalloff_standard)

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L107)

Returns the line list draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LineListDrawMode`](../../../core/src/classes/StandardMaterial.md#linelistdrawmode)

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L111)

Returns the line loop draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LineLoopDrawMode`](../../../core/src/classes/StandardMaterial.md#lineloopdrawmode)

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L115)

Returns the line strip draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`LineStripDrawMode`](../../../core/src/classes/StandardMaterial.md#linestripdrawmode)

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L188)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_ALPHABLEND`](../../../core/src/classes/StandardMaterial.md#material_alphablend)

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L183)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_ALPHATEST`](../../../core/src/classes/StandardMaterial.md#material_alphatest)

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L194)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_ALPHATESTANDBLEND`](../../../core/src/classes/StandardMaterial.md#material_alphatestandblend)

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L206)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_RNM`](../../../core/src/classes/StandardMaterial.md#material_normalblendmethod_rnm)

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L200)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_NORMALBLENDMETHOD_WHITEOUT`](../../../core/src/classes/StandardMaterial.md#material_normalblendmethod_whiteout)

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L178)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MATERIAL_OPAQUE`](../../../core/src/classes/StandardMaterial.md#material_opaque)

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L163)

The dirty misc flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`MiscDirtyFlag`](../../../core/src/classes/StandardMaterial.md#miscdirtyflag)

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L228)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`OnEventObservable`](../../../core/src/classes/StandardMaterial.md#oneventobservable)

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L99)

Returns the point fill mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`PointFillMode`](../../../core/src/classes/StandardMaterial.md#pointfillmode)

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L103)

Returns the point list draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`PointListDrawMode`](../../../core/src/classes/StandardMaterial.md#pointlistdrawmode)

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L168)

The dirty prepass flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`PrePassDirtyFlag`](../../../core/src/classes/StandardMaterial.md#prepassdirtyflag)

***

### ShaderIndexer

> `static` **ShaderIndexer**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L116)

Index for each created shader

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L143)

The dirty texture flag value

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TextureDirtyFlag`](../../../core/src/classes/StandardMaterial.md#texturedirtyflag)

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L123)

Returns the triangle fan draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TriangleFanDrawMode`](../../../core/src/classes/StandardMaterial.md#trianglefandrawmode)

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L91)

Returns the triangle fill mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TriangleFillMode`](../../../core/src/classes/StandardMaterial.md#trianglefillmode)

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L119)

Returns the triangle strip draw mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`TriangleStripDrawMode`](../../../core/src/classes/StandardMaterial.md#trianglestripdrawmode)

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L95)

Returns the wireframe mode

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`WireFrameFillMode`](../../../core/src/classes/StandardMaterial.md#wireframefillmode)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alpha`](../../../core/src/classes/StandardMaterial.md#alpha)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alphaMode`](../../../core/src/classes/StandardMaterial.md#alphamode)

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L692)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`alphaModes`](../../../core/src/classes/StandardMaterial.md#alphamodes)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`backFaceCulling`](../../../core/src/classes/StandardMaterial.md#backfaceculling)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`blockDirtyMechanism`](../../../core/src/classes/StandardMaterial.md#blockdirtymechanism)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorCurves`](../../../core/src/classes/StandardMaterial.md#cameracolorcurves)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorCurvesEnabled`](../../../core/src/classes/StandardMaterial.md#cameracolorcurvesenabled)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorGradingEnabled`](../../../core/src/classes/StandardMaterial.md#cameracolorgradingenabled)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraColorGradingTexture`](../../../core/src/classes/StandardMaterial.md#cameracolorgradingtexture)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraContrast`](../../../core/src/classes/StandardMaterial.md#cameracontrast)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraExposure`](../../../core/src/classes/StandardMaterial.md#cameraexposure)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cameraToneMappingEnabled`](../../../core/src/classes/StandardMaterial.md#cameratonemappingenabled)

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:587](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L587)

Can this material render to several textures at once

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`canRenderToMRT`](../../../core/src/classes/StandardMaterial.md#canrendertomrt)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`cullBackFaces`](../../../core/src/classes/StandardMaterial.md#cullbackfaces)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`fillMode`](../../../core/src/classes/StandardMaterial.md#fillmode)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`fogEnabled`](../../../core/src/classes/StandardMaterial.md#fogenabled)

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:639](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L639)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`hasRenderTargetTextures`](../../../core/src/classes/StandardMaterial.md#hasrendertargettextures)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`imageProcessingConfiguration`](../../../core/src/classes/StandardMaterial.md#imageprocessingconfiguration)

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1158)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isFrozen`](../../../core/src/classes/StandardMaterial.md#isfrozen)

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:580](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L580)

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isPrePassCapable`](../../../core/src/classes/StandardMaterial.md#isprepasscapable)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isVertexOutputInvariant`](../../../core/src/classes/StandardMaterial.md#isvertexoutputinvariant)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needDepthPrePass`](../../../core/src/classes/StandardMaterial.md#needdepthprepass)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onBind`](../../../core/src/classes/StandardMaterial.md#onbind)

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L593)

An event triggered when the material is bound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onBindObservable`](../../../core/src/classes/StandardMaterial.md#onbindobservable)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onDispose`](../../../core/src/classes/StandardMaterial.md#ondispose)

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L632)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onEffectCreatedObservable`](../../../core/src/classes/StandardMaterial.md#oneffectcreatedobservable)

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L619)

An event triggered when the material is unbound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`onUnBindObservable`](../../../core/src/classes/StandardMaterial.md#onunbindobservable)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`pointsCloud`](../../../core/src/classes/StandardMaterial.md#pointscloud)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L296)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`shaderLanguage`](../../../core/src/classes/StandardMaterial.md#shaderlanguage)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`textureRepetitionMode`](../../../core/src/classes/StandardMaterial.md#texturerepetitionmode)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`transparencyMode`](../../../core/src/classes/StandardMaterial.md#transparencymode)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useLogarithmicDepth`](../../../core/src/classes/StandardMaterial.md#uselogarithmicdepth)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`useVertexPulling`](../../../core/src/classes/StandardMaterial.md#usevertexpulling)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`wireframe`](../../../core/src/classes/StandardMaterial.md#wireframe)

***

### AmbientTextureEnabled

#### Get Signature

> **get** `static` **AmbientTextureEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1898)

Are ambient textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **AmbientTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1901](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1901)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1948)

Are bump textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **BumpTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1951](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1951)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1978](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1978)

Are color grading textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ColorGradingTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1981](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1981)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1888](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1888)

Are detail textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **DetailTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1891](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1891)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1878)

Are diffuse textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **DiffuseTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1881](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1881)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1928](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1928)

Are emissive textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **EmissiveTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1931](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1931)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1988)

Are fresnels enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **FresnelEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1991](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1991)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1958](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1958)

Are lightmap textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **LightmapTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1961](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1961)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1908](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1908)

Are opacity textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **OpacityTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1911](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1911)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1918](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1918)

Are reflection textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ReflectionTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1921](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1921)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1968](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1968)

Are refraction textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **RefractionTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1971)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1938](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1938)

Are specular textures enabled in the application.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **SpecularTextureEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1941](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1941)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L62)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L340)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:315](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L315)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`atomicMaterialsUpdate`](../../../core/src/classes/StandardMaterial.md#atomicmaterialsupdate)

***

### AttachAfterBind()

> **AttachAfterBind**(`mesh`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L160)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bind`](../../../core/src/classes/StandardMaterial.md#bind)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`bindEyePosition`](../../../core/src/classes/StandardMaterial.md#bindeyeposition)

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1382)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L68)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L59)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1480)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1492)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L227)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1329)

Builds the material UBO layouts.
Used internally during the effect preparation.

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`buildUniformLayout`](../../../core/src/classes/StandardMaterial.md#builduniformlayout)

***

### clone()

> **clone**(`name`, `cloneTexturesOnlyOnce?`, `rootUrl?`): [`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1842)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1815](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1815)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1673)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`forceCompilationAsync`](../../../core/src/classes/StandardMaterial.md#forcecompilationasync)

***

### Fragment\_Before\_Fog()

> **Fragment\_Before\_Fog**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L425)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L435)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L415)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L355)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L405)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L395)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L365)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L375)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L385)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`freeze`](../../../core/src/classes/StandardMaterial.md#freeze)

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1719](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1719)

Gets the active textures from the material

#### Returns

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

an array of textures

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getActiveTextures`](../../../core/src/classes/StandardMaterial.md#getactivetextures)

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:711](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L711)

Get the texture used for alpha test purpose.

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

the diffuse texture in case of the standard material.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getAlphaTestTexture`](../../../core/src/classes/StandardMaterial.md#getalphatesttexture)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1673)

Get the list of animatables in the material.

#### Returns

[`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

the list of animatables object used in the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getAnimatables`](../../../core/src/classes/StandardMaterial.md#getanimatables)

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1650)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getBindedMeshes`](../../../core/src/classes/StandardMaterial.md#getbindedmeshes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L656)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](../../../core/src/classes/Effect.md)

the effect associated with the material

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getEffect`](../../../core/src/classes/StandardMaterial.md#geteffect)

***

### getScene()

> **getScene**(): [`Scene`](../../../core/src/classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1237)

Returns the current scene

#### Returns

[`Scene`](../../../core/src/classes/Scene.md)

a Scene

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`getScene`](../../../core/src/classes/StandardMaterial.md#getscene)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1766](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1766)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`isReady`](../../../core/src/classes/StandardMaterial.md#isready)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:723](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L723)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1799)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1375)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L664)

Specifies if the material will require alpha blending

#### Returns

`boolean`

a boolean specifying if alpha blending is needed

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaBlending`](../../../core/src/classes/StandardMaterial.md#needalphablending)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaBlendingForMesh`](../../../core/src/classes/StandardMaterial.md#needalphablendingformesh)

***

### needAlphaTesting()

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L685)

Specifies if this material should be rendered in alpha test mode

#### Returns

`boolean`

a boolean specifying if an alpha test is needed.

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaTesting`](../../../core/src/classes/StandardMaterial.md#needalphatesting)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`needAlphaTestingForMesh`](../../../core/src/classes/StandardMaterial.md#needalphatestingformesh)

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1844)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`resetDrawCache`](../../../core/src/classes/StandardMaterial.md#resetdrawcache)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:2115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L2115)

Serializes this material

#### Returns

`any`

the serialized material object

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`serialize`](../../../core/src/classes/StandardMaterial.md#serialize)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`setAlphaMode`](../../../core/src/classes/StandardMaterial.md#setalphamode)

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1998](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1998)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`toString`](../../../core/src/classes/StandardMaterial.md#tostring)

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1562)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`unbind`](../../../core/src/classes/StandardMaterial.md#unbind)

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1188)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`unfreeze`](../../../core/src/classes/StandardMaterial.md#unfreeze)

***

### Vertex\_After\_WorldPosComputed()

> **Vertex\_After\_WorldPosComputed**(`shaderPart`): `CustomMaterial`

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L495)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L485)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L475)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L445)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L455)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:465](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L465)

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

Defined in: [babylonjs-source/packages/dev/materials/src/custom/customMaterial.ts:505](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/materials/src/custom/customMaterial.ts#L505)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/standardMaterial.pure.ts:1862](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/standardMaterial.pure.ts#L1862)

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

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md).[`ParseAlphaMode`](../../../core/src/classes/StandardMaterial.md#parsealphamode)
