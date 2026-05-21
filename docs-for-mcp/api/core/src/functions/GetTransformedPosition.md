[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetTransformedPosition

# Function: GetTransformedPosition()

> **GetTransformedPosition**(`mesh`, `index`, `res`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts#L71)

Return a transformed local position from a mesh and vertex index

## Parameters

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

mesh used to get vertex array from

### index

`number`

vertex index

### res

[`Vector3`](../classes/Vector3.md)

resulting local position

## Returns

`boolean`

false if it was not possible to compute the position for that vertex
