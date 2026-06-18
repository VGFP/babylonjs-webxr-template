[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAllSmartAssetsAsync

# Function: LoadAllSmartAssetsAsync()

> **LoadAllSmartAssetsAsync**(`scene`): `Promise`\<[`AssetContainer`](../classes/AssetContainer.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L267)

Loads all registered assets concurrently.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose registered assets to load.

## Returns

`Promise`\<[`AssetContainer`](../classes/AssetContainer.md)[]\>

A promise resolving to loaded scene-file containers.
