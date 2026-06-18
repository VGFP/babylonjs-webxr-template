[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareUniformsAndSamplersList

# Function: PrepareUniformsAndSamplersList()

> **PrepareUniformsAndSamplersList**(`uniformsListOrOptions`, `samplersList?`, `defines?`, `maxSimultaneousLights?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:1560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L1560)

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
