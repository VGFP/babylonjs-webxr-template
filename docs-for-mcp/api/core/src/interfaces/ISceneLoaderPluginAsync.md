[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISceneLoaderPluginAsync

# Interface: ISceneLoaderPluginAsync

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L249)

Interface used to define an async SceneLoader plugin

## Extends

- [`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md)

## Properties

### extensions

> `readonly` **extensions**: `string` \| [`ISceneLoaderPluginExtensions`](ISceneLoaderPluginExtensions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L131)

The file extensions supported by the plugin.

#### Inherited from

[`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md).[`extensions`](ISceneLoaderPluginBase.md#extensions)

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L126)

The friendly name of the plugin.

#### Inherited from

[`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md).[`name`](ISceneLoaderPluginBase.md#name)

## Methods

### canDirectLoad()?

> `optional` **canDirectLoad**(`data`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L138)

The callback that returns true if the data can be directly loaded.

#### Parameters

##### data

`string`

string containing the file data

#### Returns

`boolean`

if the data can be loaded directly

#### Inherited from

[`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md).[`canDirectLoad`](ISceneLoaderPluginBase.md#candirectload)

***

### directLoad()?

> `optional` **directLoad**(`scene`, `data`): `unknown`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L187)

The callback that returns the data to pass to the plugin if the data can be directly loaded.

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

scene loading this data

##### data

`string`

string containing the data

#### Returns

`unknown`

data to pass to the plugin

#### Inherited from

[`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md).[`directLoad`](ISceneLoaderPluginBase.md#directload)

***

### importMeshAsync()

> **importMeshAsync**(`meshesNames`, `scene`, `data`, `rootUrl`, `onProgress?`, `fileName?`): `Promise`\<[`ISceneLoaderAsyncResult`](ISceneLoaderAsyncResult.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L260)

Import meshes into a scene.

#### Parameters

##### meshesNames

`string` \| readonly `string`[] \| `null` \| `undefined`

An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported

##### scene

[`Scene`](../classes/Scene.md)

The scene to import into

##### data

`unknown`

The data to import

##### rootUrl

`string`

The root url for scene and resources

##### onProgress?

(`event`) => `void`

The callback when the load progresses

##### fileName?

`string`

Defines the name of the file to load

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](ISceneLoaderAsyncResult.md)\>

The loaded objects (e.g. meshes, particle systems, skeletons, animation groups, etc.)

***

### loadAssetContainerAsync()

> **loadAssetContainerAsync**(`scene`, `data`, `rootUrl`, `onProgress?`, `fileName?`): `Promise`\<[`AssetContainer`](../classes/AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L289)

Load into an asset container.

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

The scene to load into

##### data

`unknown`

The data to import

##### rootUrl

`string`

The root url for scene and resources

##### onProgress?

(`event`) => `void`

The callback when the load progresses

##### fileName?

`string`

Defines the name of the file to load

#### Returns

`Promise`\<[`AssetContainer`](../classes/AssetContainer.md)\>

The loaded asset container

***

### loadAsync()

> **loadAsync**(`scene`, `data`, `rootUrl`, `onProgress?`, `fileName?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L278)

Load into a scene.

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

The scene to load into

##### data

`unknown`

The data to import

##### rootUrl

`string`

The root url for scene and resources

##### onProgress?

(`event`) => `void`

The callback when the load progresses

##### fileName?

`string`

Defines the name of the file to load

#### Returns

`Promise`\<`void`\>

Nothing

***

### loadFile()?

> `optional` **loadFile**(`scene`, `fileOrUrl`, `rootUrl`, `onSuccess`, `onProgress?`, `useArrayBuffer?`, `onError?`, `name?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IFileRequest`](IFileRequest.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L169)

The callback called when loading from a url.

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

scene loading this url

##### fileOrUrl

`string` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `File`

file or url to load

##### rootUrl

`string`

root url to use to load assets

##### onSuccess

(`data`, `responseURL?`) => `void`

callback called when the file successfully loads

##### onProgress?

(`ev`) => `void`

callback called while file is loading (if the server supports this mode)

##### useArrayBuffer?

`boolean`

defines a boolean indicating that date must be returned as ArrayBuffer

##### onError?

(`request?`, `exception?`) => `void`

callback called when the file fails to load

##### name?

`string`

defines the name of the file when loading a binary file

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IFileRequest`](IFileRequest.md)\>

a file request object

#### Inherited from

[`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md).[`loadFile`](ISceneLoaderPluginBase.md#loadfile)

***

### rewriteRootURL()?

> `optional` **rewriteRootURL**(`rootUrl`, `responseURL?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L195)

The callback that allows custom handling of the root url based on the response url.

#### Parameters

##### rootUrl

`string`

the original root url

##### responseURL?

`string`

the response url if available

#### Returns

`string`

the new root url

#### Inherited from

[`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md).[`rewriteRootURL`](ISceneLoaderPluginBase.md#rewriterooturl)
