[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SerializeSmartAssetManagerMap

# Function: SerializeSmartAssetManagerMap()

> **SerializeSmartAssetManagerMap**(`scene`, `baseUrl?`): [`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L427)

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
