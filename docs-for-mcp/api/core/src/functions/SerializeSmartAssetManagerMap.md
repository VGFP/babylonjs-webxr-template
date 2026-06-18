[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SerializeSmartAssetManagerMap

# Function: SerializeSmartAssetManagerMap()

> **SerializeSmartAssetManagerMap**(`scene`, `baseUrl?`): [`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:452](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L452)

Serializes the registry to a JSON-compatible document.
If a baseUrl is provided, asset URLs are stored relative to it for portability.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose registry to serialize.

### baseUrl?

`string`

Optional base URL for making asset paths relative.

## Returns

[`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

A serialized asset map document.
