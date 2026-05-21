[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReloadSmartAssetAsync

# Function: ReloadSmartAssetAsync()

> **ReloadSmartAssetAsync**(`scene`, `key`): `Promise`\<[`BaseTexture`](../classes/BaseTexture.md) \| [`AssetContainer`](../classes/AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L389)

Unloads and re-loads an asset.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose smart asset to reload.

### key

`string`

The key to reload.

## Returns

`Promise`\<[`BaseTexture`](../classes/BaseTexture.md) \| [`AssetContainer`](../classes/AssetContainer.md)\>

A promise resolving to the newly loaded AssetContainer or BaseTexture.
