[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RemoveSmartAssetAsync

# Function: RemoveSmartAssetAsync()

> **RemoveSmartAssetAsync**(`scene`, `key`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L180)

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
