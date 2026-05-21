[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTorus

# Function: CreateTorus()

> **CreateTorus**(`name`, `options?`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/torusBuilder.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/torusBuilder.ts#L99)

Creates a torus mesh
* The parameter `diameter` sets the diameter size (float) of the torus (default 1)
* The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
* The parameter `tessellation` sets the number of torus sides (positive integer, default 16)
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

## Parameters

### name

`string`

defines the name of the mesh

### options?

defines the options used to create the mesh

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### diameter?

`number`

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### sideOrientation?

`number`

#### tessellation?

`number`

#### thickness?

`number`

#### updatable?

`boolean`

### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

## Returns

[`Mesh`](../classes/Mesh.md)

the torus mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#torus
