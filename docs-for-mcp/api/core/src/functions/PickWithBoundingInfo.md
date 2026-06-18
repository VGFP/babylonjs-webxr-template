[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PickWithBoundingInfo

# Function: PickWithBoundingInfo()

> **PickWithBoundingInfo**(`scene`, `x`, `y`, `predicate?`, `fastCheck?`, `camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:1068](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/ray.core.ts#L1068)

Launch a ray to try to pick a mesh in the scene using only bounding information of the main mesh (not using submeshes)

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

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)\>

a PickingInfo (Please note that some info will not be set like distance, bv, bu and everything that cannot be capture by only using bounding infos)
