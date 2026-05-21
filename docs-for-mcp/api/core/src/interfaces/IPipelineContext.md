[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPipelineContext

# Interface: IPipelineContext

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L9)

Class used to store and describe the pipeline context associated with an effect

## Properties

### isAsync

> `readonly` **isAsync**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L13)

Gets a boolean indicating that this pipeline context is supporting asynchronous creating

***

### isReady

> `readonly` **isReady**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L17)

Gets a boolean indicating that the context is ready to be used (like shaders / pipelines are compiled and ready for instance)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L50)

Releases the resources associated with the pipeline.

#### Returns

`void`

***

### setArray()

> **setArray**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L184)

Sets an array on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`void`

***

### setArray2()

> **setArray2**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L191)

Sets an array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`void`

***

### setArray3()

> **setArray3**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L198)

Sets an array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`void`

***

### setArray4()

> **setArray4**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L205)

Sets an array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`void`

***

### setColor3()

> **setColor3**(`uniformName`, `color3`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L302)

Sets a Color3 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### color3

`IColor3Like`

Value to be set.

#### Returns

`void`

***

### setColor4()

> **setColor4**(`uniformName`, `color3`, `alpha`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L310)

Sets a Color4 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### color3

`IColor3Like`

Value to be set.

##### alpha

`number`

Alpha value to be set.

#### Returns

`void`

***

### setDirectColor4()

> **setDirectColor4**(`uniformName`, `color4`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L317)

Sets a Color4 on a uniform variable

#### Parameters

##### uniformName

`string`

defines the name of the variable

##### color4

`IColor4Like`

defines the value to be set

#### Returns

`void`

***

### setEngine()

> **setEngine**\<`T`\>(`engine`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L53)

set the engine, in case it is not a part of the constructor

#### Type Parameters

##### T

`T` *extends* [`AbstractEngine`](../classes/AbstractEngine.md)

#### Parameters

##### engine

`T`

#### Returns

`void`

***

### setFloat()

> **setFloat**(`uniformName`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L240)

Sets a float on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### value

`number`

value to be set.

#### Returns

`void`

***

### setFloat2()

> **setFloat2**(`uniformName`, `x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L255)

Sets a float2 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First float in float2.

##### y

`number`

Second float in float2.

#### Returns

`void`

***

### setFloat3()

> **setFloat3**(`uniformName`, `x`, `y`, `z`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L271)

Sets a float3 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First float in float3.

##### y

`number`

Second float in float3.

##### z

`number`

Third float in float3.

#### Returns

`void`

***

### setFloat4()

> **setFloat4**(`uniformName`, `x`, `y`, `z`, `w`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L295)

Sets a float4 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First float in float4.

##### y

`number`

Second float in float4.

##### z

`number`

Third float in float4.

##### w

`number`

Fourth float in float4.

#### Returns

`void`

***

### setInt()

> **setInt**(`uniformName`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L60)

Sets an integer value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### value

`number`

Value to be set.

#### Returns

`void`

***

### setInt2()

> **setInt2**(`uniformName`, `x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L68)

Sets an int2 value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First int in int2.

##### y

`number`

Second int in int2.

#### Returns

`void`

***

### setInt3()

> **setInt3**(`uniformName`, `x`, `y`, `z`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L77)

Sets an int3 value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First int in int3.

##### y

`number`

Second int in int3.

##### z

`number`

Third int in int3.

#### Returns

`void`

***

### setInt4()

> **setInt4**(`uniformName`, `x`, `y`, `z`, `w`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L87)

Sets an int4 value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First int in int4.

##### y

`number`

Second int in int4.

##### z

`number`

Third int in int4.

##### w

`number`

Fourth int in int4.

#### Returns

`void`

***

### setIntArray()

> **setIntArray**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L94)

Sets an int array on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`void`

***

### setIntArray2()

> **setIntArray2**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L101)

Sets an int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`void`

***

### setIntArray3()

> **setIntArray3**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L108)

Sets an int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`void`

***

### setIntArray4()

> **setIntArray4**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L115)

Sets an int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`void`

***

### setMatrices()

> **setMatrices**(`uniformName`, `matrices`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L212)

Sets matrices on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrices

`Float32Array`

matrices to be set.

#### Returns

`void`

***

### setMatrix()

> **setMatrix**(`uniformName`, `matrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L219)

Sets matrix on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrix

`IMatrixLike`

matrix to be set.

#### Returns

`void`

***

### setMatrix2x2()

> **setMatrix2x2**(`uniformName`, `matrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L233)

Sets a 2x2 matrix on a uniform variable. (Specified as [1,2,3,4] will result in [1,2][3,4] matrix)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrix

`Float32Array`

matrix to be set.

#### Returns

`void`

***

### setMatrix3x3()

> **setMatrix3x3**(`uniformName`, `matrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L226)

Sets a 3x3 matrix on a uniform variable. (Specified as [1,2,3,4,5,6,7,8,9] will result in [1,2,3][4,5,6][7,8,9] matrix)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrix

`Float32Array`

matrix to be set.

#### Returns

`void`

***

### setQuaternion()

> **setQuaternion**(`uniformName`, `quaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L285)

Sets a Quaternion on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### quaternion

`IQuaternionLike`

Value to be set.

#### Returns

`void`

***

### setUInt()

> **setUInt**(`uniformName`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L122)

Sets an unsigned integer value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### value

`number`

Value to be set.

#### Returns

`void`

***

### setUInt2()

> **setUInt2**(`uniformName`, `x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L130)

Sets an unsigned int2 value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First unsigned int in uint2.

##### y

`number`

Second unsigned int in uint2.

#### Returns

`void`

***

### setUInt3()

> **setUInt3**(`uniformName`, `x`, `y`, `z`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L139)

Sets an unsigned int3 value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First unsigned int in uint3.

##### y

`number`

Second unsigned int in uint3.

##### z

`number`

Third unsigned int in uint3.

#### Returns

`void`

***

### setUInt4()

> **setUInt4**(`uniformName`, `x`, `y`, `z`, `w`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L149)

Sets an unsigned int4 value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### x

`number`

First unsigned int in uint4.

##### y

`number`

Second unsigned int in uint4.

##### z

`number`

Third unsigned int in uint4.

##### w

`number`

Fourth unsigned int in uint4.

#### Returns

`void`

***

### setUIntArray()

> **setUIntArray**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L156)

Sets an unsigned int array on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`void`

***

### setUIntArray2()

> **setUIntArray2**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L163)

Sets an unsigned int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`void`

***

### setUIntArray3()

> **setUIntArray3**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L170)

Sets an unsigned int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`void`

***

### setUIntArray4()

> **setUIntArray4**(`uniformName`, `array`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L177)

Sets an unsigned int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`void`

***

### setVector2()

> **setVector2**(`uniformName`, `vector2`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L247)

Sets a Vector2 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### vector2

`IVector2Like`

vector2 to be set.

#### Returns

`void`

***

### setVector3()

> **setVector3**(`uniformName`, `vector3`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L262)

Sets a Vector3 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### vector3

`IVector3Like`

Value to be set.

#### Returns

`void`

***

### setVector4()

> **setVector4**(`uniformName`, `vector4`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IPipelineContext.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/IPipelineContext.ts#L278)

Sets a Vector4 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### vector4

`IVector4Like`

Value to be set.

#### Returns

`void`
