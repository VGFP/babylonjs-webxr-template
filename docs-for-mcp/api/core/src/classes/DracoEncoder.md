[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DracoEncoder

# Class: DracoEncoder

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts#L136)

**`Experimental`**

This class is subject to change.

Draco Encoder (https://google.github.io/draco/)

This class wraps the Draco encoder module.

By default, the configuration points to a copy of the Draco encoder files from the Babylon.js cdn https://cdn.babylonjs.com/draco_encoder_wasm_wrapper.js.

To update the configuration, use the following code:
```javascript
    DracoEncoder.DefaultConfiguration = {
         wasmUrl: "<url to the WebAssembly library>",
         wasmBinaryUrl: "<url to the WebAssembly binary>",
         fallbackUrl: "<url to the fallback JavaScript library>",
    };
```

Draco has two versions, one for WebAssembly and one for JavaScript. The encoder configuration can be set to only support WebAssembly or only support the JavaScript version.
Decoding will automatically fallback to the JavaScript version if WebAssembly version is not configured or if WebAssembly is not supported by the browser.
Use `DracoEncoder.DefaultAvailable` to determine if the encoder configuration is available for the current context.

To encode Draco compressed data, get the default DracoEncoder object and call encodeMeshAsync:
```javascript
    var dracoData = await DracoEncoder.Default.encodeMeshAsync(mesh);
```

Currently, DracoEncoder only encodes to meshes. Encoding to point clouds is not yet supported.

Only position, normal, color, and UV attributes are supported natively by the encoder. All other attributes are treated as generic. This means that,
when decoding these generic attributes later, additional information about their original Babylon types will be needed to interpret the data correctly.
You can use the return value of `encodeMeshAsync` to source this information, specifically the `attributes` field. E.g.,
```javascript
   var dracoData = await DracoEncoder.Default.encodeMeshAsync(mesh);
   var meshData = await DracoDecoder.Default.decodeMeshToMeshDataAsync(dracoData.data, dracoData.attributes);
```

By default, DracoEncoder will encode all available attributes of the mesh. To exclude specific attributes, use the following code:
```javascript
   var options = { excludedAttributes: [VertexBuffer.MatricesIndicesKind, VertexBuffer.MatricesWeightsKind] };
   var dracoData = await DracoDecoder.Default.encodeMeshAsync(mesh, options);
```

## Extends

- `DracoCodec`

## Constructors

### Constructor

> **new DracoEncoder**(`configuration?`): `DracoEncoder`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts#L198)

**`Experimental`**

Creates a new Draco encoder.

#### Parameters

##### configuration?

`IDracoCodecConfiguration` = `DracoEncoder.DefaultConfiguration`

Optional override of the configuration for the DracoEncoder. If not provided, defaults to [DracoEncoder.DefaultConfiguration](#defaultconfiguration).

#### Returns

`DracoEncoder`

#### Overrides

`DracoCodec.constructor`

## Properties

### DefaultConfiguration

> `static` **DefaultConfiguration**: `IDracoCodecConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts#L144)

**`Experimental`**

Default configuration for the DracoEncoder. Defaults to the following:
- numWorkers: 50% of the available logical processors, capped to 4. If no logical processors are available, defaults to 1.
- wasmUrl: `"https://cdn.babylonjs.com/draco_encoder_wasm_wrapper.js"`
- wasmBinaryUrl: `"https://cdn.babylonjs.com/draco_encoder.wasm"`
- fallbackUrl: `"https://cdn.babylonjs.com/draco_encoder.js"`

## Accessors

### Default

#### Get Signature

> **get** `static` **Default**(): `DracoEncoder`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts#L161)

**`Experimental`**

Default instance for the DracoEncoder.

##### Returns

`DracoEncoder`

***

### DefaultAvailable

#### Get Signature

> **get** `static` **DefaultAvailable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts#L153)

**`Experimental`**

Returns true if the encoder's `DefaultConfiguration` is available.

##### Returns

`boolean`

## Methods

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

### encodeMeshAsync()

> **encodeMeshAsync**(`input`, `options?`): `Promise`\<`IDracoEncodedMeshData`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts#L269)

**`Experimental`**

Encodes a mesh or geometry into a Draco-encoded mesh data.

#### Parameters

##### input

[`Mesh`](Mesh.md) \| [`Geometry`](Geometry.md)

the mesh or geometry to encode

##### options?

`IDracoEncoderOptions`

options for the encoding

#### Returns

`Promise`\<`IDracoEncodedMeshData`\>

a promise that resolves to the newly-encoded data

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Compression/dracoEncoder.ts#L172)

**`Experimental`**

Reset the default DracoEncoder object to null and disposing the removed default instance.
Note that if the workerPool is a member of the static DefaultConfiguration object it is recommended not to run dispose,
unless the static worker pool is no longer needed.

#### Parameters

##### skipDispose?

`boolean`

set to true to not dispose the removed default instance

#### Returns

`void`
