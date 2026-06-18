[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OpenPBRMaterial

# Class: OpenPBRMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L515)

A Physically based material that follows the specification of OpenPBR.

For more information, please refer to the documentation :
https://academysoftwarefoundation.github.io/OpenPBR/index.html

## Extends

- `OpenPBRMaterialBase`

## Constructors

### Constructor

> **new OpenPBRMaterial**(`name`, `scene?`, `forceGLSL?`): `OpenPBRMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1937](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1937)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L30)

Default configuration related to image processing available in the standard Material.

#### Inherited from

`OpenPBRMaterialBase._imageProcessingConfiguration`

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L56)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

`OpenPBRMaterialBase._imageProcessingObserver`

***

### \_useFuzzRoughnessFromTextureAlpha

> **\_useFuzzRoughnessFromTextureAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1620](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1620)

Specifies that the fuzz roughness is stored in the alpha channel of the texture.
This is for compatibility with glTF where the fuzz roughness is often stored in
the alpha channel of the fuzz color texture.

***

### \_useSubsurfaceWeightFromTextureAlpha

> **\_useSubsurfaceWeightFromTextureAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1627](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1627)

Specifies that the subsurface weight is stored in the alpha channel of the texture.
This is for compatibility with glTF where the subsurface weight is stored in
the alpha channel of the diffuseTransmissionTexture.

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L258)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

`OpenPBRMaterialBase.allowShaderHotSwapping`

***

### alphaCutOff

> **alphaCutOff**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1331)

Defines the alpha limits in alpha test mode.

***

### ambientOcclusionTexture

> **ambientOcclusionTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1217)

Defines the ambient occlusion texture.

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L565)

Stores the animations for the material

#### Inherited from

`OpenPBRMaterialBase.animations`

***

### applyDecalMapAfterDetailMap

> **applyDecalMapAfterDetailMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1554](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1554)

If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)

***

### baseColor

> **baseColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L538)

Color of the base diffuse lobe.
See OpenPBR's specs for base_color

***

### baseColorTexture

> **baseColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L547)

Base Color Texture property.
See OpenPBR's specs for base_color

***

### baseDiffuseRoughness

> **baseDiffuseRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:556](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L556)

Roughness of the diffuse lobe.
See OpenPBR's specs for base_diffuse_roughness

***

### baseDiffuseRoughnessTexture

> **baseDiffuseRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L565)

Roughness texture of the diffuse lobe.
See OpenPBR's specs for base_diffuse_roughness

***

### baseMetalness

> **baseMetalness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L574)

Metalness of the base lobe.
See OpenPBR's specs for base_metalness

***

### baseMetalnessTexture

> **baseMetalnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L583)

Metalness texture.
See OpenPBR's specs for base_metalness

***

### baseWeight

> **baseWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L520)

Base Weight is a multiplier on the diffuse and metal lobes.
See OpenPBR's specs for base_weight

***

### baseWeightTexture

> **baseWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L529)

Base Weight is a multiplier on the diffuse and metal lobes.
See OpenPBR's specs for base_weight

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L339)

Specifies if the ready state should be checked on each call

#### Inherited from

`OpenPBRMaterialBase.checkReadyOnEveryCall`

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L345)

Specifies if the ready state should be checked once

#### Inherited from

`OpenPBRMaterialBase.checkReadyOnlyOnce`

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:877](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L877)

Gets or sets the active clipplane 1

#### Inherited from

`OpenPBRMaterialBase.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:882](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L882)

Gets or sets the active clipplane 2

#### Inherited from

`OpenPBRMaterialBase.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:887](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L887)

Gets or sets the active clipplane 3

#### Inherited from

`OpenPBRMaterialBase.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:892](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L892)

Gets or sets the active clipplane 4

#### Inherited from

`OpenPBRMaterialBase.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L897)

Gets or sets the active clipplane 5

#### Inherited from

`OpenPBRMaterialBase.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L902)

Gets or sets the active clipplane 6

#### Inherited from

`OpenPBRMaterialBase.clipPlane6`

***

### coatColor

> **coatColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:871](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L871)

Defines the color of the clear coat on the surface.
See OpenPBR's specs for coat_color

***

### coatColorTexture

> **coatColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:880](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L880)

Color texture of the clear coat.
See OpenPBR's specs for coat_color

***

### coatDarkening

> **coatDarkening**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:936](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L936)

Defines the amount that interreflections within the coat allow the underlying surface
to be darkened. A value of 1.0 means that the physically correct amount of darkening
is applied, while a value of 0.0 means that no darkening is applied.
See OpenPBR's specs for coat_darkening

***

### coatDarkeningTexture

> **coatDarkeningTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:947](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L947)

Defines the amount that interreflections within the coat allow the underlying surface
to be darkened. A value of 1.0 means that the physically correct amount of darkening
is applied, while a value of 0.0 means that no darkening is applied.
See OpenPBR's specs for coat_darkening

***

### coatIor

> **coatIor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:925](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L925)

Defines the IOR of the clear coat on the surface.
See OpenPBR's specs for coat_ior

***

### coatRoughness

> **coatRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:889](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L889)

Defines the roughness of the clear coat on the surface.
See OpenPBR's specs for coat_roughness

***

### coatRoughnessAnisotropy

> **coatRoughnessAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L907)

Defines the anisotropy of the clear coat on the surface.
See OpenPBR's specs for coat_roughness_anisotropy

***

### coatRoughnessAnisotropyTexture

> **coatRoughnessAnisotropyTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L916)

Anisotropic Roughness texture of the clear coat.
See OpenPBR's specs for coat_roughness_anisotropy

***

### coatRoughnessTexture

> **coatRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L898)

Roughness texture of the clear coat.
See OpenPBR's specs for coat_roughness

***

### coatWeight

> **coatWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:853](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L853)

Defines the amount of clear coat on the surface.
See OpenPBR's specs for coat_weight

***

### coatWeightTexture

> **coatWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:862](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L862)

Coat weight texture.
See OpenPBR's specs for coat_weight

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

`OpenPBRMaterialBase.customShaderNameResolve`

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L764)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

`OpenPBRMaterialBase.depthFunction`

***

### directIntensity

> **directIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1302)

Intensity of the direct lights e.g. the four lights available in your scene.
This impacts both the direct diffuse and specular highlights.

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L752)

Specifies if color writing should be disabled

#### Inherited from

`OpenPBRMaterialBase.disableColorWrite`

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L746)

Specifies if depth writing should be disabled

#### Inherited from

`OpenPBRMaterialBase.disableDepthWrite`

***

### disableLighting

> **disableLighting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1446)

If sets to true, disables all the lights affecting the material.

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L555)

Specifies if the material should be serialized

#### Inherited from

`OpenPBRMaterialBase.doNotSerialize`

***

### emissionColor

> **emissionColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1150)

Defines the color of the material's emission.
See OpenPBR's specs for emission_color

***

### emissionColorTexture

> **emissionColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1159)

Defines the texture of the material's emission color.
See OpenPBR's specs for emission_color

***

### emissionLuminance

> **emissionLuminance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1141)

Defines the luminance of the material's emission.
See OpenPBR's specs for emission_luminance

***

### enableSpecularAntiAliasing

> **enableSpecularAntiAliasing**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1524](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1524)

Enables specular anti aliasing in the PBR shader.
It will both interacts on the Geometry for analytical and IBL lighting.
It also prefilter the roughness map based on the normalmap values.

***

### environmentBRDFTexture

> **environmentBRDFTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1508)

Let user defines the brdf lookup texture used for IBL.
A default 8bit version is embedded but you could point at :
* Default texture: https://assets.babylonjs.com/environments/correlatedMSBRDF_RGBD.png
* Default 16bit pixel depth texture: https://assets.babylonjs.com/environments/correlatedMSBRDF.dds
* LEGACY Default None correlated https://assets.babylonjs.com/environments/uncorrelatedBRDF_RGBD.png
* LEGACY Default None correlated 16bit pixel depth https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds

***

### environmentIntensity

> **environmentIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1310)

Intensity of the environment e.g. how much the environment will light the object
either through harmonics for rough material or through the reflection for shiny ones.

***

### forceAlphaTest

> **forceAlphaTest**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1324)

Enforces alpha test in opaque or blend mode in order to improve the performances of some situations.

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L758)

Specifies if depth writing should be forced

#### Inherited from

`OpenPBRMaterialBase.forceDepthWrite`

***

### forceIrradianceInFragment

> **forceIrradianceInFragment**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1453)

Force the shader to compute irradiance in the fragment shader in order to take normal mapping into account.

***

### forceNormalForward

> **forceNormalForward**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1515)

Force normal to face away from face.

***

### fuzzColor

> **fuzzColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:980](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L980)

Defines the color of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_color

***

### fuzzColorTexture

> **fuzzColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:989](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L989)

Color texture of the fuzz layer.
See OpenPBR's specs for fuzz_color

***

### fuzzRoughness

> **fuzzRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:998](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L998)

Defines the roughness of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_roughness

***

### fuzzRoughnessTexture

> **fuzzRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1007](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1007)

Roughness texture of the fuzz layer.
See OpenPBR's specs for fuzz_roughness

***

### fuzzWeight

> **fuzzWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:962](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L962)

Defines the weight of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_weight

***

### fuzzWeightTexture

> **fuzzWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L971)

Weight texture of the fuzz layer.
See OpenPBR's specs for fuzz_weight

***

### geometryCoatNormalTexture

> **geometryCoatNormalTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1064](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1064)

Defines the normal of the material's coat layer.
See OpenPBR's specs for geometry_coat_normal

***

### geometryCoatTangent

> **geometryCoatTangent**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1073](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1073)

Defines the tangent of the material's coat layer. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_coat_tangent

***

### geometryCoatTangentTexture

> **geometryCoatTangentTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1096](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1096)

Defines the tangent of the material's coat layer. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_coat_tangent

***

### geometryNormalTexture

> **geometryNormalTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1025)

Defines the normal of the material's geometry.
See OpenPBR's specs for geometry_normal

***

### geometryOpacity

> **geometryOpacity**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1105)

Defines the opacity of the material's geometry.
See OpenPBR's specs for geometry_opacity

***

### geometryOpacityTexture

> **geometryOpacityTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1114)

Defines the opacity texture of the material's geometry.
See OpenPBR's specs for geometry_opacity

***

### geometryTangent

> **geometryTangent**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1034](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1034)

Defines the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

***

### geometryTangentTexture

> **geometryTangentTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1055](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1055)

Defines the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

***

### geometryThickness

> **geometryThickness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1123)

Defines the thickness of the material's geometry.
Not part of OpenPBR's specs but useful for rasterization approximations of volume.

***

### geometryThicknessTexture

> **geometryThicknessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1132)

Defines the thickness of the material's geometry.
Not part of OpenPBR's specs but useful for rasterization approximations of volume.

***

### geometryThinWalled

> **geometryThinWalled**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1016](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1016)

Defines whether the geometry is thin-walled (like a sheet of paper) or not.
See OpenPBR's specs for geometry_thin_walled

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L541)

Callback triggered to get the render target textures

#### Inherited from

`OpenPBRMaterialBase.getRenderTargetTextures`

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L304)

The ID of the material

#### Inherited from

`OpenPBRMaterialBase.id`

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L372)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

`OpenPBRMaterialBase.inspectableCustomProperties`

***

### invertNormalMapX

> **invertNormalMapX**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1467](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1467)

If sets to true, x component of normal map value will invert (x = 1.0 - x).

***

### invertNormalMapY

> **invertNormalMapY**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1474](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1474)

If sets to true, y component of normal map value will invert (y = 1.0 - y).

***

### maxSimultaneousLights

> **maxSimultaneousLights**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1460](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1460)

Number of Simultaneous lights allowed on the material.

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L325)

Gets or sets user defined metadata

#### Inherited from

`OpenPBRMaterialBase.metadata`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L319)

The name of the material

#### Inherited from

`OpenPBRMaterialBase.name`

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L531)

Callback triggered when the material is compiled

#### Inherited from

`OpenPBRMaterialBase.onCompiled`

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L570)

An event triggered when the material is disposed

#### Inherited from

`OpenPBRMaterialBase.onDisposeObservable`

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L536)

Callback triggered when an error occurs

#### Inherited from

`OpenPBRMaterialBase.onError`

***

### parallaxScaleBias

> **parallaxScaleBias**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1439)

Controls the scale bias of the parallax mode.

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

Plugin manager for this material

#### Inherited from

`OpenPBRMaterialBase.pluginManager`

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L800)

Stores the size of points

#### Inherited from

`OpenPBRMaterialBase.pointSize`

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1926](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1926)

Defines additional PrePass parameters for the material.

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L333)

For internal use only. Please do not use.

#### Inherited from

`OpenPBRMaterialBase.reservedDataStore`

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L770)

Specifies if there should be a separate pass for culling

#### Inherited from

`OpenPBRMaterialBase.separateCullingPass`

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L251)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

`OpenPBRMaterialBase.shadowDepthWrapper`

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L526)

Stores the value for side orientation

#### Inherited from

`OpenPBRMaterialBase.sideOrientation`

***

### specularColor

> **specularColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:610](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L610)

Color of the specular lobe.
See OpenPBR's specs for specular_color

***

### specularColorTexture

> **specularColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L619)

Specular Color Texture property.
See OpenPBR's specs for specular_color

***

### specularIor

> **specularIor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L664)

IOR of the specular lobe.
See OpenPBR's specs for specular_ior

***

### specularRoughness

> **specularRoughness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:628](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L628)

Roughness of the specular lobe.
See OpenPBR's specs for specular_roughness

***

### specularRoughnessAnisotropy

> **specularRoughnessAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:646](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L646)

Anisotropic roughness of the specular lobe.
See OpenPBR's specs for specular_roughness_anisotropy

***

### specularRoughnessAnisotropyTexture

> **specularRoughnessAnisotropyTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:655](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L655)

Anisotropic Roughness texture.
See OpenPBR's specs for specular_roughness

***

### specularRoughnessTexture

> **specularRoughnessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L637)

Roughness texture of the specular lobe.
See OpenPBR's specs for specular_roughness

***

### specularWeight

> **specularWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:592](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L592)

Weight of the specular lobe.
See OpenPBR's specs for specular_weight

***

### specularWeightTexture

> **specularWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:601](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L601)

Weight texture of the specular lobe.
See OpenPBR's specs for specular_weight

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L351)

The state of the material

#### Inherited from

`OpenPBRMaterialBase.state`

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L907)

Gives access to the stencil properties of the material

#### Inherited from

`OpenPBRMaterialBase.stencil`

***

### subsurfaceColor

> **subsurfaceColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L799)

Defines the color of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_color

***

### subsurfaceColorTexture

> **subsurfaceColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:808](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L808)

Subsurface color texture.
See OpenPBR's specs for subsurface_color

***

### subsurfaceRadius

> **subsurfaceRadius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L817)

Defines the radius of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_radius

***

### subsurfaceRadiusScale

> **subsurfaceRadiusScale**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:826](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L826)

Defines the scale factor applied to the subsurface radius.
See OpenPBR's specs for subsurface_radius_scale

***

### subsurfaceRadiusScaleTexture

> **subsurfaceRadiusScaleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:835](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L835)

Subsurface radius scale texture.
See OpenPBR's specs for subsurface_radius_scale

***

### subsurfaceScatterAnisotropy

> **subsurfaceScatterAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L844)

Defines the anisotropy of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_scatter_anisotropy

***

### subsurfaceWeight

> **subsurfaceWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:781](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L781)

Defines the amount of subsurface scattering on the surface.
See OpenPBR's specs for subsurface_weight

***

### subsurfaceWeightTexture

> **subsurfaceWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:790](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L790)

Subsurface weight texture.
See OpenPBR's specs for subsurface_weight

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

`OpenPBRMaterialBase.textureRepetitionHexTilingParams`

***

### thinFilmIor

> **thinFilmIor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1209)

Defines the index of refraction of the thin film layer.

***

### thinFilmThickness

> **thinFilmThickness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1185)

Defines the thickness of the thin film layer in μm. If a texture is provided for thinFilmWeightTexture,
this value will act as a multiplier to the texture values.
See OpenPBR's specs for thin_film_thickness

***

### thinFilmThicknessMin

> **thinFilmThicknessMin**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1193)

Defines the minimum thickness of the thin film layer in μm.

***

### thinFilmThicknessTexture

> **thinFilmThicknessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1201)

Defines the maximum thickness of the thin film layer in μm.

***

### thinFilmWeight

> **thinFilmWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1167)

Defines the weight of the thin film layer on top of the base layer for iridescent effects.

***

### thinFilmWeightTexture

> **thinFilmWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1175)

Thin film weight texture.

***

### transmissionColor

> **transmissionColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L691)

Transmission color of the surface.
See OpenPBR's specs for transmission_color

***

### transmissionColorTexture

> **transmissionColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:700](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L700)

Transmission color texture.
See OpenPBR's specs for transmission_color

***

### transmissionDepth

> **transmissionDepth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:709](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L709)

Transmission depth of the volume
See OpenPBR's specs for transmission_depth

***

### transmissionDepthTexture

> **transmissionDepthTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:718](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L718)

Transmission depth texture.
See OpenPBR's specs for transmission_depth

***

### transmissionDispersionAbbeNumber

> **transmissionDispersionAbbeNumber**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:772](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L772)

Transmission Dispersion Abbe number.
See OpenPBR's specs for transmission_dispersion_abbe_number

***

### transmissionDispersionScale

> **transmissionDispersionScale**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L754)

Transmission Dispersion Scale factor.
See OpenPBR's specs for transmission_dispersion_scale

***

### transmissionDispersionScaleTexture

> **transmissionDispersionScaleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:763](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L763)

Transmission Dispersion Scale texture.
See OpenPBR's specs for transmission_dispersion_scale

***

### transmissionScatter

> **transmissionScatter**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L727)

Transmission scatter of the surface.
See OpenPBR's specs for transmission_scatter

***

### transmissionScatterAnisotropy

> **transmissionScatterAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:745](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L745)

Transmission scatter anisotropy
See OpenPBR's specs for transmission_scatter_anisotropy

***

### transmissionScatterTexture

> **transmissionScatterTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:736](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L736)

Transmission scatter texture.
See OpenPBR's specs for transmission_scatter

***

### transmissionWeight

> **transmissionWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L673)

Transmission weight of the surface.
See OpenPBR's specs for transmission_weight

***

### transmissionWeightTexture

> **transmissionWeightTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:682](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L682)

Transmission weight texture.
See OpenPBR's specs for transmission_weight

***

### twoSidedLighting

> **twoSidedLighting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1481)

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L310)

Gets or sets the unique id of the material

#### Inherited from

`OpenPBRMaterialBase.uniqueId`

***

### unlit

> **unlit**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1547)

If set to true, no lighting calculations will be applied.

***

### useAlphaFresnel

> **useAlphaFresnel**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1489](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1489)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)

***

### useAmbientInGrayScale

> **useAmbientInGrayScale**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1345)

Specifies if the ambient texture contains the ambient occlusion information in its red channel only.

***

### useAmbientOcclusionFromMetallicTextureRed

> **useAmbientOcclusionFromMetallicTextureRed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1338](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1338)

Specifies if the metallic texture contains the ambient occlusion information in its red channel.

***

### useCoatRoughnessFromWeightTexture

> **useCoatRoughnessFromWeightTexture**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:956](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L956)

Specifies whether the coat roughness is taken from the
same texture as the coat_weight.

***

### useHorizonOcclusion

> **useHorizonOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1532)

This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
makes the reflect vector face the model (under horizon).

***

### useLinearAlphaFresnel

> **useLinearAlphaFresnel**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1497](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1497)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha stays linear to compute the fresnel)

***

### useObjectSpaceNormalMap

> **useObjectSpaceNormalMap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1418)

Allows using an object space normal map (instead of tangent space).

***

### useParallax

> **useParallax**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1425)

Allows using the normal map in parallax mode.

***

### useParallaxOcclusion

> **useParallaxOcclusion**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1432)

Allows using the normal map in parallax occlusion mode.

***

### useRadianceOcclusion

> **useRadianceOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1540)

This parameters will enable/disable radiance occlusion by preventing the radiance to lit
too much the area relying on ambient texture to define their ambient occlusion.

***

### useSpecularWeightFromTextureAlpha

> **useSpecularWeightFromTextureAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1317)

Specifies that the specular weight is stored in the alpha channel of the specular weight texture.

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:806](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L806)

Stores the z offset Factor value

#### Inherited from

`OpenPBRMaterialBase.zOffset`

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L812)

Stores the z offset Units value

#### Inherited from

`OpenPBRMaterialBase.zOffsetUnits`

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L173)

The all dirty flag value

#### Inherited from

`OpenPBRMaterialBase.AllDirtyFlag`

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L158)

The dirty attribute flag value

#### Inherited from

`OpenPBRMaterialBase.AttributesDirtyFlag`

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L128)

Stores the clock-wise side orientation

#### Inherited from

`OpenPBRMaterialBase.ClockWiseSideOrientation`

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L133)

Stores the counter clock-wise side orientation

#### Inherited from

`OpenPBRMaterialBase.CounterClockWiseSideOrientation`

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1560)

Force all the PBR materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L233)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

`OpenPBRMaterialBase.ForceVertexOutputInvariant`

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L153)

The dirty fresnel flag value

#### Inherited from

`OpenPBRMaterialBase.FresnelDirtyFlag`

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L138)

The dirty image processing flag value

#### Inherited from

`OpenPBRMaterialBase.ImageProcessingDirtyFlag`

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L148)

The dirty light flag value

#### Inherited from

`OpenPBRMaterialBase.LightDirtyFlag`

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L217)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_GLTF`

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L211)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_PHYSICAL`

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L223)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_STANDARD`

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L107)

Returns the line list draw mode

#### Inherited from

`OpenPBRMaterialBase.LineListDrawMode`

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L111)

Returns the line loop draw mode

#### Inherited from

`OpenPBRMaterialBase.LineLoopDrawMode`

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L115)

Returns the line strip draw mode

#### Inherited from

`OpenPBRMaterialBase.LineStripDrawMode`

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L188)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHABLEND`

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L183)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHATEST`

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L194)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHATESTANDBLEND`

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L206)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_NORMALBLENDMETHOD_RNM`

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L200)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_NORMALBLENDMETHOD_WHITEOUT`

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L178)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_OPAQUE`

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L163)

The dirty misc flag value

#### Inherited from

`OpenPBRMaterialBase.MiscDirtyFlag`

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L228)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

`OpenPBRMaterialBase.OnEventObservable`

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L99)

Returns the point fill mode

#### Inherited from

`OpenPBRMaterialBase.PointFillMode`

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L103)

Returns the point list draw mode

#### Inherited from

`OpenPBRMaterialBase.PointListDrawMode`

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L168)

The dirty prepass flag value

#### Inherited from

`OpenPBRMaterialBase.PrePassDirtyFlag`

***

### SSS\_QUALITY\_HIGH

> `readonly` `static` **SSS\_QUALITY\_HIGH**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1227)

SSS convolution uses 32 samples.

***

### SSS\_QUALITY\_LOW

> `readonly` `static` **SSS\_QUALITY\_LOW**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1223)

SSS convolution uses 8 samples.

***

### SSS\_QUALITY\_MEDIUM

> `readonly` `static` **SSS\_QUALITY\_MEDIUM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1225)

SSS convolution uses 16 samples (default).

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L143)

The dirty texture flag value

#### Inherited from

`OpenPBRMaterialBase.TextureDirtyFlag`

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L123)

Returns the triangle fan draw mode

#### Inherited from

`OpenPBRMaterialBase.TriangleFanDrawMode`

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L91)

Returns the triangle fill mode

#### Inherited from

`OpenPBRMaterialBase.TriangleFillMode`

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L119)

Returns the triangle strip draw mode

#### Inherited from

`OpenPBRMaterialBase.TriangleStripDrawMode`

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L95)

Returns the wireframe mode

#### Inherited from

`OpenPBRMaterialBase.WireFrameFillMode`

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

`OpenPBRMaterialBase.alpha`

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

`OpenPBRMaterialBase.alphaMode`

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L692)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

`OpenPBRMaterialBase.alphaModes`

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

`OpenPBRMaterialBase.backFaceCulling`

***

### backgroundRefractionTexture

#### Set Signature

> **set** **backgroundRefractionTexture**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1790](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1790)

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

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

`OpenPBRMaterialBase.blockDirtyMechanism`

***

### cameraColorCurves

#### Get Signature

> **get** **cameraColorCurves**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L179)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

#### Set Signature

> **set** **cameraColorCurves**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L188)

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

`OpenPBRMaterialBase.cameraColorCurvesEnabled`

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

`OpenPBRMaterialBase.cameraColorGradingEnabled`

***

### cameraColorGradingTexture

#### Get Signature

> **get** **cameraColorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L163)

Gets the Color Grading 2D Lookup Texture.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **cameraColorGradingTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L169)

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

`OpenPBRMaterialBase.cameraContrast`

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

`OpenPBRMaterialBase.cameraExposure`

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

`OpenPBRMaterialBase.cameraToneMappingEnabled`

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1857](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1857)

Can this material render to several textures at once

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.canRenderToMRT`

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

`OpenPBRMaterialBase.cullBackFaces`

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

`OpenPBRMaterialBase.fillMode`

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

`OpenPBRMaterialBase.fogEnabled`

***

### fuzzSampleNumber

#### Get Signature

> **get** **fuzzSampleNumber**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1846](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1846)

The number of samples used to compute the fuzz IBL lighting.

##### Returns

`number`

#### Set Signature

> **set** **fuzzSampleNumber**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1849](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1849)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### geometryCoatTangentAngle

#### Get Signature

> **get** **geometryCoatTangentAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1081](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1081)

Defines the angle of the tangent of the material's coat layer.

##### Returns

`number`

#### Set Signature

> **set** **geometryCoatTangentAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1088](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1088)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1043)

Defines the angle of the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

##### Returns

`number`

#### Set Signature

> **set** **geometryTangentAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1047)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2113)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.hasRenderTargetTextures`

***

### hasScattering

#### Get Signature

> **get** **hasScattering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1355)

Specifies if the material has scattering properties such as subsurface scattering or transmission scattering.

##### Returns

`boolean`

***

### hasTransparency

#### Get Signature

> **get** **hasTransparency**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1350)

Specifies if we can see through the surface of the material due to subsurface scattering or transmission.

##### Returns

`boolean`

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L35)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L44)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1158)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

`OpenPBRMaterialBase.isFrozen`

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2128)

Can this material render to prepass

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.isPrePassCapable`

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

`OpenPBRMaterialBase.isVertexOutputInvariant`

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

`OpenPBRMaterialBase.needDepthPrePass`

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

`OpenPBRMaterialBase.onBind`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L593)

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

`OpenPBRMaterialBase.onBindObservable`

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

`OpenPBRMaterialBase.onDispose`

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L632)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

`OpenPBRMaterialBase.onEffectCreatedObservable`

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L619)

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

`OpenPBRMaterialBase.onUnBindObservable`

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

`OpenPBRMaterialBase.pointsCloud`

***

### realTimeFiltering

#### Get Signature

> **get** **realTimeFiltering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1821](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1821)

Enables realtime filtering on the texture.

##### Returns

`boolean`

#### Set Signature

> **set** **realTimeFiltering**(`b`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1824](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1824)

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### realTimeFilteringQuality

#### Get Signature

> **get** **realTimeFilteringQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1833](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1833)

Quality switch for realtime filtering

##### Returns

`number`

#### Set Signature

> **set** **realTimeFilteringQuality**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1836](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1836)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### refractionHighQualityBlur

#### Get Signature

> **get** **refractionHighQualityBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1801](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1801)

When true, uses a 4-tap rotated-grid kernel for refractive background blur,
eliminating bilinear block artifacts at the cost of 3 extra texture samples.
When false, a single dithered sample is used. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **refractionHighQualityBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1804](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1804)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L296)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`OpenPBRMaterialBase.shaderLanguage`

***

### sssDepthTexture

#### Get Signature

> **get** **sssDepthTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1272)

Defines the depth texture used for subsurface scattering. This is the depth defined
in screen space. If it's not provided, the depth will be looked for in the scene.geometryBufferRenderer.
Accepts a [ThinTexture](ThinTexture.md) so that an [InternalTexture](InternalTexture.md) obtained from a frame graph
handle can be wrapped with `new ThinTexture(internalTexture)` and assigned directly.
Setting this property marks all sub-meshes as textures-dirty so the shader recompiles.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

#### Set Signature

> **set** **sssDepthTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1275)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

##### Returns

`void`

***

### sssIrradianceTexture

#### Get Signature

> **get** **sssIrradianceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1253)

Defines the irradiance texture used for subsurface scattering.
If it's not provided, the irradiance will be looked for in the scene.geometryBufferRenderer.
Accepts a [ThinTexture](ThinTexture.md) so that an [InternalTexture](InternalTexture.md) obtained from a frame graph
handle can be wrapped with `new ThinTexture(internalTexture)` and assigned directly.
Setting this property marks all sub-meshes as textures-dirty so the shader recompiles.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

#### Set Signature

> **set** **sssIrradianceTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1256)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

##### Returns

`void`

***

### sssQuality

#### Get Signature

> **get** **sssQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1235)

Controls the sample count of the screen-space SSS convolution kernel.
Use the SSS_QUALITY_LOW / MEDIUM / HIGH constants (8 / 16 / 32 samples).
Higher quality reduces noise at the cost of GPU time. Default: MEDIUM.

##### Returns

`number`

#### Set Signature

> **set** **sssQuality**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1238)

##### Parameters

###### value

`number`

##### Returns

`void`

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

`OpenPBRMaterialBase.textureRepetitionMode`

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2142)

Gets the current transparency mode.

##### Returns

`number`

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2146)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1392)

In order to support the falloff compatibility with gltf, a special mode has been added
to reproduce the gltf light falloff.

##### Returns

`boolean`

#### Set Signature

> **set** **useGLTFLightFalloff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1400)

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

`OpenPBRMaterialBase.useLogarithmicDepth`

***

### usePhysicalLightFalloff

#### Get Signature

> **get** **usePhysicalLightFalloff**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1365)

BJS is using an hardcoded light falloff based on a manually sets up range.
In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
This parameter can help you switch back to the BJS mode in order to create scenes using both materials.

##### Returns

`boolean`

#### Set Signature

> **set** **usePhysicalLightFalloff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1374)

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

`OpenPBRMaterialBase.useVertexPulling`

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

`OpenPBRMaterialBase.wireframe`

## Methods

### \_attachImageProcessingConfiguration()

> **\_attachImageProcessingConfiguration**(`configuration`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessing.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/imageProcessing.ts#L62)

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

`OpenPBRMaterialBase.atomicMaterialsUpdate`

***

### bind()

> **bind**(`world`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L72)

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

`OpenPBRMaterialBase.bindEyePosition`

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2527](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2527)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L68)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L59)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2510)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1480)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1492)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2475)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.buildUniformLayout`

***

### clone()

> **clone**(`name`, `cloneTexturesOnlyOnce?`, `rootUrl?`): `OpenPBRMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2196)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2833](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2833)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2246)

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

`OpenPBRMaterialBase.forceCompilationAsync`

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

`OpenPBRMaterialBase.freeze`

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2775](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2775)

Returns an array of the actively used textures.

#### Returns

[`BaseTexture`](BaseTexture.md)[]

- Array of BaseTextures

#### Overrides

`OpenPBRMaterialBase.getActiveTextures`

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1367)

Gets the texture used for the alpha test

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture to use for alpha testing

#### Inherited from

`OpenPBRMaterialBase.getAlphaTestTexture`

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2753](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2753)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1650)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

`OpenPBRMaterialBase.getBindedMeshes`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2135)

#### Returns

`string`

the name of the material class.

#### Overrides

`OpenPBRMaterialBase.getClassName`

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

`OpenPBRMaterialBase.getEffect`

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1237)

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

`OpenPBRMaterialBase.getScene`

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2798](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2798)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L27)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2295)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1799)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1375)

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

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2174)

#### Returns

`boolean`

true when the material needs alpha blending — i.e. when geometry_opacity < 1
or a geometry opacity texture is present.

#### Overrides

`OpenPBRMaterialBase.needAlphaBlending`

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2185)

Specifies if the mesh will require alpha blending.
Overridden to check geometry_opacity before the _hasTransparencyMode short-circuit in the
base class, which would otherwise always return false when _transparencyMode is MATERIAL_OPAQUE.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to check

#### Returns

`boolean`

true if alpha blending is needed for the mesh

#### Overrides

`OpenPBRMaterialBase.needAlphaBlendingForMesh`

***

### ~~needAlphaTesting()~~

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1342)

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

`OpenPBRMaterialBase.needAlphaTestingForMesh`

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1844)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.resetDrawCache`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2213)

Serializes this PBR Material.

#### Returns

`any`

- An object with the serialized material.

#### Overrides

`OpenPBRMaterialBase.serialize`

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

`OpenPBRMaterialBase.setAlphaMode`

***

### setPrePassRenderer()

> **setPrePassRenderer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2824](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2824)

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

`OpenPBRMaterialBase.toString`

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1562)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.unbind`

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1188)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.unfreeze`

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): `OpenPBRMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2228)

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

`OpenPBRMaterialBase.ParseAlphaMode`
