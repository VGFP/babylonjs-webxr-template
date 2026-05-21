[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMakeAnimationAdditiveOptions

# Interface: IMakeAnimationAdditiveOptions

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L43)

Options to be used when creating an additive animation

## Extended by

- [`IMakeAnimationGroupAdditiveOptions`](IMakeAnimationGroupAdditiveOptions.md)

## Properties

### clipKeys?

> `optional` **clipKeys?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L73)

If true, the key frames will be clipped to the range specified by range or fromFrame / toFrame (default is false)

***

### clonedAnimationName?

> `optional` **clonedAnimationName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L60)

The name of the cloned animation if cloneOriginalAnimation is true. If not provided, use the original animation name

***

### cloneOriginalAnimation?

> `optional` **cloneOriginalAnimation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L56)

If true, the original animation will be cloned and converted to additive. If false, the original animation will be converted to additive (default is false)

***

### fromFrame?

> `optional` **fromFrame?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L65)

Together with toFrame, defines the range of the animation to convert to additive. Will only be used if range is not provided
If range and fromFrame / toFrame are not provided, the whole animation will be converted to additive

***

### range?

> `optional` **range?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L52)

The name of the animation range to convert to additive. If not provided, fromFrame / toFrame will be used
If fromFrame / toFrame are not provided either, the whole animation will be converted to additive

***

### referenceFrame?

> `optional` **referenceFrame?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L47)

The frame that the animation should be relative to (if not provided, 0 will be used)

***

### toFrame?

> `optional` **toFrame?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L69)

Together with fromFrame, defines the range of the animation to convert to additive.
