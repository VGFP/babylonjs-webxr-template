[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MultiPickWithRay

# Function: MultiPickWithRay()

> **MultiPickWithRay**(`scene`, `ray`, `predicate?`, `trianglePredicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:1194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/ray.core.ts#L1194)

Launch a ray to try to pick a mesh in the scene

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the scene to use for the picking

### ray

[`Ray`](../classes/Ray.md)

Ray to use

### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes and instances. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)[]\>

an array of PickingInfo
