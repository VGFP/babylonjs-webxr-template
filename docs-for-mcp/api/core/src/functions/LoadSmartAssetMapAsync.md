[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadSmartAssetMapAsync

# Function: LoadSmartAssetMapAsync()

> **LoadSmartAssetMapAsync**(`scene`, `source`, `rootUrl?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L475)

Loads an asset map from a URL, File, or pre-parsed JSON object.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene to load assets into.

### source

`string` \| `File` \| [`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

A URL string, File object, or pre-parsed ISerializedSmartAssetMap.

### rootUrl?

`string`

Optional root URL for resolving relative asset paths.

## Returns

`Promise`\<`void`\>

A promise that resolves after the map has been loaded and all registered assets have been attempted.
