[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PolygonBuilder

# ~~Variable: PolygonBuilder~~

> `const` **PolygonBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/polygonBuilder.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/polygonBuilder.ts#L229)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreatePolygon~~

> **CreatePolygon**: (`name`, `options`, `scene`, `earcutInjection`) => [`Mesh`](../classes/Mesh.md)

Creates a polygon mesh
The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
* The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
* You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
* Remember you can only change the shape positions, not their number when updating a polygon

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### holes?

[`Vector3`](../classes/Vector3.md)[][]

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### smoothingThreshold?

`number`

###### updatable?

`boolean`

###### wrap?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

##### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

#### Returns

[`Mesh`](../classes/Mesh.md)

the polygon mesh

### ~~ExtrudePolygon~~

> **ExtrudePolygon**: (`name`, `options`, `scene`, `earcutInjection`) => [`Mesh`](../classes/Mesh.md)

Creates an extruded polygon mesh, with depth in the Y direction.
* You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### holes?

[`Vector3`](../classes/Vector3.md)[][]

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### updatable?

`boolean`

###### wrap?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

##### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

#### Returns

[`Mesh`](../classes/Mesh.md)

the polygon mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace

## Deprecated

use the functions directly from the module
