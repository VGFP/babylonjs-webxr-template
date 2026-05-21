[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Buffer

# Class: Buffer

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L12)

Class used to store data that will be store in GPU memory

## Constructors

### Constructor

> **new Buffer**(`engine`, `data`, `updatable`, `stride?`, `postponeInternalCreation?`, `instanced?`, `useBytes?`, `divisor?`, `label?`): `Buffer`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L48)

Constructor

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

the engine

##### data

[`DataArray`](../type-aliases/DataArray.md) \| [`DataBuffer`](DataBuffer.md)

the data to use for this buffer

##### updatable

`boolean`

whether the data is updatable

##### stride?

`number` = `0`

the stride (optional)

##### postponeInternalCreation?

`boolean` = `false`

whether to postpone creating the internal WebGL buffer (optional)

##### instanced?

`boolean` = `false`

whether the buffer is instanced (optional)

##### useBytes?

`boolean` = `false`

set to true if the stride in in bytes (optional)

##### divisor?

`number`

sets an optional divisor for instances (1 by default)

##### label?

`string`

defines the label of the buffer (for debug purpose)

#### Returns

`Buffer`

## Properties

### byteStride

> `readonly` **byteStride**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L34)

Gets the byte stride.

## Accessors

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L27)

Gets a boolean indicating if the Buffer is disposed

##### Returns

`boolean`

## Methods

### create()

> **create**(`data?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L163)

Store data into the buffer. Creates the buffer if not used already.
If the buffer was already used, it will be updated only if it is updatable, otherwise it will do nothing.

#### Parameters

##### data?

[`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\> = `null`

defines the data to store

#### Returns

`void`

***

### createVertexBuffer()

> **createVertexBuffer**(`kind`, `offset`, `size`, `stride?`, `instanced?`, `useBytes?`, `divisor?`): [`VertexBuffer`](VertexBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L98)

Create a new VertexBuffer based on the current buffer

#### Parameters

##### kind

`string`

defines the vertex buffer kind (position, normal, etc.)

##### offset

`number`

defines offset in the buffer (0 by default)

##### size

`number`

defines the size in floats of attributes (position is 3 for instance)

##### stride?

`number`

defines the stride size in floats in the buffer (the offset to apply to reach next value when data is interleaved)

##### instanced?

`boolean`

defines if the vertex buffer contains indexed data

##### useBytes?

`boolean` = `false`

defines if the offset and stride are in bytes     *

##### divisor?

`number`

sets an optional divisor for instances (1 by default)

#### Returns

[`VertexBuffer`](VertexBuffer.md)

the new vertex buffer

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L267)

Release all resources

#### Returns

`void`

***

### getBuffer()

> **getBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L142)

Gets underlying native buffer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

underlying native buffer

***

### getData()

> **getData**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L134)

Gets current buffer's data

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

a DataArray or null

***

### ~~getStrideSize()~~

> **getStrideSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L152)

Gets the stride in float32 units (i.e. byte stride / 4).
May not be an integer if the byte stride is not divisible by 4.

#### Returns

`number`

the stride in float32 units

#### Deprecated

Please use byteStride instead.

***

### isUpdatable()

> **isUpdatable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L126)

Gets a boolean indicating if the Buffer is updatable?

#### Returns

`boolean`

true if the buffer is updatable

***

### update()

> **update**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L217)

Update current buffer data

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

defines the data to store

#### Returns

`void`

***

### updateDirectly()

> **updateDirectly**(`data`, `offset`, `vertexCount?`, `useBytes?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L228)

Updates the data directly.

#### Parameters

##### data

[`DataArray`](../type-aliases/DataArray.md)

the new data

##### offset

`number`

the new offset

##### vertexCount?

`number`

the vertex count (optional)

##### useBytes?

`boolean` = `false`

set to true if the offset is in bytes

#### Returns

`void`
