[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / MTLFileLoader

# Class: MTLFileLoader

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/mtlFileLoader.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/mtlFileLoader.ts#L11)

Class reading and parsing the MTL file bundled with the obj file.

## Constructors

### Constructor

> **new MTLFileLoader**(): `MTLFileLoader`

#### Returns

`MTLFileLoader`

## Properties

### materials

> **materials**: [`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/mtlFileLoader.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/mtlFileLoader.ts#L20)

All material loaded from the mtl will be set here

***

### INVERT\_TEXTURE\_Y

> `static` **INVERT\_TEXTURE\_Y**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/mtlFileLoader.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/mtlFileLoader.ts#L15)

Invert Y-Axis of referenced textures on load

## Methods

### parseMTL()

> **parseMTL**(`scene`, `data`, `rootUrl`, `assetContainer`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/mtlFileLoader.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/mtlFileLoader.ts#L33)

This function will read the mtl file and create each material described inside
This function could be improve by adding :
-some component missing (Ni, Tf...)
-including the specific options available

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the scene the material will be created in

##### data

`string` \| `ArrayBuffer`

defines the mtl data to parse

##### rootUrl

`string`

defines the rooturl to use in order to load relative dependencies

##### assetContainer

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

defines the asset container to store the material in (can be null)

#### Returns

`void`
