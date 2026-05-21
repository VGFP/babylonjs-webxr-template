[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SphericalPolynomial

# Class: SphericalPolynomial

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L334)

Class representing spherical polynomial coefficients to the 3rd degree

## Constructors

### Constructor

> **new SphericalPolynomial**(): `SphericalPolynomial`

#### Returns

`SphericalPolynomial`

## Properties

### x

> **x**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L353)

The x coefficients of the spherical polynomial

***

### xx

> **xx**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L368)

The xx coefficients of the spherical polynomial

***

### xy

> **xy**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:383](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L383)

The xy coefficients of the spherical polynomial

***

### y

> **y**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:358](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L358)

The y coefficients of the spherical polynomial

***

### yy

> **yy**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L373)

The yy coefficients of the spherical polynomial

***

### yz

> **yz**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L388)

The yz coefficients of the spherical polynomial

***

### z

> **z**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L363)

The z coefficients of the spherical polynomial

***

### zx

> **zx**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L393)

The zx coefficients of the spherical polynomial

***

### zz

> **zz**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L378)

The zz coefficients of the spherical polynomial

## Accessors

### preScaledHarmonics

#### Get Signature

> **get** **preScaledHarmonics**(): [`SphericalHarmonics`](SphericalHarmonics.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L340)

The spherical harmonics used to create the polynomials.

##### Returns

[`SphericalHarmonics`](SphericalHarmonics.md)

## Methods

### addAmbient()

> **addAmbient**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L399)

Adds an ambient color to the spherical polynomial

#### Parameters

##### color

[`Color3`](Color3.md)

the color to add

#### Returns

`void`

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:411](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L411)

Scales the spherical polynomial by the given amount

#### Parameters

##### scale

`number`

the amount to scale

#### Returns

`void`

***

### updateFromHarmonics()

> **updateFromHarmonics**(`harmonics`): `SphericalPolynomial`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L428)

Updates the spherical polynomial from harmonics

#### Parameters

##### harmonics

[`SphericalHarmonics`](SphericalHarmonics.md)

the spherical harmonics

#### Returns

`SphericalPolynomial`

the spherical polynomial

***

### FromArray()

> `static` **FromArray**(`data`): `SphericalPolynomial`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:475](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L475)

Constructs a spherical polynomial from an array.

#### Parameters

##### data

`ArrayLike`\<`ArrayLike`\<`number`\>\>

defines the 9x3 coefficients (x, y, z, xx, yy, zz, yz, zx, xy)

#### Returns

`SphericalPolynomial`

the spherical polynomial

***

### FromHarmonics()

> `static` **FromHarmonics**(`harmonics`): `SphericalPolynomial`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/sphericalPolynomial.ts#L465)

Gets the spherical polynomial from harmonics

#### Parameters

##### harmonics

[`SphericalHarmonics`](SphericalHarmonics.md)

the spherical harmonics

#### Returns

`SphericalPolynomial`

the spherical polynomial
