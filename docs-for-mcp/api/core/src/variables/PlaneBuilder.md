[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PlaneBuilder

# ~~Variable: PlaneBuilder~~

> `const` **PlaneBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/planeBuilder.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/planeBuilder.ts#L113)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreatePlane~~

> **CreatePlane**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a plane mesh
* The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
* You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
* The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### height?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### sourcePlane?

[`Plane`](../classes/Plane.md)

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the plane mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#plane

## Deprecated

use the function directly from the module
