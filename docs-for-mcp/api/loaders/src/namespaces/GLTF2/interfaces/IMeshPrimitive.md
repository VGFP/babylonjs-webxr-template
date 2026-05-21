[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IMeshPrimitive

# Interface: IMeshPrimitive

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L167)

Loader interface with additional members.

## Extends

- `IMeshPrimitive`.[`IArrayItem`](IArrayItem.md)

## Properties

### attributes

> **attributes**: `object`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:682](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L682)

A dictionary object, where each key corresponds to mesh attribute semantic and each value is the index of the accessor containing attribute's data

#### Index Signature

\[`name`: `string`\]: `number`

#### Inherited from

`GLTF2.IMeshPrimitive.attributes`

***

### extensions?

> `optional` **extensions?**: `object`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.IMeshPrimitive.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.IMeshPrimitive.extras`

***

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L20)

The index of this item in the array.

#### Inherited from

[`IArrayItem`](IArrayItem.md).[`index`](IArrayItem.md#index)

***

### indices?

> `optional` **indices?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:688](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L688)

The index of the accessor that contains the indices

#### Inherited from

`GLTF2.IMeshPrimitive.indices`

***

### material?

> `optional` **material?**: `number`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:692](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L692)

The index of the material to apply to this primitive when rendering

#### Inherited from

`GLTF2.IMeshPrimitive.material`

***

### mode?

> `optional` **mode?**: `MeshPrimitiveMode`

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:696](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L696)

The type of primitives to render. All valid values correspond to WebGL enums

#### Inherited from

`GLTF2.IMeshPrimitive.mode`

***

### targets?

> `optional` **targets?**: `object`[]

Defined in: [babylonjs-source/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:700](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L700)

An array of Morph Targets, each  Morph Target is a dictionary mapping attributes (only POSITION, NORMAL, and TANGENT supported) to their deviations in the Morph Target

#### Index Signature

\[`name`: `string`\]: `number`

#### Inherited from

`GLTF2.IMeshPrimitive.targets`
