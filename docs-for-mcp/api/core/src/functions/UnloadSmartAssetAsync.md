[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UnloadSmartAssetAsync

# Function: UnloadSmartAssetAsync()

> **UnloadSmartAssetAsync**(`scene`, `key`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L362)

Unloads a loaded asset while keeping the key registered.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose smart asset to unload.

### key

`string`

The key to unload.

## Returns

`Promise`\<`void`\>

A promise that resolves once the asset has been unloaded.
