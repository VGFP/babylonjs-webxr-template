[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OpenPBRMaterial

# Class: OpenPBRMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L496)

A Physically based material that follows the specification of OpenPBR.

For more information, please refer to the documentation :
https://academysoftwarefoundation.github.io/OpenPBR/index.html

## Extends

- `OpenPBRMaterialBase`

## Constructors

### Constructor

> **new OpenPBRMaterial**(`name`, `scene?`, `forceGLSL?`): `OpenPBRMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1918](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1918)

Instantiates a new OpenPBRMaterial instance.

#### Parameters

##### name

`string`

The material name

##### scene?

[`Scene`](Scene.md)

The scene the material will be use in.

##### forceGLSL?

`boolean` = `false`

Use the GLSL code generation for the shader (even on WebGPU). Default is false

#### Returns

`OpenPBRMaterial`

#### Overrides

`OpenPBRMaterialBase.constructor`

## Properties

### \_imageProcessingConfiguration

> **\_imageProcessingConfiguration**: [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L30)

Default configuration related to image processing available in the standard Material.

#### Inherited from

`OpenPBRMaterialBase._imageProcessingConfiguration`

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessing.ts#L56)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

`OpenPBRMaterialBase._imageProcessingObserver`

***

### \_useFuzzRoughnessFromTextureAlpha

> **\_useFuzzRoughnessFromTextureAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1601)

Specifies that the fuzz roughness is stored in the alpha channel of the texture.
This is for compatibility with glTF where the fuzz roughness is often stored in
the alpha channel of the fuzz color texture.

***

### \_useSubsurfaceWeightFromTextureAlpha

> **\_useSubsurfaceWeightFromTextureAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1608](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1608)

Specifies that the subsurface weight is stored in the alpha channel of the texture.
This is for compatibility with glTF where the subsurface weight is stored in
the alpha channel of the diffuseTransmissionTexture.

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L256)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

`OpenPBRMaterialBase.allowShaderHotSwapping`

***

### alphaCutOff

> **alphaCutOff**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1312)

Defines the alpha limits in alpha test mode.

***

### ambientOcclusionTexture

> **ambientOcclusionTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1198)

Defines the ambient occlusion texture.

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L563)

Stores the animations for the material

#### Inherited from

`OpenPBRMaterialBase.animations`

***

### applyDecalMapAfterDetailMap

> **applyDecalMapAfterDetailMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1535)

If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)

***

### baseColor

> **baseColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:519](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L519)

Color of the base diffuse lobe.
See OpenPBR's specs for base_color

***

### baseColorTexture

> **baseColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:528](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L528)

Base Color Texture property.
See OpenPBR's specs for base_color

***

### baseDiffuseRoughness

> **baseDiffuseRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L537)

Roughness of the diffuse lobe.
See OpenPBR's specs for base_diffuse_roughness

***

### baseDiffuseRoughnessTexture

> **baseDiffuseRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L546)

Roughness texture of the diffuse lobe.
See OpenPBR's specs for base_diffuse_roughness

***

### baseMetalness

> **baseMetalness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:555](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L555)

Metalness of the base lobe.
See OpenPBR's specs for base_metalness

***

### baseMetalnessTexture

> **baseMetalnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:564](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L564)

Metalness texture.
See OpenPBR's specs for base_metalness

***

### baseWeight

> **baseWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:501](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L501)

Base Weight is a multiplier on the diffuse and metal lobes.
See OpenPBR's specs for base_weight

***

### baseWeightTexture

> **baseWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L510)

Base Weight is a multiplier on the diffuse and metal lobes.
See OpenPBR's specs for base_weight

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L337)

Specifies if the ready state should be checked on each call

#### Inherited from

`OpenPBRMaterialBase.checkReadyOnEveryCall`

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L343)

Specifies if the ready state should be checked once

#### Inherited from

`OpenPBRMaterialBase.checkReadyOnlyOnce`

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:875](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L875)

Gets or sets the active clipplane 1

#### Inherited from

`OpenPBRMaterialBase.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L880)

Gets or sets the active clipplane 2

#### Inherited from

`OpenPBRMaterialBase.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:885](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L885)

Gets or sets the active clipplane 3

#### Inherited from

`OpenPBRMaterialBase.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L890)

Gets or sets the active clipplane 4

#### Inherited from

`OpenPBRMaterialBase.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:895](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L895)

Gets or sets the active clipplane 5

#### Inherited from

`OpenPBRMaterialBase.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:900](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L900)

Gets or sets the active clipplane 6

#### Inherited from

`OpenPBRMaterialBase.clipPlane6`

***

### coatColor

> **coatColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:852](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L852)

Defines the color of the clear coat on the surface.
See OpenPBR's specs for coat_color

***

### coatColorTexture

> **coatColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:861](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L861)

Color texture of the clear coat.
See OpenPBR's specs for coat_color

***

### coatDarkening

> **coatDarkening**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:917](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L917)

Defines the amount that interreflections within the coat allow the underlying surface
to be darkened. A value of 1.0 means that the physically correct amount of darkening
is applied, while a value of 0.0 means that no darkening is applied.
See OpenPBR's specs for coat_darkening

***

### coatDarkeningTexture

> **coatDarkeningTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:928](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L928)

Defines the amount that interreflections within the coat allow the underlying surface
to be darkened. A value of 1.0 means that the physically correct amount of darkening
is applied, while a value of 0.0 means that no darkening is applied.
See OpenPBR's specs for coat_darkening

***

### coatIor

> **coatIor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:906](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L906)

Defines the IOR of the clear coat on the surface.
See OpenPBR's specs for coat_ior

***

### coatRoughness

> **coatRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:870](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L870)

Defines the roughness of the clear coat on the surface.
See OpenPBR's specs for coat_roughness

***

### coatRoughnessAnisotropy

> **coatRoughnessAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:888](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L888)

Defines the anisotropy of the clear coat on the surface.
See OpenPBR's specs for coat_roughness_anisotropy

***

### coatRoughnessAnisotropyTexture

> **coatRoughnessAnisotropyTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:897](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L897)

Anisotropic Roughness texture of the clear coat.
See OpenPBR's specs for coat_roughness_anisotropy

***

### coatRoughnessTexture

> **coatRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:879](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L879)

Roughness texture of the clear coat.
See OpenPBR's specs for coat_roughness

***

### coatWeight

> **coatWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:834](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L834)

Defines the amount of clear coat on the surface.
See OpenPBR's specs for coat_weight

***

### coatWeightTexture

> **coatWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:843](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L843)

Coat weight texture.
See OpenPBR's specs for coat_weight

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

`OpenPBRMaterialBase.customShaderNameResolve`

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L762)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

`OpenPBRMaterialBase.depthFunction`

***

### directIntensity

> **directIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1283)

Intensity of the direct lights e.g. the four lights available in your scene.
This impacts both the direct diffuse and specular highlights.

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:750](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L750)

Specifies if color writing should be disabled

#### Inherited from

`OpenPBRMaterialBase.disableColorWrite`

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L744)

Specifies if depth writing should be disabled

#### Inherited from

`OpenPBRMaterialBase.disableDepthWrite`

***

### disableLighting

> **disableLighting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1427)

If sets to true, disables all the lights affecting the material.

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:553](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L553)

Specifies if the material should be serialized

#### Inherited from

`OpenPBRMaterialBase.doNotSerialize`

***

### emissionColor

> **emissionColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1131)

Defines the color of the material's emission.
See OpenPBR's specs for emission_color

***

### emissionColorTexture

> **emissionColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1140)

Defines the texture of the material's emission color.
See OpenPBR's specs for emission_color

***

### emissionLuminance

> **emissionLuminance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1122)

Defines the luminance of the material's emission.
See OpenPBR's specs for emission_luminance

***

### enableSpecularAntiAliasing

> **enableSpecularAntiAliasing**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1505)

Enables specular anti aliasing in the PBR shader.
It will both interacts on the Geometry for analytical and IBL lighting.
It also prefilter the roughness map based on the normalmap values.

***

### environmentBRDFTexture

> **environmentBRDFTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1489](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1489)

Let user defines the brdf lookup texture used for IBL.
A default 8bit version is embedded but you could point at :
* Default texture: https://assets.babylonjs.com/environments/correlatedMSBRDF_RGBD.png
* Default 16bit pixel depth texture: https://assets.babylonjs.com/environments/correlatedMSBRDF.dds
* LEGACY Default None correlated https://assets.babylonjs.com/environments/uncorrelatedBRDF_RGBD.png
* LEGACY Default None correlated 16bit pixel depth https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds

***

### environmentIntensity

> **environmentIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1291)

Intensity of the environment e.g. how much the environment will light the object
either through harmonics for rough material or through the reflection for shiny ones.

***

### forceAlphaTest

> **forceAlphaTest**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1305)

Enforces alpha test in opaque or blend mode in order to improve the performances of some situations.

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:756](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L756)

Specifies if depth writing should be forced

#### Inherited from

`OpenPBRMaterialBase.forceDepthWrite`

***

### forceIrradianceInFragment

> **forceIrradianceInFragment**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1434)

Force the shader to compute irradiance in the fragment shader in order to take normal mapping into account.

***

### forceNormalForward

> **forceNormalForward**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1496)

Force normal to face away from face.

***

### fuzzColor

> **fuzzColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:961](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L961)

Defines the color of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_color

***

### fuzzColorTexture

> **fuzzColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:970](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L970)

Color texture of the fuzz layer.
See OpenPBR's specs for fuzz_color

***

### fuzzRoughness

> **fuzzRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:979](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L979)

Defines the roughness of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_roughness

***

### fuzzRoughnessTexture

> **fuzzRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:988](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L988)

Roughness texture of the fuzz layer.
See OpenPBR's specs for fuzz_roughness

***

### fuzzWeight

> **fuzzWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:943](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L943)

Defines the weight of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_weight

***

### fuzzWeightTexture

> **fuzzWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:952](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L952)

Weight texture of the fuzz layer.
See OpenPBR's specs for fuzz_weight

***

### geometryCoatNormalTexture

> **geometryCoatNormalTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1045](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1045)

Defines the normal of the material's coat layer.
See OpenPBR's specs for geometry_coat_normal

***

### geometryCoatTangent

> **geometryCoatTangent**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1054](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1054)

Defines the tangent of the material's coat layer. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_coat_tangent

***

### geometryCoatTangentTexture

> **geometryCoatTangentTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1077](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1077)

Defines the tangent of the material's coat layer. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_coat_tangent

***

### geometryNormalTexture

> **geometryNormalTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1006](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1006)

Defines the normal of the material's geometry.
See OpenPBR's specs for geometry_normal

***

### geometryOpacity

> **geometryOpacity**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1086](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1086)

Defines the opacity of the material's geometry.
See OpenPBR's specs for geometry_opacity

***

### geometryOpacityTexture

> **geometryOpacityTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1095](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1095)

Defines the opacity texture of the material's geometry.
See OpenPBR's specs for geometry_opacity

***

### geometryTangent

> **geometryTangent**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1015)

Defines the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

***

### geometryTangentTexture

> **geometryTangentTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1036](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1036)

Defines the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

***

### geometryThickness

> **geometryThickness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1104)

Defines the thickness of the material's geometry.
Not part of OpenPBR's specs but useful for rasterization approximations of volume.

***

### geometryThicknessTexture

> **geometryThicknessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1113)

Defines the thickness of the material's geometry.
Not part of OpenPBR's specs but useful for rasterization approximations of volume.

***

### geometryThinWalled

> **geometryThinWalled**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:997](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L997)

Defines whether the geometry is thin-walled (like a sheet of paper) or not.
See OpenPBR's specs for geometry_thin_walled

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:539](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L539)

Callback triggered to get the render target textures

#### Inherited from

`OpenPBRMaterialBase.getRenderTargetTextures`

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L302)

The ID of the material

#### Inherited from

`OpenPBRMaterialBase.id`

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L370)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

`OpenPBRMaterialBase.inspectableCustomProperties`

***

### invertNormalMapX

> **invertNormalMapX**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1448](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1448)

If sets to true, x component of normal map value will invert (x = 1.0 - x).

***

### invertNormalMapY

> **invertNormalMapY**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1455)

If sets to true, y component of normal map value will invert (y = 1.0 - y).

***

### maxSimultaneousLights

> **maxSimultaneousLights**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1441)

Number of Simultaneous lights allowed on the material.

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L323)

Gets or sets user defined metadata

#### Inherited from

`OpenPBRMaterialBase.metadata`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L317)

The name of the material

#### Inherited from

`OpenPBRMaterialBase.name`

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L529)

Callback triggered when the material is compiled

#### Inherited from

`OpenPBRMaterialBase.onCompiled`

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L568)

An event triggered when the material is disposed

#### Inherited from

`OpenPBRMaterialBase.onDisposeObservable`

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L534)

Callback triggered when an error occurs

#### Inherited from

`OpenPBRMaterialBase.onError`

***

### parallaxScaleBias

> **parallaxScaleBias**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1420)

Controls the scale bias of the parallax mode.

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L36)

Plugin manager for this material

#### Inherited from

`OpenPBRMaterialBase.pluginManager`

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L798)

Stores the size of points

#### Inherited from

`OpenPBRMaterialBase.pointSize`

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1907](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1907)

Defines additional PrePass parameters for the material.

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L331)

For internal use only. Please do not use.

#### Inherited from

`OpenPBRMaterialBase.reservedDataStore`

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:768](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L768)

Specifies if there should be a separate pass for culling

#### Inherited from

`OpenPBRMaterialBase.separateCullingPass`

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L249)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

`OpenPBRMaterialBase.shadowDepthWrapper`

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L524)

Stores the value for side orientation

#### Inherited from

`OpenPBRMaterialBase.sideOrientation`

***

### specularColor

> **specularColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L591)

Color of the specular lobe.
See OpenPBR's specs for specular_color

***

### specularColorTexture

> **specularColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:600](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L600)

Specular Color Texture property.
See OpenPBR's specs for specular_color

***

### specularIor

> **specularIor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:645](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L645)

IOR of the specular lobe.
See OpenPBR's specs for specular_ior

***

### specularRoughness

> **specularRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:609](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L609)

Roughness of the specular lobe.
See OpenPBR's specs for specular_roughness

***

### specularRoughnessAnisotropy

> **specularRoughnessAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L627)

Anisotropic roughness of the specular lobe.
See OpenPBR's specs for specular_roughness_anisotropy

***

### specularRoughnessAnisotropyTexture

> **specularRoughnessAnisotropyTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L636)

Anisotropic Roughness texture.
See OpenPBR's specs for specular_roughness

***

### specularRoughnessTexture

> **specularRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:618](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L618)

Roughness texture of the specular lobe.
See OpenPBR's specs for specular_roughness

***

### specularWeight

> **specularWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:573](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L573)

Weight of the specular lobe.
See OpenPBR's specs for specular_weight

***

### specularWeightTexture

> **specularWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L582)

Weight texture of the specular lobe.
See OpenPBR's specs for specular_weight

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L349)

The state of the material

#### Inherited from

`OpenPBRMaterialBase.state`

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:905](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L905)

Gives access to the stencil properties of the material

#### Inherited from

`OpenPBRMaterialBase.stencil`

***

### subsurfaceColor

> **subsurfaceColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:780](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L780)

Defines the color of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_color

***

### subsurfaceColorTexture

> **subsurfaceColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L789)

Subsurface color texture.
See OpenPBR's specs for subsurface_color

***

### subsurfaceRadius

> **subsurfaceRadius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L798)

Defines the radius of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_radius

***

### subsurfaceRadiusScale

> **subsurfaceRadiusScale**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:807](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L807)

Defines the scale factor applied to the subsurface radius.
See OpenPBR's specs for subsurface_radius_scale

***

### subsurfaceRadiusScaleTexture

> **subsurfaceRadiusScaleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:816](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L816)

Subsurface radius scale texture.
See OpenPBR's specs for subsurface_radius_scale

***

### subsurfaceScatterAnisotropy

> **subsurfaceScatterAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:825](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L825)

Defines the anisotropy of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_scatter_anisotropy

***

### subsurfaceWeight

> **subsurfaceWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L762)

Defines the amount of subsurface scattering on the surface.
See OpenPBR's specs for subsurface_weight

***

### subsurfaceWeightTexture

> **subsurfaceWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:771](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L771)

Subsurface weight texture.
See OpenPBR's specs for subsurface_weight

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

`OpenPBRMaterialBase.textureRepetitionHexTilingParams`

***

### thinFilmIor

> **thinFilmIor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1190)

Defines the index of refraction of the thin film layer.

***

### thinFilmThickness

> **thinFilmThickness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1166)

Defines the thickness of the thin film layer in μm. If a texture is provided for thinFilmWeightTexture,
this value will act as a multiplier to the texture values.
See OpenPBR's specs for thin_film_thickness

***

### thinFilmThicknessMin

> **thinFilmThicknessMin**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1174)

Defines the minimum thickness of the thin film layer in μm.

***

### thinFilmThicknessTexture

> **thinFilmThicknessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1182)

Defines the maximum thickness of the thin film layer in μm.

***

### thinFilmWeight

> **thinFilmWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1148)

Defines the weight of the thin film layer on top of the base layer for iridescent effects.

***

### thinFilmWeightTexture

> **thinFilmWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1156)

Thin film weight texture.

***

### transmissionColor

> **transmissionColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L672)

Transmission color of the surface.
See OpenPBR's specs for transmission_color

***

### transmissionColorTexture

> **transmissionColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:681](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L681)

Transmission color texture.
See OpenPBR's specs for transmission_color

***

### transmissionDepth

> **transmissionDepth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L690)

Transmission depth of the volume
See OpenPBR's specs for transmission_depth

***

### transmissionDepthTexture

> **transmissionDepthTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:699](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L699)

Transmission depth texture.
See OpenPBR's specs for transmission_depth

***

### transmissionDispersionAbbeNumber

> **transmissionDispersionAbbeNumber**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L753)

Transmission Dispersion Abbe number.
See OpenPBR's specs for transmission_dispersion_abbe_number

***

### transmissionDispersionScale

> **transmissionDispersionScale**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:735](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L735)

Transmission Dispersion Scale factor.
See OpenPBR's specs for transmission_dispersion_scale

***

### transmissionDispersionScaleTexture

> **transmissionDispersionScaleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L744)

Transmission Dispersion Scale texture.
See OpenPBR's specs for transmission_dispersion_scale

***

### transmissionScatter

> **transmissionScatter**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:708](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L708)

Transmission scatter of the surface.
See OpenPBR's specs for transmission_scatter

***

### transmissionScatterAnisotropy

> **transmissionScatterAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:726](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L726)

Transmission scatter anisotropy
See OpenPBR's specs for transmission_scatter_anisotropy

***

### transmissionScatterTexture

> **transmissionScatterTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:717](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L717)

Transmission scatter texture.
See OpenPBR's specs for transmission_scatter

***

### transmissionWeight

> **transmissionWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:654](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L654)

Transmission weight of the surface.
See OpenPBR's specs for transmission_weight

***

### transmissionWeightTexture

> **transmissionWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:663](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L663)

Transmission weight texture.
See OpenPBR's specs for transmission_weight

***

### twoSidedLighting

> **twoSidedLighting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1462](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1462)

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L308)

Gets or sets the unique id of the material

#### Inherited from

`OpenPBRMaterialBase.uniqueId`

***

### unlit

> **unlit**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1528](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1528)

If set to true, no lighting calculations will be applied.

***

### useAlphaFresnel

> **useAlphaFresnel**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1470)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)

***

### useAmbientInGrayScale

> **useAmbientInGrayScale**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1326)

Specifies if the ambient texture contains the ambient occlusion information in its red channel only.

***

### useAmbientOcclusionFromMetallicTextureRed

> **useAmbientOcclusionFromMetallicTextureRed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1319)

Specifies if the metallic texture contains the ambient occlusion information in its red channel.

***

### useCoatRoughnessFromWeightTexture

> **useCoatRoughnessFromWeightTexture**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:937](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L937)

Specifies whether the coat roughness is taken from the
same texture as the coat_weight.

***

### useHorizonOcclusion

> **useHorizonOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1513](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1513)

This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
makes the reflect vector face the model (under horizon).

***

### useLinearAlphaFresnel

> **useLinearAlphaFresnel**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1478)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha stays linear to compute the fresnel)

***

### useObjectSpaceNormalMap

> **useObjectSpaceNormalMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1399)

Allows using an object space normal map (instead of tangent space).

***

### useParallax

> **useParallax**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1406)

Allows using the normal map in parallax mode.

***

### useParallaxOcclusion

> **useParallaxOcclusion**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1413](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1413)

Allows using the normal map in parallax occlusion mode.

***

### useRadianceOcclusion

> **useRadianceOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1521](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1521)

This parameters will enable/disable radiance occlusion by preventing the radiance to lit
too much the area relying on ambient texture to define their ambient occlusion.

***

### useSpecularWeightFromTextureAlpha

> **useSpecularWeightFromTextureAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1298)

Specifies that the specular weight is stored in the alpha channel of the specular weight texture.

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L804)

Stores the z offset Factor value

#### Inherited from

`OpenPBRMaterialBase.zOffset`

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:810](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L810)

Stores the z offset Units value

#### Inherited from

`OpenPBRMaterialBase.zOffsetUnits`

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L171)

The all dirty flag value

#### Inherited from

`OpenPBRMaterialBase.AllDirtyFlag`

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L156)

The dirty attribute flag value

#### Inherited from

`OpenPBRMaterialBase.AttributesDirtyFlag`

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L126)

Stores the clock-wise side orientation

#### Inherited from

`OpenPBRMaterialBase.ClockWiseSideOrientation`

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L131)

Stores the counter clock-wise side orientation

#### Inherited from

`OpenPBRMaterialBase.CounterClockWiseSideOrientation`

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1541](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1541)

Force all the PBR materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L231)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

`OpenPBRMaterialBase.ForceVertexOutputInvariant`

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L151)

The dirty fresnel flag value

#### Inherited from

`OpenPBRMaterialBase.FresnelDirtyFlag`

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L136)

The dirty image processing flag value

#### Inherited from

`OpenPBRMaterialBase.ImageProcessingDirtyFlag`

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L146)

The dirty light flag value

#### Inherited from

`OpenPBRMaterialBase.LightDirtyFlag`

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L215)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_GLTF`

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L209)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_PHYSICAL`

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L221)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_STANDARD`

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L105)

Returns the line list draw mode

#### Inherited from

`OpenPBRMaterialBase.LineListDrawMode`

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L109)

Returns the line loop draw mode

#### Inherited from

`OpenPBRMaterialBase.LineLoopDrawMode`

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L113)

Returns the line strip draw mode

#### Inherited from

`OpenPBRMaterialBase.LineStripDrawMode`

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L186)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHABLEND`

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L181)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHATEST`

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L192)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHATESTANDBLEND`

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L204)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_NORMALBLENDMETHOD_RNM`

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L198)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_NORMALBLENDMETHOD_WHITEOUT`

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L176)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_OPAQUE`

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L161)

The dirty misc flag value

#### Inherited from

`OpenPBRMaterialBase.MiscDirtyFlag`

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L226)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

`OpenPBRMaterialBase.OnEventObservable`

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L97)

Returns the point fill mode

#### Inherited from

`OpenPBRMaterialBase.PointFillMode`

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L101)

Returns the point list draw mode

#### Inherited from

`OpenPBRMaterialBase.PointListDrawMode`

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L166)

The dirty prepass flag value

#### Inherited from

`OpenPBRMaterialBase.PrePassDirtyFlag`

***

### SSS\_QUALITY\_HIGH

> `readonly` `static` **SSS\_QUALITY\_HIGH**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1208)

SSS convolution uses 32 samples.

***

### SSS\_QUALITY\_LOW

> `readonly` `static` **SSS\_QUALITY\_LOW**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1204)

SSS convolution uses 8 samples.

***

### SSS\_QUALITY\_MEDIUM

> `readonly` `static` **SSS\_QUALITY\_MEDIUM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1206)

SSS convolution uses 16 samples (default).

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L141)

The dirty texture flag value

#### Inherited from

`OpenPBRMaterialBase.TextureDirtyFlag`

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L121)

Returns the triangle fan draw mode

#### Inherited from

`OpenPBRMaterialBase.TriangleFanDrawMode`

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L89)

Returns the triangle fill mode

#### Inherited from

`OpenPBRMaterialBase.TriangleFillMode`

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L117)

Returns the triangle strip draw mode

#### Inherited from

`OpenPBRMaterialBase.TriangleStripDrawMode`

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L93)

Returns the wireframe mode

#### Inherited from

`OpenPBRMaterialBase.WireFrameFillMode`

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

`OpenPBRMaterialBase.alpha`

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

`OpenPBRMaterialBase.alphaMode`

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L690)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

`OpenPBRMaterialBase.alphaModes`

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

`OpenPBRMaterialBase.backFaceCulling`

***

### backgroundRefractionTexture

#### Set Signature

> **set** **backgroundRefractionTexture**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1771](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1771)

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

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

`OpenPBRMaterialBase.blockDirtyMechanism`

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

`OpenPBRMaterialBase.cameraColorCurves`

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

`OpenPBRMaterialBase.cameraColorCurvesEnabled`

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

`OpenPBRMaterialBase.cameraColorGradingEnabled`

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

`OpenPBRMaterialBase.cameraColorGradingTexture`

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

`OpenPBRMaterialBase.cameraContrast`

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

`OpenPBRMaterialBase.cameraExposure`

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

`OpenPBRMaterialBase.cameraToneMappingEnabled`

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1838](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1838)

Can this material render to several textures at once

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.canRenderToMRT`

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

`OpenPBRMaterialBase.cullBackFaces`

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

`OpenPBRMaterialBase.fillMode`

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

`OpenPBRMaterialBase.fogEnabled`

***

### fuzzSampleNumber

#### Get Signature

> **get** **fuzzSampleNumber**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1827](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1827)

The number of samples used to compute the fuzz IBL lighting.

##### Returns

`number`

#### Set Signature

> **set** **fuzzSampleNumber**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1830](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1830)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### geometryCoatTangentAngle

#### Get Signature

> **get** **geometryCoatTangentAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1062](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1062)

Defines the angle of the tangent of the material's coat layer.

##### Returns

`number`

#### Set Signature

> **set** **geometryCoatTangentAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1069](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1069)

Defines the angle of the tangent of the material's coat layer.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### geometryTangentAngle

#### Get Signature

> **get** **geometryTangentAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1024](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1024)

Defines the angle of the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

##### Returns

`number`

#### Set Signature

> **set** **geometryTangentAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1028](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1028)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2094](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2094)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.hasRenderTargetTextures`

***

### hasScattering

#### Get Signature

> **get** **hasScattering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1336)

Specifies if the material has scattering properties such as subsurface scattering or transmission scattering.

##### Returns

`boolean`

***

### hasTransparency

#### Get Signature

> **get** **hasTransparency**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1331)

Specifies if we can see through the surface of the material due to subsurface scattering or transmission.

##### Returns

`boolean`

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

`OpenPBRMaterialBase.imageProcessingConfiguration`

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1156)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

`OpenPBRMaterialBase.isFrozen`

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2109)

Can this material render to prepass

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.isPrePassCapable`

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

`OpenPBRMaterialBase.isVertexOutputInvariant`

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

`OpenPBRMaterialBase.needDepthPrePass`

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

`OpenPBRMaterialBase.onBind`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L591)

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

`OpenPBRMaterialBase.onBindObservable`

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

`OpenPBRMaterialBase.onDispose`

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L630)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

`OpenPBRMaterialBase.onEffectCreatedObservable`

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L617)

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

`OpenPBRMaterialBase.onUnBindObservable`

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

`OpenPBRMaterialBase.pointsCloud`

***

### realTimeFiltering

#### Get Signature

> **get** **realTimeFiltering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1802](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1802)

Enables realtime filtering on the texture.

##### Returns

`boolean`

#### Set Signature

> **set** **realTimeFiltering**(`b`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1805](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1805)

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### realTimeFilteringQuality

#### Get Signature

> **get** **realTimeFilteringQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1814](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1814)

Quality switch for realtime filtering

##### Returns

`number`

#### Set Signature

> **set** **realTimeFilteringQuality**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1817](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1817)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### refractionHighQualityBlur

#### Get Signature

> **get** **refractionHighQualityBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1782](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1782)

When true, uses a 4-tap rotated-grid kernel for refractive background blur,
eliminating bilinear block artifacts at the cost of 3 extra texture samples.
When false, a single dithered sample is used. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **refractionHighQualityBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1785](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1785)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L294)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`OpenPBRMaterialBase.shaderLanguage`

***

### sssDepthTexture

#### Get Signature

> **get** **sssDepthTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1253)

Defines the depth texture used for subsurface scattering. This is the depth defined
in screen space. If it's not provided, the depth will be looked for in the scene.geometryBufferRenderer.
Accepts a [ThinTexture](ThinTexture.md) so that an [InternalTexture](InternalTexture.md) obtained from a frame graph
handle can be wrapped with `new ThinTexture(internalTexture)` and assigned directly.
Setting this property marks all sub-meshes as textures-dirty so the shader recompiles.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

#### Set Signature

> **set** **sssDepthTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1256)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

##### Returns

`void`

***

### sssIrradianceTexture

#### Get Signature

> **get** **sssIrradianceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1234)

Defines the irradiance texture used for subsurface scattering.
If it's not provided, the irradiance will be looked for in the scene.geometryBufferRenderer.
Accepts a [ThinTexture](ThinTexture.md) so that an [InternalTexture](InternalTexture.md) obtained from a frame graph
handle can be wrapped with `new ThinTexture(internalTexture)` and assigned directly.
Setting this property marks all sub-meshes as textures-dirty so the shader recompiles.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

#### Set Signature

> **set** **sssIrradianceTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1237)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

##### Returns

`void`

***

### sssQuality

#### Get Signature

> **get** **sssQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1216)

Controls the sample count of the screen-space SSS convolution kernel.
Use the SSS_QUALITY_LOW / MEDIUM / HIGH constants (8 / 16 / 32 samples).
Higher quality reduces noise at the cost of GPU time. Default: MEDIUM.

##### Returns

`number`

#### Set Signature

> **set** **sssQuality**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1219)

##### Parameters

###### value

`number`

##### Returns

`void`

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

`OpenPBRMaterialBase.textureRepetitionMode`

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2123)

Gets the current transparency mode.

##### Returns

`number`

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2127)

Gets the current transparency mode.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.transparencyMode`

***

### useGLTFLightFalloff

#### Get Signature

> **get** **useGLTFLightFalloff**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1373)

In order to support the falloff compatibility with gltf, a special mode has been added
to reproduce the gltf light falloff.

##### Returns

`boolean`

#### Set Signature

> **set** **useGLTFLightFalloff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1381)

In order to support the falloff compatibility with gltf, a special mode has been added
to reproduce the gltf light falloff.

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

`OpenPBRMaterialBase.useLogarithmicDepth`

***

### usePhysicalLightFalloff

#### Get Signature

> **get** **usePhysicalLightFalloff**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1346)

BJS is using an hardcoded light falloff based on a manually sets up range.
In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
This parameter can help you switch back to the BJS mode in order to create scenes using both materials.

##### Returns

`boolean`

#### Set Signature

> **set** **usePhysicalLightFalloff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L1355)

BJS is using an hardcoded light falloff based on a manually sets up range.
In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
This parameter can help you switch back to the BJS mode in order to create scenes using both materials.

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

`OpenPBRMaterialBase.useVertexPulling`

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

`OpenPBRMaterialBase.wireframe`

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

`OpenPBRMaterialBase._attachImageProcessingConfiguration`

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

`OpenPBRMaterialBase.atomicMaterialsUpdate`

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

`OpenPBRMaterialBase.bind`

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

`OpenPBRMaterialBase.bindEyePosition`

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2489](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2489)

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

#### Overrides

`OpenPBRMaterialBase.bindForSubMesh`

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

`OpenPBRMaterialBase.bindOnlyNormalMatrix`

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

`OpenPBRMaterialBase.bindOnlyWorldMatrix`

***

### bindPropertiesForSubMesh()

> **bindPropertiesForSubMesh**(`uniformBuffer`, `scene`, `engine`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2472](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2472)

Binds the material data (this function is called even if mustRebind() returns false)

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

defines the Uniform buffer to fill in.

##### scene

[`Scene`](Scene.md)

defines the scene the material belongs to.

##### engine

[`Engine`](Engine.md)

defines the engine the material belongs to.

##### subMesh

[`SubMesh`](SubMesh.md)

the submesh to bind data for

#### Returns

`void`

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

`OpenPBRMaterialBase.bindView`

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

`OpenPBRMaterialBase.bindViewProjection`

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2437)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.buildUniformLayout`

***

### clone()

> **clone**(`name`, `cloneTexturesOnlyOnce?`, `rootUrl?`): `OpenPBRMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2158)

Makes a duplicate of the current material.

#### Parameters

##### name

`string`

name to use for the new material.

##### cloneTexturesOnlyOnce?

`boolean` = `true`

if a texture is used in more than one channel (e.g baseColor and opacity), only clone it once and reuse it on the other channels. Default false.

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures

#### Returns

`OpenPBRMaterial`

cloned material instance

#### Overrides

`OpenPBRMaterialBase.clone`

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2794](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2794)

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

#### Overrides

`OpenPBRMaterialBase.dispose`

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2208)

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

#### Overrides

`OpenPBRMaterialBase.forceCompilation`

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

`OpenPBRMaterialBase.forceCompilationAsync`

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

`OpenPBRMaterialBase.freeze`

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2736](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2736)

Returns an array of the actively used textures.

#### Returns

[`BaseTexture`](BaseTexture.md)[]

- Array of BaseTextures

#### Overrides

`OpenPBRMaterialBase.getActiveTextures`

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1365)

Gets the texture used for the alpha test

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture to use for alpha testing

#### Inherited from

`OpenPBRMaterialBase.getAlphaTestTexture`

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2714](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2714)

Returns the animatable textures.
If material have animatable metallic texture, then reflectivity texture will not be returned, even if it has animations.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Overrides

`OpenPBRMaterialBase.getAnimatables`

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1648)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

`OpenPBRMaterialBase.getBindedMeshes`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2116)

#### Returns

`string`

the name of the material class.

#### Overrides

`OpenPBRMaterialBase.getClassName`

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

`OpenPBRMaterialBase.getEffect`

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1235)

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

`OpenPBRMaterialBase.getScene`

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2759](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2759)

Checks to see if a texture is used in the material.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

Base texture to use.

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Overrides

`OpenPBRMaterialBase.hasTexture`

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

`OpenPBRMaterialBase.isReady`

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2257)

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

#### Overrides

`OpenPBRMaterialBase.isReadyForSubMesh`

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

`OpenPBRMaterialBase.markAsDirty`

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

`OpenPBRMaterialBase.markDirty`

***

### ~~needAlphaBlending()~~

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1302)

Specifies whether or not this material should be rendered in alpha blend mode.

#### Returns

`boolean`

a boolean specifying if alpha blending is needed

#### Deprecated

Please use needAlphaBlendingForMesh instead

#### Inherited from

`OpenPBRMaterialBase.needAlphaBlending`

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

`OpenPBRMaterialBase.needAlphaBlendingForMesh`

***

### ~~needAlphaTesting()~~

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1340)

Specifies whether or not this material should be rendered in alpha test mode.

#### Returns

`boolean`

a boolean specifying if an alpha test is needed.

#### Deprecated

Please use needAlphaTestingForMesh instead

#### Inherited from

`OpenPBRMaterialBase.needAlphaTesting`

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

`OpenPBRMaterialBase.needAlphaTestingForMesh`

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1842)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.resetDrawCache`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2175)

Serializes this PBR Material.

#### Returns

`any`

- An object with the serialized material.

#### Overrides

`OpenPBRMaterialBase.serialize`

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

`OpenPBRMaterialBase.setAlphaMode`

***

### setPrePassRenderer()

> **setPrePassRenderer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2785](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2785)

Sets the required values to the prepass renderer.
It can't be sets when subsurface scattering of this material is disabled.
When scene have ability to enable subsurface prepass effect, it will enable.

#### Returns

`boolean`

- If prepass is enabled or not.

#### Overrides

`OpenPBRMaterialBase.setPrePassRenderer`

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

`OpenPBRMaterialBase.toString`

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1560](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1560)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.unbind`

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/material.ts#L1186)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.unfreeze`

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): `OpenPBRMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts:2190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/openpbrMaterial.ts#L2190)

Parses a PBR Material from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](Scene.md)

BJS scene instance.

##### rootUrl

`string`

url for the scene object

#### Returns

`OpenPBRMaterial`

- OpenPBRMaterial

#### Overrides

`OpenPBRMaterialBase.Parse`

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

`OpenPBRMaterialBase.ParseAlphaMode`
