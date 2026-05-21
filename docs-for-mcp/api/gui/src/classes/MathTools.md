[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / MathTools

# Class: MathTools

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/math2D.ts#L248)

Useful math functions

## Constructors

### Constructor

> **new MathTools**(): `MathTools`

#### Returns

`MathTools`

## Properties

### DefaultRoundingPrecision

> `static` **DefaultRoundingPrecision**: `number` = `100`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/math2D.ts#L255)

Default rounding precision for GUI elements. It should be
set to a power of ten, where the exponent means the number
of decimal digits to round to, i.e, 100 means 2 decimal digits,
1000 means 3 decimal digits, etc. Default is 100 (2 decimal digits).

## Methods

### Round()

> `static` **Round**(`value`, `precision?`): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/math2D.ts#L263)

Rounds a number to the nearest multiple of a given precision

#### Parameters

##### value

`number`

the value to be rounded

##### precision?

`number` = `MathTools.DefaultRoundingPrecision`

the multiple to which the value will be rounded. Default is 100 (2 decimal digits)

#### Returns

`number`
