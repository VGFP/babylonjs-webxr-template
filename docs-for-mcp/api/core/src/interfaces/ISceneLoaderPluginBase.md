[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISceneLoaderPluginBase

# Interface: ISceneLoaderPluginBase

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L156)

Interface used to define the base of ISceneLoaderPlugin and ISceneLoaderPluginAsync

## Extends

- [`ISceneLoaderPluginMetadata`](ISceneLoaderPluginMetadata.md)

## Extended by

- [`ISceneLoaderPlugin`](ISceneLoaderPlugin.md)
- [`ISceneLoaderPluginAsync`](ISceneLoaderPluginAsync.md)

## Properties

### extensions

> `readonly` **extensions**: `string` \| [`ISceneLoaderPluginExtensions`](ISceneLoaderPluginExtensions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L131)

The file extensions supported by the plugin.

#### Inherited from

[`ISceneLoaderPluginMetadata`](ISceneLoaderPluginMetadata.md).[`extensions`](ISceneLoaderPluginMetadata.md#extensions)

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L126)

The friendly name of the plugin.

#### Inherited from

[`ISceneLoaderPluginMetadata`](ISceneLoaderPluginMetadata.md).[`name`](ISceneLoaderPluginMetadata.md#name)

## Methods

### canDirectLoad()?

> `optional` **canDirectLoad**(`data`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L138)

The callback that returns true if the data can be directly loaded.

#### Parameters

##### data

`string`

string containing the file data

#### Returns

`boolean`

if the data can be loaded directly

#### Inherited from

[`ISceneLoaderPluginMetadata`](ISceneLoaderPluginMetadata.md).[`canDirectLoad`](ISceneLoaderPluginMetadata.md#candirectload)

***

### directLoad()?

> `optional` **directLoad**(`scene`, `data`): `unknown`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L187)

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

***

### loadFile()?

> `optional` **loadFile**(`scene`, `fileOrUrl`, `rootUrl`, `onSuccess`, `onProgress?`, `useArrayBuffer?`, `onError?`, `name?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IFileRequest`](IFileRequest.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L169)

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

***

### rewriteRootURL()?

> `optional` **rewriteRootURL**(`rootUrl`, `responseURL?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L195)

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
