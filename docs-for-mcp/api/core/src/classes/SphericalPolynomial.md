[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SphericalPolynomial

# Class: SphericalPolynomial

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L336)

Class representing spherical polynomial coefficients to the 3rd degree

## Constructors

### Constructor

> **new SphericalPolynomial**(): `SphericalPolynomial`

#### Returns

`SphericalPolynomial`

## Properties

### x

> **x**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L355)

The x coefficients of the spherical polynomial

***

### xx

> **xx**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L370)

The xx coefficients of the spherical polynomial

***

### xy

> **xy**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L385)

The xy coefficients of the spherical polynomial

***

### y

> **y**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L360)

The y coefficients of the spherical polynomial

***

### yy

> **yy**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L375)

The yy coefficients of the spherical polynomial

***

### yz

> **yz**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L390)

The yz coefficients of the spherical polynomial

***

### z

> **z**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L365)

The z coefficients of the spherical polynomial

***

### zx

> **zx**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L395)

The zx coefficients of the spherical polynomial

***

### zz

> **zz**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L380)

The zz coefficients of the spherical polynomial

## Accessors

### preScaledHarmonics

#### Get Signature

> **get** **preScaledHarmonics**(): [`SphericalHarmonics`](SphericalHarmonics.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L342)

The spherical harmonics used to create the polynomials.

##### Returns

[`SphericalHarmonics`](SphericalHarmonics.md)

## Methods

### addAmbient()

> **addAmbient**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:401](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L401)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L413)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L430)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L477)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:467](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L467)

Gets the spherical polynomial from harmonics

#### Parameters

##### harmonics

[`SphericalHarmonics`](SphericalHarmonics.md)

the spherical harmonics

#### Returns

`SphericalPolynomial`

the spherical polynomial
