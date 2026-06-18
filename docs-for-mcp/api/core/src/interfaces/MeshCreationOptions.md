[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshCreationOptions

# Interface: MeshCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L249)

Options used to create a mesh

## Extends

- [`MeshCloneOptions`](MeshCloneOptions.md)

## Properties

### clonePhysicsImpostor?

> `optional` **clonePhysicsImpostor?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L239)

Includes cloning mesh physics impostor (default: true)

#### Inherited from

[`MeshCloneOptions`](MeshCloneOptions.md).[`clonePhysicsImpostor`](MeshCloneOptions.md#clonephysicsimpostor)

***

### cloneThinInstances?

> `optional` **cloneThinInstances?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L242)

Includes cloning thin instances (default: false)

#### Inherited from

[`MeshCloneOptions`](MeshCloneOptions.md).[`cloneThinInstances`](MeshCloneOptions.md#clonethininstances)

***

### doNotCloneChildren?

> `optional` **doNotCloneChildren?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L236)

Skips cloning child meshes of source (default: false. When false, achieved by calling a clone(), also passing False. This will make creation of children, recursive.

#### Inherited from

[`MeshCloneOptions`](MeshCloneOptions.md).[`doNotCloneChildren`](MeshCloneOptions.md#donotclonechildren)

***

### parent?

> `optional` **parent?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L233)

The parent of the mesh, if it has one

#### Inherited from

[`MeshCloneOptions`](MeshCloneOptions.md).[`parent`](MeshCloneOptions.md#parent)

***

### source?

> `optional` **source?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](../classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L251)

An optional Mesh from which the new mesh will be cloned from (geometry will be shared)
