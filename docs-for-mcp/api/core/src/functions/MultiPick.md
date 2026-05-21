[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MultiPick

# Function: MultiPick()

> **MultiPick**(`scene`, `x`, `y`, `predicate?`, `camera?`, `trianglePredicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:1182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/ray.core.ts#L1182)

Launch a ray to try to pick a mesh in the scene. A mesh triangle can be picked both from its front and back sides,
irrespective of orientation.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the scene to use for the picking

### x

`number`

X position on screen

### y

`number`

Y position on screen

### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes and instances. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

### camera?

[`Camera`](../classes/Camera.md)

camera to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used

### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)[]\>

an array of PickingInfo
