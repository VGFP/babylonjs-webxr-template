[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshCloneOptions

# Interface: MeshCloneOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L231)

Options used to clone a mesh

## Extended by

- [`MeshCreationOptions`](MeshCreationOptions.md)

## Properties

### clonePhysicsImpostor?

> `optional` **clonePhysicsImpostor?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L239)

Includes cloning mesh physics impostor (default: true)

***

### cloneThinInstances?

> `optional` **cloneThinInstances?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L242)

Includes cloning thin instances (default: false)

***

### doNotCloneChildren?

> `optional` **doNotCloneChildren?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L236)

Skips cloning child meshes of source (default: false. When false, achieved by calling a clone(), also passing False. This will make creation of children, recursive.

***

### parent?

> `optional` **parent?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L233)

The parent of the mesh, if it has one
