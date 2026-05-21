[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectWrapperCreationOptions

# Interface: EffectWrapperCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L224)

Options to create an EffectWrapper

## Extended by

- [`ThinCircleOfConfusionPostProcessOptions`](ThinCircleOfConfusionPostProcessOptions.md)
- [`ThinImageProcessingPostProcessOptions`](ThinImageProcessingPostProcessOptions.md)
- [`ThinTonemapPostProcessOptions`](ThinTonemapPostProcessOptions.md)

## Properties

### allowEmptySourceTexture?

> `optional` **allowEmptySourceTexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L309)

Sets this property to true if the fragment shader doesn't use a textureSampler texture (default: false).

***

### attributeNames?

> `optional` **attributeNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L248)

Attributes to use in the shader (default: ["position"])

***

### blockCompilation?

> `optional` **blockCompilation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L281)

If the shader should not be compiled immediately. (default: false)

***

### defines?

> `optional` **defines?**: [`Nullable`](../type-aliases/Nullable.md)\<`string` \| `string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L272)

Defines to use in the shader

***

### engine?

> `optional` **engine?**: [`AbstractEngine`](../classes/AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L228)

Engine to use to create the effect

***

### extraInitializations?

> `optional` **extraInitializations?**: (`useWebGPU`, `list`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L297)

Defines additional code to call to prepare the shader code

#### Parameters

##### useWebGPU

`boolean`

##### list

`Promise`\<`any`\>[]

#### Returns

`void`

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L301)

Additional async code to run before preparing the effect

#### Returns

`Promise`\<`void`\>

***

### fragmentShader?

> `optional` **fragmentShader?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L232)

Fragment shader for the effect

***

### indexParameters?

> `optional` **indexParameters?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L277)

The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined)
See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L289)

The friendly name of the effect (default: "effectWrapper")

***

### onCompiled?

> `optional` **onCompiled?**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L285)

Callback when effect is compiled

***

### samplerNames?

> `optional` **samplerNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L260)

Texture sampler names to use in the shader

***

### samplers?

> `optional` **samplers?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L264)

Alias for samplerNames. Note that if it is provided, it takes precedence over samplerNames.

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L293)

The language the shader is written in (default: GLSL)

***

### uniformBuffers?

> `optional` **uniformBuffers?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L268)

The list of uniform buffers used in the shader (if any)

***

### uniformNames?

> `optional` **uniformNames?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L252)

Uniforms to use in the shader

***

### uniforms?

> `optional` **uniforms?**: [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L256)

Alias for uniformNames. Note that if it is provided, it takes precedence over uniformNames.

***

### useAsPostProcess?

> `optional` **useAsPostProcess?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L305)

If the effect should be used as a post process (default: false). If true, the effect will be created with a "scale" uniform and a "textureSampler" sampler

***

### useShaderStore?

> `optional` **useShaderStore?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L236)

Use the shader store instead of direct source code

***

### vertexShader?

> `optional` **vertexShader?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L240)

Vertex shader for the effect (default: "postprocess")

***

### vertexUrl?

> `optional` **vertexUrl?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L244)

Alias for vertexShader
