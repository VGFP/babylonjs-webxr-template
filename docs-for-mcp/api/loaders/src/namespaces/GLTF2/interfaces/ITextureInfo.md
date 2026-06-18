[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / ITextureInfo

# Interface: ITextureInfo

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L249)

Loader interface with additional members.

## Extends

- `ITextureInfo`

## Extended by

- [`IMaterialNormalTextureInfo`](IMaterialNormalTextureInfo.md)
- [`IMaterialOcclusionTextureInfo`](IMaterialOcclusionTextureInfo.md)

## Properties

### extensions?

> `optional` **extensions?**: `object`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.ITextureInfo.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.ITextureInfo.extras`

***

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:832](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L832)

The index of the texture

#### Inherited from

`GLTF2.ITextureInfo.index`

***

### nonColorData?

> `optional` **nonColorData?**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L251)

false or undefined if the texture holds color data (true if data are roughness, normal, ...)

***

### texCoord?

> `optional` **texCoord?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:836](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L836)

The set index of texture's TEXCOORD attribute used for texture coordinate mapping

#### Inherited from

`GLTF2.ITextureInfo.texCoord`
