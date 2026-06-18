[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISceneLoaderPluginMetadata

# Interface: ISceneLoaderPluginMetadata

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L122)

Metadata for a SceneLoader plugin that must also be provided by a plugin factory

## Extended by

- [`ISceneLoaderPluginFactory`](ISceneLoaderPluginFactory.md)
- [`ISceneLoaderPluginBase`](ISceneLoaderPluginBase.md)

## Properties

### extensions

> `readonly` **extensions**: `string` \| [`ISceneLoaderPluginExtensions`](ISceneLoaderPluginExtensions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L131)

The file extensions supported by the plugin.

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L126)

The friendly name of the plugin.

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
