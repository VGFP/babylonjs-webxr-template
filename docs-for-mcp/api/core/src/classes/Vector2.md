[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Vector2

# Class: Vector2

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L107)

Class representing a vector containing 2 coordinates
Example Playground - Overview -  https://playground.babylonjs.com/#QYBWV4#9

## Extended by

- [`Vector2WithInfo`](../../../gui/src/classes/Vector2WithInfo.md)

## Implements

- [`Vector`](../interfaces/Vector.md)\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `2`\>, `IVector2Like`\>

## Constructors

### Constructor

> **new Vector2**(`x?`, `y?`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L133)

Creates a new Vector2 from the given x and y coordinates

#### Parameters

##### x?

`number` = `0`

defines the first coordinate

##### y?

`number` = `0`

defines the second coordinate

#### Returns

`Vector2`

## Properties

### dimension

> `readonly` **dimension**: readonly \[`2`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L121)

#### See

Tensor.dimension

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`dimension`](../interfaces/Vector.md#dimension)

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L126)

#### See

Tensor.rank

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`rank`](../interfaces/Vector.md#rank)

***

### x

> **x**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L135)

[0] defines the first coordinate

#### Implementation of

`IVector2Like.x`

***

### y

> **y**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L137)

[0] defines the second coordinate

#### Implementation of

`IVector2Like.y`

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Vector2`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L115)

If the first vector is flagged with integers (as everything is 0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all Vector2 instances that it creates.
But the original Vector2 instances are unchanged and has a "deprecated map".
If we keep using the Vector2 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Accessors

### ZeroReadOnly

#### Get Signature

> **get** `static` **ZeroReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector2`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L789)

Gets a zero Vector2 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector2`\>

## Methods

### add()

> **add**(`otherVector`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L255)

Add another vector with the current one
Example Playground https://playground.babylonjs.com/#QYBWV4#11

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`Vector2`

a new Vector2 set with the addition of the current Vector2 and the given one coordinates

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`add`](../interfaces/Vector.md#add)

***

### addInPlace()

> **addInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L278)

Set the Vector2 coordinates by adding the given Vector2 coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#13

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlace`](../interfaces/Vector.md#addinplace)

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L290)

Adds the given coordinates to the current Vector2

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlaceFromFloats`](../interfaces/Vector.md#addinplacefromfloats)

***

### addToRef()

> **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L266)

Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#12

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addToRef`](../interfaces/Vector.md#addtoref)

***

### addVector3()

> **addVector3**(`otherVector`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L302)

Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#14

#### Parameters

##### otherVector

`IVector3Like`

defines the other vector

#### Returns

`Vector2`

a new Vector2

***

### asArray()

> **asArray**(): \[`number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L200)

Copy the current vector to an array
Example Playground https://playground.babylonjs.com/#QYBWV4#40

#### Returns

\[`number`, `number`\]

a new array with 2 elements: the Vector2 coordinates.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`asArray`](../interfaces/Vector.md#asarray)

***

### clone()

> **clone**(): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:734](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L734)

Gets a new Vector2 copied from the Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#20

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`clone`](../interfaces/Vector.md#clone)

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L210)

Sets the Vector2 coordinates with the given Vector2 coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#24

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the source Vector2

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFrom`](../interfaces/Vector.md#copyfrom)

***

### copyFromFloats()

> **copyFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L223)

Sets the Vector2 coordinates with the given floats
Example Playground https://playground.babylonjs.com/#QYBWV4#25

#### Parameters

##### x

`number`

defines the first coordinate

##### y

`number`

defines the second coordinate

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFromFloats`](../interfaces/Vector.md#copyfromfloats)

***

### divide()

> **divide**(`otherVector`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:392](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L392)

Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#27

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divide`](../interfaces/Vector.md#divide)

***

### divideInPlace()

> **divideInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L415)

Divides the current Vector2 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#QYBWV4#28

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideInPlace`](../interfaces/Vector.md#divideinplace)

***

### divideToRef()

> **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L403)

Sets the "result" coordinates with the Vector2 divided by the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#30

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideToRef`](../interfaces/Vector.md#dividetoref)

***

### dot()

> **dot**(`otherVector`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:743](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L743)

Gets the dot product of the current vector and the vector "otherVector"

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the dot product (float)

***

### equals()

> **equals**(`otherVector`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:571](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L571)

Gets a boolean if two vectors are equals
Example Playground https://playground.babylonjs.com/#QYBWV4#31

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`boolean`

true if the given vector coordinates strictly equal the current Vector2 ones

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equals`](../interfaces/Vector.md#equals)

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L592)

Returns true if the current Vector2 coordinates equals the given floats

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

#### Returns

`boolean`

true if both vectors are equal

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsToFloats`](../interfaces/Vector.md#equalstofloats)

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L582)

Gets a boolean if two vectors are equals (using an epsilon value)
Example Playground https://playground.babylonjs.com/#QYBWV4#32

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### epsilon?

`number` = `Epsilon`

defines the minimal distance to consider equality

#### Returns

`boolean`

true if the given vector coordinates are close to the current ones by a distance of epsilon.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsWithEpsilon`](../interfaces/Vector.md#equalswithepsilon)

***

### floor()

> **floor**(): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L602)

Gets a new Vector2 from current Vector2 floored values
Example Playground https://playground.babylonjs.com/#QYBWV4#35
eg (1.2, 2.31) returns (1, 2)

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floor`](../interfaces/Vector.md#floor)

***

### floorToRef()

> **floorToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:611](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L611)

Gets the current Vector2's floored values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### result

`T`

the Vector2 to store the result in

#### Returns

`T`

the result Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floorToRef`](../interfaces/Vector.md#floortoref)

***

### fract()

> **fract**(): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:623](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L623)

Gets a new Vector2 from current Vector2 fractional values
Example Playground https://playground.babylonjs.com/#QYBWV4#34
eg (1.2, 2.31) returns (0.2, 0.31)

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fract`](../interfaces/Vector.md#fract)

***

### fractToRef()

> **fractToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:632](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L632)

Gets the current Vector2's fractional values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### result

`T`

the Vector2 to store the result in

#### Returns

`T`

the result Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fractToRef`](../interfaces/Vector.md#fracttoref)

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L190)

Update the current vector from an array
Example Playground https://playground.babylonjs.com/#QYBWV4#39

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the destination array

##### offset?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fromArray`](../interfaces/Vector.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L152)

Gets class name

#### Returns

`string`

the string "Vector2"

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getClassName`](../interfaces/Vector.md#getclassname)

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L160)

Gets current vector hash code

#### Returns

`number`

the Vector2 hash code as a number

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getHashCode`](../interfaces/Vector.md#gethashcode)

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:668](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L668)

Gets the length of the vector

#### Returns

`number`

the vector length (float)

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`length`](../interfaces/Vector.md#length)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L676)

Gets the vector squared length

#### Returns

`number`

the vector squared length (float)

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`lengthSquared`](../interfaces/Vector.md#lengthsquared)

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L435)

Updates the current Vector2 with the maximal coordinate values between its and the given vector ones.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlace`](../interfaces/Vector.md#maximizeinplace)

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:457](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L457)

Updates the current Vector2 with the maximal coordinate values between its and the given coordinates.

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlaceFromFloats`](../interfaces/Vector.md#maximizeinplacefromfloats)

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L426)

Updates the current Vector2 with the minimal coordinate values between its and the given vector ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlace`](../interfaces/Vector.md#minimizeinplace)

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:445](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L445)

Updates the current Vector2 with the minimal coordinate values between its and the given coordinates

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlaceFromFloats`](../interfaces/Vector.md#minimizeinplacefromfloats)

***

### multiply()

> **multiply**(`otherVector`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:358](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L358)

Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#42

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiply`](../interfaces/Vector.md#multiply)

***

### multiplyByFloats()

> **multiplyByFloats**(`x`, `y`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L382)

Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats
Example Playground https://playground.babylonjs.com/#QYBWV4#89

#### Parameters

##### x

`number`

defines the first coordinate

##### y

`number`

defines the second coordinate

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyByFloats`](../interfaces/Vector.md#multiplybyfloats)

***

### multiplyInPlace()

> **multiplyInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L346)

Multiplies in place the current Vector2 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#QYBWV4#43

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyInPlace`](../interfaces/Vector.md#multiplyinplace)

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:369](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L369)

Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#44

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyToRef`](../interfaces/Vector.md#multiplytoref)

***

### negate()

> **negate**(): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L490)

Gets a new Vector2 with current Vector2 negated coordinates

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negate`](../interfaces/Vector.md#negate)

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:499](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L499)

Negate this vector in place
Example Playground https://playground.babylonjs.com/#QYBWV4#23

#### Returns

`this`

this

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateInPlace`](../interfaces/Vector.md#negateinplace)

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:511](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L511)

Negate the current Vector2 and stores the result in the given vector "result" coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#41

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### result

`T`

defines the Vector2 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateToRef`](../interfaces/Vector.md#negatetoref)

***

### normalize()

> **normalize**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:687](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L687)

Normalize the vector
Example Playground https://playground.babylonjs.com/#QYBWV4#48

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalize`](../interfaces/Vector.md#normalize)

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:697](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L697)

Normalize the current Vector2 with the given input length.
Please note that this is an in place operation.

#### Parameters

##### len

`number`

the length of the vector

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeFromLength`](../interfaces/Vector.md#normalizefromlength)

***

### normalizeToNew()

> **normalizeToNew**(): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:709](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L709)

Normalize the current Vector2 to a new vector

#### Returns

`Vector2`

the new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToNew`](../interfaces/Vector.md#normalizetonew)

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:720](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L720)

Normalize the current Vector2 to the reference

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### result

`T`

define the Vector to update

#### Returns

`T`

the updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToRef`](../interfaces/Vector.md#normalizetoref)

***

### rotate()

> **rotate**(`angle`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:643](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L643)

Gets a new Vector2 rotated by the given angle

#### Parameters

##### angle

`number`

defines the rotation angle

#### Returns

`Vector2`

a new Vector2

***

### rotateToRef()

> **rotateToRef**\<`T`\>(`angle`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:654](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L654)

Rotate the current vector into a given result vector
Example Playground https://playground.babylonjs.com/#QYBWV4#49

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### angle

`number`

defines the rotation angle

##### result

`T`

defines the result vector where to store the rotated vector

#### Returns

`T`

result input

***

### scale()

> **scale**(`scale`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L535)

Returns a new Vector2 scaled by "scale" from the current Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#52

#### Parameters

##### scale

`number`

defines the scaling factor

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scale`](../interfaces/Vector.md#scale)

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L559)

Scale the current Vector2 values by a factor and add the result to a given Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#58

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Vector2 object where to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleAndAddToRef`](../interfaces/Vector.md#scaleandaddtoref)

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:523](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L523)

Multiply the Vector2 coordinates by
Example Playground https://playground.babylonjs.com/#QYBWV4#59

#### Parameters

##### scale

`number`

defines the scaling factor

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleInPlace`](../interfaces/Vector.md#scaleinplace)

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L546)

Scale the current Vector2 values by a factor to a given Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#57

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Vector2 object where to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleToRef`](../interfaces/Vector.md#scaletoref)

***

### set()

> **set**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L236)

Sets the Vector2 coordinates with the given floats
Example Playground https://playground.babylonjs.com/#QYBWV4#62

#### Parameters

##### x

`number`

defines the first coordinate

##### y

`number`

defines the second coordinate

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`set`](../interfaces/Vector.md#set)

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L245)

Copies the given float to the current Vector2 coordinates

#### Parameters

##### v

`number`

defines the x and y coordinates of the operand

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`setAll`](../interfaces/Vector.md#setall)

***

### subtract()

> **subtract**(`otherVector`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L312)

Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#61

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`Vector2`

a new Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtract`](../interfaces/Vector.md#subtract)

***

### subtractFromFloats()

> **subtractFromFloats**(`x`, `y`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:469](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L469)

Returns a new Vector2 set with the subtraction of the given floats from the current Vector2 coordinates

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

#### Returns

`Vector2`

the resulting Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloats`](../interfaces/Vector.md#subtractfromfloats)

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:480](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L480)

Subtracts the given floats from the current Vector2 coordinates and set the given vector "result" with this result

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

##### result

`T`

defines the Vector2 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloatsToRef`](../interfaces/Vector.md#subtractfromfloatstoref)

***

### subtractInPlace()

> **subtractInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L334)

Sets the current Vector2 coordinates by subtracting from it the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#88

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractInPlace`](../interfaces/Vector.md#subtractinplace)

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L323)

Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
Example Playground https://playground.babylonjs.com/#QYBWV4#63

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractToRef`](../interfaces/Vector.md#subtracttoref)

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L177)

Sets the Vector2 coordinates in the given array or Float32Array from the given index.
Example Playground https://playground.babylonjs.com/#QYBWV4#15

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the source array

##### index?

`number` = `0`

defines the offset in source array

#### Returns

`this`

the current Vector2

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`toArray`](../interfaces/Vector.md#toarray)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L144)

Gets a string with the Vector2 coordinates

#### Returns

`string`

a string with the Vector2 coordinates

***

### CatmullRom()

> `static` **CatmullRom**(`value1`, `value2`, `value3`, `value4`, `amount`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:840](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L840)

Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#65

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st point of control

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd point of control

##### value3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 3rd point of control

##### value4

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 4th point of control

##### amount

`number`

defines the interpolation factor

#### Returns

`Vector2`

a new Vector2

***

### Center()

> `static` **Center**(`value1`, `value2`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1139)

Gets a new Vector2 located at the center of the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#86
Example Playground https://playground.babylonjs.com/#QYBWV4#66

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`Vector2`

a new Vector2

***

### CenterToRef()

> `static` **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1151)

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
Example Playground https://playground.babylonjs.com/#QYBWV4#66

#### Type Parameters

##### T

`T` *extends* `Vector2`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

##### ref

`T`

defines third vector

#### Returns

`T`

ref

***

### Clamp()

> `static` **Clamp**(`value`, `min`, `max`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:893](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L893)

Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
Example Playground https://playground.babylonjs.com/#QYBWV4#76

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the value to clamp

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the lower limit

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the upper limit

#### Returns

`Vector2`

a new Vector2

***

### ClampToRef()

> `static` **ClampToRef**\<`T`\>(`value`, `min`, `max`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:877](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L877)

Sets reference with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate

#### Type Parameters

##### T

`T` *extends* `Vector2`

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the value to clamp

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the lower limit

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the upper limit

##### ref

`T`

the reference

#### Returns

`T`

the reference

***

### Distance()

> `static` **Distance**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1114)

Gets the distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#71

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the distance between vectors

***

### DistanceOfPointFromSegment()

> `static` **DistanceOfPointFromSegment**(`p`, `segA`, `segB`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1163)

Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
Example Playground https://playground.babylonjs.com/#QYBWV4#77

#### Parameters

##### p

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector2`\>

defines the middle point

##### segA

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector2`\>

defines one point of the segment

##### segB

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector2`\>

defines the other point of the segment

#### Returns

`number`

the shortest distance

***

### DistanceSquared()

> `static` **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1125)

Returns the squared distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#72

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the squared distance between vectors

***

### Dot()

> `static` **Dot**(`left`, `right`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1009](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1009)

Gets the dot product of the vector "left" and the vector "right"
Example Playground https://playground.babylonjs.com/#QYBWV4#90

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the dot product (float)

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:800](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L800)

Gets a new Vector2 set from the given index element of the given array
Example Playground https://playground.babylonjs.com/#QYBWV4#79

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the data source

##### offset?

`number` = `0`

defines the offset in the data source

#### Returns

`Vector2`

a new Vector2

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:812](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L812)

Sets "result" from the given index element of the given array
Example Playground https://playground.babylonjs.com/#QYBWV4#80

#### Type Parameters

##### T

`T` *extends* `Vector2`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the data source

##### offset

`number`

defines the offset in the data source

##### result

`T`

defines the target vector

#### Returns

`T`

result input

***

### FromFloatsToRef()

> `static` **FromFloatsToRef**\<`T`\>(`x`, `y`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:825](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L825)

Sets the given vector "result" with the given floats.

#### Type Parameters

##### T

`T` *extends* `Vector2`

#### Parameters

##### x

`number`

defines the x coordinate of the source

##### y

`number`

defines the y coordinate of the source

##### result

`T`

defines the Vector2 where to store the result

#### Returns

`T`

the result vector

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:909](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L909)

Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2"
Example Playground https://playground.babylonjs.com/#QYBWV4#81

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the 1st control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the outgoing tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the 2nd control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the incoming tangent

##### amount

`number`

defines the interpolation factor

#### Returns

`Vector2`

a new Vector2

***

### Hermite1stDerivative()

> `static` **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:939](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L939)

Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#QYBWV4#82

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

`Vector2`

1st derivative

***

### Hermite1stDerivativeToRef()

> `static` **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:960](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L960)

Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#QYBWV4#83

#### Type Parameters

##### T

`T` *extends* `Vector2`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

##### result

`T`

define where the derivative will be stored

#### Returns

`T`

result input

***

### Lerp()

> `static` **Lerp**(`start`, `end`, `amount`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:984](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L984)

Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
Example Playground https://playground.babylonjs.com/#QYBWV4#84

#### Parameters

##### start

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the start vector

##### end

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the end vector

##### amount

`number`

defines the interpolation factor

#### Returns

`Vector2`

a new Vector2

***

### LerpToRef()

> `static` **LerpToRef**(`start`, `end`, `amount`, `result`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:996](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L996)

Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"

#### Parameters

##### start

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the start value

##### end

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the end value

##### amount

`number`

max defines amount between both (between 0 and 1)

##### result

`Vector2`

defines the Vector2 where to store the result

#### Returns

`Vector2`

result input

***

### Maximize()

> `static` **Maximize**(`left`, `right`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1055](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1055)

Gets a new Vector2 set with the maximal coordinate values from the "left" and "right" vectors
Example Playground https://playground.babylonjs.com/#QYBWV4#86

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st vector

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd vector

#### Returns

`Vector2`

a new Vector2

***

### Minimize()

> `static` **Minimize**(`left`, `right`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1042](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1042)

Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
Example Playground https://playground.babylonjs.com/#QYBWV4#86

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st vector

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd vector

#### Returns

`Vector2`

a new Vector2

***

### Normalize()

> `static` **Normalize**(`vector`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1019](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1019)

Returns a new Vector2 equal to the normalized given vector
Example Playground https://playground.babylonjs.com/#QYBWV4#46

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector2`\>

defines the vector to normalize

#### Returns

`Vector2`

a new Vector2

***

### NormalizeToRef()

> `static` **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1030](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1030)

Normalize a given vector into a second one
Example Playground https://playground.babylonjs.com/#QYBWV4#50

#### Type Parameters

##### T

`T` *extends* `Vector2`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector2`\>

defines the vector to normalize

##### result

`T`

defines the vector where to store the result

#### Returns

`T`

result input

***

### One()

> `static` **One**(): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:761](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L761)

Gets a new Vector2(1, 1)

#### Returns

`Vector2`

a new Vector2

***

### PointInTriangle()

> `static` **PointInTriangle**(`p`, `p0`, `p1`, `p2`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1098](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1098)

Determines if a given vector is included in a triangle
Example Playground https://playground.babylonjs.com/#QYBWV4#87

#### Parameters

##### p

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the vector to test

##### p0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st triangle point

##### p1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd triangle point

##### p2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 3rd triangle point

#### Returns

`boolean`

true if the point "p" is in the triangle defined by the vectors "p0", "p1", "p2"

***

### Random()

> `static` **Random**(`min?`, `max?`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:771](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L771)

Returns a new Vector2 with random values between min and max

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

#### Returns

`Vector2`

a Vector2 with random values between min and max

***

### RandomToRef()

> `static` **RandomToRef**\<`T`\>(`min?`, `max?`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:782](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L782)

Sets a Vector2 with random values between min and max

#### Type Parameters

##### T

`T` *extends* `Vector2`

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

### Transform()

> `static` **Transform**(`vector`, `transformation`): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1068](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1068)

Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix
Example Playground https://playground.babylonjs.com/#QYBWV4#17

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the vector to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the matrix to apply

#### Returns

`Vector2`

a new Vector2

***

### TransformToRef()

> `static` **TransformToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1080](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1080)

Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#19

#### Type Parameters

##### T

`T` *extends* `Vector2`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the vector to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the matrix to apply

##### result

`T`

defines the target vector

#### Returns

`T`

result input

***

### Zero()

> `static` **Zero**(): `Vector2`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L753)

Gets a new Vector2(0, 0)

#### Returns

`Vector2`

a new Vector2
