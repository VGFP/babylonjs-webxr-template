[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateSkeletonFromTransformNodeHierarchy

# Function: CreateSkeletonFromTransformNodeHierarchy()

> **CreateSkeletonFromTransformNodeHierarchy**(`rootNode`, `scene`, `options?`): [`Skeleton`](../classes/Skeleton.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.functions.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/skeleton.functions.ts#L26)

Creates a skeleton from a hierarchy of transform nodes by converting each node into a bone.
Each transform node in the hierarchy will be linked to its corresponding bone, allowing the skeleton
to be driven by the transform node transformations.

## Parameters

### rootNode

[`TransformNode`](../classes/TransformNode.md)

The root transform node of the hierarchy to convert into a skeleton

### scene

[`Scene`](../classes/Scene.md)

The scene in which to create the skeleton

### options?

Optional parameters for skeleton creation
   - name: The name for the created skeleton (defaults to rootNode.name + "_skeleton")
   - boneMeshSize: The diameter of the sphere mesh created for each bone (defaults to 1, only used if createMesh is true)
   - createMesh: If true, creates a mesh with spheres at each bone location for visualization purposes.
      The mesh will be parented to the rootNode's parent and returned through options.mesh
   - mesh: An existing mesh to attach the skeleton to. If provided, the skeleton will be assigned to this mesh

#### boneMeshSize?

`number`

#### createMesh?

`boolean`

#### mesh?

[`Mesh`](../classes/Mesh.md)

#### name?

`string`

## Returns

[`Skeleton`](../classes/Skeleton.md)

A new skeleton with bones corresponding to the transform node hierarchy

## Remarks

- Only transform nodes with a rotationQuaternion property will be converted into bones
