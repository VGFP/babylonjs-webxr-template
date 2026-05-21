[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VertexBuffer

# Class: VertexBuffer

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L339)

Specialized buffer used to store vertex data

## Properties

### byteOffset

> `readonly` **byteOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L424)

Gets the byte offset.

***

### byteStride

> `readonly` **byteStride**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L419)

Gets the byte stride.

***

### effectiveBuffer

> **effectiveBuffer**: [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.align.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.align.ts#L32)

Gets the effective buffer, that is the buffer that is actually sent to the GPU.
It could be different from VertexBuffer.getBuffer() if a new buffer must be created under the hood because of the forceVertexBufferStrideAndOffsetMultiple4Bytes engine flag.

***

### effectiveByteOffset

> **effectiveByteOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.align.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.align.ts#L26)

Gets the effective byte offset, that is the byte offset of the buffer that is actually sent to the GPU.
It could be different from VertexBuffer.byteOffset if a new buffer must be created under the hood because of the forceVertexBufferStrideAndOffsetMultiple4Bytes engine flag.

***

### effectiveByteStride

> **effectiveByteStride**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.align.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.align.ts#L20)

Gets the effective byte stride, that is the byte stride of the buffer that is actually sent to the GPU.
It could be different from VertexBuffer.byteStride if a new buffer must be created under the hood because of the forceVertexBufferStrideAndOffsetMultiple4Bytes engine flag.

***

### engine

> `readonly` **engine**: [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L450)

Gets the engine associated with the buffer

***

### hashCode

> `readonly` **hashCode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:445](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L445)

Gets a hash code representing the format (type, normalized, size, instanced, stride) of this buffer
All buffers with the same format will have the same hash code

***

### normalized

> `readonly` **normalized**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L429)

Gets whether integer data values should be normalized into a certain range when being casted to a float.

***

### type

> `readonly` **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L434)

Gets the data type of each component in the array.

***

### uniqueId

> `readonly` **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:439](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L439)

Gets the unique id of this vertex buffer

***

### BYTE

> `readonly` `static` **BYTE**: `number` = `Constants.BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L360)

The byte type.

***

### ColorInstanceKind

> `readonly` `static` **ColorInstanceKind**: `string` = `Constants.ColorInstanceKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:813](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L813)

Instance Colors

***

### ColorKind

> `readonly` `static` **ColorKind**: `string` = `Constants.ColorKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:809](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L809)

Colors

***

### FLOAT

> `readonly` `static` **FLOAT**: `number` = `Constants.FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L390)

The float type.

***

### INT

> `readonly` `static` **INT**: `number` = `Constants.INT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L380)

The integer type.

***

### MatricesIndicesExtraKind

> `readonly` `static` **MatricesIndicesExtraKind**: `string` = `Constants.MatricesIndicesExtraKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:825](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L825)

Additional matrix indices (for bones)

***

### MatricesIndicesKind

> `readonly` `static` **MatricesIndicesKind**: `string` = `Constants.MatricesIndicesKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:817](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L817)

Matrix indices (for bones)

***

### MatricesWeightsExtraKind

> `readonly` `static` **MatricesWeightsExtraKind**: `string` = `Constants.MatricesWeightsExtraKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:829](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L829)

Additional matrix weights (for bones)

***

### MatricesWeightsKind

> `readonly` `static` **MatricesWeightsKind**: `string` = `Constants.MatricesWeightsKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:821](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L821)

Matrix weights (for bones)

***

### NormalKind

> `readonly` `static` **NormalKind**: `string` = `Constants.NormalKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:777](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L777)

Normals

***

### PositionKind

> `readonly` `static` **PositionKind**: `string` = `Constants.PositionKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:773](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L773)

Positions

***

### SHORT

> `readonly` `static` **SHORT**: `number` = `Constants.SHORT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L370)

The short type.

***

### TangentKind

> `readonly` `static` **TangentKind**: `string` = `Constants.TangentKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:781](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L781)

Tangents

***

### UNSIGNED\_BYTE

> `readonly` `static` **UNSIGNED\_BYTE**: `number` = `Constants.UNSIGNED_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L365)

The unsigned byte type.

***

### UNSIGNED\_INT

> `readonly` `static` **UNSIGNED\_INT**: `number` = `Constants.UNSIGNED_INT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L385)

The unsigned integer type.

***

### UNSIGNED\_SHORT

> `readonly` `static` **UNSIGNED\_SHORT**: `number` = `Constants.UNSIGNED_SHORT`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L375)

The unsigned short type.

***

### UV2Kind

> `readonly` `static` **UV2Kind**: `string` = `Constants.UV2Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L789)

Texture coordinates 2

***

### UV3Kind

> `readonly` `static` **UV3Kind**: `string` = `Constants.UV3Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:793](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L793)

Texture coordinates 3

***

### UV4Kind

> `readonly` `static` **UV4Kind**: `string` = `Constants.UV4Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:797](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L797)

Texture coordinates 4

***

### UV5Kind

> `readonly` `static` **UV5Kind**: `string` = `Constants.UV5Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:801](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L801)

Texture coordinates 5

***

### UV6Kind

> `readonly` `static` **UV6Kind**: `string` = `Constants.UV6Kind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:805](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L805)

Texture coordinates 6

***

### UVKind

> `readonly` `static` **UVKind**: `string` = `Constants.UVKind`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:785](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L785)

Texture coordinates

## Accessors

### instanceDivisor

#### Get Signature

> **get** **instanceDivisor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L402)

Gets or sets the instance divisor when in instanced mode

##### Returns

`number`

#### Set Signature

> **set** **instanceDivisor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L406)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L395)

Gets a boolean indicating if the Buffer is disposed

##### Returns

`boolean`

## Methods

### create()

> **create**(`data?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:715](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L715)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:745](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L745)

Disposes the VertexBuffer and the underlying WebGLBuffer.

#### Returns

`void`

***

### forEach()

> **forEach**(`count`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:758](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L758)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:653](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L653)

Gets underlying native buffer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

underlying native buffer

***

### getData()

> **getData**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L630)

Gets the raw data from the underlying buffer.
Note: The data may include more than just this vertex buffer's values.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

the buffer data as a DataArray, or null.

***

### getFloatData()

> **getFloatData**(`totalVertices`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L640)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:705](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L705)

Returns the instancing divisor, zero for non-instanced (integer).

#### Returns

`number`

a number

***

### getIsInstanced()

> **getIsInstanced**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:697](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L697)

Gets a boolean indicating is the internal buffer of the VertexBuffer is instanced

#### Returns

`boolean`

true if this buffer is instanced

***

### getKind()

> **getKind**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:611](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L611)

Returns the kind of the VertexBuffer (string)

#### Returns

`string`

a string

***

### ~~getOffset()~~

> **getOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:680](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L680)

Returns the offset as a multiple of the type byte length.

#### Returns

`number`

the offset in bytes

#### Deprecated

Please use byteOffset instead.

***

### getSize()

> **getSize**(`sizeInBytes?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:689](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L689)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:671](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L671)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:661](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L661)

Gets the Buffer instance that wraps the native GPU buffer

#### Returns

[`Buffer`](Buffer.md)

the wrapper buffer

***

### isUpdatable()

> **isUpdatable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:621](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L621)

Gets a boolean indicating if the VertexBuffer is updatable?

#### Returns

`boolean`

true if the buffer is updatable

***

### update()

> **update**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:725](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L725)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:737](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L737)

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

***

### DeduceStride()

> `static` **DeduceStride**(`kind`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:836](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L836)

Deduces the stride given a kind.

#### Parameters

##### kind

`string`

The kind string to deduce

#### Returns

`number`

The deduced stride

***

### ~~ForEach()~~

> `static` **ForEach**(`data`, `byteOffset`, `byteStride`, `componentCount`, `componentType`, `count`, `normalized`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:906](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L906)

Enumerates each value of the given parameters as numbers.

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

the data to enumerate

##### byteOffset

`number`

the byte offset of the data

##### byteStride

`number`

the byte stride of the data

##### componentCount

`number`

the number of components per element

##### componentType

`number`

the type of the component

##### count

`number`

the number of values to enumerate

##### normalized

`boolean`

whether the data is normalized

##### callback

(`value`, `index`) => `void`

the callback function called for each value

#### Returns

`void`

#### Deprecated

Use `EnumerateFloatValues` from `bufferUtils` instead

***

### GetDataType()

> `static` **GetDataType**(`data`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:866](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L866)

Gets the vertex buffer type of the given data array.

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

the data array

#### Returns

`number`

the vertex buffer type

***

### ~~GetFloatData()~~

> `static` **GetFloatData**(`data`, `size`, `type`, `byteOffset`, `byteStride`, `normalized`, `totalVertices`, `forceCopy?`): [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:936](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L936)

Gets the given data array as a float array. Float data is constructed if the data array cannot be returned directly.

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

the input data array

##### size

`number`

the number of components

##### type

`number`

the component type

##### byteOffset

`number`

the byte offset of the data

##### byteStride

`number`

the byte stride of the data

##### normalized

`boolean`

whether the data is normalized

##### totalVertices

`number`

number of vertices in the buffer to take into account

##### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

#### Returns

[`FloatArray`](../type-aliases/FloatArray.md)

a float array containing vertex data

#### Deprecated

Use `GetFloatData` from `bufferUtils` instead

***

### ~~GetTypeByteLength()~~

> `static` **GetTypeByteLength**(`type`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L890)

Gets the byte length of the given type.

#### Parameters

##### type

`number`

the type

#### Returns

`number`

the number of bytes

#### Deprecated

Use `getTypeByteLength` from `bufferUtils` instead
