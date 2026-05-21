[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StandardRenderingPipeline

# Class: StandardRenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L40)

Standard rendering pipeline
Default pipeline should be used going forward but the standard pipeline will be kept for backwards compatibility.

## See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/standardRenderingPipeline

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- [`IAnimatable`](../interfaces/IAnimatable.md)

## Constructors

### Constructor

> **new StandardRenderingPipeline**(`name`, `scene`, `ratio`, `originalPostProcess?`, `cameras?`): `StandardRenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:588](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L588)

Default pipeline should be used going forward but the standard pipeline will be kept for backwards compatibility.

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### ratio

`number`

The size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)

##### originalPostProcess?

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

the custom original color post-process. Must be "reusable". Can be null.

##### cameras?

[`Camera`](Camera.md)[]

The array of cameras that the rendering pipeline will be attached to

#### Returns

`StandardRenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L335)

List of animations for the pipeline (IAnimatable implementation)

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### blurHPostProcesses

> **blurHPostProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L60)

Post-process array storing all the horizontal blur post-processes used by the pipeline

***

### blurVPostProcesses

> **blurVPostProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L64)

Post-process array storing all the vertical blur post-processes used by the pipeline

***

### blurWidth

> **blurWidth**: `number` = `512.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L154)

Configures the blur intensity used for surexposed surfaces are highlighted surfaces (light halo)

***

### brightPassPostProcess

> **brightPassPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L56)

Post-process used to calculate the illuminated surfaces controlled by a threshold

***

### brightThreshold

> **brightThreshold**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L148)

Represents the brightness threshold in order to configure the illuminated surfaces

***

### depthOfFieldBlurWidth

> **depthOfFieldBlurWidth**: `number` = `64.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L293)

Represents the blur intensity for the blurred part of the depth of field effect

***

### depthOfFieldDistance

> **depthOfFieldDistance**: `number` = `10.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L288)

Represents the focal length for the depth of field effect

***

### depthOfFieldPostProcess

> **depthOfFieldPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L132)

Post-process used to create a depth of field effect

***

### downSampleX4PostProcess

> **downSampleX4PostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L52)

Post-process used to down scale an image x4

***

### fxaaPostProcess

> **fxaaPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`FxaaPostProcess`](FxaaPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L136)

The Fast Approximate Anti-Aliasing post process which attempts to remove aliasing from an image.

***

### hdrDecreaseRate

> **hdrDecreaseRate**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L213)

For eye adaptation, represents the decrease luminance speed

***

### hdrFinalPostProcess

> **hdrFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L116)

Post-process used to merge the final HDR post-process and the real scene color

***

### hdrIncreaseRate

> **hdrIncreaseRate**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L218)

For eye adaptation, represents the increase luminance speed

***

### hdrMinimumLuminance

> **hdrMinimumLuminance**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L208)

For eye adaptation, represents the minimum luminance the eye can see

***

### hdrPostProcess

> **hdrPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L104)

Post-process used to create a HDR effect (light adaptation)

***

### horizontalBlur

> **horizontalBlur**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L159)

Sets if the blur for highlighted surfaces must be only horizontal

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L24)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### lensColorTexture

> **lensColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L244)

Lens color texture used by the lens flare effect. Mandatory if lens flare effect enabled

***

### lensFlareBlurWidth

> **lensFlareBlurWidth**: `number` = `512.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L270)

Configures the blur intensity used for for lens flare (halo)

***

### lensFlareComposePostProcess

> **lensFlareComposePostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L124)

Post-process that merges the result of the lens flare post-process and the real scene color

***

### lensFlareDirtTexture

> **lensFlareDirtTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L282)

As the "lensTexture" (can be the same texture or different), it is used to apply the lens
flare effect by taking account of the dirt texture

***

### lensFlareDistortionStrength

> **lensFlareDistortionStrength**: `number` = `16.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L265)

Based on the lens distortion effect, defines how much the lens flare result
is distorted

***

### lensFlareFinalPostProcess

> **lensFlareFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L112)

Post-process used to store the final lens flare post-process (attach/detach for debug purpose)

***

### lensFlareGhostDispersal

> **lensFlareGhostDispersal**: `number` = `1.4`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L254)

Dispersion coefficient for lens flare ghosts

***

### lensFlareHaloWidth

> **lensFlareHaloWidth**: `number` = `0.7`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L259)

Main lens flare halo width

***

### lensFlarePostProcess

> **lensFlarePostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L120)

Post-process used to create a lens flare effect

***

### lensFlareStrength

> **lensFlareStrength**: `number` = `20.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L249)

The overall strength for the lens flare effect

***

### lensStarTexture

> **lensStarTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L276)

Lens star texture must be used to simulate rays on the flares and is available
in the documentation

***

### lensTexture

> **lensTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L180)

Texture used typically to simulate "dirty" on camera lens

***

### luminanceDownSamplePostProcesses

> **luminanceDownSamplePostProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L100)

Post-processes used to create down sample post-processes in order to get
the average luminance of the final image for HDR
Array of length "StandardRenderingPipeline.LuminanceSteps"

***

### luminancePostProcess

> **luminancePostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L94)

Base post-process used to calculate the average luminance of the final image for HDR

***

### motionBlurPostProcess

> **motionBlurPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L128)

Post-process used to create a motion blur effect

***

### originalPostProcess

> **originalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L48)

Post-process which contains the original scene color before the pipeline applies all the effects

***

### screenSpaceReflectionPostProcess

> **screenSpaceReflectionPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`ScreenSpaceReflectionPostProcess`](ScreenSpaceReflectionPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L140)

Post-process used to simulate realtime reflections using the screen space and geometry renderer.

***

### sourceLight

> **sourceLight**: [`Nullable`](../type-aliases/Nullable.md)\<[`DirectionalLight`](DirectionalLight.md) \| [`SpotLight`](SpotLight.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L202)

Light (spot or directional) used to generate the volumetric lights rays
The source light must have a shadow generate so the pipeline can get its
depth map

***

### textureAdderFinalPostProcess

> **textureAdderFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L108)

Post-process used to store the final texture adder post-process (attach/detach for debug purpose)

***

### textureAdderPostProcess

> **textureAdderPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L68)

Post-process used to add colors of 2 textures (typically brightness + real scene color)

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L45)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

***

### volumetricLightBlurScale

> **volumetricLightBlurScale**: `number` = `64.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L196)

Used the set the blur intensity to smooth the volumetric lights

***

### volumetricLightCoefficient

> **volumetricLightCoefficient**: `number` = `0.2`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L186)

Represents the offset coefficient based on Rayleigh principle. Typically in interval [-0.2, 0.2]

***

### volumetricLightFinalPostProcess

> **volumetricLightFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L89)

Post-process used to store the final volumetric light post-process (attach/detach for debug purpose)

***

### volumetricLightMergePostProces

> **volumetricLightMergePostProces**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L85)

Post-process used to merge the volumetric light effect and the real scene color

***

### volumetricLightPostProcess

> **volumetricLightPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L73)

Post-process used to create volumetric lighting effect

***

### volumetricLightPower

> **volumetricLightPower**: `number` = `4.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L191)

The overall power of volumetric lights, typically in interval [0, 10] maximum

***

### volumetricLightSmoothXPostProcess

> **volumetricLightSmoothXPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`BlurPostProcess`](BlurPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L77)

Post-process used to smooth the previous volumetric light post-process on the X axis

***

### volumetricLightSmoothYPostProcess

> **volumetricLightSmoothYPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`BlurPostProcess`](BlurPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L81)

Post-process used to smooth the previous volumetric light post-process on the Y axis

***

### LuminanceSteps

> `static` **LuminanceSteps**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:1692](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L1692)

Luminance steps

## Accessors

### BloomEnabled

#### Get Signature

> **get** **BloomEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L377)

##### Ignore

Specifies if the bloom pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **BloomEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L381)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L48)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### DepthOfFieldEnabled

#### Get Signature

> **get** **DepthOfFieldEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L395)

##### Ignore

Specifies if the depth of field pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **DepthOfFieldEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L399)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L55)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L165)

Gets the overall exposure used by the pipeline

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L171)

Sets the overall exposure used by the pipeline

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fxaaEnabled

#### Get Signature

> **get** **fxaaEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L494)

Specifies if anti-aliasing is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **fxaaEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L498)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### hdrAutoExposure

#### Get Signature

> **get** **hdrAutoExposure**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L223)

Gets whether or not the exposure of the overall pipeline should be automatically adjusted by the HDR post-process

##### Returns

`boolean`

#### Set Signature

> **set** **hdrAutoExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L229)

Sets whether or not the exposure of the overall pipeline should be automatically adjusted by the HDR post-process

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### HDREnabled

#### Get Signature

> **get** **HDREnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L431)

##### Ignore

Specifies if the HDR pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **HDREnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L435)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L87)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### LensFlareEnabled

#### Get Signature

> **get** **LensFlareEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:413](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L413)

##### Ignore

Specifies if the lens flare pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **LensFlareEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:417](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L417)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### MotionBlurEnabled

#### Get Signature

> **get** **MotionBlurEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L477)

##### Ignore

Specifies if the motion blur effect is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **MotionBlurEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:481](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L481)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### motionBlurSamples

#### Get Signature

> **get** **motionBlurSamples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L546)

Specifies the number of samples used for the motion blur effect
Typically in interval [16, 64]

##### Returns

`number`

#### Set Signature

> **set** **motionBlurSamples**(`samples`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L550)

##### Parameters

###### samples

`number`

##### Returns

`void`

***

### motionStrength

#### Get Signature

> **get** **motionStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L299)

Gets how much the image is blurred by the movement while using the motion blur post-process

##### Returns

`number`

#### Set Signature

> **set** **motionStrength**(`strength`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L305)

Sets how much the image is blurred by the movement while using the motion blur post-process

##### Parameters

###### strength

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L38)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### objectBasedMotionBlur

#### Get Signature

> **get** **objectBasedMotionBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L317)

Gets whether or not the motion blur post-process is object based or screen based.

##### Returns

`boolean`

#### Set Signature

> **set** **objectBasedMotionBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L323)

Sets whether or not the motion blur post-process should be object based or screen based

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:566](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L566)

Specifies MSAA sample count, setting this to 4 will provide 4x anti aliasing. (default: 1)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`sampleCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:570](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L570)

##### Parameters

###### sampleCount

`number`

##### Returns

`void`

***

### screenSpaceReflectionsEnabled

#### Get Signature

> **get** **screenSpaceReflectionsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:511](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L511)

Specifies if screen space reflections are enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **screenSpaceReflectionsEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:515](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L515)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### VLSEnabled

#### Get Signature

> **get** **VLSEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L450)

##### Ignore

Specifies if the volumetric lights scattering effect is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **VLSEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L455)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### volumetricLightStepsCount

#### Get Signature

> **get** **volumetricLightStepsCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L529)

Specifies the number of steps used to calculate the volumetric lights
Typically in interval [50, 200]

##### Returns

`number`

#### Set Signature

> **set** **volumetricLightStepsCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L533)

##### Parameters

###### count

`number`

##### Returns

`void`

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L103)

Adds an effect to the pipeline

#### Parameters

##### renderEffect

[`PostProcessRenderEffect`](PostProcessRenderEffect.md)

the effect to add

#### Returns

`void`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`addEffect`](PostProcessRenderPipeline.md#addeffect)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:1638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L1638)

Dispose of the pipeline and stop all post processes

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L80)

Gets the class name

#### Returns

`string`

"PostProcessRenderPipeline"

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:1652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L1652)

Serialize the rendering pipeline (Used when exporting)

#### Returns

`any`

the serialized object

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L274)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`setPrePassRenderer`](PostProcessRenderPipeline.md#setprepassrenderer)

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): `StandardRenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts:1675](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.ts#L1675)

Parse the serialized pipeline

#### Parameters

##### source

`any`

Source pipeline.

##### scene

[`Scene`](Scene.md)

The scene to load the pipeline to.

##### rootUrl

`string`

The URL of the serialized pipeline.

#### Returns

`StandardRenderingPipeline`

An instantiated pipeline from the serialized object.
