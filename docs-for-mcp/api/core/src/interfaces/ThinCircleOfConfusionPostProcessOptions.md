[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinCircleOfConfusionPostProcessOptions

# Interface: ThinCircleOfConfusionPostProcessOptions

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinCircleOfConfusionPostProcess.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinCircleOfConfusionPostProcess.ts#L10)

Options used to create a ThinCircleOfConfusionPostProcess.

## Extends

- [`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md)

## Properties

### allowEmptySourceTexture?

> `optional` **allowEmptySourceTexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L309)

Sets this property to true if the fragment shader doesn't use a textureSampler texture (default: false).

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`allowEmptySourceTexture`](EffectWrapperCreationOptions.md#allowemptysourcetexture)

***

### attributeNames?

> `optional` **attributeNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L248)

Attributes to use in the shader (default: ["position"])

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`attributeNames`](EffectWrapperCreationOptions.md#attributenames)

***

### blockCompilation?

> `optional` **blockCompilation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L281)

If the shader should not be compiled immediately. (default: false)

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`blockCompilation`](EffectWrapperCreationOptions.md#blockcompilation)

***

### defines?

> `optional` **defines?**: [`Nullable`](../type-aliases/Nullable.md)\<`string` \| `string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L272)

Defines to use in the shader

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`defines`](EffectWrapperCreationOptions.md#defines)

***

### depthNotNormalized?

> `optional` **depthNotNormalized?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinCircleOfConfusionPostProcess.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinCircleOfConfusionPostProcess.ts#L14)

If the (view) depth is normalized (0.0 to 1.0 from near to far) or not (0 to camera max distance)

***

### engine?

> `optional` **engine?**: [`AbstractEngine`](../classes/AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L228)

Engine to use to create the effect

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`engine`](EffectWrapperCreationOptions.md#engine)

***

### extraInitializations?

> `optional` **extraInitializations?**: (`useWebGPU`, `list`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L297)

Defines additional code to call to prepare the shader code

#### Parameters

##### useWebGPU

`boolean`

##### list

`Promise`\<`any`\>[]

#### Returns

`void`

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`extraInitializations`](EffectWrapperCreationOptions.md#extrainitializations)

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L301)

Additional async code to run before preparing the effect

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`extraInitializationsAsync`](EffectWrapperCreationOptions.md#extrainitializationsasync)

***

### fragmentShader?

> `optional` **fragmentShader?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L232)

Fragment shader for the effect

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`fragmentShader`](EffectWrapperCreationOptions.md#fragmentshader)

***

### indexParameters?

> `optional` **indexParameters?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L277)

The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined)
See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`indexParameters`](EffectWrapperCreationOptions.md#indexparameters)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L289)

The friendly name of the effect (default: "effectWrapper")

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`name`](EffectWrapperCreationOptions.md#name)

***

### onCompiled?

> `optional` **onCompiled?**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L285)

Callback when effect is compiled

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`onCompiled`](EffectWrapperCreationOptions.md#oncompiled)

***

### samplerNames?

> `optional` **samplerNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L260)

Texture sampler names to use in the shader

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`samplerNames`](EffectWrapperCreationOptions.md#samplernames)

***

### samplers?

> `optional` **samplers?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L264)

Alias for samplerNames. Note that if it is provided, it takes precedence over samplerNames.

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`samplers`](EffectWrapperCreationOptions.md#samplers)

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L293)

The language the shader is written in (default: GLSL)

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`shaderLanguage`](EffectWrapperCreationOptions.md#shaderlanguage)

***

### uniformBuffers?

> `optional` **uniformBuffers?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L268)

The list of uniform buffers used in the shader (if any)

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`uniformBuffers`](EffectWrapperCreationOptions.md#uniformbuffers)

***

### uniformNames?

> `optional` **uniformNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L252)

Uniforms to use in the shader

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`uniformNames`](EffectWrapperCreationOptions.md#uniformnames)

***

### uniforms?

> `optional` **uniforms?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L256)

Alias for uniformNames. Note that if it is provided, it takes precedence over uniformNames.

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`uniforms`](EffectWrapperCreationOptions.md#uniforms)

***

### useAsPostProcess?

> `optional` **useAsPostProcess?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L305)

If the effect should be used as a post process (default: false). If true, the effect will be created with a "scale" uniform and a "textureSampler" sampler

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`useAsPostProcess`](EffectWrapperCreationOptions.md#useaspostprocess)

***

### useShaderStore?

> `optional` **useShaderStore?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L236)

Use the shader store instead of direct source code

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`useShaderStore`](EffectWrapperCreationOptions.md#useshaderstore)

***

### vertexShader?

> `optional` **vertexShader?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L240)

Vertex shader for the effect (default: "postprocess")

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`vertexShader`](EffectWrapperCreationOptions.md#vertexshader)

***

### vertexUrl?

> `optional` **vertexUrl?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L244)

Alias for vertexShader

#### Inherited from

[`EffectWrapperCreationOptions`](EffectWrapperCreationOptions.md).[`vertexUrl`](EffectWrapperCreationOptions.md#vertexurl)
