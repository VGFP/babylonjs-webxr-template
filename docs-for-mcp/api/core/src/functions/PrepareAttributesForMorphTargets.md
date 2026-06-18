[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareAttributesForMorphTargets

# Function: PrepareAttributesForMorphTargets()

> **PrepareAttributesForMorphTargets**(`attribs`, `mesh`, `defines`, `usePositionMorph?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L185)

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
