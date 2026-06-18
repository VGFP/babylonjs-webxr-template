[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Buffer

# Class: Buffer

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L15)

Class used to store data that will be store in GPU memory

## Constructors

### Constructor

> **new Buffer**(`engine`, `data`, `updatable`, `stride?`, `postponeInternalCreation?`, `instanced?`, `useBytes?`, `divisor?`, `label?`): `Buffer`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L51)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L37)

Gets the byte stride.

## Accessors

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L30)

Gets a boolean indicating if the Buffer is disposed

##### Returns

`boolean`

## Methods

### create()

> **create**(`data?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L167)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L102)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L271)

Release all resources

#### Returns

`void`

***

### getBuffer()

> **getBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L146)

Gets underlying native buffer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

underlying native buffer

***

### getData()

> **getData**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L138)

Gets current buffer's data

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataArray`](../type-aliases/DataArray.md)\>

a DataArray or null

***

### ~~getStrideSize()~~

> **getStrideSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L156)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L130)

Gets a boolean indicating if the Buffer is updatable?

#### Returns

`boolean`

true if the buffer is updatable

***

### update()

> **update**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L221)

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

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Buffers/buffer.pure.ts#L232)

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
