[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAnimationKey

# Interface: IAnimationKey

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L6)

Defines an interface which represents an animation key frame

## Properties

### easingFunction?

> `optional` **easingFunction?**: [`IEasingFunction`](IEasingFunction.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L34)

The easing function associated with the key frame (optional). If not defined, the easing function defined at the animation level (if any) will be used instead

***

### frame

> **frame**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L10)

Frame of the key frame

***

### inTangent?

> `optional` **inTangent?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L18)

The input tangent for the cubic hermite spline

***

### interpolation?

> `optional` **interpolation?**: [`AnimationKeyInterpolation`](../enumerations/AnimationKeyInterpolation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L26)

The animation interpolation type

***

### lockedTangent?

> `optional` **lockedTangent?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L30)

Property defined by UI tools to link (or not ) the tangents

***

### outTangent?

> `optional` **outTangent?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L22)

The output tangent for the cubic hermite spline

***

### value

> **value**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationKey.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationKey.ts#L14)

Value at the specifies key frame
