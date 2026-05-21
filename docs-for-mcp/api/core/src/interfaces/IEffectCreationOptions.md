[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEffectCreationOptions

# Interface: IEffectCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L65)

Options to be used when creating an effect.

## Properties

### attributes

> **attributes**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L69)

Attributes that will be used in the shader.

***

### defines

> **defines**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L85)

Define statements that will be set in the shader.

***

### disableParallelShaderCompilation?

> `optional` **disableParallelShaderCompilation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L139)

If set to true the shader will not be compiles asynchronously, even if the engine allows it.

***

### existingPipelineContext?

> `optional` **existingPipelineContext?**: [`IPipelineContext`](IPipelineContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L130)

Provide an existing pipeline context to avoid creating a new one

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L134)

Additional async code to run before preparing the effect

#### Returns

`Promise`\<`void`\>

***

### fallbacks

> **fallbacks**: [`Nullable`](../type-aliases/Nullable.md)\<[`IEffectFallbacks`](IEffectFallbacks.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L89)

Possible fallbacks for this effect to improve performance when needed.

***

### indexParameters?

> `optional` **indexParameters?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L101)

Parameters to be used with Babylons include syntax to iterate over an array (eg. {lights: 10})

***

### maxSimultaneousLights?

> `optional` **maxSimultaneousLights?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L105)

Max number of lights that can be used in the shader.

***

### multiTarget?

> `optional` **multiTarget?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L121)

Is this effect rendering to several color attachments ?

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L93)

Callback that will be called when the shader is compiled.

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L97)

Callback that will be called if an error occurs during shader compilation.

***

### processCodeAfterIncludes?

> `optional` **processCodeAfterIncludes?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L117)

If provided, will be called two times with the vertex and fragment code so that this code can be updated after the #include have been processed

***

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L113)

If provided, will be called two times with the vertex and fragment code so that this code can be updated before it is compiled by the GPU

***

### samplers

> **samplers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L81)

Sampler texture variable names that will be set in the shader.

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L125)

The language the shader is written in (default: GLSL)

***

### transformFeedbackVaryings?

> `optional` **transformFeedbackVaryings?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L109)

See https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings

***

### uniformBuffersNames?

> `optional` **uniformBuffersNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L77)

Uniform buffer variable names that will be set in the shader.

***

### uniformsNames

> **uniformsNames**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L73)

Uniform variable names that will be set in the shader.
