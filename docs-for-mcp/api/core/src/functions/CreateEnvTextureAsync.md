[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateEnvTextureAsync

# Function: CreateEnvTextureAsync()

> **CreateEnvTextureAsync**(`texture`, `options?`): `Promise`\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L250)

Creates an environment texture from a loaded cube texture.

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

defines the cube texture to convert in env file

### options?

[`CreateEnvTextureOptions`](../interfaces/CreateEnvTextureOptions.md) = `{}`

options for the conversion process

## Returns

`Promise`\<`ArrayBuffer`\>

a promise containing the environment data if successful.
