[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InstantiatedEntries

# Class: InstantiatedEntries

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L210)

Class used to store the output of the AssetContainer.instantiateAllMeshesToScene function

## Constructors

### Constructor

> **new InstantiatedEntries**(): `InstantiatedEntries`

#### Returns

`InstantiatedEntries`

## Properties

### animationGroups

> **animationGroups**: [`AnimationGroup`](AnimationGroup.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L224)

List of new animation groups

***

### rootNodes

> **rootNodes**: [`Node`](Node.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L214)

List of new root nodes (eg. nodes with no parent)

***

### skeletons

> **skeletons**: [`Skeleton`](Skeleton.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L219)

List of new skeletons

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L229)

Disposes the instantiated entries from the scene

#### Returns

`void`
