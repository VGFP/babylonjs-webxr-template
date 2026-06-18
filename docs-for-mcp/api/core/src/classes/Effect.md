[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Effect

# Class: Effect

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L147)

Effect containing vertex and fragment shader that can be executed on an object.

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new Effect**(`baseName`, `attributesNamesOrOptions`, `uniformsNamesOrEngine`, `samplers?`, `engine?`, `defines?`, `fallbacks?`, `onCompiled?`, `onError?`, `indexParameters?`, `key?`, `shaderLanguage?`, `extraInitializationsAsync?`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L322)

Instantiates an effect.
An effect can be used to create/manage/execute vertex and fragment shaders.

#### Parameters

##### baseName

`string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

Name of the effect.

##### attributesNamesOrOptions

`string`[] \| [`IEffectCreationOptions`](../interfaces/IEffectCreationOptions.md)

List of attribute names that will be passed to the shader or set of all options to create the effect.

##### uniformsNamesOrEngine

`string`[] \| [`AbstractEngine`](AbstractEngine.md)

List of uniform variable names that will be passed to the shader or the engine that will be used to render effect.

##### samplers?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

List of sampler variables that will be passed to the shader.

##### engine?

[`AbstractEngine`](AbstractEngine.md)

Engine to be used to render the effect

##### defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

Define statements to be added to the shader.

##### fallbacks?

[`Nullable`](../type-aliases/Nullable.md)\<[`IEffectFallbacks`](../interfaces/IEffectFallbacks.md)\> = `null`

Possible fallbacks for this effect to improve performance when needed.

##### onCompiled?

[`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Callback that will be called when the shader is compiled.

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Callback that will be called if an error occurs during shader compilation.

##### indexParameters?

`any`

Parameters to be used with Babylons include syntax to iterate over an array (eg. {lights: 10})

##### key?

`string` = `""`

Effect Key identifying uniquely compiled shader variants

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

the language the shader is written in (default: GLSL)

##### extraInitializationsAsync?

() => `Promise`\<`void`\>

additional async code to run before preparing the effect

#### Returns

`Effect`

## Properties

### \_checkedNonFloatVertexBuffers?

> `optional` **\_checkedNonFloatVertexBuffers?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinNativeEngine.types.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/thinNativeEngine.types.ts#L9)

internal

***

### defines

> **defines**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L181)

String container all the define statements that should be set on the shader.

***

### name

> **name**: `string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L177)

Name of the effect.

***

### onBind

> **onBind**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L193)

Callback that will be called when effect is bound.

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L185)

Callback that will be called when the shader is compiled.

***

### onCompileObservable

> **onCompileObservable**: [`Observable`](Observable.md)\<`Effect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L202)

Observable that will be called when the shader is compiled.
It is recommended to use executeWhenCompile() or to make sure that scene.isReady() is called to get this observable raised.

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L189)

Callback that will be called if an error occurs during shader compilation.

***

### onErrorObservable

> **onErrorObservable**: [`Observable`](Observable.md)\<`Effect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L206)

Observable that will be called if an error occurs during shader compilation.

***

### uniqueId

> **uniqueId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L197)

Unique ID of the effect.

***

### AutomaticallyClearCodeCache

> `static` **AutomaticallyClearCodeCache**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L172)

Use this with caution
See ClearCodeCache function comments

***

### IncludesShadersStore

> `static` **IncludesShadersStore**: `object` = `EngineShaderStore.IncludesShadersStore`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1578](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1578)

Store of each included file for a shader (The can be looked up using effect.key)

#### Index Signature

\[`key`: `string`\]: `string`

***

### LogShaderCodeOnCompilationError

> `static` **LogShaderCodeOnCompilationError**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L160)

Enable logging of the shader code when a compilation error occurs

***

### PersistentMode

> `static` **PersistentMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L166)

Gets or sets a boolean indicating that effect ref counting is disabled
If true, the effect will persist in memory until engine is disposed

***

### ShadersStore

> `static` **ShadersStore**: `object` = `EngineShaderStore.ShadersStore`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1574)

Store of each shader (The can be looked up using effect.key)

#### Index Signature

\[`key`: `string`\]: `string`

## Accessors

### fragmentSourceCode

#### Get Signature

> **get** **fragmentSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L680)

Gets the fragment shader source code of this effect
This is the final source code that will be compiled, after all the processing has been done (pre-processing applied, code injection/replacement, etc)

##### Returns

`string`

***

### fragmentSourceCodeBeforeMigration

#### Get Signature

> **get** **fragmentSourceCodeBeforeMigration**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:700](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L700)

Gets the fragment shader source code before migration.
This is the source code after the include directives have been replaced by their contents but before the code is migrated, i.e. before ShaderProcess._ProcessShaderConversion is executed.
This method is, among other things, responsible for parsing #if/#define directives as well as converting GLES2 syntax to GLES3 (in the case of WebGL).

##### Returns

`string`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L216)

Gets a boolean indicating that the effect was already disposed

##### Returns

`boolean`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:976](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L976)

Checks if the effect is supported. (Must be called after compilation)

##### Returns

`boolean`

***

### key

#### Get Signature

> **get** **key**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L473)

Unique key for this effect

##### Returns

`string`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<`Effect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L226)

Observable that will be called when effect is bound.

##### Returns

[`Observable`](Observable.md)\<`Effect`\>

***

### rawFragmentSourceCode

#### Get Signature

> **get** **rawFragmentSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:714](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L714)

Gets the fragment shader source code before it has been modified by any processing

##### Returns

`string`

***

### rawVertexSourceCode

#### Get Signature

> **get** **rawVertexSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:707](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L707)

Gets the vertex shader source code before it has been modified by any processing

##### Returns

`string`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L301)

Gets the shader language type used to write vertex and fragment source code.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### vertexSourceCode

#### Get Signature

> **get** **vertexSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:670](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L670)

Gets the vertex shader source code of this effect
This is the final source code that will be compiled, after all the processing has been done (pre-processing applied, code injection/replacement, etc)

##### Returns

`string`

***

### vertexSourceCodeBeforeMigration

#### Get Signature

> **get** **vertexSourceCodeBeforeMigration**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L691)

Gets the vertex shader source code before migration.
This is the source code after the include directives have been replaced by their contents but before the code is migrated, i.e. before ShaderProcess._ProcessShaderConversion is executed.
This method is, among other things, responsible for parsing #if/#define directives as well as converting GLES2 syntax to GLES3 (in the case of WebGL).

##### Returns

`string`

***

### ShadersRepository

#### Get Signature

> **get** `static` **ShadersRepository**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L151)

Gets or sets the relative url used to load shaders if using the engine in non-minified mode

##### Returns

`string`

#### Set Signature

> **set** `static` **ShadersRepository**(`repo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L154)

##### Parameters

###### repo

`string`

##### Returns

`void`

## Methods

### allFallbacksProcessed()

> **allFallbacksProcessed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:615](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L615)

Gets a boolean indicating that all fallbacks were used during compilation

#### Returns

`boolean`

true if all fallbacks were used

***

### bindUniformBlock()

> **bindUniformBlock**(`blockName`, `index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1043)

Binds block to a uniform.

#### Parameters

##### blockName

`string`

Name of the block to bind.

##### index

`number`

Index to bind.

#### Returns

`void`

***

### bindUniformBuffer()

> **bindUniformBuffer**(`buffer`, `name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1029)

Binds a buffer to a uniform.

#### Parameters

##### buffer

[`DataBuffer`](DataBuffer.md)

Buffer to bind.

##### name

`string`

Name of the uniform variable to bind to.

#### Returns

`void`

***

### clearCodeCache()

> **clearCodeCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1513)

Use this wisely: It will remove the cached code from this effect
It is probably ok to call it if you are not using ShadowDepthWrapper or if everything is already up and running
DO NOT CALL IT if you want to have support for context lost recovery

#### Returns

`void`

***

### dispose()

> **dispose**(`force?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1524](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1524)

Release all associated resources.

#### Parameters

##### force?

`boolean` = `false`

specifies if the effect must be released no matter what

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### executeWhenCompiled()

> **executeWhenCompiled**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:633](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L633)

Adds a callback to the onCompiled observable and call the callback immediately if already ready.

#### Parameters

##### func

(`effect`) => `void`

The callback to be used.

#### Returns

`void`

***

### getAttributeLocation()

> **getAttributeLocation**(`index`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L532)

Returns the attribute at the given index.

#### Parameters

##### index

`number`

The index of the attribute.

#### Returns

`number`

The location of the attribute.

***

### getAttributeLocationByName()

> **getAttributeLocationByName**(`name`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L541)

Returns the attribute based on the name of the variable.

#### Parameters

##### name

`string`

of the attribute to look up.

#### Returns

`number`

the attribute location.

***

### getAttributesCount()

> **getAttributesCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L549)

The number of attributes.

#### Returns

`number`

the number of attributes.

***

### getAttributesNames()

> **getAttributesNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L523)

The set of names of attribute variables for the shader.

#### Returns

`string`[]

An array of attribute names.

***

### getCompilationError()

> **getCompilationError**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:607](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L607)

The error from the last compilation.

#### Returns

`string`

the error string.

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L507)

The engine the effect was initialized with.

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the engine.

***

### getIndexParameters()

> **getIndexParameters**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:599](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L599)

Returns the index parameters used to create the effect

#### Returns

`any`

The index parameters object

***

### getPipelineContext()

> **getPipelineContext**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IPipelineContext`](../interfaces/IPipelineContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L515)

The pipeline context for this effect

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IPipelineContext`](../interfaces/IPipelineContext.md)\>

the associated pipeline context

***

### getPipelineGenerationOptions()

> **getPipelineGenerationOptions**(): `IPipelineGenerationOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:722](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L722)

Gets the pipeline generation options for this effect.

#### Returns

`IPipelineGenerationOptions`

the pipeline generation options for this effect

***

### getSamplers()

> **getSamplers**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L575)

Returns an array of sampler variable names

#### Returns

`string`[]

The array of sampler variable names.

***

### getUniform()

> **getUniform**(`uniformName`): [`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:567](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L567)

Returns the attribute based on the name of the variable.

#### Parameters

##### uniformName

`string`

of the uniform to look up.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

the location of the uniform.

***

### getUniformBuffersNames()

> **getUniformBuffersNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L591)

Returns an array of uniform buffer variable names

#### Returns

`string`[]

The array of uniform buffer variable names.

***

### getUniformIndex()

> **getUniformIndex**(`uniformName`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L558)

Gets the index of a uniform variable.

#### Parameters

##### uniformName

`string`

of the uniform to look up.

#### Returns

`number`

the index.

***

### getUniformNames()

> **getUniformNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L583)

Returns an array of uniform variable names

#### Returns

`string`[]

The array of uniform variable names.

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L481)

If the effect has been compiled and prepared.

#### Returns

`boolean`

if the effect is compiled and prepared.

***

### setArray()

> **setArray**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1285)

Sets an array on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`number`[]

array to be set.

#### Returns

`Effect`

this effect.

***

### setArray2()

> **setArray2**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1296)

Sets an array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`number`[]

array to be set.

#### Returns

`Effect`

this effect.

***

### setArray3()

> **setArray3**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1307)

Sets an array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`number`[]

array to be set.

#### Returns

`Effect`

this effect.

***

### setArray4()

> **setArray4**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1318](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1318)

Sets an array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`number`[]

array to be set.

#### Returns

`Effect`

this effect.

***

### setBool()

> **setBool**(`uniformName`, `bool`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1386)

Sets a boolean on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### bool

`boolean`

value to be set.

#### Returns

`Effect`

this effect.

***

### setColor3()

> **setColor3**(`uniformName`, `color3`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1480)

Sets a Color3 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### color3

`IColor3Like`

Value to be set.

#### Returns

`Effect`

this effect.

***

### setColor4()

> **setColor4**(`uniformName`, `color3`, `alpha`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1492)

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

`Effect`

this effect.

***

### setDepthStencilTexture()

> **setDepthStencilTexture**(`channel`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.types.ts#L11)

Sets a depth stencil texture from a render target on the engine to be used in the shader.

#### Parameters

##### channel

`string`

Name of the sampler variable.

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Texture to set.

#### Returns

`void`

***

### setDirectColor4()

> **setDirectColor4**(`uniformName`, `color4`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1503](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1503)

Sets a Color4 on a uniform variable

#### Parameters

##### uniformName

`string`

defines the name of the variable

##### color4

`IColor4Like`

defines the value to be set

#### Returns

`Effect`

this effect.

***

### setFloat()

> **setFloat**(`uniformName`, `value`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1375)

Sets a float on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### value

`number`

value to be set.

#### Returns

`Effect`

this effect.

***

### setFloat2()

> **setFloat2**(`uniformName`, `x`, `y`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1409)

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

`Effect`

this effect.

***

### setFloat3()

> **setFloat3**(`uniformName`, `x`, `y`, `z`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1433)

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

`Effect`

this effect.

***

### setFloat4()

> **setFloat4**(`uniformName`, `x`, `y`, `z`, `w`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1469)

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

`Effect`

this effect.

***

### setFloatArray()

> **setFloatArray**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1241)

Sets an float array on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`Effect`

this effect.

***

### setFloatArray2()

> **setFloatArray2**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1252)

Sets an float array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`Effect`

this effect.

***

### setFloatArray3()

> **setFloatArray3**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1263)

Sets an float array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`Effect`

this effect.

***

### setFloatArray4()

> **setFloatArray4**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1274)

Sets an float array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to be set.

#### Returns

`Effect`

this effect.

***

### setInt()

> **setInt**(`uniformName`, `value`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1053](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1053)

Sets an integer value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### value

`number`

Value to be set.

#### Returns

`Effect`

this effect.

***

### setInt2()

> **setInt2**(`uniformName`, `x`, `y`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1065](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1065)

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

`Effect`

this effect.

***

### setInt3()

> **setInt3**(`uniformName`, `x`, `y`, `z`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1078](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1078)

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

`Effect`

this effect.

***

### setInt4()

> **setInt4**(`uniformName`, `x`, `y`, `z`, `w`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1092](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1092)

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

`Effect`

this effect.

***

### setIntArray()

> **setIntArray**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1103)

Sets an int array on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setIntArray2()

> **setIntArray2**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1114)

Sets an int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setIntArray3()

> **setIntArray3**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1125)

Sets an int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setIntArray4()

> **setIntArray4**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1136)

Sets an int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Int32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setMatrices()

> **setMatrices**(`uniformName`, `matrices`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1329)

Sets matrices on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrices

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

matrices to be set.

#### Returns

`Effect`

this effect.

***

### setMatrix()

> **setMatrix**(`uniformName`, `matrix`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1340)

Sets matrix on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrix

`IMatrixLike`

matrix to be set.

#### Returns

`Effect`

this effect.

***

### setMatrix2x2()

> **setMatrix2x2**(`uniformName`, `matrix`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1363)

Sets a 2x2 matrix on a uniform variable. (Specified as [1,2,3,4] will result in [1,2][3,4] matrix)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrix

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

matrix to be set.

#### Returns

`Effect`

this effect.

***

### setMatrix3x3()

> **setMatrix3x3**(`uniformName`, `matrix`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1351)

Sets a 3x3 matrix on a uniform variable. (Specified as [1,2,3,4,5,6,7,8,9] will result in [1,2,3][4,5,6][7,8,9] matrix)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### matrix

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

matrix to be set.

#### Returns

`Effect`

this effect.

***

### setQuaternion()

> **setQuaternion**(`uniformName`, `quaternion`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1455)

Sets a Quaternion on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### quaternion

`IQuaternionLike`

Value to be set.

#### Returns

`Effect`

this effect.

***

### setTexture()

> **setTexture**(`channel`, `texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:995](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L995)

Sets a texture on the engine to be used in the shader.

#### Parameters

##### channel

`string`

Name of the sampler variable.

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Texture to set.

#### Returns

`void`

***

### setTextureArray()

> **setTextureArray**(`channel`, `textures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1004](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1004)

Sets an array of textures on the engine to be used in the shader.

#### Parameters

##### channel

`string`

Name of the variable.

##### textures

[`ThinTexture`](ThinTexture.md)[]

Textures to set.

#### Returns

`void`

***

### setTextureFromPostProcess()

> **setTextureFromPostProcess**(`channel`, `postProcess`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.types.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.types.ts#L31)

Sets a texture to be the input of the specified post process. (To use the output, pass in the next post process in the pipeline)

#### Parameters

##### channel

`string`

Name of the sampler variable.

##### postProcess

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Post process to get the input texture from.

#### Returns

`void`

***

### setTextureFromPostProcessOutput()

> **setTextureFromPostProcessOutput**(`channel`, `postProcess`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.types.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.types.ts#L39)

(Warning! setTextureFromPostProcessOutput may be desired instead)
Sets the input texture of the passed in post process to be input of this effect. (To use the output of the passed in post process use setTextureFromPostProcessOutput)

#### Parameters

##### channel

`string`

Name of the sampler variable.

##### postProcess

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Post process to get the output texture from.

#### Returns

`void`

***

### setUInt()

> **setUInt**(`uniformName`, `value`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1147)

Sets an unsigned integer value on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### value

`number`

Value to be set.

#### Returns

`Effect`

this effect.

***

### setUInt2()

> **setUInt2**(`uniformName`, `x`, `y`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1159)

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

`Effect`

this effect.

***

### setUInt3()

> **setUInt3**(`uniformName`, `x`, `y`, `z`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1172)

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

`Effect`

this effect.

***

### setUInt4()

> **setUInt4**(`uniformName`, `x`, `y`, `z`, `w`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1186)

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

`Effect`

this effect.

***

### setUIntArray()

> **setUIntArray**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1197)

Sets an unsigned int array on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setUIntArray2()

> **setUIntArray2**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1208)

Sets an unsigned int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setUIntArray3()

> **setUIntArray3**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1219)

Sets an unsigned int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setUIntArray4()

> **setUIntArray4**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1230)

Sets an unsigned int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)

#### Parameters

##### uniformName

`string`

Name of the variable.

##### array

`Uint32Array`

array to be set.

#### Returns

`Effect`

this effect.

***

### setVector2()

> **setVector2**(`uniformName`, `vector2`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1397)

Sets a Vector2 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### vector2

`IVector2Like`

vector2 to be set.

#### Returns

`Effect`

this effect.

***

### setVector3()

> **setVector3**(`uniformName`, `vector3`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1420)

Sets a Vector3 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### vector3

`IVector3Like`

Value to be set.

#### Returns

`Effect`

this effect.

***

### setVector4()

> **setVector4**(`uniformName`, `vector4`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1444)

Sets a Vector4 on a uniform variable.

#### Parameters

##### uniformName

`string`

Name of the variable.

##### vector4

`IVector4Like`

Value to be set.

#### Returns

`Effect`

this effect.

***

### whenCompiledAsync()

> **whenCompiledAsync**(): `Promise`\<`Effect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L623)

Wait until compilation before fulfilling.

#### Returns

`Promise`\<`Effect`\>

a promise to wait for completion.

***

### RegisterShader()

> `static` **RegisterShader**(`name`, `pixelShader?`, `vertexShader?`, `shaderLanguage?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1561)

This function will add a new shader to the shader store

#### Parameters

##### name

`string`

the name of the shader

##### pixelShader?

`string`

optional pixel shader content

##### vertexShader?

`string`

optional vertex shader content

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

the language the shader is written in (default: GLSL)

#### Returns

`void`

***

### ResetCache()

> `static` **ResetCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.pure.ts:1583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/effect.pure.ts#L1583)

Resets the cache of effects.

#### Returns

`void`
