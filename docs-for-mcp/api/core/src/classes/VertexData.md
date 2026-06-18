[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VertexData

# Class: VertexData

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L177)

This class contains the various kinds of data on every vertex of a mesh used in determining its shape and appearance

## Implements

- [`IVertexDataLike`](../interfaces/IVertexDataLike.md)

## Constructors

### Constructor

> **new VertexData**(): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L295)

Creates a new VertexData

#### Returns

`VertexData`

## Properties

### colors

> **colors**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L245)

An array of the r, g, b, a, color of each vertex  [...., r, g, b, a, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`colors`](../interfaces/IVertexDataLike.md#colors)

***

### hasVertexAlpha

> **hasVertexAlpha**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L290)

Gets or sets a value indicating that the mesh must be flagged with hasVertexAlpha = true

***

### indices

> **indices**: [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L270)

An array of i, j, k the three vertex indices required for each triangular facet  [...., i, j, k .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`indices`](../interfaces/IVertexDataLike.md#indices)

***

### materialInfos

> **materialInfos**: [`Nullable`](../type-aliases/Nullable.md)\<[`VertexDataMaterialInfo`](VertexDataMaterialInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L275)

An array defining material association for sub sections of the vertex data

***

### matricesIndices

> **matricesIndices**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L250)

An array containing the list of indices to the array of matrices produced by bones, each vertex have up to 4 indices (8 if the matricesIndicesExtra is set).

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`matricesIndices`](../interfaces/IVertexDataLike.md#matricesindices)

***

### matricesIndicesExtra

> **matricesIndicesExtra**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L260)

An array extending the number of possible indices

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`matricesIndicesExtra`](../interfaces/IVertexDataLike.md#matricesindicesextra)

***

### matricesWeights

> **matricesWeights**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L255)

An array containing the list of weights defining the weight of each indexed matrix in the final computation

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`matricesWeights`](../interfaces/IVertexDataLike.md#matricesweights)

***

### matricesWeightsExtra

> **matricesWeightsExtra**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L265)

An array extending the number of possible weights when the number of indices is extended

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`matricesWeightsExtra`](../interfaces/IVertexDataLike.md#matricesweightsextra)

***

### metadata

> **metadata**: `any` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L285)

Metadata used to store contextual values

***

### normals

> **normals**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L205)

An array of the x, y, z normal vector of each vertex  [...., x, y, z, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`normals`](../interfaces/IVertexDataLike.md#normals)

***

### positions

> **positions**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L200)

An array of the x, y, z position of each vertex  [...., x, y, z, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`positions`](../interfaces/IVertexDataLike.md#positions)

***

### tangents

> **tangents**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L210)

An array of the x, y, z, w tangent vector of each vertex  [...., x, y, z, w, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`tangents`](../interfaces/IVertexDataLike.md#tangents)

***

### uniqueId

> **uniqueId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L280)

Gets the unique ID of this vertex Data

***

### uvs

> **uvs**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L215)

An array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`uvs`](../interfaces/IVertexDataLike.md#uvs)

***

### uvs2

> **uvs2**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L220)

A second array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`uvs2`](../interfaces/IVertexDataLike.md#uvs2)

***

### uvs3

> **uvs3**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L225)

A third array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`uvs3`](../interfaces/IVertexDataLike.md#uvs3)

***

### uvs4

> **uvs4**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L230)

A fourth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`uvs4`](../interfaces/IVertexDataLike.md#uvs4)

***

### uvs5

> **uvs5**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L235)

A fifth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`uvs5`](../interfaces/IVertexDataLike.md#uvs5)

***

### uvs6

> **uvs6**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L240)

A sixth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

#### Implementation of

[`IVertexDataLike`](../interfaces/IVertexDataLike.md).[`uvs6`](../interfaces/IVertexDataLike.md#uvs6)

***

### BACKSIDE

> `readonly` `static` **BACKSIDE**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L185)

Mesh side orientation : usually the internal or back surface

***

### DEFAULTSIDE

> `readonly` `static` **DEFAULTSIDE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L193)

Mesh side orientation : by default, `FRONTSIDE`

***

### DOUBLESIDE

> `readonly` `static` **DOUBLESIDE**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L189)

Mesh side orientation : both internal and external or front and back surfaces

***

### FRONTSIDE

> `readonly` `static` **FRONTSIDE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L181)

Mesh side orientation : usually the external or front surface

## Methods

### applyToGeometry()

> **applyToGeometry**(`geometry`, `updatable?`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L375)

Associates the vertexData to the passed Geometry.
Sets it as updatable or not (default `false`)

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

the geometry the vertexData is applied to

##### updatable?

`boolean`

when used and having the value true allows new data to update the vertexData

#### Returns

`VertexData`

VertexData

***

### applyToMesh()

> **applyToMesh**(`mesh`, `updatable?`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L363)

Associates the vertexData to the passed Mesh.
Sets it as updatable or not (default `false`)

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

the mesh the vertexData is applied to

##### updatable?

`boolean`

when used and having the value true allows new data to update the vertexData

#### Returns

`VertexData`

the VertexData

***

### clone()

> **clone**(): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1345)

Clone the current vertex data

#### Returns

`VertexData`

a copy of the current data

***

### merge()

> **merge**(`others`, `use32BitsIndices?`, `forceCloneIndices?`, `mergeMaterialIds?`, `enableCompletion?`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:767](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L767)

Merges the passed VertexData into the current one

#### Parameters

##### others

`VertexData` \| `VertexData`[]

the VertexData to be merged into the current one

##### use32BitsIndices?

`boolean` = `false`

defines a boolean indicating if indices must be store in a 32 bits array

##### forceCloneIndices?

`boolean` = `false`

defines a boolean indicating if indices are forced to be cloned

##### mergeMaterialIds?

`boolean` = `false`

defines a boolean indicating if we need to merge the material infos

##### enableCompletion?

`boolean` = `false`

defines a boolean indicating if the vertex data should be completed to be compatible

#### Returns

`VertexData`

the modified VertexData

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1354)

Serializes the VertexData

#### Returns

`any`

a serialized object

***

### set()

> **set**(`data`, `kind`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L305)

Uses the passed data array to set the set the values for the specified kind of data

#### Parameters

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

a linear array of floating numbers

##### kind

`string`

the type of data that is being set, eg positions, colors etc

#### Returns

`void`

***

### splitBasedOnMaterialID()

> **splitBasedOnMaterialID**(): `VertexData`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L672)

Generates an array of vertex data where each vertex data only has one material info

#### Returns

`VertexData`[]

An array of VertexData

***

### transform()

> **transform**(`matrix`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:646](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L646)

Transforms each position and each normal of the vertexData according to the passed Matrix

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

the transforming matrix

#### Returns

`VertexData`

the VertexData

***

### updateGeometry()

> **updateGeometry**(`geometry`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L395)

Updates the associated geometry

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

the geometry to be updated

#### Returns

`VertexData`

VertexData.

***

### updateMesh()

> **updateMesh**(`mesh`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L385)

Updates the associated mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

the mesh to be updated

#### Returns

`VertexData`

VertexData

***

### ComputeNormals()

> `static` **ComputeNormals**(`positions`, `indices`, `normals`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:2035](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L2035)

Compute normals for given positions and indices

#### Parameters

##### positions

`any`

an array of vertex positions, [...., x, y, z, ......]

##### indices

`any`

an array of indices in groups of three for each triangular facet, [...., i, j, k, ......]

##### normals

`any`

an array of vertex normals, [...., x, y, z, ......]

##### options?

an object used to set the following optional parameters for the TorusKnot, optional
* facetNormals : optional array of facet normals (vector3)
* facetPositions : optional array of facet positions (vector3)
* facetPartitioning : optional partitioning array. facetPositions is required for facetPartitioning computation
* ratio : optional partitioning ratio / bounding box, required for facetPartitioning computation
* bInfo : optional bounding info, required for facetPartitioning computation
* bbSize : optional bounding box size data, required for facetPartitioning computation
* subDiv : optional partitioning data about subdivisions on  each axis (int), required for facetPartitioning computation
* useRightHandedSystem: optional boolean to for right handed system computation
* depthSort : optional boolean to enable the facet depth sort computation
* distanceTo : optional Vector3 to compute the facet depth from this location
* depthSortedFacets : optional array of depthSortedFacets to store the facet distances from the reference location

###### bbSize?

[`Vector3`](Vector3.md)

###### bInfo?

`any`

###### depthSort?

`boolean`

###### depthSortedFacets?

`any`

###### distanceTo?

[`Vector3`](Vector3.md)

###### facetNormals?

`any`

###### facetPartitioning?

`any`

###### facetPositions?

`any`

###### ratio?

`number`

###### subDiv?

`any`

###### useRightHandedSystem?

`boolean`

#### Returns

`void`

***

### ~~CreateBox()~~

> `static` **CreateBox**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1584](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1584)

Creates the VertexData for a box

#### Parameters

##### options

an object used to set the following optional parameters for the box, required but can be empty
* size sets the width, height and depth of the box to the value of size, optional default 1
* width sets the width (x direction) of the box, overwrites the width set by size, optional, default size
* height sets the height (y direction) of the box, overwrites the height set by size, optional, default size
* depth sets the depth (z direction) of the box, overwrites the depth set by size, optional, default size
* faceUV an array of 6 Vector4 elements used to set different images to each box side
* faceColors an array of 6 Color3 elements used to set different colors to each box side
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### backUVs?

[`Vector4`](Vector4.md)

###### depth?

`number`

###### faceColors?

[`Color4`](Color4.md)[]

###### faceUV?

[`Vector4`](Vector4.md)[]

###### frontUVs?

[`Vector4`](Vector4.md)

###### height?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### width?

`number`

#### Returns

`VertexData`

the VertexData of the box

#### Deprecated

Please use CreateBoxVertexData from the BoxBuilder file instead

***

### ~~CreateCapsule()~~

> `static` **CreateCapsule**(`options?`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1972](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1972)

Creates the VertexData for a Capsule, inspired from https://github.com/maximeq/three-js-capsule-geometry/blob/master/src/CapsuleBufferGeometry.js

#### Parameters

##### options?

[`ICreateCapsuleOptions`](../interfaces/ICreateCapsuleOptions.md) = `...`

an object used to set the following optional parameters for the capsule, required but can be empty

#### Returns

`VertexData`

the VertexData of the Capsule

#### Deprecated

Please use CreateCapsuleVertexData from the capsuleBuilder file instead

***

### ~~CreateCylinder()~~

> `static` **CreateCylinder**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1714](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1714)

Creates the VertexData for a cylinder, cone or prism

#### Parameters

##### options

an object used to set the following optional parameters for the box, required but can be empty
* height sets the height (y direction) of the cylinder, optional, default 2
* diameterTop sets the diameter of the top of the cone, overwrites diameter,  optional, default diameter
* diameterBottom sets the diameter of the bottom of the cone, overwrites diameter,  optional, default diameter
* diameter sets the diameter of the top and bottom of the cone, optional default 1
* tessellation the number of prism sides, 3 for a triangular prism, optional, default 24
* `subdivisions` the number of rings along the cylinder height, optional, default 1
* arc a number from 0 to 1, to create an unclosed cylinder based on the fraction of the circumference given by the arc value, optional, default 1
* faceColors an array of Color3 elements used to set different colors to the top, rings and bottom respectively
* faceUV an array of Vector4 elements used to set different images to the top, rings and bottom respectively
* hasRings when true makes each subdivision independently treated as a face for faceUV and faceColors, optional, default false
* enclose when true closes an open cylinder by adding extra flat faces between the height axis and vertical edges, think cut cake
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### arc?

`number`

###### backUVs?

[`Vector4`](Vector4.md)

###### diameter?

`number`

###### diameterBottom?

`number`

###### diameterTop?

`number`

###### enclose?

`boolean`

###### faceColors?

[`Color4`](Color4.md)[]

###### faceUV?

[`Vector4`](Vector4.md)[]

###### frontUVs?

[`Vector4`](Vector4.md)

###### hasRings?

`boolean`

###### height?

`number`

###### sideOrientation?

`number`

###### subdivisions?

`number`

###### tessellation?

`number`

#### Returns

`VertexData`

the VertexData of the cylinder, cone or prism

#### Deprecated

please use CreateCylinderVertexData instead

***

### ~~CreateDashedLines()~~

> `static` **CreateDashedLines**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1778](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1778)

Create the VertexData for a DashedLines

#### Parameters

##### options

an object used to set the following optional parameters for the DashedLines, required but can be empty
 - points an array successive Vector3
 - dashSize the size of the dashes relative to the dash number, optional, default 3
 - gapSize the size of the gap between two successive dashes relative to the dash number, optional, default 1
 - dashNb the intended total number of dashes, optional, default 200

###### dashNb?

`number`

###### dashSize?

`number`

###### gapSize?

`number`

###### points

[`Vector3`](Vector3.md)[]

#### Returns

`VertexData`

the VertexData for the DashedLines

#### Deprecated

use CreateDashedLinesVertexData instead

***

### ~~CreateDisc()~~

> `static` **CreateDisc**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1877](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1877)

Creates the VertexData of the Disc or regular Polygon

#### Parameters

##### options

an object used to set the following optional parameters for the disc, required but can be empty
* radius the radius of the disc, optional default 0.5
* tessellation the number of polygon sides, optional, default 64
* arc a number from 0 to 1, to create an unclosed polygon based on the fraction of the circumference given by the arc value, optional, default 1
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### arc?

`number`

###### backUVs?

[`Vector4`](Vector4.md)

###### frontUVs?

[`Vector4`](Vector4.md)

###### radius?

`number`

###### sideOrientation?

`number`

###### tessellation?

`number`

#### Returns

`VertexData`

the VertexData of the box

#### Deprecated

use CreateDiscVertexData instead

***

### ~~CreateGround()~~

> `static` **CreateGround**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1791](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1791)

Creates the VertexData for a Ground

#### Parameters

##### options

an object used to set the following optional parameters for the Ground, required but can be empty
 - width the width (x direction) of the ground, optional, default 1
 - height the height (z direction) of the ground, optional, default 1
 - subdivisions the number of subdivisions per side, optional, default 1

###### height?

`number`

###### subdivisions?

`number`

###### subdivisionsX?

`number`

###### subdivisionsY?

`number`

###### width?

`number`

#### Returns

`VertexData`

the VertexData of the Ground

#### Deprecated

Please use CreateGroundVertexData instead

***

### ~~CreateGroundFromHeightMap()~~

> `static` **CreateGroundFromHeightMap**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1834](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1834)

Creates the VertexData of the Ground designed from a heightmap

#### Parameters

##### options

an object used to set the following parameters for the Ground, required and provided by CreateGroundFromHeightMap
* width the width (x direction) of the ground
* height the height (z direction) of the ground
* subdivisions the number of subdivisions per side
* minHeight the minimum altitude on the ground, optional, default 0
* maxHeight the maximum altitude on the ground, optional default 1
* colorFilter the filter to apply to the image pixel colors to compute the height, optional Color3, default (0.3, 0.59, 0.11)
* buffer the array holding the image color data
* bufferWidth the width of image
* bufferHeight the height of image
* alphaFilter Remove any data where the alpha channel is below this value, defaults 0 (all data visible)

###### alphaFilter

`number`

###### buffer

`Uint8Array`

###### bufferHeight

`number`

###### bufferWidth

`number`

###### colorFilter

[`Color3`](Color3.md)

###### height

`number`

###### maxHeight

`number`

###### minHeight

`number`

###### subdivisions

`number`

###### width

`number`

#### Returns

`VertexData`

the VertexData of the Ground designed from a heightmap

#### Deprecated

use CreateGroundFromHeightMapVertexData instead

***

### ~~CreateIcoSphere()~~

> `static` **CreateIcoSphere**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1913)

Creates the VertexData of the IcoSphere

#### Parameters

##### options

an object used to set the following optional parameters for the IcoSphere, required but can be empty
* radius the radius of the IcoSphere, optional default 1
* radiusX allows stretching in the x direction, optional, default radius
* radiusY allows stretching in the y direction, optional, default radius
* radiusZ allows stretching in the z direction, optional, default radius
* flat when true creates a flat shaded mesh, optional, default true
* subdivisions increasing the subdivisions increases the number of faces, optional, default 4
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### backUVs?

[`Vector4`](Vector4.md)

###### flat?

`boolean`

###### frontUVs?

[`Vector4`](Vector4.md)

###### radius?

`number`

###### radiusX?

`number`

###### radiusY?

`number`

###### radiusZ?

`number`

###### sideOrientation?

`number`

###### subdivisions?

`number`

#### Returns

`VertexData`

the VertexData of the IcoSphere

#### Deprecated

use CreateIcoSphereVertexData instead

***

### ~~CreateLineSystem()~~

> `static` **CreateLineSystem**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1764)

Creates the VertexData of the LineSystem

#### Parameters

##### options

an object used to set the following optional parameters for the LineSystem, required but can be empty
 - lines an array of lines, each line being an array of successive Vector3
 - colors an array of line colors, each of the line colors being an array of successive Color4, one per line point

###### colors?

[`Nullable`](../type-aliases/Nullable.md)\<[`Color4`](Color4.md)[][]\>

###### lines

[`Vector3`](Vector3.md)[][]

#### Returns

`VertexData`

the VertexData of the LineSystem

#### Deprecated

use CreateLineSystemVertexData instead

***

### ~~CreatePlane()~~

> `static` **CreatePlane**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1861](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1861)

Creates the VertexData for a Plane

#### Parameters

##### options

an object used to set the following optional parameters for the plane, required but can be empty
* size sets the width and height of the plane to the value of size, optional default 1
* width sets the width (x direction) of the plane, overwrites the width set by size, optional, default size
* height sets the height (y direction) of the plane, overwrites the height set by size, optional, default size
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### backUVs?

[`Vector4`](Vector4.md)

###### frontUVs?

[`Vector4`](Vector4.md)

###### height?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### width?

`number`

#### Returns

`VertexData`

the VertexData of the box

#### Deprecated

use CreatePlaneVertexData instead

***

### ~~CreatePolygon()~~

> `static` **CreatePolygon**(`polygon`, `sideOrientation`, `fUV?`, `fColors?`, `frontUVs?`, `backUVs?`, `wrap?`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1894](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1894)

Creates the VertexData for an irregular Polygon in the XoZ plane using a mesh built by polygonTriangulation.build()
All parameters are provided by CreatePolygon as needed

#### Parameters

##### polygon

[`Mesh`](Mesh.md)

a mesh built from polygonTriangulation.build()

##### sideOrientation

`number`

takes the values Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE

##### fUV?

[`Vector4`](Vector4.md)[]

an array of Vector4 elements used to set different images to the top, rings and bottom respectively

##### fColors?

[`Color4`](Color4.md)[]

an array of Color3 elements used to set different colors to the top, rings and bottom respectively

##### frontUVs?

[`Vector4`](Vector4.md)

only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)

##### backUVs?

[`Vector4`](Vector4.md)

only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

##### wrap?

`boolean`

a boolean, default false, when true and fUVs used texture is wrapped around all sides, when false texture is applied side

#### Returns

`VertexData`

the VertexData of the Polygon

#### Deprecated

use CreatePolygonVertexData instead

***

### ~~CreatePolyhedron()~~

> `static` **CreatePolyhedron**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1949](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1949)

Creates the VertexData for a Polyhedron

#### Parameters

##### options

an object used to set the following optional parameters for the polyhedron, required but can be empty
* type provided types are:
 * 0 : Tetrahedron, 1 : Octahedron, 2 : Dodecahedron, 3 : Icosahedron, 4 : Rhombicuboctahedron, 5 : Triangular Prism, 6 : Pentagonal Prism, 7 : Hexagonal Prism, 8 : Square Pyramid (J1)
 * 9 : Pentagonal Pyramid (J2), 10 : Triangular Dipyramid (J12), 11 : Pentagonal Dipyramid (J13), 12 : Elongated Square Dipyramid (J15), 13 : Elongated Pentagonal Dipyramid (J16), 14 : Elongated Pentagonal Cupola (J20)
* size the size of the IcoSphere, optional default 1
* sizeX allows stretching in the x direction, optional, default size
* sizeY allows stretching in the y direction, optional, default size
* sizeZ allows stretching in the z direction, optional, default size
* custom a number that overwrites the type to create from an extended set of polyhedron from https://www.babylonjs-playground.com/#21QRSK#15 with minimised editor
* faceUV an array of Vector4 elements used to set different images to the top, rings and bottom respectively
* faceColors an array of Color3 elements used to set different colors to the top, rings and bottom respectively
* flat when true creates a flat shaded mesh, optional, default true
* subdivisions increasing the subdivisions increases the number of faces, optional, default 4
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### backUVs?

[`Vector4`](Vector4.md)

###### custom?

`any`

###### faceColors?

[`Color4`](Color4.md)[]

###### faceUV?

[`Vector4`](Vector4.md)[]

###### flat?

`boolean`

###### frontUVs?

[`Vector4`](Vector4.md)

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

#### Returns

`VertexData`

the VertexData of the Polyhedron

#### Deprecated

use CreatePolyhedronVertexData instead

***

### ~~CreateRibbon()~~

> `static` **CreateRibbon**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1554](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1554)

Creates the VertexData for a Ribbon

#### Parameters

##### options

an object used to set the following optional parameters for the ribbon, required but can be empty
* pathArray array of paths, each of which an array of successive Vector3
* closeArray creates a seam between the first and the last paths of the pathArray, optional, default false
* closePath creates a seam between the first and the last points of each path of the path array, optional, default false
* offset a positive integer, only used when pathArray contains a single path (offset = 10 means the point 1 is joined to the point 11), default rounded half size of the pathArray length
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)
* invertUV swaps in the U and V coordinates when applying a texture, optional, default false
* uvs a linear array, of length 2 * number of vertices, of custom UV values, optional
* colors a linear array, of length 4 * number of vertices, of custom color values, optional

###### backUVs?

[`Vector4`](Vector4.md)

###### closeArray?

`boolean`

###### closePath?

`boolean`

###### colors?

[`Color4`](Color4.md)[]

###### frontUVs?

[`Vector4`](Vector4.md)

###### invertUV?

`boolean`

###### offset?

`number`

###### pathArray

[`Vector3`](Vector3.md)[][]

###### sideOrientation?

`number`

###### uvs?

[`Vector2`](Vector2.md)[]

#### Returns

`VertexData`

the VertexData of the ribbon

#### Deprecated

use CreateRibbonVertexData instead

***

### ~~CreateSphere()~~

> `static` **CreateSphere**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1679](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1679)

Creates the VertexData for an ellipsoid, defaults to a sphere

#### Parameters

##### options

an object used to set the following optional parameters for the box, required but can be empty
* segments sets the number of horizontal strips optional, default 32
* diameter sets the axes dimensions, diameterX, diameterY and diameterZ to the value of diameter, optional default 1
* diameterX sets the diameterX (x direction) of the ellipsoid, overwrites the diameterX set by diameter, optional, default diameter
* diameterY sets the diameterY (y direction) of the ellipsoid, overwrites the diameterY set by diameter, optional, default diameter
* diameterZ sets the diameterZ (z direction) of the ellipsoid, overwrites the diameterZ set by diameter, optional, default diameter
* arc a number from 0 to 1, to create an unclosed ellipsoid based on the fraction of the circumference (latitude) given by the arc value, optional, default 1
* slice a number from 0 to 1, to create an unclosed ellipsoid based on the fraction of the height (latitude) given by the arc value, optional, default 1
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### arc?

`number`

###### backUVs?

[`Vector4`](Vector4.md)

###### diameter?

`number`

###### diameterX?

`number`

###### diameterY?

`number`

###### diameterZ?

`number`

###### frontUVs?

[`Vector4`](Vector4.md)

###### segments?

`number`

###### sideOrientation?

`number`

###### slice?

`number`

#### Returns

`VertexData`

the VertexData of the ellipsoid

#### Deprecated

use CreateSphereVertexData instead

***

### ~~CreateTiledBox()~~

> `static` **CreateTiledBox**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1616](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1616)

Creates the VertexData for a tiled box

#### Parameters

##### options

an object used to set the following optional parameters for the box, required but can be empty
- `pattern` sets the pattern
- `width` sets the width
- `height` sets the height
- `depth` sets the depth
- `tileSize` sets the tile size
- `tileWidth` sets the tile width
- `tileHeight` sets the tile height
- `alignHorizontal` sets the horizontal alignment
- `alignVertical` sets the vertical alignment
- `faceUV` an array of 6 Vector4 elements used to set different images to each box side
- `faceColors` an array of 6 Color3 elements used to set different colors to each box side
- `sideOrientation` optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE

###### alignHorizontal?

`number`

###### alignVertical?

`number`

###### depth?

`number`

###### faceColors?

[`Color4`](Color4.md)[]

###### faceUV?

[`Vector4`](Vector4.md)[]

###### height?

`number`

###### pattern?

`number`

###### sideOrientation?

`number`

###### tileHeight?

`number`

###### tileSize?

`number`

###### tileWidth?

`number`

###### width?

`number`

#### Returns

`VertexData`

the VertexData of the box

#### Deprecated

Please use CreateTiledBoxVertexData instead

***

### ~~CreateTiledGround()~~

> `static` **CreateTiledGround**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1807](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1807)

Creates the VertexData for a TiledGround by subdividing the ground into tiles

#### Parameters

##### options

an object used to set the following optional parameters for the Ground, required but can be empty
* xmin the ground minimum X coordinate, optional, default -1
* zmin the ground minimum Z coordinate, optional, default -1
* xmax the ground maximum X coordinate, optional, default 1
* zmax the ground maximum Z coordinate, optional, default 1
* subdivisions a javascript object `\{w: positive integer, h: positive integer\}`, `w` and `h` are the numbers of subdivisions on the ground width and height creating 'tiles', default `\{w: 6, h: 6\}`
* precision a javascript object `\{w: positive integer, h: positive integer\}`, `w` and `h` are the numbers of subdivisions on the tile width and height, default `\{w: 2, h: 2\}`

###### precision?

\{ `h`: `number`; `w`: `number`; \}

###### precision.h

`number`

###### precision.w

`number`

###### subdivisions?

\{ `h`: `number`; `w`: `number`; \}

###### subdivisions.h

`number`

###### subdivisions.w

`number`

###### xmax

`number`

###### xmin

`number`

###### zmax

`number`

###### zmin

`number`

#### Returns

`VertexData`

the VertexData of the TiledGround

#### Deprecated

use CreateTiledGroundVertexData instead

***

### ~~CreateTiledPlane()~~

> `static` **CreateTiledPlane**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1646](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1646)

Creates the VertexData for a tiled plane

#### Parameters

##### options

an object used to set the following optional parameters for the box, required but can be empty
* pattern a limited pattern arrangement depending on the number
* tileSize sets the width, height and depth of the tile to the value of size, optional default 1
* tileWidth sets the width (x direction) of the tile, overwrites the width set by size, optional, default size
* tileHeight sets the height (y direction) of the tile, overwrites the height set by size, optional, default size
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### alignHorizontal?

`number`

###### alignVertical?

`number`

###### backUVs?

[`Vector4`](Vector4.md)

###### frontUVs?

[`Vector4`](Vector4.md)

###### height?

`number`

###### pattern?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### tileHeight?

`number`

###### tileSize?

`number`

###### tileWidth?

`number`

###### width?

`number`

#### Returns

`VertexData`

the VertexData of the tiled plane

#### Deprecated

use CreateTiledPlaneVertexData instead

***

### ~~CreateTorus()~~

> `static` **CreateTorus**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1745](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1745)

Creates the VertexData for a torus

#### Parameters

##### options

an object used to set the following optional parameters for the box, required but can be empty
* diameter the diameter of the torus, optional default 1
* thickness the diameter of the tube forming the torus, optional default 0.5
* tessellation the number of prism sides, 3 for a triangular prism, optional, default 24
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### backUVs?

[`Vector4`](Vector4.md)

###### diameter?

`number`

###### frontUVs?

[`Vector4`](Vector4.md)

###### sideOrientation?

`number`

###### tessellation?

`number`

###### thickness?

`number`

#### Returns

`VertexData`

the VertexData of the torus

#### Deprecated

use CreateTorusVertexData instead

***

### ~~CreateTorusKnot()~~

> `static` **CreateTorusKnot**(`options`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:2001](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L2001)

Creates the VertexData for a TorusKnot

#### Parameters

##### options

an object used to set the following optional parameters for the TorusKnot, required but can be empty
* radius the radius of the torus knot, optional, default 2
* tube the thickness of the tube, optional, default 0.5
* radialSegments the number of sides on each tube segments, optional, default 32
* tubularSegments the number of tubes to decompose the knot into, optional, default 32
* p the number of windings around the z axis, optional,  default 2
* q the number of windings around the x axis, optional,  default 3
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### backUVs?

[`Vector4`](Vector4.md)

###### frontUVs?

[`Vector4`](Vector4.md)

###### p?

`number`

###### q?

`number`

###### radialSegments?

`number`

###### radius?

`number`

###### sideOrientation?

`number`

###### tube?

`number`

###### tubularSegments?

`number`

#### Returns

`VertexData`

the VertexData of the Torus Knot

#### Deprecated

use CreateTorusKnotVertexData instead

***

### ExtractFromGeometry()

> `static` **ExtractFromGeometry**(`geometry`, `copyWhenShared?`, `forceCopy?`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1454)

Extracts the vertexData from the geometry

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

the geometry from which to extract the VertexData

##### copyWhenShared?

`boolean`

defines if the VertexData must be cloned when the geometry is shared between multiple meshes, optional, default false

##### forceCopy?

`boolean`

indicating that the VertexData must be cloned, optional, default false

#### Returns

`VertexData`

the object VertexData associated to the passed mesh

***

### ExtractFromMesh()

> `static` **ExtractFromMesh**(`mesh`, `copyWhenShared?`, `forceCopy?`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:1443](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L1443)

Extracts the vertexData from a mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

the mesh from which to extract the VertexData

##### copyWhenShared?

`boolean`

defines if the VertexData must be cloned when shared between multiple meshes, optional, default false

##### forceCopy?

`boolean`

indicating that the VertexData must be cloned, optional, default false

#### Returns

`VertexData`

the object VertexData associated to the passed mesh

***

### ImportVertexData()

> `static` **ImportVertexData**(`parsedVertexData`, `geometry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:2423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L2423)

Applies VertexData created from the imported parameters to the geometry

#### Parameters

##### parsedVertexData

`any`

the parsed data from an imported file

##### geometry

[`Geometry`](Geometry.md)

the geometry to apply the VertexData to

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`parsedVertexData`): `VertexData`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:2316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L2316)

Creates a VertexData from serialized data

#### Parameters

##### parsedVertexData

`any`

the parsed data from an imported file

#### Returns

`VertexData`

a VertexData
