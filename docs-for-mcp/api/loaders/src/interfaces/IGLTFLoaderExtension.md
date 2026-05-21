[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / IGLTFLoaderExtension

# Interface: IGLTFLoaderExtension

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L135)

Interface for extending the loader.

## Extended by

- [`IGLTFLoaderExtension`](../namespaces/GLTF2/interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L144)

Defines whether this extension is enabled.

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L139)

The name of this extension.

***

### order?

> `optional` **order?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L150)

Defines the order of this extension.
The loader sorts the extensions using these values when loading.
