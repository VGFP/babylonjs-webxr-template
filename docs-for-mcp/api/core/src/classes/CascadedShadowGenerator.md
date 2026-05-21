[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CascadedShadowGenerator

# Class: CascadedShadowGenerator

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L43)

A CSM implementation allowing casting shadows on large scenes.
Documentation : https://doc.babylonjs.com/babylon101/cascadedShadows
Based on: https://github.com/TheRealMJP/Shadows and https://johanmedestrom.wordpress.com/2016/03/18/opengl-cascaded-shadow-maps/

## Extends

- [`ShadowGenerator`](ShadowGenerator.md)

## Constructors

### Constructor

> **new CascadedShadowGenerator**(`mapSize`, `light`, `usefulFloatFirst?`, `camera?`, `useRedTextureType?`): `CascadedShadowGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:771](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L771)

Creates a Cascaded Shadow Generator object.
A ShadowGenerator is the required tool to use the shadows.
Each directional light casting shadows needs to use its own ShadowGenerator.
Documentation : https://doc.babylonjs.com/babylon101/cascadedShadows

#### Parameters

##### mapSize

`number`

The size of the texture what stores the shadows. Example : 1024.

##### light

[`DirectionalLight`](DirectionalLight.md)

The directional light object generating the shadows.

##### usefulFloatFirst?

`boolean`

By default the generator will try to use half float textures but if you need precision (for self shadowing for instance), you can use this option to enforce full float texture.

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Camera associated with this shadow generator (default: null). If null, takes the scene active camera at the time we need to access it

##### useRedTextureType?

`boolean` = `true`

Forces the generator to use a Red instead of a RGBA type for the shadow map texture format (default: true)

#### Returns

`CascadedShadowGenerator`

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`constructor`](ShadowGenerator.md#constructor)

## Properties

### customAllowRendering

> **customAllowRendering**: (`subMesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L255)

Gets or sets a custom function to allow/disallow rendering a sub mesh in the shadow map

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

#### Returns

`boolean`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`customAllowRendering`](ShadowGenerator.md#customallowrendering)

***

### customShaderOptions

> **customShaderOptions**: [`ICustomShaderOptions`](../interfaces/ICustomShaderOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L252)

Gets or sets the custom shader name to use

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`customShaderOptions`](ShadowGenerator.md#customshaderoptions)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L283)

Specifies if the `ShadowGenerator` should be serialized, `true` to skip serialization.
Note a `ShadowGenerator` will not be serialized if its light has `doNotSerialize=true`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`doNotSerialize`](ShadowGenerator.md#donotserialize)

***

### enableSoftTransparentShadow

> **enableSoftTransparentShadow**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:710](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L710)

Enables or disables shadows with varying strength based on the transparency
When it is enabled, the strength of the shadow is taken equal to mesh.visibility
If you enabled an alpha texture on your material, the alpha value red from the texture is also combined to compute the strength:
         mesh.visibility * alphaTexture.a
The texture used is the diffuse by default, but it can be set to the opacity by setting useOpacityTextureForTransparentShadow
Note that by definition transparencyShadow must be set to true for enableSoftTransparentShadow to work!

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`enableSoftTransparentShadow`](ShadowGenerator.md#enablesofttransparentshadow)

***

### forceBackFacesOnly

> **forceBackFacesOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:833](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L833)

If true the shadow map is generated by rendering the back face of the mesh instead of the front face.
This can help with self-shadowing as the geometry making up the back of objects is slightly offset.
It might on the other hand introduce peter panning.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`forceBackFacesOnly`](ShadowGenerator.md#forcebackfacesonly)

***

### frustumEdgeFalloff

> **frustumEdgeFalloff**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:807](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L807)

Controls the extent to which the shadows fade out at the edge of the frustum

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`frustumEdgeFalloff`](ShadowGenerator.md#frustumedgefalloff)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L249)

Gets or set the id of the shadow generator. It will be the one from the light if not defined

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`id`](ShadowGenerator.md#id)

***

### onAfterShadowMapRenderMeshObservable

> **onAfterShadowMapRenderMeshObservable**: [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L277)

Observable triggered after a mesh is rendered in the shadow map.
Can be used to update internal effect state (that you can get from the onAfterShadowMapRenderObservable)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`onAfterShadowMapRenderMeshObservable`](ShadowGenerator.md#onaftershadowmaprendermeshobservable)

***

### onAfterShadowMapRenderObservable

> **onAfterShadowMapRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L265)

Observable triggered after the shadow is rendered. Can be used to restore internal effect state

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`onAfterShadowMapRenderObservable`](ShadowGenerator.md#onaftershadowmaprenderobservable)

***

### onBeforeShadowMapRenderMeshObservable

> **onBeforeShadowMapRenderMeshObservable**: [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L271)

Observable triggered before a mesh is rendered in the shadow map.
Can be used to update internal effect state (that you can get from the onBeforeShadowMapRenderObservable)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`onBeforeShadowMapRenderMeshObservable`](ShadowGenerator.md#onbeforeshadowmaprendermeshobservable)

***

### onBeforeShadowMapRenderObservable

> **onBeforeShadowMapRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L260)

Observable triggered before the shadow is rendered. Can be used to update internal effect state

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`onBeforeShadowMapRenderObservable`](ShadowGenerator.md#onbeforeshadowmaprenderobservable)

***

### penumbraDarkness

> **penumbraDarkness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L86)

Gets or sets the actual darkness of the soft shadows while using PCSS filtering (value between 0. and 1.)

***

### stabilizeCascades

> **stabilizeCascades**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L112)

Sets this to true if you want that the edges of the shadows don't "swimm" / "shimmer" when rotating the camera.
The trade off is that you lose some precision in the shadow rendering when enabling this setting.

***

### useOpacityTextureForTransparentShadow

> **useOpacityTextureForTransparentShadow**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:715](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L715)

If this is true, use the opacity texture's alpha channel for transparent shadows instead of the diffuse one

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useOpacityTextureForTransparentShadow`](ShadowGenerator.md#useopacitytexturefortransparentshadow)

***

### CLASSNAME

> `static` **CLASSNAME**: `string` = `"CascadedShadowGenerator"`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L58)

Name of the CSM class

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`CLASSNAME`](ShadowGenerator.md#classname)

***

### DEFAULT\_ALPHA\_CUTOFF

> `static` **DEFAULT\_ALPHA\_CUTOFF**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L246)

Defines the default alpha cutoff value used for transparent alpha tested materials.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`DEFAULT_ALPHA_CUTOFF`](ShadowGenerator.md#default_alpha_cutoff)

***

### DEFAULT\_CASCADES\_COUNT

> `readonly` `static` **DEFAULT\_CASCADES\_COUNT**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L63)

Defines the default number of cascades used by the CSM.

***

### FILTER\_BLURCLOSEEXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_BLURCLOSEEXPONENTIALSHADOWMAP**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L201)

Shadow generator mode ESM: Blurred Exponential Shadow Mapping using the inverse of the exponential preventing
edge artifacts on steep falloff.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_BLURCLOSEEXPONENTIALSHADOWMAP`](ShadowGenerator.md#filter_blurcloseexponentialshadowmap)

***

### FILTER\_BLUREXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_BLUREXPONENTIALSHADOWMAP**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L189)

Shadow generator mode ESM: Blurred Exponential Shadow Mapping.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_BLUREXPONENTIALSHADOWMAP`](ShadowGenerator.md#filter_blurexponentialshadowmap)

***

### FILTER\_CLOSEEXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_CLOSEEXPONENTIALSHADOWMAP**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L195)

Shadow generator mode ESM: Exponential Shadow Mapping using the inverse of the exponential preventing
edge artifacts on steep falloff.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_CLOSEEXPONENTIALSHADOWMAP`](ShadowGenerator.md#filter_closeexponentialshadowmap)

***

### FILTER\_EXPONENTIALSHADOWMAP

> `readonly` `static` **FILTER\_EXPONENTIALSHADOWMAP**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L179)

Shadow generator mode ESM: Exponential Shadow Mapping.
(http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_EXPONENTIALSHADOWMAP`](ShadowGenerator.md#filter_exponentialshadowmap)

***

### FILTER\_NONE

> `readonly` `static` **FILTER\_NONE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L174)

Shadow generator mode None: no filtering applied.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_NONE`](ShadowGenerator.md#filter_none)

***

### FILTER\_PCF

> `readonly` `static` **FILTER\_PCF**: `6` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L207)

Shadow generator mode PCF: Percentage Closer Filtering
benefits from Webgl 2 shadow samplers. Fallback to Poisson Sampling in Webgl 1
(https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch11.html)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_PCF`](ShadowGenerator.md#filter_pcf)

***

### FILTER\_PCSS

> `readonly` `static` **FILTER\_PCSS**: `7` = `7`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L213)

Shadow generator mode PCSS: Percentage Closering Soft Shadow.
benefits from Webgl 2 shadow samplers. Fallback to Poisson Sampling in Webgl 1
Contact Hardening

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_PCSS`](ShadowGenerator.md#filter_pcss)

***

### FILTER\_POISSONSAMPLING

> `readonly` `static` **FILTER\_POISSONSAMPLING**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L184)

Shadow generator mode Poisson Sampling: Percentage Closer Filtering.
(Multiple Tap around evenly distributed around the pixel are used to evaluate the shadow strength)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`FILTER_POISSONSAMPLING`](ShadowGenerator.md#filter_poissonsampling)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L169)

Force all the shadow generators to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`ForceGLSL`](ShadowGenerator.md#forceglsl)

***

### MAX\_CASCADES\_COUNT

> `static` **MAX\_CASCADES\_COUNT**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L71)

Defines the maximum number of cascades used by the CSM.

***

### MIN\_CASCADES\_COUNT

> `static` **MIN\_CASCADES\_COUNT**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L67)

Defines the minimum number of cascades used by the CSM.

***

### QUALITY\_HIGH

> `readonly` `static` **QUALITY\_HIGH**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L223)

Reserved for PCF and PCSS
Highest Quality.

Execute PCF on a 5*5 kernel improving a lot the shadow aliasing artifacts.

Execute PCSS with 32 taps blocker search and 64 taps PCF.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`QUALITY_HIGH`](ShadowGenerator.md#quality_high)

***

### QUALITY\_LOW

> `readonly` `static` **QUALITY\_LOW**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L241)

Reserved for PCF and PCSS
The lowest quality but the fastest.

Execute PCF on a 1*1 kernel.

Execute PCSS with 16 taps blocker search and 16 taps PCF.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`QUALITY_LOW`](ShadowGenerator.md#quality_low)

***

### QUALITY\_MEDIUM

> `readonly` `static` **QUALITY\_MEDIUM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L232)

Reserved for PCF and PCSS
Good tradeoff for quality/perf cross devices

Execute PCF on a 3*3 kernel.

Execute PCSS with 16 taps blocker search and 32 taps PCF.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`QUALITY_MEDIUM`](ShadowGenerator.md#quality_medium)

## Accessors

### autoCalcDepthBounds

#### Get Signature

> **get** **autoCalcDepthBounds**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L429)

Gets or sets the autoCalcDepthBounds property.

When enabled, a depth rendering pass is first performed (with an internally created depth renderer or with the one
you provide by calling setDepthRenderer). Then, a min/max reducing is applied on the depth map to compute the
minimal and maximal depth of the map and those values are used as inputs for the setMinMaxDistance() function.
It can greatly enhance the shadow quality, at the expense of more GPU works.
When using this option, you should increase the value of the lambda parameter, and even set it to 1 for best results.

##### Returns

`boolean`

#### Set Signature

> **set** **autoCalcDepthBounds**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:433](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L433)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### autoCalcDepthBoundsRefreshRate

#### Get Signature

> **get** **autoCalcDepthBoundsRefreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:475](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L475)

Defines the refresh rate of the min/max computation used when autoCalcDepthBounds is set to true
Use 0 to compute just once, 1 to compute on every frame, 2 to compute every two frames and so on...
Note that if you provided your own depth renderer through a call to setDepthRenderer, you are responsible
for setting the refresh rate on the renderer yourself!

##### Returns

`number`

#### Set Signature

> **set** **autoCalcDepthBoundsRefreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L479)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bias

#### Get Signature

> **get** **bias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L289)

Gets the bias: offset applied on the depth preventing acnea (in light direction).

##### Returns

`number`

#### Set Signature

> **set** **bias**(`bias`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L295)

Sets the bias: offset applied on the depth preventing acnea (in light direction).

##### Parameters

###### bias

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`bias`](ShadowGenerator.md#bias)

***

### blurBoxOffset

#### Get Signature

> **get** **blurBoxOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L318)

Gets the blur box offset: offset applied during the blur pass.
Only useful if useKernelBlur = false

##### Returns

`number`

#### Set Signature

> **set** **blurBoxOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L325)

Sets the blur box offset: offset applied during the blur pass.
Only useful if useKernelBlur = false

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`blurBoxOffset`](ShadowGenerator.md#blurboxoffset)

***

### blurKernel

#### Get Signature

> **get** **blurKernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L360)

Gets the blur kernel: kernel size of the blur pass.
Only useful if useKernelBlur = true

##### Returns

`number`

#### Set Signature

> **set** **blurKernel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L367)

Sets the blur kernel: kernel size of the blur pass.
Only useful if useKernelBlur = true

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`blurKernel`](ShadowGenerator.md#blurkernel)

***

### blurScale

#### Get Signature

> **get** **blurScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L339)

Gets the blur scale: scale of the blurred texture compared to the main shadow map.
2 means half of the size.

##### Returns

`number`

#### Set Signature

> **set** **blurScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L346)

Sets the blur scale: scale of the blurred texture compared to the main shadow map.
2 means half of the size.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`blurScale`](ShadowGenerator.md#blurscale)

***

### camera

#### Get Signature

> **get** **camera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:926](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L926)

Gets or sets the camera associated with this shadow generator.
When null, the scene's active camera is used at render time.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:930](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L930)

##### Parameters

###### camera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`camera`](ShadowGenerator.md#camera)

***

### cascadeBlendPercentage

#### Get Signature

> **get** **cascadeBlendPercentage**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L342)

Gets or sets the percentage of blending between two cascades (value between 0. and 1.).
It defaults to 0.1 (10% blending).

##### Returns

`number`

#### Set Signature

> **set** **cascadeBlendPercentage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L346)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### contactHardeningLightSizeUVRatio

#### Get Signature

> **get** **contactHardeningLightSizeUVRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L630)

Gets the Light Size (in shadow map uv unit) used in PCSS to determine the blocker search area and the penumbra size.
Using a ratio helps keeping shape stability independently of the map size.

It does not account for the light projection as it was having too much
instability during the light setup or during light position changes.

Only valid if useContactHardeningShadow is true.

##### Returns

`number`

#### Set Signature

> **set** **contactHardeningLightSizeUVRatio**(`contactHardeningLightSizeUVRatio`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:642](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L642)

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

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`contactHardeningLightSizeUVRatio`](ShadowGenerator.md#contacthardeninglightsizeuvratio)

***

### darkness

#### Get Signature

> **get** **darkness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:649](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L649)

Gets or sets the actual darkness of a shadow

##### Returns

`number`

#### Set Signature

> **set** **darkness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:653](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L653)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`darkness`](ShadowGenerator.md#darkness)

***

### debug

#### Get Signature

> **get** **debug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L309)

Gets or sets the debug flag.
When enabled, the cascades are materialized by different colors on the screen.

##### Returns

`boolean`

#### Set Signature

> **set** **debug**(`dbg`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L313)

##### Parameters

###### dbg

`boolean`

##### Returns

`void`

***

### depthClamp

#### Get Signature

> **get** **depthClamp**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L328)

Gets or sets the depth clamping value.

When enabled, it improves the shadow quality because the near z plane of the light frustum don't need to be adjusted
to account for the shadow casters far away.

Note that this property is incompatible with PCSS filtering, so it won't be used in that case.

##### Returns

`boolean`

#### Set Signature

> **set** **depthClamp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L332)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### depthScale

#### Get Signature

> **get** **depthScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L401)

Gets the depth scale used in ESM mode.

##### Returns

`number`

#### Set Signature

> **set** **depthScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L408)

Sets the depth scale used in ESM mode.
This can override the scale stored on the light.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`depthScale`](ShadowGenerator.md#depthscale)

***

### filter

#### Get Signature

> **get** **filter**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L421)

Gets the current mode of the shadow generator (normal, PCF, ESM...).
The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE

##### Returns

`number`

#### Set Signature

> **set** **filter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L428)

Sets the current mode of the shadow generator (normal, PCF, ESM...).
The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`filter`](ShadowGenerator.md#filter)

***

### filteringQuality

#### Get Signature

> **get** **filteringQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L583)

Gets the PCF or PCSS Quality.
Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true.

##### Returns

`number`

#### Set Signature

> **set** **filteringQuality**(`filteringQuality`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:590](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L590)

Sets the PCF or PCSS Quality.
Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true.

##### Parameters

###### filteringQuality

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`filteringQuality`](ShadowGenerator.md#filteringquality)

***

### freezeShadowCastersBoundingInfo

#### Get Signature

> **get** **freezeShadowCastersBoundingInfo**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L122)

Enables or disables the shadow casters bounding info computation.
If your shadow casters don't move, you can disable this feature.
If it is enabled, the bounding box computation is done every frame.

##### Returns

`boolean`

#### Set Signature

> **set** **freezeShadowCastersBoundingInfo**(`freeze`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L126)

##### Parameters

###### freeze

`boolean`

##### Returns

`void`

***

### lambda

#### Get Signature

> **get** **lambda**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L359)

Gets or set the lambda parameter.
This parameter is used to split the camera frustum and create the cascades.
It's a value between 0. and 1.: If 0, the split is a uniform split of the frustum, if 1 it is a logarithmic split.
For all values in-between, it's a linear combination of the uniform and logarithm split algorithm.

##### Returns

`number`

#### Set Signature

> **set** **lambda**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L363)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### light

#### Get Signature

> **get** **light**(): [`IShadowLight`](../interfaces/IShadowLight.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:892](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L892)

Gets or sets the light that is casting the shadows

##### Returns

[`IShadowLight`](../interfaces/IShadowLight.md)

#### Set Signature

> **set** **light**(`light`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:896](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L896)

##### Parameters

###### light

[`IShadowLight`](../interfaces/IShadowLight.md)

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`light`](ShadowGenerator.md#light)

***

### mapSize

#### Get Signature

> **get** **mapSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:879](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L879)

Gets or sets the size of the texture what stores the shadows

##### Returns

`number`

#### Set Signature

> **set** **mapSize**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:883](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L883)

##### Parameters

###### size

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`mapSize`](ShadowGenerator.md#mapsize)

***

### maxDistance

#### Get Signature

> **get** **maxDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L227)

Gets the maximal distance used in the cascade break computation

##### Returns

`number`

***

### minDistance

#### Get Signature

> **get** **minDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L222)

Gets the minimal distance used in the cascade break computation

##### Returns

`number`

***

### normalBias

#### Get Signature

> **get** **normalBias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L303)

Gets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle).

##### Returns

`number`

#### Set Signature

> **set** **normalBias**(`normalBias`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L309)

Sets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle).

##### Parameters

###### normalBias

`number`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`normalBias`](ShadowGenerator.md#normalbias)

***

### numCascades

#### Get Signature

> **get** **numCascades**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L93)

Gets or set the number of cascades used by the CSM.

##### Returns

`number`

#### Set Signature

> **set** **numCascades**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L97)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### projectionMatrix

#### Get Signature

> **get** **projectionMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2003](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2003)

Gets the projection matrix used to render the shadow map.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`projectionMatrix`](ShadowGenerator.md#projectionmatrix)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:824](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L824)

Gets the shader language used in this generator.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`shaderLanguage`](ShadowGenerator.md#shaderlanguage)

***

### shadowCastersBoundingInfo

#### Get Signature

> **get** **shadowCastersBoundingInfo**(): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L177)

Gets or sets the shadow casters bounding info.
If you provide your own shadow casters bounding info, first enable freezeShadowCastersBoundingInfo
so that the system won't overwrite the bounds you provide

##### Returns

[`BoundingInfo`](BoundingInfo.md)

#### Set Signature

> **set** **shadowCastersBoundingInfo**(`boundingInfo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L181)

##### Parameters

###### boundingInfo

[`BoundingInfo`](BoundingInfo.md)

##### Returns

`void`

***

### shadowMaxZ

#### Get Signature

> **get** **shadowMaxZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L280)

Gets the shadow max z distance. It's the limit beyond which shadows are not displayed.
It defaults to camera.maxZ

##### Returns

`number`

#### Set Signature

> **set** **shadowMaxZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L289)

Sets the shadow max z distance.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### transparencyShadow

#### Get Signature

> **get** **transparencyShadow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:684](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L684)

Gets or sets the ability to have transparent shadow

##### Returns

`boolean`

#### Set Signature

> **set** **transparencyShadow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:688](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L688)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`transparencyShadow`](ShadowGenerator.md#transparencyshadow)

***

### useBlurCloseExponentialShadowMap

#### Get Signature

> **get** **useBlurCloseExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:544](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L544)

Gets if the current filter is set to filtered "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Returns

`boolean`

#### Set Signature

> **set** **useBlurCloseExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L551)

Sets the current filter to filtered "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useBlurCloseExponentialShadowMap`](ShadowGenerator.md#useblurcloseexponentialshadowmap)

***

### useBlurExponentialShadowMap

#### Get Signature

> **get** **useBlurExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L505)

Gets if the current filter is set to filtered ESM.

##### Returns

`boolean`

#### Set Signature

> **set** **useBlurExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:511](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L511)

Gets if the current filter is set to filtered  ESM.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useBlurExponentialShadowMap`](ShadowGenerator.md#useblurexponentialshadowmap)

***

### useCloseExponentialShadowMap

#### Get Signature

> **get** **useCloseExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L524)

Gets if the current filter is set to "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Returns

`boolean`

#### Set Signature

> **set** **useCloseExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:531](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L531)

Sets the current filter to "close ESM" (using the inverse of the
exponential to prevent steep falloff artifacts).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useCloseExponentialShadowMap`](ShadowGenerator.md#usecloseexponentialshadowmap)

***

### useContactHardeningShadow

#### Get Signature

> **get** **useContactHardeningShadow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L605)

Gets if the current filter is set to "PCSS" (contact hardening).

##### Returns

`boolean`

#### Set Signature

> **set** **useContactHardeningShadow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:611](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L611)

Sets the current filter to "PCSS" (contact hardening).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useContactHardeningShadow`](ShadowGenerator.md#usecontacthardeningshadow)

***

### useExponentialShadowMap

#### Get Signature

> **get** **useExponentialShadowMap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:487](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L487)

Gets if the current filter is set to ESM.

##### Returns

`boolean`

#### Set Signature

> **set** **useExponentialShadowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:493](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L493)

Sets the current filter is to ESM.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useExponentialShadowMap`](ShadowGenerator.md#useexponentialshadowmap)

***

### useFloat32TextureType

#### Get Signature

> **get** **useFloat32TextureType**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:909](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L909)

Gets or sets a value indicating whether the shadow map should use full float texture type (instead of half float, which is the default).
Use this option when you need more precision (for self shadowing, for instance).

##### Returns

`boolean`

#### Set Signature

> **set** **useFloat32TextureType**(`useFloat32TextureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:913](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L913)

##### Parameters

###### useFloat32TextureType

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useFloat32TextureType`](ShadowGenerator.md#usefloat32texturetype)

***

### useKernelBlur

#### Get Signature

> **get** **useKernelBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L381)

Gets whether the blur pass is a kernel blur (if true) or box blur.
Only useful in filtered mode (useBlurExponentialShadowMap...)

##### Returns

`boolean`

#### Set Signature

> **set** **useKernelBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L388)

Sets whether the blur pass is a kernel blur (if true) or box blur.
Only useful in filtered mode (useBlurExponentialShadowMap...)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useKernelBlur`](ShadowGenerator.md#usekernelblur)

***

### usePercentageCloserFiltering

#### Get Signature

> **get** **usePercentageCloserFiltering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L563)

Gets if the current filter is set to "PCF" (percentage closer filtering).

##### Returns

`boolean`

#### Set Signature

> **set** **usePercentageCloserFiltering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:569](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L569)

Sets the current filter to "PCF" (percentage closer filtering).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`usePercentageCloserFiltering`](ShadowGenerator.md#usepercentagecloserfiltering)

***

### usePoissonSampling

#### Get Signature

> **get** **usePoissonSampling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L468)

Gets if the current filter is set to Poisson Sampling.

##### Returns

`boolean`

#### Set Signature

> **set** **usePoissonSampling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:474](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L474)

Sets the current filter to Poisson Sampling.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`usePoissonSampling`](ShadowGenerator.md#usepoissonsampling)

***

### useRedTextureFormat

#### Get Signature

> **get** **useRedTextureFormat**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:943](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L943)

Gets or sets a value indicating whether the shadow map should use a red-channel-only texture format.
Using a single-channel format reduces memory usage when color data is not needed.

##### Returns

`boolean`

#### Set Signature

> **set** **useRedTextureFormat**(`useRedTextureFormat`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:947](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L947)

##### Parameters

###### useRedTextureFormat

`boolean`

##### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`useRedTextureFormat`](ShadowGenerator.md#useredtextureformat)

***

### viewMatrix

#### Get Signature

> **get** **viewMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1996](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1996)

Gets the view matrix used to render the shadow map.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`viewMatrix`](ShadowGenerator.md#viewmatrix)

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:745](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L745)

Support test.

##### Returns

`boolean`

## Methods

### addShadowCaster()

> **addShadowCaster**(`mesh`, `includeDescendants?`): [`ShadowGenerator`](ShadowGenerator.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:754](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L754)

Helper function to add a mesh and its descendants to the list of shadow casters.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Mesh to add

##### includeDescendants?

`boolean` = `true`

boolean indicating if the descendants should be added. Default to true

#### Returns

[`ShadowGenerator`](ShadowGenerator.md)

the Shadow Generator itself

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`addShadowCaster`](ShadowGenerator.md#addshadowcaster)

***

### bindShadowLight()

> **bindShadowLight**(`lightIndex`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:960](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L960)

Binds the shadow related information inside of an effect (information like near, far, darkness...
defined in the generator but impacting the effect).

#### Parameters

##### lightIndex

`string`

Index of the light in the enabled light list of the material owning the effect

##### effect

[`Effect`](Effect.md)

The effect we are binfing the information for

#### Returns

`void`

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`bindShadowLight`](ShadowGenerator.md#bindshadowlight)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L1043)

Disposes the ShadowGenerator.
Returns nothing.

#### Returns

`void`

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`dispose`](ShadowGenerator.md#dispose)

***

### forceCompilation()

> **forceCompilation**(`onCompiled?`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1523](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1523)

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

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`forceCompilation`](ShadowGenerator.md#forcecompilation)

***

### forceCompilationAsync()

> **forceCompilationAsync**(`options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1589)

Forces all the attached effect to compile to enable rendering only once ready vs. lazily compiling effects.

#### Parameters

##### options?

`Partial`\<\{ `useInstances`: `boolean`; \}\>

Sets of optional options forcing the compilation with different modes

#### Returns

`Promise`\<`void`\>

A promise that resolves when the compilation completes

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`forceCompilationAsync`](ShadowGenerator.md#forcecompilationasync)

***

### getCascadeMaxExtents()

> **getCascadeMaxExtents**(`cascadeIndex`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L256)

Gets a cascade maximum extents

#### Parameters

##### cascadeIndex

`number`

index of the cascade

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the maximum cascade extents

***

### getCascadeMinExtents()

> **getCascadeMinExtents**(`cascadeIndex`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L247)

Gets a cascade minimum extents

#### Parameters

##### cascadeIndex

`number`

index of the cascade

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the minimum cascade extents

***

### getCascadeProjectionMatrix()

> **getCascadeProjectionMatrix**(`cascadeNum`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:386](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L386)

Gets the projection matrix corresponding to a given cascade

#### Parameters

##### cascadeNum

`number`

cascade to retrieve the projection matrix from

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

the cascade projection matrix

***

### getCascadeTransformMatrix()

> **getCascadeTransformMatrix**(`cascadeNum`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L395)

Gets the transformation matrix corresponding to a given cascade

#### Parameters

##### cascadeNum

`number`

cascade to retrieve the transformation matrix from

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

the cascade transformation matrix

***

### getCascadeViewMatrix()

> **getCascadeViewMatrix**(`cascadeNum`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L377)

Gets the view matrix corresponding to a given cascade

#### Parameters

##### cascadeNum

`number`

cascade to retrieve the view matrix from

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

the cascade view matrix

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L235)

Gets the class name of that object

#### Returns

`string`

"CascadedShadowGenerator"

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`getClassName`](ShadowGenerator.md#getclassname)

***

### getDarkness()

> **getDarkness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L662)

Returns the darkness value (float). This can only decrease the actual darkness of a shadow.
0 means strongest and 1 would means no shadow.

#### Returns

`number`

the darkness.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`getDarkness`](ShadowGenerator.md#getdarkness)

***

### getLight()

> **getLight**(): [`IShadowLight`](../interfaces/IShadowLight.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:814](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L814)

Returns the associated light object.

#### Returns

[`IShadowLight`](../interfaces/IShadowLight.md)

the light generating the shadow

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`getLight`](ShadowGenerator.md#getlight)

***

### getShadowMap()

> **getShadowMap**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:724](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L724)

Gets the main RTT containing the shadow map (usually storing depth from the light point of view).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

The render target texture if present otherwise, null

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`getShadowMap`](ShadowGenerator.md#getshadowmap)

***

### getShadowMapForRendering()

> **getShadowMapForRendering**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L732)

Gets the RTT used during rendering (can be a blurred version of the shadow map or the shadow map itself).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

The render target texture if the shadow map is present otherwise, null

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`getShadowMapForRendering`](ShadowGenerator.md#getshadowmapforrendering)

***

### getTransformMatrix()

> **getTransformMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:1035](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L1035)

Gets the transformation matrix of the first cascade used to project the meshes into the map from the light point of view.
(eq to view projection * shadow projection matrices)

#### Returns

[`Matrix`](Matrix.md)

The transform matrix used to create the shadow map

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`getTransformMatrix`](ShadowGenerator.md#gettransformmatrix)

***

### isReady()

> **isReady**(`subMesh`, `useInstances`, `isTransparent`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:1633](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L1633)

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

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`isReady`](ShadowGenerator.md#isready)

***

### prepareDefines()

> **prepareDefines**(`defines`, `lightIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:928](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L928)

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

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`prepareDefines`](ShadowGenerator.md#preparedefines)

***

### recreateShadowMap()

> **recreateShadowMap**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:2063](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L2063)

Recreates the shadow map dependencies like RTT and post processes. This can be used during the switch between
Cube and 2D textures for instance.

#### Returns

`void`

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`recreateShadowMap`](ShadowGenerator.md#recreateshadowmap)

***

### removeShadowCaster()

> **removeShadowCaster**(`mesh`, `includeDescendants?`): [`ShadowGenerator`](ShadowGenerator.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:784](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L784)

Helper function to remove a mesh and its descendants from the list of shadow casters

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Mesh to remove

##### includeDescendants?

`boolean` = `true`

boolean indicating if the descendants should be removed. Default to true

#### Returns

[`ShadowGenerator`](ShadowGenerator.md)

the Shadow Generator itself

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`removeShadowCaster`](ShadowGenerator.md#removeshadowcaster)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:1061](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L1061)

Serializes the shadow generator setup to a json object.

#### Returns

`any`

The serialized JSON object

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`serialize`](ShadowGenerator.md#serialize)

***

### setDarkness()

> **setDarkness**(`darkness`): [`ShadowGenerator`](ShadowGenerator.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:670](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L670)

Sets the darkness value (float). This can only decrease the actual darkness of a shadow.

#### Parameters

##### darkness

`number`

The darkness value 0 means strongest and 1 would means no shadow.

#### Returns

[`ShadowGenerator`](ShadowGenerator.md)

the shadow generator allowing fluent coding.

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`setDarkness`](ShadowGenerator.md#setdarkness)

***

### setDepthRenderer()

> **setDepthRenderer**(`depthRenderer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L409)

Sets the depth renderer to use when autoCalcDepthBounds is enabled.

Note that if no depth renderer is set, a new one will be automatically created internally when necessary.

You should call this function if you already have a depth renderer enabled in your scene, to avoid
doing multiple depth rendering each frame. If you provide your own depth renderer, make sure it stores linear depth!

#### Parameters

##### depthRenderer

[`Nullable`](../type-aliases/Nullable.md)\<[`DepthRenderer`](DepthRenderer.md)\>

The depth renderer to use when autoCalcDepthBounds is enabled. If you pass null or don't call this function at all, a depth renderer will be automatically created

#### Returns

`void`

***

### setMinMaxDistance()

> **setMinMaxDistance**(`min`, `max`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L198)

Sets the minimal and maximal distances to use when computing the cascade breaks.

The values of min / max are typically the depth zmin and zmax values of your scene, for a given frame.
If you don't know these values, simply leave them to their defaults and don't call this function.

#### Parameters

##### min

`number`

minimal distance for the breaks (default to 0.)

##### max

`number`

maximal distance for the breaks (default to 1.)

#### Returns

`void`

***

### setTransparencyShadow()

> **setTransparencyShadow**(`transparent`): [`ShadowGenerator`](ShadowGenerator.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:697](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L697)

Sets the ability to have transparent shadow (boolean).

#### Parameters

##### transparent

`boolean`

True if transparent else False

#### Returns

[`ShadowGenerator`](ShadowGenerator.md)

the shadow generator allowing fluent coding

#### Inherited from

[`ShadowGenerator`](ShadowGenerator.md).[`setTransparencyShadow`](ShadowGenerator.md#settransparencyshadow)

***

### splitFrustum()

> **splitFrustum**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L490)

Create the cascade breaks according to the lambda, shadowMaxZ and min/max distance properties, as well as the camera near and far planes.
This function is automatically called when updating lambda, shadowMaxZ and min/max distances, however you should call it yourself if
you change the camera near/far planes!

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`parsedShadowGenerator`, `scene`): [`ShadowGenerator`](ShadowGenerator.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts:1101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/Shadows/cascadedShadowGenerator.ts#L1101)

Parses a serialized ShadowGenerator and returns a new ShadowGenerator.

#### Parameters

##### parsedShadowGenerator

`any`

The JSON object to parse

##### scene

[`Scene`](Scene.md)

The scene to create the shadow map for

#### Returns

[`ShadowGenerator`](ShadowGenerator.md)

The parsed shadow generator

#### Overrides

[`ShadowGenerator`](ShadowGenerator.md).[`Parse`](ShadowGenerator.md#parse)
