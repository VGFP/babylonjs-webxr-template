[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetEnvInfo

# Function: GetEnvInfo()

> **GetEnvInfo**(`data`): [`Nullable`](../type-aliases/Nullable.md)\<`EnvironmentTextureInfoV2`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L191)

Gets the environment info from an env file.

## Parameters

### data

`ArrayBufferView`

The array buffer containing the .env bytes.

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<`EnvironmentTextureInfoV2`\>

the environment file info (the json header) if successfully parsed, normalized to the latest supported version.
