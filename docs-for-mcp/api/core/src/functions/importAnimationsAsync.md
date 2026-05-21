[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / importAnimationsAsync

# ~~Function: importAnimationsAsync()~~

> **importAnimationsAsync**(`source`, `scene`, `options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1536](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1536)

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
