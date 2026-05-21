[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadSceneAsync

# Function: LoadSceneAsync()

> **LoadSceneAsync**(`source`, `engine`, `options?`): `Promise`\<[`Scene`](../classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1054](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1054)

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
