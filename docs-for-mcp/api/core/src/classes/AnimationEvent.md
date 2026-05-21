[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationEvent

# Class: AnimationEvent

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationEvent.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationEvent.ts#L4)

Composed of a frame, and an action function

## Constructors

### Constructor

> **new AnimationEvent**(`frame`, `action`, `onlyOnce?`): `AnimationEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationEvent.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationEvent.ts#L16)

Initializes the animation event

#### Parameters

##### frame

`number`

The frame for which the event is triggered

##### action

(`currentFrame`) => `void`

The event to perform when triggered

##### onlyOnce?

`boolean`

Specifies if the event should be triggered only once

#### Returns

`AnimationEvent`

## Properties

### action

> **action**: (`currentFrame`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationEvent.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationEvent.ts#L20)

The event to perform when triggered *

#### Parameters

##### currentFrame

`number`

#### Returns

`void`

***

### frame

> **frame**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationEvent.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationEvent.ts#L18)

The frame for which the event is triggered *

***

### isDone

> **isDone**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationEvent.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationEvent.ts#L8)

Specifies if the animation event is done

***

### onlyOnce?

> `optional` **onlyOnce?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationEvent.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationEvent.ts#L22)

Specifies if the event should be triggered only once*
