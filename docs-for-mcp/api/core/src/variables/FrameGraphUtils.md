[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphUtils

# Variable: FrameGraphUtils

> `const` **FrameGraphUtils**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphUtils.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphUtils.ts#L64)

Class used to host frame graph specific utilities

## Type Declaration

### CreateUtilityLayerRenderer

> **CreateUtilityLayerRenderer**: (`frameFraph`, `handleEvents`) => [`UtilityLayerRenderer`](../classes/UtilityLayerRenderer.md)

Creates a utility layer renderer compatible with the given frame graph.

Creates a utility layer renderer compatible with the given frame graph.

#### Parameters

##### frameFraph

[`FrameGraph`](../classes/FrameGraph.md)

The frame graph to create the utility layer renderer for

##### handleEvents?

`boolean` = `true`

True if the utility layer renderer should handle events, false otherwise (default is true)

#### Returns

[`UtilityLayerRenderer`](../classes/UtilityLayerRenderer.md)

The created utility layer renderer

#### Param

**frameFraph**

The frame graph to create the utility layer renderer for

#### Param

**handleEvents**

True if the utility layer renderer should handle events, false otherwise

#### Returns

The created utility layer renderer

### FindMainCamera

> **FindMainCamera**: (`frameGraph`) => [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

Looks for the main camera used by the frame graph.
We assume that the camera used by the the last rendering task in the graph is the main camera.

Looks for the main camera used by the frame graph.
By default, this is the camera used by the main object renderer task.
If no such task, we try to find a camera in either a geometry renderer or a utility layer renderer tasks.

#### Parameters

##### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

The frame graph to search in

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

The main camera used by the frame graph, or null if not found

#### Param

**frameGraph**

The frame graph to search in

#### Returns

The main camera used by the frame graph, or null if not found

### FindMainObjectRenderer

> **FindMainObjectRenderer**: (`frameGraph`) => [`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraphObjectRendererTask`](../classes/FrameGraphObjectRendererTask.md)\>

Looks for the main object renderer task in the frame graph.
We assume that the last object renderer task that has an object list with meshes is the main object renderer.

Looks for the main object renderer task in the frame graph.
By default, this is the object/geometry renderer task with isMainObjectRenderer set to true.
If no such task, we return the last object/geometry renderer task that has an object list with meshes (or null if none found).

#### Parameters

##### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

The frame graph to search in

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraphObjectRendererTask`](../classes/FrameGraphObjectRendererTask.md)\>

The main object renderer of the frame graph, or null if not found

#### Param

**frameGraph**

The frame graph to search in

#### Returns

The main object renderer of the frame graph, or null if not found
