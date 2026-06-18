[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEasingFunction

# Interface: IEasingFunction

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L8)

This represents the main contract an easing function should follow.
Easing functions are used throughout the animation system.

## See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#easing-functions

## Methods

### ease()

> **ease**(`gradient`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L17)

Given an input gradient between 0 and 1, this returns the corresponding value
of the easing function.
The link below provides some of the most common examples of easing functions.

#### Parameters

##### gradient

`number`

Defines the value between 0 and 1 we want the easing value for

#### Returns

`number`

the corresponding value on the curve defined by the easing function

#### See

https://easings.net/
