[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DracoDecoder

# Class: DracoDecoder

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L42)

**`Experimental`**

This class is an experimental version of `DracoCompression` and is subject to change.

Draco Decoder (https://google.github.io/draco/)

This class wraps the Draco decoder module.

By default, the configuration points to a copy of the Draco decoder files for glTF from the Babylon.js cdn https://cdn.babylonjs.com/draco_wasm_wrapper_gltf.js.

To update the configuration, use the following code:
```javascript
    DracoDecoder.DefaultConfiguration = {
         wasmUrl: "<url to the WebAssembly library>",
         wasmBinaryUrl: "<url to the WebAssembly binary>",
         fallbackUrl: "<url to the fallback JavaScript library>",
    };
```

Draco has two versions, one for WebAssembly and one for JavaScript. The decoder configuration can be set to only support WebAssembly or only support the JavaScript version.
Decoding will automatically fallback to the JavaScript version if WebAssembly version is not configured or if WebAssembly is not supported by the browser.
Use `DracoDecoder.DefaultAvailable` to determine if the decoder configuration is available for the current context.

To decode Draco compressed data, get the default DracoDecoder object and call decodeMeshToGeometryAsync:
```javascript
    var geometry = await DracoDecoder.Default.decodeMeshToGeometryAsync(data);
```

## Extends

- `DracoCodec`

## Constructors

### Constructor

> **new DracoDecoder**(`configuration?`): `DracoDecoder`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L104)

**`Experimental`**

Creates a new Draco decoder.

#### Parameters

##### configuration?

`IDracoCodecConfiguration` = `DracoDecoder.DefaultConfiguration`

Optional override of the configuration for the DracoDecoder. If not provided, defaults to [DracoDecoder.DefaultConfiguration](#defaultconfiguration).

#### Returns

`DracoDecoder`

#### Overrides

`DracoCodec.constructor`

## Properties

### DefaultConfiguration

> `static` **DefaultConfiguration**: `IDracoCodecConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L50)

**`Experimental`**

Default configuration for the DracoDecoder. Defaults to the following:
- numWorkers: 50% of the available logical processors, capped to 4. If no logical processors are available, defaults to 1.
- wasmUrl: `"https://cdn.babylonjs.com/draco_wasm_wrapper_gltf.js"`
- wasmBinaryUrl: `"https://cdn.babylonjs.com/draco_decoder_gltf.wasm"`
- fallbackUrl: `"https://cdn.babylonjs.com/draco_decoder_gltf.js"`

## Accessors

### Default

#### Get Signature

> **get** `static` **Default**(): `DracoDecoder`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L67)

**`Experimental`**

Default instance for the DracoDecoder.

##### Returns

`DracoDecoder`

***

### DefaultAvailable

#### Get Signature

> **get** `static` **DefaultAvailable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L59)

**`Experimental`**

Returns true if the decoder's `DefaultConfiguration` is available.

##### Returns

`boolean`

## Methods

### decodeMeshToGeometryAsync()

> **decodeMeshToGeometryAsync**(`name`, `scene`, `data`, `attributes?`): `Promise`\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L231)

**`Experimental`**

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

The ArrayBuffer or ArrayBufferView of the Draco compressed data

##### attributes?

A map of attributes from vertex buffer kinds to Draco unique ids

#### Returns

`Promise`\<[`Geometry`](Geometry.md)\>

A promise that resolves with the decoded geometry

***

### decodeMeshToMeshDataAsync()

> **decodeMeshToMeshDataAsync**(`data`, `attributes?`, `gltfNormalizedOverride?`): `Promise`\<`MeshData`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L116)

**`Experimental`**

Decode Draco compressed mesh data to mesh data.

#### Parameters

##### data

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

The ArrayBuffer or ArrayBufferView of the compressed Draco data

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCodec.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCodec.ts#L174)

**`Experimental`**

Stop all async operations and release resources.

#### Returns

`void`

#### Inherited from

`DracoCodec.dispose`

***

### whenReadyAsync()

> **whenReadyAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoCodec.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoCodec.ts#L159)

**`Experimental`**

Returns a promise that resolves when ready. Call this manually to ensure the draco codec is ready before use.

#### Returns

`Promise`\<`void`\>

a promise that resolves when ready

#### Inherited from

`DracoCodec.whenReadyAsync`

***

### ResetDefault()

> `static` **ResetDefault**(`skipDispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoDecoder.ts#L78)

**`Experimental`**

Reset the default DracoDecoder object to null and disposing the removed default instance.
Note that if the workerPool is a member of the static DefaultConfiguration object it is recommended not to run dispose,
unless the static worker pool is no longer needed.

#### Parameters

##### skipDispose?

`boolean`

set to true to not dispose the removed default instance

#### Returns

`void`
