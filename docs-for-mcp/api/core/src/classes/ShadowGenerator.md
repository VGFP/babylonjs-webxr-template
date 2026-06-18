[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ShadowGenerator

# Class: ShadowGenerator

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L160)

Default implementation IShadowGenerator.
This is the main object responsible of generating shadows in the framework.
Documentation: https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows

## See

 - [WebGL](https://playground.babylonjs.com/#IFYDRS#0)
 - [WebGPU](https://playground.babylonjs.com/#IFYDRS#835)

## Extended by

- [`CascadedShadowGenerator`](CascadedShadowGenerator.md)

## Implements

- [`IShadowGenerator`](../interfaces/IShadowGenerator.md)

## Constructors

### Constructor

> **new ShadowGenerator**(`mapSize`, `light`, `usefullFloatFirst?`, `camera?`, `useRedTextureType?`, `forceGLSL?`): `ShadowGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:976](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L976)

Creates a ShadowGenerator object.
A ShadowGenerator is the required tool to use the shadows.
Each light casting shadows needs to use its own ShadowGenerator.
Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows

#### Parameters

##### mapSize

`number`

The size of the texture what stores the shadows. Example : 1024.

##### light

[`IShadowLight`](../interfaces/IShadowLight.md)

The light object generating the shadows.

##### usefullFloatFirst?

`boolean`

By default the generator will try to use half float textures but if you need precision (for self shadowing for instance), you can use this option to enforce full float texture.

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Camera associated with this shadow generator (default: null). If null, takes the scene active camera at the time we need to access it

##### useRedTextureType?

`boolean`

Forces the generator to use a Red instead of a RGBA type for the shadow map texture format (default: false)

##### forceGLSL?

`boolean` = `false`

defines a boolean indicating if the shader must be compiled in GLSL even if we are using WebGPU

#### Returns

`ShadowGenerator`

## Properties

### customAllowRendering

> **customAllowRendering**: (`subMesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L256)

Gets or sets a custom function to allow/disallow rendering a sub mesh in the shadow map

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

#### Returns

`boolean`

***

### customShaderOptions

> **customShaderOptions**: [`ICustomShaderOptions`](../interfaces/ICustomShaderOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L253)

Gets or sets the custom shader name to use

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L284)

Specifies if the `ShadowGenerator` should be serialized, `true` to skip serialization.
Note a `ShadowGenerator` will not be serialized if its light has `doNotSerialize=true`

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`doNotSerialize`](../interfaces/IShadowGenerator.md#donotserialize)

***

### enableSoftTransparentShadow

> **enableSoftTransparentShadow**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:711](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L711)

Enables or disables shadows with varying strength based on the transparency
When it is enabled, the strength of the shadow is taken equal to mesh.visibility
If you enabled an alpha texture on your material, the alpha value red from the texture is also combined to compute the strength:
         mesh.visibility * alphaTexture.a
The texture used is the diffuse by default, but it can be set to the opacity by setting useOpacityTextureForTransparentShadow
Note that by definition transparencyShadow must be set to true for enableSoftTransparentShadow to work!

***

### forceBackFacesOnly

> **forceBackFacesOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:834](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L834)

If true the shadow map is generated by rendering the back face of the mesh instead of the front face.
This can help with self-shadowing as the geometry making up the back of objects is slightly offset.
It might on the other hand introduce peter panning.

***

### frustumEdgeFalloff

> **frustumEdgeFalloff**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:808](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L808)

Controls the extent to which the shadows fade out at the edge of the frustum

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L250)

Gets or set the id of the shadow generator. It will be the one from the light if not defined

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`id`](../interfaces/IShadowGenerator.md#id)

***

### onAfterShadowMapRenderMeshObservable

> **onAfterShadowMapRenderMeshObservable**: [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L278)

Observable triggered after a mesh is rendered in the shadow map.
Can be used to update internal effect state (that you can get from the onAfterShadowMapRenderObservable)

***

### onAfterShadowMapRenderObservable

> **onAfterShadowMapRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L266)

Observable triggered after the shadow is rendered. Can be used to restore internal effect state

***

### onBeforeShadowMapRenderMeshObservable

> **onBeforeShadowMapRenderMeshObservable**: [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L272)

Observable triggered before a mesh is rendered in the shadow map.
Can be used to update internal effect state (that you can get from the onBeforeShadowMapRenderObservable)

***

### onBeforeShadowMapRenderObservable

> **onBeforeShadowMapRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L261)

Observable triggered before the shadow is rendered. Can be used to update internal effect state

***

### useOpacityTextureForTransparentShadow

> **useOpacityTextureForTransparentShadow**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:716](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L716)

If this is true, use the opacity texture's alpha channel for transparent shadows instead of the diffuse one

***

### CLASSNAME

> `static` **CLASSNAME**: `string` = `"ShadowGenerator"`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L164)

Name of the shadow generator class

***

### DEFAULT\_ALPHA\_CUTOFF

> `static` **DEFAULT\_ALPHA\_CUTOFF**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L247)

Defines the default alpha cutoff value used for transparent alpha tested materials.

***

### FILTER\_BLURCLOSEEXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_BLURCLOSEEXPONENTIALSHADOWMAP**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L202)

Shadow generator mode ESM: Blurred Exponential Shadow Mapping using the inverse of the exponential preventing
edge artifacts on steep falloff.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

***

### FILTER\_BLUREXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_BLUREXPONENTIALSHADOWMAP**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L190)

Shadow generator mode ESM: Blurred Exponential Shadow Mapping.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

***

### FILTER\_CLOSEEXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_CLOSEEXPONENTIALSHADOWMAP**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L196)

Shadow generator mode ESM: Exponential Shadow Mapping using the inverse of the exponential preventing
edge artifacts on steep falloff.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

***

### FILTER\_EXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_EXPONENTIALSHADOWMAP**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L180)

Shadow generator mode ESM: Exponential Shadow Mapping.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

***

### FILTER\_NONE

> `readonly` `static` **FILTER\_NONE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L175)

Shadow generator mode None: no filtering applied.

***

### FILTER\_PCF

> `readonly` `static` **FILTER\_PCF**: `6` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L208)

Shadow generator mode PCF: Percentage Closer Filtering
benefits from Webgl 2 shadow samplers. Fallback to Poisson Sampling in Webgl 1
(https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch11.html)

***

### FILTER\_PCSS

> `readonly` `static` **FILTER\_PCSS**: `7` = `7`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L214)

Shadow generator mode PCSS: Percentage Closering Soft Shadow.
benefits from Webgl 2 shadow samplers. Fallback to Poisson Sampling in Webgl 1
Contact Hardening

***

### FILTER\_POISSONSAMPLING

> `readonly` `static` **FILTER\_POISSONSAMPLING**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L185)

Shadow generator mode Poisson Sampling: Percentage Closer Filtering.
(Multiple Tap around evenly distributed around the pixel are used to evaluate the shadow strength)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L170)

Force all the shadow generators to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### QUALITY\_HIGH

> `readonly` `static` **QUALITY\_HIGH**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L224)

Reserved for PCF and PCSS
Highest Quality.

Execute PCF on a 5*5 kernel improving a lot the shadow aliasing artifacts.

Execute PCSS with 32 taps blocker search and 64 taps PCF.

***

### QUALITY\_LOW

> `readonly` `static` **QUALITY\_LOW**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L242)

Reserved for PCF and PCSS
The lowest quality but the fastest.

Execute PCF on a 1*1 kernel.

Execute PCSS with 16 taps blocker search and 16 taps PCF.

***

### QUALITY\_MEDIUM

> `readonly` `static` **QUALITY\_MEDIUM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L233)

Reserved for PCF and PCSS
Good tradeoff for quality/perf cross devices

Execute PCF on a 3*3 kernel.

Execute PCSS with 16 taps blocker search and 32 taps PCF.

## Accessors

### bias

#### Get Signature

> **get** **bias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L290)

Gets the bias: offset applied on the depth preventing acnea (in light direction).

##### Returns

`number`

#### Set Signature

> **set** **bias**(`bias`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L296)

Sets the bias: offset applied on the depth preventing acnea (in light direction).

##### Parameters

###### bias

`number`

##### Returns

`void`

***

### blurBoxOffset

#### Get Signature

> **get** **blurBoxOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L319)

Gets the blur box offset: offset applied during the blur pass.
Only useful if useKernelBlur = false

##### Returns

`number`

#### Set Signature

> **set** **blurBoxOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L326)

Sets the blur box offset: offset applied during the blur pass.
Only useful if useKernelBlur = false

##### Parameters

###### value

`number`

##### Returns

`void`

***

### blurKernel

#### Get Signature

> **get** **blurKernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L361)

Gets the blur kernel: kernel size of the blur pass.
Only useful if useKernelBlur = true

##### Returns

`number`

#### Set Signature

> **set** **blurKernel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L368)

Sets the blur kernel: kernel size of the blur pass.
Only useful if useKernelBlur = true

##### Parameters

###### value

`number`

##### Returns

`void`

***

### blurScale

#### Get Signature

> **get** **blurScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L340)

Gets the blur scale: scale of the blurred texture compared to the main shadow map.
2 means half of the size.

##### Returns

`number`

#### Set Signature

> **set** **blurScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L347)

Sets the blur scale: scale of the blurred texture compared to the main shadow map.
2 means half of the size.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:934](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L934)

Gets or sets the camera associated with this shadow generator.
When null, the scene's active camera is used at render time.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:938](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L938)

##### Parameters

###### camera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

##### Returns

`void`

***

### contactHardeningLightSizeUVRatio

#### Get Signature

> **get** **contactHardeningLightSizeUVRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L631)

Gets the Light Size (in shadow map uv unit) used in PCSS to determine the blocker search area and the penumbra size.
Using a ratio helps keeping shape stability independently of the map size.

It does not account for the light projection as it was having too much
instability during the light setup or during light position changes.

Only valid if useContactHardeningShadow is true.

##### Returns

`number`

#### Set Signature

> **set** **contactHardeningLightSizeUVRatio**(`contactHardeningLightSizeUVRatio`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:643](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L643)

Sets the Light Size (in shadow map uv unit) used in PCSS to determine the blocker search area and the penumbra size.
Using a ratio helps keeping shape stability independently of the map size.

It does not account for the light projection as it was having too much
instability during the light setup or during light position changes.

Only valid if useContactHardeningShadow is true.

##### Parameters

###### contactHardeningLightSizeUVRatio

`number`

##### Returns

`void`

***

### darkness

#### Get Signature

> **get** **darkness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L650)

Gets or sets the actual darkness of a shadow

##### Returns

`number`

#### Set Signature

> **set** **darkness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:654](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L654)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### depthScale

#### Get Signature

> **get** **depthScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L402)

Gets the depth scale used in ESM mode.

##### Returns

`number`

#### Set Signature

> **set** **depthScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L409)

Sets the depth scale used in ESM mode.
This can override the scale stored on the light.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### filter

#### Get Signature

> **get** **filter**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:422](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L422)

Gets the current mode of the shadow generator (normal, PCF, ESM...).
The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE

##### Returns

`number`

#### Set Signature

> **set** **filter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L429)

Sets the current mode of the shadow generator (normal, PCF, ESM...).
The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE

##### Parameters

###### value

`number`

##### Returns

`void`

***

### filteringQuality

#### Get Signature

> **get** **filteringQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:584](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L584)

Gets the PCF or PCSS Quality.
Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true.

##### Returns

`number`

#### Set Signature

> **set** **filteringQuality**(`filteringQuality`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L591)

Sets the PCF or PCSS Quality.
Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true.

##### Parameters

###### filteringQuality

`number`

##### Returns

`void`

***

### light

#### Get Signature

> **get** **light**(): [`IShadowLight`](../interfaces/IShadowLight.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:900](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L900)

Gets or sets the light that is casting the shadows

##### Returns

[`IShadowLight`](../interfaces/IShadowLight.md)

#### Set Signature

> **set** **light**(`light`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L904)

##### Parameters

###### light

[`IShadowLight`](../interfaces/IShadowLight.md)

##### Returns

`void`

***

### mapSize

#### Get Signature

> **get** **mapSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:887](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L887)

Gets or sets the size of the texture what stores the shadows

##### Returns

`number`

#### Set Signature

> **set** **mapSize**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:891](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L891)

##### Parameters

###### size

`number`

##### Returns

`void`

***

### normalBias

#### Get Signature

> **get** **normalBias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L304)

Gets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle).

##### Returns

`number`

#### Set Signature

> **set** **normalBias**(`normalBias`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L310)

Sets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle).

##### Parameters

###### normalBias

`number`

##### Returns

`void`

***

### projectionMatrix

#### Get Signature

> **get** **projectionMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2012](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2012)

Gets the projection matrix used to render the shadow map.

##### Returns

[`Matrix`](Matrix.md)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:825](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L825)

Gets the shader language used in this generator.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### transparencyShadow

#### Get Signature

> **get** **transparencyShadow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L685)

Gets or sets the ability to have transparent shadow

##### Returns

`boolean`

#### Set Signature

> **set** **transparencyShadow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L689)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useBlurCloseExponentialShadowMap

#### Get Signature

> **get** **useBlurCloseExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:545](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L545)

Gets if the current filter is set to filtered "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Returns

`boolean`

#### Set Signature

> **set** **useBlurCloseExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:552](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L552)

Sets the current filter to filtered "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useBlurExponentialShadowMap

#### Get Signature

> **get** **useBlurExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:506](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L506)

Gets if the current filter is set to filtered ESM.

##### Returns

`boolean`

#### Set Signature

> **set** **useBlurExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:512](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L512)

Gets if the current filter is set to filtered  ESM.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useCloseExponentialShadowMap

#### Get Signature

> **get** **useCloseExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L525)

Gets if the current filter is set to "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Returns

`boolean`

#### Set Signature

> **set** **useCloseExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L532)

Sets the current filter to "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useContactHardeningShadow

#### Get Signature

> **get** **useContactHardeningShadow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:606](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L606)

Gets if the current filter is set to "PCSS" (contact hardening).

##### Returns

`boolean`

#### Set Signature

> **set** **useContactHardeningShadow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:612](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L612)

Sets the current filter to "PCSS" (contact hardening).

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useExponentialShadowMap

#### Get Signature

> **get** **useExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:488](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L488)

Gets if the current filter is set to ESM.

##### Returns

`boolean`

#### Set Signature

> **set** **useExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:494](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L494)

Sets the current filter is to ESM.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useFloat32TextureType

#### Get Signature

> **get** **useFloat32TextureType**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L917)

Gets or sets a value indicating whether the shadow map should use full float texture type (instead of half float, which is the default).
Use this option when you need more precision (for self shadowing, for instance).

##### Returns

`boolean`

#### Set Signature

> **set** **useFloat32TextureType**(`useFloat32TextureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:921](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L921)

##### Parameters

###### useFloat32TextureType

`boolean`

##### Returns

`void`

***

### useKernelBlur

#### Get Signature

> **get** **useKernelBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L382)

Gets whether the blur pass is a kernel blur (if true) or box blur.
Only useful in filtered mode (useBlurExponentialShadowMap...)

##### Returns

`boolean`

#### Set Signature

> **set** **useKernelBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L389)

Sets whether the blur pass is a kernel blur (if true) or box blur.
Only useful in filtered mode (useBlurExponentialShadowMap...)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### usePercentageCloserFiltering

#### Get Signature

> **get** **usePercentageCloserFiltering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L564)

Gets if the current filter is set to "PCF" (percentage closer filtering).

##### Returns

`boolean`

#### Set Signature

> **set** **usePercentageCloserFiltering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L570)

Sets the current filter to "PCF" (percentage closer filtering).

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### usePoissonSampling

#### Get Signature

> **get** **usePoissonSampling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L469)

Gets if the current filter is set to Poisson Sampling.

##### Returns

`boolean`

#### Set Signature

> **set** **usePoissonSampling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L475)

Sets the current filter to Poisson Sampling.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useRedTextureFormat

#### Get Signature

> **get** **useRedTextureFormat**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:951](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L951)

Gets or sets a value indicating whether the shadow map should use a red-channel-only texture format.
Using a single-channel format reduces memory usage when color data is not needed.

##### Returns

`boolean`

#### Set Signature

> **set** **useRedTextureFormat**(`useRedTextureFormat`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L955)

##### Parameters

###### useRedTextureFormat

`boolean`

##### Returns

`void`

***

### viewMatrix

#### Get Signature

> **get** **viewMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2005)

Gets the view matrix used to render the shadow map.

##### Returns

[`Matrix`](Matrix.md)

## Methods

### addShadowCaster()

> **addShadowCaster**(`mesh`, `includeDescendants?`): `ShadowGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:755](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L755)

Helper function to add a mesh and its descendants to the list of shadow casters.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Mesh to add

##### includeDescendants?

`boolean` = `true`

boolean indicating if the descendants should be added. Default to true

#### Returns

`ShadowGenerator`

the Shadow Generator itself

***

### bindShadowLight()

> **bindShadowLight**(`lightIndex`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1950](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1950)

Binds the shadow related information inside of an effect (information like near, far, darkness...
defined in the generator but impacting the effect).

#### Parameters

##### lightIndex

`string`

Index of the light in the enabled light list of the material owning the effect

##### effect

[`Effect`](Effect.md)

The effect we are binding the information for

#### Returns

`void`

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`bindShadowLight`](../interfaces/IShadowGenerator.md#bindshadowlight)

***

### dispose()

> **dispose**(`clearObservables?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2150)

Disposes the ShadowGenerator.

#### Parameters

##### clearObservables?

`boolean` = `true`

Defines whether to clear the observables or not (true by default).
Returns nothing.

#### Returns

`void`

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`dispose`](../interfaces/IShadowGenerator.md#dispose)

***

### forceCompilation()

> **forceCompilation**(`onCompiled?`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1532)

Forces all the attached effect to compile to enable rendering only once ready vs. lazily compiling effects.

#### Parameters

##### onCompiled?

(`generator`) => `void`

Callback triggered at the and of the effects compilation

##### options?

`Partial`\<\{ `useInstances`: `boolean`; \}\>

Sets of optional options forcing the compilation with different modes

#### Returns

`void`

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`forceCompilation`](../interfaces/IShadowGenerator.md#forcecompilation)

***

### forceCompilationAsync()

> **forceCompilationAsync**(`options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1598)

Forces all the attached effect to compile to enable rendering only once ready vs. lazily compiling effects.

#### Parameters

##### options?

`Partial`\<\{ `useInstances`: `boolean`; \}\>

Sets of optional options forcing the compilation with different modes

#### Returns

`Promise`\<`void`\>

A promise that resolves when the compilation completes

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`forceCompilationAsync`](../interfaces/IShadowGenerator.md#forcecompilationasync)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:745](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L745)

Gets the class name of that object

#### Returns

`string`

"ShadowGenerator"

***

### getDarkness()

> **getDarkness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L663)

Returns the darkness value (float). This can only decrease the actual darkness of a shadow.
0 means strongest and 1 would means no shadow.

#### Returns

`number`

the darkness.

***

### getLight()

> **getLight**(): [`IShadowLight`](../interfaces/IShadowLight.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:815](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L815)

Returns the associated light object.

#### Returns

[`IShadowLight`](../interfaces/IShadowLight.md)

the light generating the shadow

***

### getShadowMap()

> **getShadowMap**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:725](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L725)

Gets the main RTT containing the shadow map (usually storing depth from the light point of view).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

The render target texture if present otherwise, null

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`getShadowMap`](../interfaces/IShadowGenerator.md#getshadowmap)

***

### getShadowMapForRendering()

> **getShadowMapForRendering**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:733](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L733)

Gets the RTT used during rendering (can be a blurred version of the shadow map or the shadow map itself).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

The render target texture if the shadow map is present otherwise, null

***

### getTransformMatrix()

> **getTransformMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2021](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2021)

Gets the transformation matrix used to project the meshes into the map from the light point of view.
(eq to shadow projection matrix * light transform matrix)

#### Returns

[`Matrix`](Matrix.md)

The transform matrix used to create the shadow map

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`getTransformMatrix`](../interfaces/IShadowGenerator.md#gettransformmatrix)

***

### isReady()

> **isReady**(`subMesh`, `useInstances`, `isTransparent`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1642)

Determine whether the shadow generator is ready or not (mainly all effects and related post processes needs to be ready).

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

The submesh we want to render in the shadow map

##### useInstances

`boolean`

Defines whether will draw in the map using instances

##### isTransparent

`boolean`

Indicates that isReady is called for a transparent subMesh

#### Returns

`boolean`

true if ready otherwise, false

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`isReady`](../interfaces/IShadowGenerator.md#isready)

***

### prepareDefines()

> **prepareDefines**(`defines`, `lightIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1905](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1905)

Prepare all the defines in a material relying on a shadow map at the specified light index.

#### Parameters

##### defines

`any`

Defines of the material we want to update

##### lightIndex

`number`

Index of the light in the enabled light list of the material

#### Returns

`void`

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`prepareDefines`](../interfaces/IShadowGenerator.md#preparedefines)

***

### recreateShadowMap()

> **recreateShadowMap**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2072](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2072)

Recreates the shadow map dependencies like RTT and post processes. This can be used during the switch between
Cube and 2D textures for instance.

#### Returns

`void`

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`recreateShadowMap`](../interfaces/IShadowGenerator.md#recreateshadowmap)

***

### removeShadowCaster()

> **removeShadowCaster**(`mesh`, `includeDescendants?`): `ShadowGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L785)

Helper function to remove a mesh and its descendants from the list of shadow casters

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Mesh to remove

##### includeDescendants?

`boolean` = `true`

boolean indicating if the descendants should be removed. Default to true

#### Returns

`ShadowGenerator`

the Shadow Generator itself

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2183)

Serializes the shadow generator setup to a json object.

#### Returns

`any`

The serialized JSON object

#### Implementation of

[`IShadowGenerator`](../interfaces/IShadowGenerator.md).[`serialize`](../interfaces/IShadowGenerator.md#serialize)

***

### setDarkness()

> **setDarkness**(`darkness`): `ShadowGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:671](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L671)

Sets the darkness value (float). This can only decrease the actual darkness of a shadow.

#### Parameters

##### darkness

`number`

The darkness value 0 means strongest and 1 would means no shadow.

#### Returns

`ShadowGenerator`

the shadow generator allowing fluent coding.

***

### setTransparencyShadow()

> **setTransparencyShadow**(`transparent`): `ShadowGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:698](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L698)

Sets the ability to have transparent shadow (boolean).

#### Parameters

##### transparent

`boolean`

True if transparent else False

#### Returns

`ShadowGenerator`

the shadow generator allowing fluent coding

***

### Parse()

> `static` **Parse**(`parsedShadowGenerator`, `scene`, `constr?`): `ShadowGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2236)

Parses a serialized ShadowGenerator and returns a new ShadowGenerator.

#### Parameters

##### parsedShadowGenerator

`any`

The JSON object to parse

##### scene

[`Scene`](Scene.md)

The scene to create the shadow map for

##### constr?

(`mapSize`, `light`, `camera`) => `ShadowGenerator`

A function that builds a shadow generator or undefined to create an instance of the default shadow generator

#### Returns

`ShadowGenerator`

The parsed shadow generator
