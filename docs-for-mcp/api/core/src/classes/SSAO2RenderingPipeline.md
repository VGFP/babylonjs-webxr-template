[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SSAO2RenderingPipeline

# Class: SSAO2RenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L34)

Render pipeline to produce ssao effect

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new SSAO2RenderingPipeline**(`name`, `scene`, `ratio`, `cameras?`, `forceGeometryBuffer?`, `textureType?`): `SSAO2RenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L332)

Creates the SSAO2 rendering pipeline.

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### ratio

`any`

The size of the postprocesses. Can be a number shared between passes or an object for more precision: { ssaoRatio: 0.5, blurRatio: 1.0 }

##### cameras?

[`Camera`](Camera.md)[]

The array of cameras that the rendering pipeline will be attached to

##### forceGeometryBuffer?

`boolean` \| [`GeometryBufferRenderer`](GeometryBufferRenderer.md)

Set to true if you want to use the legacy geometry buffer renderer. You can also pass an existing instance of GeometryBufferRenderer if you want to use your own geometry buffer renderer.

##### textureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

The texture type used by the different post processes created by SSAO (default: Constants.TEXTURETYPE_UNSIGNED_BYTE)

#### Returns

`SSAO2RenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### SSAOBlurHRenderEffect

> **SSAOBlurHRenderEffect**: `string` = `"SSAOBlurHRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L51)

#### Ignore

The horizontal blur PostProcess id in the pipeline

***

### SSAOBlurVRenderEffect

> **SSAOBlurVRenderEffect**: `string` = `"SSAOBlurVRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L56)

#### Ignore

The vertical blur PostProcess id in the pipeline

***

### SSAOCombineRenderEffect

> **SSAOCombineRenderEffect**: `string` = `"SSAOCombineRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L61)

#### Ignore

The PostProcess id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

***

### SSAOOriginalSceneColorEffect

> **SSAOOriginalSceneColorEffect**: `string` = `"SSAOOriginalSceneColorEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L41)

#### Ignore

The PassPostProcess id in the pipeline that contains the original scene color

***

### SSAORenderEffect

> **SSAORenderEffect**: `string` = `"SSAORenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L46)

#### Ignore

The SSAO PostProcess id in the pipeline

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### base

#### Get Signature

> **get** **base**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L191)

The base color of the SSAO post-process
The final result is "base + ssao" between [0, 1]

##### Returns

`number`

#### Set Signature

> **set** **base**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L195)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bilateralSamples

#### Get Signature

> **get** **bilateralSamples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L235)

The number of samples the bilateral filter uses in both dimensions when denoising the SSAO calculations. Default value is 16.

A higher value should result in smoother shadows but will use more processing time in the shaders.

A high value can cause the shadows to get to blurry or create visible artifacts (bands) near sharp details in the geometry. The artifacts can sometimes be mitigated by increasing the bilateralSoften setting.

##### Returns

`number`

#### Set Signature

> **set** **bilateralSamples**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L239)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### bilateralSoften

#### Get Signature

> **get** **bilateralSoften**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L253)

Controls the shape of the denoising kernel used by the bilateral filter. Default value is 0.

By default the bilateral filter acts like a box-filter, treating all samples on the same depth with equal weights. This is effective to maximize the denoising effect given a limited set of samples. However, it also often results in visible ghosting around sharp shadow regions and can spread out lines over large areas so they are no longer visible.

Increasing this setting will make the filter pay less attention to samples further away from the center sample, reducing many artifacts but at the same time increasing noise.

Useful value range is [0..1].

##### Returns

`number`

#### Set Signature

> **set** **bilateralSoften**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L257)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### bilateralTolerance

#### Get Signature

> **get** **bilateralTolerance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L269)

How forgiving the bilateral denoiser should be when rejecting samples. Default value is 0.

A higher value results in the bilateral filter being more forgiving and thus doing a better job at denoising slanted and curved surfaces, but can lead to shadows spreading out around corners or between objects that are close to each other depth wise.

Useful value range is normally [0..1], but higher values are allowed.

##### Returns

`number`

#### Set Signature

> **set** **bilateralTolerance**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L273)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### bypassBlur

#### Get Signature

> **get** **bypassBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L208)

##### Returns

`boolean`

#### Set Signature

> **set** **bypassBlur**(`b`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L205)

Skips the denoising (blur) stage of the SSAO calculations.

Useful to temporarily set while experimenting with the other SSAO2 settings.

##### Parameters

###### b

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

### epsilon

#### Get Signature

> **get** **epsilon**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L110)

##### Returns

`number`

#### Set Signature

> **set** **epsilon**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L107)

Used in SSAO calculations to compensate for accuracy issues with depth values. Default 0.02.

Normally you do not need to change this value, but you can experiment with it if you get a lot of in false self-occlusion on flat surfaces when using fewer than 16 samples. Useful range is normally [0..0.1] but higher values is allowed.

##### Parameters

###### n

`number`

##### Returns

`void`

***

### expensiveBlur

#### Get Signature

> **get** **expensiveBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L223)

##### Returns

`boolean`

#### Set Signature

> **set** **expensiveBlur**(`b`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L220)

Enables the configurable bilateral denoising (blurring) filter. Default is true.
Set to false to instead use a legacy bilateral filter that can't be configured.

The denoising filter runs after the SSAO calculations and is a very important step. Both options results in a so called bilateral being used, but the "expensive" one can be
configured in several ways to fit your scene.

##### Parameters

###### b

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

### maxZ

#### Get Signature

> **get** **maxZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L81)

Maximum depth value to still render AO. A smooth falloff makes the dimming more natural, so there will be no abrupt shading change.

##### Returns

`number`

#### Set Signature

> **set** **maxZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L85)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### minZAspect

#### Get Signature

> **get** **minZAspect**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L93)

In order to save performances, SSAO radius is clamped on close geometry. This ratio changes by how much.

##### Returns

`number`

#### Set Signature

> **set** **minZAspect**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L97)

##### Parameters

###### value

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

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L178)

The radius around the analyzed pixel used by the SSAO post-process. Default value is 2.0

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L182)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L121)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L118)

Number of samples used for the SSAO calculations. Default value is 8.

##### Parameters

###### n

`number`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L319)

Gets active scene

##### Returns

[`Scene`](Scene.md)

***

### textureSamples

#### Get Signature

> **get** **textureSamples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L139)

##### Returns

`number`

#### Set Signature

> **set** **textureSamples**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L130)

Number of samples to use for antialiasing.

##### Parameters

###### n

`number`

##### Returns

`void`

***

### totalStrength

#### Get Signature

> **get** **totalStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L69)

The output strength of the SSAO post-process. Default value is 1.0.

##### Returns

`number`

#### Set Signature

> **set** **totalStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L73)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### useViewportInCombineStage

#### Get Signature

> **get** **useViewportInCombineStage**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:291](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L291)

Indicates that the combine stage should use the current camera viewport to render the SSAO result on only a portion of the output texture (default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **useViewportInCombineStage**(`b`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L295)

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L280)

Support test.

##### Returns

`boolean`

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

> **dispose**(`disableGeometryBufferRenderer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L462)

Removes the internal pipeline assets and detaches the pipeline from the scene cameras

#### Parameters

##### disableGeometryBufferRenderer?

`boolean` = `false`

Set to true if you want to disable the Geometry Buffer renderer

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L454)

Get the class name

#### Returns

`string`

"SSAO2RenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L303)

Checks if all the post processes in the pipeline are ready.

#### Returns

`boolean`

True if all the post processes in the pipeline are ready

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:606](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L606)

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
