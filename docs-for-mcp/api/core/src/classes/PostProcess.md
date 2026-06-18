[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcess

# Class: PostProcess

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L90)

PostProcess can be used to apply a shader to a texture after it has been rendered
See https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses

## Extended by

- [`AnaglyphPostProcess`](AnaglyphPostProcess.md)
- [`BlackAndWhitePostProcess`](BlackAndWhitePostProcess.md)
- [`BloomMergePostProcess`](BloomMergePostProcess.md)
- [`BlurPostProcess`](BlurPostProcess.md)
- [`ChromaticAberrationPostProcess`](ChromaticAberrationPostProcess.md)
- [`CircleOfConfusionPostProcess`](CircleOfConfusionPostProcess.md)
- [`ColorCorrectionPostProcess`](ColorCorrectionPostProcess.md)
- [`ConvolutionPostProcess`](ConvolutionPostProcess.md)
- [`DepthOfFieldMergePostProcess`](DepthOfFieldMergePostProcess.md)
- [`DisplayPassPostProcess`](DisplayPassPostProcess.md)
- [`ExtractHighlightsPostProcess`](ExtractHighlightsPostProcess.md)
- [`FilterPostProcess`](FilterPostProcess.md)
- [`FxaaPostProcess`](FxaaPostProcess.md)
- [`GrainPostProcess`](GrainPostProcess.md)
- [`HighlightsPostProcess`](HighlightsPostProcess.md)
- [`ImageProcessingPostProcess`](ImageProcessingPostProcess.md)
- [`MotionBlurPostProcess`](MotionBlurPostProcess.md)
- [`PassPostProcess`](PassPostProcess.md)
- [`PassCubePostProcess`](PassCubePostProcess.md)
- [`RefractionPostProcess`](RefractionPostProcess.md)
- [`SharpenPostProcess`](SharpenPostProcess.md)
- [`StereoscopicInterlacePostProcessI`](StereoscopicInterlacePostProcessI.md)
- [`StereoscopicInterlacePostProcess`](StereoscopicInterlacePostProcess.md)
- [`TonemapPostProcess`](TonemapPostProcess.md)
- [`VolumetricLightScatteringPostProcess`](VolumetricLightScatteringPostProcess.md)
- [`VRDistortionCorrectionPostProcess`](VRDistortionCorrectionPostProcess.md)
- [`VRMultiviewToSingleviewPostProcess`](VRMultiviewToSingleviewPostProcess.md)
- [`ScreenSpaceReflectionPostProcess`](ScreenSpaceReflectionPostProcess.md)
- [`ScreenSpaceCurvaturePostProcess`](ScreenSpaceCurvaturePostProcess.md)

## Properties

### adaptScaleToCurrentViewport

> **adaptScaleToCurrentViewport**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L258)

Modify the scale of the post process to be the same as the viewport (default: false)

***

### alphaConstants

> **alphaConstants**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L192)

Sets the setAlphaBlendConstants of the babylon engine

***

### alwaysForcePOT

> **alwaysForcePOT**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L234)

Force textures to be a power of two (default: false)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L197)

Animations to be used for the post processing

***

### autoClear

> **autoClear**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L168)

If the buffer needs to be cleared before applying the post process. (default: true)
Should be set to false if shader will overwrite all previous pixels.

***

### clearColor

> **clearColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L162)

Clear color to use when screen clearing

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L263)

Specifies if the post process should be serialized

***

### enablePixelPerfectMode

> **enablePixelPerfectMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L204)

Enable Pixel Perfect mode where texture is not scaled to be power of 2.
Can only be used on a single postprocess or on the last one of a chain. (default: false)

***

### externalTextureSamplerBinding

> **externalTextureSamplerBinding**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:291](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L291)

if externalTextureSamplerBinding is true, the "apply" method won't bind the textureSampler texture, it is expected to be done by the "outside" (by the onApplyObservable observer most probably).
counter-productive in some cases because if the texture bound by "apply" is different from the currently texture bound, (the one set by the onApplyObservable observer, for eg) some
internal structures (materialContext) will be dirtified, which may impact performances

***

### forceAutoClearInAlphaMode

> **forceAutoClearInAlphaMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L174)

If clearing the buffer should be forced in autoClear mode, even when alpha mode is enabled (default: false).
By default, the buffer will only be cleared if alpha mode is disabled (and autoClear is true).

***

### forceFullscreenViewport

> **forceFullscreenViewport**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L210)

Force the postprocess to be applied without taking in account viewport

***

### height

> **height**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L141)

Height of the texture to apply the post process on

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L216)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

***

### nodeMaterialSource

> **nodeMaterialSource**: [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterial`](NodeMaterial.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L146)

Gets the node material used to create this postprocess (null if the postprocess was manually created)

***

### onActivateObservable

> **onActivateObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L347)

An event triggered when the postprocess is activated.

***

### onAfterRenderObservable

> **onAfterRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L413)

An event triggered after rendering the postprocess

***

### onApplyObservable

> **onApplyObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L381)

An event triggered when the postprocess applies its effect.

***

### onBeforeRenderObservable

> **onBeforeRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L397)

An event triggered before rendering the postprocess

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L429)

An event triggered when the post-process is disposed

***

### onEffectCreatedObservable

> **onEffectCreatedObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L340)

Executed when the effect was created

#### Returns

effect that was created for this post process

***

### onSizeChangedObservable

> **onSizeChangedObservable**: [`Observable`](Observable.md)\<`PostProcess`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L365)

An event triggered when the postprocess changes its size.

***

### renderTargetSamplingMode

> **renderTargetSamplingMode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L157)

Sampling mode used by the shader

***

### scaleMode

> **scaleMode**: `number` = `Constants.SCALEMODE_FLOOR`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L229)

Scale mode for the post process (default: Engine.SCALEMODE_FLOOR)

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 1     | SCALEMODE_FLOOR                     | [engine.scalemode_floor](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_floor) |
| 2     | SCALEMODE_NEAREST                   | [engine.scalemode_nearest](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_nearest) |
| 3     | SCALEMODE_CEILING                   | [engine.scalemode_ceiling](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_ceiling) |

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L119)

Gets or sets the unique id of the post process

***

### width

> **width**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L135)

Width of the texture to apply the post process on

## Accessors

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L180)

Type of alpha mode to use when performing the post process (default: Engine.ALPHA_DISABLE)

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L184)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### aspectRatio

#### Get Signature

> **get** **aspectRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:965](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L965)

The aspect ratio of the output texture.

##### Returns

`number`

***

### inputTexture

#### Get Signature

> **get** **inputTexture**(): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L435)

The input texture for this post process and the output texture of the previous post process. When added to a pipeline the previous post process will
render it's output into this texture and this texture will be used as textureSampler in the fragment shader of this post process.

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

#### Set Signature

> **set** **inputTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L439)

##### Parameters

###### value

[`RenderTargetWrapper`](RenderTargetWrapper.md)

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:958](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L958)

If the post process is supported.

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L123)

Name of the PostProcess.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L127)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### onActivate

#### Set Signature

> **set** **onActivate**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L353)

A function that is added to the onActivateObservable

##### Parameters

###### callback

[`Nullable`](../type-aliases/Nullable.md)\<(`camera`) => `void`\>

##### Returns

`void`

***

### onAfterRender

#### Set Signature

> **set** **onAfterRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L419)

A function that is added to the onAfterRenderObservable

##### Parameters

###### callback

(`efect`) => `void`

##### Returns

`void`

***

### onApply

#### Set Signature

> **set** **onApply**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L387)

A function that is added to the onApplyObservable

##### Parameters

###### callback

(`effect`) => `void`

##### Returns

`void`

***

### onBeforeRender

#### Set Signature

> **set** **onBeforeRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L403)

A function that is added to the onBeforeRenderObservable

##### Parameters

###### callback

(`effect`) => `void`

##### Returns

`void`

***

### onSizeChanged

#### Set Signature

> **set** **onSizeChanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L371)

A function that is added to the onSizeChangedObservable

##### Parameters

###### callback

(`postProcess`) => `void`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L242)

Number of sample textures (default: 1)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L246)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L282)

Gets the shader language type used to generate vertex and fragment source code.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### texelSize

#### Get Signature

> **get** **texelSize**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:466](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L466)

Gets the texel size of the postprocess.
See https://en.wikipedia.org/wiki/Texel_(graphics)

##### Returns

[`Vector2`](Vector2.md)

***

### ForceGLSL

#### Get Signature

> **get** `static` **ForceGLSL**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L95)

Force all the postprocesses to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ForceGLSL**(`force`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L99)

##### Parameters

###### force

`boolean`

##### Returns

`void`

## Methods

### activate()

> **activate**(`cameraOrScene`, `sourceTexture?`, `forceDepthStencil?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L873)

Activates the post process by intializing the textures to be used when executed. Notifies onActivateObservable.
When this post process is used in a pipeline, this is call will bind the input texture of this post process to the output of the previous.

#### Parameters

##### cameraOrScene

[`Scene`](Scene.md) \| [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera that will be used in the post process. This camera will be used when calling onActivateObservable. You can also pass the scene if no camera is available.

##### sourceTexture?

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\> = `null`

The source texture to be inspected to get the width and height if not specified in the post process constructor. (default: null)

##### forceDepthStencil?

`boolean`

If true, a depth and stencil buffer will be generated. (default: false)

#### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target wrapper that was bound to be written to.

***

### apply()

> **apply**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L988)

Binds all textures and uniforms to the shader, this will be run on every pass.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

the effect corresponding to this post process. Null if not compiled or not ready.

***

### clone()

> **clone**(): [`Nullable`](../type-aliases/Nullable.md)\<`PostProcess`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1145)

Clones this post process

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PostProcess`\>

a new post process similar to this one

***

### dispose()

> **dispose**(`camera?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1067](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1067)

Disposes the post process.

#### Parameters

##### camera?

[`Camera`](Camera.md)

The camera to dispose the post process on.

#### Returns

`void`

***

### getCamera()

> **getCamera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L458)

Gets the camera which post process is applied to.

#### Returns

[`Camera`](Camera.md)

The camera the post process is applied to.

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L664)

Gets a string identifying the name of the class

#### Returns

`string`

"PostProcess" string

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L680)

The effect that is created when initializing the post process.

#### Returns

[`Effect`](Effect.md)

The created effect corresponding to the postprocess.

***

### getEffectName()

> **getEffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L332)

Returns the fragment url or shader name used in the post process.

#### Returns

`string`

the fragment url or name in the shader store.

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L672)

Gets the engine which this post process belongs to.

#### Returns

[`AbstractEngine`](AbstractEngine.md)

The engine the post process was enabled with.

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:980](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L980)

Get a value indicating if the post-process is ready to be used

#### Returns

`boolean`

true if the post-process is ready (shader is compiled)

***

### isReusable()

> **isReusable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L738)

The post process is reusable if it can be used multiple times within one frame.

#### Returns

`boolean`

If the post process is reusable

***

### markTextureDirty()

> **markTextureDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:743](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L743)

invalidate frameBuffer to hint the postprocess to create a depth buffer

#### Returns

`void`

***

### resize()

> **resize**(`width`, `height`, `camera?`, `needMipMaps?`, `forceDepthStencil?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:795](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L795)

Resizes the post-process texture

#### Parameters

##### width

`number`

Width of the texture

##### height

`number`

Height of the texture

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

The camera this post-process is applied to. Pass null if the post-process is used outside the context of a camera post-process chain (default: null)

##### needMipMaps?

`boolean` = `false`

True if mip maps need to be generated after render (default: false)

##### forceDepthStencil?

`boolean` = `false`

True to force post-process texture creation with stencil depth and buffer (default: false)

#### Returns

`void`

***

### restoreDefaultInputTexture()

> **restoreDefaultInputTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L447)

Since inputTexture should always be defined, if we previously manually set `inputTexture`,
the only way to unset it is to use this function to restore its internal state

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1121)

Serializes the post process to a JSON object

#### Returns

`any`

the JSON object

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1053](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1053)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

***

### shareOutputWith()

> **shareOutputWith**(`postProcess`): `PostProcess`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L689)

To avoid multiple redundant textures for multiple post process, the output the output texture for this post process can be shared with another.

#### Parameters

##### postProcess

`PostProcess`

The post process to share the output with.

#### Returns

`PostProcess`

This post process.

***

### updateEffect()

> **updateEffect**(`defines?`, `uniforms?`, `samplers?`, `indexParameters?`, `onCompiled?`, `onError?`, `vertexUrl?`, `fragmentUrl?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:720](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L720)

Updates the effect with the current post process compile time values and recompiles the shader.

#### Parameters

##### defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

Define statements that should be added at the beginning of the shader. (default: null)

##### uniforms?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

Set of uniform variables that will be passed to the shader. (default: null)

##### samplers?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

Set of Texture2D variables that will be passed to the shader. (default: null)

##### indexParameters?

`any`

The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined) See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx

##### onCompiled?

(`effect`) => `void`

Called when the shader has been compiled.

##### onError?

(`effect`, `errors`) => `void`

Called if there is an error when compiling a shader.

##### vertexUrl?

`string`

The url of the vertex shader to be used (default: the one given at construction time)

##### fragmentUrl?

`string`

The url of the fragment shader to be used (default: the one given at construction time)

#### Returns

`void`

***

### useOwnOutput()

> **useOwnOutput**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L701)

Reverses the effect of calling shareOutputWith and returns the post process back to its original state.
This should be called if the post process that shares output with this post process is disabled/disposed.

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`parsedPostProcess`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<`PostProcess`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1174)

Creates a material from parsed material data

#### Parameters

##### parsedPostProcess

`any`

defines parsed post process data

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl

`string`

defines the root URL to use to load textures

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PostProcess`\>

a new post process

***

### RegisterShaderCodeProcessing()

> `static` **RegisterShaderCodeProcessing**(`postProcessName`, `customShaderCodeProcessing?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L111)

Registers a shader code processing with a post process name.

#### Parameters

##### postProcessName

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

name of the post process. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to a post process name

##### customShaderCodeProcessing?

[`EffectWrapperCustomShaderCodeProcessing`](../type-aliases/EffectWrapperCustomShaderCodeProcessing.md)

shader code processing to associate to the post process name

#### Returns

`void`
