[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Spherical

# Class: Spherical

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L359)

Class used for (radius, theta, phi) vector representation.

## Constructors

### Constructor

> **new Spherical**(`radius`, `theta`, `phi`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L366)

Creates a new Spherical object from the given spherical coordinates

#### Parameters

##### radius

`number`

spherical radius

##### theta

`number`

angle from positive y axis to radial line from 0 to PI (vertical)

##### phi

`number`

angle from positive x axis measured anticlockwise from -PI to PI (horizontal)

#### Returns

`Spherical`

## Properties

### phi

> **phi**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:369](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L369)

angle from positive x axis measured anticlockwise from -PI to PI (horizontal)

***

### radius

> **radius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L367)

spherical radius

***

### theta

> **theta**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L368)

angle from positive y axis to radial line from 0 to PI (vertical)

## Methods

### add()

> **add**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:418](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L418)

Adds the current Spherical and the given Spherical

#### Parameters

##### spherical

`Spherical`

the spherical to add

#### Returns

`Spherical`

the sum spherical

***

### addInPlace()

> **addInPlace**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L429)

Adds the given spherical to the current spherical

#### Parameters

##### spherical

`Spherical`

the spherical to add

#### Returns

`Spherical`

the current spherical

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`radius`, `theta`, `phi`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L441)

Adds the provided values to the current spherical

#### Parameters

##### radius

`number`

the amount to add to the radius

##### theta

`number`

the amount to add to the theta

##### phi

`number`

the amount to add to the phi

#### Returns

`Spherical`

the current spherical

***

### addToRef()

> **addToRef**(`spherical`, `ref`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L406)

Adds the current Spherical and the given Spherical and stores the result

#### Parameters

##### spherical

`Spherical`

the spherical to add

##### ref

`Spherical`

the spherical to store the result in

#### Returns

`Spherical`

the updated ref

***

### asArray()

> **asArray**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L396)

Converts the current spherical to an array

#### Returns

`number`[]

the current spherical as an array

***

### clone()

> **clone**(): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L582)

Clones the current spherical

#### Returns

`Spherical`

a clone of the current spherical

***

### copyFrom()

> **copyFrom**(`source`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L591)

Copies the source spherical into the current spherical

#### Parameters

##### source

`Spherical`

the spherical to copy from

#### Returns

`Spherical`

the current spherical

***

### copyFromFloats()

> **copyFromFloats**(`radius`, `theta`, `phi`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L605)

Copies the given values into the current spherical

#### Parameters

##### radius

`number`

the radius to use

##### theta

`number`

the theta to use

##### phi

`number`

the phi to use

#### Returns

`Spherical`

the current spherical

***

### divide()

> **divide**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:562](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L562)

Divides the current Spherical by the given Spherical

#### Parameters

##### spherical

`Spherical`

the spherical to divide

#### Returns

`Spherical`

the quotient spherical

***

### divideInPlace()

> **divideInPlace**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:573](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L573)

Divides the current Spherical by the given Spherical

#### Parameters

##### spherical

`Spherical`

the spherical to divide

#### Returns

`Spherical`

the current spherical

***

### divideToRef()

> **divideToRef**(`spherical`, `ref`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L550)

Divides the current Spherical by the given Spherical and stores the result

#### Parameters

##### spherical

`Spherical`

the spherical to divide

##### ref

`Spherical`

the spherical to store the result in

#### Returns

`Spherical`

the updated ref

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L380)

Gets the class name

#### Returns

`string`

the string "Spherical"

***

### multiply()

> **multiply**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:528](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L528)

Multiplies the given Spherical with the current Spherical

#### Parameters

##### spherical

`Spherical`

the spherical to multiply

#### Returns

`Spherical`

the product spherical

***

### multiplyInPlace()

> **multiplyInPlace**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:539](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L539)

Multiplies the given Spherical with the current Spherical

#### Parameters

##### spherical

`Spherical`

the spherical to multiply

#### Returns

`Spherical`

the current spherical

***

### multiplyToRef()

> **multiplyToRef**(`spherical`, `ref`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:516](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L516)

Multiplies the given Spherical with the current Spherical and stores the result

#### Parameters

##### spherical

`Spherical`

the spherical to multiply

##### ref

`Spherical`

the spherical to store the result in

#### Returns

`Spherical`

the updated ref

***

### scale()

> **scale**(`scale`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L630)

Scales the current spherical and returns a new spherical with the scaled coordinates

#### Parameters

##### scale

`number`

defines the multiplication factor

#### Returns

`Spherical`

the scaled spherical

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:641](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L641)

Scales the current spherical

#### Parameters

##### scale

`number`

defines the multiplication factor

#### Returns

`Spherical`

the current spherical

***

### scaleToRef()

> **scaleToRef**(`scale`, `ref`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:618](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L618)

Scales the current spherical and stores the result

#### Parameters

##### scale

`number`

defines the multiplication factor

##### ref

`Spherical`

where to store the result

#### Returns

`Spherical`

the updated ref

***

### set()

> **set**(`radius`, `theta`, `phi`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:653](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L653)

Sets the values of the current spherical

#### Parameters

##### radius

`number`

the new radius

##### theta

`number`

the new theta

##### phi

`number`

the new phi

#### Returns

`Spherical`

the current spherical

***

### setAll()

> **setAll**(`value`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:665](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L665)

Sets the values of the current spherical

#### Parameters

##### value

`number`

the new values

#### Returns

`Spherical`

the current spherical

***

### subtract()

> **subtract**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:466](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L466)

Subtracts the given Spherical from the current Spherical

#### Parameters

##### spherical

`Spherical`

the spherical to subtract

#### Returns

`Spherical`

the difference spherical

***

### subtractFromFloats()

> **subtractFromFloats**(`radius`, `theta`, `phi`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L504)

Subtracts the given floats from the current spherical

#### Parameters

##### radius

`number`

the amount to subtract from the radius

##### theta

`number`

the amount to subtract from the theta

##### phi

`number`

the amount to subtract from the phi

#### Returns

`Spherical`

the difference spherical

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**(`radius`, `theta`, `phi`, `ref`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L490)

Subtracts the given floats from the current spherical

#### Parameters

##### radius

`number`

the amount to subtract from the radius

##### theta

`number`

the amount to subtract from the theta

##### phi

`number`

the amount to subtract from the phi

##### ref

`Spherical`

the spherical to store the result in

#### Returns

`Spherical`

the updated ref

***

### subtractInPlace()

> **subtractInPlace**(`spherical`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L477)

Subtracts the given Spherical from the current Spherical

#### Parameters

##### spherical

`Spherical`

the spherical to subtract

#### Returns

`Spherical`

the current spherical

***

### subtractToRef()

> **subtractToRef**(`spherical`, `ref`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:454](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L454)

Subtracts the given Spherical from the current Spherical and stores the result

#### Parameters

##### spherical

`Spherical`

the spherical to subtract

##### ref

`Spherical`

the spherical to store the result in

#### Returns

`Spherical`

the updated ref

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L388)

Converts the current spherical to a string

#### Returns

`string`

the current spherical as a string

***

### toVector3()

> **toVector3**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:687](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L687)

Gets a Vector3 from the current spherical coordinates

#### Returns

[`Vector3`](Vector3.md)

the (x, y,z) form of the current Spherical

***

### toVector3ToRef()

> **toVector3ToRef**(`ref`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:675](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L675)

Assigns the rectangular coordinates of the current Spherical to a Vector3

#### Parameters

##### ref

[`Vector3`](Vector3.md)

the Vector3 to update

#### Returns

[`Vector3`](Vector3.md)

the updated Vector3

***

### FromArray()

> `static` **FromArray**(`array`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:721](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L721)

Converts an array of floats to a spherical

#### Parameters

##### array

`number`[]

the array to convert

#### Returns

`Spherical`

the converted spherical

***

### FromVector3()

> `static` **FromVector3**(`vector`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:710](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L710)

Gets a Spherical from a Vector3

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the vector in (x, y, z) coordinate space

#### Returns

`Spherical`

a new Spherical

***

### FromVector3ToRef()

> `static` **FromVector3ToRef**(`vector`, `ref`): `Spherical`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.polar.ts:698](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.polar.ts#L698)

Assigns the spherical coordinates from a Vector3

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the vector to convert

##### ref

`Spherical`

the Spherical to update

#### Returns

`Spherical`

the updated ref
