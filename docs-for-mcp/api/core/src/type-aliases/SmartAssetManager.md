[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmartAssetManager

# Type Alias: SmartAssetManager

> **SmartAssetManager** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L33)

Stateful handle for a scene's smart asset registry.

Smart asset behavior is exposed through module-level functions rather than
class methods so callers can import only the operations they need.

## Properties

### onAssetNotFound

> **onAssetNotFound**: ((`key`, `expectedUrl`) => `Promise`\<`string` \| `File` \| `null`\>) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L48)

Optional callback invoked when an asset cannot be found at its registered URL.
Return a new URL or File to retry loading, or null to skip the asset.

***

### onChangedObservable

> `readonly` **onChangedObservable**: [`Observable`](../classes/Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L42)

Fires when the smart asset registry or loaded asset state changes.

***

### scene

> `readonly` **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L37)

The scene this manager is attached to.
