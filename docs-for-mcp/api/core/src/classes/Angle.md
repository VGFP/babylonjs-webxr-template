[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Angle

# Class: Angle

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L57)

Defines angle representation

## Constructors

### Constructor

> **new Angle**(`radians`): `Angle`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L64)

Creates an Angle object of "radians" radians (float).

#### Parameters

##### radians

`number`

the angle in radians

#### Returns

`Angle`

## Methods

### degrees()

> **degrees**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L75)

Get value in degrees

#### Returns

`number`

the Angle value in degrees (float)

***

### radians()

> **radians**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L83)

Get value in radians

#### Returns

`number`

the Angle value in radians (float)

***

### BetweenTwoPoints()

> `static` **BetweenTwoPoints**(`a`, `b`): `Angle`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L93)

Gets a new Angle object with a value of the angle (in radians) between the line connecting the two points and the x-axis

#### Parameters

##### a

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector2`](Vector2.md)\>

defines first point as the origin

##### b

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector2`](Vector2.md)\>

defines point

#### Returns

`Angle`

a new Angle

***

### BetweenTwoVectors()

> `static` **BetweenTwoVectors**\<`Vec`\>(`a`, `b`): `Angle`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L105)

Gets the angle between the two vectors

#### Type Parameters

##### Vec

`Vec` *extends* [`Vector2`](Vector2.md) \| [`Vector3`](Vector3.md) \| [`Vector4`](Vector4.md)

#### Parameters

##### a

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vec`\>

defines first vector

##### b

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vec`\>

defines vector

#### Returns

`Angle`

Returns an new Angle between 0 and PI

***

### FromDegrees()

> `static` **FromDegrees**(`degrees`): `Angle`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L130)

Gets a new Angle object from the given float in degrees

#### Parameters

##### degrees

`number`

defines the angle value in degrees

#### Returns

`Angle`

a new Angle

***

### FromRadians()

> `static` **FromRadians**(`radians`): `Angle`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.path.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.path.ts#L122)

Gets a new Angle object from the given float in radians

#### Parameters

##### radians

`number`

defines the angle value in radians

#### Returns

`Angle`

a new Angle
