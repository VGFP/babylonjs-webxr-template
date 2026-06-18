[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IVertexDataLike

# Interface: IVertexDataLike

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L97)

Interface used to define a object like a vertex data structure

## Properties

### colors?

> `optional` **colors?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L146)

An array of the r, g, b, a, color of each vertex  [...., r, g, b, a, .....]

***

### indices?

> `optional` **indices?**: [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L171)

An array of i, j, k the three vertex indices required for each triangular facet  [...., i, j, k .....]

***

### matricesIndices?

> `optional` **matricesIndices?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L151)

An array containing the list of indices to the array of matrices produced by bones, each vertex have up to 4 indices (8 if the matricesIndicesExtra is set).

***

### matricesIndicesExtra?

> `optional` **matricesIndicesExtra?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L161)

An array extending the number of possible indices

***

### matricesWeights?

> `optional` **matricesWeights?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L156)

An array containing the list of weights defining the weight of each indexed matrix in the final computation

***

### matricesWeightsExtra?

> `optional` **matricesWeightsExtra?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L166)

An array extending the number of possible weights when the number of indices is extended

***

### normals?

> `optional` **normals?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L106)

An array of the x, y, z normal vector of each vertex  [...., x, y, z, .....]

***

### positions

> **positions**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L101)

An array of the x, y, z position of each vertex  [...., x, y, z, .....]

***

### tangents?

> `optional` **tangents?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L111)

An array of the x, y, z, w tangent vector of each vertex  [...., x, y, z, w, .....]

***

### uvs?

> `optional` **uvs?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L116)

An array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

***

### uvs2?

> `optional` **uvs2?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L121)

A second array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

***

### uvs3?

> `optional` **uvs3?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L126)

A third array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

***

### uvs4?

> `optional` **uvs4?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L131)

A fourth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

***

### uvs5?

> `optional` **uvs5?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L136)

A fifth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]

***

### uvs6?

> `optional` **uvs6?**: [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.vertexData.ts#L141)

A sixth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]
