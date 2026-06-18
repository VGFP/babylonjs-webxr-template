[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / STLFileLoader

# Class: STLFileLoader

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L27)

STL file type loader.
This is a babylon scene loader plugin.

## Implements

- [`ISceneLoaderPlugin`](../../../core/src/interfaces/ISceneLoaderPlugin.md)

## Constructors

### Constructor

> **new STLFileLoader**(): `STLFileLoader`

#### Returns

`STLFileLoader`

## Properties

### extensions

> `readonly` **extensions**: `object` = `STLFileLoaderMetadata.extensions`

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L48)

Defines the extensions the stl loader is able to load.
force data to come in as an ArrayBuffer
we'll convert to string if it looks like it's an ASCII .stl

##### .stl

> `readonly` **.stl**: `object`

##### .stl.isBinary

> `readonly` **isBinary**: `true` = `true`

#### Implementation of

[`ISceneLoaderPlugin`](../../../core/src/interfaces/ISceneLoaderPlugin.md).[`extensions`](../../../core/src/interfaces/ISceneLoaderPlugin.md#extensions)

***

### name

> `readonly` **name**: `"stl"` = `STLFileLoaderMetadata.name`

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L41)

Defines the name of the plugin.

#### Implementation of

[`ISceneLoaderPlugin`](../../../core/src/interfaces/ISceneLoaderPlugin.md).[`name`](../../../core/src/interfaces/ISceneLoaderPlugin.md#name)

***

### DO\_NOT\_ALTER\_FILE\_COORDINATES

> `static` **DO\_NOT\_ALTER\_FILE\_COORDINATES**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L55)

Defines if Y and Z axes are swapped or not when loading an STL file.
The default is false to maintain backward compatibility. When set to
true, coordinates from the STL file are used without change.

## Methods

### importMesh()

> **importMesh**(`meshesNames`, `scene`, `data`, `rootUrl`, `meshes`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L66)

Import meshes into a scene.

#### Parameters

##### meshesNames

`any`

An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to import into

##### data

`any`

The data to import

##### rootUrl

`string`

The root url for scene and resources

##### meshes

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]\>

The meshes array to import into

#### Returns

`boolean`

True if successful or false otherwise

#### Implementation of

[`ISceneLoaderPlugin`](../../../core/src/interfaces/ISceneLoaderPlugin.md).[`importMesh`](../../../core/src/interfaces/ISceneLoaderPlugin.md#importmesh)

***

### load()

> **load**(`scene`, `data`, `rootUrl`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L129)

Load into a scene.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to load into

##### data

`any`

The data to import

##### rootUrl

`string`

The root url for scene and resources

#### Returns

`boolean`

true if successful or false otherwise

#### Implementation of

[`ISceneLoaderPlugin`](../../../core/src/interfaces/ISceneLoaderPlugin.md).[`load`](../../../core/src/interfaces/ISceneLoaderPlugin.md#load)

***

### loadAssetContainer()

> **loadAssetContainer**(`scene`, `data`, `rootUrl`): [`AssetContainer`](../../../core/src/classes/AssetContainer.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L141)

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

[`AssetContainer`](../../../core/src/classes/AssetContainer.md)

The loaded asset container

#### Implementation of

[`ISceneLoaderPlugin`](../../../core/src/interfaces/ISceneLoaderPlugin.md).[`loadAssetContainer`](../../../core/src/interfaces/ISceneLoaderPlugin.md#loadassetcontainer)
