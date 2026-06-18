[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateIcoSphere

# Function: CreateIcoSphere()

> **CreateIcoSphere**(`name`, `options?`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/icoSphereBuilder.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/icoSphereBuilder.pure.ts#L396)

Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
* The parameter `radius` sets the radius size (float) of the icosphere (default 1)
* You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
* The parameter `subdivisions` sets the number of subdivisions (positive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
* The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

## Parameters

### name

`string`

defines the name of the mesh

### options?

defines the options used to create the mesh

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### flat?

`boolean`

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### radius?

`number`

#### radiusX?

`number`

#### radiusY?

`number`

#### radiusZ?

`number`

#### sideOrientation?

`number`

#### subdivisions?

`number`

#### updatable?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`Mesh`](../classes/Mesh.md)

the icosahedron mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra#icosphere
