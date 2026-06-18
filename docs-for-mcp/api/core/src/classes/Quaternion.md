[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Quaternion

# Class: Quaternion

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4483)

Class used to store quaternion data
Example Playground - Overview - https://playground.babylonjs.com/#L49EJ7#100

## See

 - https://en.wikipedia.org/wiki/Quaternion
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms

## Implements

- `Tensor`\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `4`\>, `Quaternion`\>

## Constructors

### Constructor

> **new Quaternion**(`x?`, `y?`, `z?`, `w?`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4564)

Creates a new Quaternion from the given floats

#### Parameters

##### x?

`number` = `0.0`

defines the first component (0 by default)

##### y?

`number` = `0.0`

defines the second component (0 by default)

##### z?

`number` = `0.0`

defines the third component (0 by default)

##### w?

`number` = `1.0`

defines the fourth component (1.0 by default)

#### Returns

`Quaternion`

## Properties

### dimension

> `readonly` **dimension**: readonly \[`4`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4550](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4550)

#### See

Tensor.dimension

#### Implementation of

`Tensor.dimension`

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4555)

#### See

Tensor.rank

#### Implementation of

`Tensor.rank`

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Quaternion`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4491)

If the first quaternion is flagged with integers (as everything is 0,0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent quaternion are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all quaternion instances that it creates.
But the original quaternion instances are unchanged and has a "deprecated map".
If we keep using the quaternion instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Accessors

### w

#### Get Signature

> **get** **w**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4538)

Gets or sets the w coordinate

##### Returns

`number`

#### Set Signature

> **set** **w**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4542](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4542)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IQuaternionLike.w`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4508)

Gets or sets the x coordinate

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4512](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4512)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IQuaternionLike.x`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4518](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4518)

Gets or sets the y coordinate

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4522](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4522)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IQuaternionLike.y`

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4528)

Gets or sets the z coordinate

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4532)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IQuaternionLike.z`

## Methods

### add()

> **add**(`other`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4749](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4749)

Adds two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#10

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second operand

#### Returns

`Quaternion`

a new quaternion as the addition result of the given one and the current quaternion

#### Implementation of

`Tensor.add`

***

### addInPlace()

> **addInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4759](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4759)

Add a quaternion to the current one
Example Playground https://playground.babylonjs.com/#L49EJ7#11

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the quaternion to add

#### Returns

`this`

the current quaternion

#### Implementation of

`Tensor.addInPlace`

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4785)

Adds in place the given floats to the current quaternion

#### Parameters

##### x

`number`

defines the x coordinate

##### y

`number`

defines the y coordinate

##### z

`number`

defines the z coordinate

##### w

`number`

defines the w coordinate

#### Returns

`this`

the current updated quaternion

#### Implementation of

`Tensor.addInPlaceFromFloats`

***

### addToRef()

> **addToRef**\<`T`\>(`other`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4768](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4768)

Sets the "result" coordinates with the addition of the current instance and the given one coordinates

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`this`\>

defines the other instance

##### result

`T`

defines the target instance

#### Returns

`T`

result input

#### Implementation of

`Tensor.addToRef`

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4609)

Copy the quaternion to an array
Example Playground https://playground.babylonjs.com/#L49EJ7#13

#### Returns

\[`number`, `number`, `number`, `number`\]

a new array populated with 4 elements from the quaternion coordinates

#### Implementation of

`Tensor.asArray`

***

### clone()

> **clone**(): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4684](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4684)

Clone the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#12

#### Returns

`Quaternion`

a new quaternion copied from the current one

#### Implementation of

`Tensor.clone`

***

### conjugate()

> **conjugate**(): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5122)

Conjugates (1-q) the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#83

#### Returns

`Quaternion`

a new quaternion

***

### conjugateInPlace()

> **conjugateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5109)

Conjugates in place the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#82

#### Returns

`this`

the current updated quaternion

***

### conjugateToRef()

> **conjugateToRef**\<`T`\>(`ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5099](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5099)

Conjugates the current quaternion and stores the result in the given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#81

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### ref

`T`

defines the target quaternion

#### Returns

`T`

result input

***

### copyFrom()

> **copyFrom**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4694)

Copy a quaternion to the current one
Example Playground https://playground.babylonjs.com/#L49EJ7#86

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the other quaternion

#### Returns

`this`

the updated current quaternion

#### Implementation of

`Tensor.copyFrom`

***

### copyFromFloats()

> **copyFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4712](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4712)

Updates the current quaternion with the given float coordinates
Example Playground https://playground.babylonjs.com/#L49EJ7#87

#### Parameters

##### x

`number`

defines the x coordinate

##### y

`number`

defines the y coordinate

##### z

`number`

defines the z coordinate

##### w

`number`

defines the w coordinate

#### Returns

`this`

the updated current quaternion

#### Implementation of

`Tensor.copyFromFloats`

***

### dot()

> **dot**(`other`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5334)

Returns the dot product (float) between the current quaternions and "other"

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`this`\>

defines the right operand

#### Returns

`number`

the dot product

***

### equals()

> **equals**(`otherQuaternion`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4638](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4638)

Check if two quaternions are equals
Example Playground https://playground.babylonjs.com/#L49EJ7#38

#### Parameters

##### otherQuaternion

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second operand

#### Returns

`boolean`

true if the current quaternion and the given one coordinates are strictly equals

#### Implementation of

`Tensor.equals`

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5057](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5057)

Determines if the current quaternion equals the given floats

#### Parameters

##### x

`number`

defines the x coordinate

##### y

`number`

defines the y coordinate

##### z

`number`

defines the z coordinate

##### w

`number`

defines the w coordinate

#### Returns

`boolean`

true if the quaternion coordinates match the given floats

#### Implementation of

`Tensor.equalsToFloats`

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherQuaternion`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4649)

Gets a boolean if two quaternions are equals (using an epsilon value)
Example Playground https://playground.babylonjs.com/#L49EJ7#37

#### Parameters

##### otherQuaternion

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the other quaternion

##### epsilon?

`number` = `Epsilon`

defines the minimal distance to consider equality

#### Returns

`boolean`

true if the given quaternion coordinates are close to the current ones by a distance of epsilon.

#### Implementation of

`Tensor.equalsWithEpsilon`

***

### fromArray()

> **fromArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4628](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4628)

Update the current instance from an array

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the destination array

##### index?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current instance

#### Implementation of

`Tensor.fromArray`

***

### fromRotationMatrix()

> **fromRotationMatrix**(`matrix`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5324)

Updates the current quaternion from the given rotation matrix values
Example Playground https://playground.babylonjs.com/#L49EJ7#41

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the source matrix

#### Returns

`this`

the current updated quaternion

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4583)

Gets the class name of the quaternion

#### Returns

`string`

the string "Quaternion"

#### Implementation of

`Tensor.getClassName`

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4591)

Gets a hash code for this quaternion

#### Returns

`number`

the quaternion hash code

#### Implementation of

`Tensor.getHashCode`

***

### invert()

> **invert**(): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5131)

Returns the inverse of the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#84

#### Returns

`Quaternion`

a new quaternion

***

### invertInPlace()

> **invertInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5146)

Invert in place the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#85

#### Returns

`this`

this quaternion

***

### isApprox()

> **isApprox**(`otherQuaternion`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4665](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4665)

Gets a boolean if two quaternions are equals (using an epsilon value), taking care of double cover : https://www.reedbeta.com/blog/why-quaternions-double-cover/

#### Parameters

##### otherQuaternion

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the other quaternion

##### epsilon?

`number` = `Epsilon`

defines the minimal distance to consider equality

#### Returns

`boolean`

true if the given quaternion coordinates are close to the current ones by a distance of epsilon.

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5170)

Gets length of current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#28

#### Returns

`number`

the quaternion length (float)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5161)

Gets squared length of current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#29

#### Returns

`number`

the quaternion length (float)

***

### multiply()

> **multiply**(`q1`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4922](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4922)

Multiplies two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#43

#### Parameters

##### q1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second operand

#### Returns

`Quaternion`

a new quaternion set as the multiplication result of the current one with the given one "q1"

#### Implementation of

`Tensor.multiply`

***

### multiplyByFloats()

> **multiplyByFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4962](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4962)

Multiplies the current quaternion coordinates by the given floats

#### Parameters

##### x

`number`

defines the x coordinate

##### y

`number`

defines the y coordinate

##### z

`number`

defines the z coordinate

##### w

`number`

defines the w coordinate

#### Returns

`this`

the current updated quaternion

#### Implementation of

`Tensor.multiplyByFloats`

***

### multiplyInPlace()

> **multiplyInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4950](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4950)

Updates the current quaternion with the multiplication of itself with the given one "q1"
Example Playground https://playground.babylonjs.com/#L49EJ7#46

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second operand

#### Returns

`this`

the currentupdated quaternion

#### Implementation of

`Tensor.multiplyInPlace`

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`q1`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4935](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4935)

Sets the given "result" as the multiplication result of the current one with the given one "q1"
Example Playground https://playground.babylonjs.com/#L49EJ7#45

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### q1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second operand

##### result

`T`

defines the target quaternion

#### Returns

`T`

the current quaternion

#### Implementation of

`Tensor.multiplyToRef`

***

### negate()

> **negate**(): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5027](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5027)

Gets a new instance with current instance negated coordinates

#### Returns

`Quaternion`

a new instance

#### Implementation of

`Tensor.negate`

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5031](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5031)

Negate this instance in place

#### Returns

`this`

this

#### Implementation of

`Tensor.negateInPlace`

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5040](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5040)

Negate the current instance and stores the result in the given instance "result" coordinates

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### result

`T`

defines the instance object where to store the result

#### Returns

`T`

the result

#### Implementation of

`Tensor.negateToRef`

***

### normalize()

> **normalize**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5179)

Normalize in place the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#54

#### Returns

`this`

the current updated quaternion

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5189)

Normalize the current quaternion with the given input length.
Please note that this is an in place operation.

#### Parameters

##### len

`number`

the length of the quaternion

#### Returns

`this`

the current updated Quaternion

***

### normalizeToNew()

> **normalizeToNew**(): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5202)

Normalize a copy of the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#55

#### Returns

`Quaternion`

the normalized quaternion

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`reference`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5213)

Normalize the current Quaternion to the reference

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### reference

`T`

define the Quaternion to update

#### Returns

`T`

the updated Quaternion

***

### scale()

> **scale**(`value`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4864](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4864)

Multiplies the current quaternion by a scale factor
Example Playground https://playground.babylonjs.com/#L49EJ7#88

#### Parameters

##### value

`number`

defines the scale factor

#### Returns

`Quaternion`

a new quaternion set by multiplying the current quaternion coordinates by the float "scale"

#### Implementation of

`Tensor.scale`

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4907)

Scale the current quaternion values by a factor and add the result to a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#91

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Quaternion object where to store the result

#### Returns

`T`

result input

#### Implementation of

`Tensor.scaleAndAddToRef`

***

### scaleInPlace()

> **scaleInPlace**(`value`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4890](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4890)

Multiplies in place the current quaternion by a scale factor
Example Playground https://playground.babylonjs.com/#L49EJ7#90

#### Parameters

##### value

`number`

defines the scale factor

#### Returns

`this`

the current modified quaternion

#### Implementation of

`Tensor.scaleInPlace`

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4875](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4875)

Scale the current quaternion values by a factor and stores the result to a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#89

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Quaternion object where to store the result

#### Returns

`T`

result input

#### Implementation of

`Tensor.scaleToRef`

***

### set()

> **set**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4730](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4730)

Updates the current quaternion from the given float coordinates
Example Playground https://playground.babylonjs.com/#L49EJ7#56

#### Parameters

##### x

`number`

defines the x coordinate

##### y

`number`

defines the y coordinate

##### z

`number`

defines the z coordinate

##### w

`number`

defines the w coordinate

#### Returns

`this`

the updated current quaternion

#### Implementation of

`Tensor.set`

***

### setAll()

> **setAll**(`value`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4739](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4739)

Sets all the quaternion coordinates to the given value

#### Parameters

##### value

`number`

the value to set

#### Returns

`this`

the current updated quaternion

#### Implementation of

`Tensor.setAll`

***

### subtract()

> **subtract**(`other`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4839)

Subtract two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#57

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`this`\>

defines the second operand

#### Returns

`Quaternion`

a new quaternion as the subtraction result of the given one from the current one

#### Implementation of

`Tensor.subtract`

***

### subtractFromFloats()

> **subtractFromFloats**(`x`, `y`, `z`, `w`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4811](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4811)

Subtracts the given floats from the current quaternion

#### Parameters

##### x

`number`

defines the x coordinate

##### y

`number`

defines the y coordinate

##### z

`number`

defines the z coordinate

##### w

`number`

defines the w coordinate

#### Returns

`Quaternion`

a new quaternion as the subtraction result

#### Implementation of

`Tensor.subtractFromFloats`

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4824](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4824)

Subtracts the given floats from the current quaternion and stores the result in the given one

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### x

`number`

defines the x coordinate

##### y

`number`

defines the y coordinate

##### z

`number`

defines the z coordinate

##### w

`number`

defines the w coordinate

##### result

`T`

defines the quaternion to store the result

#### Returns

`T`

result input

#### Implementation of

`Tensor.subtractFromFloatsToRef`

***

### subtractInPlace()

> **subtractInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4849](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4849)

Subtract a quaternion to the current one
Example Playground https://playground.babylonjs.com/#L49EJ7#58

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the quaternion to subtract

#### Returns

`this`

the current quaternion

#### Implementation of

`Tensor.subtractInPlace`

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`other`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4794](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4794)

Sets the "result" coordinates with the subtraction of the other's coordinates from the current coordinates.

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`this`\>

defines the other instance

##### result

`T`

defines the target instance

#### Returns

`T`

result input

#### Implementation of

`Tensor.subtractToRef`

***

### toAlphaBetaGammaToRef()

> **toAlphaBetaGammaToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5280)

Sets the given vector3 "result" with the Alpha, Beta, Gamma Euler angles translated from the current quaternion

#### Type Parameters

##### T

`T` *extends* [`Vector3`](Vector3.md)

#### Parameters

##### result

`T`

defines the vector which will be filled with the Euler angles

#### Returns

`T`

result input

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4620](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4620)

Stores from the starting index in the given array the Quaternion successive values
Example Playground https://playground.babylonjs.com/#L49EJ7#59

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the array where to store the x,y,z,w components

##### index?

`number` = `0`

defines an optional index in the target array to define where to start storing values

#### Returns

`this`

the current Quaternion object

#### Implementation of

`Tensor.toArray`

***

### toAxisAngle()

> **toAxisAngle**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5342)

Converts the current quaternion to an axis angle representation

#### Returns

`object`

the axis and angle in radians

##### angle

> **angle**: `number`

##### axis

> **axis**: [`Vector3`](Vector3.md)

***

### toAxisAngleToRef()

> **toAxisAngleToRef**\<`T`\>(`axis`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5353)

Converts the current quaternion to an axis angle representation

#### Type Parameters

##### T

`T` *extends* [`Vector3`](Vector3.md)

#### Parameters

##### axis

`T`

defines the target axis vector

#### Returns

`number`

the angle in radians

***

### toEulerAngles()

> **toEulerAngles**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5228)

Returns a new Vector3 set with the Euler angles translated from the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#32

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 containing the Euler angles

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions

***

### toEulerAnglesToRef()

> **toEulerAnglesToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5241)

Sets the given vector3 "result" with the Euler angles translated from the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#31

#### Type Parameters

##### T

`T` *extends* [`Vector3`](Vector3.md)

#### Parameters

##### result

`T`

defines the vector which will be filled with the Euler angles

#### Returns

`T`

result input

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions

***

### toRotationMatrix()

> **toRotationMatrix**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5313)

Updates the given rotation matrix with the current quaternion values
Example Playground https://playground.babylonjs.com/#L49EJ7#67

#### Type Parameters

##### T

`T` *extends* [`Matrix`](Matrix.md)

#### Parameters

##### result

`T`

defines the target matrix

#### Returns

`T`

the updated matrix with the rotation

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4575)

Gets a string representation for the current quaternion

#### Returns

`string`

a string with the Quaternion coordinates

***

### AreClose()

> `static` **AreClose**(`quat0`, `quat1`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5459](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5459)

Checks if the orientations of two rotation quaternions are close to each other
Example Playground https://playground.babylonjs.com/#L49EJ7#60

#### Parameters

##### quat0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the first quaternion to check

##### quat1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second quaternion to check

##### epsilon?

`number` = `0.1`

defines closeness, 0 same orientation, 1 PI apart, default 0.1

#### Returns

`boolean`

true if the two quaternions are close to each other within epsilon

***

### Center()

> `static` **Center**(`value1`, `value2`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6112)

Returns a new Quaternion located at the center between the quaternions "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

value to calulate the center between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

value to calulate the center between

#### Returns

`Quaternion`

the center between the two quaternions

***

### CenterToRef()

> `static` **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6123)

Gets the center of the quaternions "value1" and "value2" and stores the result in the quaternion "ref"

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines first quaternion

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines second quaternion

##### ref

`T`

defines third quaternion

#### Returns

`T`

ref

***

### Clamp()

> `static` **Clamp**(`value`, `min`, `max`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6025)

Returns a new Quaternion set with the coordinates of "value", if the quaternion "value" is in the cube defined by the quaternions "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the upper range value

#### Returns

`Quaternion`

the new Quaternion

***

### ClampToRef()

> `static` **ClampToRef**\<`T`\>(`value`, `min`, `max`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6041](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6041)

Sets the given quaternion "result" with the coordinates of "value", if the quaternion "value" is in the cube defined by the quaternions "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the upper range value

##### result

`T`

defines the Quaternion where to store the result

#### Returns

`T`

result input

***

### Distance()

> `static` **Distance**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6088](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6088)

Returns the distance (float) between the quaternions "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

value to calulate the distance between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

value to calulate the distance between

#### Returns

`number`

the distance between the two quaternions

***

### DistanceSquared()

> `static` **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6097](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6097)

Returns the squared distance (float) between the quaternions "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

value to calulate the distance between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

value to calulate the distance between

#### Returns

`number`

the distance between the two quaternions squared

***

### Dot()

> `static` **Dot**(`left`, `right`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5447)

Returns the dot product (float) between the quaternions "left" and "right"
Example Playground https://playground.babylonjs.com/#L49EJ7#61

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the left operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the right operand

#### Returns

`number`

the dot product

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5566](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5566)

Creates a new quaternion from data stored into an array
Example Playground https://playground.babylonjs.com/#L49EJ7#63

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the data source

##### offset?

`number`

defines the offset in the source array where the data starts

#### Returns

`Quaternion`

a new quaternion

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5581)

Updates the given quaternion "result" from the starting index of the given array.
Example Playground https://playground.babylonjs.com/#L49EJ7#64

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

the array to pull values from

##### offset

`number`

the offset into the array to start at

##### result

`T`

the quaternion to store the result in

#### Returns

`T`

result input

***

### FromEulerAngles()

> `static` **FromEulerAngles**(`x`, `y`, `z`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5612](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5612)

Create a quaternion from Euler rotation angles
Example Playground https://playground.babylonjs.com/#L49EJ7#33

#### Parameters

##### x

`number`

Pitch

##### y

`number`

Yaw

##### z

`number`

Roll

#### Returns

`Quaternion`

the new Quaternion

***

### FromEulerAnglesToRef()

> `static` **FromEulerAnglesToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5627](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5627)

Updates a quaternion from Euler rotation angles
Example Playground https://playground.babylonjs.com/#L49EJ7#34

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### x

`number`

Pitch

##### y

`number`

Yaw

##### z

`number`

Roll

##### result

`T`

the quaternion to store the result

#### Returns

`T`

the updated quaternion

***

### FromEulerVector()

> `static` **FromEulerVector**(`vec`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5638](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5638)

Create a quaternion from Euler rotation vector
Example Playground https://playground.babylonjs.com/#L49EJ7#35

#### Parameters

##### vec

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the Euler vector (x Pitch, y Yaw, z Roll)

#### Returns

`Quaternion`

the new Quaternion

***

### FromEulerVectorToRef()

> `static` **FromEulerVectorToRef**\<`T`\>(`vec`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5651](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5651)

Updates a quaternion from Euler rotation vector
Example Playground https://playground.babylonjs.com/#L49EJ7#36

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### vec

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

the Euler vector (x Pitch, y Yaw, z Roll)

##### result

`T`

the quaternion to store the result

#### Returns

`T`

the updated quaternion

***

### FromFloatsToRef()

> `static` **FromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5599](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5599)

Sets the given quaternion "result" with the given floats.

#### Type Parameters

##### T

`T` *extends* `Quaternion` = `Quaternion`

#### Parameters

##### x

`number`

defines the x coordinate of the source

##### y

`number`

defines the y coordinate of the source

##### z

`number`

defines the z coordinate of the source

##### w

`number`

defines the w coordinate of the source

##### result

`T`

defines the quaternion where to store the result

#### Returns

`T`

the result quaternion

***

### FromLookDirectionLH()

> `static` **FromLookDirectionLH**(`forward`, `up`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5804](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5804)

Creates a new rotation value to orient an object to look towards the given forward direction, the up direction being oriented like "up".
This function works in left handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#96

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

#### Returns

`Quaternion`

A new quaternion oriented toward the specified forward and up.

***

### FromLookDirectionLHToRef()

> `static` **FromLookDirectionLHToRef**\<`T`\>(`forward`, `up`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5819)

Creates a new rotation value to orient an object to look towards the given forward direction with the up direction being oriented like "up", and stores it in the target quaternion.
This function works in left handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#97

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

##### ref

`T`

defines the target quaternion.

#### Returns

`T`

result input

***

### FromLookDirectionRH()

> `static` **FromLookDirectionRH**(`forward`, `up`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5834](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5834)

Creates a new rotation value to orient an object to look towards the given forward direction, the up direction being oriented like "up".
This function works in right handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#98

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

#### Returns

`Quaternion`

A new quaternion oriented toward the specified forward and up.

***

### FromLookDirectionRHToRef()

> `static` **FromLookDirectionRHToRef**\<`T`\>(`forward`, `up`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5849](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5849)

Creates a new rotation value to orient an object to look towards the given forward direction with the up direction being oriented like "up", and stores it in the target quaternion.
This function works in right handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#105

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

##### ref

`T`

defines the target quaternion.

#### Returns

`T`

result input

***

### FromRotationMatrix()

> `static` **FromRotationMatrix**(`matrix`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5377)

Creates a new quaternion from a rotation matrix
Example Playground https://playground.babylonjs.com/#L49EJ7#101

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the source matrix

#### Returns

`Quaternion`

a new quaternion created from the given rotation matrix values

***

### FromRotationMatrixToRef()

> `static` **FromRotationMatrixToRef**\<`T`\>(`matrix`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5390)

Updates the given quaternion with the given rotation matrix values
Example Playground https://playground.babylonjs.com/#L49EJ7#102

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the source matrix

##### result

`T`

defines the target quaternion

#### Returns

`T`

result input

***

### FromUnitVectorsToRef()

> `static` **FromUnitVectorsToRef**\<`T`\>(`vecFrom`, `vecTo`, `result`, `epsilon?`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5665](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5665)

Updates a quaternion so that it rotates vector vecFrom to vector vecTo
Example Playground - https://playground.babylonjs.com/#L49EJ7#70

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### vecFrom

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the direction vector from which to rotate

##### vecTo

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the direction vector to which to rotate

##### result

`T`

the quaternion to store the result

##### epsilon?

`number` = `Epsilon`

defines the minimal dot value to define vecs as opposite. Default: `BABYLON.Epsilon`

#### Returns

`T`

the updated quaternion

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5920](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5920)

Interpolate between two quaternions using Hermite interpolation
Example Playground https://playground.babylonjs.com/#L49EJ7#47

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines first quaternion

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the incoming tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines second quaternion

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the outgoing tangent

##### amount

`number`

defines the target quaternion

#### Returns

`Quaternion`

the new interpolated quaternion

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#hermite-quaternion-spline

***

### Hermite1stDerivative()

> `static` **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5951](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5951)

Returns a new Quaternion which is the 1st derivative of the Hermite spline defined by the quaternions "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#L49EJ7#48

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

`Quaternion`

1st derivative

***

### Hermite1stDerivativeToRef()

> `static` **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5976](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5976)

Update a Quaternion with the 1st derivative of the Hermite spline defined by the quaternions "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#L49EJ7#49

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

##### result

`T`

define where to store the derivative

#### Returns

`T`

result input

***

### Identity()

> `static` **Identity**(): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5517](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5517)

Creates an identity quaternion

#### Returns

`Quaternion`

the identity quaternion

***

### Inverse()

> `static` **Inverse**(`q`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5497](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5497)

Inverse a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#103

#### Parameters

##### q

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the source quaternion

#### Returns

`Quaternion`

a new quaternion as the inverted current quaternion

***

### InverseToRef()

> `static` **InverseToRef**\<`T`\>(`q`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5508)

Inverse a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#104

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### q

`Quaternion`

defines the source quaternion

##### result

`T`

the quaternion the result will be stored in

#### Returns

`T`

the result quaternion

***

### IsIdentity()

> `static` **IsIdentity**(`quaternion`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5526)

Gets a boolean indicating if the given quaternion is identity

#### Parameters

##### quaternion

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the quaternion to check

#### Returns

`boolean`

true if the quaternion is identity

***

### Normalize()

> `static` **Normalize**(`quat`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5999](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5999)

Returns a new Quaternion as the normalization of the given Quaternion

#### Parameters

##### quat

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the Quaternion to normalize

#### Returns

`Quaternion`

the new Quaternion

***

### NormalizeToRef()

> `static` **NormalizeToRef**\<`T`\>(`quat`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6011](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6011)

Sets the given Quaternion "result" with the normalization of the given first Quaternion

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### quat

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines the Quaternion to normalize

##### result

`T`

defines the Quaternion where to store the result

#### Returns

`T`

result input

***

### Random()

> `static` **Random**(`min?`, `max?`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6051](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6051)

Returns a new Quaternion with random values between min and max

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

#### Returns

`Quaternion`

a Quaternion with random values between min and max

***

### RandomToRef()

> `static` **RandomToRef**\<`T`\>(`min?`, `max?`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:6062](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L6062)

Sets a Quaternion with random values between min and max

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

##### ref

`T`

the ref to store the values in

#### Returns

`T`

the ref with random values between min and max

***

### RotationAlphaBetaGamma()

> `static` **RotationAlphaBetaGamma**(`alpha`, `beta`, `gamma`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5734](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5734)

Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation
Example Playground https://playground.babylonjs.com/#L49EJ7#68

#### Parameters

##### alpha

`number`

defines the rotation around first axis

##### beta

`number`

defines the rotation around second axis

##### gamma

`number`

defines the rotation around third axis

#### Returns

`Quaternion`

the new quaternion

***

### RotationAlphaBetaGammaToRef()

> `static` **RotationAlphaBetaGammaToRef**\<`T`\>(`alpha`, `beta`, `gamma`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5749](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5749)

Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#69

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### alpha

`number`

defines the rotation around first axis

##### beta

`number`

defines the rotation around second axis

##### gamma

`number`

defines the rotation around third axis

##### result

`T`

defines the target quaternion

#### Returns

`T`

result input

***

### RotationAxis()

> `static` **RotationAxis**(`axis`, `angle`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5537](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5537)

Creates a quaternion from a rotation around an axis
Example Playground https://playground.babylonjs.com/#L49EJ7#72

#### Parameters

##### axis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the axis to use

##### angle

`number`

defines the angle to use

#### Returns

`Quaternion`

a new quaternion created from the given axis (Vector3) and angle in radians (float)

***

### RotationAxisToRef()

> `static` **RotationAxisToRef**\<`T`\>(`axis`, `angle`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5549](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5549)

Creates a rotation around an axis and stores it into the given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#73

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### axis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the axis to use

##### angle

`number`

defines the angle to use

##### result

`T`

defines the target quaternion

#### Returns

`T`

the target quaternion

***

### RotationQuaternionFromAxis()

> `static` **RotationQuaternionFromAxis**(`axis1`, `axis2`, `axis3`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5771](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5771)

Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation)
Example Playground https://playground.babylonjs.com/#L49EJ7#75

#### Parameters

##### axis1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the first axis

##### axis2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the second axis

##### axis3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the third axis

#### Returns

`Quaternion`

the new quaternion

***

### RotationQuaternionFromAxisToRef()

> `static` **RotationQuaternionFromAxisToRef**\<`T`\>(`axis1`, `axis2`, `axis3`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5786](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5786)

Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#76

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### axis1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the first axis

##### axis2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the second axis

##### axis3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the third axis

##### ref

`T`

defines the target quaternion

#### Returns

`T`

result input

***

### RotationYawPitchRoll()

> `static` **RotationYawPitchRoll**(`yaw`, `pitch`, `roll`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5690)

Creates a new quaternion from the given Euler float angles (y, x, z)
Example Playground https://playground.babylonjs.com/#L49EJ7#77

#### Parameters

##### yaw

`number`

defines the rotation around Y axis

##### pitch

`number`

defines the rotation around X axis

##### roll

`number`

defines the rotation around Z axis

#### Returns

`Quaternion`

the new quaternion

***

### RotationYawPitchRollToRef()

> `static` **RotationYawPitchRollToRef**\<`T`\>(`yaw`, `pitch`, `roll`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5705)

Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#561

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### yaw

`number`

defines the rotation around Y axis

##### pitch

`number`

defines the rotation around X axis

##### roll

`number`

defines the rotation around Z axis

##### result

`T`

defines the target quaternion

#### Returns

`T`

result input

***

### Slerp()

> `static` **Slerp**(`left`, `right`, `amount`): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5863](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5863)

Interpolates between two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#79

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines first quaternion

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines second quaternion

##### amount

`number`

defines the gradient to use

#### Returns

`Quaternion`

the new interpolated quaternion

***

### SlerpToRef()

> `static` **SlerpToRef**\<`T`\>(`left`, `right`, `amount`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5880](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5880)

Interpolates between two quaternions and stores it into a target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#92

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines first quaternion

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Quaternion`\>

defines second quaternion

##### amount

`number`

defines the gradient to use

##### result

`T`

defines the target quaternion

#### Returns

`T`

result input

***

### SmoothToRef()

> `static` **SmoothToRef**\<`T`\>(`source`, `goal`, `deltaTime`, `lerpTime`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5475)

Smooth interpolation between two quaternions using Slerp
Example Playground https://playground.babylonjs.com/#L49EJ7#93

#### Type Parameters

##### T

`T` *extends* `Quaternion`

#### Parameters

##### source

`Quaternion`

source quaternion

##### goal

`Quaternion`

goal quaternion

##### deltaTime

`number`

current interpolation frame

##### lerpTime

`number`

total interpolation time

##### result

`T`

the smoothed quaternion

#### Returns

`T`

the smoothed quaternion

***

### Zero()

> `static` **Zero**(): `Quaternion`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:5487](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L5487)

Creates an empty quaternion

#### Returns

`Quaternion`

a new quaternion set to (0.0, 0.0, 0.0)
