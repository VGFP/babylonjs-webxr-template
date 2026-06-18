[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadSceneAsync

# Function: LoadSceneAsync()

> **LoadSceneAsync**(`source`, `engine`, `options?`): `Promise`\<[`Scene`](../classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1049](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L1049)

Load a scene

## Parameters

### source

`SceneSource`

a string that defines the name of the scene file, or starts with "data:" following by the stringified version of the scene, or a File object, or an ArrayBufferView

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

is the instance of BABYLON.Engine to use to create the scene

### options?

[`LoadOptions`](../interfaces/LoadOptions.md)

an object that configures aspects of how the scene is loaded

## Returns

`Promise`\<[`Scene`](../classes/Scene.md)\>

The loaded scene
