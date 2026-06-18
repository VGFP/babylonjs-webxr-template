[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PolyhedronBuilder

# ~~Variable: PolyhedronBuilder~~

> `const` **PolyhedronBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/polyhedronBuilder.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/polyhedronBuilder.pure.ts#L619)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreatePolyhedron~~

> **CreatePolyhedron**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a polyhedron mesh
* The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial to choose the wanted type
* The parameter `size` (positive float, default 1) sets the polygon size
* You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
* You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overrides the parameter `type`
* A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
* You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
* To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
* The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
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

###### custom?

`any`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### flat?

`boolean`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### sideOrientation?

`number`

###### size?

`number`

###### sizeX?

`number`

###### sizeY?

`number`

###### sizeZ?

`number`

###### type?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the polyhedron mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra

## Deprecated

use the function directly from the module
