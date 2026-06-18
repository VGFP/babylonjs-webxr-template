[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Vector

# Interface: Vector\<N, I\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L27)

Represents a vector of any dimension

## Extends

- `Tensor`\<`N`, `I`\>

## Type Parameters

### N

`N` *extends* `number`[]

### I

`I`

## Properties

### dimension

> `readonly` **dimension**: `Readonly`\<`Dimension`\<`N`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L31)

#### See

Tensor.dimension

#### Overrides

`Tensor.dimension`

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L36)

#### See

Tensor.rank

#### Overrides

`Tensor.rank`

## Methods

### add()

> **add**(`other`): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L108)

Add another instance with the current one

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`Tensor`\<`N`, `I`\>

a new instance set with the addition of the current instance and the given one coordinates

#### Inherited from

`Tensor.add`

***

### addInPlace()

> **addInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L123)

Set the instance coordinates by adding the given instance coordinates

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.addInPlace`

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(...`floats`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L130)

Adds the given coordinates to the current instance

#### Parameters

##### floats

...`TensorNumberArray`\<`N`\>

the floats to add

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.addInPlaceFromFloats`

***

### addToRef()

> **addToRef**\<`R`\>(`other`, `result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L116)

Sets the "result" coordinates with the addition of the current instance and the given one coordinates

#### Type Parameters

##### R

`R`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

##### result

`R`

defines the target instance

#### Returns

`R`

result input

#### Inherited from

`Tensor.addToRef`

***

### asArray()

> **asArray**(): `TensorNumberArray`\<`N`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L75)

Copy the current instance to an array

#### Returns

`TensorNumberArray`\<`N`\>

a new array with the instance coordinates.

#### Inherited from

`Tensor.asArray`

***

### clone()

> **clone**(): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L350)

Gets a new instance copied from the instance

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.clone`

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L82)

Sets the current instance coordinates with the given source coordinates

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the source instance

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.copyFrom`

***

### copyFromFloats()

> **copyFromFloats**(...`floats`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L89)

Sets the instance coordinates with the given floats

#### Parameters

##### floats

...`TensorNumberArray`\<`N`\>

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.copyFromFloats`

***

### divide()

> **divide**(`other`): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L202)

Returns a new instance set with the instance coordinates divided by the given one coordinates

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.divide`

***

### divideInPlace()

> **divideInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L217)

Divides the current instance coordinates by the given ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.divideInPlace`

***

### divideToRef()

> **divideToRef**\<`R`\>(`other`, `result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L210)

Sets the "result" coordinates with the instance coordinates divided by the given one coordinates

#### Type Parameters

##### R

`R`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

##### result

`R`

defines the target instance

#### Returns

`R`

result input

#### Inherited from

`Tensor.divideToRef`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L301)

Gets a boolean if two instances are equals

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`boolean`

true if the given instance coordinates strictly equal the current instance ones

#### Inherited from

`Tensor.equals`

***

### equalsToFloats()

> **equalsToFloats**(...`floats`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L316)

Returns true if the current Vectoe coordinates equals the given floats

#### Parameters

##### floats

...`TensorNumberArray`\<`N`\>

defines the coordinates to compare against

#### Returns

`boolean`

true if both instances are equal

#### Inherited from

`Tensor.equalsToFloats`

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`other`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L309)

Gets a boolean if two instances are equals (using an epsilon value)

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

##### epsilon?

`number`

defines the minimal distance to consider equality

#### Returns

`boolean`

true if the given instance coordinates are close to the current ones by a distance of epsilon.

#### Inherited from

`Tensor.equalsWithEpsilon`

***

### floor()

> **floor**(): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L323)

Gets a new instance from current instance floored values
eg (1.2, 2.31) returns (1, 2)

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.floor`

***

### floorToRef()

> **floorToRef**\<`R`\>(`result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L330)

Gets the current instance's floored values and stores them in result

#### Type Parameters

##### R

`R`

#### Parameters

##### result

`R`

the instance to store the result in

#### Returns

`R`

the result instance

#### Inherited from

`Tensor.floorToRef`

***

### fract()

> **fract**(): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L337)

Gets a new instance from current instance fractional values
eg (1.2, 2.31) returns (0.2, 0.31)

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.fract`

***

### fractToRef()

> **fractToRef**\<`R`\>(`result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L344)

Gets the current instance's fractional values and stores them in result

#### Type Parameters

##### R

`R`

#### Parameters

##### result

`R`

the instance to store the result in

#### Returns

`R`

the result instance

#### Inherited from

`Tensor.fractToRef`

***

### fromArray()

> **fromArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L69)

Update the current instance from an array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the destination array

##### index?

`number`

defines the offset in the destination array

#### Returns

`this`

the current instance

#### Inherited from

`Tensor.fromArray`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L47)

Gets class name

#### Returns

`string`

the class name

#### Inherited from

`Tensor.getClassName`

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L53)

Gets current instance hash code

#### Returns

`number`

the instance hash code as a number

#### Inherited from

`Tensor.getHashCode`

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L42)

Gets the length of the vector

#### Returns

`number`

the vector length (float)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L48)

Gets the vector squared length

#### Returns

`number`

the vector squared length (float)

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L238)

Updates the current instance with the maximal coordinate values between its and the given instance ones.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`this`

this current updated instance

#### Inherited from

`Tensor.maximizeInPlace`

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(...`floats`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L245)

Updates the current instance with the maximal coordinate values between its and the given floats.

#### Parameters

##### floats

...`TensorNumberArray`\<`N`\>

defines the floats to compare against

#### Returns

`this`

this current updated instance

#### Inherited from

`Tensor.maximizeInPlaceFromFloats`

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L224)

Updates the current instance with the minmal coordinate values between its and the given instance ones.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`this`

this current updated instance

#### Inherited from

`Tensor.minimizeInPlace`

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(...`floats`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L231)

Updates the current instance with the minmal coordinate values between its and the given floats.

#### Parameters

##### floats

...`TensorNumberArray`\<`N`\>

defines the floats to compare against

#### Returns

`this`

this current updated instance

#### Inherited from

`Tensor.minimizeInPlaceFromFloats`

***

### multiply()

> **multiply**(`other`): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L174)

Returns a new instance set with the multiplication of the current instance and the given one coordinates

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.multiply`

***

### multiplyByFloats()

> **multiplyByFloats**(...`floats`): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L195)

Gets a new instance set with the instance coordinates multiplied by the given floats

#### Parameters

##### floats

...`TensorNumberArray`\<`N`\>

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.multiplyByFloats`

***

### multiplyInPlace()

> **multiplyInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L189)

Multiplies in place the current instance coordinates by the given ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.multiplyInPlace`

***

### multiplyToRef()

> **multiplyToRef**\<`R`\>(`other`, `result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L182)

Sets "result" coordinates with the multiplication of the current instance and the given one coordinates

#### Type Parameters

##### R

`R`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

##### result

`R`

defines the target instance

#### Returns

`R`

result input

#### Inherited from

`Tensor.multiplyToRef`

***

### negate()

> **negate**(): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L251)

Gets a new instance with current instance negated coordinates

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.negate`

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L257)

Negate this instance in place

#### Returns

`this`

this

#### Inherited from

`Tensor.negateInPlace`

***

### negateToRef()

> **negateToRef**\<`R`\>(`result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L264)

Negate the current instance and stores the result in the given instance "result" coordinates

#### Type Parameters

##### R

`R`

#### Parameters

##### result

`R`

defines the instance object where to store the result

#### Returns

`R`

the result

#### Inherited from

`Tensor.negateToRef`

***

### normalize()

> **normalize**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L54)

Normalize the vector

#### Returns

`this`

the current updated Vector

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L62)

Normalize the current Vector with the given input length.
Please note that this is an in place operation.

#### Parameters

##### len

`number`

the length of the vector

#### Returns

`this`

the current updated Vector

***

### normalizeToNew()

> **normalizeToNew**(): `Vector`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L68)

Normalize the current Vector to a new vector

#### Returns

`Vector`\<`N`, `I`\>

the new Vector

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`reference`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L75)

Normalize the current Vector to the reference

#### Type Parameters

##### T

`T`

#### Parameters

##### reference

`T`

define the Vector to update

#### Returns

`T`

the updated Vector

***

### scale()

> **scale**(`scale`): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L278)

Returns a new instance scaled by "scale" from the current instance

#### Parameters

##### scale

`number`

defines the scaling factor

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.scale`

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`R`\>(`scale`, `result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L294)

Scale the current instance values by a factor and add the result to a given instance

#### Type Parameters

##### R

`R`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`R`

defines the instance object where to store the result

#### Returns

`R`

result input

#### Inherited from

`Tensor.scaleAndAddToRef`

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L271)

Multiply the instance coordinates by

#### Parameters

##### scale

`number`

defines the scaling factor

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.scaleInPlace`

***

### scaleToRef()

> **scaleToRef**\<`R`\>(`scale`, `result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L286)

Scale the current instance values by a factor to a given instance

#### Type Parameters

##### R

`R`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`R`

defines the instance object where to store the result

#### Returns

`R`

result input

#### Inherited from

`Tensor.scaleToRef`

***

### set()

> **set**(...`values`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L95)

Sets the instance coordinates with the given floats

#### Parameters

##### values

...`TensorNumberArray`\<`N`\>

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.set`

***

### setAll()

> **setAll**(`value`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L101)

Sets the instance coordinates to the given value

#### Parameters

##### value

`number`

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.setAll`

***

### subtract()

> **subtract**(`other`): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L137)

Returns a new instance set with the subtracted coordinates of other's coordinates from the current coordinates.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`Tensor`\<`N`, `I`\>

a new instance

#### Inherited from

`Tensor.subtract`

***

### subtractFromFloats()

> **subtractFromFloats**(...`floats`): `Tensor`\<`N`, `I`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L159)

Returns a new instance set with the subtraction of the given floats from the current instance coordinates

#### Parameters

##### floats

...`TensorNumberArray`\<`N`\>

the coordinates to subtract

#### Returns

`Tensor`\<`N`, `I`\>

the resulting instance

#### Inherited from

`Tensor.subtractFromFloats`

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`R`\>(...`args`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L167)

Subtracts the given floats from the current instance coordinates and set the given instance "result" with this result
Note: Implementation uses array magic so types may be confusing.

#### Type Parameters

##### R

`R`

#### Parameters

##### args

...\[`...TensorNumberArray<N>[]`, `R`\]

the coordinates to subtract with the last element as the result

#### Returns

`R`

the result

#### Inherited from

`Tensor.subtractFromFloatsToRef`

***

### subtractInPlace()

> **subtractInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L152)

Sets the current instance coordinates by subtracting from it the given one coordinates

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

#### Returns

`this`

the current updated instance

#### Inherited from

`Tensor.subtractInPlace`

***

### subtractToRef()

> **subtractToRef**\<`R`\>(`other`, `result`): `R`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L145)

Sets the "result" coordinates with the subtraction of the other's coordinates from the current coordinates.

#### Type Parameters

##### R

`R`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`I`\>

defines the other instance

##### result

`R`

defines the target instance

#### Returns

`R`

result input

#### Inherited from

`Tensor.subtractToRef`

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/tensor.ts#L61)

Sets the instance coordinates in the given array from the given index.

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the source array

##### index?

`number`

defines the offset in source array

#### Returns

`this`

the current instance

#### Inherited from

`Tensor.toArray`
