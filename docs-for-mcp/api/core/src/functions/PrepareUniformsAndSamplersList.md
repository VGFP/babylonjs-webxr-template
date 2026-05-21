[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareUniformsAndSamplersList

# Function: PrepareUniformsAndSamplersList()

> **PrepareUniformsAndSamplersList**(`uniformsListOrOptions`, `samplersList?`, `defines?`, `maxSimultaneousLights?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:1499](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L1499)

Prepares the uniforms and samplers list to be used in the effect

## Parameters

### uniformsListOrOptions

`string`[] \| [`IEffectCreationOptions`](../interfaces/IEffectCreationOptions.md)

The uniform names to prepare or an EffectCreationOptions containing the list and extra information

### samplersList?

`string`[]

The sampler list

### defines?

`any`

The defines helping in the list generation

### maxSimultaneousLights?

`number` = `4`

The maximum number of simultaneous light allowed in the effect

## Returns

`void`
