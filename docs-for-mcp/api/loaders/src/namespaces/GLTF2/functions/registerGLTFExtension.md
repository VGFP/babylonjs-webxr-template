[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / registerGLTFExtension

# Function: registerGLTFExtension()

> **registerGLTFExtension**(`name`, `isGLTFExtension`, `factory`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtensionRegistry.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtensionRegistry.ts#L28)

Registers a loader extension.

## Parameters

### name

`string`

The name of the loader extension.

### isGLTFExtension

`boolean`

If the loader extension is a glTF extension, then it will only be used for glTF files that use the corresponding glTF extension. Otherwise, it will be used for all loaded glTF files.

### factory

[`GLTFExtensionFactory`](../type-aliases/GLTFExtensionFactory.md)

The factory function that creates the loader extension.

## Returns

`void`
