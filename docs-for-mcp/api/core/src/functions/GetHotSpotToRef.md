[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetHotSpotToRef

# Function: GetHotSpotToRef()

> **GetHotSpotToRef**(`mesh`, `hotSpotQuery`, `resPosition`, `resNormal?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts#L148)

Compute a world space hotspot position
TmpVectors.Vector3[0..4] are modified by this function. Do not use them as result output.

## Parameters

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

mesh used to get hotspot from

### hotSpotQuery

[`HotSpotQuery`](../type-aliases/HotSpotQuery.md)

point indices and barycentric

### resPosition

[`Vector3`](../classes/Vector3.md)

output world position

### resNormal?

[`Vector3`](../classes/Vector3.md)

optional output world normal

## Returns

`boolean`

false if it was not possible to compute the hotspot position
