[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesAndAttributesForMorphTargets

# Function: PrepareDefinesAndAttributesForMorphTargets()

> **PrepareDefinesAndAttributesForMorphTargets**(`morphTargetManager`, `defines`, `attribs`, `mesh`, `usePositionMorph`, `useNormalMorph`, `useTangentMorph`, `useUVMorph`, `useUV2Morph`, `useColorMorph`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L75)

Prepares the list of attributes and defines required for morph targets.

## Parameters

### morphTargetManager

[`MorphTargetManager`](../classes/MorphTargetManager.md)

The manager for the morph targets

### defines

`string`[]

The current list of defines

### attribs

`string`[]

The current list of attributes

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh to prepare the defines and attributes for

### usePositionMorph

`boolean`

Whether the position morph target is used

### useNormalMorph

`boolean`

Whether the normal morph target is used

### useTangentMorph

`boolean`

Whether the tangent morph target is used

### useUVMorph

`boolean`

Whether the UV morph target is used

### useUV2Morph

`boolean`

Whether the UV2 morph target is used

### useColorMorph

`boolean`

Whether the color morph target is used

## Returns

`number`

The maxSimultaneousMorphTargets for the effect
