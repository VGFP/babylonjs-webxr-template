[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAssetContainerFromSerializedScene

# Function: LoadAssetContainerFromSerializedScene()

> **LoadAssetContainerFromSerializedScene**(`scene`, `serializedScene`, `rootUrl`): [`AssetContainer`](../classes/AssetContainer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Loading/Plugins/babylonFileLoader.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/Plugins/babylonFileLoader.ts#L172)

**`Experimental`**

Loads an AssetContainer from a serialized Babylon scene.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene to load the asset container into.

### serializedScene

`string` \| `object`

The serialized scene data. This can be either a JSON string, or an object (e.g. from a call to JSON.parse).

### rootUrl

`string`

The root URL for loading assets.

## Returns

[`AssetContainer`](../classes/AssetContainer.md)

The loaded AssetContainer.
