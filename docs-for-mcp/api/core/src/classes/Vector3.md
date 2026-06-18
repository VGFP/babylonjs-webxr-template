[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Vector3

# Class: Vector3

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1186)

Class used to store (x,y,z) vector representation
A Vector3 is the main object used in 3D geometry
It can represent either the coordinates of a point the space, either a direction
Reminder: js uses a left handed forward facing system
Example Playground - Overview - https://playground.babylonjs.com/#R1F8YU

## Extended by

- [`Vector3WithInfo`](../../../gui/src/classes/Vector3WithInfo.md)

## Implements

- [`Vector`](../interfaces/Vector.md)\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `3`\>, `IVector3LikeInternal`\>

## Constructors

### Constructor

> **new Vector3**(`x?`, `y?`, `z?`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1264)

Creates a new Vector3 object from the given x, y, z (floats) coordinates.

#### Parameters

##### x?

`number` = `0`

defines the first coordinates (on X axis)

##### y?

`number` = `0`

defines the second coordinates (on Y axis)

##### z?

`number` = `0`

defines the third coordinates (on Z axis)

#### Returns

`Vector3`

## Properties

### dimension

> `readonly` **dimension**: readonly \[`3`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1209)

#### See

Tensor.dimension

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`dimension`](../interfaces/Vector.md#dimension)

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1214)

#### See

Tensor.rank

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`rank`](../interfaces/Vector.md#rank)

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1194)

If the first vector is flagged with integers (as everything is 0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all Vector3 instances that it creates.
But the original Vector3 instances are unchanged and has a "deprecated map".
If we keep using the Vector3 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Accessors

### hasAZeroComponent

#### Get Signature

> **get** **hasAZeroComponent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1983](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1983)

Gets a boolean indicating if the vector contains a zero in one of its components
Example Playground https://playground.babylonjs.com/#R1F8YU#1

##### Returns

`boolean`

***

### isNonUniform

#### Get Signature

> **get** **isNonUniform**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1901](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1901)

Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same

##### Returns

`boolean`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1229)

Gets or sets the x coordinate

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1233)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector3Like.x`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1239)

Gets or sets the y coordinate

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1243)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector3Like.y`

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1249)

Gets or sets the z coordinate

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1253)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector3Like.z`

***

### DownReadOnly

#### Get Signature

> **get** `static` **DownReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2419)

Gets a down Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### LeftHandedBackwardReadOnly

#### Get Signature

> **get** `static` **LeftHandedBackwardReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2454)

Gets a backward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### LeftHandedForwardReadOnly

#### Get Signature

> **get** `static` **LeftHandedForwardReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2440](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2440)

Gets a forward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### LeftReadOnly

#### Get Signature

> **get** `static` **LeftReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2433)

Gets a left Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### OneReadOnly

#### Get Signature

> **get** `static` **OneReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2475)

Gets a one Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### RightHandedBackwardReadOnly

#### Get Signature

> **get** `static` **RightHandedBackwardReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2461)

Gets a backward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### RightHandedForwardReadOnly

#### Get Signature

> **get** `static` **RightHandedForwardReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2447)

Gets a forward Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### RightReadOnly

#### Get Signature

> **get** `static` **RightReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2426](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2426)

Gets a right Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### UpReadOnly

#### Get Signature

> **get** `static` **UpReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2412)

Gets an up Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

***

### ZeroReadOnly

#### Get Signature

> **get** `static` **ZeroReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2468)

Gets a zero Vector3 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

## Methods

### add()

> **add**(`otherVector`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1384)

Gets a new Vector3, result of the addition the current Vector3 and the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#3

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`Vector3`

the resulting Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`add`](../interfaces/Vector.md#add)

***

### addInPlace()

> **addInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1354)

Adds the given vector to the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#4

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlace`](../interfaces/Vector.md#addinplace)

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1370)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlaceFromFloats`](../interfaces/Vector.md#addinplacefromfloats)

***

### addToRef()

> **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1395)

Adds the current Vector3 to the given one and stores the result in the vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#6

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addToRef`](../interfaces/Vector.md#addtoref)

***

### applyRotationQuaternion()

> **applyRotationQuaternion**(`q`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1623)

Rotates the vector using the given unit quaternion and returns the new vector
Example Playground https://playground.babylonjs.com/#R1F8YU#7

#### Parameters

##### q

[`Quaternion`](Quaternion.md)

the unit quaternion representing the rotation

#### Returns

`Vector3`

a new Vector3

***

### applyRotationQuaternionInPlace()

> **applyRotationQuaternionInPlace**(`q`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1613](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1613)

Rotates the vector in place using the given unit quaternion
Example Playground https://playground.babylonjs.com/#R1F8YU#8

#### Parameters

##### q

[`Quaternion`](Quaternion.md)

the unit quaternion representing the rotation

#### Returns

`this`

the current updated Vector3

***

### applyRotationQuaternionToRef()

> **applyRotationQuaternionToRef**\<`T`\>(`q`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1582)

Rotates the vector using the given unit quaternion and stores the new vector in result
Example Playground https://playground.babylonjs.com/#R1F8YU#9

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### q

[`Quaternion`](Quaternion.md)

the unit quaternion representing the rotation

##### result

`T`

the output vector

#### Returns

`T`

the result

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1309)

Creates an array containing three elements : the coordinates of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#10

#### Returns

\[`number`, `number`, `number`\]

a new array of numbers

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`asArray`](../interfaces/Vector.md#asarray)

***

### clone()

> **clone**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2102)

Creates a new Vector3 copied from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#11

#### Returns

`Vector3`

the new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`clone`](../interfaces/Vector.md#clone)

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2112)

Copies the given vector coordinates to the current Vector3 ones
Example Playground https://playground.babylonjs.com/#R1F8YU#12

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the source Vector3

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFrom`](../interfaces/Vector.md#copyfrom)

***

### copyFromFloats()

> **copyFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2124)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFromFloats`](../interfaces/Vector.md#copyfromfloats)

***

### cross()

> **cross**(`other`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2050](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2050)

Returns a new Vector3 as the cross product of the current vector and the "other" one
The cross product is then orthogonal to both current and "other"
Example Playground https://playground.babylonjs.com/#R1F8YU#14

#### Parameters

##### other

`Vector3`

defines the right operand

#### Returns

`Vector3`

the cross product

***

### divide()

> **divide**(`otherVector`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1778](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1778)

Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#R1F8YU#16

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`Vector3`

the new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divide`](../interfaces/Vector.md#divide)

***

### divideInPlace()

> **divideInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1803](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1803)

Divides the current Vector3 coordinates by the given ones.
Example Playground https://playground.babylonjs.com/#R1F8YU#17

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideInPlace`](../interfaces/Vector.md#divideinplace)

***

### divideToRef()

> **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1789](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1789)

Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#18

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideToRef`](../interfaces/Vector.md#dividetoref)

***

### dot()

> **dot**(`otherVector`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2873)

Returns the dot product (float) between the current vectors and "otherVector"

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the right operand

#### Returns

`number`

the dot product

***

### equals()

> **equals**(`otherVector`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1694)

Returns true if the current Vector3 and the given vector coordinates are strictly equal
Example Playground https://playground.babylonjs.com/#R1F8YU#19

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

#### Returns

`boolean`

true if both vectors are equals

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equals`](../interfaces/Vector.md#equals)

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`, `z`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1717](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1717)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsToFloats`](../interfaces/Vector.md#equalstofloats)

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1705)

Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon
Example Playground https://playground.babylonjs.com/#R1F8YU#21

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

##### epsilon?

`number` = `Epsilon`

defines the minimal distance to define values as equals

#### Returns

`boolean`

true if both vectors are distant less than epsilon

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsWithEpsilon`](../interfaces/Vector.md#equalswithepsilon)

***

### floor()

> **floor**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1934](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1934)

Gets a new Vector3 from current Vector3 floored values
Example Playground https://playground.babylonjs.com/#R1F8YU#22

#### Returns

`Vector3`

a new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floor`](../interfaces/Vector.md#floor)

***

### floorToRef()

> **floorToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1921](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1921)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floorToRef`](../interfaces/Vector.md#floortoref)

***

### fract()

> **fract**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1956](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1956)

Gets a new Vector3 from current Vector3 fractional values
Example Playground https://playground.babylonjs.com/#R1F8YU#23

#### Returns

`Vector3`

a new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fract`](../interfaces/Vector.md#fract)

***

### fractToRef()

> **fractToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1943](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1943)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fractToRef`](../interfaces/Vector.md#fracttoref)

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1334)

Update the current vector from an array
Example Playground https://playground.babylonjs.com/#R1F8YU#24

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1283)

Gets the class name

#### Returns

`string`

the string "Vector3"

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getClassName`](../interfaces/Vector.md#getclassname)

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1291](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1291)

Creates the Vector3 hash code

#### Returns

`number`

a number which tends to be unique between Vector3 instances

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getHashCode`](../interfaces/Vector.md#gethashcode)

***

### getNormalToRef()

> **getNormalToRef**(`result`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1553](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1553)

Creates a vector normal (perpendicular) to the current Vector3 and stores the result in the given vector
Out of the infinite possibilities the normal chosen is the one formed by rotating the current vector
90 degrees about an axis which lies perpendicular to the current vector
and its projection on the xz plane. In the case of a current vector in the xz plane
the normal is calculated to be along the y axis.
Example Playground https://playground.babylonjs.com/#R1F8YU#230
Example Playground https://playground.babylonjs.com/#R1F8YU#231

#### Parameters

##### result

`Vector3`

defines the Vector3 object where to store the resultant normal

#### Returns

`Vector3`

the result

***

### isNonUniformWithinEpsilon()

> **isNonUniformWithinEpsilon**(`epsilon`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1879](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1879)

Due to float precision, scale of a mesh could be uniform but float values are off by a small fraction
Check if is non uniform within a certain amount of decimal places to account for this

#### Parameters

##### epsilon

`number`

the amount the values can differ

#### Returns

`boolean`

if the vector is non uniform to a certain number of decimal places

***

### length()

> **length**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1966](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1966)

Gets the length of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#25

#### Returns

`number`

the length of the Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`length`](../interfaces/Vector.md#length)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1975](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1975)

Gets the squared length of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#26

#### Returns

`number`

squared length of the Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`lengthSquared`](../interfaces/Vector.md#lengthsquared)

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1827](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1827)

Updates the current Vector3 with the maximal coordinate values between its and the given vector ones.
Example Playground https://playground.babylonjs.com/#R1F8YU#27

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlace`](../interfaces/Vector.md#maximizeinplace)

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1860](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1860)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlaceFromFloats`](../interfaces/Vector.md#maximizeinplacefromfloats)

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1817)

Updates the current Vector3 with the minimal coordinate values between its and the given vector ones
Example Playground https://playground.babylonjs.com/#R1F8YU#29

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlace`](../interfaces/Vector.md#minimizeinplace)

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1839)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlaceFromFloats`](../interfaces/Vector.md#minimizeinplacefromfloats)

***

### multiply()

> **multiply**(`otherVector`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1741](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1741)

Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#31

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`Vector3`

the new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiply`](../interfaces/Vector.md#multiply)

***

### multiplyByFloats()

> **multiplyByFloats**(`x`, `y`, `z`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1768](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1768)

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

`Vector3`

the new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyByFloats`](../interfaces/Vector.md#multiplybyfloats)

***

### multiplyInPlace()

> **multiplyInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1727)

Multiplies the current Vector3 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#R1F8YU#32

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyInPlace`](../interfaces/Vector.md#multiplyinplace)

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1752)

Multiplies the current Vector3 by the given one and stores the result in the given vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#33

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyToRef`](../interfaces/Vector.md#multiplytoref)

***

### negate()

> **negate**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1472)

Gets a new Vector3 set with the current Vector3 negated coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#35

#### Returns

`Vector3`

a new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negate`](../interfaces/Vector.md#negate)

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1481)

Negate this vector in place
Example Playground https://playground.babylonjs.com/#R1F8YU#36

#### Returns

`this`

this

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateInPlace`](../interfaces/Vector.md#negateinplace)

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1495)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateToRef`](../interfaces/Vector.md#negatetoref)

***

### normalize()

> **normalize**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1993](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1993)

Normalize the current Vector3.
Please note that this is an in place operation.
Example Playground https://playground.babylonjs.com/#R1F8YU#122

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalize`](../interfaces/Vector.md#normalize)

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2061](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2061)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeFromLength`](../interfaces/Vector.md#normalizefromlength)

***

### normalizeToNew()

> **normalizeToNew**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2074](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2074)

Normalize the current Vector3 to a new vector
Example Playground https://playground.babylonjs.com/#R1F8YU#124

#### Returns

`Vector3`

the new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToNew`](../interfaces/Vector.md#normalizetonew)

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2084](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2084)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToRef`](../interfaces/Vector.md#normalizetoref)

***

### projectOnPlane()

> **projectOnPlane**(`plane`, `origin`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1649)

Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
Example Playground https://playground.babylonjs.com/#R1F8YU#48

#### Parameters

##### plane

[`Plane`](Plane.md)

defines the plane to project to

##### origin

`Vector3`

defines the origin of the projection ray

#### Returns

`Vector3`

the projected vector3

***

### projectOnPlaneToRef()

> **projectOnPlaneToRef**\<`T`\>(`plane`, `origin`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1661](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1661)

Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
Example Playground https://playground.babylonjs.com/#R1F8YU#49

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### plane

[`Plane`](Plane.md)

defines the plane to project to

##### origin

`Vector3`

defines the origin of the projection ray

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### reorderInPlace()

> **reorderInPlace**(`order`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2003](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2003)

Reorders the x y z properties of the vector in place
Example Playground https://playground.babylonjs.com/#R1F8YU#44

#### Parameters

##### order

`string`

new ordering of the properties (eg. for vector 1,2,3 with "ZYX" will produce 3,2,1)

#### Returns

`Vector3`

the current updated vector

***

### rotateByQuaternionAroundPointToRef()

> **rotateByQuaternionAroundPointToRef**\<`T`\>(`quaternion`, `point`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2036](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2036)

Rotates a vector around a given point
Example Playground https://playground.babylonjs.com/#R1F8YU#46

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### quaternion

[`Quaternion`](Quaternion.md)

the rotation quaternion

##### point

`Vector3`

the point to rotate around

##### result

`T`

vector to store the result

#### Returns

`T`

the resulting vector

***

### rotateByQuaternionToRef()

> **rotateByQuaternionToRef**\<`T`\>(`quaternion`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2022](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2022)

Rotates the vector around 0,0,0 by a quaternion
Example Playground https://playground.babylonjs.com/#R1F8YU#47

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### quaternion

[`Quaternion`](Quaternion.md)

the rotation quaternion

##### result

`T`

vector to store the result

#### Returns

`T`

the resulting vector

***

### scale()

> **scale**(`scale`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1523)

Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
Example Playground https://playground.babylonjs.com/#R1F8YU#53

#### Parameters

##### scale

`number`

defines the multiplier factor

#### Returns

`Vector3`

a new Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scale`](../interfaces/Vector.md#scale)

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1634](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1634)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleAndAddToRef`](../interfaces/Vector.md#scaleandaddtoref)

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1509](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1509)

Multiplies the Vector3 coordinates by the float "scale"
Example Playground https://playground.babylonjs.com/#R1F8YU#56

#### Parameters

##### scale

`number`

defines the multiplier factor

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleInPlace`](../interfaces/Vector.md#scaleinplace)

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1534)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleToRef`](../interfaces/Vector.md#scaletoref)

***

### set()

> **set**(`x`, `y`, `z`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2140)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`set`](../interfaces/Vector.md#set)

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2150)

Copies the given float to the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#59

#### Parameters

##### v

`number`

defines the x, y and z coordinates of the operand

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`setAll`](../interfaces/Vector.md#setall)

***

### subtract()

> **subtract**(`otherVector`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1423)

Returns a new Vector3, result of the subtraction of the given vector from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#60

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`Vector3`

the resulting Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtract`](../interfaces/Vector.md#subtract)

***

### subtractFromFloats()

> **subtractFromFloats**(`x`, `y`, `z`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1446)

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

`Vector3`

the resulting Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloats`](../interfaces/Vector.md#subtractfromfloats)

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1459](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1459)

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

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloatsToRef`](../interfaces/Vector.md#subtractfromfloatstoref)

***

### subtractInPlace()

> **subtractInPlace**(`otherVector`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1409)

Subtract the given vector from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#61

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

#### Returns

`this`

the current updated Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractInPlace`](../interfaces/Vector.md#subtractinplace)

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1434)

Subtracts the given vector from the current Vector3 and stores the result in the vector "result".
Example Playground https://playground.babylonjs.com/#R1F8YU#63

#### Type Parameters

##### T

`T` *extends* `IVector3LikeInternal`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector3LikeInternal`\>

defines the second operand

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractToRef`](../interfaces/Vector.md#subtracttoref)

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1320)

Populates the given array or Float32Array from the given index with the successive coordinates of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#65

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the destination array

##### index?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`toArray`](../interfaces/Vector.md#toarray)

***

### toQuaternion()

> **toQuaternion**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1344)

Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation)
Example Playground https://playground.babylonjs.com/#R1F8YU#66

#### Returns

[`Quaternion`](Quaternion.md)

a new Quaternion object, computed from the Vector3 coordinates

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:1275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L1275)

Creates a string representation of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#67

#### Returns

`string`

a string with the Vector3 coordinates.

***

### Backward()

> `static` **Backward**(`rightHandedSystem?`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2502](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2502)

Returns a new Vector3 set to (0.0, 0.0, -1.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Parameters

##### rightHandedSystem?

`boolean` = `false`

is the scene right-handed (negative-z)

#### Returns

`Vector3`

a new Backward Vector3

***

### CatmullRom()

> `static` **CatmullRom**(`value1`, `value2`, `value3`, `value4`, `amount`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2654](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2654)

Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"
Example Playground https://playground.babylonjs.com/#R1F8YU#69

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first control point

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second control point

##### value3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the third control point

##### value4

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the fourth control point

##### amount

`number`

defines the amount on the spline to use

#### Returns

`Vector3`

the new Vector3

***

### Center()

> `static` **Center**(`value1`, `value2`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3341)

Returns a new Vector3 located at the center between "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#72

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first operand

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

#### Returns

`Vector3`

the new Vector3

***

### CenterToRef()

> `static` **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3353)

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
Example Playground https://playground.babylonjs.com/#R1F8YU#73

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines first vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2739](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2739)

Checks if a given vector is inside a specific range
Example Playground https://playground.babylonjs.com/#R1F8YU#75

#### Parameters

##### v

`Vector3`

defines the vector to test

##### min

`Vector3`

defines the minimum range

##### max

`Vector3`

defines the maximum range

#### Returns

`void`

***

### Clamp()

> `static` **Clamp**(`value`, `min`, `max`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2698](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2698)

Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
Example Playground https://playground.babylonjs.com/#R1F8YU#76

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the upper range value

#### Returns

`Vector3`

the new Vector3

***

### ClampToRef()

> `static` **ClampToRef**\<`T`\>(`value`, `min`, `max`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2715](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2715)

Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
Example Playground https://playground.babylonjs.com/#R1F8YU#77

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the upper range value

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### Cross()

> `static` **Cross**(`left`, `right`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2885)

Returns a new Vector3 as the cross product of the vectors "left" and "right"
The cross product is then orthogonal to both "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#15

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the left operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the right operand

#### Returns

`Vector3`

the cross product

***

### CrossToRef()

> `static` **CrossToRef**\<`T`\>(`left`, `right`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2900](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2900)

Sets the given vector "result" with the cross product of "left" and "right"
The cross product is then orthogonal to both "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#78

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the left operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the right operand

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### Distance()

> `static` **Distance**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3158)

Returns the distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#81

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first operand

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

#### Returns

`number`

the distance

***

### DistanceSquared()

> `static` **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3169)

Returns the squared distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#80

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first operand

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

#### Returns

`number`

the squared distance

***

### Dot()

> `static` **Dot**(`left`, `right`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2864](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2864)

Returns the dot product (float) between the vectors "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#82

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the left operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the right operand

#### Returns

`number`

the dot product

***

### Down()

> `static` **Down**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2484](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2484)

Returns a new Vector3 set to (0.0, -1.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

`Vector3`

a new down Vector3

***

### Forward()

> `static` **Forward**(`rightHandedSystem?`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2493)

Returns a new Vector3 set to (0.0, 0.0, 1.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Parameters

##### rightHandedSystem?

`boolean` = `false`

is the scene right-handed (negative z)

#### Returns

`Vector3`

a new forward Vector3

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2329)

Returns a new Vector3 set from the index "offset" of the given array
Example Playground https://playground.babylonjs.com/#R1F8YU#83

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array

##### offset?

`number` = `0`

defines the offset in the source array

#### Returns

`Vector3`

the new Vector3

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2352)

Sets the given vector "result" with the element values from the index "offset" of the given array
Example Playground https://playground.babylonjs.com/#R1F8YU#84

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

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

***

### ~~FromFloatArray()~~

> `static` **FromFloatArray**(`array`, `offset?`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2340)

Returns a new Vector3 set from the index "offset" of the given Float32Array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Float32Array`\>

defines the source array

##### offset?

`number`

defines the offset in the source array

#### Returns

`Vector3`

the new Vector3

#### Deprecated

Please use FromArray instead.

***

### ~~FromFloatArrayToRef()~~

> `static` **FromFloatArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2368)

Sets the given vector "result" with the element values from the index "offset" of the given Float32Array

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Float32Array`\>

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

***

### FromFloatsToRef()

> `static` **FromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2381)

Sets the given vector "result" with the given floats.
Example Playground https://playground.babylonjs.com/#R1F8YU#85

#### Type Parameters

##### T

`T` *extends* `Vector3` = `Vector3`

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

***

### GetAngleBetweenVectors()

> `static` **GetAngleBetweenVectors**(`vector0`, `vector1`, `normal`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2182)

Get angle between two vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#86

#### Parameters

##### vector0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

the starting point

##### vector1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

the ending point

##### normal

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

direction of the normal

#### Returns

`number`

the angle between vector0 and vector1

***

### GetAngleBetweenVectorsOnPlane()

> `static` **GetAngleBetweenVectorsOnPlane**(`vector0`, `vector1`, `normal`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2207)

Get angle between two vectors projected on a plane
Example Playground https://playground.babylonjs.com/#R1F8YU#87
Expectation compute time: 0.01 ms (median) and 0.02 ms (percentile 95%)

#### Parameters

##### vector0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

angle between vector0 and vector1

##### vector1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

angle between vector0 and vector1

##### normal

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

Normal of the projection plane

#### Returns

`number`

the angle in radians (float) between vector0 and vector1 projected on the plane with the specified normal

***

### GetClipFactor()

> `static` **GetClipFactor**(`vector0`, `vector1`, `axis`, `size`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2167)

Get the clip factor between two vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#126

#### Parameters

##### vector0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first operand

##### vector1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

##### axis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the axis to use

##### size

`number`

defines the size along the axis

#### Returns

`number`

the clip factor

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2754)

Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
Example Playground https://playground.babylonjs.com/#R1F8YU#89

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first tangent vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second tangent vector

##### amount

`number`

defines the amount on the interpolation spline (between 0 and 1)

#### Returns

`Vector3`

the new Vector3

***

### Hermite1stDerivative()

> `static` **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2784](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2784)

Returns a new Vector3 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#R1F8YU#90

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

`Vector3`

1st derivative

***

### Hermite1stDerivativeToRef()

> `static` **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2809](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2809)

Update a Vector3 with the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#R1F8YU#91

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

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

### Left()

> `static` **Left**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2518](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2518)

Returns a new Vector3 set to (-1.0, 0.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

`Vector3`

a new left Vector3

***

### Lerp()

> `static` **Lerp**(`start`, `end`, `amount`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2834](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2834)

Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
Example Playground https://playground.babylonjs.com/#R1F8YU#95

#### Parameters

##### start

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the start value

##### end

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the end value

##### amount

`number`

max defines amount between both (between 0 and 1)

#### Returns

`Vector3`

the new Vector3

***

### LerpToRef()

> `static` **LerpToRef**\<`T`\>(`start`, `end`, `amount`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2849](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2849)

Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
Example Playground https://playground.babylonjs.com/#R1F8YU#93

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### start

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the start value

##### end

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

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

***

### Maximize()

> `static` **Maximize**(`left`, `right`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3144)

Gets the maximal coordinate values between two Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#96

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

#### Returns

`Vector3`

the new Vector3

***

### Minimize()

> `static` **Minimize**(`left`, `right`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3130)

Gets the minimal coordinate values between two Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#97

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second operand

#### Returns

`Vector3`

the new Vector3

***

### Normalize()

> `static` **Normalize**(`vector`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2914](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2914)

Returns a new Vector3 as the normalization of the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#98

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to normalize

#### Returns

`Vector3`

the new Vector3

***

### NormalizeToRef()

> `static` **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2927](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2927)

Sets the given vector "result" with the normalization of the given first vector
Example Playground https://playground.babylonjs.com/#R1F8YU#98

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to normalize

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### One()

> `static` **One**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2397)

Returns a new Vector3 set to (1.0, 1.0, 1.0)

#### Returns

`Vector3`

a new Vector3

***

### PitchYawRollToMoveBetweenPoints()

> `static` **PitchYawRollToMoveBetweenPoints**(`start`, `target`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2254)

Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point
Example PG https://playground.babylonjs.com/#R1F8YU#188

#### Parameters

##### start

`Vector3`

the starting point

##### target

`Vector3`

the target point

#### Returns

`Vector3`

the rotation in the form (pitch, yaw, 0)

***

### PitchYawRollToMoveBetweenPointsToRef()

> `static` **PitchYawRollToMoveBetweenPointsToRef**\<`T`\>(`start`, `target`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2237)

Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point and stores it in the ref Vector3
Example PG https://playground.babylonjs.com/#R1F8YU#189

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### start

`Vector3`

the starting point

##### target

`Vector3`

the target point

##### ref

`T`

the vector3 to store the result

#### Returns

`T`

ref in the form (pitch, yaw, 0)

***

### Project()

> `static` **Project**(`vector`, `world`, `transform`, `viewport`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2941](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2941)

Project a Vector3 onto screen space
Example Playground https://playground.babylonjs.com/#R1F8YU#101

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to project

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transform (view x projection) matrix to use

##### viewport

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Viewport`](Viewport.md)\>

defines the screen viewport to use

#### Returns

`Vector3`

the new Vector3

***

### ProjectOnTriangleToRef()

> `static` **ProjectOnTriangleToRef**(`vector`, `p0`, `p1`, `p2`, `ref`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3190)

Projects "vector" on the triangle determined by its extremities "p0", "p1" and "p2", stores the result in "ref"
and returns the distance to the projected point.
Example Playground https://playground.babylonjs.com/#R1F8YU#104
From http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.104.4264&rep=rep1&type=pdf

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

the vector to get distance from

##### p0

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

extremity of the triangle

##### p1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

extremity of the triangle

##### p2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

extremity of the triangle

##### ref

`Vector3`

variable to store the result to

#### Returns

`number`

The distance between "ref" and "vector"

***

### ProjectToRef()

> `static` **ProjectToRef**\<`T`\>(`vector`, `world`, `transform`, `viewport`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2957](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2957)

Project a Vector3 onto screen space to reference
Example Playground https://playground.babylonjs.com/#R1F8YU#102

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to project

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transform (view x projection) matrix to use

##### viewport

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Viewport`](Viewport.md)\>

defines the screen viewport to use

##### result

`T`

the vector in which the screen space will be stored

#### Returns

`T`

result input

***

### Random()

> `static` **Random**(`min?`, `max?`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2528)

Returns a new Vector3 with random values between min and max

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

#### Returns

`Vector3`

a Vector3 with random values between min and max

***

### RandomToRef()

> `static` **RandomToRef**\<`T`\>(`min?`, `max?`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2539)

Sets a Vector3 with random values between min and max

#### Type Parameters

##### T

`T` *extends* `Vector3`

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

### Reflect()

> `static` **Reflect**(`inDirection`, `normal`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2991](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2991)

Reflects a vector off the plane defined by a normalized normal

#### Parameters

##### inDirection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the vector direction

##### normal

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the normal - Must be normalized

#### Returns

`Vector3`

the resulting vector

***

### ReflectToRef()

> `static` **ReflectToRef**\<`T`\>(`inDirection`, `normal`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3002](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3002)

Reflects a vector off the plane defined by a normalized normal to reference

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### inDirection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the vector direction

##### normal

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the normal - Must be normalized

##### ref

`T`

defines the Vector3 where to store the result

#### Returns

`T`

the resulting vector

***

### Right()

> `static` **Right**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2510)

Returns a new Vector3 set to (1.0, 0.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

`Vector3`

a new right Vector3

***

### RotationFromAxis()

> `static` **RotationFromAxis**(`axis1`, `axis2`, `axis3`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3369)

Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
to something in order to rotate it from its local system to the given target system
Note: axis1, axis2 and axis3 are normalized during this operation
Example Playground https://playground.babylonjs.com/#R1F8YU#106

#### Parameters

##### axis1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first axis

##### axis2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second axis

##### axis3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the third axis

#### Returns

`Vector3`

a new Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/target_align

***

### RotationFromAxisToRef()

> `static` **RotationFromAxisToRef**\<`T`\>(`axis1`, `axis2`, `axis3`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3384)

The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#107

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### axis1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the first axis

##### axis2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the second axis

##### axis3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the third axis

##### ref

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### SlerpToRef()

> `static` **SlerpToRef**\<`T`\>(`vector0`, `vector1`, `slerp`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2271)

Slerp between two vectors. See also `SmoothToRef`
Slerp is a spherical linear interpolation
giving a slow in and out effect
Example Playground 1 https://playground.babylonjs.com/#R1F8YU#108
Example Playground 2 https://playground.babylonjs.com/#R1F8YU#109

#### Type Parameters

##### T

`T` *extends* `Vector3` = `Vector3`

#### Parameters

##### vector0

`Vector3`

Start vector

##### vector1

`Vector3`

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

***

### SmoothToRef()

> `static` **SmoothToRef**\<`T`\>(`source`, `goal`, `deltaTime`, `lerpTime`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2317)

Smooth interpolation between two vectors using Slerp
Example Playground https://playground.babylonjs.com/#R1F8YU#110

#### Type Parameters

##### T

`T` *extends* `Vector3` = `Vector3`

#### Parameters

##### source

`Vector3`

source vector

##### goal

`Vector3`

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

***

### TransformCoordinates()

> `static` **TransformCoordinates**(`vector`, `transformation`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2551)

Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector.
This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
Example Playground https://playground.babylonjs.com/#R1F8YU#111

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

#### Returns

`Vector3`

the transformed Vector3

***

### TransformCoordinatesFromFloatsToRef()

> `static` **TransformCoordinatesFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2582)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
This method computes transformed coordinates only, not transformed direction vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#115

#### Type Parameters

##### T

`T` *extends* `Vector3`

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

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### TransformCoordinatesToRef()

> `static` **TransformCoordinatesToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2566](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2566)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
Example Playground https://playground.babylonjs.com/#R1F8YU#113

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### TransformNormal()

> `static` **TransformNormal**(`vector`, `transformation`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2604](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2604)

Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#112

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

#### Returns

`Vector3`

the new Vector3

***

### TransformNormalFromFloatsToRef()

> `static` **TransformNormalFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2635](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2635)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z)
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#116

#### Type Parameters

##### T

`T` *extends* `Vector3`

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

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### TransformNormalToRef()

> `static` **TransformNormalToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2619)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#114

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### Unproject()

> `static` **Unproject**(`source`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3040](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3040)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#117

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the screen space Vector3 to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### view

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the view matrix to use

##### projection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the projection matrix to use

#### Returns

`Vector3`

the new Vector3

***

### UnprojectFloatsToRef()

> `static` **UnprojectFloatsToRef**\<`T`\>(`sourceX`, `sourceY`, `sourceZ`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3094](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3094)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#120

#### Type Parameters

##### T

`T` *extends* `Vector3`

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

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### view

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the view matrix to use

##### projection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the projection matrix to use

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### UnprojectFromTransform()

> `static` **UnprojectFromTransform**(`source`, `viewportWidth`, `viewportHeight`, `world`, `transform`): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3019](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3019)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#121

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the screen space Vector3 to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transform (view x projection) matrix to use

#### Returns

`Vector3`

the new Vector3

***

### UnprojectToRef()

> `static` **UnprojectToRef**\<`T`\>(`source`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:3067](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L3067)

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#119

#### Type Parameters

##### T

`T` *extends* `Vector3`

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector3`\>

defines the screen space Vector3 to use

##### viewportWidth

`number`

defines the current width of the viewport

##### viewportHeight

`number`

defines the current height of the viewport

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use (can be set to Identity to go to world space)

##### view

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the view matrix to use

##### projection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the projection matrix to use

##### result

`T`

defines the Vector3 where to store the result

#### Returns

`T`

result input

***

### Up()

> `static` **Up**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2405)

Returns a new Vector3 set to (0.0, 1.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

`Vector3`

a new up Vector3

***

### Zero()

> `static` **Zero**(): `Vector3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.pure.ts:2390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vector.pure.ts#L2390)

Returns a new Vector3 set to (0.0, 0.0, 0.0)

#### Returns

`Vector3`

a new empty Vector3
