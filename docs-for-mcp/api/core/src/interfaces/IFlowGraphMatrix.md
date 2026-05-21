[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphMatrix

# Interface: IFlowGraphMatrix\<VectorType\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L6)

Interface representing a generic flow graph matrix.

## Type Parameters

### VectorType

`VectorType`

## Properties

### m

> **m**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L10)

The matrix elements stored in a row-major order.

## Methods

### add()

> **add**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L102)

Adds another matrix to this matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to add.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### addToRef()

> **addToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L94)

Adds another matrix to this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to add.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### asArray()

> **asArray**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L34)

Returns the matrix elements as an array.

#### Returns

`number`[]

The matrix elements as an array.

***

### determinant()

> **determinant**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L133)

Computes the determinant of this matrix.

#### Returns

`number`

The determinant of the matrix.

***

### divide()

> **divide**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L85)

Divides this matrix by another matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to divide by.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### divideToRef()

> **divideToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L77)

Divides this matrix by another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to divide by.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### equals()

> **equals**(`other`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L157)

Checks if this matrix is equal to another matrix within an optional epsilon.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to compare with.

##### epsilon?

`number`

The optional epsilon for comparison.

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

***

### fromArray()

> **fromArray**(`array`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L50)

Sets the matrix elements from an array.

#### Parameters

##### array

`number`[]

The array containing the matrix elements.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The updated matrix.

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L148)

Gets the class name of this matrix.

#### Returns

`string`

The class name.

***

### inverse()

> **inverse**(): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L141)

Computes the inverse of this matrix.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The inverse of the matrix.

#### Throws

Error if the matrix is not invertible.

***

### multiply()

> **multiply**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L68)

Multiplies this matrix with another matrix.
To staz conform with the Matrix class, this does B * A

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to multiply with.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### multiplyToRef()

> **multiplyToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L59)

Multiplies this matrix with another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to multiply with.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### subtract()

> **subtract**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L119)

Subtracts another matrix from this matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to subtract.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### subtractToRef()

> **subtractToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L111)

Subtracts another matrix from this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to subtract.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### toArray()

> **toArray**(`emptyArray`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L42)

Copies the matrix elements to an array.

#### Parameters

##### emptyArray

`number`[]

The array to copy the elements to.

#### Returns

`number`[]

The array with the matrix elements.

***

### transformVector()

> **transformVector**(`v`): `VectorType`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L18)

Transforms a vector using this matrix.

#### Parameters

##### v

`VectorType`

The vector to transform.

#### Returns

`VectorType`

The transformed vector.

***

### transformVectorToRef()

> **transformVectorToRef**(`v`, `result`): `VectorType`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L27)

Transforms a vector using this matrix and stores the result in a reference vector.

#### Parameters

##### v

`VectorType`

The vector to transform.

##### result

`VectorType`

The vector to store the result.

#### Returns

`VectorType`

The transformed vector.

***

### transpose()

> **transpose**(): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L126)

Transposes this matrix.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The transposed matrix.
