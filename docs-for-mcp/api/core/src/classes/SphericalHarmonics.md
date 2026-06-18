[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SphericalHarmonics

# Class: SphericalHarmonics

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L89)

Class representing spherical harmonics coefficients to the 3rd degree

## Constructors

### Constructor

> **new SphericalHarmonics**(): `SphericalHarmonics`

#### Returns

`SphericalHarmonics`

## Properties

### l00

> **l00**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L98)

The l0,0 coefficients of the spherical harmonics

***

### l1\_1

> **l1\_1**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L103)

The l1,-1 coefficients of the spherical harmonics

***

### l10

> **l10**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L108)

The l1,0 coefficients of the spherical harmonics

***

### l11

> **l11**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L113)

The l1,1 coefficients of the spherical harmonics

***

### l2\_1

> **l2\_1**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L123)

The l2,-1 coefficients of the spherical harmonics

***

### l2\_2

> **l2\_2**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L118)

The l2,-2 coefficients of the spherical harmonics

***

### l20

> **l20**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L128)

The l2,0 coefficients of the spherical harmonics

***

### l21

> **l21**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L133)

The l2,1 coefficients of the spherical harmonics

***

### l22

> **l22**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L138)

The l2,2 coefficients of the spherical harmonics

***

### preScaled

> **preScaled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L93)

Defines whether or not the harmonics have been prescaled for rendering.

## Methods

### addLight()

> **addLight**(`direction`, `color`, `deltaSolidAngle`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L146)

Adds a light to the spherical harmonics

#### Parameters

##### direction

[`Vector3`](Vector3.md)

the direction of the light

##### color

[`Color3`](Color3.md)

the color of the light

##### deltaSolidAngle

`number`

the delta solid angle of the light

#### Returns

`void`

***

### convertIncidentRadianceToIrradiance()

> **convertIncidentRadianceToIrradiance**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L201)

Convert from incident radiance (Li) to irradiance (E) by applying convolution with the cosine-weighted hemisphere.

```
E_lm = A_l * L_lm
```

In spherical harmonics this convolution amounts to scaling factors for each frequency band.
This corresponds to equation 5 in "An Efficient Representation for Irradiance Environment Maps", where
the scaling factors are given in equation 9.

#### Returns

`void`

***

### convertIrradianceToLambertianRadiance()

> **convertIrradianceToLambertianRadiance**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L227)

Convert from irradiance to outgoing radiance for Lambertian BDRF, suitable for efficient shader evaluation.

```
L = (1/pi) * E * rho
```

This is done by an additional scale by 1/pi, so is a fairly trivial operation but important conceptually.

#### Returns

`void`

***

### preScaleForRendering()

> **preScaleForRendering**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L241)

Integrates the reconstruction coefficients directly in to the SH preventing further
required operations at run time.

This is simply done by scaling back the SH with Ylm constants parameter.
The trigonometric part being applied by the shader at run time.

#### Returns

`void`

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L178)

Scales the spherical harmonics by the given amount

#### Parameters

##### scale

`number`

the amount to scale

#### Returns

`void`

***

### updateFromArray()

> **updateFromArray**(`data`): `SphericalHarmonics`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L262)

update the spherical harmonics coefficients from the given array

#### Parameters

##### data

`ArrayLike`\<`ArrayLike`\<`number`\>\>

defines the 9x3 coefficients (l00, l1-1, l10, l11, l2-2, l2-1, l20, l21, l22)

#### Returns

`SphericalHarmonics`

the spherical harmonics (this)

***

### updateFromFloatsArray()

> **updateFromFloatsArray**(`data`): `SphericalHarmonics`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L280)

update the spherical harmonics coefficients from the given floats array

#### Parameters

##### data

`ArrayLike`\<`number`\>

defines the 9x3 coefficients (l00, l1-1, l10, l11, l2-2, l2-1, l20, l21, l22)

#### Returns

`SphericalHarmonics`

the spherical harmonics (this)

***

### FromArray()

> `static` **FromArray**(`data`): `SphericalHarmonics`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L298)

Constructs a spherical harmonics from an array.

#### Parameters

##### data

`ArrayLike`\<`ArrayLike`\<`number`\>\>

defines the 9x3 coefficients (l00, l1-1, l10, l11, l2-2, l2-1, l20, l21, l22)

#### Returns

`SphericalHarmonics`

the spherical harmonics

***

### FromPolynomial()

> `static` **FromPolynomial**(`polynomial`): `SphericalHarmonics`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/sphericalPolynomial.pure.ts#L309)

Gets the spherical harmonics from polynomial

#### Parameters

##### polynomial

[`SphericalPolynomial`](SphericalPolynomial.md)

the spherical polynomial

#### Returns

`SphericalHarmonics`

the spherical harmonics
