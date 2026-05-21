[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadSmartAssetTextureAsync

# Function: LoadSmartAssetTextureAsync()

> **LoadSmartAssetTextureAsync**(`scene`, `key`, `url?`, `options?`): `Promise`\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L299)

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
