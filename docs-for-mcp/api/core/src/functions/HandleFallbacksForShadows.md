[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HandleFallbacksForShadows

# Function: HandleFallbacksForShadows()

> **HandleFallbacksForShadows**(`defines`, `fallbacks`, `maxSimultaneousLights?`, `rank?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L564)

This helps decreasing rank by rank the shadow quality (0 being the highest rank and quality)

## Parameters

### defines

`any`

The defines to update while falling back

### fallbacks

[`EffectFallbacks`](../classes/EffectFallbacks.md)

The authorized effect fallbacks

### maxSimultaneousLights?

`number` = `4`

The maximum number of lights allowed

### rank?

`number` = `0`

the current rank of the Effect

## Returns

`number`

The newly affected rank
