[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / Vector2WithInfo

# Class: Vector2WithInfo

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L8)

Class used to transport Vector2 information for pointer events

## Extends

- [`Vector2`](../../../core/src/classes/Vector2.md)

## Constructors

### Constructor

> **new Vector2WithInfo**(`source`, `buttonIndex?`): `Vector2WithInfo`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L14)

Creates a new Vector2WithInfo

#### Parameters

##### source

[`Vector2`](../../../core/src/classes/Vector2.md)

defines the vector2 data to transport

##### buttonIndex?

`number` = `0`

defines the current mouse button index

#### Returns

`Vector2WithInfo`

#### Overrides

[`Vector2`](../../../core/src/classes/Vector2.md).[`constructor`](../../../core/src/classes/Vector2.md#constructor)

## Properties

### buttonIndex

> **buttonIndex**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/math2D.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/math2D.ts#L17)

defines the current mouse button index

***

### dimension

> `readonly` **dimension**: readonly \[`2`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L124)

#### See

Tensor.dimension

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`dimension`](../../../core/src/classes/Vector2.md#dimension)

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L129)

#### See

Tensor.rank

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`rank`](../../../core/src/classes/Vector2.md#rank)

***

### x

> **x**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L138)

[0] defines the first coordinate

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`x`](../../../core/src/classes/Vector2.md#x)

***

### y

> **y**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L140)

[0] defines the second coordinate

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`y`](../../../core/src/classes/Vector2.md#y)

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L118)

If the first vector is flagged with integers (as everything is 0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all Vector2 instances that it creates.
But the original Vector2 instances are unchanged and has a "deprecated map".
If we keep using the Vector2 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`_V8PerformanceHack`](../../../core/src/classes/Vector2.md#_v8performancehack)

## Accessors

### ZeroReadOnly

#### Get Signature

> **get** `static` **ZeroReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:792](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L792)

Gets a zero Vector2 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`ZeroReadOnly`](../../../core/src/classes/Vector2.md#zeroreadonly)

## Methods

### add()

> **add**(`otherVector`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L258)

Add another vector with the current one
Example Playground https://playground.babylonjs.com/#QYBWV4#11

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2 set with the addition of the current Vector2 and the given one coordinates

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`add`](../../../core/src/classes/Vector2.md#add)

***

### addInPlace()

> **addInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L281)

Set the Vector2 coordinates by adding the given Vector2 coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#13

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`addInPlace`](../../../core/src/classes/Vector2.md#addinplace)

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L293)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`addInPlaceFromFloats`](../../../core/src/classes/Vector2.md#addinplacefromfloats)

***

### addToRef()

> **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L269)

Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#12

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`addToRef`](../../../core/src/classes/Vector2.md#addtoref)

***

### addVector3()

> **addVector3**(`otherVector`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L305)

Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#14

#### Parameters

##### otherVector

`IVector3Like`

defines the other vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`addVector3`](../../../core/src/classes/Vector2.md#addvector3)

***

### asArray()

> **asArray**(): \[`number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L203)

Copy the current vector to an array
Example Playground https://playground.babylonjs.com/#QYBWV4#40

#### Returns

\[`number`, `number`\]

a new array with 2 elements: the Vector2 coordinates.

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`asArray`](../../../core/src/classes/Vector2.md#asarray)

***

### clone()

> **clone**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:737](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L737)

Gets a new Vector2 copied from the Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#20

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`clone`](../../../core/src/classes/Vector2.md#clone)

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L213)

Sets the Vector2 coordinates with the given Vector2 coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#24

#### Parameters

##### source

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the source Vector2

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`copyFrom`](../../../core/src/classes/Vector2.md#copyfrom)

***

### copyFromFloats()

> **copyFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L226)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`copyFromFloats`](../../../core/src/classes/Vector2.md#copyfromfloats)

***

### divide()

> **divide**(`otherVector`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L395)

Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#27

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`divide`](../../../core/src/classes/Vector2.md#divide)

***

### divideInPlace()

> **divideInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L418)

Divides the current Vector2 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#QYBWV4#28

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`divideInPlace`](../../../core/src/classes/Vector2.md#divideinplace)

***

### divideToRef()

> **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L406)

Sets the "result" coordinates with the Vector2 divided by the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#30

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`divideToRef`](../../../core/src/classes/Vector2.md#dividetoref)

***

### dot()

> **dot**(`otherVector`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L746)

Gets the dot product of the current vector and the vector "otherVector"

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the dot product (float)

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`dot`](../../../core/src/classes/Vector2.md#dot)

***

### equals()

> **equals**(`otherVector`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L574)

Gets a boolean if two vectors are equals
Example Playground https://playground.babylonjs.com/#QYBWV4#31

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`boolean`

true if the given vector coordinates strictly equal the current Vector2 ones

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`equals`](../../../core/src/classes/Vector2.md#equals)

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:595](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L595)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`equalsToFloats`](../../../core/src/classes/Vector2.md#equalstofloats)

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:585](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L585)

Gets a boolean if two vectors are equals (using an epsilon value)
Example Playground https://playground.babylonjs.com/#QYBWV4#32

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### epsilon?

`number` = `Epsilon`

defines the minimal distance to consider equality

#### Returns

`boolean`

true if the given vector coordinates are close to the current ones by a distance of epsilon.

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`equalsWithEpsilon`](../../../core/src/classes/Vector2.md#equalswithepsilon)

***

### floor()

> **floor**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:605](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L605)

Gets a new Vector2 from current Vector2 floored values
Example Playground https://playground.babylonjs.com/#QYBWV4#35
eg (1.2, 2.31) returns (1, 2)

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`floor`](../../../core/src/classes/Vector2.md#floor)

***

### floorToRef()

> **floorToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:614](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L614)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`floorToRef`](../../../core/src/classes/Vector2.md#floortoref)

***

### fract()

> **fract**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:626](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L626)

Gets a new Vector2 from current Vector2 fractional values
Example Playground https://playground.babylonjs.com/#QYBWV4#34
eg (1.2, 2.31) returns (0.2, 0.31)

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`fract`](../../../core/src/classes/Vector2.md#fract)

***

### fractToRef()

> **fractToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:635](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L635)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`fractToRef`](../../../core/src/classes/Vector2.md#fracttoref)

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L193)

Update the current vector from an array
Example Playground https://playground.babylonjs.com/#QYBWV4#39

#### Parameters

##### array

[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)

defines the destination array

##### offset?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`fromArray`](../../../core/src/classes/Vector2.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L155)

Gets class name

#### Returns

`string`

the string "Vector2"

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`getClassName`](../../../core/src/classes/Vector2.md#getclassname)

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L163)

Gets current vector hash code

#### Returns

`number`

the Vector2 hash code as a number

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`getHashCode`](../../../core/src/classes/Vector2.md#gethashcode)

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:671](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L671)

Gets the length of the vector

#### Returns

`number`

the vector length (float)

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`length`](../../../core/src/classes/Vector2.md#length)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:679](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L679)

Gets the vector squared length

#### Returns

`number`

the vector squared length (float)

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`lengthSquared`](../../../core/src/classes/Vector2.md#lengthsquared)

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L438)

Updates the current Vector2 with the maximal coordinate values between its and the given vector ones.

#### Parameters

##### other

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`maximizeInPlace`](../../../core/src/classes/Vector2.md#maximizeinplace)

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:460](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L460)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`maximizeInPlaceFromFloats`](../../../core/src/classes/Vector2.md#maximizeinplacefromfloats)

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L429)

Updates the current Vector2 with the minimal coordinate values between its and the given vector ones

#### Parameters

##### other

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`minimizeInPlace`](../../../core/src/classes/Vector2.md#minimizeinplace)

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:448](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L448)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`minimizeInPlaceFromFloats`](../../../core/src/classes/Vector2.md#minimizeinplacefromfloats)

***

### multiply()

> **multiply**(`otherVector`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L361)

Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#42

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`multiply`](../../../core/src/classes/Vector2.md#multiply)

***

### multiplyByFloats()

> **multiplyByFloats**(`x`, `y`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L385)

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

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`multiplyByFloats`](../../../core/src/classes/Vector2.md#multiplybyfloats)

***

### multiplyInPlace()

> **multiplyInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L349)

Multiplies in place the current Vector2 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#QYBWV4#43

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`multiplyInPlace`](../../../core/src/classes/Vector2.md#multiplyinplace)

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L372)

Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#44

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`multiplyToRef`](../../../core/src/classes/Vector2.md#multiplytoref)

***

### negate()

> **negate**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L493)

Gets a new Vector2 with current Vector2 negated coordinates

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`negate`](../../../core/src/classes/Vector2.md#negate)

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:502](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L502)

Negate this vector in place
Example Playground https://playground.babylonjs.com/#QYBWV4#23

#### Returns

`this`

this

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`negateInPlace`](../../../core/src/classes/Vector2.md#negateinplace)

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:514](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L514)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`negateToRef`](../../../core/src/classes/Vector2.md#negatetoref)

***

### normalize()

> **normalize**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L690)

Normalize the vector
Example Playground https://playground.babylonjs.com/#QYBWV4#48

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`normalize`](../../../core/src/classes/Vector2.md#normalize)

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:700](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L700)

Normalize the current Vector2 with the given input length.
Please note that this is an in place operation.

#### Parameters

##### len

`number`

the length of the vector

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`normalizeFromLength`](../../../core/src/classes/Vector2.md#normalizefromlength)

***

### normalizeToNew()

> **normalizeToNew**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:712](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L712)

Normalize the current Vector2 to a new vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

the new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`normalizeToNew`](../../../core/src/classes/Vector2.md#normalizetonew)

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:723](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L723)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`normalizeToRef`](../../../core/src/classes/Vector2.md#normalizetoref)

***

### rotate()

> **rotate**(`angle`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:646](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L646)

Gets a new Vector2 rotated by the given angle

#### Parameters

##### angle

`number`

defines the rotation angle

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`rotate`](../../../core/src/classes/Vector2.md#rotate)

***

### rotateToRef()

> **rotateToRef**\<`T`\>(`angle`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:657](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L657)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`rotateToRef`](../../../core/src/classes/Vector2.md#rotatetoref)

***

### scale()

> **scale**(`scale`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L538)

Returns a new Vector2 scaled by "scale" from the current Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#52

#### Parameters

##### scale

`number`

defines the scaling factor

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`scale`](../../../core/src/classes/Vector2.md#scale)

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L562)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`scaleAndAddToRef`](../../../core/src/classes/Vector2.md#scaleandaddtoref)

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L526)

Multiply the Vector2 coordinates by
Example Playground https://playground.babylonjs.com/#QYBWV4#59

#### Parameters

##### scale

`number`

defines the scaling factor

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`scaleInPlace`](../../../core/src/classes/Vector2.md#scaleinplace)

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L549)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`scaleToRef`](../../../core/src/classes/Vector2.md#scaletoref)

***

### set()

> **set**(`x`, `y`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L239)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`set`](../../../core/src/classes/Vector2.md#set)

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L248)

Copies the given float to the current Vector2 coordinates

#### Parameters

##### v

`number`

defines the x and y coordinates of the operand

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`setAll`](../../../core/src/classes/Vector2.md#setall)

***

### subtract()

> **subtract**(`otherVector`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:315](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L315)

Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#61

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`subtract`](../../../core/src/classes/Vector2.md#subtract)

***

### subtractFromFloats()

> **subtractFromFloats**(`x`, `y`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L472)

Returns a new Vector2 set with the subtraction of the given floats from the current Vector2 coordinates

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

the resulting Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`subtractFromFloats`](../../../core/src/classes/Vector2.md#subtractfromfloats)

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L483)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`subtractFromFloatsToRef`](../../../core/src/classes/Vector2.md#subtractfromfloatstoref)

***

### subtractInPlace()

> **subtractInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L337)

Sets the current Vector2 coordinates by subtracting from it the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#88

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

#### Returns

`this`

the current updated Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`subtractInPlace`](../../../core/src/classes/Vector2.md#subtractinplace)

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L326)

Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
Example Playground https://playground.babylonjs.com/#QYBWV4#63

#### Type Parameters

##### T

`T` *extends* `IVector2Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the other vector

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`subtractToRef`](../../../core/src/classes/Vector2.md#subtracttoref)

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L180)

Sets the Vector2 coordinates in the given array or Float32Array from the given index.
Example Playground https://playground.babylonjs.com/#QYBWV4#15

#### Parameters

##### array

[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)

defines the source array

##### index?

`number` = `0`

defines the offset in source array

#### Returns

`this`

the current Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`toArray`](../../../core/src/classes/Vector2.md#toarray)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L147)

Gets a string with the Vector2 coordinates

#### Returns

`string`

a string with the Vector2 coordinates

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`toString`](../../../core/src/classes/Vector2.md#tostring)

***

### CatmullRom()

> `static` **CatmullRom**(`value1`, `value2`, `value3`, `value4`, `amount`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L843)

Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#65

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st point of control

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd point of control

##### value3

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 3rd point of control

##### value4

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 4th point of control

##### amount

`number`

defines the interpolation factor

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`CatmullRom`](../../../core/src/classes/Vector2.md#catmullrom)

***

### Center()

> `static` **Center**(`value1`, `value2`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1142)

Gets a new Vector2 located at the center of the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#86
Example Playground https://playground.babylonjs.com/#QYBWV4#66

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Center`](../../../core/src/classes/Vector2.md#center)

***

### CenterToRef()

> `static` **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1154)

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
Example Playground https://playground.babylonjs.com/#QYBWV4#66

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

##### ref

`T`

defines third vector

#### Returns

`T`

ref

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`CenterToRef`](../../../core/src/classes/Vector2.md#centertoref)

***

### Clamp()

> `static` **Clamp**(`value`, `min`, `max`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:896](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L896)

Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
Example Playground https://playground.babylonjs.com/#QYBWV4#76

#### Parameters

##### value

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the value to clamp

##### min

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the lower limit

##### max

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the upper limit

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Clamp`](../../../core/src/classes/Vector2.md#clamp)

***

### ClampToRef()

> `static` **ClampToRef**\<`T`\>(`value`, `min`, `max`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:880](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L880)

Sets reference with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

#### Parameters

##### value

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the value to clamp

##### min

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the lower limit

##### max

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the upper limit

##### ref

`T`

the reference

#### Returns

`T`

the reference

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`ClampToRef`](../../../core/src/classes/Vector2.md#clamptoref)

***

### Distance()

> `static` **Distance**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1117)

Gets the distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#71

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the distance between vectors

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Distance`](../../../core/src/classes/Vector2.md#distance)

***

### DistanceOfPointFromSegment()

> `static` **DistanceOfPointFromSegment**(`p`, `segA`, `segB`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1166)

Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
Example Playground https://playground.babylonjs.com/#QYBWV4#77

#### Parameters

##### p

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

defines the middle point

##### segA

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

defines one point of the segment

##### segB

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

defines the other point of the segment

#### Returns

`number`

the shortest distance

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`DistanceOfPointFromSegment`](../../../core/src/classes/Vector2.md#distanceofpointfromsegment)

***

### DistanceSquared()

> `static` **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1128)

Returns the squared distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#72

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the squared distance between vectors

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`DistanceSquared`](../../../core/src/classes/Vector2.md#distancesquared)

***

### Dot()

> `static` **Dot**(`left`, `right`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1012](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1012)

Gets the dot product of the vector "left" and the vector "right"
Example Playground https://playground.babylonjs.com/#QYBWV4#90

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines first vector

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines second vector

#### Returns

`number`

the dot product (float)

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Dot`](../../../core/src/classes/Vector2.md#dot-1)

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:803](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L803)

Gets a new Vector2 set from the given index element of the given array
Example Playground https://playground.babylonjs.com/#QYBWV4#79

#### Parameters

##### array

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the data source

##### offset?

`number` = `0`

defines the offset in the data source

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`FromArray`](../../../core/src/classes/Vector2.md#fromarray-1)

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:815](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L815)

Sets "result" from the given index element of the given array
Example Playground https://playground.babylonjs.com/#QYBWV4#80

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

#### Parameters

##### array

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`FromArrayToRef`](../../../core/src/classes/Vector2.md#fromarraytoref)

***

### FromFloatsToRef()

> `static` **FromFloatsToRef**\<`T`\>(`x`, `y`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:828](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L828)

Sets the given vector "result" with the given floats.

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`FromFloatsToRef`](../../../core/src/classes/Vector2.md#fromfloatstoref)

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:912](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L912)

Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2"
Example Playground https://playground.babylonjs.com/#QYBWV4#81

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the 1st control point

##### tangent1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the outgoing tangent

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the 2nd control point

##### tangent2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the incoming tangent

##### amount

`number`

defines the interpolation factor

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Hermite`](../../../core/src/classes/Vector2.md#hermite)

***

### Hermite1stDerivative()

> `static` **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:942](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L942)

Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#QYBWV4#82

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first tangent

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

1st derivative

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Hermite1stDerivative`](../../../core/src/classes/Vector2.md#hermite1stderivative)

***

### Hermite1stDerivativeToRef()

> `static` **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:963](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L963)

Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#QYBWV4#83

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the first tangent

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Hermite1stDerivativeToRef`](../../../core/src/classes/Vector2.md#hermite1stderivativetoref)

***

### Lerp()

> `static` **Lerp**(`start`, `end`, `amount`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:987](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L987)

Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
Example Playground https://playground.babylonjs.com/#QYBWV4#84

#### Parameters

##### start

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the start vector

##### end

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the end vector

##### amount

`number`

defines the interpolation factor

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Lerp`](../../../core/src/classes/Vector2.md#lerp)

***

### LerpToRef()

> `static` **LerpToRef**(`start`, `end`, `amount`, `result`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:999](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L999)

Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"

#### Parameters

##### start

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the start value

##### end

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the end value

##### amount

`number`

max defines amount between both (between 0 and 1)

##### result

[`Vector2`](../../../core/src/classes/Vector2.md)

defines the Vector2 where to store the result

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

result input

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`LerpToRef`](../../../core/src/classes/Vector2.md#lerptoref)

***

### Maximize()

> `static` **Maximize**(`left`, `right`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1058](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1058)

Gets a new Vector2 set with the maximal coordinate values from the "left" and "right" vectors
Example Playground https://playground.babylonjs.com/#QYBWV4#86

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st vector

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Maximize`](../../../core/src/classes/Vector2.md#maximize)

***

### Minimize()

> `static` **Minimize**(`left`, `right`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1045](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1045)

Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
Example Playground https://playground.babylonjs.com/#QYBWV4#86

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st vector

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd vector

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Minimize`](../../../core/src/classes/Vector2.md#minimize)

***

### Normalize()

> `static` **Normalize**(`vector`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1022](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1022)

Returns a new Vector2 equal to the normalized given vector
Example Playground https://playground.babylonjs.com/#QYBWV4#46

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

defines the vector to normalize

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Normalize`](../../../core/src/classes/Vector2.md#normalize-1)

***

### NormalizeToRef()

> `static` **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1033)

Normalize a given vector into a second one
Example Playground https://playground.babylonjs.com/#QYBWV4#50

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

defines the vector to normalize

##### result

`T`

defines the vector where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`NormalizeToRef`](../../../core/src/classes/Vector2.md#normalizetoref-1)

***

### One()

> `static` **One**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L764)

Gets a new Vector2(1, 1)

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`One`](../../../core/src/classes/Vector2.md#one)

***

### PointInTriangle()

> `static` **PointInTriangle**(`p`, `p0`, `p1`, `p2`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1101)

Determines if a given vector is included in a triangle
Example Playground https://playground.babylonjs.com/#QYBWV4#87

#### Parameters

##### p

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the vector to test

##### p0

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 1st triangle point

##### p1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 2nd triangle point

##### p2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines 3rd triangle point

#### Returns

`boolean`

true if the point "p" is in the triangle defined by the vectors "p0", "p1", "p2"

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`PointInTriangle`](../../../core/src/classes/Vector2.md#pointintriangle)

***

### Random()

> `static` **Random**(`min?`, `max?`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:774](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L774)

Returns a new Vector2 with random values between min and max

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a Vector2 with random values between min and max

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Random`](../../../core/src/classes/Vector2.md#random)

***

### RandomToRef()

> `static` **RandomToRef**\<`T`\>(`min?`, `max?`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L785)

Sets a Vector2 with random values between min and max

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

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

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`RandomToRef`](../../../core/src/classes/Vector2.md#randomtoref)

***

### Transform()

> `static` **Transform**(`vector`, `transformation`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1071)

Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix
Example Playground https://playground.babylonjs.com/#QYBWV4#17

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the vector to transform

##### transformation

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the matrix to apply

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Transform`](../../../core/src/classes/Vector2.md#transform)

***

### TransformToRef()

> `static` **TransformToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1083](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1083)

Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#19

#### Type Parameters

##### T

`T` *extends* [`Vector2`](../../../core/src/classes/Vector2.md)

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector2Like`\>

defines the vector to transform

##### transformation

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the matrix to apply

##### result

`T`

defines the target vector

#### Returns

`T`

result input

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`TransformToRef`](../../../core/src/classes/Vector2.md#transformtoref)

***

### Zero()

> `static` **Zero**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:756](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L756)

Gets a new Vector2(0, 0)

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

a new Vector2

#### Inherited from

[`Vector2`](../../../core/src/classes/Vector2.md).[`Zero`](../../../core/src/classes/Vector2.md#zero)
