[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISerializedSmartAssetMap

# Interface: ISerializedSmartAssetMap

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts#L27)

A versioned JSON document describing a smart asset map.
This is the on-disk format for persisting the asset table.

Runtime object ownership is intentionally not persisted — it is rebuilt from
each loaded `AssetContainer` after load. Persisting it would risk staleness.

## Properties

### assets

> `readonly` **assets**: `Record`\<`string`, `ISerializedSmartAssetEntry`\>

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts#L32)

Map of asset keys to their serialized entries.

***

### version

> `readonly` **version**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts#L29)

Schema version. Must be 1 for the current version.
