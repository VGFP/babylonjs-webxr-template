[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Vector4

# Class: Vector4

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3396)

Vector4 class created for EulerAngle class conversion to Quaternion

## Implements

- [`Vector`](../interfaces/Vector.md)\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `4`\>, `IVector4Like`\>

## Constructors

### Constructor

> **new Vector4**(`x?`, `y?`, `z?`, `w?`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3475)

Creates a Vector4 object from the given floats.

#### Parameters

##### x?

`number` = `0`

x value of the vector

##### y?

`number` = `0`

y value of the vector

##### z?

`number` = `0`

z value of the vector

##### w?

`number` = `0`

w value of the vector

#### Returns

`Vector4`

## Properties

### dimension

> `readonly` **dimension**: readonly \[`4`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3410)

#### See

Tensor.dimension

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`dimension`](../interfaces/Vector.md#dimension)

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3415)

#### See

Tensor.rank

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`rank`](../interfaces/Vector.md#rank)

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Vector4`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3404)

If the first vector is flagged with integers (as everything is 0,0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all Vector4 instances that it creates.
But the original Vector4 instances are unchanged and has a "deprecated map".
If we keep using the Vector4 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Accessors

### w

#### Get Signature

> **get** **w**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3460](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3460)

Gets or sets the w coordinate

##### Returns

`number`

#### Set Signature

> **set** **w**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3463](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3463)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.w`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3433)

Gets or sets the x coordinate

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3436)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.x`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3442](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3442)

Gets or sets the y coordinate

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3445)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.y`

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3451)

Gets or sets the z coordinate

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3454)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.z`

***

### ZeroReadOnly

#### Get Signature

> **get** `static` **ZeroReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4258)

Gets a zero Vector4 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

## Methods

### add()

> **add**(`otherVector`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3586)

Returns a new Vector4 as the result of the addition of the current Vector4 and the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to add

#### Returns

`Vector4`

the resulting vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`add`](../interfaces/Vector.md#add)

***

### addInPlace()

> **addInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3557](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3557)

Adds the given vector to the current Vector4.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

the vector to add

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlace`](../interfaces/Vector.md#addinplace)

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3573)

Adds the given coordinates to the current Vector4

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

##### z

`number`

defines the z coordinate of the operand

##### w

`number`

defines the w coordinate of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlaceFromFloats`](../interfaces/Vector.md#addinplacefromfloats)

***

### addToRef()

> **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3596)

Updates the given vector "result" with the result of the addition of the current Vector4 and the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to add

##### result

`T`

the vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addToRef`](../interfaces/Vector.md#addtoref)

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3520)

Returns a new array populated with 4 elements : the Vector4 coordinates.

#### Returns

\[`number`, `number`, `number`, `number`\]

the resulting array

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`asArray`](../interfaces/Vector.md#asarray)

***

### clone()

> **clone**(): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4057](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4057)

Returns a new Vector4 copied from the current one.

#### Returns

`Vector4`

the new cloned vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`clone`](../interfaces/Vector.md#clone)

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4065](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4065)

Updates the current Vector4 with the given one coordinates.

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the source vector to copy from

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFrom`](../interfaces/Vector.md#copyfrom)

***

### copyFromFloats()

> **copyFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4080](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4080)

Updates the current Vector4 coordinates with the given floats.

#### Parameters

##### x

`number`

float to copy from

##### y

`number`

float to copy from

##### z

`number`

float to copy from

##### w

`number`

float to copy from

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFromFloats`](../interfaces/Vector.md#copyfromfloats)

***

### divide()

> **divide**(`otherVector`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3839)

Returns a new Vector4 set with the division result of the current Vector4 by the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to devide with

#### Returns

`Vector4`

resulting new vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divide`](../interfaces/Vector.md#divide)

***

### divideInPlace()

> **divideInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3861](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3861)

Divides the current Vector3 coordinates by the given ones.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to devide with

#### Returns

`this`

the updated Vector3.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideInPlace`](../interfaces/Vector.md#divideinplace)

***

### divideToRef()

> **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3848)

Updates the given vector "result" with the division result of the current Vector4 by the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to devide with

##### result

`T`

vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideToRef`](../interfaces/Vector.md#dividetoref)

***

### dot()

> **dot**(`otherVector`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4114)

Returns the dot product (float) between the current vectors and "otherVector"

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the right operand

#### Returns

`number`

the dot product

***

### equals()

> **equals**(`otherVector`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3757](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3757)

Boolean : True if the current Vector4 coordinates are stricly equal to the given ones.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to compare against

#### Returns

`boolean`

true if they are equal

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equals`](../interfaces/Vector.md#equals)

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3785)

Boolean : True if the given floats are strictly equal to the current Vector4 coordinates.

#### Parameters

##### x

`number`

x value to compare against

##### y

`number`

y value to compare against

##### z

`number`

z value to compare against

##### w

`number`

w value to compare against

#### Returns

`boolean`

true if equal

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsToFloats`](../interfaces/Vector.md#equalstofloats)

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3767](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3767)

Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to compare against

##### epsilon?

`number` = `Epsilon`

(Default: very small number)

#### Returns

`boolean`

true if they are equal

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsWithEpsilon`](../interfaces/Vector.md#equalswithepsilon)

***

### floor()

> **floor**(): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3955)

Gets a new Vector4 from current Vector4 floored values

#### Returns

`Vector4`

a new Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floor`](../interfaces/Vector.md#floor)

***

### floorToRef()

> **floorToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3943](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3943)

Gets the current Vector4's floored values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### result

`T`

the vector to store the result in

#### Returns

`T`

the result vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floorToRef`](../interfaces/Vector.md#floortoref)

***

### fract()

> **fract**(): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3976](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3976)

Gets a new Vector4 from current Vector4 fractional values

#### Returns

`Vector4`

a new Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fract`](../interfaces/Vector.md#fract)

***

### fractToRef()

> **fractToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3964](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3964)

Gets the current Vector4's fractional values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### result

`T`

the vector to store the result in

#### Returns

`T`

the result vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fractToRef`](../interfaces/Vector.md#fracttoref)

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3547)

Update the current vector from an array

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the destination array

##### offset?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fromArray`](../interfaces/Vector.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3494](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3494)

Returns the string "Vector4".

#### Returns

`string`

"Vector4"

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getClassName`](../interfaces/Vector.md#getclassname)

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3502](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3502)

Returns the Vector4 hash code.

#### Returns

`number`

a unique hash code

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getHashCode`](../interfaces/Vector.md#gethashcode)

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3985](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3985)

Returns the Vector4 length (float).

#### Returns

`number`

the length

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`length`](../interfaces/Vector.md#length)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3992](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3992)

Returns the Vector4 squared length (float).

#### Returns

`number`

the length squared

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`lengthSquared`](../interfaces/Vector.md#lengthsquared)

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3890](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3890)

Updates the Vector4 coordinates with the maximum values between its own and the given vector ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlace`](../interfaces/Vector.md#maximizeinplace)

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3930](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3930)

Updates the current Vector4 with the maximal coordinate values between its and the given coordinates.

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

##### z

`number`

defines the z coordinate of the operand

##### w

`number`

defines the w coordinate of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlaceFromFloats`](../interfaces/Vector.md#maximizeinplacefromfloats)

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3870](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3870)

Updates the Vector4 coordinates with the minimum values between its own and the given vector ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlace`](../interfaces/Vector.md#minimizeinplace)

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3914](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3914)

Updates the current Vector4 with the minimal coordinate values between its and the given coordinates

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

##### z

`number`

defines the z coordinate of the operand

##### w

`number`

defines the w coordinate of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlaceFromFloats`](../interfaces/Vector.md#minimizeinplacefromfloats)

***

### multiply()

> **multiply**(`otherVector`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3807](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3807)

Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to multiple with

#### Returns

`Vector4`

resulting new vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiply`](../interfaces/Vector.md#multiply)

***

### multiplyByFloats()

> **multiplyByFloats**(`x`, `y`, `z`, `w`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3831](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3831)

Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates.

#### Parameters

##### x

`number`

x value multiply with

##### y

`number`

y value multiply with

##### z

`number`

z value multiply with

##### w

`number`

w value multiply with

#### Returns

`Vector4`

resulting new vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyByFloats`](../interfaces/Vector.md#multiplybyfloats)

***

### multiplyInPlace()

> **multiplyInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3794](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3794)

Multiplies in place the current Vector4 by the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to multiple with

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyInPlace`](../interfaces/Vector.md#multiplyinplace)

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3816](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3816)

Updates the given vector "result" with the multiplication result of the current Vector4 and the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to multiple with

##### result

`T`

vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyToRef`](../interfaces/Vector.md#multiplytoref)

***

### negate()

> **negate**(): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3673)

Returns a new Vector4 set with the current Vector4 negated coordinates.

#### Returns

`Vector4`

a new vector with the negated values

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negate`](../interfaces/Vector.md#negate)

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3681](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3681)

Negate this vector in place

#### Returns

`this`

this

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateInPlace`](../interfaces/Vector.md#negateinplace)

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3694)

Negate the current Vector4 and stores the result in the given vector "result" coordinates

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateToRef`](../interfaces/Vector.md#negatetoref)

***

### normalize()

> **normalize**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4001](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4001)

Normalizes in place the Vector4.

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalize`](../interfaces/Vector.md#normalize)

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4011](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4011)

Normalize the current Vector4 with the given input length.
Please note that this is an in place operation.

#### Parameters

##### len

`number`

the length of the vector

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeFromLength`](../interfaces/Vector.md#normalizefromlength)

***

### normalizeToNew()

> **normalizeToNew**(): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4023](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4023)

Normalize the current Vector4 to a new vector

#### Returns

`Vector4`

the new Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToNew`](../interfaces/Vector.md#normalizetonew)

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`reference`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4032](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4032)

Normalize the current Vector4 to the reference

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### reference

`T`

define the Vector4 to update

#### Returns

`T`

the updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToRef`](../interfaces/Vector.md#normalizetoref)

***

### scale()

> **scale**(`scale`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3720](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3720)

Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).

#### Parameters

##### scale

`number`

the number to scale with

#### Returns

`Vector4`

a new vector with the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scale`](../interfaces/Vector.md#scale)

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3744](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3744)

Scale the current Vector4 values by a factor and add the result to a given Vector4

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Vector4 object where to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleAndAddToRef`](../interfaces/Vector.md#scaleandaddtoref)

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3707](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3707)

Multiplies the current Vector4 coordinates by scale (float).

#### Parameters

##### scale

`number`

the number to scale with

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleInPlace`](../interfaces/Vector.md#scaleinplace)

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3730](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3730)

Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float).

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### scale

`number`

the number to scale with

##### result

`T`

a vector to store the result in

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleToRef`](../interfaces/Vector.md#scaletoref)

***

### set()

> **set**(`x`, `y`, `z`, `w`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4095](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4095)

Updates the current Vector4 coordinates with the given floats.

#### Parameters

##### x

`number`

float to set from

##### y

`number`

float to set from

##### z

`number`

float to set from

##### w

`number`

float to set from

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`set`](../interfaces/Vector.md#set)

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4104)

Copies the given float to the current Vector4 coordinates

#### Parameters

##### v

`number`

defines the x, y, z and w coordinates of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`setAll`](../interfaces/Vector.md#setall)

***

### subtract()

> **subtract**(`otherVector`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3622](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3622)

Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to add

#### Returns

`Vector4`

the new vector with the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtract`](../interfaces/Vector.md#subtract)

***

### subtractFromFloats()

> **subtractFromFloats**(`x`, `y`, `z`, `w`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3648](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3648)

Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.

#### Parameters

##### x

`number`

value to subtract

##### y

`number`

value to subtract

##### z

`number`

value to subtract

##### w

`number`

value to subtract

#### Returns

`Vector4`

new vector containing the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloats`](../interfaces/Vector.md#subtractfromfloats)

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3661](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3661)

Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

value to subtract

##### y

`number`

value to subtract

##### z

`number`

value to subtract

##### w

`number`

value to subtract

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloatsToRef`](../interfaces/Vector.md#subtractfromfloatstoref)

***

### subtractInPlace()

> **subtractInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3609)

Subtract in place the given vector from the current Vector4.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to subtract

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractInPlace`](../interfaces/Vector.md#subtractinplace)

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3632)

Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to subtract

##### result

`T`

the vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractToRef`](../interfaces/Vector.md#subtracttoref)

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3530](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3530)

Populates the given array from the given index with the Vector4 coordinates.

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to populate

##### index?

`number`

index of the array to start at (default: 0)

#### Returns

`this`

the Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`toArray`](../interfaces/Vector.md#toarray)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3486](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3486)

Returns the string with the Vector4 coordinates.

#### Returns

`string`

a string containing all the vector values

***

### toVector3()

> **toVector3**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4049](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4049)

Returns a new Vector3 from the Vector4 (x, y, z) coordinates.

#### Returns

[`Vector3`](Vector3.md)

this converted to a new vector3

***

### Center()

> `static` **Center**(`value1`, `value2`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4334)

Returns a new Vector4 located at the center between the vectors "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the center between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the center between

#### Returns

`Vector4`

the center between the two vectors

***

### CenterToRef()

> `static` **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4345)

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines first vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines second vector

##### ref

`T`

defines third vector

#### Returns

`T`

ref

***

### CheckExtends()

> `static` **CheckExtends**(`v`, `min`, `max`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4250)

Checks if a given vector is inside a specific range
Example Playground https://playground.babylonjs.com/#R1F8YU#75

#### Parameters

##### v

`IVector4Like`

defines the vector to test

##### min

`Vector4`

defines the minimum range

##### max

`Vector4`

defines the maximum range

#### Returns

`void`

***

### Clamp()

> `static` **Clamp**(`value`, `min`, `max`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4221)

Returns a new Vector4 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the upper range value

#### Returns

`Vector4`

the new Vector4

***

### ClampToRef()

> `static` **ClampToRef**\<`T`\>(`value`, `min`, `max`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4235)

Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the upper range value

##### result

`T`

defines the Vector4 where to store the result

#### Returns

`T`

result input

***

### Distance()

> `static` **Distance**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4311)

Returns the distance (float) between the vectors "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

#### Returns

`number`

the distance between the two vectors

***

### DistanceSquared()

> `static` **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4320)

Returns the squared distance (float) between the vectors "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

#### Returns

`number`

the distance between the two vectors squared

***

### Dot()

> `static` **Dot**(`left`, `right`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4471)

Returns the dot product (float) between the vectors "left" and "right"

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the left operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the right operand

#### Returns

`number`

the dot product

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4125)

Returns a new Vector4 set from the starting index of the given array.

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

the array to pull values from

##### offset?

`number`

the offset into the array to start at

#### Returns

`Vector4`

the new vector

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4138)

Updates the given vector "result" from the starting index of the given array.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

the array to pull values from

##### offset

`number`

the offset into the array to start at

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### FromFloatArrayToRef()

> `static` **FromFloatArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4152)

Updates the given vector "result" from the starting index of the given Float32Array.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Float32Array`\>

the array to pull values from

##### offset

`number`

the offset into the array to start at

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### FromFloatsToRef()

> `static` **FromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4165)

Updates the given vector "result" coordinates from the given floats.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

float to set from

##### y

`number`

float to set from

##### z

`number`

float to set from

##### w

`number`

float to set from

##### result

`T`

the vector to the floats in

#### Returns

`T`

result input

***

### FromVector3()

> `static` **FromVector3**(`source`, `w?`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4461)

Creates a new Vector4 from a Vector3

#### Parameters

##### source

[`Vector3`](Vector3.md)

defines the source data

##### w?

`number` = `0`

defines the 4th component (default is 0)

#### Returns

`Vector4`

a new Vector4

***

### Maximize()

> `static` **Maximize**(`left`, `right`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4299)

Returns a vector with the maximum values from the left and right vectors

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

left vector to maximize

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

right vector to maximize

#### Returns

`Vector4`

a new vector with the maximum of the left and right vector values

***

### Minimize()

> `static` **Minimize**\<`T`\>(`left`, `right`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4286)

Returns a vector with the minimum values from the left and right vectors

#### Type Parameters

##### T

`T` *extends* `Vector4`

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`T`\>

left vector to minimize

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

right vector to minimize

#### Returns

`Vector4`

a new vector with the minimum of the left and right vector values

***

### Normalize()

> `static` **Normalize**(`vector`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4266)

Returns a new normalized Vector4 from the given one.

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

the vector to normalize

#### Returns

`Vector4`

the vector

***

### NormalizeToRef()

> `static` **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4275)

Updates the given vector "result" from the normalization of the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

the vector to normalize

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### One()

> `static` **One**(): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4183)

Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)

#### Returns

`Vector4`

the new vector

***

### Random()

> `static` **Random**(`min?`, `max?`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4193)

Returns a new Vector4 with random values between min and max

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

#### Returns

`Vector4`

a Vector4 with random values between min and max

***

### RandomToRef()

> `static` **RandomToRef**\<`T`\>(`min?`, `max?`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4204)

Sets a Vector4 with random values between min and max

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

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

### TransformCoordinates()

> `static` **TransformCoordinates**(`vector`, `transformation`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4361)

Returns a new Vector4 set with the result of the transformation by the given matrix of the given vector.
This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
The difference with Vector3.TransformCoordinates is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

#### Returns

`Vector4`

the transformed Vector4

***

### TransformCoordinatesFromFloatsToRef()

> `static` **TransformCoordinatesFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4390)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
This method computes tranformed coordinates only, not transformed direction vectors
The difference with Vector3.TransformCoordinatesFromFloatsToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

define the x coordinate of the source vector

##### y

`number`

define the y coordinate of the source vector

##### z

`number`

define the z coordinate of the source vector

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector4 where to store the result

#### Returns

`T`

result input

***

### TransformCoordinatesToRef()

> `static` **TransformCoordinatesToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4374)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
The difference with Vector3.TransformCoordinatesToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector4 where to store the result

#### Returns

`T`

result input

***

### TransformNormal()

> `static` **TransformNormal**(`vector`, `transformation`): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4411](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4411)

Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector.
This methods computes transformed normalized direction vectors only.

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

the transformation matrix to apply

#### Returns

`Vector4`

the new vector

***

### TransformNormalFromFloatsToRef()

> `static` **TransformNormalFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4446)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w).
This methods computes transformed normalized direction vectors only.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

value to transform

##### y

`number`

value to transform

##### z

`number`

value to transform

##### w

`number`

value to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

the transformation matrix to apply

##### result

`T`

the vector to store the results in

#### Returns

`T`

result input

***

### TransformNormalToRef()

> `static` **TransformNormalToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4423)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector.
This methods computes transformed normalized direction vectors only.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

the transformation matrix to apply

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### Zero()

> `static` **Zero**(): `Vector4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:4176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L4176)

Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)

#### Returns

`Vector4`

the new vector
