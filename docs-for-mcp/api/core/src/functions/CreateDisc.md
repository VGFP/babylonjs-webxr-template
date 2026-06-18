[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateDisc

# Function: CreateDisc()

> **CreateDisc**(`name`, `options?`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/discBuilder.pure.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/discBuilder.pure.ts#L94)

Creates a plane polygonal mesh.  By default, this is a disc
* The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
* The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
* You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

## Parameters

### name

`string`

defines the name of the mesh

### options?

defines the options used to create the mesh

#### arc?

`number`

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### radius?

`number`

#### sideOrientation?

`number`

#### tessellation?

`number`

#### updatable?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`Mesh`](../classes/Mesh.md)

the plane polygonal mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#disc-or-regular-polygon
