[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ComputeEffect

# Class: ComputeEffect

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L72)

Effect wrapping a compute shader and let execute (dispatch) the shader

## Constructors

### Constructor

> **new ComputeEffect**(`baseName`, `options`, `engine`, `key?`): `ComputeEffect`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L145)

Creates a compute effect that can be used to execute a compute shader

#### Parameters

##### baseName

`string` \| [`IComputeShaderPath`](../type-aliases/IComputeShaderPath.md)

Name of the effect

##### options

[`IComputeEffectCreationOptions`](../interfaces/IComputeEffectCreationOptions.md)

Set of all options to create the effect

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine the effect is created for

##### key?

`string` = `""`

Effect Key identifying uniquely compiled shader variants

#### Returns

`ComputeEffect`

## Properties

### defines

> **defines**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L86)

String container all the define statements that should be set on the shader.

***

### name

> **name**: `string` \| [`IComputeShaderPath`](../type-aliases/IComputeShaderPath.md)

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L82)

Name of the effect.

***

### onBindObservable

> **onBindObservable**: [`Observable`](Observable.md)\<`ComputeEffect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L111)

Observable that will be called when effect is bound.

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L90)

Callback that will be called when the shader is compiled.

***

### onCompileObservable

> **onCompileObservable**: [`Observable`](Observable.md)\<`ComputeEffect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L103)

Observable that will be called when the shader is compiled.
It is recommended to use executeWhenCompile() or to make sure that scene.isReady() is called to get this observable raised.

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L94)

Callback that will be called if an error occurs during shader compilation.

***

### onErrorObservable

> **onErrorObservable**: [`Observable`](Observable.md)\<`ComputeEffect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L107)

Observable that will be called if an error occurs during shader compilation.

***

### uniqueId

> **uniqueId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L98)

Unique ID of the effect.

***

### LogShaderCodeOnCompilationError

> `static` **LogShaderCodeOnCompilationError**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L78)

Enable logging of the shader code when a compilation error occurs

## Accessors

### computeSourceCode

#### Get Signature

> **get** **computeSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L374)

Gets the compute shader source code of this effect

##### Returns

`string`

***

### key

#### Get Signature

> **get** **key**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L242)

Unique key for this effect

##### Returns

`string`

***

### rawComputeSourceCode

#### Get Signature

> **get** **rawComputeSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L381)

Gets the compute shader source code before it has been processed by the preprocessor

##### Returns

`string`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L495)

Release all associated resources.

#### Returns

`void`

***

### executeWhenCompiled()

> **executeWhenCompiled**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L296)

Adds a callback to the onCompiled observable and call the callback immediately if already ready.

#### Parameters

##### func

(`effect`) => `void`

The callback to be used.

#### Returns

`void`

***

### getCompilationError()

> **getCompilationError**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L288)

The error from the last compilation.

#### Returns

`string`

the error string.

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L272)

The engine the effect was initialized with.

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the engine.

***

### getPipelineContext()

> **getPipelineContext**(): [`Nullable`](../type-aliases/Nullable.md)\<`IComputePipelineContext`\>

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L280)

The pipeline context for this effect

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IComputePipelineContext`\>

the associated pipeline context

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L250)

If the effect has been compiled and prepared.

#### Returns

`boolean`

if the effect is compiled and prepared.

***

### RegisterShader()

> `static` **RegisterShader**(`name`, `computeShader`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Compute/computeEffect.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Compute/computeEffect.ts#L507)

This function will add a new compute shader to the shader store

#### Parameters

##### name

`string`

the name of the shader

##### computeShader

`string`

compute shader content

#### Returns

`void`
