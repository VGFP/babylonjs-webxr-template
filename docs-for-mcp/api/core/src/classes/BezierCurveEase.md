[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BezierCurveEase

# Class: BezierCurveEase

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L346)

Easing function with a bezier shape (see link below).

## See

 - http://cubic-bezier.com/#.17,.67,.83,.67
 - https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#easing-functions

## Extends

- [`EasingFunction`](EasingFunction.md)

## Implements

- [`IEasingFunction`](../interfaces/IEasingFunction.md)

## Constructors

### Constructor

> **new BezierCurveEase**(`x1?`, `y1?`, `x2?`, `y2?`): `BezierCurveEase`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L355)

Instantiates a bezier function

#### Parameters

##### x1?

`number` = `0`

Defines the x component of the start tangent in the bezier curve

##### y1?

`number` = `0`

Defines the y component of the start tangent in the bezier curve

##### x2?

`number` = `1`

Defines the x component of the end tangent in the bezier curve

##### y2?

`number` = `1`

Defines the y component of the end tangent in the bezier curve

#### Returns

`BezierCurveEase`

#### See

http://cubic-bezier.com/#.17,.67,.83,.67

#### Overrides

[`EasingFunction`](EasingFunction.md).[`constructor`](EasingFunction.md#constructor)

## Properties

### x1

> **x1**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:357](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L357)

[0] Defines the x component of the start tangent in the bezier curve

***

### x2

> **x2**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L361)

[1] Defines the x component of the end tangent in the bezier curve

***

### y1

> **y1**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L359)

[0] Defines the y component of the start tangent in the bezier curve

***

### y2

> **y2**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L363)

[1] Defines the y component of the end tangent in the bezier curve

***

### EASINGMODE\_EASEIN

> `readonly` `static` **EASINGMODE\_EASEIN**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L28)

Interpolation follows the mathematical formula associated with the easing function.

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`EASINGMODE_EASEIN`](EasingFunction.md#easingmode_easein)

***

### EASINGMODE\_EASEINOUT

> `readonly` `static` **EASINGMODE\_EASEINOUT**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L38)

Interpolation uses EaseIn for the first half of the animation and EaseOut for the second half.

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`EASINGMODE_EASEINOUT`](EasingFunction.md#easingmode_easeinout)

***

### EASINGMODE\_EASEOUT

> `readonly` `static` **EASINGMODE\_EASEOUT**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L33)

Interpolation follows 100% interpolation minus the output of the formula associated with the easing function.

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`EASINGMODE_EASEOUT`](EasingFunction.md#easingmode_easeout)

## Methods

### ease()

> **ease**(`gradient`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L72)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L54)

Gets the current easing mode.

#### Returns

`number`

the easing mode

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`getEasingMode`](EasingFunction.md#geteasingmode)

***

### setEasingMode()

> **setEasingMode**(`easingMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/easing.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/easing.ts#L46)

Sets the easing mode of the current function.

#### Parameters

##### easingMode

`number`

Defines the willing mode (EASINGMODE_EASEIN, EASINGMODE_EASEOUT or EASINGMODE_EASEINOUT)

#### Returns

`void`

#### Inherited from

[`EasingFunction`](EasingFunction.md).[`setEasingMode`](EasingFunction.md#seteasingmode)
