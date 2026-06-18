[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IImage

# Interface: IImage

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L104)

Loader interface with additional members.

## Extends

- `IImage`.[`IArrayItem`](IArrayItem.md)

## Properties

### bufferView?

> `optional` **bufferView?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:588](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L588)

The index of the bufferView that contains the image. Use this instead of the image's uri property

#### Inherited from

`GLTF2.IImage.bufferView`

***

### extensions?

> `optional` **extensions?**: `object`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.IImage.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.IImage.extras`

***

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L20)

The index of this item in the array.

#### Inherited from

[`IArrayItem`](IArrayItem.md).[`index`](IArrayItem.md#index)

***

### mimeType?

> `optional` **mimeType?**: `ImageMimeType`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:584](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L584)

The image's MIME type

#### Inherited from

`GLTF2.IImage.mimeType`

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L298)

The user-defined name of this object

#### Inherited from

`GLTF2.IImage.name`

***

### uri?

> `optional` **uri?**: `string`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:580](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L580)

The uri of the image.  Relative paths are relative to the .gltf file.  Instead of referencing an external file, the uri can also be a data-uri.  The image format must be jpg or png

#### Inherited from

`GLTF2.IImage.uri`
