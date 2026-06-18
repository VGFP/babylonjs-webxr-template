[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / Matrix2D

# Class: Matrix2D

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L24)

Class used to provide 2D matrix features

## Constructors

### Constructor

> **new Matrix2D**(`m00`, `m01`, `m10`, `m11`, `m20`, `m21`): `Matrix2D`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L37)

Creates a new matrix

#### Parameters

##### m00

`number`

defines value for (0, 0)

##### m01

`number`

defines value for (0, 1)

##### m10

`number`

defines value for (1, 0)

##### m11

`number`

defines value for (1, 1)

##### m20

`number`

defines value for (2, 0)

##### m21

`number`

defines value for (2, 1)

#### Returns

`Matrix2D`

## Properties

### m

> **m**: `Float32Array`\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L26)

Gets the internal array of 6 floats used to store matrix data

## Methods

### determinant()

> **determinant**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L65)

Gets matrix determinant

#### Returns

`number`

the determinant

***

### fromValues()

> **fromValues**(`m00`, `m01`, `m10`, `m11`, `m20`, `m21`): `Matrix2D`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L51)

Fills the matrix from direct values

#### Parameters

##### m00

`number`

defines value for (0, 0)

##### m01

`number`

defines value for (0, 1)

##### m10

`number`

defines value for (1, 0)

##### m11

`number`

defines value for (1, 1)

##### m20

`number`

defines value for (2, 0)

##### m21

`number`

defines value for (2, 1)

#### Returns

`Matrix2D`

the current modified matrix

***

### invertToRef()

> **invertToRef**(`result`): `Matrix2D`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L74)

Inverses the matrix and stores it in a target matrix

#### Parameters

##### result

`Matrix2D`

defines the target matrix

#### Returns

`Matrix2D`

the current matrix

***

### multiplyToRef()

> **multiplyToRef**(`other`, `result`): `Matrix2D`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L114)

Multiplies the current matrix with another one

#### Parameters

##### other

`Matrix2D`

defines the second operand

##### result

`Matrix2D`

defines the target matrix

#### Returns

`Matrix2D`

the current matrix

***

### transformCoordinates()

> **transformCoordinates**(`x`, `y`, `result`): `Matrix2D`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L146)

Applies the current matrix to a set of 2 floats and stores the result in a vector2

#### Parameters

##### x

`number`

defines the x coordinate to transform

##### y

`number`

defines the x coordinate to transform

##### result

[`Vector2`](../../../core/src/classes/Vector2.md)

defines the target vector2

#### Returns

`Matrix2D`

the current matrix

***

### ComposeToRef()

> `static` **ComposeToRef**(`tx`, `ty`, `angle`, `scaleX`, `scaleY`, `parentMatrix`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L225)

Composes a matrix from translation, rotation, scaling and parent matrix and stores it in a target matrix

#### Parameters

##### tx

`number`

defines the x coordinate of the translation

##### ty

`number`

defines the y coordinate of the translation

##### angle

`number`

defines the rotation angle

##### scaleX

`number`

defines the x coordinate of the scaling

##### scaleY

`number`

defines the y coordinate of the scaling

##### parentMatrix

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Matrix2D`\>

defines the parent matrix to multiply by (can be null)

##### result

`Matrix2D`

defines the target matrix

#### Returns

`void`

***

### Identity()

> `static` **Identity**(): `Matrix2D`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L158)

Creates an identity matrix

#### Returns

`Matrix2D`

a new matrix

***

### IdentityToRef()

> `static` **IdentityToRef**(`result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L166)

Creates an identity matrix and stores it in a target matrix

#### Parameters

##### result

`Matrix2D`

defines the target matrix

#### Returns

`void`

***

### RotationToRef()

> `static` **RotationToRef**(`angle`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L200)

Creates a rotation matrix and stores it in a target matrix

#### Parameters

##### angle

`number`

defines the rotation angle

##### result

`Matrix2D`

defines the target matrix

#### Returns

`void`

***

### ScalingToRef()

> `static` **ScalingToRef**(`x`, `y`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L191)

Creates a scaling matrix and stores it in a target matrix

#### Parameters

##### x

`number`

defines the x coordinate of the scaling

##### y

`number`

defines the y coordinate of the scaling

##### result

`Matrix2D`

defines the target matrix

#### Returns

`void`

***

### TranslationToRef()

> `static` **TranslationToRef**(`x`, `y`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L181)

Creates a translation matrix and stores it in a target matrix

#### Parameters

##### x

`number`

defines the x coordinate of the translation

##### y

`number`

defines the y coordinate of the translation

##### result

`Matrix2D`

defines the target matrix

#### Returns

`void`
