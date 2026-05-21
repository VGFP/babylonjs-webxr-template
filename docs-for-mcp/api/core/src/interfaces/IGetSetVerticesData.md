[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGetSetVerticesData

# Interface: IGetSetVerticesData

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.ts#L21)

Define an interface for all classes that will get and set the data on vertices

## Methods

### getIndices()

> **getIndices**(`copyWhenShared?`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.ts#L42)

Returns an array of integers or a typed array (Int32Array, Uint32Array, Uint16Array) populated with the mesh indices.

#### Parameters

##### copyWhenShared?

`boolean`

If true (default false) and and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.

##### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

the indices array or an empty array if the mesh has no geometry

***

### getVerticesData()

> **getVerticesData**(`kind`, `copyWhenShared?`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.ts#L35)

Gets a specific vertex data attached to this geometry. Float data is constructed if the vertex buffer data cannot be returned directly.

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

##### copyWhenShared?

`boolean`

defines if the returned array must be cloned upon returning it if the current geometry is shared between multiple meshes

##### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a float array containing vertex data

***

### isVerticesDataPresent()

> **isVerticesDataPresent**(`kind`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.ts#L27)

Gets a boolean indicating if specific vertex data is present

#### Parameters

##### kind

`string`

defines the vertex data kind to use

#### Returns

`boolean`

true is data kind is present

***

### setIndices()

> **setIndices**(`indices`, `totalVertices`, `updatable?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.ts#L77)

Creates a new index buffer

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the indices to store in the index buffer

##### totalVertices

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

defines the total number of vertices (could be null)

##### updatable?

`boolean`

defines if the index buffer must be flagged as updatable (false by default)

#### Returns

`void`

***

### setVerticesData()

> **setVerticesData**(`kind`, `data`, `updatable`, `stride?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.ts#L50)

Set specific vertex data

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the vertex data to use

##### updatable

`boolean`

defines if the vertex must be flagged as updatable (false as default)

##### stride?

`number`

defines the stride to use (0 by default). This value is deduced from the kind value if not specified

#### Returns

`void`

***

### updateVerticesData()

> **updateVerticesData**(`kind`, `data`, `updateExtends?`, `makeItUnique?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.ts#L70)

Update a specific associated vertex buffer

#### Parameters

##### kind

`string`

defines which buffer to write to (positions, indices, normals, etc). Possible `kind` values :
- VertexBuffer.PositionKind
- VertexBuffer.UVKind
- VertexBuffer.UV2Kind
- VertexBuffer.UV3Kind
- VertexBuffer.UV4Kind
- VertexBuffer.UV5Kind
- VertexBuffer.UV6Kind
- VertexBuffer.ColorKind
- VertexBuffer.MatricesIndicesKind
- VertexBuffer.MatricesIndicesExtraKind
- VertexBuffer.MatricesWeightsKind
- VertexBuffer.MatricesWeightsExtraKind

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data source

##### updateExtends?

`boolean`

defines if extends info of the mesh must be updated (can be null). This is mostly useful for "position" kind

##### makeItUnique?

`boolean`

defines if the geometry associated with the mesh must be cloned to make the change only for this mesh (and not all meshes associated with the same geometry)

#### Returns

`void`
