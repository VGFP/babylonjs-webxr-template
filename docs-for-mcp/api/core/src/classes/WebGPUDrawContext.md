[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebGPUDrawContext

# Class: WebGPUDrawContext

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L14)

WebGPU implementation of the IDrawContext interface.
This class manages the draw context for WebGPU, including buffers and indirect draw data.

## Implements

- [`IDrawContext`](../interfaces/IDrawContext.md)

## Constructors

### Constructor

> **new WebGPUDrawContext**(`bufferManager`, `_dummyIndexBuffer`): `WebGPUDrawContext`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L124)

Creates a new WebGPUDrawContext.

#### Parameters

##### bufferManager

`WebGPUBufferManager`

The buffer manager used to manage WebGPU buffers.

##### \_dummyIndexBuffer

`WebGPUDataBuffer`

A dummy index buffer to be bound as the "indices"
storage buffer when no index buffer is provided.

#### Returns

`WebGPUDrawContext`

## Properties

### bindGroups?

> `optional` **bindGroups?**: `GPUBindGroup`[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L24)

Cache of the bind groups. Will be reused for the next draw if isDirty==false (and materialContext.isDirty==false)

***

### buffers

> **buffers**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L38)

Buffers (uniform / storage) used for the draw call

#### Index Signature

\[`name`: `string`\]: [`Nullable`](../type-aliases/Nullable.md)\<`WebGPUDataBuffer`\>

***

### fastBundle?

> `optional` **fastBundle?**: `GPURenderBundle`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L20)

Bundle used in fast mode (when compatibilityMode==false)

***

### indirectDrawBuffer?

> `optional` **indirectDrawBuffer?**: `GPUBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L40)

Buffer used for the indirect draw call when enableIndirectDraw is true.

#### Implementation of

[`IDrawContext`](../interfaces/IDrawContext.md).[`indirectDrawBuffer`](../interfaces/IDrawContext.md#indirectdrawbuffer)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L26)

Unique identifier for the draw context.

#### Implementation of

[`IDrawContext`](../interfaces/IDrawContext.md).[`uniqueId`](../interfaces/IDrawContext.md#uniqueid)

## Accessors

### enableIndirectDraw

#### Get Signature

> **get** **enableIndirectDraw**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L69)

Indicates if the draw should be an indirect draw.

##### Returns

`boolean`

#### Set Signature

> **set** **enableIndirectDraw**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L73)

Indicates if the draw should be an indirect draw.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

Indicates if the draw should be an indirect draw.

#### Implementation of

[`IDrawContext`](../interfaces/IDrawContext.md).[`enableIndirectDraw`](../interfaces/IDrawContext.md#enableindirectdraw)

***

### useInstancing

#### Get Signature

> **get** **useInstancing**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L99)

True if instances are used in the draw calls

##### Returns

`boolean`

#### Set Signature

> **set** **useInstancing**(`use`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L103)

True if instances are used in the draw calls

##### Parameters

###### use

`boolean`

##### Returns

`void`

True if instances are used in the draw calls

#### Implementation of

[`IDrawContext`](../interfaces/IDrawContext.md).[`useInstancing`](../interfaces/IDrawContext.md#useinstancing)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L230)

Disposes the draw context and its resources.

#### Returns

`void`

#### Implementation of

[`IDrawContext`](../interfaces/IDrawContext.md).[`dispose`](../interfaces/IDrawContext.md#dispose)

***

### isDirty()

> **isDirty**(`materialContextUpdateId`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L56)

Checks if the draw context is dirty.

#### Parameters

##### materialContextUpdateId

`number`

The update ID of the material context associated with the draw context.

#### Returns

`boolean`

True if the draw or material context is dirty, false otherwise.

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L137)

Resets the draw context to its initial state.

#### Returns

`void`

#### Implementation of

[`IDrawContext`](../interfaces/IDrawContext.md).[`reset`](../interfaces/IDrawContext.md#reset)

***

### resetIsDirty()

> **resetIsDirty**(`materialContextUpdateId`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L64)

Resets the dirty state of the draw context.

#### Parameters

##### materialContextUpdateId

`number`

The update ID of the material context associated with the draw context.

#### Returns

`void`

***

### setBuffer()

> **setBuffer**(`name`, `buffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L151)

Associates a buffer to the draw context.

#### Parameters

##### name

`string`

The name of the buffer.

##### buffer

[`Nullable`](../type-aliases/Nullable.md)\<`WebGPUDataBuffer`\>

The buffer to set.

#### Returns

`void`

***

### setIndirectData()

> **setIndirectData**(`indexOrVertexCount`, `instanceCount`, `firstIndexOrVertex`, `forceUpdate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L157)

Data for the indirect draw call (only used when enableIndirectDraw is true).

#### Parameters

##### indexOrVertexCount

`number`

The number of indices (if indexed draw) or vertices (if non-indexed draw).

##### instanceCount

`number`

The number of instances to draw.

##### firstIndexOrVertex

`number`

The index (if indexed draw) or vertex (if non-indexed draw) offset to start drawing from.

##### forceUpdate?

`boolean` = `false`

If true, forces the update of the indirect draw data even if instanceCount is the same as in the previous call.

#### Returns

`void`

#### Implementation of

[`IDrawContext`](../interfaces/IDrawContext.md).[`setIndirectData`](../interfaces/IDrawContext.md#setindirectdata)

***

### setVertexPulling()

> **setVertexPulling**(`useVertexPulling`, `webgpuPipelineContext`, `vertexBuffers`, `indexBuffer`, `overrideVertexBuffers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuDrawContext.ts#L181)

Setup or disable vertex pulling as needed.

#### Parameters

##### useVertexPulling

`boolean`

Use vertex pulling or not

##### webgpuPipelineContext

`WebGPUPipelineContext`

The WebGPU pipeline context

##### vertexBuffers

The current vertex buffers

##### indexBuffer

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

The current index buffer

##### overrideVertexBuffers

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`kind`: `string`\]: [`Nullable`](../type-aliases/Nullable.md)\<[`VertexBuffer`](VertexBuffer.md)\>; \}\>

The vertex buffers to override

#### Returns

`void`
