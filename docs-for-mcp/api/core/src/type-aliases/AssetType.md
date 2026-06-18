[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AssetType

# Type Alias: AssetType\<T\>

> **AssetType**\<`T`\> = `T` *extends* [`Animation`](../enumerations/FlowGraphAssetType.md#animation) ? [`Animation`](../classes/Animation.md) : `T` *extends* [`AnimationGroup`](../enumerations/FlowGraphAssetType.md#animationgroup) ? [`AnimationGroup`](../classes/AnimationGroup.md) : `T` *extends* [`Mesh`](../enumerations/FlowGraphAssetType.md#mesh) ? [`Mesh`](../classes/Mesh.md) : `T` *extends* [`Material`](../enumerations/FlowGraphAssetType.md#material) ? [`Material`](../classes/Material.md) : `T` *extends* [`Camera`](../enumerations/FlowGraphAssetType.md#camera) ? [`Camera`](../classes/Camera.md) : `T` *extends* [`Light`](../enumerations/FlowGraphAssetType.md#light) ? [`Light`](../classes/Light.md) : `never`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphAssetsContext.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphAssetsContext.ts#L23)

## Type Parameters

### T

`T` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)
