[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LatheBuilder

# ~~Variable: LatheBuilder~~

> `const` **LatheBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/latheBuilder.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/latheBuilder.pure.ts#L96)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreateLathe~~

> **CreateLathe**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates lathe mesh.
The lathe is a shape with a symmetry axis : a 2D model shape is rotated around this axis to design the lathe
* The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
* The parameter `radius` (positive float, default 1) is the radius value of the lathe
* The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
* The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
* The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
* The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
* The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### arc?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### cap?

`number`

###### clip?

`number`

###### closed?

`boolean`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### invertUV?

`boolean`

###### radius?

`number`

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### tessellation?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the lathe mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#lathe

## Deprecated

use the function direction from the module
