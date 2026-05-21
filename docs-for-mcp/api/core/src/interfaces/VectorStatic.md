[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VectorStatic

# Interface: VectorStatic\<T, _I\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L78)

Static side of Vector

## Extends

- `TensorStatic`\<`T`, `_I`\>

## Type Parameters

### T

`T` *extends* [`Vector`](Vector.md)\<`any`[], `_I`\>

### _I

`_I` = `TensorLike`\<`T`\>

## Constructors

### Constructor

> **new VectorStatic**(...`coords`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L78)

Creates a new instance from the given coordinates

#### Parameters

##### coords

...[`Flatten`](../type-aliases/Flatten.md)\<`ValueOfTensor`\<`T`\>\>

#### Returns

`T`

#### Inherited from

`TensorStatic<T, _I>.constructor`

## Properties

### prototype

> **prototype**: `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L367)

So [[static]].prototype has typings, instead of just any

#### Inherited from

`TensorStatic.prototype`

## Methods

### Center()

> **Center**(`value1`, `value2`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L455)

Gets a new instance located at the center of the instances "value1" and "value2"

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines first instance

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines second instance

#### Returns

`T`

a new instance

#### Inherited from

`TensorStatic.Center`

***

### CenterToRef()

> **CenterToRef**(`value1`, `value2`, `ref`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:464](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L464)

Gets the center of the instances "value1" and "value2" and stores the result in the instance "ref"

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines first instance

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines second instance

##### ref

`T`

defines third instance

#### Returns

`T`

ref

#### Inherited from

`TensorStatic.CenterToRef`

***

### CheckExtends()

> **CheckExtends**(`value`, `min`, `max`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L85)

Checks if a given vector is inside a specific range

#### Parameters

##### value

`_I`

defines the vector to test

##### min

`_I`

defines the minimum range

##### max

`_I`

defines the maximum range

#### Returns

`void`

***

### Clamp()

> **Clamp**(`value`, `min`, `max`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:475](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L475)

Returns a new instance set with same the coordinates than "value" ones if the instance "value" is in the square defined by "min" and "max".
If a coordinate of "value" is lower than "min" coordinates, the returned instance is given this "min" coordinate.
If a coordinate of "value" is greater than "max" coordinates, the returned instance is given this "max" coordinate

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines the value to clamp

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines the lower limit

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines the upper limit

#### Returns

`T`

a new instance

#### Inherited from

`TensorStatic.Clamp`

***

### ClampToRef()

> **ClampToRef**(`value`, `min`, `max`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:487](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L487)

Returns a new instance set with same the coordinates than "value" ones if the instance "value" is in the square defined by "min" and "max".
If a coordinate of "value" is lower than "min" coordinates, the returned instance is given this "min" coordinate.
If a coordinate of "value" is greater than "max" coordinates, the returned instance is given this "max" coordinate

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines the value to clamp

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines the lower limit

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines the upper limit

##### result

`T`

defines the instance where to store the result

#### Returns

`T`

the updated result instance

#### Inherited from

`TensorStatic.ClampToRef`

***

### Distance()

> **Distance**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:439](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L439)

Gets the distance between the instances "value1" and "value2"

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines first instance

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines second instance

#### Returns

`number`

the distance between instances

#### Inherited from

`TensorStatic.Distance`

***

### DistanceSquared()

> **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L447)

Returns the squared distance between the instances "value1" and "value2"

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines first instance

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines second instance

#### Returns

`number`

the squared distance between instances

#### Inherited from

`TensorStatic.DistanceSquared`

***

### Dot()

> **Dot**(`left`, `right`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L415)

Gets the dot product of the instance "left" and the instance "right"

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines first instance

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines second instance

#### Returns

`number`

the dot product (float)

#### Inherited from

`TensorStatic.Dot`

***

### FromArray()

> **FromArray**(`array`, `offset?`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:392](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L392)

Gets a new instance from the given index element of the given array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the data source

##### offset?

`number`

defines the offset in the data source

#### Returns

`T`

a new instance

#### Inherited from

`TensorStatic.FromArray`

***

### FromArrayToRef()

> **FromArrayToRef**(`array`, `offset`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L401)

Sets "result" from the given index element of the given array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the data source

##### offset

`number`

defines the offset in the data source

##### result

`T`

defines the target instance

#### Returns

`T`

result input

#### Inherited from

`TensorStatic.FromArrayToRef`

***

### FromFloatsToRef()

> **FromFloatsToRef**(...`args`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L407)

Sets the given instance "result" with the given floats.

#### Parameters

##### args

...\[`...Flatten<ValueOfTensor<T>>[]`, `T`\]

defines the coordinates of the source with the last paramater being the result

#### Returns

`T`

#### Inherited from

`TensorStatic.FromFloatsToRef`

***

### Maximize()

> **Maximize**(`left`, `right`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L431)

Gets a new instance set with the maximal coordinate values from the "left" and "right" instances

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines 1st instance

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines 2nd instance

#### Returns

`T`

a new instance

#### Inherited from

`TensorStatic.Maximize`

***

### Minimize()

> **Minimize**(`left`, `right`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:423](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L423)

Gets a new instance set with the minimal coordinate values from the "left" and "right" instances

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines 1st instance

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`_I`\>

defines 2nd instance

#### Returns

`T`

a new instance

#### Inherited from

`TensorStatic.Minimize`

***

### Normalize()

> **Normalize**(`vector`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L92)

Returns a new Vector equal to the normalized given vector

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`T`\>

defines the vector to normalize

#### Returns

`T`

a new Vector

***

### NormalizeToRef()

> **NormalizeToRef**(`vector`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vector.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vector.ts#L100)

Normalize a given vector into a second one

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`T`\>

defines the vector to normalize

##### result

`T`

defines the vector where to store the result

#### Returns

`T`

result input

***

### Random()

> **Random**(`min?`, `max?`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L375)

Returns a new instance with random values between min and max

#### Parameters

##### min?

`number`

the minimum random value

##### max?

`number`

the maximum random value

#### Returns

`T`

a instance with random values between min and max

#### Inherited from

`TensorStatic.Random`

***

### RandomToRef()

> **RandomToRef**(`min`, `max`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/tensor.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/tensor.ts#L384)

Returns a new instance with random values between min and max

#### Parameters

##### min

`number` \| `undefined`

the minimum random value

##### max

`number` \| `undefined`

the maximum random value

##### result

`T`

the result to store the random values in

#### Returns

`T`

the updated result instance

#### Inherited from

`TensorStatic.RandomToRef`
