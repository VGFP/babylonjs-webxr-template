[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FindMainCamera

# Function: FindMainCamera()

> **FindMainCamera**(`frameGraph`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphUtils.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphUtils.ts#L12)

Looks for the main camera used by the frame graph.
By default, this is the camera used by the main object renderer task.
If no such task, we try to find a camera in either a geometry renderer or a utility layer renderer tasks.

## Parameters

### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

The frame graph to search in

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

The main camera used by the frame graph, or null if not found
