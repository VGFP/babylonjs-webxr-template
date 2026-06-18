[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / MSFT\_lod

# Class: MSFT\_lod

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts#L43)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/MSFT_lod/README.md)

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts#L52)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### maxLODsToLoad

> **maxLODsToLoad**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts#L62)

Maximum number of LODs to load, starting from the lowest LOD.

***

### name

> `readonly` **name**: `"MSFT_lod"` = `NAME`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts#L47)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

***

### onMaterialLODsLoadedObservable

> **onMaterialLODsLoadedObservable**: [`Observable`](../../../../../core/src/classes/Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts#L76)

Observable raised when all material LODs of one level are loaded.
The event data is the index of the loaded LOD starting from zero.
Dispose the loader to cancel the loading of the next level of LODs.

***

### onNodeLODsLoadedObservable

> **onNodeLODsLoadedObservable**: [`Observable`](../../../../../core/src/classes/Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts#L69)

Observable raised when all node LODs of one level are loaded.
The event data is the index of the loaded LOD starting from zero.
Dispose the loader to cancel the loading of the next level of LODs.

***

### order

> **order**: `number` = `100`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.ts#L57)

Defines a number that determines the order the extensions are applied.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`order`](../interfaces/IGLTFLoaderExtension.md#order)
