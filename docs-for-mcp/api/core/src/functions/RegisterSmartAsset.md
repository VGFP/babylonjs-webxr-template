[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RegisterSmartAsset

# Function: RegisterSmartAsset()

> **RegisterSmartAsset**(`scene`, `key`, `url`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L170)

Registers a smart asset entry mapping a key to a URL.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose smart asset registry to update.

### key

`string`

Unique string identifier for this asset.

### url

`string`

URL or path to the asset file.

### options?

`SmartAssetRegistrationOptions`

Optional loader hints and metadata for this asset.

## Returns

`void`
