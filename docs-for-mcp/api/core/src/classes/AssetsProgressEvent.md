[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AssetsProgressEvent

# Class: AssetsProgressEvent

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L197)

Class used to share progress information about assets loading

## Implements

- [`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md)

## Constructors

### Constructor

> **new AssetsProgressEvent**(`remainingCount`, `totalCount`, `task`): `AssetsProgressEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L217)

Creates a AssetsProgressEvent

#### Parameters

##### remainingCount

`number`

defines the number of remaining tasks to process

##### totalCount

`number`

defines the total number of tasks

##### task

[`AbstractAssetTask`](AbstractAssetTask.md)

defines the task that was just processed

#### Returns

`AssetsProgressEvent`

## Properties

### remainingCount

> **remainingCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L201)

Defines the number of remaining tasks to process

#### Implementation of

[`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md).[`remainingCount`](../interfaces/IAssetsProgressEvent.md#remainingcount)

***

### task

> **task**: [`AbstractAssetTask`](AbstractAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L209)

Defines the task that was just processed

#### Implementation of

[`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md).[`task`](../interfaces/IAssetsProgressEvent.md#task)

***

### totalCount

> **totalCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L205)

Defines the total number of tasks

#### Implementation of

[`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md).[`totalCount`](../interfaces/IAssetsProgressEvent.md#totalcount)
