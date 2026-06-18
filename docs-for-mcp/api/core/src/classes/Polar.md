[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Polar

# Class: Polar

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L8)

Class used to store (r, theta) vector representation

## Constructors

### Constructor

> **new Polar**(`radius`, `theta`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L14)

Creates a new Polar object

#### Parameters

##### radius

`number`

the radius of the vector

##### theta

`number`

the angle of the vector

#### Returns

`Polar`

## Properties

### radius

> **radius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L15)

the radius of the vector

***

### theta

> **theta**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L16)

the angle of the vector

## Methods

### add()

> **add**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L63)

Adds the current Polar and the given Polar

#### Parameters

##### polar

`Polar`

the polar to add

#### Returns

`Polar`

the sum polar

***

### addInPlace()

> **addInPlace**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L74)

Adds the given polar to the current polar

#### Parameters

##### polar

`Polar`

the polar to add

#### Returns

`Polar`

the current polar

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`radius`, `theta`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L85)

Adds the provided values to the current polar

#### Parameters

##### radius

`number`

the amount to add to the radius

##### theta

`number`

the amount to add to the theta

#### Returns

`Polar`

the current polar

***

### addToRef()

> **addToRef**(`polar`, `ref`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L52)

Adds the current Polar and the given Polar and stores the result

#### Parameters

##### polar

`Polar`

the polar to add

##### ref

`Polar`

the polar to store the result in

#### Returns

`Polar`

the updated ref

***

### asArray()

> **asArray**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L42)

Converts the current polar to an array

#### Returns

`number`[]

the current polar as an array

***

### clone()

> **clone**(): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L219)

Clones the current polar

#### Returns

`Polar`

a clone of the current polar

***

### copyFrom()

> **copyFrom**(`source`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L228)

Copies the source polar into the current polar

#### Parameters

##### source

`Polar`

the polar to copy from

#### Returns

`Polar`

the current polar

***

### copyFromFloats()

> **copyFromFloats**(`radius`, `theta`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L240)

Copies the given values into the current polar

#### Parameters

##### radius

`number`

the radius to use

##### theta

`number`

the theta to use

#### Returns

`Polar`

the current polar

***

### divide()

> **divide**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L199)

Divides the current Polar by the given Polar

#### Parameters

##### polar

`Polar`

the polar to divide

#### Returns

`Polar`

the quotient polar

***

### divideInPlace()

> **divideInPlace**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L210)

Divides the current Polar by the given Polar

#### Parameters

##### polar

`Polar`

the polar to divide

#### Returns

`Polar`

the current polar

***

### divideToRef()

> **divideToRef**(`polar`, `ref`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L188)

Divides the current Polar by the given Polar and stores the result

#### Parameters

##### polar

`Polar`

the polar to divide

##### ref

`Polar`

the polar to store the result in

#### Returns

`Polar`

the updated ref

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L26)

Gets the class name

#### Returns

`string`

the string "Polar"

***

### multiply()

> **multiply**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L166)

Multiplies the given Polar with the current Polar

#### Parameters

##### polar

`Polar`

the polar to multiply

#### Returns

`Polar`

the product polar

***

### multiplyInPlace()

> **multiplyInPlace**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L177)

Multiplies the given Polar with the current Polar

#### Parameters

##### polar

`Polar`

the polar to multiply

#### Returns

`Polar`

the current polar

***

### multiplyToRef()

> **multiplyToRef**(`polar`, `ref`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L155)

Multiplies the given Polar with the current Polar and stores the result

#### Parameters

##### polar

`Polar`

the polar to multiply

##### ref

`Polar`

the polar to store the result in

#### Returns

`Polar`

the updated ref

***

### scale()

> **scale**(`scale`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L263)

Scales the current polar and returns a new polar with the scaled coordinates

#### Parameters

##### scale

`number`

defines the multiplication factor

#### Returns

`Polar`

the scaled polar

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L274)

Scales the current polar

#### Parameters

##### scale

`number`

defines the multiplication factor

#### Returns

`Polar`

the current polar

***

### scaleToRef()

> **scaleToRef**(`scale`, `ref`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L252)

Scales the current polar and stores the result

#### Parameters

##### scale

`number`

defines the multiplication factor

##### ref

`Polar`

where to store the result

#### Returns

`Polar`

the updated ref

***

### set()

> **set**(`radius`, `theta`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L285)

Sets the values of the current polar

#### Parameters

##### radius

`number`

the new radius

##### theta

`number`

the new theta

#### Returns

`Polar`

the current polar

***

### setAll()

> **setAll**(`value`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L296)

Sets the values of the current polar

#### Parameters

##### value

`number`

the new values

#### Returns

`Polar`

the current polar

***

### subtract()

> **subtract**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L108)

Subtracts the given Polar from the current Polar

#### Parameters

##### polar

`Polar`

the polar to subtract

#### Returns

`Polar`

the difference polar

***

### subtractFromFloats()

> **subtractFromFloats**(`radius`, `theta`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L143)

Subtracts the given floats from the current polar

#### Parameters

##### radius

`number`

the amount to subtract from the radius

##### theta

`number`

the amount to subtract from the theta

#### Returns

`Polar`

the difference polar

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**(`radius`, `theta`, `ref`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L131)

Subtracts the given floats from the current polar

#### Parameters

##### radius

`number`

the amount to subtract from the radius

##### theta

`number`

the amount to subtract from the theta

##### ref

`Polar`

the polar to store the result in

#### Returns

`Polar`

the updated ref

***

### subtractInPlace()

> **subtractInPlace**(`polar`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L119)

Subtracts the given Polar from the current Polar

#### Parameters

##### polar

`Polar`

the polar to subtract

#### Returns

`Polar`

the current polar

***

### subtractToRef()

> **subtractToRef**(`polar`, `ref`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L97)

Subtracts the given Polar from the current Polar and stores the result

#### Parameters

##### polar

`Polar`

the polar to subtract

##### ref

`Polar`

the polar to store the result in

#### Returns

`Polar`

the updated ref

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L34)

Converts the current polar to a string

#### Returns

`string`

the current polar as a string

***

### toVector2()

> **toVector2**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L317)

Gets the rectangular coordinates of the current Polar

#### Returns

[`Vector2`](Vector2.md)

the rectangular coordinates

***

### toVector2ToRef()

> **toVector2ToRef**(`ref`): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L306)

Gets the rectangular coordinates of the current Polar

#### Parameters

##### ref

[`Vector2`](Vector2.md)

the reference to assign the result

#### Returns

[`Vector2`](Vector2.md)

the updated reference

***

### FromArray()

> `static` **FromArray**(`array`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L351)

Converts an array of floats to a polar

#### Parameters

##### array

`number`[]

the array to convert

#### Returns

`Polar`

the converted polar

***

### FromVector2()

> `static` **FromVector2**(`v`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L340)

Converts a given Vector2 to its polar coordinates

#### Parameters

##### v

[`Vector2`](Vector2.md)

the Vector2 to convert

#### Returns

`Polar`

a Polar

***

### FromVector2ToRef()

> `static` **FromVector2ToRef**(`v`, `ref`): `Polar`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.polar.ts#L328)

Converts a given Vector2 to its polar coordinates

#### Parameters

##### v

[`Vector2`](Vector2.md)

the Vector2 to convert

##### ref

`Polar`

the reference to assign the result

#### Returns

`Polar`

the updated reference
