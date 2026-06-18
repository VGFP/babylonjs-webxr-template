[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreatePolygon

# Function: CreatePolygon()

> **CreatePolygon**(`name`, `options`, `scene?`, `earcutInjection?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/polygonBuilder.pure.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/polygonBuilder.pure.ts#L149)

Creates a polygon mesh
The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
* The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
* You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
* Remember you can only change the shape positions, not their number when updating a polygon

## Parameters

### name

`string`

defines the name of the mesh

### options

defines the options used to create the mesh

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### depth?

`number`

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### holes?

[`Vector3`](../classes/Vector3.md)[][]

#### shape

[`Vector3`](../classes/Vector3.md)[]

#### sideOrientation?

`number`

#### smoothingThreshold?

`number`

#### updatable?

`boolean`

#### wrap?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

## Returns

[`Mesh`](../classes/Mesh.md)

the polygon mesh
