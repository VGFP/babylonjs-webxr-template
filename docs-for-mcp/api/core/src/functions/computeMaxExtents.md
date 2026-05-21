[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / computeMaxExtents

# Function: computeMaxExtents()

> **computeMaxExtents**(`meshes`, `animationGroup?`, `animationStep?`): `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUtils.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshUtils.ts#L36)

Computes the maximum extents of the given meshes considering animation, skeleton, and morph targets.

## Parameters

### meshes

[`AbstractMesh`](../classes/AbstractMesh.md)[]

The array of meshes to compute

### animationGroup?

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroup`](../classes/AnimationGroup.md)\> = `null`

An optional animation group to animate (must be started to take effect)

### animationStep?

`number` = `...`

An optional value indicating the number of seconds to step while looping through the given animation group

## Returns

`object`[]

An array of world space extents corresponding to the given meshes
