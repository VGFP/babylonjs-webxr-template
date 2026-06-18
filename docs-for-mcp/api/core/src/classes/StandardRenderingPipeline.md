[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StandardRenderingPipeline

# Class: StandardRenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L37)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L583)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L332)

List of animations for the pipeline (IAnimatable implementation)

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### blurHPostProcesses

> **blurHPostProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L57)

Post-process array storing all the horizontal blur post-processes used by the pipeline

***

### blurVPostProcesses

> **blurVPostProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L61)

Post-process array storing all the vertical blur post-processes used by the pipeline

***

### blurWidth

> **blurWidth**: `number` = `512.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L151)

Configures the blur intensity used for surexposed surfaces are highlighted surfaces (light halo)

***

### brightPassPostProcess

> **brightPassPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L53)

Post-process used to calculate the illuminated surfaces controlled by a threshold

***

### brightThreshold

> **brightThreshold**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L145)

Represents the brightness threshold in order to configure the illuminated surfaces

***

### depthOfFieldBlurWidth

> **depthOfFieldBlurWidth**: `number` = `64.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L290)

Represents the blur intensity for the blurred part of the depth of field effect

***

### depthOfFieldDistance

> **depthOfFieldDistance**: `number` = `10.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L285)

Represents the focal length for the depth of field effect

***

### depthOfFieldPostProcess

> **depthOfFieldPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L129)

Post-process used to create a depth of field effect

***

### downSampleX4PostProcess

> **downSampleX4PostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L49)

Post-process used to down scale an image x4

***

### fxaaPostProcess

> **fxaaPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`FxaaPostProcess`](FxaaPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L133)

The Fast Approximate Anti-Aliasing post process which attempts to remove aliasing from an image.

***

### hdrDecreaseRate

> **hdrDecreaseRate**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L210)

For eye adaptation, represents the decrease luminance speed

***

### hdrFinalPostProcess

> **hdrFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L113)

Post-process used to merge the final HDR post-process and the real scene color

***

### hdrIncreaseRate

> **hdrIncreaseRate**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L215)

For eye adaptation, represents the increase luminance speed

***

### hdrMinimumLuminance

> **hdrMinimumLuminance**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L205)

For eye adaptation, represents the minimum luminance the eye can see

***

### hdrPostProcess

> **hdrPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L101)

Post-process used to create a HDR effect (light adaptation)

***

### horizontalBlur

> **horizontalBlur**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L156)

Sets if the blur for highlighted surfaces must be only horizontal

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### lensColorTexture

> **lensColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L241)

Lens color texture used by the lens flare effect. Mandatory if lens flare effect enabled

***

### lensFlareBlurWidth

> **lensFlareBlurWidth**: `number` = `512.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L267)

Configures the blur intensity used for for lens flare (halo)

***

### lensFlareComposePostProcess

> **lensFlareComposePostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L121)

Post-process that merges the result of the lens flare post-process and the real scene color

***

### lensFlareDirtTexture

> **lensFlareDirtTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L279)

As the "lensTexture" (can be the same texture or different), it is used to apply the lens
flare effect by taking account of the dirt texture

***

### lensFlareDistortionStrength

> **lensFlareDistortionStrength**: `number` = `16.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L262)

Based on the lens distortion effect, defines how much the lens flare result
is distorted

***

### lensFlareFinalPostProcess

> **lensFlareFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L109)

Post-process used to store the final lens flare post-process (attach/detach for debug purpose)

***

### lensFlareGhostDispersal

> **lensFlareGhostDispersal**: `number` = `1.4`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L251)

Dispersion coefficient for lens flare ghosts

***

### lensFlareHaloWidth

> **lensFlareHaloWidth**: `number` = `0.7`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L256)

Main lens flare halo width

***

### lensFlarePostProcess

> **lensFlarePostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L117)

Post-process used to create a lens flare effect

***

### lensFlareStrength

> **lensFlareStrength**: `number` = `20.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L246)

The overall strength for the lens flare effect

***

### lensStarTexture

> **lensStarTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L273)

Lens star texture must be used to simulate rays on the flares and is available
in the documentation

***

### lensTexture

> **lensTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L177)

Texture used typically to simulate "dirty" on camera lens

***

### luminanceDownSamplePostProcesses

> **luminanceDownSamplePostProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L97)

Post-processes used to create down sample post-processes in order to get
the average luminance of the final image for HDR
Array of length "StandardRenderingPipeline.LuminanceSteps"

***

### luminancePostProcess

> **luminancePostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L91)

Base post-process used to calculate the average luminance of the final image for HDR

***

### motionBlurPostProcess

> **motionBlurPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L125)

Post-process used to create a motion blur effect

***

### originalPostProcess

> **originalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L45)

Post-process which contains the original scene color before the pipeline applies all the effects

***

### screenSpaceReflectionPostProcess

> **screenSpaceReflectionPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`ScreenSpaceReflectionPostProcess`](ScreenSpaceReflectionPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L137)

Post-process used to simulate realtime reflections using the screen space and geometry renderer.

***

### sourceLight

> **sourceLight**: [`Nullable`](../type-aliases/Nullable.md)\<[`DirectionalLight`](DirectionalLight.md) \| [`SpotLight`](SpotLight.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L199)

Light (spot or directional) used to generate the volumetric lights rays
The source light must have a shadow generate so the pipeline can get its
depth map

***

### textureAdderFinalPostProcess

> **textureAdderFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L105)

Post-process used to store the final texture adder post-process (attach/detach for debug purpose)

***

### textureAdderPostProcess

> **textureAdderPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L65)

Post-process used to add colors of 2 textures (typically brightness + real scene color)

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

***

### volumetricLightBlurScale

> **volumetricLightBlurScale**: `number` = `64.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L193)

Used the set the blur intensity to smooth the volumetric lights

***

### volumetricLightCoefficient

> **volumetricLightCoefficient**: `number` = `0.2`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L183)

Represents the offset coefficient based on Rayleigh principle. Typically in interval [-0.2, 0.2]

***

### volumetricLightFinalPostProcess

> **volumetricLightFinalPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L86)

Post-process used to store the final volumetric light post-process (attach/detach for debug purpose)

***

### volumetricLightMergePostProces

> **volumetricLightMergePostProces**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L82)

Post-process used to merge the volumetric light effect and the real scene color

***

### volumetricLightPostProcess

> **volumetricLightPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L70)

Post-process used to create volumetric lighting effect

***

### volumetricLightPower

> **volumetricLightPower**: `number` = `4.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L188)

The overall power of volumetric lights, typically in interval [0, 10] maximum

***

### volumetricLightSmoothXPostProcess

> **volumetricLightSmoothXPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`BlurPostProcess`](BlurPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L74)

Post-process used to smooth the previous volumetric light post-process on the X axis

***

### volumetricLightSmoothYPostProcess

> **volumetricLightSmoothYPostProcess**: [`Nullable`](../type-aliases/Nullable.md)\<[`BlurPostProcess`](BlurPostProcess.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L78)

Post-process used to smooth the previous volumetric light post-process on the Y axis

***

### LuminanceSteps

> `static` **LuminanceSteps**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:1667](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L1667)

Luminance steps

## Accessors

### BloomEnabled

#### Get Signature

> **get** **BloomEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L374)

##### Ignore

Specifies if the bloom pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **BloomEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L378)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### DepthOfFieldEnabled

#### Get Signature

> **get** **DepthOfFieldEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L392)

##### Ignore

Specifies if the depth of field pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **DepthOfFieldEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L396)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L57)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L162)

Gets the overall exposure used by the pipeline

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L168)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:489](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L489)

Specifies if anti-aliasing is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **fxaaEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L493)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### hdrAutoExposure

#### Get Signature

> **get** **hdrAutoExposure**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L220)

Gets whether or not the exposure of the overall pipeline should be automatically adjusted by the HDR post-process

##### Returns

`boolean`

#### Set Signature

> **set** **hdrAutoExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L226)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L428)

##### Ignore

Specifies if the HDR pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **HDREnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L432)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L90)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### LensFlareEnabled

#### Get Signature

> **get** **LensFlareEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L410)

##### Ignore

Specifies if the lens flare pipeline is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **LensFlareEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L414)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### MotionBlurEnabled

#### Get Signature

> **get** **MotionBlurEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L472)

##### Ignore

Specifies if the motion blur effect is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **MotionBlurEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:476](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L476)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### motionBlurSamples

#### Get Signature

> **get** **motionBlurSamples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L541)

Specifies the number of samples used for the motion blur effect
Typically in interval [16, 64]

##### Returns

`number`

#### Set Signature

> **set** **motionBlurSamples**(`samples`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:545](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L545)

##### Parameters

###### samples

`number`

##### Returns

`void`

***

### motionStrength

#### Get Signature

> **get** **motionStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L296)

Gets how much the image is blurred by the movement while using the motion blur post-process

##### Returns

`number`

#### Set Signature

> **set** **motionStrength**(`strength`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L302)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L40)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### objectBasedMotionBlur

#### Get Signature

> **get** **objectBasedMotionBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L314)

Gets whether or not the motion blur post-process is object based or screen based.

##### Returns

`boolean`

#### Set Signature

> **set** **objectBasedMotionBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L320)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L561)

Specifies MSAA sample count, setting this to 4 will provide 4x anti aliasing. (default: 1)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`sampleCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L565)

##### Parameters

###### sampleCount

`number`

##### Returns

`void`

***

### screenSpaceReflectionsEnabled

#### Get Signature

> **get** **screenSpaceReflectionsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:506](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L506)

Specifies if screen space reflections are enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **screenSpaceReflectionsEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L510)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### VLSEnabled

#### Get Signature

> **get** **VLSEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L446)

##### Ignore

Specifies if the volumetric lights scattering effect is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **VLSEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L450)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### volumetricLightStepsCount

#### Get Signature

> **get** **volumetricLightStepsCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:524](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L524)

Specifies the number of steps used to calculate the volumetric lights
Typically in interval [50, 200]

##### Returns

`number`

#### Set Signature

> **set** **volumetricLightStepsCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L528)

##### Parameters

###### count

`number`

##### Returns

`void`

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L106)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:1634](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L1634)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L83)

Gets the class name

#### Returns

`string`

"PostProcessRenderPipeline"

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts:1648](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.pure.ts#L1648)

Serialize the rendering pipeline (Used when exporting)

#### Returns

`any`

the serialized object

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L277)

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
