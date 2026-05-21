[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareAttributesForMorphTargets

# Function: PrepareAttributesForMorphTargets()

> **PrepareAttributesForMorphTargets**(`attribs`, `mesh`, `defines`, `usePositionMorph?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L172)

Prepares the list of attributes required for morph targets according to the effect defines.

## Parameters

### attribs

`string`[]

The current list of supported attribs

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh to prepare the morph targets attributes for

### defines

`any`

The current Defines of the effect

### usePositionMorph?

`boolean` = `true`

Whether the position morph target is used

## Returns

`void`
