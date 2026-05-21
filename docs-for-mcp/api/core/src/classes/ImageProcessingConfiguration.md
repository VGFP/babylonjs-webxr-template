[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ImageProcessingConfiguration

# Class: ImageProcessingConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L21)

This groups together the common properties used for image processing either in direct forward pass
or through post processing effect depending on the use of the image processing pipeline in your scene
or not.

## Constructors

### Constructor

> **new ImageProcessingConfiguration**(): `ImageProcessingConfiguration`

#### Returns

`ImageProcessingConfiguration`

## Properties

### colorCurves

> **colorCurves**: [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L43)

Color curves setup used in the effect if colorCurvesEnabled is set to true

***

### onUpdateParameters

> **onUpdateParameters**: [`Observable`](Observable.md)\<`ImageProcessingConfiguration`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L446)

An event triggered when the configuration changes and requires Shader to Update some parameters.

***

### outputTextureHeight

> **outputTextureHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L441)

Height of the output texture used in the post process. If not provided, uses the height of the screen.

***

### outputTextureWidth

> **outputTextureWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L435)

Width of the output texture used in the post process. If not provided, uses the width of the screen.

***

### vignetteCameraFov

> **vignetteCameraFov**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L283)

Camera field of view used by the Vignette effect.

***

### vignetteCenterX

> **vignetteCenterX**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L236)

Vignette center X Offset.

***

### vignetteCenterY

> **vignetteCenterY**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L242)

Vignette center Y Offset.

***

### vignetteColor

> **vignetteColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L277)

Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
if vignetteEnabled is set to true.

***

### vignetteStretch

> **vignetteStretch**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L230)

Vignette stretch size.

***

### vignetteWeight

> **vignetteWeight**: `number` = `1.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L270)

Vignette weight or intensity of the vignette effect.

***

### PrepareSamplers

> `static` **PrepareSamplers**: (`samplersList`, `defines`) => `void` = `PrepareSamplersForImageProcessing`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:475](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L475)

Prepare the list of samplers associated with the Image Processing effects.

#### Parameters

##### samplersList

`string`[]

The list of uniforms used in the effect

##### defines

`IImageProcessingConfigurationDefines`

the list of defines currently in use

#### Returns

`void`

***

### PrepareUniforms

> `static` **PrepareUniforms**: (`uniforms`, `defines`) => `void` = `PrepareUniformsForImageProcessing`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L468)

Prepare the list of uniforms associated with the Image Processing effects.

#### Parameters

##### uniforms

`string`[]

The list of uniforms used in the effect

##### defines

`IImageProcessingConfigurationDefines`

the list of defines currently in use

#### Returns

`void`

***

### TONEMAPPING\_ACES

> `readonly` `static` **TONEMAPPING\_ACES**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L31)

ACES Tone mapping (used by default in unreal and unity). This can help getting closer
to other engines rendering to increase portability.

***

### TONEMAPPING\_KHR\_PBR\_NEUTRAL

> `readonly` `static` **TONEMAPPING\_KHR\_PBR\_NEUTRAL**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L37)

Neutral Tone mapping developped by the Khronos group in order to constrain
values between 0 and 1 without shifting Hue.

***

### TONEMAPPING\_STANDARD

> `readonly` `static` **TONEMAPPING\_STANDARD**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L25)

Default tone mapping applied in BabylonJS.

## Accessors

### applyByPostProcess

#### Get Signature

> **get** **applyByPostProcess**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L396)

Gets whether the image processing is applied through a post process or not.

##### Returns

`boolean`

#### Set Signature

> **set** **applyByPostProcess**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L402)

Sets whether the image processing is applied through a post process or not.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorCurvesEnabled

#### Get Signature

> **get** **colorCurvesEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L50)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorCurvesEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L56)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingBGR

#### Get Signature

> **get** **colorGradingBGR**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L130)

Gets whether the color grading texture contains BGR values.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingBGR**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L136)

Sets whether the color grading texture contains BGR values.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingEnabled

#### Get Signature

> **get** **colorGradingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L90)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L96)

Sets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingTexture

#### Get Signature

> **get** **colorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L70)

Color grading LUT texture used in the effect if colorGradingEnabled is set to true

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **colorGradingTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L76)

Color grading LUT texture used in the effect if colorGradingEnabled is set to true

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

***

### colorGradingWithGreenDepth

#### Get Signature

> **get** **colorGradingWithGreenDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L110)

Gets whether the color grading effect is using a green depth for the 3d Texture.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingWithGreenDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L116)

Sets whether the color grading effect is using a green depth for the 3d Texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### contrast

#### Get Signature

> **get** **contrast**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L211)

Gets the contrast used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **contrast**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L217)

Sets the contrast used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ditheringEnabled

#### Get Signature

> **get** **ditheringEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L331)

Gets whether the dithering effect is enabled.
The dithering effect can be used to reduce banding.

##### Returns

`boolean`

#### Set Signature

> **set** **ditheringEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L338)

Sets whether the dithering effect is enabled.
The dithering effect can be used to reduce banding.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ditheringIntensity

#### Get Signature

> **get** **ditheringIntensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L352)

Gets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.

##### Returns

`number`

#### Set Signature

> **set** **ditheringIntensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:358](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L358)

Sets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L151)

Gets the Exposure used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L157)

Sets the Exposure used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L416)

Gets whether the image processing is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L422)

Sets whether the image processing is enabled or not.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### skipFinalColorClamp

#### Get Signature

> **get** **skipFinalColorClamp**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:374](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L374)

If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
Applies to PBR materials.

##### Returns

`boolean`

#### Set Signature

> **set** **skipFinalColorClamp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L381)

If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
Applies to PBR materials.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### toneMappingEnabled

#### Get Signature

> **get** **toneMappingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L171)

Gets whether the tone mapping effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **toneMappingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L177)

Sets whether the tone mapping effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### toneMappingType

#### Get Signature

> **get** **toneMappingType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L191)

Gets the type of tone mapping effect.

##### Returns

`number`

#### Set Signature

> **set** **toneMappingType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L197)

Sets the type of tone mapping effect used in BabylonJS.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteBlendMode

#### Get Signature

> **get** **vignetteBlendMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L290)

Gets the vignette blend mode allowing different kind of effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteBlendMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L296)

Sets the vignette blend mode allowing different kind of effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreX

#### Get Signature

> **get** **vignetteCentreX**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L259)

Back Compat: Vignette center X Offset.

##### Deprecated

use vignetteCenterX instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L262)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreY

#### Get Signature

> **get** **vignetteCentreY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L248)

Back Compat: Vignette center Y Offset.

##### Deprecated

use vignetteCenterY instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L251)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteEnabled

#### Get Signature

> **get** **vignetteEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L310)

Gets whether the vignette effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **vignetteEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L316)

Sets whether the vignette effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### VIGNETTEMODE\_MULTIPLY

#### Get Signature

> **get** `static` **VIGNETTEMODE\_MULTIPLY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:645](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L645)

Used to apply the vignette as a mix with the pixel color.

##### Returns

`number`

***

### VIGNETTEMODE\_OPAQUE

#### Get Signature

> **get** `static` **VIGNETTEMODE\_OPAQUE**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L652)

Used to apply the vignette as a replacement of the pixel color.

##### Returns

`number`

## Methods

### bind()

> **bind**(`effect`, `overrideAspectRatio?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L550)

Binds the image processing to the shader.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to bind to

##### overrideAspectRatio?

`number`

Override the aspect ratio of the effect

#### Returns

`void`

***

### clone()

> **clone**(): `ImageProcessingConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:608](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L608)

Clones the current image processing instance.

#### Returns

`ImageProcessingConfiguration`

The cloned image processing

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:459](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L459)

Gets the current class name.

#### Returns

`string`

"ImageProcessingConfiguration"

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L540)

Returns true if all the image processing information are ready.

#### Returns

`boolean`

True if ready, otherwise, false

***

### prepareDefines()

> **prepareDefines**(`defines`, `forPostProcess?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:482](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L482)

Prepare the list of defines associated to the shader.

#### Parameters

##### defines

`IImageProcessingConfigurationDefines`

the list of defines to complete

##### forPostProcess?

`boolean` = `false`

Define if we are currently in post process mode or not

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L616)

Serializes the current image processing instance to a json representation.

#### Returns

`any`

a JSON representation

***

### Parse()

> `static` **Parse**(`source`): `ImageProcessingConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/imageProcessingConfiguration.ts:625](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/imageProcessingConfiguration.ts#L625)

Parses the image processing from a json representation.

#### Parameters

##### source

`any`

the JSON source to parse

#### Returns

`ImageProcessingConfiguration`

The parsed image processing
