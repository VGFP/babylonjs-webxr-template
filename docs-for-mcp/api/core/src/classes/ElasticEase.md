[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ElasticEase

# Class: ElasticEase

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L195)

Easing function with an elastic shape (see link below).

## See

 - https://easings.net/#easeInElastic
 - https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#easing-functions

## Extends

- [`EasingFunction`](EasingFunction.md)

## Implements

- [`IEasingFunction`](../interfaces/IEasingFunction.md)

## Constructors

### Constructor

> **new ElasticEase**(`oscillations?`, `springiness?`): `ElasticEase`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L202)

Instantiates an elastic easing function

#### Parameters

##### oscillations?

`number` = `3`

Defines the number of oscillations

##### springiness?

`number` = `3`

Defines the amplitude of the oscillations

#### Returns

`ElasticEase`

#### See

https://easings.net/#easeInElastic

#### Overrides

[`EasingFunction`](EasingFunction.md).[`constructor`](EasingFunction.md#constructor)

## Properties

### oscillations

> **oscillations**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L204)

[3] Defines the number of oscillations

***

### springiness

> **springiness**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L206)

[3] Defines the amplitude of the oscillations

***

### EASINGMODE\_EASEIN

> `readonly` `static` **EASINGMODE\_EASEIN**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L28)

Interpolation follows the mathematical formula associated with the easing function.

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`EASINGMODE_EASEIN`](EasingFunction.md#easingmode_easein)

***

### EASINGMODE\_EASEINOUT

> `readonly` `static` **EASINGMODE\_EASEINOUT**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L38)

Interpolation uses EaseIn for the first half of the animation and EaseOut for the second half.

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`EASINGMODE_EASEINOUT`](EasingFunction.md#easingmode_easeinout)

***

### EASINGMODE\_EASEOUT

> `readonly` `static` **EASINGMODE\_EASEOUT**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L33)

Interpolation follows 100% interpolation minus the output of the formula associated with the easing function.

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`EASINGMODE_EASEOUT`](EasingFunction.md#easingmode_easeout)

## Methods

### ease()

> **ease**(`gradient`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L72)

Given an input gradient between 0 and 1, this returns the corresponding value
of the easing function.

#### Parameters

##### gradient

`number`

Defines the value between 0 and 1 we want the easing value for

#### Returns

`number`

the corresponding value on the curve defined by the easing function

#### Implementation of

[`IEasingFunction`](../interfaces/IEasingFunction.md).[`ease`](../interfaces/IEasingFunction.md#ease)

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`ease`](EasingFunction.md#ease)

***

### getEasingMode()

> **getEasingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L54)

Gets the current easing mode.

#### Returns

`number`

the easing mode

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`getEasingMode`](EasingFunction.md#geteasingmode)

***

### setEasingMode()

> **setEasingMode**(`easingMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/easing.ts#L46)

Sets the easing mode of the current function.

#### Parameters

##### easingMode

`number`

Defines the willing mode (EASINGMODE_EASEIN, EASINGMODE_EASEOUT or EASINGMODE_EASEINOUT)

#### Returns

`void`

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`setEasingMode`](EasingFunction.md#seteasingmode)
