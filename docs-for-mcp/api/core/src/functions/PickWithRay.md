[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PickWithRay

# Function: PickWithRay()

> **PickWithRay**(`scene`, `ray`, `predicate?`, `fastCheck?`, `trianglePredicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:1144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/ray.core.ts#L1144)

Use the given ray to pick a mesh in the scene. A mesh triangle can be picked both from its front and back sides,
irrespective of orientation.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the scene to use for the picking

### ray

[`Ray`](../classes/Ray.md)

The ray to use to pick meshes

### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must have isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)\>

a PickingInfo
