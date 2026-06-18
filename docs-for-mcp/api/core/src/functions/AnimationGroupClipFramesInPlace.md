[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroupClipFramesInPlace

# Function: AnimationGroupClipFramesInPlace()

> **AnimationGroupClipFramesInPlace**(`animationGroup`, `fromFrame`, `toFrame`, `dontCloneAnimations?`): [`AnimationGroup`](../classes/AnimationGroup.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:1244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L1244)

Updates an existing animation, keeping only the frames that are inside a given frame range

## Parameters

### animationGroup

[`AnimationGroup`](../classes/AnimationGroup.md)

defines the animation group on which to operate

### fromFrame

`number`

defines the lower bound of the range

### toFrame

`number`

defines the upper bound of the range

### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the frames. Default is false, so animations will be cloned

## Returns

[`AnimationGroup`](../classes/AnimationGroup.md)

the animationGroup stripped from all the frames outside the given range
