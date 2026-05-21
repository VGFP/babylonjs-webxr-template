[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinImageProcessingPostProcess

# Class: ThinImageProcessingPostProcess

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L37)

Post process used to apply image processing to a scene

## Extends

- [`EffectWrapper`](EffectWrapper.md)

## Constructors

### Constructor

> **new ThinImageProcessingPostProcess**(`name`, `engine?`, `options?`): `ThinImageProcessingPostProcess`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:474](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L474)

Constructs a new image processing post process

#### Parameters

##### name

`string`

Name of the effect

##### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\> = `null`

Engine to use to render the effect. If not provided, the last created engine will be used

##### options?

[`ThinImageProcessingPostProcessOptions`](../interfaces/ThinImageProcessingPostProcessOptions.md)

Options to configure the effect

#### Returns

`ThinImageProcessingPostProcess`

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

> `readonly` **options**: `Required`\<[`NonNullableFields`](../type-aliases/NonNullableFields.md)\<[`ThinImageProcessingPostProcessOptions`](../interfaces/ThinImageProcessingPostProcessOptions.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:466](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L466)

Options used to create the effect wrapper

#### Overrides

[`EffectWrapper`](EffectWrapper.md).[`options`](EffectWrapper.md#options)

***

### overrideAspectRatio?

> `optional` **overrideAspectRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:442](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L442)

Gets/sets the aspect ratio used to override the default one.

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

> `readonly` `static` **FragmentUrl**: `"imageProcessing"` = `"imageProcessing"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L41)

The fragment shader url

## Accessors

### colorCurves

#### Get Signature

> **get** **colorCurves**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L135)

Gets Color curves setup used in the effect if colorCurvesEnabled is set to true .

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

#### Set Signature

> **set** **colorCurves**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L141)

Sets Color curves setup used in the effect if colorCurvesEnabled is set to true .

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

##### Returns

`void`

***

### colorCurvesEnabled

#### Get Signature

> **get** **colorCurvesEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L148)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorCurvesEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L154)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingEnabled

#### Get Signature

> **get** **colorGradingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L174)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L180)

Gets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingTexture

#### Get Signature

> **get** **colorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L161)

Gets Color grading LUT texture used in the effect if colorGradingEnabled is set to true.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **colorGradingTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L167)

Sets Color grading LUT texture used in the effect if colorGradingEnabled is set to true.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

***

### contrast

#### Get Signature

> **get** **contrast**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L226)

Gets contrast used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **contrast**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L232)

Sets contrast used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ditheringEnabled

#### Get Signature

> **get** **ditheringEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L382)

Gets whether the dithering effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **ditheringEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L388)

Sets whether the dithering effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ditheringIntensity

#### Get Signature

> **get** **ditheringIntensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:369](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L369)

Gets intensity of the dithering effect.

##### Returns

`number`

#### Set Signature

> **set** **ditheringIntensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L375)

Sets intensity of the dithering effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

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

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L187)

Gets exposure used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L193)

Sets exposure used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fromLinearSpace

#### Get Signature

> **get** **fromLinearSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L396)

Gets whether the input of the processing is in Gamma or Linear Space.

##### Returns

`boolean`

#### Set Signature

> **set** **fromLinearSpace**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L402)

Sets whether the input of the processing is in Gamma or Linear Space.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L60)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L69)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

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

### outputTextureHeight

#### Get Signature

> **get** **outputTextureHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L428)

* Gets the height of the output texture used to store the result of the post process.

##### Returns

`number`

#### Set Signature

> **set** **outputTextureHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L435)

* Sets the height of the output texture used to store the result of the post process.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### outputTextureWidth

#### Get Signature

> **get** **outputTextureWidth**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:414](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L414)

* Gets the width of the output texture used to store the result of the post process.

##### Returns

`number`

#### Set Signature

> **set** **outputTextureWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L421)

* Sets the width of the output texture used to store the result of the post process.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### toneMappingEnabled

#### Get Signature

> **get** **toneMappingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L200)

Gets whether tonemapping is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **toneMappingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L206)

Sets whether tonemapping is enabled or not

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### toneMappingType

#### Get Signature

> **get** **toneMappingType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L213)

Gets the type of tone mapping effect.

##### Returns

`number`

#### Set Signature

> **set** **toneMappingType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L219)

Sets the type of tone mapping effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteBlendMode

#### Get Signature

> **get** **vignetteBlendMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L343)

Gets the vignette blend mode allowing different kind of effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteBlendMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L349)

Sets the vignette blend mode allowing different kind of effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCameraFov

#### Get Signature

> **get** **vignetteCameraFov**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L330)

Gets Camera field of view used by the Vignette effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteCameraFov**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L336)

Sets Camera field of view used by the Vignette effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCenterX

#### Get Signature

> **get** **vignetteCenterX**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L292)

Vignette center X Offset.

##### Returns

`number`

#### Set Signature

> **set** **vignetteCenterX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L295)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCenterY

#### Get Signature

> **get** **vignetteCenterY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L282)

Vignette center Y Offset.

##### Returns

`number`

#### Set Signature

> **set** **vignetteCenterY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L285)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreX

#### Get Signature

> **get** **vignetteCentreX**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L253)

Gets Vignette center X Offset.

##### Deprecated

use vignetteCenterX instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L260)

Sets Vignette center X Offset.

##### Deprecated

use vignetteCenterX instead

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreY

#### Get Signature

> **get** **vignetteCentreY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L268)

Gets Vignette center Y Offset.

##### Deprecated

use vignetteCenterY instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L275)

Sets Vignette center Y Offset.

##### Deprecated

use vignetteCenterY instead

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteColor

#### Get Signature

> **get** **vignetteColor**(): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L316)

Gets Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
if vignetteEnabled is set to true.

##### Returns

[`Color4`](Color4.md)

#### Set Signature

> **set** **vignetteColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L323)

Sets Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
if vignetteEnabled is set to true.

##### Parameters

###### value

[`Color4`](Color4.md)

##### Returns

`void`

***

### vignetteEnabled

#### Get Signature

> **get** **vignetteEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L356)

Gets whether the vignette effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **vignetteEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L362)

Sets whether the vignette effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### vignetteStretch

#### Get Signature

> **get** **vignetteStretch**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L239)

Gets Vignette stretch size.

##### Returns

`number`

#### Set Signature

> **set** **vignetteStretch**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L245)

Sets Vignette stretch size.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteWeight

#### Get Signature

> **get** **vignetteWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L302)

Gets Vignette weight or intensity of the vignette effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L308)

Sets Vignette weight or intensity of the vignette effect.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### bind()

> **bind**(`noDefaultBindings?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:536](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L536)

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

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:541](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L541)

Disposes of the effect wrapper

#### Returns

`void`

#### Overrides

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
