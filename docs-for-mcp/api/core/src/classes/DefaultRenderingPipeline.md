[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DefaultRenderingPipeline

# Class: DefaultRenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L39)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L431)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L102)

Animations which can be used to tweak settings over a period of time

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### chromaticAberration

> **chromaticAberration**: [`ChromaticAberrationPostProcess`](ChromaticAberrationPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L87)

Chromatic aberration post process which will shift rgb colors in the image

***

### depthOfField

> **depthOfField**: [`DepthOfFieldEffect`](DepthOfFieldEffect.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L75)

Depth of field effect, applies a blur based on how far away objects are from the focus distance.

***

### fxaa

> **fxaa**: [`FxaaPostProcess`](FxaaPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L79)

The Fast Approximate Anti-Aliasing post process which attempts to remove aliasing from an image.

***

### FxaaPostProcessId

> `readonly` **FxaaPostProcessId**: `"FxaaPostProcessEffect"` = `"FxaaPostProcessEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L55)

#### Ignore

ID of the Fast Approximate Anti-Aliasing post process;

***

### grain

> **grain**: [`GrainPostProcess`](GrainPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L92)

Grain post process which add noise to the image

***

### imageProcessing

> **imageProcessing**: [`ImageProcessingPostProcess`](ImageProcessingPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L83)

Image post processing pass used to perform operations such as tone mapping or color grading.

***

### ImageProcessingPostProcessId

> `readonly` **ImageProcessingPostProcessId**: `"ImageProcessingPostProcessEffect"` = `"ImageProcessingPostProcessEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L50)

#### Ignore

ID of the image processing post process;

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

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<`DefaultRenderingPipeline`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L133)

This is triggered each time the pipeline has been built.

***

### sharpen

> **sharpen**: [`SharpenPostProcess`](SharpenPostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L69)

Sharpen post process which will apply a sharpen convolution to enhance edges

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L45)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### automaticBuild

#### Get Signature

> **get** **automaticBuild**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L123)

Enable or disable automatic building of the pipeline when effects are enabled and disabled.
If false, you will have to manually call prepare() to update the pipeline.

##### Returns

`boolean`

#### Set Signature

> **set** **automaticBuild**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L126)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### bloomEnabled

#### Get Signature

> **get** **bloomEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L254)

##### Returns

`boolean`

#### Set Signature

> **set** **bloomEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L244)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L166)

Specifies the size of the bloom blur kernel, relative to the final output size

##### Returns

`number`

#### Set Signature

> **set** **bloomKernel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L169)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bloomScale

#### Get Signature

> **get** **bloomScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L237)

##### Returns

`number`

#### Set Signature

> **set** **bloomScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L224)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L217)

##### Returns

`number`

#### Set Signature

> **set** **bloomThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L208)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L201)

##### Returns

`number`

#### Set Signature

> **set** **bloomWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L191)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L48)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### chromaticAberrationEnabled

#### Get Signature

> **get** **chromaticAberrationEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L403)

##### Returns

`boolean`

#### Set Signature

> **set** **chromaticAberrationEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L393)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L289)

Blur level of the depth of field effect. (Higher blur will effect performance)

##### Returns

[`DepthOfFieldEffectBlurLevel`](../enumerations/DepthOfFieldEffectBlurLevel.md)

#### Set Signature

> **set** **depthOfFieldBlurLevel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L293)

##### Parameters

###### value

[`DepthOfFieldEffectBlurLevel`](../enumerations/DepthOfFieldEffectBlurLevel.md)

##### Returns

`void`

***

### depthOfFieldEnabled

#### Get Signature

> **get** **depthOfFieldEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L272)

If the depth of field is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **depthOfFieldEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L276)

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

### fxaaEnabled

#### Get Signature

> **get** **fxaaEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L328)

##### Returns

`boolean`

#### Set Signature

> **set** **fxaaEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L318)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:386](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L386)

Gets the glow layer (or null if not defined)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`GlowLayer`](GlowLayer.md)\>

***

### glowLayerEnabled

#### Get Signature

> **get** **glowLayerEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L379)

##### Returns

`boolean`

#### Set Signature

> **set** **glowLayerEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:369](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L369)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L419)

##### Returns

`boolean`

#### Set Signature

> **set** **grainEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L409)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L362)

##### Returns

`boolean`

#### Set Signature

> **set** **imageProcessingEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L353)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L87)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

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

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L346)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`sampleCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L336)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L138)

Gets active scene

##### Returns

[`Scene`](Scene.md)

***

### sharpenEnabled

#### Get Signature

> **get** **sharpenEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L155)

##### Returns

`boolean`

#### Set Signature

> **set** **sharpenEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L145)

Enable or disable the sharpen process from the pipeline

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

## Methods

### addCamera()

> **addCamera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:812](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L812)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:830](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L830)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:544](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L544)

Get the class name

#### Returns

`string`

"DefaultRenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### prepare()

> **prepare**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L551)

Force the compilation of the entire pipeline.

#### Returns

`void`

***

### removeCamera()

> **removeCamera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:821](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L821)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:853](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L853)

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

> `static` **Parse**(`source`, `scene`, `rootUrl`): `DefaultRenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts:867](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.ts#L867)

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

`DefaultRenderingPipeline`

An instantiated pipeline from the serialized object.
