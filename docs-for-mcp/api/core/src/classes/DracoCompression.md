[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DracoCompression

# Class: DracoCompression

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L62)

Draco compression (https://google.github.io/draco/)

This class wraps the Draco module.

**Encoder**

The encoder is not currently implemented.

**Decoder**

By default, the configuration points to a copy of the Draco decoder files for glTF from the babylon.js cdn https://cdn.babylonjs.com/draco_wasm_wrapper_gltf.js.
The configuration is shared with the DracoDecoder class.

To update the configuration, use the following code:
```javascript
    DracoCompression.Configuration = {
        decoder: {
            wasmUrl: "<url to the WebAssembly library>",
            wasmBinaryUrl: "<url to the WebAssembly binary>",
            fallbackUrl: "<url to the fallback JavaScript library>",
        }
    };
```

Draco has two versions, one for WebAssembly and one for JavaScript. The decoder configuration can be set to only support WebAssembly or only support the JavaScript version.
Decoding will automatically fallback to the JavaScript version if WebAssembly version is not configured or if WebAssembly is not supported by the browser.
Use `DracoCompression.DecoderAvailable` to determine if the decoder configuration is available for the current context.

To decode Draco compressed data, get the default DracoCompression object and call decodeMeshToGeometryAsync:
```javascript
    var geometry = await DracoCompression.Default.decodeMeshToGeometryAsync(data);
```

## See

https://playground.babylonjs.com/#DMZIBD#0

## Constructors

### Constructor

> **new DracoCompression**(`numWorkersOrOptions?`): `DracoCompression`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L127)

Creates a new DracoCompression object.

#### Parameters

##### numWorkersOrOptions?

`number` \| [`IDracoCompressionOptions`](../interfaces/IDracoCompressionOptions.md)

Overrides for the Configuration. Either:
- The number of workers for async operations or a config object. Specify `0` to disable web workers and run synchronously in the current context.
- An options object

#### Returns

`DracoCompression`

## Properties

### DefaultNumWorkers

> `static` **DefaultNumWorkers**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L95)

Default number of workers to create when creating the draco compression object.

## Accessors

### Configuration

#### Get Signature

> **get** `static` **Configuration**(): [`IDracoCompressionConfiguration`](../interfaces/IDracoCompressionConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L71)

The configuration. Defaults to the following urls:
- wasmUrl: "https://cdn.babylonjs.com/draco_wasm_wrapper_gltf.js"
- wasmBinaryUrl: "https://cdn.babylonjs.com/draco_decoder_gltf.wasm"
- fallbackUrl: "https://cdn.babylonjs.com/draco_decoder_gltf.js"

##### Returns

[`IDracoCompressionConfiguration`](../interfaces/IDracoCompressionConfiguration.md)

#### Set Signature

> **set** `static` **Configuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L81)

##### Parameters

###### value

[`IDracoCompressionConfiguration`](../interfaces/IDracoCompressionConfiguration.md)

##### Returns

`void`

***

### DecoderAvailable

#### Get Signature

> **get** `static` **DecoderAvailable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L88)

Returns true if the decoder configuration is available.

##### Returns

`boolean`

***

### Default

#### Get Signature

> **get** `static` **Default**(): `DracoCompression`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L101)

Default instance for the DracoCompression.

##### Returns

`DracoCompression`

## Methods

### ~~decodeMeshAsync()~~

> **decodeMeshAsync**(`data`, `attributes?`): `Promise`\<[`VertexData`](VertexData.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L197)

Decode Draco compressed mesh data to Babylon vertex data.

#### Parameters

##### data

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

The ArrayBuffer or ArrayBufferView for the Draco compression data

##### attributes?

A map of attributes from vertex buffer kinds to Draco unique ids

#### Returns

`Promise`\<[`VertexData`](VertexData.md)\>

A promise that resolves with the decoded vertex data

#### Deprecated

Use [decodeMeshToGeometryAsync](#decodemeshtogeometryasync) for better performance in some cases

***

### decodeMeshToGeometryAsync()

> **decodeMeshToGeometryAsync**(`name`, `scene`, `data`, `attributes?`): `Promise`\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L174)

Decode Draco compressed mesh data to Babylon geometry.

#### Parameters

##### name

`string`

The name to use when creating the geometry

##### scene

[`Scene`](Scene.md)

The scene to use when creating the geometry

##### data

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

The ArrayBuffer or ArrayBufferView for the Draco compression data

##### attributes?

A map of attributes from vertex buffer kinds to Draco unique ids

#### Returns

`Promise`\<[`Geometry`](Geometry.md)\>

A promise that resolves with the decoded geometry

***

### decodeMeshToMeshDataAsync()

> **decodeMeshToMeshDataAsync**(`data`, `attributes?`, `gltfNormalizedOverride?`): `Promise`\<`MeshData`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L158)

Decode Draco compressed mesh data to mesh data.

#### Parameters

##### data

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

The ArrayBuffer or ArrayBufferView for the Draco compression data

##### attributes?

A map of attributes from vertex buffer kinds to Draco unique ids

##### gltfNormalizedOverride?

A map of attributes from vertex buffer kinds to normalized flags to override the Draco normalization

#### Returns

`Promise`\<`MeshData`\>

A promise that resolves with the decoded mesh data

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L138)

Stop all async operations and release resources.

#### Returns

`void`

***

### whenReadyAsync()

> **whenReadyAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L146)

Returns a promise that resolves when ready. Call this manually to ensure draco compression is ready before use.

#### Returns

`Promise`\<`void`\>

a promise that resolves when ready

***

### ResetDefault()

> `static` **ResetDefault**(`skipDispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCompression.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCompression.ts#L112)

Reset the default draco compression object to null and disposing the removed default instance.
Note that if the workerPool is a member of the static Configuration object it is recommended not to run dispose,
unless the static worker pool is no longer needed.

#### Parameters

##### skipDispose?

`boolean`

set to true to not dispose the removed default instance

#### Returns

`void`
