[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinBlurPostProcess

# Class: ThinBlurPostProcess

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L9)

Post process used to apply a blur effect

## Extends

- [`EffectWrapper`](EffectWrapper.md)

## Constructors

### Constructor

> **new ThinBlurPostProcess**(`name`, `engine?`, `direction?`, `kernel?`, `options?`): `ThinBlurPostProcess`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L52)

Constructs a new blur post process

#### Parameters

##### name

`string`

Name of the effect

##### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\> = `null`

Engine to use to render the effect. If not provided, the last created engine will be used

##### direction?

[`Vector2`](Vector2.md)

Direction in which to apply the blur

##### kernel?

`number`

Kernel size of the blur

##### options?

[`EffectWrapperCreationOptions`](../interfaces/EffectWrapperCreationOptions.md)

Options to configure the effect

#### Returns

`ThinBlurPostProcess`

#### Overrides

[`EffectWrapper`](EffectWrapper.md).[`constructor`](EffectWrapper.md#constructor)

## Properties

### alphaMode

> **alphaMode**: `number` = `Constants.ALPHA_DISABLE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L356)

Type of alpha mode to use when applying the effect (default: Engine.ALPHA_DISABLE). Used only if useAsPostProcess is true.

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`alphaMode`](EffectWrapper.md#alphamode)

***

### direction

> **direction**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L90)

The direction in which to blur the image.

***

### onApplyObservable

> **onApplyObservable**: [`Observable`](Observable.md)\<\{ \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L388)

Event that is fired (only when the EffectWrapper is used with an EffectRenderer) right before the effect is drawn (should be used to update uniforms)

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`onApplyObservable`](EffectWrapper.md#onapplyobservable)

***

### onEffectCreatedObservable

> **onEffectCreatedObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L362)

Executed when the effect is created

#### Returns

effect that was created for this effect wrapper

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`onEffectCreatedObservable`](EffectWrapper.md#oneffectcreatedobservable)

***

### options

> `readonly` **options**: `Required`\<[`NonNullableFields`](../type-aliases/NonNullableFields.md)\<[`EffectWrapperCreationOptions`](../interfaces/EffectWrapperCreationOptions.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L367)

Options used to create the effect wrapper

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`options`](EffectWrapper.md#options)

***

### textureHeight

> **textureHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L87)

Height of the texture to apply the blur on

***

### textureWidth

> **textureWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L82)

Width of the texture to apply the blur on

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L320)

Force code to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`ForceGLSL`](EffectWrapper.md#forceglsl)

***

### FragmentUrl

> `readonly` `static` **FragmentUrl**: `"kernelBlur"` = `"kernelBlur"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L18)

The fragment shader url

***

### Samplers

> `readonly` `static` **Samplers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L28)

The list of samplers used by the effect

***

### Uniforms

> `readonly` `static` **Uniforms**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L23)

The list of uniforms used by the effect

***

### VertexUrl

> `readonly` `static` **VertexUrl**: `"kernelBlur"` = `"kernelBlur"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L13)

The vertex shader url

## Accessors

### drawWrapper

#### Get Signature

> **get** **drawWrapper**(): [`DrawWrapper`](DrawWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L381)

Get the draw wrapper associated with the effect wrapper

##### Returns

[`DrawWrapper`](DrawWrapper.md)

the draw wrapper associated with the effect wrapper

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`drawWrapper`](EffectWrapper.md#drawwrapper)

***

### effect

#### Get Signature

> **get** **effect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L393)

The underlying effect

##### Returns

[`Effect`](Effect.md)

#### Set Signature

> **set** **effect**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:397](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L397)

##### Parameters

###### effect

[`Effect`](Effect.md)

##### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`effect`](EffectWrapper.md#effect)

***

### kernel

#### Get Signature

> **get** **kernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L111)

Gets the length in pixels of the blur sample region

##### Returns

`number`

#### Set Signature

> **set** **kernel**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L95)

Sets the length in pixels of the blur sample region

##### Parameters

###### v

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L345)

Gets or sets the name of the effect wrapper

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L349)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`name`](EffectWrapper.md#name)

***

### packedFloat

#### Get Signature

> **get** **packedFloat**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L131)

Gets whether or not the blur is unpacking/repacking floats

##### Returns

`boolean`

#### Set Signature

> **set** **packedFloat**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L118)

Sets whether or not the blur needs to unpack/repack floats

##### Parameters

###### v

`boolean`

##### Returns

`void`

## Methods

### bind()

> **bind**(`noDefaultBindings?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinBlurPostProcess.ts#L135)

Binds the data to the effect.

#### Parameters

##### noDefaultBindings?

`boolean` = `false`

if true, the default bindings (scale and alpha mode) will not be set.

#### Returns

`void`

#### Overrides

[`EffectWrapper`](EffectWrapper.md).[`bind`](EffectWrapper.md#bind)

***

### dispose()

> **dispose**(`_ignored?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L652)

Disposes of the effect wrapper

#### Parameters

##### \_ignored?

`boolean` = `false`

kept for backward compatibility

#### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`dispose`](EffectWrapper.md#dispose)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L373)

Get a value indicating if the effect is ready to be used

#### Returns

`boolean`

true if the post-process is ready (shader is compiled)

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`isReady`](EffectWrapper.md#isready)

***

### updateEffect()

> **updateEffect**(`defines?`, `uniforms?`, `samplers?`, `indexParameters?`, `onCompiled?`, `onError?`, `vertexUrl?`, `fragmentUrl?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L546)

Updates the effect with the current effect wrapper compile time values and recompiles the shader.

#### Parameters

##### defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

Define statements that should be added at the beginning of the shader. (default: null)

##### uniforms?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

Set of uniform variables that will be passed to the shader. (default: null)

##### samplers?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

Set of Texture2D variables that will be passed to the shader. (default: null)

##### indexParameters?

`any`

The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined) See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx

##### onCompiled?

(`effect`) => `void`

Called when the shader has been compiled.

##### onError?

(`effect`, `errors`) => `void`

Called if there is an error when compiling a shader.

##### vertexUrl?

`string`

The url of the vertex shader to be used (default: the one given at construction time)

##### fragmentUrl?

`string`

The url of the fragment shader to be used (default: the one given at construction time)

#### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`updateEffect`](EffectWrapper.md#updateeffect)

***

### RegisterShaderCodeProcessing()

> `static` **RegisterShaderCodeProcessing**(`effectWrapperName`, `customShaderCodeProcessing?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L329)

Registers a shader code processing with an effect wrapper name.

#### Parameters

##### effectWrapperName

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

name of the effect wrapper. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to an effect wrapper name

##### customShaderCodeProcessing?

[`EffectWrapperCustomShaderCodeProcessing`](../type-aliases/EffectWrapperCustomShaderCodeProcessing.md)

shader code processing to associate to the effect wrapper name

#### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`RegisterShaderCodeProcessing`](EffectWrapper.md#registershadercodeprocessing)
