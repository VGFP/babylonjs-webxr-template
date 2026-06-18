[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ImportMeshAsync

# Function: ImportMeshAsync()

> **ImportMeshAsync**(`source`, `scene`, `options?`): `Promise`\<[`ISceneLoaderAsyncResult`](../interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:964](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L964)

Import meshes into a scene

## Parameters

### source

`SceneSource`

a string that defines the name of the scene file, or starts with "data:" following by the stringified version of the scene, or a File object, or an ArrayBufferView

### scene

[`Scene`](../classes/Scene.md)

the instance of BABYLON.Scene to append to

### options?

[`ImportMeshOptions`](../interfaces/ImportMeshOptions.md)

an object that configures aspects of how the scene is loaded

## Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../interfaces/ISceneLoaderAsyncResult.md)\>

The loaded list of imported meshes, particle systems, skeletons, and animation groups
