[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesAndAttributesForMorphTargets

# Function: PrepareDefinesAndAttributesForMorphTargets()

> **PrepareDefinesAndAttributesForMorphTargets**(`morphTargetManager`, `defines`, `attribs`, `mesh`, `usePositionMorph`, `useNormalMorph`, `useTangentMorph`, `useUVMorph`, `useUV2Morph`, `useColorMorph`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L88)

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
