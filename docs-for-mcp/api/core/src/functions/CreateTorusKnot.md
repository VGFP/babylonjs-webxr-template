[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTorusKnot

# Function: CreateTorusKnot()

> **CreateTorusKnot**(`name`, `options?`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/torusKnotBuilder.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/torusKnotBuilder.pure.ts#L144)

Creates a torus knot mesh
* The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
* The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
* The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
* The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
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

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### p?

`number`

#### q?

`number`

#### radialSegments?

`number`

#### radius?

`number`

#### sideOrientation?

`number`

#### tube?

`number`

#### tubularSegments?

`number`

#### updatable?

`boolean`

### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

## Returns

[`Mesh`](../classes/Mesh.md)

the torus knot mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#torus-knot
