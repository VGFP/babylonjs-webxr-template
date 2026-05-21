[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Pick

# Function: Pick()

> **Pick**(`scene`, `x`, `y`, `predicate?`, `fastCheck?`, `camera?`, `trianglePredicate?`, `_enableDistantPicking?`): [`PickingInfo`](../classes/PickingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:1103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/ray.core.ts#L1103)

Launch a ray to try to pick a mesh in the scene

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the scene to use for the picking

### x

`number`

position on screen

### y

`number`

position on screen

### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used

### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

### \_enableDistantPicking?

`boolean` = `false`

defines if picking should handle large values for mesh position/scaling (false by default)

## Returns

[`PickingInfo`](../classes/PickingInfo.md)

a PickingInfo
