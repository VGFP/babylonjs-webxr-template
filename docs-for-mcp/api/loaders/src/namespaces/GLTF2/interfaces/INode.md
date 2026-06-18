[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / INode

# Interface: INode

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L178)

Loader interface with additional members.

## Extends

- `INode`.[`IArrayItem`](IArrayItem.md)

## Properties

### camera?

> `optional` **camera?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:726](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L726)

The index of the camera referenced by this node

#### Inherited from

`GLTF2.INode.camera`

***

### children?

> `optional` **children?**: `number`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:730](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L730)

The indices of this node's children

#### Inherited from

`GLTF2.INode.children`

***

### extensions?

> `optional` **extensions?**: `object`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.INode.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.INode.extras`

***

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L20)

The index of this item in the array.

#### Inherited from

[`IArrayItem`](IArrayItem.md).[`index`](IArrayItem.md#index)

***

### matrix?

> `optional` **matrix?**: `number`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L738)

A floating-point 4x4 transformation matrix stored in column-major order

#### Inherited from

`GLTF2.INode.matrix`

***

### mesh?

> `optional` **mesh?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:742](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L742)

The index of the mesh in this node

#### Inherited from

`GLTF2.INode.mesh`

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L298)

The user-defined name of this object

#### Inherited from

`GLTF2.INode.name`

***

### rotation?

> `optional` **rotation?**: `number`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L746)

The node's unit quaternion rotation in the order (x, y, z, w), where w is the scalar

#### Inherited from

`GLTF2.INode.rotation`

***

### scale?

> `optional` **scale?**: `number`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L750)

The node's non-uniform scale, given as the scaling factors along the x, y, and z axes

#### Inherited from

`GLTF2.INode.scale`

***

### skin?

> `optional` **skin?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:734](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L734)

The index of the skin referenced by this node

#### Inherited from

`GLTF2.INode.skin`

***

### translation?

> `optional` **translation?**: `number`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L754)

The node's translation along the x, y, and z axes

#### Inherited from

`GLTF2.INode.translation`

***

### weights?

> `optional` **weights?**: `number`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L758)

The weights of the instantiated Morph Target. Number of elements must match number of Morph Targets of used mesh

#### Inherited from

`GLTF2.INode.weights`
