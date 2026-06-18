[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadSmartAssetTextureAsync

# Function: LoadSmartAssetTextureAsync()

> **LoadSmartAssetTextureAsync**(`scene`, `key`, `url?`, `options?`): `Promise`\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L313)

Loads a standalone texture by key.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene to load the texture into.

### key

`string`

The key to load.

### url?

`string`

Optional URL. If provided, the key is registered first.

### options?

[`SmartAssetLoadOptions`](../type-aliases/SmartAssetLoadOptions.md)

Optional loader hints and metadata for this asset.

## Returns

`Promise`\<[`BaseTexture`](../classes/BaseTexture.md)\>

A promise resolving to the loaded texture.
