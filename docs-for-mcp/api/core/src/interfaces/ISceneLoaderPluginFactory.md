[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISceneLoaderPluginFactory

# Interface: ISceneLoaderPluginFactory

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L144)

Interface used by SceneLoader plugin factory

## Extends

- [`ISceneLoaderPluginMetadata`](ISceneLoaderPluginMetadata.md)

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

### createPlugin()

> **createPlugin**(`options`): [`ISceneLoaderPlugin`](ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](ISceneLoaderPluginAsync.md) \| `Promise`\<[`ISceneLoaderPlugin`](ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](ISceneLoaderPluginAsync.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L150)

Function called to create a new plugin

#### Parameters

##### options

[`SceneLoaderPluginOptions`](SceneLoaderPluginOptions.md)

plugin options that were passed to the SceneLoader operation

#### Returns

[`ISceneLoaderPlugin`](ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](ISceneLoaderPluginAsync.md) \| `Promise`\<[`ISceneLoaderPlugin`](ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](ISceneLoaderPluginAsync.md)\>

the new plugin
