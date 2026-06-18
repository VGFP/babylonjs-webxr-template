[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / QueueNewFrame

# Function: QueueNewFrame()

> **QueueNewFrame**(`func`, `requester?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L76)

Queue a new function into the requested animation frame pool (ie. this function will be executed by the browser (or the javascript engine) for the next frame)

## Parameters

### func

() => `void`

the function to be called

### requester?

`any`

the object that will request the next frame. Falls back to window.

## Returns

`number`

frame number
