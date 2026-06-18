[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UnloadSmartAssetAsync

# Function: UnloadSmartAssetAsync()

> **UnloadSmartAssetAsync**(`scene`, `key`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L387)

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
