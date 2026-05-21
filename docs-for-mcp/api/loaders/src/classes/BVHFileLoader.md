[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / BVHFileLoader

# Class: BVHFileLoader

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L30)

**`Experimental`**

BVH file type loader.
This is a babylon scene loader plugin.

## Implements

- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new BVHFileLoader**(`loadingOptions?`): `BVHFileLoader`

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L45)

**`Experimental`**

Creates loader for bvh motion files

#### Parameters

##### loadingOptions?

`Partial`\<`Readonly`\<`BVHLoadingOptions`\>\>

Options for the bvh loader

#### Returns

`BVHFileLoader`

## Properties

### name

> `readonly` **name**: `"bvh"` = `BVHFileLoaderMetadata.name`

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L34)

**`Experimental`**

Name of the loader ("bvh")

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

## Methods

### canDirectLoad()

> **canDirectLoad**(`data`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L65)

**`Experimental`**

If the data string can be loaded directly.

#### Parameters

##### data

`string`

direct load data

#### Returns

`boolean`

if the data can be loaded directly

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`canDirectLoad`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#candirectload)

***

### importMeshAsync()

> **importMeshAsync**(`_meshesNames`, `scene`, `data`): `Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L85)

**`Experimental`**

Imports  from the loaded gaussian splatting data and adds them to the scene

#### Parameters

##### \_meshesNames

`string` \| readonly `string`[] \| `null` \| `undefined`

a string or array of strings of the mesh names that should be loaded from the file

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the meshes should be added to

##### data

`unknown`

the bvh data to load

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

a promise containing the loaded skeletons and animations

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`importMeshAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#importmeshasync)

***

### isBvhHeader()

> **isBvhHeader**(`text`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L69)

**`Experimental`**

#### Parameters

##### text

`string`

#### Returns

`boolean`

***

### isNotBvhHeader()

> **isNotBvhHeader**(`text`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L73)

**`Experimental`**

#### Parameters

##### text

`string`

#### Returns

`boolean`

***

### loadAssetContainerAsync()

> **loadAssetContainerAsync**(`scene`, `data`): `Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L142)

**`Experimental`**

Load into an asset container.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to load into

##### data

`unknown`

The data to import

#### Returns

`Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

The loaded asset container

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAssetContainerAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadassetcontainerasync)

***

### loadAsync()

> **loadAsync**(`scene`, `data`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L119)

**`Experimental`**

Imports all objects from the loaded bvh data and adds them to the scene

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the objects should be added to

##### data

`unknown`

the bvh data to load

#### Returns

`Promise`\<`void`\>

a promise which completes when objects have been loaded to the scene

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadasync)
