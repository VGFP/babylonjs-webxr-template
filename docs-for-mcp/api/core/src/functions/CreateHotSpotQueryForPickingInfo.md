[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateHotSpotQueryForPickingInfo

# Function: CreateHotSpotQueryForPickingInfo()

> **CreateHotSpotQueryForPickingInfo**(`pickingInfo`): [`HotSpotQuery`](../type-aliases/HotSpotQuery.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts#L27)

Create a HotSpotQuery from a picking info

## Parameters

### pickingInfo

[`PickingInfo`](../classes/PickingInfo.md)

picking info to use

## Returns

[`HotSpotQuery`](../type-aliases/HotSpotQuery.md)

the created HotSpotQuery

## Remarks

If there is no pickedMesh or the pickedMesh has no indices, the faceId is used as the base index
