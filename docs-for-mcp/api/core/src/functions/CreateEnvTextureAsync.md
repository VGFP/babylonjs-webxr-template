[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateEnvTextureAsync

# Function: CreateEnvTextureAsync()

> **CreateEnvTextureAsync**(`texture`, `options?`): `Promise`\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L249)

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
