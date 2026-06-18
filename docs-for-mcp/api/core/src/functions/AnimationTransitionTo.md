[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationTransitionTo

# Function: AnimationTransitionTo()

> **AnimationTransitionTo**(`property`, `targetValue`, `host`, `scene`, `frameRate`, `transition`, `duration`, `onAnimationEnd?`, `stopCurrent?`, `customKeys?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1413)

Transition property of an object to a target value

## Parameters

### property

`string`

The property to transition

### targetValue

`any`

The target value of the property

### host

`any`

The object where the property to animate belongs

### scene

[`Scene`](../classes/Scene.md)

Scene used to run the animation

### frameRate

`number`

Framerate (in frame/s) to use

### transition

[`Animation`](../classes/Animation.md)

The transition to apply

### duration

`number`

The duration of the transition (in milliseconds)

### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Callback to run once the animation is complete

### stopCurrent?

`boolean` = `true`

Stop the current animations for this property (default: true)

### customKeys?

[`IAnimationKey`](../interfaces/IAnimationKey.md)[]

Custom animation keys for the transition

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

the animatable created for this transition
