[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Geometry

# Class: Geometry

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L29)

Class used to store geometry data (vertex buffers + index buffer)

## Implements

- [`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md)

## Constructors

### Constructor

> **new Geometry**(`id`, `scene?`, `vertexData?`, `updatable?`, `mesh?`, `totalVertices?`): `Geometry`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L144)

Creates a new geometry

#### Parameters

##### id

`string`

defines the unique ID

##### scene?

[`Scene`](Scene.md)

defines the hosting scene

##### vertexData?

[`VertexData`](VertexData.md)

defines the VertexData used to get geometry data

##### updatable?

`boolean` = `false`

defines if geometry must be updatable (false by default)

##### mesh?

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\> = `null`

defines the mesh that will be associated with the geometry

##### totalVertices?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices (optional)

#### Returns

`Geometry`

## Properties

### delayLoadingFile

> **delayLoadingFile**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L46)

Gets the file containing the data to load when running in delay load state

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L42)

Gets the delay loading state of the geometry (none by default which means not delayed)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L34)

Gets or sets the ID of the geometry

***

### onGeometryUpdated

> **onGeometryUpdated**: (`geometry`, `kind?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L50)

Callback called when the geometry is updated

#### Parameters

##### geometry

`Geometry`

##### kind?

`string`

#### Returns

`void`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L38)

Gets or sets the unique ID of the geometry

***

### useBoundingInfoFromGeometry

> **useBoundingInfoFromGeometry**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L133)

If set to true (false by default), the bounding info applied to the meshes sharing this geometry will be the bounding info defined at the class level
and won't be computed based on the vertex positions (which is what we get when useBoundingInfoFromGeometry = false)

## Accessors

### boundingBias

#### Get Signature

> **get** **boundingBias**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L94)

Gets or sets the Bias Vector to apply on the bounding elements (box/sphere), the max extend is computed as v += v * bias.x + bias.y, the min is computed as v -= v * bias.x + bias.y

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **boundingBias**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L101)

Gets or sets the Bias Vector to apply on the bounding elements (box/sphere), the max extend is computed as v += v * bias.x + bias.y, the min is computed as v -= v * bias.x + bias.y

##### Parameters

###### value

[`Vector2`](Vector2.md)

##### Returns

`void`

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L214)

Gets a value indicating that the geometry should not be serialized

##### Returns

`boolean`

***

### extend

#### Get Signature

> **get** **extend**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L183)

Gets the current extend of the geometry

##### Returns

`object`

###### maximum

> **maximum**: [`Vector3`](Vector3.md)

###### minimum

> **minimum**: [`Vector3`](Vector3.md)

***

### meshes

#### Get Signature

> **get** **meshes**(): [`Mesh`](Mesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L125)

Get the list of meshes using this geometry

##### Returns

[`Mesh`](Mesh.md)[]

## Methods

### applyToMesh()

> **applyToMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:737](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L737)

Apply current geometry to a given mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

defines the mesh to apply geometry to

#### Returns

`void`

***

### clearCachedData()

> **clearCachedData**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:1131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L1131)

Release any memory retained by the cached data on the Geometry.

Call this function to reduce memory footprint of the mesh.
Vertex buffers will not store CPU data anymore (this will prevent picking, collisions or physics to work correctly)

#### Returns

`void`

***

### copy()

> **copy**(`id`): `Geometry`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L1033)

Clone the current geometry into a new geometry

#### Parameters

##### id

`string`

defines the unique ID of the new geometry

#### Returns

`Geometry`

a new geometry object

***

### copyVerticesData()

> **copyVerticesData**(`kind`, `vertexData`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:471](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L471)

Copies the requested vertex data kind into the given vertex data map. Float data is constructed if the map doesn't have the data.

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

##### vertexData

defines the map that stores the resulting data

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:986](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L986)

Free all associated resources

#### Returns

`void`

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L199)

Gets the hosting engine

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the hosting Engine

***

### getIndexBuffer()

> **getIndexBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:686](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L686)

Gets the index buffer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

the index buffer

***

### getIndices()

> **getIndices**(`copyWhenShared?`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:670](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L670)

Gets the index buffer array

#### Parameters

##### copyWhenShared?

`boolean`

defines if the returned array must be cloned upon returning it if the current geometry is shared between multiple meshes

##### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

the index buffer array

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`getIndices`](../interfaces/IGetSetVerticesData.md#getindices)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L191)

Gets the hosting scene

#### Returns

[`Scene`](Scene.md)

the hosting Scene

***

### getTotalIndices()

> **getTotalIndices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:657](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L657)

Return the total number of indices

#### Returns

`number`

the total number of indices

***

### getTotalVertices()

> **getTotalVertices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:442](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L442)

Gets total number of vertices

#### Returns

`number`

the total number of vertices

***

### getVertexBuffer()

> **getVertexBuffer**(`kind`): [`Nullable`](../type-aliases/Nullable.md)\<[`VertexBuffer`](VertexBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:513](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L513)

Gets a specific vertex buffer

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`VertexBuffer`](VertexBuffer.md)\>

a VertexBuffer

***

### getVertexBuffers()

> **getVertexBuffers**(): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`key`: `string`\]: [`VertexBuffer`](VertexBuffer.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L524)

Returns all vertex buffers

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`key`: `string`\]: [`VertexBuffer`](VertexBuffer.md); \}\>

an object holding all vertex buffers indexed by kind

***

### getVerticesData()

> **getVerticesData**(`kind`, `copyWhenShared?`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:457](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L457)

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

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`getVerticesData`](../interfaces/IGetSetVerticesData.md#getverticesdata)

***

### getVerticesDataKinds()

> **getVerticesDataKinds**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L550)

Gets a list of all attached data kinds (Position, normal, etc...)

#### Returns

`string`[]

a list of string containing all kinds

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:964](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L964)

Gets a value indicating if the geometry is disposed

#### Returns

`boolean`

true if the geometry was disposed

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L207)

Defines if the geometry is ready to use

#### Returns

`boolean`

true if the geometry is ready to be used

***

### isVertexBufferUpdatable()

> **isVertexBufferUpdatable**(`kind`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L498)

Returns a boolean defining if the vertex data for the requested `kind` is updatable

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

#### Returns

`boolean`

true if the vertex buffer with the specified kind is updatable

***

### isVerticesDataPresent()

> **isVerticesDataPresent**(`kind`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:536](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L536)

Gets a boolean indicating if specific vertex buffer is present

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

#### Returns

`boolean`

true if data is present

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`isVerticesDataPresent`](../interfaces/IGetSetVerticesData.md#isverticesdatapresent)

***

### load()

> **load**(`scene`, `onLoaded?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:840](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L840)

Load the geometry if it was flagged as delay loaded

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### onLoaded?

() => `void`

defines a callback called when the geometry is loaded

#### Returns

`void`

***

### releaseForMesh()

> **releaseForMesh**(`mesh`, `shouldDispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:712](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L712)

Release the associated resources for a specific mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

defines the source mesh

##### shouldDispose?

`boolean`

defines if the geometry must be disposed if there is no more mesh pointing to it

#### Returns

`void`

***

### removeVerticesData()

> **removeVerticesData**(`kind`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L281)

Removes a specific vertex data

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:1103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L1103)

Serialize the current geometry info (and not the vertices data) into a JSON object

#### Returns

`any`

a JSON representation of the current geometry data (without the vertices data)

***

### serializeVerticeData()

> **serializeVerticeData**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:1148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L1148)

Serialize all vertices data into a JSON object

#### Returns

`any`

a JSON representation of the current geometry data

***

### setAllVerticesData()

> **setAllVerticesData**(`vertexData`, `updatable?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L251)

Affects all geometry data in one call

#### Parameters

##### vertexData

[`VertexData`](VertexData.md)

defines the geometry data

##### updatable?

`boolean`

defines if the geometry must be flagged as updatable (false as default)

#### Returns

`void`

***

### setIndexBuffer()

> **setIndexBuffer**(`indexBuffer`, `totalVertices`, `totalIndices`, `is32Bits?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L601)

Sets the index buffer for this geometry.

#### Parameters

##### indexBuffer

[`DataBuffer`](DataBuffer.md)

Defines the index buffer to use for this geometry

##### totalVertices

`number`

Defines the total number of vertices used by the buffer

##### totalIndices

`number`

Defines the total number of indices in the index buffer

##### is32Bits?

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\> = `null`

Defines if the indices are 32 bits. If null (default), the value is guessed from the number of vertices

#### Returns

`void`

***

### setIndices()

> **setIndices**(`indices`, `totalVertices?`, `updatable?`, `dontForceSubMeshRecreation?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:629](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L629)

Creates a new index buffer

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the indices to store in the index buffer

##### totalVertices?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices (could be null)

##### updatable?

`boolean` = `false`

defines if the index buffer must be flagged as updatable (false by default)

##### dontForceSubMeshRecreation?

`boolean` = `false`

defines a boolean indicating that we don't want to force the recreation of sub-meshes if we don't have to (false by default)

#### Returns

`void`

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`setIndices`](../interfaces/IGetSetVerticesData.md#setindices)

***

### setVerticesBuffer()

> **setVerticesBuffer**(`buffer`, `totalVertices?`, `disposeExistingBuffer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L298)

Affect a vertex buffer to the geometry. the vertexBuffer.getKind() function is used to determine where to store the data

#### Parameters

##### buffer

[`VertexBuffer`](VertexBuffer.md)

defines the vertex buffer to use

##### totalVertices?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices for position kind (could be null)

##### disposeExistingBuffer?

`boolean` = `true`

disposes the existing buffer, if any (default: true)

#### Returns

`void`

***

### setVerticesData()

> **setVerticesData**(`kind`, `data`, `updatable?`, `stride?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L263)

Set specific vertex data

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the vertex data to use

##### updatable?

`boolean` = `false`

defines if the vertex must be flagged as updatable (false as default)

##### stride?

`number`

defines the stride to use (0 by default). This value is deduced from the kind value if not specified

#### Returns

`void`

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`setVerticesData`](../interfaces/IGetSetVerticesData.md#setverticesdata)

***

### toLeftHanded()

> **toLeftHanded**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:895](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L895)

Invert the geometry to move from a right handed system to a left handed one.

#### Returns

`void`

***

### updateIndices()

> **updateIndices**(`indices`, `offset?`, `gpuMemoryOnly?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:572](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L572)

Update index buffer

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the indices to store in the index buffer

##### offset?

`number`

defines the offset in the target buffer where to store the data

##### gpuMemoryOnly?

`boolean` = `false`

defines a boolean indicating that only the GPU memory must be updated leaving the CPU version of the indices unchanged (false by default)

#### Returns

`void`

***

### updateVerticesData()

> **updateVerticesData**(`kind`, `data`, `updateExtends?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L361)

Update a specific vertex buffer
This function will create a new buffer if the current one is not updatable

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data to use

##### updateExtends?

`boolean` = `false`

defines if the geometry extends must be recomputed (false by default)

#### Returns

`void`

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`updateVerticesData`](../interfaces/IGetSetVerticesData.md#updateverticesdata)

***

### updateVerticesDataDirectly()

> **updateVerticesDataDirectly**(`kind`, `data`, `offset`, `useBytes?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L343)

Update a specific vertex buffer
This function will directly update the underlying DataBuffer according to the passed numeric array or Float32Array
It will do nothing if the buffer is not updatable

#### Parameters

##### kind

`string`

defines the data kind (Position, normal, etc...)

##### data

[`DataArray`](../type-aliases/DataArray.md)

defines the data to use

##### offset

`number`

defines the offset in the target buffer where to store the data

##### useBytes?

`boolean` = `false`

set to true if the offset is in bytes

#### Returns

`void`

***

### CreateGeometryForMesh()

> `static` **CreateGeometryForMesh**(`mesh`): `Geometry`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L116)

Static function used to attach a new empty geometry to a mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

defines the mesh to attach the geometry to

#### Returns

`Geometry`

the new Geometry

***

### ExtractFromMesh()

> `static` **ExtractFromMesh**(`mesh`, `id`): [`Nullable`](../type-aliases/Nullable.md)\<`Geometry`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:1249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L1249)

Extracts a clone of a mesh geometry

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

defines the source mesh

##### id

`string`

defines the unique ID of the new geometry object

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Geometry`\>

the new geometry object

***

### Parse()

> `static` **Parse**(`parsedVertexData`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<`Geometry`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:1638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L1638)

Create a new geometry from persisted data (Using .babylon file format)

#### Parameters

##### parsedVertexData

`any`

defines the persisted data

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl

`string`

defines the root url to use to load assets (like delayed data)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Geometry`\>

the new geometry object

***

### RandomId()

> `static` **RandomId**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/geometry.ts:1266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/geometry.ts#L1266)

You should now use Tools.RandomId(), this method is still here for legacy reasons.
Implementation from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523
Be aware Math.random() could cause collisions, but:
"All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide"

#### Returns

`string`

a string containing a new GUID
