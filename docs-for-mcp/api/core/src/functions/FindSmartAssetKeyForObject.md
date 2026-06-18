[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FindSmartAssetKeyForObject

# Function: FindSmartAssetKeyForObject()

> **FindSmartAssetKeyForObject**(`scene`, `object`): `string` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:441](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L441)

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
