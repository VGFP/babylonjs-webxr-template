[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / loadAssetContainerAsync

# ~~Function: loadAssetContainerAsync()~~

> **loadAssetContainerAsync**(`source`, `scene`, `options?`): `Promise`\<[`AssetContainer`](../classes/AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L1209)

Load a scene into an asset container

## Parameters

### source

`SceneSource`

a string that defines the name of the scene file, or starts with "data:" following by the stringified version of the scene, or a File object, or an ArrayBufferView

### scene

[`Scene`](../classes/Scene.md)

is the instance of Scene to append to

### options?

[`LoadAssetContainerOptions`](../interfaces/LoadAssetContainerOptions.md)

an object that configures aspects of how the scene is loaded

## Returns

`Promise`\<[`AssetContainer`](../classes/AssetContainer.md)\>

The loaded asset container

## Deprecated

Please use [LoadAssetContainerAsync](LoadAssetContainerAsync-1.md) instead.
