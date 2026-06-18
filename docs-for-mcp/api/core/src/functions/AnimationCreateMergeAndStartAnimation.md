[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationCreateMergeAndStartAnimation

# Function: AnimationCreateMergeAndStartAnimation()

> **AnimationCreateMergeAndStartAnimation**(`name`, `node`, `targetProperty`, `framePerSecond`, `totalFrame`, `from`, `to`, `loopMode?`, `easingFunction?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1376](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1376)

Creates a new animation, merges it with the existing animations and starts it

## Parameters

### name

`string`

Name of the animation

### node

[`Node`](../classes/Node.md)

Node which contains the scene that begins the animations

### targetProperty

`string`

Specifies which property to animate

### framePerSecond

`number`

The frames per second of the animation

### totalFrame

`number`

The total number of frames

### from

`any`

The frame at the beginning of the animation

### to

`any`

The frame at the end of the animation

### loopMode?

`number`

Specifies the loop mode of the animation

### easingFunction?

[`EasingFunction`](../classes/EasingFunction.md)

(Optional) The easing function of the animation, which allow custom mathematical formulas for animations

### onAnimationEnd?

() => `void`

Callback to run once the animation is complete

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

Nullable animation
