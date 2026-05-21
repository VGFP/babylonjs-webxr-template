[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / KhronosTextureContainer2

# Class: KhronosTextureContainer2

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L203)

Class for loading KTX2 files

## Constructors

### Constructor

> **new KhronosTextureContainer2**(`engine`, `numWorkersOrOptions?`): `KhronosTextureContainer2`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L328)

Constructor

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to use

##### numWorkersOrOptions?

`number` \| [`IKhronosTextureContainer2Options`](../interfaces/IKhronosTextureContainer2Options.md)

The number of workers for async operations. Specify `0` to disable web workers and run synchronously in the current context.

#### Returns

`KhronosTextureContainer2`

## Properties

### DefaultDecoderOptions

> `static` **DefaultDecoderOptions**: [`DefaultKTX2DecoderOptions`](DefaultKTX2DecoderOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L265)

Default configuration for the KTX2 decoder.
The options defined in this way have priority over those passed when creating a KTX2 texture with new Texture(...).

***

### DefaultNumWorkers

> `static` **DefaultNumWorkers**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L259)

Default number of workers used to handle data decoding

***

### URLConfig

> `static` **URLConfig**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L225)

URLs to use when loading the KTX2 decoder module as well as its dependencies
If a url is null, the default url is used (pointing to https://preview.babylonjs.com)
Note that jsDecoderModule can't be null and that the other dependencies will only be loaded if necessary
Urls you can change:
    URLConfig.jsDecoderModule
    URLConfig.wasmUASTCToASTC
    URLConfig.wasmUASTCToBC7
    URLConfig.wasmUASTCToRGBA_UNORM
    URLConfig.wasmUASTCToRGBA_SRGB
    URLConfig.wasmUASTCToR8_UNORM
    URLConfig.wasmUASTCToRG8_UNORM
    URLConfig.jsMSCTranscoder
    URLConfig.wasmMSCTranscoder
    URLConfig.wasmZSTDDecoder
You can see their default values in this PG: https://playground.babylonjs.com/#EIJH8L#29

#### jsDecoderModule

> **jsDecoderModule**: `string`

#### jsMSCTranscoder

> **jsMSCTranscoder**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmMSCTranscoder

> **wasmMSCTranscoder**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmUASTCToASTC

> **wasmUASTCToASTC**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmUASTCToBC7

> **wasmUASTCToBC7**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmUASTCToR8\_UNORM

> **wasmUASTCToR8\_UNORM**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmUASTCToRG8\_UNORM

> **wasmUASTCToRG8\_UNORM**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmUASTCToRGBA\_SRGB

> **wasmUASTCToRGBA\_SRGB**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmUASTCToRGBA\_UNORM

> **wasmUASTCToRGBA\_UNORM**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### wasmZSTDDecoder

> **wasmZSTDDecoder**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

***

### WorkerPool?

> `static` `optional` **WorkerPool?**: [`AutoReleaseWorkerPool`](AutoReleaseWorkerPool.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L254)

If provided, this worker pool will be used instead of creating a new one.
This is useful when loading the WASM and the js modules on your own and
you want to use the ktxTextureLoader and not construct this class directly.

## Methods

### IsValid()

> `static` **IsValid**(`data`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L498)

Checks if the given data starts with a KTX2 file identifier.

#### Parameters

##### data

`ArrayBufferView`

the data to check

#### Returns

`boolean`

true if the data is a KTX2 file or false otherwise
