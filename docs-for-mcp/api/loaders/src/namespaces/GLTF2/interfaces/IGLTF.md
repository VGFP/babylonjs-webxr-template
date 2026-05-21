[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTF

# Interface: IGLTF

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L257)

Loader interface with additional members.

## Extends

- `IGLTF`

## Properties

### asset

> **asset**: `IAsset`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:854](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L854)

Metadata about the glTF asset

#### Inherited from

`GLTF2.IGLTF.asset`

***

### extensions?

> `optional` **extensions?**: `object`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.IGLTF.extensions`

***

### extensionsRequired?

> `optional` **extensionsRequired?**: `string`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:874](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L874)

Names of glTF extensions required to properly load this asset

#### Inherited from

`GLTF2.IGLTF.extensionsRequired`

***

### extensionsUsed?

> `optional` **extensionsUsed?**: `string`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:870](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L870)

Names of glTF extensions used somewhere in this asset

#### Inherited from

`GLTF2.IGLTF.extensionsUsed`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.IGLTF.extras`

***

### scene?

> `optional` **scene?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:898](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L898)

The index of the default scene

#### Inherited from

`GLTF2.IGLTF.scene`
