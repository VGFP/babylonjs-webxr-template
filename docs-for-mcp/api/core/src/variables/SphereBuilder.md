[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SphereBuilder

# ~~Variable: SphereBuilder~~

> `const` **SphereBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/sphereBuilder.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/sphereBuilder.pure.ts#L170)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreateSphere~~

> **CreateSphere**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a sphere mesh
* The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
* You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
* The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
* You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
* You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### arc?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### diameter?

`number`

###### diameterX?

`number`

###### diameterY?

`number`

###### diameterZ?

`number`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### segments?

`number`

###### sideOrientation?

`number`

###### slice?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the sphere mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#sphere

## Deprecated

use CreateSphere directly
