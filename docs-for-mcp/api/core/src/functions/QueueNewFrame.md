[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / QueueNewFrame

# Function: QueueNewFrame()

> **QueueNewFrame**(`func`, `requester?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L73)

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
