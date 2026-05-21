[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Effect

# Class: Effect

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L145)

Effect containing vertex and fragment shader that can be executed on an object.

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new Effect**(`baseName`, `attributesNamesOrOptions`, `uniformsNamesOrEngine`, `samplers?`, `engine?`, `defines?`, `fallbacks?`, `onCompiled?`, `onError?`, `indexParameters?`, `key?`, `shaderLanguage?`, `extraInitializationsAsync?`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L320)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinNativeEngine.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinNativeEngine.ts#L76)

internal

***

### defines

> **defines**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L179)

String container all the define statements that should be set on the shader.

***

### name

> **name**: `string` \| [`IShaderPath`](../type-aliases/IShaderPath.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L175)

Name of the effect.

***

### onBind

> **onBind**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L191)

Callback that will be called when effect is bound.

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L183)

Callback that will be called when the shader is compiled.

***

### onCompileObservable

> **onCompileObservable**: [`Observable`](Observable.md)\<`Effect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L200)

Observable that will be called when the shader is compiled.
It is recommended to use executeWhenCompile() or to make sure that scene.isReady() is called to get this observable raised.

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L187)

Callback that will be called if an error occurs during shader compilation.

***

### onErrorObservable

> **onErrorObservable**: [`Observable`](Observable.md)\<`Effect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L204)

Observable that will be called if an error occurs during shader compilation.

***

### uniqueId

> **uniqueId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L195)

Unique ID of the effect.

***

### AutomaticallyClearCodeCache

> `static` **AutomaticallyClearCodeCache**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L170)

Use this with caution
See ClearCodeCache function comments

***

### IncludesShadersStore

> `static` **IncludesShadersStore**: `object` = `EngineShaderStore.IncludesShadersStore`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1566](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1566)

Store of each included file for a shader (The can be looked up using effect.key)

#### Index Signature

\[`key`: `string`\]: `string`

***

### LogShaderCodeOnCompilationError

> `static` **LogShaderCodeOnCompilationError**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L158)

Enable logging of the shader code when a compilation error occurs

***

### PersistentMode

> `static` **PersistentMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L164)

Gets or sets a boolean indicating that effect ref counting is disabled
If true, the effect will persist in memory until engine is disposed

***

### ShadersStore

> `static` **ShadersStore**: `object` = `EngineShaderStore.ShadersStore`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1562](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1562)

Store of each shader (The can be looked up using effect.key)

#### Index Signature

\[`key`: `string`\]: `string`

## Accessors

### fragmentSourceCode

#### Get Signature

> **get** **fragmentSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L672)

Gets the fragment shader source code of this effect
This is the final source code that will be compiled, after all the processing has been done (pre-processing applied, code injection/replacement, etc)

##### Returns

`string`

***

### fragmentSourceCodeBeforeMigration

#### Get Signature

> **get** **fragmentSourceCodeBeforeMigration**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:692](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L692)

Gets the fragment shader source code before migration.
This is the source code after the include directives have been replaced by their contents but before the code is migrated, i.e. before ShaderProcess._ProcessShaderConversion is executed.
This method is, among other things, responsible for parsing #if/#define directives as well as converting GLES2 syntax to GLES3 (in the case of WebGL).

##### Returns

`string`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L214)

Gets a boolean indicating that the effect was already disposed

##### Returns

`boolean`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:964](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L964)

Checks if the effect is supported. (Must be called after compilation)

##### Returns

`boolean`

***

### key

#### Get Signature

> **get** **key**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L465)

Unique key for this effect

##### Returns

`string`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<`Effect`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L224)

Observable that will be called when effect is bound.

##### Returns

[`Observable`](Observable.md)\<`Effect`\>

***

### rawFragmentSourceCode

#### Get Signature

> **get** **rawFragmentSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:706](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L706)

Gets the fragment shader source code before it has been modified by any processing

##### Returns

`string`

***

### rawVertexSourceCode

#### Get Signature

> **get** **rawVertexSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:699](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L699)

Gets the vertex shader source code before it has been modified by any processing

##### Returns

`string`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L299)

Gets the shader language type used to write vertex and fragment source code.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### vertexSourceCode

#### Get Signature

> **get** **vertexSourceCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L662)

Gets the vertex shader source code of this effect
This is the final source code that will be compiled, after all the processing has been done (pre-processing applied, code injection/replacement, etc)

##### Returns

`string`

***

### vertexSourceCodeBeforeMigration

#### Get Signature

> **get** **vertexSourceCodeBeforeMigration**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:683](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L683)

Gets the vertex shader source code before migration.
This is the source code after the include directives have been replaced by their contents but before the code is migrated, i.e. before ShaderProcess._ProcessShaderConversion is executed.
This method is, among other things, responsible for parsing #if/#define directives as well as converting GLES2 syntax to GLES3 (in the case of WebGL).

##### Returns

`string`

***

### ShadersRepository

#### Get Signature

> **get** `static` **ShadersRepository**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L149)

Gets or sets the relative url used to load shaders if using the engine in non-minified mode

##### Returns

`string`

#### Set Signature

> **set** `static` **ShadersRepository**(`repo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L152)

##### Parameters

###### repo

`string`

##### Returns

`void`

## Methods

### allFallbacksProcessed()

> **allFallbacksProcessed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:607](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L607)

Gets a boolean indicating that all fallbacks were used during compilation

#### Returns

`boolean`

true if all fallbacks were used

***

### bindUniformBlock()

> **bindUniformBlock**(`blockName`, `index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1031](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1031)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1017](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1017)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1501](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1501)

Use this wisely: It will remove the cached code from this effect
It is probably ok to call it if you are not using ShadowDepthWrapper or if everything is already up and running
DO NOT CALL IT if you want to have support for context lost recovery

#### Returns

`void`

***

### dispose()

> **dispose**(`force?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1512)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:625](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L625)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L524)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L533)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:541](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L541)

The number of attributes.

#### Returns

`number`

the number of attributes.

***

### getAttributesNames()

> **getAttributesNames**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:515](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L515)

The set of names of attribute variables for the shader.

#### Returns

`string`[]

An array of attribute names.

***

### getCompilationError()

> **getCompilationError**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:599](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L599)

The error from the last compilation.

#### Returns

`string`

the error string.

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:499](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L499)

The engine the effect was initialized with.

#### Returns

[`AbstractEngine`](AbstractEngine.md)

the engine.

***

### getIndexParameters()

> **getIndexParameters**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L591)

Returns the index parameters used to create the effect

#### Returns

`any`

The index parameters object

***

### getPipelineContext()

> **getPipelineContext**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IPipelineContext`](../interfaces/IPipelineContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:507](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L507)

The pipeline context for this effect

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IPipelineContext`](../interfaces/IPipelineContext.md)\>

the associated pipeline context

***

### getPipelineGenerationOptions()

> **getPipelineGenerationOptions**(): `IPipelineGenerationOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:710](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L710)

#### Returns

`IPipelineGenerationOptions`

***

### getSamplers()

> **getSamplers**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:567](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L567)

Returns an array of sampler variable names

#### Returns

`string`[]

The array of sampler variable names.

***

### getUniform()

> **getUniform**(`uniformName`): [`Nullable`](../type-aliases/Nullable.md)\<`WebGLUniformLocation`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L559)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L583)

Returns an array of uniform buffer variable names

#### Returns

`string`[]

The array of uniform buffer variable names.

***

### getUniformIndex()

> **getUniformIndex**(`uniformName`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L550)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:575](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L575)

Returns an array of uniform variable names

#### Returns

`string`[]

The array of uniform variable names.

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L473)

If the effect has been compiled and prepared.

#### Returns

`boolean`

if the effect is compiled and prepared.

***

### setArray()

> **setArray**(`uniformName`, `array`): `Effect`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1273)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1284)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1295)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1306)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1374](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1374)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1468)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1480)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L34)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1491)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1363)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1397](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1397)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1421)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1457](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1457)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1229)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1240)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1251)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1262)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1041](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1041)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1053](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1053)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1066](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1066)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1080](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1080)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1091](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1091)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1102)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1113)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1124)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1317)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1328)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1351)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1339)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1443)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:983](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L983)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:992](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L992)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L75)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L83)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1135)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1147)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1160)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1174)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1185)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1196)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1207)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1218)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1385)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1408)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1432)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:615](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L615)

Wait until compilation before fulfilling.

#### Returns

`Promise`\<`Effect`\>

a promise to wait for completion.

***

### RegisterShader()

> `static` **RegisterShader**(`name`, `pixelShader?`, `vertexShader?`, `shaderLanguage?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1549](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1549)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:1571](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L1571)

Resets the cache of effects.

#### Returns

`void`
