[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / SPLATFileLoader

# Class: SPLATFileLoader

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L50)

**`Experimental`**

SPLAT file type loader.
This is a babylon scene loader plugin.

## Implements

- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new SPLATFileLoader**(`loadingOptions?`): `SPLATFileLoader`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L69)

**`Experimental`**

Creates loader for gaussian splatting files

#### Parameters

##### loadingOptions?

`Partial`\<`Readonly`\<[`SPLATLoadingOptions`](../type-aliases/SPLATLoadingOptions.md)\>\> = `{}`

options for loading and parsing splat and PLY files.

#### Returns

`SPLATFileLoader`

## Properties

### extensions

> `readonly` **extensions**: `object` = `SPLATFileLoaderMetadata.extensions`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L63)

**`Experimental`**

Defines the extensions the splat loader is able to load.
force data to come in as an ArrayBuffer

##### .json

> `readonly` **.json**: `object`

##### .json.isBinary

> `readonly` **isBinary**: `false` = `false`

##### .ply

> `readonly` **.ply**: `object`

##### .ply.isBinary

> `readonly` **isBinary**: `true` = `true`

##### .sog

> `readonly` **.sog**: `object`

##### .sog.isBinary

> `readonly` **isBinary**: `true` = `true`

##### .splat

> `readonly` **.splat**: `object`

##### .splat.isBinary

> `readonly` **isBinary**: `true` = `true`

##### .spz

> `readonly` **.spz**: `object`

##### .spz.isBinary

> `readonly` **isBinary**: `true` = `true`

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`extensions`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#extensions)

***

### name

> `readonly` **name**: `"splat"` = `SPLATFileLoaderMetadata.name`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L54)

**`Experimental`**

Defines the name of the plugin.

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

## Methods

### importMeshAsync()

> **importMeshAsync**(`meshesNames`, `scene`, `data`, `rootUrl`, `_onProgress?`, `_fileName?`): `Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L95)

**`Experimental`**

Imports  from the loaded gaussian splatting data and adds them to the scene

#### Parameters

##### meshesNames

`any`

a string or array of strings of the mesh names that should be loaded from the file

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the meshes should be added to

##### data

`any`

the gaussian splatting data to load

##### rootUrl

`string`

root url to load from

##### \_onProgress?

(`event`) => `void`

callback called while file is loading

##### \_fileName?

`string`

Defines the name of the file to load

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

a promise containing the loaded meshes, particles, skeletons and animations

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`importMeshAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#importmeshasync)

***

### loadAssetContainerAsync()

> **loadAssetContainerAsync**(`scene`, `data`, `rootUrl`): `Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:501](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L501)

**`Experimental`**

Load into an asset container.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to load into

##### data

`string`

The data to import

##### rootUrl

`string`

The root url for scene and resources

#### Returns

`Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

The loaded asset container

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAssetContainerAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadassetcontainerasync)

***

### loadAsync()

> **loadAsync**(`scene`, `data`, `rootUrl`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L532)

**`Experimental`**

Imports all objects from the loaded OBJ data and adds them to the scene

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the objects should be added to

##### data

`string`

the OBJ data to load

##### rootUrl

`string`

root url to load from

#### Returns

`Promise`\<`void`\>

a promise which completes when objects have been loaded to the scene

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadasync)
