[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmartAssetManager

# Type Alias: SmartAssetManager

> **SmartAssetManager** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L37)

Stateful handle for a scene's smart asset registry.

Smart asset behavior is exposed through module-level functions rather than
class methods so callers can import only the operations they need.

## Properties

### onAssetNotFound

> **onAssetNotFound**: ((`key`, `expectedUrl`) => `Promise`\<`string` \| `File` \| `null`\>) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L52)

Optional callback invoked when an asset cannot be found at its registered URL.
Return a new URL or File to retry loading, or null to skip the asset.

***

### onChangedObservable

> `readonly` **onChangedObservable**: [`Observable`](../classes/Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L46)

Fires when the smart asset registry or loaded asset state changes.

***

### scene

> `readonly` **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L41)

The scene this manager is attached to.
