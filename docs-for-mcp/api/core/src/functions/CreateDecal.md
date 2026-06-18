[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateDecal

# Function: CreateDecal()

> **CreateDecal**(`name`, `sourceMesh`, `options`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/decalBuilder.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/decalBuilder.pure.ts#L68)

Creates a decal mesh.
A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
* The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
* The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
* The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
* The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
* The parameter `captureUVS` defines if we need to capture the uvs or compute them
* The parameter `cullBackFaces` defines if the back faces should be removed from the decal mesh
* The parameter `localMode` defines that the computations should be done with the local mesh coordinates instead of the world space coordinates.
*    Use this mode if you want the decal to be parented to the sourceMesh and move/rotate with it.
Note: Meshes with morph targets are not supported!

## Parameters

### name

`string`

defines the name of the mesh

### sourceMesh

[`AbstractMesh`](../classes/AbstractMesh.md)

defines the mesh where the decal must be applied

### options

defines the options used to create the mesh

#### angle?

`number`

#### captureUVS?

`boolean`

#### cullBackFaces?

`boolean`

#### localMode?

`boolean`

#### normal?

[`Vector3`](../classes/Vector3.md)

#### position?

[`Vector3`](../classes/Vector3.md)

#### size?

[`Vector3`](../classes/Vector3.md)

## Returns

[`Mesh`](../classes/Mesh.md)

the decal mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/decals
