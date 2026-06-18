[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroupMergeAnimationGroups

# Function: AnimationGroupMergeAnimationGroups()

> **AnimationGroupMergeAnimationGroups**(`animationGroups`, `disposeSource?`, `normalize?`, `weight?`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroup`](../classes/AnimationGroup.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:999](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L999)

Merge the array of animation groups into a new animation group

## Parameters

### animationGroups

[`AnimationGroup`](../classes/AnimationGroup.md)[]

List of animation groups to merge

### disposeSource?

`boolean` = `true`

If true, animation groups will be disposed after being merged (default: true)

### normalize?

`boolean` = `false`

If true, animation groups will be normalized before being merged, so that all animations have the same "from" and "to" frame (default: false)

### weight?

`number`

Weight for the new animation group. If not provided, it will inherit the weight from the first animation group of the array

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroup`](../classes/AnimationGroup.md)\>

The new animation group or null if no animation groups were passed
