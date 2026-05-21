[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IInternalTextureLoader

# Interface: IInternalTextureLoader

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts#L7)

This represents the required contract to create a new type of texture loader.

## Properties

### supportCascades

> **supportCascades**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts#L11)

Defines whether the loader supports cascade loading the different faces.

## Methods

### loadCubeData()

> **loadCubeData**(`data`, `texture`, `createPolynomials`, `onLoad`, `onError`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts#L22)

Uploads the cube texture data to the WebGL texture. It has already been bound.

#### Parameters

##### data

`ArrayBufferView`\<`ArrayBufferLike`\> \| `ArrayBufferView`\<`ArrayBufferLike`\>[]

contains the texture data

##### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the BabylonJS internal texture

##### createPolynomials

`boolean`

will be true if polynomials have been requested

##### onLoad

[`Nullable`](../type-aliases/Nullable.md)\<(`data?`) => `void`\>

defines the callback to trigger once the texture is ready

##### onError

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

defines the callback to trigger in case of error

##### options?

`any`

options to be passed to the loader

#### Returns

`void`

***

### loadData()

> **loadData**(`data`, `texture`, `callback`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/internalTextureLoader.ts#L38)

Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.

#### Parameters

##### data

`ArrayBufferView`

contains the texture data

##### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the BabylonJS internal texture

##### callback

(`width`, `height`, `loadMipmap`, `isCompressed`, `done`, `loadFailed?`) => `void`

defines the method to call once ready to upload

##### options?

`any`

options to be passed to the loader

#### Returns

`void`
