[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoxBuilder

# ~~Variable: BoxBuilder~~

> `const` **BoxBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/boxBuilder.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/boxBuilder.pure.ts#L272)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreateBox~~

> **CreateBox**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a box mesh
* The parameter `size` sets the size (float) of each box side (default 1)
* You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
* You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
* Please read this tutorial : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
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

###### bottomBaseAt?

`number`

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### height?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### topBaseAt?

`number`

###### updatable?

`boolean`

###### width?

`number`

###### wrap?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the box mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#box

## Deprecated

please use CreateBox directly
