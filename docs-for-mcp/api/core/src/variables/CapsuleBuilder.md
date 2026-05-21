[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CapsuleBuilder

# ~~Variable: CapsuleBuilder~~

> `const` **CapsuleBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/capsuleBuilder.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/capsuleBuilder.ts#L285)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreateCapsule~~

> **CreateCapsule**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a capsule or a pill mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

[`ICreateCapsuleOptions`](../interfaces/ICreateCapsuleOptions.md) = `...`

The constructors options.

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

The scene the mesh is scoped to.

#### Returns

[`Mesh`](../classes/Mesh.md)

Capsule Mesh

## Deprecated

please use CreateCapsule directly
