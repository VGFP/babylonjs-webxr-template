[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ColorCurves

# Class: ColorCurves

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L13)

The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

## Constructors

### Constructor

> **new ColorCurves**(): `ColorCurves`

#### Returns

`ColorCurves`

## Properties

### PrepareUniforms

> `static` **PrepareUniforms**: (`uniformsList`) => `void` = `PrepareUniformsForColorCurves`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L401)

Prepare the list of uniforms associated with the ColorCurves effects.

#### Parameters

##### uniformsList

`string`[]

The list of uniforms used in the effect

#### Returns

`void`

## Accessors

### globalDensity

#### Get Signature

> **get** **globalDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L58)

Gets the global Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **globalDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L66)

Sets the global Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### globalExposure

#### Get Signature

> **get** **globalExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L90)

Gets the global Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **globalExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L97)

Sets the global Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### globalHue

#### Get Signature

> **get** **globalHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L42)

Gets the global Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **globalHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L49)

Sets the global Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### globalSaturation

#### Get Signature

> **get** **globalSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L74)

Gets the global Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **globalSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L81)

Sets the global Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsDensity

#### Get Signature

> **get** **highlightsDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L134)

Gets the highlights Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **highlightsDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L142)

Sets the highlights Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsExposure

#### Get Signature

> **get** **highlightsExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L165)

Gets the highlights Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **highlightsExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L172)

Sets the highlights Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsHue

#### Get Signature

> **get** **highlightsHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L118)

Gets the highlights Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **highlightsHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L125)

Sets the highlights Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsSaturation

#### Get Signature

> **get** **highlightsSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L150)

Gets the highlights Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **highlightsSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L157)

Sets the highlights Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesDensity

#### Get Signature

> **get** **midtonesDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L209)

Gets the midtones Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **midtonesDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L217)

Sets the midtones Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesExposure

#### Get Signature

> **get** **midtonesExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L240)

Gets the midtones Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **midtonesExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L247)

Sets the midtones Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesHue

#### Get Signature

> **get** **midtonesHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L193)

Gets the midtones Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **midtonesHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L200)

Sets the midtones Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesSaturation

#### Get Signature

> **get** **midtonesSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L225)

Gets the midtones Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **midtonesSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L232)

Sets the midtones Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsDensity

#### Get Signature

> **get** **shadowsDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L277)

Gets the shadows Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **shadowsDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L285)

Sets the shadows Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsExposure

#### Get Signature

> **get** **shadowsExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L308)

Gets the shadows Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **shadowsExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:315](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L315)

Sets the shadows Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsHue

#### Get Signature

> **get** **shadowsHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L261)

Gets the shadows Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **shadowsHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L268)

Sets the shadows Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsSaturation

#### Get Signature

> **get** **shadowsSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L293)

Gets the shadows Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **shadowsSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L300)

Sets the shadows Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### clone()

> **clone**(): `ColorCurves`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L540)

Clones the current color curve instance.

#### Returns

`ColorCurves`

The cloned curves

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L324)

Returns the class name

#### Returns

`string`

The class name

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:548](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L548)

Serializes the current color curve instance to a json representation.

#### Returns

`any`

a JSON representation

***

### Bind()

> `static` **Bind**(`colorCurves`, `effect`, `positiveUniform?`, `neutralUniform?`, `negativeUniform?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L336)

Binds the color curves to the shader.

#### Parameters

##### colorCurves

`ColorCurves`

The color curve to bind

##### effect

[`Effect`](Effect.md)

The effect to bind to

##### positiveUniform?

`string` = `"vCameraColorCurvePositive"`

The positive uniform shader parameter

##### neutralUniform?

`string` = `"vCameraColorCurveNeutral"`

The neutral uniform shader parameter

##### negativeUniform?

`string` = `"vCameraColorCurveNegative"`

The negative uniform shader parameter

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`source`): `ColorCurves`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.ts:557](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/colorCurves.ts#L557)

Parses the color curve from a json representation.

#### Parameters

##### source

`any`

the JSON source to parse

#### Returns

`ColorCurves`

The parsed curves
