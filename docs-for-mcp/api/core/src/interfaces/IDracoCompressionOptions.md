[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IDracoCompressionOptions

# Interface: IDracoCompressionOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L24)

Options for Draco compression

## Extends

- `Pick`\<`IDracoCodecConfiguration`, `"numWorkers"` \| `"wasmBinary"` \| `"workerPool"`\>

## Properties

### numWorkers?

> `optional` **numWorkers?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCodec.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/dracoCodec.ts#L28)

The number of workers for async operations. Specify `0` to disable web workers and run synchronously in the current context.

#### Inherited from

`Pick.numWorkers`

***

### wasmBinary?

> `optional` **wasmBinary?**: `ArrayBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCodec.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/dracoCodec.ts#L40)

Optional ArrayBuffer of the WebAssembly binary.
If provided it will be used instead of loading the binary from wasmBinaryUrl.

#### Inherited from

`Pick.wasmBinary`

***

### workerPool?

> `optional` **workerPool?**: [`WorkerPool`](../classes/WorkerPool.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCodec.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/dracoCodec.ts#L34)

Optional worker pool to use for async encoding/decoding.
If provided, the worker pool will be used as is: no Draco scripts will be loaded, and numWorkers will be ignored.

#### Inherited from

`Pick.workerPool`
