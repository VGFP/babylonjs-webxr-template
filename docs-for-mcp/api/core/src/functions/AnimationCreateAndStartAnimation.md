[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationCreateAndStartAnimation

# Function: AnimationCreateAndStartAnimation()

> **AnimationCreateAndStartAnimation**(`name`, `target`, `targetProperty`, `framePerSecond`, `totalFrame`, `from`, `to`, `loopMode?`, `easingFunction?`, `onAnimationEnd?`, `scene?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1293)

Create and start an animation on a node

## Parameters

### name

`string`

defines the name of the global animation that will be run on all nodes

### target

`any`

defines the target where the animation will take place

### targetProperty

`string`

defines property to animate

### framePerSecond

`number`

defines the number of frame per second yo use

### totalFrame

`number`

defines the number of frames in total

### from

`any`

defines the initial value

### to

`any`

defines the final value

### loopMode?

`number`

defines which loop mode you want to use (off by default)

### easingFunction?

[`EasingFunction`](../classes/EasingFunction.md)

defines the easing function to use (linear by default)

### onAnimationEnd?

() => `void`

defines the callback to call when animation end

### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

the animatable created for this animation
