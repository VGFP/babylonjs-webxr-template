[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectWrapperCustomShaderCodeProcessing

# Type Alias: EffectWrapperCustomShaderCodeProcessing

> **EffectWrapperCustomShaderCodeProcessing** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L201)

Allows for custom processing of the shader code used by an effect wrapper

## Properties

### bindCustomBindings?

> `optional` **bindCustomBindings?**: (`postProcessName`, `effect`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L217)

If provided, will be called when binding inputs to the shader code to allow the user to add custom bindings

#### Parameters

##### postProcessName

`string`

##### effect

[`Effect`](../classes/Effect.md)

#### Returns

`void`

***

### defineCustomBindings?

> `optional` **defineCustomBindings?**: (`postProcessName`, `defines`, `uniforms`, `samplers`) => [`Nullable`](Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L213)

If provided, will be called before creating the effect to collect additional custom bindings (defines, uniforms, samplers)

#### Parameters

##### postProcessName

`string`

##### defines

[`Nullable`](Nullable.md)\<`string`\>

##### uniforms

`string`[]

##### samplers

`string`[]

#### Returns

[`Nullable`](Nullable.md)\<`string`\>

***

### processCodeAfterIncludes?

> `optional` **processCodeAfterIncludes?**: (`postProcessName`, `shaderType`, `code`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L205)

If provided, will be called two times with the vertex and fragment code so that this code can be updated after the #include have been processed

#### Parameters

##### postProcessName

`string`

##### shaderType

`string`

##### code

`string`

#### Returns

`string`

***

### processFinalCode?

> `optional` **processFinalCode?**: (`postProcessName`, `shaderType`, `code`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effectRenderer.pure.ts#L209)

If provided, will be called two times with the vertex and fragment code so that this code can be updated before it is compiled by the GPU

#### Parameters

##### postProcessName

`string`

##### shaderType

`string`

##### code

`string`

#### Returns

`string`
