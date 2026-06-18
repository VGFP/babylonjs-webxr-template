[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UniformBuffer

# Class: UniformBuffer

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L21)

Uniform buffer objects.

Handles blocks of uniform on the GPU.

If WebGL 2 is not available, this class falls back on traditional setUniformXXX calls.

For more information, please refer to :
https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object

## Constructors

### Constructor

> **new UniformBuffer**(`engine`, `data?`, `dynamic?`, `name?`, `forceNoUniformBuffer?`, `trackUBOsInFrame?`): `UniformBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L241)

Instantiates a new Uniform buffer objects.

Handles blocks of uniform on the GPU.

If WebGL 2 is not available, this class falls back on traditional setUniformXXX calls.

For more information, please refer to :

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

Define the engine the buffer is associated with

##### data?

`number`[]

Define the data contained in the buffer

##### dynamic?

`boolean` = `false`

Define if the buffer is updatable

##### name?

`string`

to assign to the buffer (debugging purpose)

##### forceNoUniformBuffer?

`boolean` = `false`

define that this object must not rely on UBO objects

##### trackUBOsInFrame?

`boolean`

define if the UBOs should be tracked in the frame (default: undefined - will use the value from Engine._features.trackUbosInFrame)

#### Returns

`UniformBuffer`

#### See

https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object

## Properties

### updateArray

> **updateArray**: (`name`, `array`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L104)

Lambda to Update an array of number in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### array

`number`[]

#### Returns

`void`

***

### updateColor3

> **updateColor3**: (`name`, `color`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L153)

Lambda to Update vec3 of float from a Color in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### color

`IColor3Like`

##### suffix?

`string`

#### Returns

`void`

***

### updateColor4

> **updateColor4**: (`name`, `color`, `alpha`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L160)

Lambda to Update vec4 of float from a Color in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### color

`IColor3Like`

##### alpha

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateDirectColor4

> **updateDirectColor4**: (`name`, `color`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L167)

Lambda to Update vec4 of float from a Color in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### color

`IColor4Like`

##### suffix?

`string`

#### Returns

`void`

***

### updateFloat

> **updateFloat**: (`name`, `x`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L69)

Lambda to Update a single float in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateFloat2

> **updateFloat2**: (`name`, `x`, `y`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L76)

Lambda to Update a vec2 of float in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateFloat3

> **updateFloat3**: (`name`, `x`, `y`, `z`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L83)

Lambda to Update a vec3 of float in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### z

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateFloat4

> **updateFloat4**: (`name`, `x`, `y`, `z`, `w`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L90)

Lambda to Update a vec4 of float in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateFloatArray

> **updateFloatArray**: (`name`, `array`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L97)

Lambda to Update an array of float in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### array

`Float32Array`

##### suffix?

`string`

#### Returns

`void`

***

### updateInt

> **updateInt**: (`name`, `x`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L174)

Lambda to Update a int a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateInt2

> **updateInt2**: (`name`, `x`, `y`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L181)

Lambda to Update a vec2 of int in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateInt3

> **updateInt3**: (`name`, `x`, `y`, `z`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L188)

Lambda to Update a vec3 of int in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### z

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateInt4

> **updateInt4**: (`name`, `x`, `y`, `z`, `w`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L195)

Lambda to Update a vec4 of int in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateIntArray

> **updateIntArray**: (`name`, `array`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L111)

Lambda to Update an array of number in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### array

`Int32Array`

#### Returns

`void`

***

### updateMatrices

> **updateMatrices**: (`name`, `mat`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L132)

Lambda to Update an array of 4x4 Matrix in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### mat

`Float32Array`

#### Returns

`void`

***

### updateMatrix

> **updateMatrix**: (`name`, `mat`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L125)

Lambda to Update a 4x4 Matrix in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### mat

`IMatrixLike`

#### Returns

`void`

***

### updateMatrix2x2

> **updateMatrix2x2**: (`name`, `matrix`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L62)

Lambda to Update a 2x2 Matrix in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### matrix

`Float32Array`

#### Returns

`void`

***

### updateMatrix3x3

> **updateMatrix3x3**: (`name`, `matrix`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L55)

Lambda to Update a 3x3 Matrix in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### matrix

`Float32Array`

#### Returns

`void`

***

### updateUInt

> **updateUInt**: (`name`, `x`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L202)

Lambda to Update a unsigned int a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateUInt2

> **updateUInt2**: (`name`, `x`, `y`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L209)

Lambda to Update a vec2 of unsigned int in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateUInt3

> **updateUInt3**: (`name`, `x`, `y`, `z`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L216)

Lambda to Update a vec3 of unsigned int in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### z

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateUInt4

> **updateUInt4**: (`name`, `x`, `y`, `z`, `w`, `suffix?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L223)

Lambda to Update a vec4 of unsigned int in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

##### suffix?

`string`

#### Returns

`void`

***

### updateUIntArray

> **updateUIntArray**: (`name`, `array`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L118)

Lambda to Update an array of number in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### array

`Uint32Array`

#### Returns

`void`

***

### updateVector3

> **updateVector3**: (`name`, `vector`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L139)

Lambda to Update vec3 of float from a Vector in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### vector

`IVector3Like`

#### Returns

`void`

***

### updateVector4

> **updateVector4**: (`name`, `vector`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L146)

Lambda to Update vec4 of float from a Vector in a uniform buffer.
This is dynamic to allow compat with webgl 1 and 2.
You will need to pass the name of the uniform as well as the value.

#### Parameters

##### name

`string`

##### vector

`IVector4Like`

#### Returns

`void`

## Accessors

### currentEffect

#### Get Signature

> **get** **currentEffect**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L642)

Gets the current effect

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

***

### isSync

#### Get Signature

> **get** **isSync**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L334)

Indicates if the WebGL underlying uniform buffer is in sync
with the javascript cache data.

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:633](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L633)

Gets or sets the name of this buffer

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L637)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### useUbo

#### Get Signature

> **get** **useUbo**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L326)

Indicates if the buffer is using the WebGL2 UBO implementation,
or just falling back on setUniformXXX calls.

##### Returns

`boolean`

## Methods

### addColor3()

> **addColor3**(`name`, `color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L516)

Adds a vec3 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

##### color

`IColor3Like`

Define the vec3 from a Color

#### Returns

`void`

***

### addColor4()

> **addColor4**(`name`, `color`, `alpha`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:527](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L527)

Adds a vec4 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

##### color

`IColor3Like`

Define the rgb components from a Color

##### alpha

`number`

Define the a component of the vec4

#### Returns

`void`

***

### addFloat2()

> **addFloat2**(`name`, `x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:494](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L494)

Adds a vec2 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

##### x

`number`

Define the x component value of the vec2

##### y

`number`

Define the y component value of the vec2

#### Returns

`void`

***

### addFloat3()

> **addFloat3**(`name`, `x`, `y`, `z`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:506](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L506)

Adds a vec3 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

##### x

`number`

Define the x component value of the vec3

##### y

`number`

Define the y component value of the vec3

##### z

`number`

Define the z component value of the vec3

#### Returns

`void`

***

### addMatrix()

> **addMatrix**(`name`, `mat`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:484](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L484)

Adds a Matrix 4x4 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

##### mat

`IMatrixLike`

A 4x4 matrix.

#### Returns

`void`

***

### addMatrix2x2()

> **addMatrix2x2**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:554](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L554)

Adds a Matrix 2x2 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

#### Returns

`void`

***

### addMatrix3x3()

> **addMatrix3x3**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L546)

Adds a Matrix 3x3 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

#### Returns

`void`

***

### addUniform()

> **addUniform**(`name`, `size`, `arraySize?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L410)

Adds an uniform in the buffer.
Warning : the subsequents calls of this function must be in the same order as declared in the shader
for the layout to be correct ! The addUniform function only handles types like float, vec2, vec3, vec4, mat4,
meaning size=1,2,3,4 or 16. It does not handle struct types.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

##### size

`number` \| `number`[]

Data size, or data directly.

##### arraySize?

`number` = `0`

The number of elements in the array, 0 if not an array.

#### Returns

`void`

***

### addVector3()

> **addVector3**(`name`, `vector`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:537](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L537)

Adds a vec3 to the uniform buffer.

#### Parameters

##### name

`string`

Name of the uniform, as used in the uniform block in the shader.

##### vector

`IVector3Like`

Define the vec3 components from a Vector

#### Returns

`void`

***

### bindTexture()

> **bindTexture**(`name`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1152)

Sets a sampler uniform on the effect.

#### Parameters

##### name

`string`

Define the name of the sampler.

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Define the (internal) texture to set in the sampler

#### Returns

`void`

***

### bindToEffect()

> **bindToEffect**(`effect`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1172)

Associates an effect to this uniform buffer

#### Parameters

##### effect

[`Effect`](Effect.md)

Define the effect to associate the buffer to

##### name

`string`

Name of the uniform block in the shader.

#### Returns

`void`

***

### bindUniformBuffer()

> **bindUniformBuffer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1180)

Binds the current (GPU) buffer to the effect

#### Returns

`void`

***

### create()

> **create**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L561)

Effectively creates the WebGL Uniform Buffer, once layout is completed with `addUniform`.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1239)

Disposes the uniform buffer.

#### Returns

`void`

***

### getBuffer()

> **getBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L360)

The underlying WebGL Uniform buffer.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

the webgl buffer

***

### getData()

> **getData**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L352)

The data cache on JS side.

#### Returns

`Float32Array`

the underlying data as a float array

***

### getUniformNames()

> **getUniformNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L368)

The names of the uniforms in the buffer.

#### Returns

`string`[]

an array of uniform names

***

### has()

> **has**(`name`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1232)

Checks if the uniform buffer has a uniform with the given name.

#### Parameters

##### name

`string`

Name of the uniform to check

#### Returns

`boolean`

True if the uniform exists, false otherwise.

***

### isDynamic()

> **isDynamic**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L344)

Indicates if the WebGL underlying uniform buffer is dynamic.
Also, a dynamic UniformBuffer will disable cache verification and always
update the underlying WebGL uniform buffer to the GPU.

#### Returns

`boolean`

if Dynamic, otherwise false

***

### setDataBuffer()

> **setDataBuffer**(`dataBuffer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1200)

Sets the current state of the class (_bufferIndex, _buffer) to point to the data buffer passed in parameter if this buffer is one of the buffers handled by the class (meaning if it can be found in the _buffers array)
This method is meant to be able to update a buffer at any time: just call setDataBuffer to set the class in the right state, call some updateXXX methods and then call udpate() => that will update the GPU buffer on the graphic card

#### Parameters

##### dataBuffer

[`DataBuffer`](DataBuffer.md)

buffer to look for

#### Returns

`boolean`

true if the buffer has been found and the class internal state points to it, else false

***

### setTexture()

> **setTexture**(`name`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1135)

Sets a sampler uniform on the effect.

#### Parameters

##### name

`string`

Define the name of the sampler.

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Define the texture to set in the sampler

#### Returns

`void`

***

### setTextureArray()

> **setTextureArray**(`name`, `textures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1144)

Sets an array of sampler uniforms on the effect.

#### Parameters

##### name

`string`

Define the name of uniform.

##### textures

[`ThinTexture`](ThinTexture.md)[]

Define the textures to set in the array of samplers

#### Returns

`void`

***

### unbindEffect()

> **unbindEffect**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1189)

Dissociates the current effect from this uniform buffer

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:666](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L666)

Updates the WebGL Uniform Buffer on the GPU.
If the `dynamic` flag is set to true, no cache comparison is done.
Otherwise, the buffer will be updated only if the cache differs.

#### Returns

`void`

***

### updateUniform()

> **updateUniform**(`uniformName`, `data`, `size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:736](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L736)

Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.

#### Parameters

##### uniformName

`string`

Define the name of the uniform, as used in the uniform block in the shader.

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

Define the flattened data

##### size

`number`

Define the size of the data.

#### Returns

`void`

***

### updateUniformArray()

> **updateUniformArray**(`uniformName`, `data`, `size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L785)

Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.

#### Parameters

##### uniformName

`string`

Define the name of the uniform, as used in the uniform block in the shader.

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

Define the flattened data

##### size

`number`

Define the size of the data.

#### Returns

`void`

***

### updateUniformDirectly()

> **updateUniformDirectly**(`uniformName`, `data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/uniformBuffer.ts:1161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/uniformBuffer.ts#L1161)

Directly updates the value of the uniform in the cache AND on the GPU.

#### Parameters

##### uniformName

`string`

Define the name of the uniform, as used in the uniform block in the shader.

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

Define the flattened data

#### Returns

`void`
