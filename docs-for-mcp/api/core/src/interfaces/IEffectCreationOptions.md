[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEffectCreationOptions

# Interface: IEffectCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L67)

Options to be used when creating an effect.

## Properties

### attributes

> **attributes**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L71)

Attributes that will be used in the shader.

***

### defines

> **defines**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L87)

Define statements that will be set in the shader.

***

### disableParallelShaderCompilation?

> `optional` **disableParallelShaderCompilation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L141)

If set to true the shader will not be compiles asynchronously, even if the engine allows it.

***

### existingPipelineContext?

> `optional` **existingPipelineContext?**: [`IPipelineContext`](IPipelineContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L132)

Provide an existing pipeline context to avoid creating a new one

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L136)

Additional async code to run before preparing the effect

#### Returns

`Promise`\<`void`\>

***

### fallbacks

> **fallbacks**: [`Nullable`](../type-aliases/Nullable.md)\<[`IEffectFallbacks`](IEffectFallbacks.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L91)

Possible fallbacks for this effect to improve performance when needed.

***

### indexParameters?

> `optional` **indexParameters?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L103)

Parameters to be used with Babylons include syntax to iterate over an array (eg. {lights: 10})

***

### maxSimultaneousLights?

> `optional` **maxSimultaneousLights?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L107)

Max number of lights that can be used in the shader.

***

### multiTarget?

> `optional` **multiTarget?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L123)

Is this effect rendering to several color attachments ?

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L95)

Callback that will be called when the shader is compiled.

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L99)

Callback that will be called if an error occurs during shader compilation.

***

### processCodeAfterIncludes?

> `optional` **processCodeAfterIncludes?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L119)

If provided, will be called two times with the vertex and fragment code so that this code can be updated after the #include have been processed

***

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L115)

If provided, will be called two times with the vertex and fragment code so that this code can be updated before it is compiled by the GPU

***

### samplers

> **samplers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L83)

Sampler texture variable names that will be set in the shader.

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L127)

The language the shader is written in (default: GLSL)

***

### transformFeedbackVaryings?

> `optional` **transformFeedbackVaryings?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L111)

See https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings

***

### uniformBuffersNames?

> `optional` **uniformBuffersNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L79)

Uniform buffer variable names that will be set in the shader.

***

### uniformsNames

> **uniformsNames**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L75)

Uniform variable names that will be set in the shader.
