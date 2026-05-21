[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphMatrix3D

# Class: FlowGraphMatrix3D

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L316)

A 3x3 matrix.

## Implements

- [`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md)\<[`Vector3`](Vector3.md)\>

## Constructors

### Constructor

> **new FlowGraphMatrix3D**(`array?`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L322)

#### Parameters

##### array?

`number`[] = `...`

#### Returns

`FlowGraphMatrix3D`

## Accessors

### m

#### Get Signature

> **get** **m**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L326)

The matrix elements stored in a row-major order.

##### Returns

`number`[]

The matrix elements stored in a row-major order.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`m`](../interfaces/IFlowGraphMatrix.md#m)

## Methods

### add()

> **add**(`other`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L406)

Adds another matrix to this matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to add.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`add`](../interfaces/IFlowGraphMatrix.md#add)

***

### addToRef()

> **addToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L388)

Adds another matrix to this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to add.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`addToRef`](../interfaces/IFlowGraphMatrix.md#addtoref)

***

### asArray()

> **asArray**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:439](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L439)

Returns the matrix elements as an array.

#### Returns

`number`[]

The matrix elements as an array.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`asArray`](../interfaces/IFlowGraphMatrix.md#asarray)

***

### determinant()

> **determinant**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L455)

Computes the determinant of this matrix.

#### Returns

`number`

The determinant of the matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`determinant`](../interfaces/IFlowGraphMatrix.md#determinant)

***

### divide()

> **divide**(`other`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L384)

Divides this matrix by another matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to divide by.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`divide`](../interfaces/IFlowGraphMatrix.md#divide)

***

### divideToRef()

> **divideToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L366)

Divides this matrix by another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to divide by.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`divideToRef`](../interfaces/IFlowGraphMatrix.md#dividetoref)

***

### equals()

> **equals**(`other`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:480](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L480)

Checks if this matrix is equal to another matrix within an optional epsilon.

#### Parameters

##### other

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md)\<[`Vector3`](Vector3.md)\>

The matrix to compare with.

##### epsilon?

`number` = `0`

The optional epsilon for comparison.

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`equals`](../interfaces/IFlowGraphMatrix.md#equals)

***

### fromArray()

> **fromArray**(`array`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L443)

Sets the matrix elements from an array.

#### Parameters

##### array

`number`[]

The array containing the matrix elements.

#### Returns

`FlowGraphMatrix3D`

The updated matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`fromArray`](../interfaces/IFlowGraphMatrix.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:500](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L500)

Gets the class name of this matrix.

#### Returns

`string`

The class name.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`getClassName`](../interfaces/IFlowGraphMatrix.md#getclassname)

***

### inverse()

> **inverse**(): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L460)

Computes the inverse of this matrix.

#### Returns

`FlowGraphMatrix3D`

The inverse of the matrix.

#### Throws

Error if the matrix is not invertible.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`inverse`](../interfaces/IFlowGraphMatrix.md#inverse)

***

### multiply()

> **multiply**(`other`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L362)

Multiplies this matrix with another matrix.
To staz conform with the Matrix class, this does B * A

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to multiply with.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`multiply`](../interfaces/IFlowGraphMatrix.md#multiply)

***

### multiplyToRef()

> **multiplyToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L342)

Multiplies this matrix with another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to multiply with.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`multiplyToRef`](../interfaces/IFlowGraphMatrix.md#multiplytoref)

***

### subtract()

> **subtract**(`other`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L428)

Subtracts another matrix from this matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to subtract.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`subtract`](../interfaces/IFlowGraphMatrix.md#subtract)

***

### subtractToRef()

> **subtractToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L410)

Subtracts another matrix from this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to subtract.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`subtractToRef`](../interfaces/IFlowGraphMatrix.md#subtracttoref)

***

### toArray()

> **toArray**(`emptyArray?`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L432)

Copies the matrix elements to an array.

#### Parameters

##### emptyArray?

`number`[] = `[]`

The array to copy the elements to.

#### Returns

`number`[]

The array with the matrix elements.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`toArray`](../interfaces/IFlowGraphMatrix.md#toarray)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L504)

Returns a string representation of an object.

#### Returns

`string`

***

### transformVector()

> **transformVector**(`v`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L330)

Transforms a vector using this matrix.

#### Parameters

##### v

[`Vector3`](Vector3.md)

The vector to transform.

#### Returns

[`Vector3`](Vector3.md)

The transformed vector.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transformVector`](../interfaces/IFlowGraphMatrix.md#transformvector)

***

### transformVectorToRef()

> **transformVectorToRef**(`v`, `result`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L334)

Transforms a vector using this matrix and stores the result in a reference vector.

#### Parameters

##### v

[`Vector3`](Vector3.md)

The vector to transform.

##### result

[`Vector3`](Vector3.md)

The vector to store the result.

#### Returns

[`Vector3`](Vector3.md)

The transformed vector.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transformVectorToRef`](../interfaces/IFlowGraphMatrix.md#transformvectortoref)

***

### transpose()

> **transpose**(): `FlowGraphMatrix3D`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L450)

Transposes this matrix.

#### Returns

`FlowGraphMatrix3D`

The transposed matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transpose`](../interfaces/IFlowGraphMatrix.md#transpose)
