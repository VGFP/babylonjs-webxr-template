[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshCloneOptions

# Interface: MeshCloneOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.ts#L228)

Options used to clone a mesh

## Extended by

- [`MeshCreationOptions`](MeshCreationOptions.md)

## Properties

### clonePhysicsImpostor?

> `optional` **clonePhysicsImpostor?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.ts#L236)

Includes cloning mesh physics impostor (default: true)

***

### cloneThinInstances?

> `optional` **cloneThinInstances?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.ts#L239)

Includes cloning thin instances (default: false)

***

### doNotCloneChildren?

> `optional` **doNotCloneChildren?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.ts#L233)

Skips cloning child meshes of source (default: false. When false, achieved by calling a clone(), also passing False. This will make creation of children, recursive.

***

### parent?

> `optional` **parent?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.ts#L230)

The parent of the mesh, if it has one
