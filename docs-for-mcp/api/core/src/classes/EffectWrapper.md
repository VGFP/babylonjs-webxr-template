[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectWrapper

# Class: EffectWrapper

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:315](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L315)

Wraps an effect to be used for rendering

## Extended by

- [`ThinAnaglyphPostProcess`](ThinAnaglyphPostProcess.md)
- [`ThinBlackAndWhitePostProcess`](ThinBlackAndWhitePostProcess.md)
- [`ThinBlurPostProcess`](ThinBlurPostProcess.md)
- [`ThinChromaticAberrationPostProcess`](ThinChromaticAberrationPostProcess.md)
- [`ThinCircleOfConfusionPostProcess`](ThinCircleOfConfusionPostProcess.md)
- [`ThinColorCorrectionPostProcess`](ThinColorCorrectionPostProcess.md)
- [`ThinConvolutionPostProcess`](ThinConvolutionPostProcess.md)
- [`ThinExtractHighlightsPostProcess`](ThinExtractHighlightsPostProcess.md)
- [`ThinFilterPostProcess`](ThinFilterPostProcess.md)
- [`ThinFXAAPostProcess`](ThinFXAAPostProcess.md)
- [`ThinGrainPostProcess`](ThinGrainPostProcess.md)
- [`ThinImageProcessingPostProcess`](ThinImageProcessingPostProcess.md)
- [`ThinMotionBlurPostProcess`](ThinMotionBlurPostProcess.md)
- [`ThinPassPostProcess`](ThinPassPostProcess.md)
- [`ThinPassCubePostProcess`](ThinPassCubePostProcess.md)
- [`ThinSharpenPostProcess`](ThinSharpenPostProcess.md)
- [`ThinScreenSpaceCurvaturePostProcess`](ThinScreenSpaceCurvaturePostProcess.md)
- [`ThinTonemapPostProcess`](ThinTonemapPostProcess.md)

## Constructors

### Constructor

> **new EffectWrapper**(`creationOptions`): `EffectWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L413)

Creates an effect to be rendered

#### Parameters

##### creationOptions

[`EffectWrapperCreationOptions`](../interfaces/EffectWrapperCreationOptions.md)

options to create the effect

#### Returns

`EffectWrapper`

## Properties

### alphaMode

> **alphaMode**: `number` = `Constants.ALPHA_DISABLE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L356)

Type of alpha mode to use when applying the effect (default: Engine.ALPHA_DISABLE). Used only if useAsPostProcess is true.

***

### onApplyObservable

> **onApplyObservable**: [`Observable`](Observable.md)\<\{ \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L388)

Event that is fired (only when the EffectWrapper is used with an EffectRenderer) right before the effect is drawn (should be used to update uniforms)

***

### onEffectCreatedObservable

> **onEffectCreatedObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L362)

Executed when the effect is created

#### Returns

effect that was created for this effect wrapper

***

### options

> `readonly` **options**: `Required`\<[`NonNullableFields`](../type-aliases/NonNullableFields.md)\<[`EffectWrapperCreationOptions`](../interfaces/EffectWrapperCreationOptions.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L367)

Options used to create the effect wrapper

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L320)

Force code to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

## Accessors

### drawWrapper

#### Get Signature

> **get** **drawWrapper**(): [`DrawWrapper`](DrawWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L381)

Get the draw wrapper associated with the effect wrapper

##### Returns

[`DrawWrapper`](DrawWrapper.md)

the draw wrapper associated with the effect wrapper

***

### effect

#### Get Signature

> **get** **effect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:393](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L393)

The underlying effect

##### Returns

[`Effect`](Effect.md)

#### Set Signature

> **set** **effect**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L397)

##### Parameters

###### effect

[`Effect`](Effect.md)

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L345)

Gets or sets the name of the effect wrapper

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L349)

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### bind()

> **bind**(`noDefaultBindings?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:641](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L641)

Binds the data to the effect.

#### Parameters

##### noDefaultBindings?

`boolean` = `false`

if true, the default bindings (scale and alpha mode) will not be set.

#### Returns

`void`

***

### dispose()

> **dispose**(`_ignored?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:654](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L654)

Disposes of the effect wrapper

#### Parameters

##### \_ignored?

`boolean` = `false`

kept for backward compatibility

#### Returns

`void`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L373)

Get a value indicating if the effect is ready to be used

#### Returns

`boolean`

true if the post-process is ready (shader is compiled)

***

### updateEffect()

> **updateEffect**(`defines?`, `uniforms?`, `samplers?`, `indexParameters?`, `onCompiled?`, `onError?`, `vertexUrl?`, `fragmentUrl?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L549)

Updates the effect with the current effect wrapper compile time values and recompiles the shader.

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

### RegisterShaderCodeProcessing()

> `static` **RegisterShaderCodeProcessing**(`effectWrapperName`, `customShaderCodeProcessing?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L329)

Registers a shader code processing with an effect wrapper name.

#### Parameters

##### effectWrapperName

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

name of the effect wrapper. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to an effect wrapper name

##### customShaderCodeProcessing?

[`EffectWrapperCustomShaderCodeProcessing`](../type-aliases/EffectWrapperCustomShaderCodeProcessing.md)

shader code processing to associate to the effect wrapper name

#### Returns

`void`
