[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / importAnimationsAsync

# ~~Function: importAnimationsAsync()~~

> **importAnimationsAsync**(`source`, `scene`, `options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L1302)

Import animations from a file into a scene

## Parameters

### source

`SceneSource`

a string that defines the name of the scene file, or starts with "data:" following by the stringified version of the scene, or a File object, or an ArrayBufferView

### scene

[`Scene`](../classes/Scene.md)

is the instance of BABYLON.Scene to append to

### options?

[`ImportAnimationsOptions`](../interfaces/ImportAnimationsOptions.md)

an object that configures aspects of how the scene is loaded

## Returns

`Promise`\<`void`\>

A promise that resolves when the animations are imported

## Deprecated

Please use [ImportAnimationsAsync](ImportAnimationsAsync-1.md) instead.
