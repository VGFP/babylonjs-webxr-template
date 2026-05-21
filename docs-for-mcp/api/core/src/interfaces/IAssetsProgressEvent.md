[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAssetsProgressEvent

# Interface: IAssetsProgressEvent

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L179)

Define the interface used by progress events raised during assets loading

## Properties

### remainingCount

> **remainingCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L183)

Defines the number of remaining tasks to process

***

### task

> **task**: [`AbstractAssetTask`](../classes/AbstractAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L191)

Defines the task that was just processed

***

### totalCount

> **totalCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L187)

Defines the total number of tasks
