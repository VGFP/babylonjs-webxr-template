[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshExploder

# Class: MeshExploder

Defined in: [babylonjs-source/packages/dev/core/src/Misc/meshExploder.ts:7](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/meshExploder.ts#L7)

Class used to explode meshes (ie. to have a center and move them away from that center to better see the overall organization)

## Constructors

### Constructor

> **new MeshExploder**(`meshes`, `centerMesh?`): `MeshExploder`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/meshExploder.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/meshExploder.ts#L21)

Explodes meshes from a center mesh.

#### Parameters

##### meshes

[`Mesh`](Mesh.md)[]

The meshes to explode.

##### centerMesh?

[`Mesh`](Mesh.md)

The mesh to be center of explosion.

#### Returns

`MeshExploder`

## Methods

### explode()

> **explode**(`direction?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/meshExploder.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/meshExploder.ts#L99)

Explodes meshes giving a specific direction

#### Parameters

##### direction?

`number` = `1.0`

Number to multiply distance of each mesh's origin from center. Use a negative number to implode, or zero to reset.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/meshExploder.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/meshExploder.ts#L81)

Get class name

#### Returns

`string`

"MeshExploder"

***

### getMeshes()

> **getMeshes**(): [`Mesh`](Mesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/meshExploder.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/meshExploder.ts#L89)

"Exploded meshes"

#### Returns

[`Mesh`](Mesh.md)[]

Array of meshes with the centerMesh at index 0.
