[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FindMainObjectRenderer

# Function: FindMainObjectRenderer()

> **FindMainObjectRenderer**(`frameGraph`): [`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraphObjectRendererTask`](../classes/FrameGraphObjectRendererTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphUtils.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphUtils.ts#L23)

Looks for the main object renderer task in the frame graph.
By default, this is the object/geometry renderer task with isMainObjectRenderer set to true.
If no such task, we return the last object/geometry renderer task that has an object list with meshes (or null if none found).

## Parameters

### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

The frame graph to search in

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraphObjectRendererTask`](../classes/FrameGraphObjectRendererTask.md)\>

The main object renderer of the frame graph, or null if not found
