[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IKhronosTextureContainer2Options

# Interface: IKhronosTextureContainer2Options

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L183)

Options for the KTX2 decoder

## Properties

### binariesAndModulesContainer?

> `optional` **binariesAndModulesContainer?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L197)

Optional container for the KTX2 decoder module and its dependencies. If set, the module will be used from this container and the URLs will be ignored.

#### jsDecoderModule?

> `optional` **jsDecoderModule?**: `any`

#### jsMSCTranscoder?

> `optional` **jsMSCTranscoder?**: `any`

#### wasmBaseUrl?

> `optional` **wasmBaseUrl?**: `any`

#### wasmMSCTranscoder?

> `optional` **wasmMSCTranscoder?**: `any`

#### wasmUASTCToASTC?

> `optional` **wasmUASTCToASTC?**: `any`

#### wasmUASTCToBC7?

> `optional` **wasmUASTCToBC7?**: `any`

#### wasmUASTCToR8\_UNORM?

> `optional` **wasmUASTCToR8\_UNORM?**: `any`

#### wasmUASTCToRG8\_UNORM?

> `optional` **wasmUASTCToRG8\_UNORM?**: `any`

#### wasmUASTCToRGBA\_SRGB?

> `optional` **wasmUASTCToRGBA\_SRGB?**: `any`

#### wasmUASTCToRGBA\_UNORM?

> `optional` **wasmUASTCToRGBA\_UNORM?**: `any`

#### wasmZSTDDecoder?

> `optional` **wasmZSTDDecoder?**: `any`

***

### numWorkers?

> `optional` **numWorkers?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L187)

Number of workers to use for async operations. Specify `0` to disable web workers and run synchronously in the current context.

***

### workerPool?

> `optional` **workerPool?**: [`AutoReleaseWorkerPool`](../classes/AutoReleaseWorkerPool.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer2.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer2.ts#L191)

Worker pool to use for async operations. If set, `numWorkers` will be ignored.
