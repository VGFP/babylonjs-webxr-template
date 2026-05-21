[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / registerTextureLoader

# Function: registerTextureLoader()

> **registerTextureLoader**(`extension`, `loaderFactory`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/textureLoaderManager.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/textureLoaderManager.ts#L15)

Registers a texture loader.
If a loader for the extension exists in the registry, it will be replaced.

## Parameters

### extension

`string`

The name of the loader extension.

### loaderFactory

(`mimeType?`) => [`IInternalTextureLoader`](../interfaces/IInternalTextureLoader.md) \| `Promise`\<[`IInternalTextureLoader`](../interfaces/IInternalTextureLoader.md)\>

The factory function that creates the loader extension.

## Returns

`void`
