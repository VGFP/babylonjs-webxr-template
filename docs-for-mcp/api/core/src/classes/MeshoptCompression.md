[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshoptCompression

# Class: MeshoptCompression

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts#L47)

Meshopt compression (https://github.com/zeux/meshoptimizer)

This class wraps the meshopt library from https://github.com/zeux/meshoptimizer/tree/master/js.

**Encoder**

The encoder is not currently implemented.

**Decoder**

By default, the configuration points to a copy of the meshopt files on the Babylon.js preview CDN (e.g. https://preview.babylonjs.com/meshopt_decoder.js).

To update the configuration, use the following code:
```javascript
    MeshoptCompression.Configuration = {
        decoder: {
            url: "<url to the meshopt decoder library>"
        }
    };
```

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new MeshoptCompression**(): `MeshoptCompression`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts#L80)

Constructor

#### Returns

`MeshoptCompression`

## Properties

### Configuration

> `static` **Configuration**: [`IMeshoptCompressionConfiguration`](../interfaces/IMeshoptCompressionConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts#L58)

The configuration. Defaults to the following:
```javascript
decoder: {
  url: "https://cdn.babylonjs.com/meshopt_decoder.js"
}
```

## Accessors

### Default

#### Get Signature

> **get** `static` **Default**(): `MeshoptCompression`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts#L69)

Default instance for the meshoptimizer object.

##### Returns

`MeshoptCompression`

## Methods

### decodeGltfBufferAsync()

> **decodeGltfBufferAsync**(`source`, `count`, `stride`, `mode`, `filter?`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts#L107)

Decode meshopt data.

#### Parameters

##### source

`Uint8Array`

The input data.

##### count

`number`

The number of elements.

##### stride

`number`

The stride in bytes.

##### mode

`"ATTRIBUTES"` \| `"TRIANGLES"` \| `"INDICES"`

The compression mode.

##### filter?

`string`

The compression filter.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

a Promise<Uint8Array> that resolves to the decoded data

#### See

https://github.com/zeux/meshoptimizer/tree/master/js#decoder

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Compression/meshoptCompression.ts#L93)

Stop all async operations and release resources.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)
