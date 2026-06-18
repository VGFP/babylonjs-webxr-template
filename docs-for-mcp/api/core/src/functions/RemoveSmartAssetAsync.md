[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RemoveSmartAssetAsync

# Function: RemoveSmartAssetAsync()

> **RemoveSmartAssetAsync**(`scene`, `key`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L194)

Removes a key from the registry. If the asset is loaded, it is unloaded first.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene that owns the smart asset.

### key

`string`

The key to remove.

## Returns

`Promise`\<`void`\>

A promise that resolves when the asset has been unloaded and removed.
