[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DefaultRenderingPipeline

# Class: DefaultRenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L40)

The default rendering pipeline can be added to a scene to apply common post processing effects such as anti-aliasing or depth of field.
See https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/defaultRenderingPipeline

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- [`IAnimatable`](../interfaces/IAnimatable.md)

## Constructors

### Constructor

> **new DefaultRenderingPipeline**(`name?`, `hdr?`, `scene?`, `cameras?`, `automaticBuild?`): `DefaultRenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L432)

Instantiates a DefaultRenderingPipeline.

#### Parameters

##### name?

`string` = `""`

The rendering pipeline name (default: "")

##### hdr?

`boolean` = `true`

If high dynamic range textures should be used (default: true)

##### scene?

[`Scene`](Scene.md) = `...`

The scene linked to this pipeline (default: the last created scene)

##### cameras?

[`Camera`](Camera.md)[]

The array of cameras that the rendering pipeline will be attached to (default: scene.cameras)

##### automaticBuild?

`boolean` = `true`

If false, you will have to manually call prepare() to update the pipeline (default: true)

#### Returns

`DefaultRenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L103)

Animations which can be used to tweak settings over a period of time

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### chromaticAberration

> **chromaticAberration**: [`ChromaticAberrationPostProcess`](ChromaticAberrationPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L88)

Chromatic aberration post process which will shift rgb colors in the image

***

### depthOfField

> **depthOfField**: [`DepthOfFieldEffect`](DepthOfFieldEffect.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L76)

Depth of field effect, applies a blur based on how far away objects are from the focus distance.

***

### fxaa

> **fxaa**: [`FxaaPostProcess`](FxaaPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L80)

The Fast Approximate Anti-Aliasing post process which attempts to remove aliasing from an image.

***

### FxaaPostProcessId

> `readonly` **FxaaPostProcessId**: `"FxaaPostProcessEffect"` = `"FxaaPostProcessEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L56)

#### Ignore

ID of the Fast Approximate Anti-Aliasing post process;

***

### grain

> **grain**: [`GrainPostProcess`](GrainPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L93)

Grain post process which add noise to the image

***

### imageProcessing

> **imageProcessing**: [`ImageProcessingPostProcess`](ImageProcessingPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L84)

Image post processing pass used to perform operations such as tone mapping or color grading.

***

### ImageProcessingPostProcessId

> `readonly` **ImageProcessingPostProcessId**: `"ImageProcessingPostProcessEffect"` = `"ImageProcessingPostProcessEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L51)

#### Ignore

ID of the image processing post process;

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

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<`DefaultRenderingPipeline`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L134)

This is triggered each time the pipeline has been built.

***

### sharpen

> **sharpen**: [`SharpenPostProcess`](SharpenPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L70)

Sharpen post process which will apply a sharpen convolution to enhance edges

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### automaticBuild

#### Get Signature

> **get** **automaticBuild**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L124)

Enable or disable automatic building of the pipeline when effects are enabled and disabled.
If false, you will have to manually call prepare() to update the pipeline.

##### Returns

`boolean`

#### Set Signature

> **set** **automaticBuild**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L127)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### bloomEnabled

#### Get Signature

> **get** **bloomEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L255)

##### Returns

`boolean`

#### Set Signature

> **set** **bloomEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L245)

Enable or disable the bloom from the pipeline

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### bloomKernel

#### Get Signature

> **get** **bloomKernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L167)

Specifies the size of the bloom blur kernel, relative to the final output size

##### Returns

`number`

#### Set Signature

> **set** **bloomKernel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L170)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bloomScale

#### Get Signature

> **get** **bloomScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L238)

##### Returns

`number`

#### Set Signature

> **set** **bloomScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L225)

The scale of the bloom, lower value will provide better performance.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bloomThreshold

#### Get Signature

> **get** **bloomThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L218)

##### Returns

`number`

#### Set Signature

> **set** **bloomThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L209)

The luminance threshold to find bright areas of the image to bloom.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bloomWeight

#### Get Signature

> **get** **bloomWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L202)

##### Returns

`number`

#### Set Signature

> **set** **bloomWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L192)

The strength of the bloom.

##### Parameters

###### value

`number`

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

### chromaticAberrationEnabled

#### Get Signature

> **get** **chromaticAberrationEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L404)

##### Returns

`boolean`

#### Set Signature

> **set** **chromaticAberrationEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L394)

Enable or disable the chromaticAberration process from the pipeline

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### depthOfFieldBlurLevel

#### Get Signature

> **get** **depthOfFieldBlurLevel**(): [`DepthOfFieldEffectBlurLevel`](../enumerations/DepthOfFieldEffectBlurLevel.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L290)

Blur level of the depth of field effect. (Higher blur will effect performance)

##### Returns

[`DepthOfFieldEffectBlurLevel`](../enumerations/DepthOfFieldEffectBlurLevel.md)

#### Set Signature

> **set** **depthOfFieldBlurLevel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L294)

##### Parameters

###### value

[`DepthOfFieldEffectBlurLevel`](../enumerations/DepthOfFieldEffectBlurLevel.md)

##### Returns

`void`

***

### depthOfFieldEnabled

#### Get Signature

> **get** **depthOfFieldEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L273)

If the depth of field is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **depthOfFieldEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L277)

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

### fxaaEnabled

#### Get Signature

> **get** **fxaaEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L329)

##### Returns

`boolean`

#### Set Signature

> **set** **fxaaEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L319)

If the anti aliasing is enabled.

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### glowLayer

#### Get Signature

> **get** **glowLayer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`GlowLayer`](GlowLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L387)

Gets the glow layer (or null if not defined)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`GlowLayer`](GlowLayer.md)\>

***

### glowLayerEnabled

#### Get Signature

> **get** **glowLayerEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L380)

##### Returns

`boolean`

#### Set Signature

> **set** **glowLayerEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L370)

If glow layer is enabled. (Adds a glow effect to emmissive materials)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### grainEnabled

#### Get Signature

> **get** **grainEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L420)

##### Returns

`boolean`

#### Set Signature

> **set** **grainEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L410)

Enable or disable the grain process from the pipeline

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### imageProcessingEnabled

#### Get Signature

> **get** **imageProcessingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L363)

##### Returns

`boolean`

#### Set Signature

> **set** **imageProcessingEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L354)

If image processing is enabled.

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

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L347)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`sampleCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L337)

MSAA sample count, setting this to 4 will provide 4x anti aliasing. (default: 1)

##### Parameters

###### sampleCount

`number`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L139)

Gets active scene

##### Returns

[`Scene`](Scene.md)

***

### sharpenEnabled

#### Get Signature

> **get** **sharpenEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L156)

##### Returns

`boolean`

#### Set Signature

> **set** **sharpenEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L146)

Enable or disable the sharpen process from the pipeline

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

## Methods

### addCamera()

> **addCamera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L814)

Adds a camera to the pipeline

#### Parameters

##### camera

[`Camera`](Camera.md)

the camera to be added

#### Returns

`void`

***

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:832](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L832)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L546)

Get the class name

#### Returns

`string`

"DefaultRenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### prepare()

> **prepare**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:553](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L553)

Force the compilation of the entire pipeline.

#### Returns

`void`

***

### removeCamera()

> **removeCamera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:823](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L823)

Removes a camera from the pipeline

#### Parameters

##### camera

[`Camera`](Camera.md)

the camera to remove

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts:855](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.pure.ts#L855)

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
