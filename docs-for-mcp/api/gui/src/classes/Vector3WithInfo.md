[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / Vector3WithInfo

# Class: Vector3WithInfo

Defined in: [babylonjs-source/packages/dev/gui/src/3D/vector3WithInfo.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/vector3WithInfo.ts#L6)

Class used to transport Vector3 information for pointer events

## Extends

- [`Vector3`](../../../core/src/classes/Vector3.md)

## Constructors

### Constructor

> **new Vector3WithInfo**(`source`, `buttonIndex?`): `Vector3WithInfo`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/vector3WithInfo.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/vector3WithInfo.ts#L12)

Creates a new Vector3WithInfo

#### Parameters

##### source

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the vector3 data to transport

##### buttonIndex?

`number` = `0`

defines the current mouse button index

#### Returns

`Vector3WithInfo`

#### Overrides

[`Vector3`](../../../core/src/classes/Vector3.md).[`constructor`](../../../core/src/classes/Vector3.md#constructor)

## Properties

### buttonIndex

> **buttonIndex**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/vector3WithInfo.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/vector3WithInfo.ts#L15)

defines the current mouse button index

***

### dimension

> `readonly` **dimension**: readonly \[`3`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1210)

#### See

Tensor.dimension

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`dimension`](../../../core/src/classes/Vector3.md#dimension)

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1215)

#### See

Tensor.rank

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`rank`](../../../core/src/classes/Vector3.md#rank)

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1195)

If the first vector is flagged with integers (as everything is 0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all Vector3 instances that it creates.
But the original Vector3 instances are unchanged and has a "deprecated map".
If we keep using the Vector3 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`_V8PerformanceHack`](../../../core/src/classes/Vector3.md#_v8performancehack)

## Accessors

### hasAZeroComponent

#### Get Signature

> **get** **hasAZeroComponent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1984](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1984)

Gets a boolean indicating if the vector contains a zero in one of its components
Example Playground https://playground.babylonjs.com/#R1F8YU#1

##### Returns

`boolean`

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`hasAZeroComponent`](../../../core/src/classes/Vector3.md#hasazerocomponent)

***

### isNonUniform

#### Get Signature

> **get** **isNonUniform**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1902](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1902)

Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same

##### Returns

`boolean`

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`isNonUniform`](../../../core/src/classes/Vector3.md#isnonuniform)

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1230)

Gets or sets the x coordinate

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1234)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`x`](../../../core/src/classes/Vector3.md#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1240)

Gets or sets the y coordinate

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1244)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`y`](../../../core/src/classes/Vector3.md#y)

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1250)

Gets or sets the z coordinate

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1254)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`z`](../../../core/src/classes/Vector3.md#z)

***

### DownReadOnly

#### Get Signature

> **get** `static` **DownReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2420)

Gets a down Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`DownReadOnly`](../../../core/src/classes/Vector3.md#downreadonly)

***

### LeftHandedBackwardReadOnly

#### Get Signature

> **get** `static` **LeftHandedBackwardReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2455)

Gets a backward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`LeftHandedBackwardReadOnly`](../../../core/src/classes/Vector3.md#lefthandedbackwardreadonly)

***

### LeftHandedForwardReadOnly

#### Get Signature

> **get** `static` **LeftHandedForwardReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2441)

Gets a forward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`LeftHandedForwardReadOnly`](../../../core/src/classes/Vector3.md#lefthandedforwardreadonly)

***

### LeftReadOnly

#### Get Signature

> **get** `static` **LeftReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2434)

Gets a left Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`LeftReadOnly`](../../../core/src/classes/Vector3.md#leftreadonly)

***

### OneReadOnly

#### Get Signature

> **get** `static` **OneReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2476)

Gets a one Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`OneReadOnly`](../../../core/src/classes/Vector3.md#onereadonly)

***

### RightHandedBackwardReadOnly

#### Get Signature

> **get** `static` **RightHandedBackwardReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2462](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2462)

Gets a backward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`RightHandedBackwardReadOnly`](../../../core/src/classes/Vector3.md#righthandedbackwardreadonly)

***

### RightHandedForwardReadOnly

#### Get Signature

> **get** `static` **RightHandedForwardReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2448](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2448)

Gets a forward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`RightHandedForwardReadOnly`](../../../core/src/classes/Vector3.md#righthandedforwardreadonly)

***

### RightReadOnly

#### Get Signature

> **get** `static` **RightReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2427)

Gets a right Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`RightReadOnly`](../../../core/src/classes/Vector3.md#rightreadonly)

***

### UpReadOnly

#### Get Signature

> **get** `static` **UpReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2413](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2413)

Gets an up Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`UpReadOnly`](../../../core/src/classes/Vector3.md#upreadonly)

***

### ZeroReadOnly

#### Get Signature

> **get** `static` **ZeroReadOnly**(): [`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2469](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2469)

Gets a zero Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`ZeroReadOnly`](../../../core/src/classes/Vector3.md#zeroreadonly)

## Methods

### add()

> **add**(`otherVector`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1385)

Gets a new Vector3, result of the addition the current Vector3 and the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#3

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the resulting Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`add`](../../../core/src/classes/Vector3.md#add)

***

### addInPlace()

> **addInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1355)

Adds the given vector to the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#4

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`addInPlace`](../../../core/src/classes/Vector3.md#addinplace)

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1371)

Adds the given coordinates to the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#5

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

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`addInPlaceFromFloats`](../../../core/src/classes/Vector3.md#addinplacefromfloats)

***

### addToRef()

> **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1396)

Adds the current Vector3 to the given one and stores the result in the vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#6

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`addToRef`](../../../core/src/classes/Vector3.md#addtoref)

***

### applyRotationQuaternion()

> **applyRotationQuaternion**(`q`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1624](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1624)

Rotates the vector using the given unit quaternion and returns the new vector
Example Playground https://playground.babylonjs.com/#R1F8YU#7

#### Parameters

##### q

[`Quaternion`](../../../core/src/classes/Quaternion.md)

the unit quaternion representing the rotation

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`applyRotationQuaternion`](../../../core/src/classes/Vector3.md#applyrotationquaternion)

***

### applyRotationQuaternionInPlace()

> **applyRotationQuaternionInPlace**(`q`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1614](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1614)

Rotates the vector in place using the given unit quaternion
Example Playground https://playground.babylonjs.com/#R1F8YU#8

#### Parameters

##### q

[`Quaternion`](../../../core/src/classes/Quaternion.md)

the unit quaternion representing the rotation

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`applyRotationQuaternionInPlace`](../../../core/src/classes/Vector3.md#applyrotationquaternioninplace)

***

### applyRotationQuaternionToRef()

> **applyRotationQuaternionToRef**\<`T`\>(`q`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1583)

Rotates the vector using the given unit quaternion and stores the new vector in result
Example Playground https://playground.babylonjs.com/#R1F8YU#9

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### q

[`Quaternion`](../../../core/src/classes/Quaternion.md)

the unit quaternion representing the rotation

##### result

`T`

the output vector

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`applyRotationQuaternionToRef`](../../../core/src/classes/Vector3.md#applyrotationquaterniontoref)

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1310)

Creates an array containing three elements : the coordinates of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#10

#### Returns

\[`number`, `number`, `number`\]

a new array of numbers

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`asArray`](../../../core/src/classes/Vector3.md#asarray)

***

### clone()

> **clone**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2103)

Creates a new Vector3 copied from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#11

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`clone`](../../../core/src/classes/Vector3.md#clone)

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2113)

Copies the given vector coordinates to the current Vector3 ones
Example Playground https://playground.babylonjs.com/#R1F8YU#12

#### Parameters

##### source

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the source Vector3

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`copyFrom`](../../../core/src/classes/Vector3.md#copyfrom)

***

### copyFromFloats()

> **copyFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2125)

Copies the given floats to the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#13

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

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`copyFromFloats`](../../../core/src/classes/Vector3.md#copyfromfloats)

***

### cross()

> **cross**(`other`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2051](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2051)

Returns a new Vector3 as the cross product of the current vector and the "other" one
The cross product is then orthogonal to both current and "other"
Example Playground https://playground.babylonjs.com/#R1F8YU#14

#### Parameters

##### other

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the right operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the cross product

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`cross`](../../../core/src/classes/Vector3.md#cross)

***

### divide()

> **divide**(`otherVector`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1779](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1779)

Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#R1F8YU#16

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`divide`](../../../core/src/classes/Vector3.md#divide)

***

### divideInPlace()

> **divideInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1804)

Divides the current Vector3 coordinates by the given ones.
Example Playground https://playground.babylonjs.com/#R1F8YU#17

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`divideInPlace`](../../../core/src/classes/Vector3.md#divideinplace)

***

### divideToRef()

> **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1790](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1790)

Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#18

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`divideToRef`](../../../core/src/classes/Vector3.md#dividetoref)

***

### dot()

> **dot**(`otherVector`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2874](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2874)

Returns the dot product (float) between the current vectors and "otherVector"

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the right operand

#### Returns

`number`

the dot product

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`dot`](../../../core/src/classes/Vector3.md#dot)

***

### equals()

> **equals**(`otherVector`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1695)

Returns true if the current Vector3 and the given vector coordinates are strictly equal
Example Playground https://playground.babylonjs.com/#R1F8YU#19

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

#### Returns

`boolean`

true if both vectors are equals

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`equals`](../../../core/src/classes/Vector3.md#equals)

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1718](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1718)

Returns true if the current Vector3 coordinates equals the given floats
Example Playground https://playground.babylonjs.com/#R1F8YU#20

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

#### Returns

`boolean`

true if both vectors are equal

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`equalsToFloats`](../../../core/src/classes/Vector3.md#equalstofloats)

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1706](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1706)

Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon
Example Playground https://playground.babylonjs.com/#R1F8YU#21

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

##### epsilon?

`number` = `Epsilon`

defines the minimal distance to define values as equals

#### Returns

`boolean`

true if both vectors are distant less than epsilon

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`equalsWithEpsilon`](../../../core/src/classes/Vector3.md#equalswithepsilon)

***

### floor()

> **floor**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1935](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1935)

Gets a new Vector3 from current Vector3 floored values
Example Playground https://playground.babylonjs.com/#R1F8YU#22

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`floor`](../../../core/src/classes/Vector3.md#floor)

***

### floorToRef()

> **floorToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1922](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1922)

Gets the current Vector3's floored values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### result

`T`

the vector to store the result in

#### Returns

`T`

the result vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`floorToRef`](../../../core/src/classes/Vector3.md#floortoref)

***

### fract()

> **fract**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1957](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1957)

Gets a new Vector3 from current Vector3 fractional values
Example Playground https://playground.babylonjs.com/#R1F8YU#23

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`fract`](../../../core/src/classes/Vector3.md#fract)

***

### fractToRef()

> **fractToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1944](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1944)

Gets the current Vector3's fractional values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### result

`T`

the vector to store the result in

#### Returns

`T`

the result vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`fractToRef`](../../../core/src/classes/Vector3.md#fracttoref)

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1335)

Update the current vector from an array
Example Playground https://playground.babylonjs.com/#R1F8YU#24

#### Parameters

##### array

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\>

defines the destination array

##### offset?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`fromArray`](../../../core/src/classes/Vector3.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1284)

Gets the class name

#### Returns

`string`

the string "Vector3"

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`getClassName`](../../../core/src/classes/Vector3.md#getclassname)

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1292)

Creates the Vector3 hash code

#### Returns

`number`

a number which tends to be unique between Vector3 instances

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`getHashCode`](../../../core/src/classes/Vector3.md#gethashcode)

***

### getNormalToRef()

> **getNormalToRef**(`result`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1554](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1554)

Creates a vector normal (perpendicular) to the current Vector3 and stores the result in the given vector
Out of the infinite possibilities the normal chosen is the one formed by rotating the current vector
90 degrees about an axis which lies perpendicular to the current vector
and its projection on the xz plane. In the case of a current vector in the xz plane
the normal is calculated to be along the y axis.
Example Playground https://playground.babylonjs.com/#R1F8YU#230
Example Playground https://playground.babylonjs.com/#R1F8YU#231

#### Parameters

##### result

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the Vector3 object where to store the resultant normal

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`getNormalToRef`](../../../core/src/classes/Vector3.md#getnormaltoref)

***

### isNonUniformWithinEpsilon()

> **isNonUniformWithinEpsilon**(`epsilon`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1880)

Due to float precision, scale of a mesh could be uniform but float values are off by a small fraction
Check if is non uniform within a certain amount of decimal places to account for this

#### Parameters

##### epsilon

`number`

the amount the values can differ

#### Returns

`boolean`

if the vector is non uniform to a certain number of decimal places

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`isNonUniformWithinEpsilon`](../../../core/src/classes/Vector3.md#isnonuniformwithinepsilon)

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1967](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1967)

Gets the length of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#25

#### Returns

`number`

the length of the Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`length`](../../../core/src/classes/Vector3.md#length)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1976](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1976)

Gets the squared length of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#26

#### Returns

`number`

squared length of the Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`lengthSquared`](../../../core/src/classes/Vector3.md#lengthsquared)

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1828](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1828)

Updates the current Vector3 with the maximal coordinate values between its and the given vector ones.
Example Playground https://playground.babylonjs.com/#R1F8YU#27

#### Parameters

##### other

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`maximizeInPlace`](../../../core/src/classes/Vector3.md#maximizeinplace)

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1861](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1861)

Updates the current Vector3 with the maximal coordinate values between its and the given coordinates.
Example Playground https://playground.babylonjs.com/#R1F8YU#28

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

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`maximizeInPlaceFromFloats`](../../../core/src/classes/Vector3.md#maximizeinplacefromfloats)

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1818](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1818)

Updates the current Vector3 with the minimal coordinate values between its and the given vector ones
Example Playground https://playground.babylonjs.com/#R1F8YU#29

#### Parameters

##### other

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`minimizeInPlace`](../../../core/src/classes/Vector3.md#minimizeinplace)

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1840](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1840)

Updates the current Vector3 with the minimal coordinate values between its and the given coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#30

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

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`minimizeInPlaceFromFloats`](../../../core/src/classes/Vector3.md#minimizeinplacefromfloats)

***

### multiply()

> **multiply**(`otherVector`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1742](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1742)

Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#31

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`multiply`](../../../core/src/classes/Vector3.md#multiply)

***

### multiplyByFloats()

> **multiplyByFloats**(`x`, `y`, `z`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1769](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1769)

Returns a new Vector3 set with the result of the multiplication of the current Vector3 coordinates by the given floats
Example Playground https://playground.babylonjs.com/#R1F8YU#34

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

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`multiplyByFloats`](../../../core/src/classes/Vector3.md#multiplybyfloats)

***

### multiplyInPlace()

> **multiplyInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1728](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1728)

Multiplies the current Vector3 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#R1F8YU#32

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`multiplyInPlace`](../../../core/src/classes/Vector3.md#multiplyinplace)

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1753)

Multiplies the current Vector3 by the given one and stores the result in the given vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#33

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`multiplyToRef`](../../../core/src/classes/Vector3.md#multiplytoref)

***

### negate()

> **negate**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1473)

Gets a new Vector3 set with the current Vector3 negated coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#35

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`negate`](../../../core/src/classes/Vector3.md#negate)

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1482](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1482)

Negate this vector in place
Example Playground https://playground.babylonjs.com/#R1F8YU#36

#### Returns

`this`

this

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`negateInPlace`](../../../core/src/classes/Vector3.md#negateinplace)

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1496)

Negate the current Vector3 and stores the result in the given vector "result" coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#37

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`negateToRef`](../../../core/src/classes/Vector3.md#negatetoref)

***

### normalize()

> **normalize**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1994](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1994)

Normalize the current Vector3.
Please note that this is an in place operation.
Example Playground https://playground.babylonjs.com/#R1F8YU#122

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`normalize`](../../../core/src/classes/Vector3.md#normalize)

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2062](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2062)

Normalize the current Vector3 with the given input length.
Please note that this is an in place operation.
Example Playground https://playground.babylonjs.com/#R1F8YU#123

#### Parameters

##### len

`number`

the length of the vector

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`normalizeFromLength`](../../../core/src/classes/Vector3.md#normalizefromlength)

***

### normalizeToNew()

> **normalizeToNew**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2075](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2075)

Normalize the current Vector3 to a new vector
Example Playground https://playground.babylonjs.com/#R1F8YU#124

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`normalizeToNew`](../../../core/src/classes/Vector3.md#normalizetonew)

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2085](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2085)

Normalize the current Vector3 to the reference
Example Playground https://playground.babylonjs.com/#R1F8YU#125

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### result

`T`

define the Vector3 to update

#### Returns

`T`

the updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`normalizeToRef`](../../../core/src/classes/Vector3.md#normalizetoref)

***

### projectOnPlane()

> **projectOnPlane**(`plane`, `origin`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1650)

Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
Example Playground https://playground.babylonjs.com/#R1F8YU#48

#### Parameters

##### plane

[`Plane`](../../../core/src/classes/Plane.md)

defines the plane to project to

##### origin

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the origin of the projection ray

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the projected vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`projectOnPlane`](../../../core/src/classes/Vector3.md#projectonplane)

***

### projectOnPlaneToRef()

> **projectOnPlaneToRef**\<`T`\>(`plane`, `origin`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1662)

Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
Example Playground https://playground.babylonjs.com/#R1F8YU#49

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### plane

[`Plane`](../../../core/src/classes/Plane.md)

defines the plane to project to

##### origin

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the origin of the projection ray

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`projectOnPlaneToRef`](../../../core/src/classes/Vector3.md#projectonplanetoref)

***

### reorderInPlace()

> **reorderInPlace**(`order`): `Vector3WithInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2004](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2004)

Reorders the x y z properties of the vector in place
Example Playground https://playground.babylonjs.com/#R1F8YU#44

#### Parameters

##### order

`string`

new ordering of the properties (eg. for vector 1,2,3 with "ZYX" will produce 3,2,1)

#### Returns

`Vector3WithInfo`

the current updated vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`reorderInPlace`](../../../core/src/classes/Vector3.md#reorderinplace)

***

### rotateByQuaternionAroundPointToRef()

> **rotateByQuaternionAroundPointToRef**\<`T`\>(`quaternion`, `point`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2037](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2037)

Rotates a vector around a given point
Example Playground https://playground.babylonjs.com/#R1F8YU#46

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### quaternion

[`Quaternion`](../../../core/src/classes/Quaternion.md)

the rotation quaternion

##### point

[`Vector3`](../../../core/src/classes/Vector3.md)

the point to rotate around

##### result

`T`

vector to store the result

#### Returns

`T`

the resulting vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`rotateByQuaternionAroundPointToRef`](../../../core/src/classes/Vector3.md#rotatebyquaternionaroundpointtoref)

***

### rotateByQuaternionToRef()

> **rotateByQuaternionToRef**\<`T`\>(`quaternion`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2023](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2023)

Rotates the vector around 0,0,0 by a quaternion
Example Playground https://playground.babylonjs.com/#R1F8YU#47

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### quaternion

[`Quaternion`](../../../core/src/classes/Quaternion.md)

the rotation quaternion

##### result

`T`

vector to store the result

#### Returns

`T`

the resulting vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`rotateByQuaternionToRef`](../../../core/src/classes/Vector3.md#rotatebyquaterniontoref)

***

### scale()

> **scale**(`scale`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1524)

Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
Example Playground https://playground.babylonjs.com/#R1F8YU#53

#### Parameters

##### scale

`number`

defines the multiplier factor

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`scale`](../../../core/src/classes/Vector3.md#scale)

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1635](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1635)

Scale the current Vector3 values by a factor and add the result to a given Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#55

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`scaleAndAddToRef`](../../../core/src/classes/Vector3.md#scaleandaddtoref)

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1510)

Multiplies the Vector3 coordinates by the float "scale"
Example Playground https://playground.babylonjs.com/#R1F8YU#56

#### Parameters

##### scale

`number`

defines the multiplier factor

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`scaleInPlace`](../../../core/src/classes/Vector3.md#scaleinplace)

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1535)

Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the given vector "result" coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#57

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### scale

`number`

defines the multiplier factor

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`scaleToRef`](../../../core/src/classes/Vector3.md#scaletoref)

***

### set()

> **set**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2141)

Copies the given floats to the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#58

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

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`set`](../../../core/src/classes/Vector3.md#set)

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2151)

Copies the given float to the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#59

#### Parameters

##### v

`number`

defines the x, y and z coordinates of the operand

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`setAll`](../../../core/src/classes/Vector3.md#setall)

***

### subtract()

> **subtract**(`otherVector`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1424)

Returns a new Vector3, result of the subtraction of the given vector from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#60

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the resulting Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`subtract`](../../../core/src/classes/Vector3.md#subtract)

***

### subtractFromFloats()

> **subtractFromFloats**(`x`, `y`, `z`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1447)

Returns a new Vector3 set with the subtraction of the given floats from the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#62

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

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the resulting Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`subtractFromFloats`](../../../core/src/classes/Vector3.md#subtractfromfloats)

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1460)

Subtracts the given floats from the current Vector3 coordinates and set the given vector "result" with this result
Example Playground https://playground.babylonjs.com/#R1F8YU#64

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

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

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`subtractFromFloatsToRef`](../../../core/src/classes/Vector3.md#subtractfromfloatstoref)

***

### subtractInPlace()

> **subtractInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1410)

Subtract the given vector from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#61

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`subtractInPlace`](../../../core/src/classes/Vector3.md#subtractinplace)

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1435)

Subtracts the given vector from the current Vector3 and stores the result in the vector "result".
Example Playground https://playground.babylonjs.com/#R1F8YU#63

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`subtractToRef`](../../../core/src/classes/Vector3.md#subtracttoref)

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1321)

Populates the given array or Float32Array from the given index with the successive coordinates of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#65

#### Parameters

##### array

[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)

defines the destination array

##### index?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`toArray`](../../../core/src/classes/Vector3.md#toarray)

***

### toQuaternion()

> **toQuaternion**(): [`Quaternion`](../../../core/src/classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1345)

Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation)
Example Playground https://playground.babylonjs.com/#R1F8YU#66

#### Returns

[`Quaternion`](../../../core/src/classes/Quaternion.md)

a new Quaternion object, computed from the Vector3 coordinates

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`toQuaternion`](../../../core/src/classes/Vector3.md#toquaternion)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:1276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L1276)

Creates a string representation of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#67

#### Returns

`string`

a string with the Vector3 coordinates.

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`toString`](../../../core/src/classes/Vector3.md#tostring)

***

### Backward()

> `static` **Backward**(`rightHandedSystem?`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2503)

Returns a new Vector3 set to (0.0, 0.0, -1.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Parameters

##### rightHandedSystem?

`boolean` = `false`

is the scene right-handed (negative-z)

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Backward Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Backward`](../../../core/src/classes/Vector3.md#backward)

***

### CatmullRom()

> `static` **CatmullRom**(`value1`, `value2`, `value3`, `value4`, `amount`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2655](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2655)

Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"
Example Playground https://playground.babylonjs.com/#R1F8YU#69

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first control point

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second control point

##### value3

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the third control point

##### value4

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the fourth control point

##### amount

`number`

defines the amount on the spline to use

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`CatmullRom`](../../../core/src/classes/Vector3.md#catmullrom)

***

### Center()

> `static` **Center**(`value1`, `value2`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3342)

Returns a new Vector3 located at the center between "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#72

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first operand

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Center`](../../../core/src/classes/Vector3.md#center)

***

### CenterToRef()

> `static` **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3354)

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
Example Playground https://playground.babylonjs.com/#R1F8YU#73

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines first vector

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines second vector

##### ref

`T`

defines third vector

#### Returns

`T`

ref

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`CenterToRef`](../../../core/src/classes/Vector3.md#centertoref)

***

### CheckExtends()

> `static` **CheckExtends**(`v`, `min`, `max`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2740](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2740)

Checks if a given vector is inside a specific range
Example Playground https://playground.babylonjs.com/#R1F8YU#75

#### Parameters

##### v

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the vector to test

##### min

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the minimum range

##### max

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the maximum range

#### Returns

`void`

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`CheckExtends`](../../../core/src/classes/Vector3.md#checkextends)

***

### Clamp()

> `static` **Clamp**(`value`, `min`, `max`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2699](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2699)

Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
Example Playground https://playground.babylonjs.com/#R1F8YU#76

#### Parameters

##### value

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the current value

##### min

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the lower range value

##### max

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the upper range value

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Clamp`](../../../core/src/classes/Vector3.md#clamp)

***

### ClampToRef()

> `static` **ClampToRef**\<`T`\>(`value`, `min`, `max`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2716](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2716)

Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
Example Playground https://playground.babylonjs.com/#R1F8YU#77

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### value

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the current value

##### min

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the lower range value

##### max

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the upper range value

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`ClampToRef`](../../../core/src/classes/Vector3.md#clamptoref)

***

### Cross()

> `static` **Cross**(`left`, `right`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2886](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2886)

Returns a new Vector3 as the cross product of the vectors "left" and "right"
The cross product is then orthogonal to both "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#15

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the left operand

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the right operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the cross product

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Cross`](../../../core/src/classes/Vector3.md#cross-1)

***

### CrossToRef()

> `static` **CrossToRef**\<`T`\>(`left`, `right`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2901](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2901)

Sets the given vector "result" with the cross product of "left" and "right"
The cross product is then orthogonal to both "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#78

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the left operand

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the right operand

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`CrossToRef`](../../../core/src/classes/Vector3.md#crosstoref)

***

### Distance()

> `static` **Distance**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3159)

Returns the distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#81

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first operand

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

#### Returns

`number`

the distance

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Distance`](../../../core/src/classes/Vector3.md#distance)

***

### DistanceSquared()

> `static` **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3170)

Returns the squared distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#80

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first operand

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

#### Returns

`number`

the squared distance

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`DistanceSquared`](../../../core/src/classes/Vector3.md#distancesquared)

***

### Dot()

> `static` **Dot**(`left`, `right`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2865](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2865)

Returns the dot product (float) between the vectors "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#82

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the left operand

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the right operand

#### Returns

`number`

the dot product

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Dot`](../../../core/src/classes/Vector3.md#dot-1)

***

### Down()

> `static` **Down**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2485)

Returns a new Vector3 set to (0.0, -1.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new down Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Down`](../../../core/src/classes/Vector3.md#down)

***

### Forward()

> `static` **Forward**(`rightHandedSystem?`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2494)

Returns a new Vector3 set to (0.0, 0.0, 1.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Parameters

##### rightHandedSystem?

`boolean` = `false`

is the scene right-handed (negative z)

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new forward Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Forward`](../../../core/src/classes/Vector3.md#forward)

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2330)

Returns a new Vector3 set from the index "offset" of the given array
Example Playground https://playground.babylonjs.com/#R1F8YU#83

#### Parameters

##### array

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array

##### offset?

`number` = `0`

defines the offset in the source array

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`FromArray`](../../../core/src/classes/Vector3.md#fromarray-1)

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2353)

Sets the given vector "result" with the element values from the index "offset" of the given array
Example Playground https://playground.babylonjs.com/#R1F8YU#84

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### array

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array

##### offset

`number`

defines the offset in the source array

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`FromArrayToRef`](../../../core/src/classes/Vector3.md#fromarraytoref)

***

### ~~FromFloatArray()~~

> `static` **FromFloatArray**(`array`, `offset?`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2341)

Returns a new Vector3 set from the index "offset" of the given Float32Array

#### Parameters

##### array

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`Float32Array`\>

defines the source array

##### offset?

`number`

defines the offset in the source array

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Deprecated

Please use FromArray instead.

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`FromFloatArray`](../../../core/src/classes/Vector3.md#fromfloatarray)

***

### ~~FromFloatArrayToRef()~~

> `static` **FromFloatArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2369](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2369)

Sets the given vector "result" with the element values from the index "offset" of the given Float32Array

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### array

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<`Float32Array`\>

defines the source array

##### offset

`number`

defines the offset in the source array

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Deprecated

Please use FromArrayToRef instead.

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`FromFloatArrayToRef`](../../../core/src/classes/Vector3.md#fromfloatarraytoref)

***

### FromFloatsToRef()

> `static` **FromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2382)

Sets the given vector "result" with the given floats.
Example Playground https://playground.babylonjs.com/#R1F8YU#85

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md) = [`Vector3`](../../../core/src/classes/Vector3.md)

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

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

the result vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`FromFloatsToRef`](../../../core/src/classes/Vector3.md#fromfloatstoref)

***

### GetAngleBetweenVectors()

> `static` **GetAngleBetweenVectors**(`vector0`, `vector1`, `normal`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2183)

Get angle between two vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#86

#### Parameters

##### vector0

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

the starting point

##### vector1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

the ending point

##### normal

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

direction of the normal

#### Returns

`number`

the angle between vector0 and vector1

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`GetAngleBetweenVectors`](../../../core/src/classes/Vector3.md#getanglebetweenvectors)

***

### GetAngleBetweenVectorsOnPlane()

> `static` **GetAngleBetweenVectorsOnPlane**(`vector0`, `vector1`, `normal`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2208)

Get angle between two vectors projected on a plane
Example Playground https://playground.babylonjs.com/#R1F8YU#87
Expectation compute time: 0.01 ms (median) and 0.02 ms (percentile 95%)

#### Parameters

##### vector0

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

angle between vector0 and vector1

##### vector1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

angle between vector0 and vector1

##### normal

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Normal of the projection plane

#### Returns

`number`

the angle in radians (float) between vector0 and vector1 projected on the plane with the specified normal

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`GetAngleBetweenVectorsOnPlane`](../../../core/src/classes/Vector3.md#getanglebetweenvectorsonplane)

***

### GetClipFactor()

> `static` **GetClipFactor**(`vector0`, `vector1`, `axis`, `size`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2168)

Get the clip factor between two vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#126

#### Parameters

##### vector0

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first operand

##### vector1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

##### axis

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the axis to use

##### size

`number`

defines the size along the axis

#### Returns

`number`

the clip factor

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`GetClipFactor`](../../../core/src/classes/Vector3.md#getclipfactor)

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2755](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2755)

Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
Example Playground https://playground.babylonjs.com/#R1F8YU#89

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first control point

##### tangent1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first tangent vector

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second control point

##### tangent2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second tangent vector

##### amount

`number`

defines the amount on the interpolation spline (between 0 and 1)

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Hermite`](../../../core/src/classes/Vector3.md#hermite)

***

### Hermite1stDerivative()

> `static` **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2785](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2785)

Returns a new Vector3 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#R1F8YU#90

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first control point

##### tangent1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first tangent

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second control point

##### tangent2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

1st derivative

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Hermite1stDerivative`](../../../core/src/classes/Vector3.md#hermite1stderivative)

***

### Hermite1stDerivativeToRef()

> `static` **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2810](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2810)

Update a Vector3 with the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#R1F8YU#91

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### value1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first control point

##### tangent1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first tangent

##### value2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second control point

##### tangent2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

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

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Hermite1stDerivativeToRef`](../../../core/src/classes/Vector3.md#hermite1stderivativetoref)

***

### Left()

> `static` **Left**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2519](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2519)

Returns a new Vector3 set to (-1.0, 0.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new left Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Left`](../../../core/src/classes/Vector3.md#left)

***

### Lerp()

> `static` **Lerp**(`start`, `end`, `amount`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2835](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2835)

Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
Example Playground https://playground.babylonjs.com/#R1F8YU#95

#### Parameters

##### start

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the start value

##### end

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the end value

##### amount

`number`

max defines amount between both (between 0 and 1)

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Lerp`](../../../core/src/classes/Vector3.md#lerp)

***

### LerpToRef()

> `static` **LerpToRef**\<`T`\>(`start`, `end`, `amount`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2850](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2850)

Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
Example Playground https://playground.babylonjs.com/#R1F8YU#93

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### start

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the start value

##### end

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the end value

##### amount

`number`

max defines amount between both (between 0 and 1)

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`LerpToRef`](../../../core/src/classes/Vector3.md#lerptoref)

***

### Maximize()

> `static` **Maximize**(`left`, `right`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3145)

Gets the maximal coordinate values between two Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#96

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first operand

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Maximize`](../../../core/src/classes/Vector3.md#maximize)

***

### Minimize()

> `static` **Minimize**(`left`, `right`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3131)

Gets the minimal coordinate values between two Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#97

#### Parameters

##### left

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first operand

##### right

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second operand

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Minimize`](../../../core/src/classes/Vector3.md#minimize)

***

### Normalize()

> `static` **Normalize**(`vector`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2915](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2915)

Returns a new Vector3 as the normalization of the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#98

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to normalize

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Normalize`](../../../core/src/classes/Vector3.md#normalize-1)

***

### NormalizeToRef()

> `static` **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2928](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2928)

Sets the given vector "result" with the normalization of the given first vector
Example Playground https://playground.babylonjs.com/#R1F8YU#98

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to normalize

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`NormalizeToRef`](../../../core/src/classes/Vector3.md#normalizetoref-1)

***

### One()

> `static` **One**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2398)

Returns a new Vector3 set to (1.0, 1.0, 1.0)

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`One`](../../../core/src/classes/Vector3.md#one)

***

### PitchYawRollToMoveBetweenPoints()

> `static` **PitchYawRollToMoveBetweenPoints**(`start`, `target`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2255)

Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point
Example PG https://playground.babylonjs.com/#R1F8YU#188

#### Parameters

##### start

[`Vector3`](../../../core/src/classes/Vector3.md)

the starting point

##### target

[`Vector3`](../../../core/src/classes/Vector3.md)

the target point

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the rotation in the form (pitch, yaw, 0)

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`PitchYawRollToMoveBetweenPoints`](../../../core/src/classes/Vector3.md#pitchyawrolltomovebetweenpoints)

***

### PitchYawRollToMoveBetweenPointsToRef()

> `static` **PitchYawRollToMoveBetweenPointsToRef**\<`T`\>(`start`, `target`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2238)

Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point and stores it in the ref Vector3
Example PG https://playground.babylonjs.com/#R1F8YU#189

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### start

[`Vector3`](../../../core/src/classes/Vector3.md)

the starting point

##### target

[`Vector3`](../../../core/src/classes/Vector3.md)

the target point

##### ref

`T`

the vector3 to store the result

#### Returns

`T`

ref in the form (pitch, yaw, 0)

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`PitchYawRollToMoveBetweenPointsToRef`](../../../core/src/classes/Vector3.md#pitchyawrolltomovebetweenpointstoref)

***

### Project()

> `static` **Project**(`vector`, `world`, `transform`, `viewport`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2942](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2942)

Project a Vector3 onto screen space
Example Playground https://playground.babylonjs.com/#R1F8YU#101

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to project

##### world

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the world matrix to use

##### transform

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transform (view x projection) matrix to use

##### viewport

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Viewport`](../../../core/src/classes/Viewport.md)\>

defines the screen viewport to use

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Project`](../../../core/src/classes/Vector3.md#project)

***

### ProjectOnTriangleToRef()

> `static` **ProjectOnTriangleToRef**(`vector`, `p0`, `p1`, `p2`, `ref`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3191)

Projects "vector" on the triangle determined by its extremities "p0", "p1" and "p2", stores the result in "ref"
and returns the distance to the projected point.
Example Playground https://playground.babylonjs.com/#R1F8YU#104
From http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.104.4264&rep=rep1&type=pdf

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

the vector to get distance from

##### p0

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

extremity of the triangle

##### p1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

extremity of the triangle

##### p2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

extremity of the triangle

##### ref

[`Vector3`](../../../core/src/classes/Vector3.md)

variable to store the result to

#### Returns

`number`

The distance between "ref" and "vector"

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`ProjectOnTriangleToRef`](../../../core/src/classes/Vector3.md#projectontriangletoref)

***

### ProjectToRef()

> `static` **ProjectToRef**\<`T`\>(`vector`, `world`, `transform`, `viewport`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2958](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2958)

Project a Vector3 onto screen space to reference
Example Playground https://playground.babylonjs.com/#R1F8YU#102

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to project

##### world

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the world matrix to use

##### transform

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transform (view x projection) matrix to use

##### viewport

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Viewport`](../../../core/src/classes/Viewport.md)\>

defines the screen viewport to use

##### result

`T`

the vector in which the screen space will be stored

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`ProjectToRef`](../../../core/src/classes/Vector3.md#projecttoref)

***

### Random()

> `static` **Random**(`min?`, `max?`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2529)

Returns a new Vector3 with random values between min and max

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a Vector3 with random values between min and max

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Random`](../../../core/src/classes/Vector3.md#random)

***

### RandomToRef()

> `static` **RandomToRef**\<`T`\>(`min?`, `max?`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2540)

Sets a Vector3 with random values between min and max

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

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

[`Vector3`](../../../core/src/classes/Vector3.md).[`RandomToRef`](../../../core/src/classes/Vector3.md#randomtoref)

***

### Reflect()

> `static` **Reflect**(`inDirection`, `normal`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2992](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2992)

Reflects a vector off the plane defined by a normalized normal

#### Parameters

##### inDirection

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the vector direction

##### normal

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the normal - Must be normalized

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the resulting vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Reflect`](../../../core/src/classes/Vector3.md#reflect)

***

### ReflectToRef()

> `static` **ReflectToRef**\<`T`\>(`inDirection`, `normal`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3003](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3003)

Reflects a vector off the plane defined by a normalized normal to reference

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### inDirection

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the vector direction

##### normal

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the normal - Must be normalized

##### ref

`T`

defines the Vector3 where to store the result

#### Returns

`T`

the resulting vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`ReflectToRef`](../../../core/src/classes/Vector3.md#reflecttoref)

***

### Right()

> `static` **Right**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2511](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2511)

Returns a new Vector3 set to (1.0, 0.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new right Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Right`](../../../core/src/classes/Vector3.md#right)

***

### RotationFromAxis()

> `static` **RotationFromAxis**(`axis1`, `axis2`, `axis3`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3370)

Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
to something in order to rotate it from its local system to the given target system
Note: axis1, axis2 and axis3 are normalized during this operation
Example Playground https://playground.babylonjs.com/#R1F8YU#106

#### Parameters

##### axis1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first axis

##### axis2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second axis

##### axis3

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the third axis

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/target_align

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`RotationFromAxis`](../../../core/src/classes/Vector3.md#rotationfromaxis)

***

### RotationFromAxisToRef()

> `static` **RotationFromAxisToRef**\<`T`\>(`axis1`, `axis2`, `axis3`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3385)

The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#107

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### axis1

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the first axis

##### axis2

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the second axis

##### axis3

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the third axis

##### ref

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`RotationFromAxisToRef`](../../../core/src/classes/Vector3.md#rotationfromaxistoref)

***

### SlerpToRef()

> `static` **SlerpToRef**\<`T`\>(`vector0`, `vector1`, `slerp`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2272)

Slerp between two vectors. See also `SmoothToRef`
Slerp is a spherical linear interpolation
giving a slow in and out effect
Example Playground 1 https://playground.babylonjs.com/#R1F8YU#108
Example Playground 2 https://playground.babylonjs.com/#R1F8YU#109

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md) = [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### vector0

[`Vector3`](../../../core/src/classes/Vector3.md)

Start vector

##### vector1

[`Vector3`](../../../core/src/classes/Vector3.md)

End vector

##### slerp

`number`

amount (will be clamped between 0 and 1)

##### result

`T`

The slerped vector

#### Returns

`T`

The slerped vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`SlerpToRef`](../../../core/src/classes/Vector3.md#slerptoref)

***

### SmoothToRef()

> `static` **SmoothToRef**\<`T`\>(`source`, `goal`, `deltaTime`, `lerpTime`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2318)

Smooth interpolation between two vectors using Slerp
Example Playground https://playground.babylonjs.com/#R1F8YU#110

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md) = [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### source

[`Vector3`](../../../core/src/classes/Vector3.md)

source vector

##### goal

[`Vector3`](../../../core/src/classes/Vector3.md)

goal vector

##### deltaTime

`number`

current interpolation frame

##### lerpTime

`number`

total interpolation time

##### result

`T`

the smoothed vector

#### Returns

`T`

the smoothed vector

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`SmoothToRef`](../../../core/src/classes/Vector3.md#smoothtoref)

***

### TransformCoordinates()

> `static` **TransformCoordinates**(`vector`, `transformation`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2552](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2552)

Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector.
This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
Example Playground https://playground.babylonjs.com/#R1F8YU#111

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transformation matrix

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the transformed Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`TransformCoordinates`](../../../core/src/classes/Vector3.md#transformcoordinates)

***

### TransformCoordinatesFromFloatsToRef()

> `static` **TransformCoordinatesFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2583)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
This method computes transformed coordinates only, not transformed direction vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#115

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

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

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`TransformCoordinatesFromFloatsToRef`](../../../core/src/classes/Vector3.md#transformcoordinatesfromfloatstoref)

***

### TransformCoordinatesToRef()

> `static` **TransformCoordinatesToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2567](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2567)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
Example Playground https://playground.babylonjs.com/#R1F8YU#113

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`TransformCoordinatesToRef`](../../../core/src/classes/Vector3.md#transformcoordinatestoref)

***

### TransformNormal()

> `static` **TransformNormal**(`vector`, `transformation`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2605)

Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#112

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transformation matrix

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`TransformNormal`](../../../core/src/classes/Vector3.md#transformnormal)

***

### TransformNormalFromFloatsToRef()

> `static` **TransformNormalFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2636)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z)
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#116

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

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

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`TransformNormalFromFloatsToRef`](../../../core/src/classes/Vector3.md#transformnormalfromfloatstoref)

***

### TransformNormalToRef()

> `static` **TransformNormalToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2620](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2620)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#114

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### vector

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`TransformNormalToRef`](../../../core/src/classes/Vector3.md#transformnormaltoref)

***

### Unproject()

> `static` **Unproject**(`source`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3041](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3041)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#117

#### Parameters

##### source

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the screen space Vector3 to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### view

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the view matrix to use

##### projection

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the projection matrix to use

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Unproject`](../../../core/src/classes/Vector3.md#unproject)

***

### UnprojectFloatsToRef()

> `static` **UnprojectFloatsToRef**\<`T`\>(`sourceX`, `sourceY`, `sourceZ`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3095](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3095)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#120

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### sourceX

`number`

defines the screen space x coordinate to use

##### sourceY

`number`

defines the screen space y coordinate to use

##### sourceZ

`number`

defines the screen space z coordinate to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### view

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the view matrix to use

##### projection

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the projection matrix to use

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`UnprojectFloatsToRef`](../../../core/src/classes/Vector3.md#unprojectfloatstoref)

***

### UnprojectFromTransform()

> `static` **UnprojectFromTransform**(`source`, `viewportWidth`, `viewportHeight`, `world`, `transform`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3020](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3020)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#121

#### Parameters

##### source

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the screen space Vector3 to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### transform

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transform (view x projection) matrix to use

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the new Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`UnprojectFromTransform`](../../../core/src/classes/Vector3.md#unprojectfromtransform)

***

### UnprojectToRef()

> `static` **UnprojectToRef**\<`T`\>(`source`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:3068](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L3068)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#119

#### Type Parameters

##### T

`T` *extends* [`Vector3`](../../../core/src/classes/Vector3.md)

#### Parameters

##### source

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

defines the screen space Vector3 to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### view

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the view matrix to use

##### projection

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the projection matrix to use

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`UnprojectToRef`](../../../core/src/classes/Vector3.md#unprojecttoref)

***

### Up()

> `static` **Up**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2406)

Returns a new Vector3 set to (0.0, 1.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new up Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Up`](../../../core/src/classes/Vector3.md#up)

***

### Zero()

> `static` **Zero**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:2391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L2391)

Returns a new Vector3 set to (0.0, 0.0, 0.0)

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new empty Vector3

#### Inherited from

[`Vector3`](../../../core/src/classes/Vector3.md).[`Zero`](../../../core/src/classes/Vector3.md#zero)
