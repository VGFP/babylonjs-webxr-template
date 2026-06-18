[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReadExrDataAsync

# Function: ReadExrDataAsync()

> **ReadExrDataAsync**(`data`): `Promise`\<\{ `data`: [`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>; `height`: `number`; `width`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/exrTextureLoader.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Loaders/exrTextureLoader.ts#L162)

Read the EXR data from an ArrayBufferView asynchronously.

## Parameters

### data

`ArrayBuffer`

ArrayBufferView containing the EXR data

## Returns

`Promise`\<\{ `data`: [`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>; `height`: `number`; `width`: `number`; \}\>

An object containing the width, height, and data of the EXR texture.
