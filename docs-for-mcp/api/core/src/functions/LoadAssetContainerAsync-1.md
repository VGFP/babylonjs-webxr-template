[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAssetContainerAsync

# Function: LoadAssetContainerAsync()

> **LoadAssetContainerAsync**(`source`, `scene`, `options?`): `Promise`\<[`AssetContainer`](../classes/AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1382)

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
