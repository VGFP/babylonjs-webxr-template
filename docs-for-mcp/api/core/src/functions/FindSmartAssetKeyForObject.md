[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FindSmartAssetKeyForObject

# Function: FindSmartAssetKeyForObject()

> **FindSmartAssetKeyForObject**(`scene`, `object`): `string` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L416)

Finds which smart asset key owns a scene object.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose registry to search.

### object

[`Node`](../classes/Node.md) \| [`Material`](../classes/Material.md) \| [`AnimationGroup`](../classes/AnimationGroup.md) \| [`BaseTexture`](../classes/BaseTexture.md)

A scene object.

## Returns

`string` \| `undefined`

The key, or undefined if the object is not tracked.
