[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAssetContainerFromSerializedScene

# Function: LoadAssetContainerFromSerializedScene()

> **LoadAssetContainerFromSerializedScene**(`scene`, `serializedScene`, `rootUrl`): [`AssetContainer`](../classes/AssetContainer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts#L142)

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
