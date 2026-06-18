[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMakeAnimationAdditiveOptions

# Interface: IMakeAnimationAdditiveOptions

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L46)

Options to be used when creating an additive animation

## Extended by

- [`IMakeAnimationGroupAdditiveOptions`](IMakeAnimationGroupAdditiveOptions.md)

## Properties

### clipKeys?

> `optional` **clipKeys?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L76)

If true, the key frames will be clipped to the range specified by range or fromFrame / toFrame (default is false)

***

### clonedAnimationName?

> `optional` **clonedAnimationName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L63)

The name of the cloned animation if cloneOriginalAnimation is true. If not provided, use the original animation name

***

### cloneOriginalAnimation?

> `optional` **cloneOriginalAnimation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L59)

If true, the original animation will be cloned and converted to additive. If false, the original animation will be converted to additive (default is false)

***

### fromFrame?

> `optional` **fromFrame?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L68)

Together with toFrame, defines the range of the animation to convert to additive. Will only be used if range is not provided
If range and fromFrame / toFrame are not provided, the whole animation will be converted to additive

***

### range?

> `optional` **range?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L55)

The name of the animation range to convert to additive. If not provided, fromFrame / toFrame will be used
If fromFrame / toFrame are not provided either, the whole animation will be converted to additive

***

### referenceFrame?

> `optional` **referenceFrame?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L50)

The frame that the animation should be relative to (if not provided, 0 will be used)

***

### toFrame?

> `optional` **toFrame?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L72)

Together with fromFrame, defines the range of the animation to convert to additive.
