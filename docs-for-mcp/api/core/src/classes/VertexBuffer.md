[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VertexBuffer

# Class: VertexBuffer

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:343](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L343)

Specialized buffer used to store vertex data

## Properties

### byteOffset

> `readonly` **byteOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L436)

Gets the byte offset.

***

### byteStride

> `readonly` **byteStride**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L431)

Gets the byte stride.

***

### effectiveBuffer

> **effectiveBuffer**: [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.align.types.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.align.types.ts#L22)

Gets the effective buffer, that is the buffer that is actually sent to the GPU.
It could be different from VertexBuffer.getBuffer() if a new buffer must be created under the hood because of the forceVertexBufferStrideAndOffsetMultiple4Bytes engine flag.

***

### effectiveByteOffset

> **effectiveByteOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.align.types.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.align.types.ts#L16)

Gets the effective byte offset, that is the byte offset of the buffer that is actually sent to the GPU.
It could be different from VertexBuffer.byteOffset if a new buffer must be created under the hood because of the forceVertexBufferStrideAndOffsetMultiple4Bytes engine flag.

***

### effectiveByteStride

> **effectiveByteStride**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.align.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.align.types.ts#L10)

Gets the effective byte stride, that is the byte stride of the buffer that is actually sent to the GPU.
It could be different from VertexBuffer.byteStride if a new buffer must be created under the hood because of the forceVertexBufferStrideAndOffsetMultiple4Bytes engine flag.

***

### engine

> `readonly` **engine**: [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L462)

Gets the engine associated with the buffer

***

### hashCode

> `readonly` **hashCode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:457](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L457)

Gets a hash code representing the format (type, normalized, size, instanced, stride) of this buffer
All buffers with the same format will have the same hash code

***

### normalized

> `readonly` **normalized**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:441](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L441)

Gets whether integer data values should be normalized into a certain range when being casted to a float.

***

### type

> `readonly` **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L446)

Gets the data type of each component in the array.

***

### uniqueId

> `readonly` **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L451)

Gets the unique id of this vertex buffer

***

### BYTE

> `readonly` `static` **BYTE**: `number` = `Constants.BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L364)

The byte type.

***

### ColorInstanceKind

> `readonly` `static` **ColorInstanceKind**: `string` = `Constants.ColorInstanceKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L848)

Instance Colors

***

### ColorKind

> `readonly` `static` **ColorKind**: `string` = `Constants.ColorKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L844)

Colors

***

### FLOAT

> `readonly` `static` **FLOAT**: `number` = `Constants.FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L396)

The float type.

***

### HALF\_FLOAT

> `readonly` `static` **HALF\_FLOAT**: `number` = `Constants.HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L402)

The half float type.
Note: supported as a vertex attribute type only on the WebGL and WebGPU engines, not on Babylon Native.

***

### INT

> `readonly` `static` **INT**: `number` = `Constants.INT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L385)

The integer type.
Note: supported as a vertex attribute type only on the WebGL and WebGPU engines, not on Babylon Native.

***

### MatricesIndicesExtraKind

> `readonly` `static` **MatricesIndicesExtraKind**: `string` = `Constants.MatricesIndicesExtraKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:860](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L860)

Additional matrix indices (for bones)

***

### MatricesIndicesKind

> `readonly` `static` **MatricesIndicesKind**: `string` = `Constants.MatricesIndicesKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:852](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L852)

Matrix indices (for bones)

***

### MatricesWeightsExtraKind

> `readonly` `static` **MatricesWeightsExtraKind**: `string` = `Constants.MatricesWeightsExtraKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:864](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L864)

Additional matrix weights (for bones)

***

### MatricesWeightsKind

> `readonly` `static` **MatricesWeightsKind**: `string` = `Constants.MatricesWeightsKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:856](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L856)

Matrix weights (for bones)

***

### NormalKind

> `readonly` `static` **NormalKind**: `string` = `Constants.NormalKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L812)

Normals

***

### PositionKind

> `readonly` `static` **PositionKind**: `string` = `Constants.PositionKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:808](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L808)

Positions

***

### SHORT

> `readonly` `static` **SHORT**: `number` = `Constants.SHORT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L374)

The short type.

***

### TangentKind

> `readonly` `static` **TangentKind**: `string` = `Constants.TangentKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:816](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L816)

Tangents

***

### UNSIGNED\_BYTE

> `readonly` `static` **UNSIGNED\_BYTE**: `number` = `Constants.UNSIGNED_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L369)

The unsigned byte type.

***

### UNSIGNED\_INT

> `readonly` `static` **UNSIGNED\_INT**: `number` = `Constants.UNSIGNED_INT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:391](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L391)

The unsigned integer type.
Note: supported as a vertex attribute type only on the WebGL and WebGPU engines, not on Babylon Native.

***

### UNSIGNED\_SHORT

> `readonly` `static` **UNSIGNED\_SHORT**: `number` = `Constants.UNSIGNED_SHORT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:379](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L379)

The unsigned short type.

***

### UV2Kind

> `readonly` `static` **UV2Kind**: `string` = `Constants.UV2Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:824](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L824)

Texture coordinates 2

***

### UV3Kind

> `readonly` `static` **UV3Kind**: `string` = `Constants.UV3Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:828](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L828)

Texture coordinates 3

***

### UV4Kind

> `readonly` `static` **UV4Kind**: `string` = `Constants.UV4Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:832](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L832)

Texture coordinates 4

***

### UV5Kind

> `readonly` `static` **UV5Kind**: `string` = `Constants.UV5Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:836](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L836)

Texture coordinates 5

***

### UV6Kind

> `readonly` `static` **UV6Kind**: `string` = `Constants.UV6Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:840](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L840)

Texture coordinates 6

***

### UVKind

> `readonly` `static` **UVKind**: `string` = `Constants.UVKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:820](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L820)

Texture coordinates

## Accessors

### instanceDivisor

#### Get Signature

> **get** **instanceDivisor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L414)

Gets or sets the instance divisor when in instanced mode

##### Returns

`number`

#### Set Signature

> **set** **instanceDivisor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L418)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L407)

Gets a boolean indicating if the Buffer is disposed

##### Returns

`boolean`

## Methods

### create()

> **create**(`data?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L750)

Store data into the buffer. If the buffer was already used it will be either recreated or updated depending on isUpdatable property

#### Parameters

##### data?

[`DataArray`](../type-aliases/DataArray.md)

defines the data to store

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:780](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L780)

Disposes the VertexBuffer and the underlying WebGLBuffer.

#### Returns

`void`

***

### forEach()

> **forEach**(`count`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:793](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L793)

Enumerates each value of this vertex buffer as numbers.

#### Parameters

##### count

`number`

the number of values to enumerate

##### callback

(`value`, `index`) => `void`

the callback function called for each value

#### Returns

`void`

***

### getBuffer()

> **getBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L688)

Gets underlying native buffer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

underlying native buffer

***

### getData()

> **getData**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:665](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L665)

Gets the raw data from the underlying buffer.
Note: The data may include more than just this vertex buffer's values.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

the buffer data as a DataArray, or null.

***

### getFloatData()

> **getFloatData**(`totalVertices`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L675)

Gets this vertex buffer's data as a float array. Float data is constructed if the vertex buffer data cannot be returned directly.

#### Parameters

##### totalVertices

`number`

number of vertices in the buffer to take into account

##### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a float array containing vertex data

***

### getInstanceDivisor()

> **getInstanceDivisor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:740](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L740)

Returns the instancing divisor, zero for non-instanced (integer).

#### Returns

`number`

a number

***

### getIsInstanced()

> **getIsInstanced**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:732](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L732)

Gets a boolean indicating is the internal buffer of the VertexBuffer is instanced

#### Returns

`boolean`

true if this buffer is instanced

***

### getKind()

> **getKind**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:646](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L646)

Returns the kind of the VertexBuffer (string)

#### Returns

`string`

a string

***

### ~~getOffset()~~

> **getOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:715](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L715)

Returns the offset as a multiple of the type byte length.

#### Returns

`number`

the offset in bytes

#### Deprecated

Please use byteOffset instead.

***

### getSize()

> **getSize**(`sizeInBytes?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:724](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L724)

Returns the number of components or the byte size per vertex attribute

#### Parameters

##### sizeInBytes?

`boolean` = `false`

If true, returns the size in bytes or else the size in number of components of the vertex attribute (default: false)

#### Returns

`number`

the number of components

***

### ~~getStrideSize()~~

> **getStrideSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:706](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L706)

Gets the stride in float32 units (i.e. byte stride / 4).
May not be an integer if the byte stride is not divisible by 4.

#### Returns

`number`

the stride in float32 units

#### Deprecated

Please use byteStride instead.

***

### getWrapperBuffer()

> **getWrapperBuffer**(): [`Buffer`](Buffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L696)

Gets the Buffer instance that wraps the native GPU buffer

#### Returns

[`Buffer`](Buffer.md)

the wrapper buffer

***

### isUpdatable()

> **isUpdatable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L656)

Gets a boolean indicating if the VertexBuffer is updatable?

#### Returns

`boolean`

true if the buffer is updatable

***

### update()

> **update**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:760](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L760)

Updates the underlying buffer according to the passed numeric array or Float32Array.
This function will create a new buffer if the current one is not updatable

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

defines the data to store

#### Returns

`void`

***

### updateDirectly()

> **updateDirectly**(`data`, `offset`, `useBytes?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:772](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L772)

Updates directly the underlying WebGLBuffer according to the passed numeric array or Float32Array.
Returns the directly updated WebGLBuffer.

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

the new data

##### offset

`number`

the new offset

##### useBytes?

`boolean` = `false`

set to true if the offset is in bytes

#### Returns

`void`
