[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationCreateAndStartHierarchyAnimation

# Function: AnimationCreateAndStartHierarchyAnimation()

> **AnimationCreateAndStartHierarchyAnimation**(`name`, `node`, `directDescendantsOnly`, `targetProperty`, `framePerSecond`, `totalFrame`, `from`, `to`, `loopMode?`, `easingFunction?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1339)

Create and start an animation on a node and its descendants

## Parameters

### name

`string`

defines the name of the global animation that will be run on all nodes

### node

[`Node`](../classes/Node.md)

defines the root node where the animation will take place

### directDescendantsOnly

`boolean`

if true only direct descendants will be used, if false direct and also indirect (children of children, an so on in a recursive manner) descendants will be used

### targetProperty

`string`

defines property to animate

### framePerSecond

`number`

defines the number of frame per second to use

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

defines the callback to call when an animation ends (will be called once per node)

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)[]\>

the list of animatables created for all nodes

## Example

```ts
https://www.babylonjs-playground.com/#MH0VLI
```
